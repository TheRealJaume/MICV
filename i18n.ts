import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales, type Locale } from "./src/i18n";

const isPlainObject = (value: unknown) =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const deepMerge = (base: Record<string, unknown>, override: Record<string, unknown>) => {
  const result = { ...base };

  Object.keys(override).forEach((key) => {
    const baseValue = result[key];
    const overrideValue = override[key];

    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(
        baseValue as Record<string, unknown>,
        overrideValue as Record<string, unknown>
      );
    } else {
      result[key] = overrideValue;
    }
  });

  return result;
};

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const requestLocaleFn = requestLocale as unknown as
    | undefined
    | (() => Promise<string | undefined>);
  const requestLocaleValue = requestLocale as unknown as
    | undefined
    | Promise<string | undefined>;
  const requested =
    typeof requestLocaleFn === "function" ? await requestLocaleFn() : await requestLocaleValue;
  const resolved = requested ?? locale ?? defaultLocale;
  const activeLocale: Locale = locales.includes(resolved as Locale)
    ? (resolved as Locale)
    : defaultLocale;
  const fallbackLocale: Locale = activeLocale === "es" ? "en" : "es";

  const [primary, fallback] = await Promise.all([
    import(`./messages/${activeLocale}.json`),
    import(`./messages/${fallbackLocale}.json`)
  ]);

  return {
    locale: activeLocale,
    messages: deepMerge(fallback.default, primary.default),
    getMessageFallback({ namespace, key }: { namespace?: string; key: string }) {
      if (process.env.NODE_ENV === "production") return "";
      const fullKey = namespace ? `${namespace}.${key}` : key;
      console.warn(`Missing translation: ${fullKey} (${activeLocale})`);
      return `âŸ¦${fullKey}âŸ§`;
    }
  };
});

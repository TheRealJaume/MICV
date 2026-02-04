const { getRequestConfig } = require("next-intl/server");

const isPlainObject = (value) =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const deepMerge = (base, override) => {
  const result = { ...base };

  Object.keys(override).forEach((key) => {
    const baseValue = result[key];
    const overrideValue = override[key];

    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(baseValue, overrideValue);
    } else {
      result[key] = overrideValue;
    }
  });

  return result;
};

module.exports = getRequestConfig(async ({ locale }) => {
  const fallbackLocale = locale === "es" ? "en" : "es";
  const [primary, fallback] = await Promise.all([
    import(`./messages/${locale}.json`),
    import(`./messages/${fallbackLocale}.json`)
  ]);

  return {
    locale,
    messages: deepMerge(fallback.default, primary.default),
    getMessageFallback({ namespace, key }) {
      if (process.env.NODE_ENV === "production") return "";
      const fullKey = namespace ? `${namespace}.${key}` : key;
      console.warn(`Missing translation: ${fullKey} (${locale})`);
      return `⟦${fullKey}⟧`;
    }
  };
});

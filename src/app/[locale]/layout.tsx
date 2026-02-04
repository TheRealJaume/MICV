import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import { locales } from "@/i18n";
import { sectionIds } from "@/lib/sections";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const t = await getTranslations({ locale: params.locale });

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <a className="skip-link" href={`#${sectionIds.content}`}>
        {t("skipLink")}
      </a>
      {children}
    </NextIntlClientProvider>
  );
}

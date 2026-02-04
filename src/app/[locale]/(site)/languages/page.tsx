import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Languages from "@/components/sections/Languages";
import { sectionIds } from "@/lib/sections";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return buildPageMetadata({
    t,
    locale,
    path: "languages",
    titleKey: "pages.languages.title",
    descriptionKey: "pages.languages.description"
  });
}

export default function LanguagesPage() {
  return (
    <main id={sectionIds.content} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
      <Languages />
    </main>
  );
}

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Education from "@/components/sections/Education";
import { sectionIds } from "@/lib/sections";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale });

  return buildPageMetadata({
    t,
    locale: params.locale,
    path: "education",
    titleKey: "pages.education.title",
    descriptionKey: "pages.education.description"
  });
}

export default function EducationPage() {
  return (
    <main id={sectionIds.content} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
      <Education />
    </main>
  );
}

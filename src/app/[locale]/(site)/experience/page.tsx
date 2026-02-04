import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Experience from "@/components/sections/Experience";
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
    path: "experience",
    titleKey: "pages.experience.title",
    descriptionKey: "pages.experience.description"
  });
}

export default function ExperiencePage() {
  return (
    <main id={sectionIds.content} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
      <Experience />
    </main>
  );
}

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Skills from "@/components/sections/Skills";
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
    path: "skills",
    titleKey: "pages.skills.title",
    descriptionKey: "pages.skills.description"
  });
}

export default function SkillsPage() {
  return (
    <main id={sectionIds.content} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
      <Skills />
    </main>
  );
}

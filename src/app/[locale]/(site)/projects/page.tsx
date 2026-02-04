import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Projects from "@/components/sections/Projects";
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
    path: "projects",
    titleKey: "pages.projects.title",
    descriptionKey: "pages.projects.description"
  });
}

export default function ProjectsPage() {
  return (
    <main id={sectionIds.content} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
      <Projects />
    </main>
  );
}

import { getTranslations } from "next-intl/server";

import Image from "next/image";

import SectionHeader from "@/components/sections/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { sectionIds } from "@/lib/sections";
import type { LanguageItem } from "@/types/cv";

export default async function Languages() {
  const t = await getTranslations();
  const languages = t.raw("cv.languages") as LanguageItem[];

  return (
    <section id={sectionIds.languages} className="py-14">
      <SectionHeader
        eyebrow={t("sections.languages.eyebrow")}
        title={t("sections.languages.title")}
      />
      <Card className="border-border/60 bg-card/80">
        <CardContent className="grid gap-4 pt-6 md:grid-cols-3">
          {languages.map((language) => (
            <div key={language.name}>
              <div className="flex items-center gap-2">
                {language.flag ? (
                  <Image
                    src={language.flag}
                    alt={`${language.name} flag`}
                    width={20}
                    height={14}
                    className="rounded-sm border border-border/60"
                  />
                ) : null}
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  {language.name}
                </p>
              </div>
              <p className="text-base font-semibold text-foreground">{language.level}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

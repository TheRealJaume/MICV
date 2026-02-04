import { getTranslations } from "next-intl/server";

import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { sectionIds } from "@/lib/sections";
import type { Experience } from "@/types/cv";

export default async function ExperienceSection() {
  const t = await getTranslations();
  const experience = t.raw("cv.experience") as Experience[];

  return (
    <section id={sectionIds.experience} className="py-14">
      <SectionHeader
        eyebrow={t("sections.experience.eyebrow")}
        title={t("sections.experience.title")}
      />
      <Card className="mb-8 border-border/60 bg-card/80">
        <CardContent className="flex flex-col gap-3 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              {t("experience.callout.eyebrow")}
            </p>
            <p className="text-base font-semibold text-foreground">
              {t("experience.callout.title")}
            </p>
          </div>
          <p className="max-w-xl">{t("experience.callout.description")}</p>
        </CardContent>
      </Card>
      <div className="relative space-y-8 border-l border-border/60 pl-6">
        {experience.map((role) => {
          const visible = role.highlights.slice(0, 3);
          const extra = role.highlights.slice(3);

          return (
            <div key={`${role.company}-${role.role}`} className="relative">
              <Card className="border-border/60 bg-card/80">
                <CardHeader className="space-y-3">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground">{role.role}</CardTitle>
                      <p className="text-sm text-muted-foreground">{role.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {role.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    {visible.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {extra.length ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem value="more">
                        <AccordionTrigger className="text-sm text-foreground/80">
                          {t("sections.experience.more")}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {extra.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";

import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionIds } from "@/lib/sections";
import type { EducationItem } from "@/types/cv";

export default async function Education() {
  const t = await getTranslations();
  const education = t.raw("cv.education") as EducationItem[];

  return (
    <section id={sectionIds.education} className="py-14">
      <SectionHeader
        eyebrow={t("sections.education.eyebrow")}
        title={t("sections.education.title")}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Card key={item.title} className="border-border/60 bg-card/80">
            <CardHeader className="space-y-3">
              <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.institution}</p>
              <Badge variant="outline" className="w-fit">
                {item.period}
              </Badge>
            </CardHeader>
            {item.notes ? (
              <CardContent className="text-sm text-muted-foreground">{item.notes}</CardContent>
            ) : null}
          </Card>
        ))}
      </div>
      <Card className="mt-6 border-border/60 bg-card/80">
        <CardHeader className="space-y-2">
          <CardTitle className="text-lg text-foreground">
            {t("education.accelerators.title")}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {t("education.accelerators.description")}
          </p>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {(t.raw("education.accelerators.items") as string[]).map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

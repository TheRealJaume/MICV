import { getTranslations } from "next-intl/server";
import { HeartHandshake, Target, Workflow } from "lucide-react";

import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionIds } from "@/lib/sections";

export default async function About() {
  const t = await getTranslations();
  const highlights = t.raw("home.highlights.items") as string[];
  const values = [
    {
      title: t("about.values.product.title"),
      description: t("about.values.product.description"),
      icon: Target
    },
    {
      title: t("about.values.delivery.title"),
      description: t("about.values.delivery.description"),
      icon: Workflow
    },
    {
      title: t("about.values.collaboration.title"),
      description: t("about.values.collaboration.description"),
      icon: HeartHandshake
    }
  ];

  return (
    <section id={sectionIds.about} className="py-14">
      <SectionHeader eyebrow={t("sections.about.eyebrow")} title={t("sections.about.title")}>
        {t("cv.headline")}
      </SectionHeader>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border/60 bg-card/80">
          <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
            <p className="text-base text-foreground/80">{t("cv.summary")}</p>
            <div className="flex flex-wrap gap-2">
              {(t.raw("about.keywords") as string[]).map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
            <ul className="space-y-2">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">{t("about.story.title")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {(t.raw("about.story.body") as string[]).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">
                {t("about.callouts.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {(t.raw("about.callouts.items") as string[]).map((line) => (
                <div key={line} className="rounded-lg border border-border/60 bg-background/50 p-3">
                  {line}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title} className="border-border/60 bg-card/80">
            <CardContent className="space-y-3 pt-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <value.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{value.title}</p>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

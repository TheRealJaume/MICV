import { getTranslations } from "next-intl/server";

import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sectionIds } from "@/lib/sections";
import type { Skills as SkillsData } from "@/types/cv";

export default async function Skills() {
  const t = await getTranslations();
  const skills = t.raw("cv.skills") as SkillsData;

  return (
    <section id={sectionIds.skills} className="py-14">
      <SectionHeader eyebrow={t("sections.skills.eyebrow")} title={t("sections.skills.title")} />
      <Card className="border-border/60 bg-card/80">
        <CardContent className="pt-6">
          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-background/50">
              <TabsTrigger value="tech">{t("sections.skills.tabs.tech")}</TabsTrigger>
              <TabsTrigger value="product">{t("sections.skills.tabs.product")}</TabsTrigger>
            </TabsList>
            <TabsContent value="tech" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-border/60 bg-background/70">
                  <CardContent className="space-y-3 pt-6">
                    <p className="text-sm font-semibold text-foreground">
                      {t("skills.groups.core")}
                    </p>
                    <ScrollArea className="h-36 pr-4">
                      <div className="flex flex-wrap gap-2">
                        {skills.technical.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-background/70">
                  <CardContent className="space-y-3 pt-6">
                    <p className="text-sm font-semibold text-foreground">
                      {t("skills.groups.practices")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw("skills.practices") as string[]).map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="product" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-border/60 bg-background/70">
                  <CardContent className="space-y-3 pt-6">
                    <p className="text-sm font-semibold text-foreground">
                      {t("skills.groups.product")}
                    </p>
                    <ScrollArea className="h-36 pr-4">
                      <div className="flex flex-wrap gap-2">
                        {skills.product.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-background/70">
                  <CardContent className="space-y-3 pt-6">
                    <p className="text-sm font-semibold text-foreground">
                      {t("skills.groups.tooling")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw("skills.tooling") as string[]).map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-background/70 md:col-span-2">
                  <CardContent className="space-y-3 pt-6">
                    <p className="text-sm font-semibold text-foreground">
                      {t("skills.groups.soft")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw("skills.soft") as string[]).map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}

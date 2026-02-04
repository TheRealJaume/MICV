import { getTranslations } from "next-intl/server";

import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionIds } from "@/lib/sections";
import type { Project } from "@/types/cv";

export default async function Projects() {
  const t = await getTranslations();
  const projects = t.raw("cv.projects") as Project[];
  const spotlight =
    projects.find((project) => project.name.toLowerCase().includes("ypm")) ?? projects[0];

  return (
    <section id={sectionIds.projects} className="py-14">
      <SectionHeader
        eyebrow={t("sections.projects.eyebrow")}
        title={t("sections.projects.title")}
      />
      {spotlight ? (
        <Card className="mb-8 border-border/60 bg-card/80">
          <CardHeader className="space-y-2">
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
              {t("projects.spotlight")}
            </p>
            <CardTitle className="text-2xl text-foreground">{spotlight.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{spotlight.description}</p>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {spotlight.highlights.slice(0, 4).map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ) : null}
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="border-border/60 bg-card/80">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-xl text-foreground">{project.name}</CardTitle>
                {project.period ? (
                  <Badge variant="outline">
                    {project.period}
                  </Badge>
                ) : null}
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex flex-wrap gap-2">
                {project.highlights.slice(0, 3).map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

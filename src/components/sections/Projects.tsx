import { cv } from "@/content/cv";
import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="proyectos" className="py-14">
      <SectionHeader eyebrow="Impacto" title="Proyectos destacados" />
      <div className="grid gap-6 lg:grid-cols-2">
        {cv.projects.map((project) => (
          <Card key={project.name} className="border-white/10 bg-white/5">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-xl text-sand-50">{project.name}</CardTitle>
                {project.period ? (
                  <Badge variant="outline" className="text-sand-200">
                    {project.period}
                  </Badge>
                ) : null}
              </div>
              <p className="text-sm text-sand-200">{project.description}</p>
            </CardHeader>
            <CardContent className="text-sm text-sand-200">
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
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

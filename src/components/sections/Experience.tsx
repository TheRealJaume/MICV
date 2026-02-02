import { cv } from "@/content/cv";
import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function Experience() {
  return (
    <section id="experiencia" className="py-14">
      <SectionHeader eyebrow="Trayectoria" title="Experiencia profesional" />
      <div className="grid gap-6">
        {cv.experience.map((role, index) => {
          const visible = role.highlights.slice(0, 3);
          const extra = role.highlights.slice(3);

          return (
            <Card key={`${role.company}-${role.role}`} className="border-white/10 bg-white/5">
              <CardHeader className="space-y-3">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-sand-50">{role.role}</CardTitle>
                    <p className="text-sm text-sand-200">{role.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit text-sand-200">
                    {role.period}
                  </Badge>
                </div>
                {index < cv.experience.length - 1 ? <Separator className="bg-white/10" /> : null}
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-sand-200">
                <ul className="space-y-2">
                  {visible.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {extra.length ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value="more">
                      <AccordionTrigger className="text-sm text-sand-100">
                        Ver más
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {extra.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
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
          );
        })}
      </div>
    </section>
  );
}

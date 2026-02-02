import { cv } from "@/content/cv";
import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="formacion" className="py-14">
      <SectionHeader eyebrow="Educación" title="Formación" />
      <div className="grid gap-6 md:grid-cols-2">
        {cv.education.map((item) => (
          <Card key={item.title} className="border-white/10 bg-white/5">
            <CardHeader className="space-y-3">
              <CardTitle className="text-lg text-sand-50">{item.title}</CardTitle>
              <p className="text-sm text-sand-200">{item.institution}</p>
              <Badge variant="outline" className="w-fit text-sand-200">
                {item.period}
              </Badge>
            </CardHeader>
            {item.notes ? (
              <CardContent className="text-sm text-sand-200">{item.notes}</CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}

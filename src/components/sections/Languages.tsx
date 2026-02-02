import { cv } from "@/content/cv";
import SectionHeader from "@/components/sections/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

export default function Languages() {
  return (
    <section id="idiomas" className="py-14">
      <SectionHeader eyebrow="Comunicación" title="Idiomas" />
      <Card className="border-white/10 bg-white/5">
        <CardContent className="grid gap-4 pt-6 md:grid-cols-3">
          {cv.languages.map((language) => (
            <div key={language.name}>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-sand-300/80">
                {language.name}
              </p>
              <p className="text-base font-semibold text-sand-50">{language.level}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

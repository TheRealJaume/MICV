import { cv } from "@/content/cv";
import BeamsBackground from "@/components/kokonutui/beams-background";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from "@/components/ui/card";

export default function Hero() {
  return (
    <BeamsBackground className="min-h-[90vh] pb-20 pt-28">
      <header className="relative">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Product Owner</Badge>
              <Badge variant="outline">Project Manager</Badge>
              <Badge variant="outline">Backend / AI Engineer</Badge>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <div className="space-y-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-sand-300/80">
                    Currículum · Perfil híbrido
                  </p>
                  <h1 className="text-4xl font-display font-semibold tracking-tight text-sand-50 md:text-7xl">
                    {cv.name}
                  </h1>
                  <p className="text-xl text-sand-100/90 md:text-2xl">{cv.headline}</p>
                  <p className="max-w-2xl text-base leading-relaxed text-sand-200/85">
                    {cv.summary}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={`mailto:${cv.contact.email}`}>Contactar</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={cv.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="border-white/10 bg-white/5">
                  <CardHeader>
                    <CardDescription className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-sand-300/80">
                      Contacto directo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-sand-200">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-sand-400">Email</p>
                      <p className="text-base font-semibold text-sand-50">{cv.contact.email}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-sand-400">Teléfono</p>
                      <p className="text-base font-semibold text-sand-50">{cv.contact.phone}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-sand-400">LinkedIn</p>
                      <p className="text-base font-semibold text-sand-50">{cv.contact.linkedin}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Estrategia de producto</Badge>
                      <Badge variant="outline">IA aplicada</Badge>
                      <Badge variant="outline">Backend sólido</Badge>
                      <Badge variant="outline">Liderazgo ágil</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </header>
    </BeamsBackground>
  );
}

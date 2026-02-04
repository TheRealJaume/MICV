import { getTranslations } from "next-intl/server";

import { profile } from "@/content/profile";
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

export default async function Hero() {
  const t = await getTranslations();
  const badges = t.raw("hero.badges") as string[];
  const pillars = t.raw("hero.pillars") as string[];

  return (
    <BeamsBackground className="min-h-[90vh] pb-20 pt-28">
      <header className="relative">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-3">
              {badges.map((item, index) => (
                <Badge key={item} variant={index === 0 ? "secondary" : "outline"}>
                  {item}
                </Badge>
              ))}
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <div className="space-y-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-muted-foreground">
                    {t("hero.eyebrow")}
                  </p>
                  <h1 className="text-4xl font-display font-semibold tracking-tight text-foreground md:text-7xl">
                    {profile.name}
                  </h1>
                  <p className="text-xl text-foreground/80 md:text-2xl">
                    {t("cv.headline")}
                  </p>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {t("cv.summary")}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={`mailto:${profile.contact.email}`}>
                        {t("hero.cta.contact")}
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={profile.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("hero.cta.linkedin")}
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="border-border/60 bg-card/80">
                  <CardHeader>
                    <CardDescription className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-muted-foreground">
                      {t("hero.directContact")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                        {t("hero.labels.email")}
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {profile.contact.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                        {t("hero.labels.phone")}
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {profile.contact.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                        {t("hero.labels.linkedin")}
                      </p>
                      <p className="text-base font-semibold text-foreground">
                        {profile.contact.linkedin}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pillars.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
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

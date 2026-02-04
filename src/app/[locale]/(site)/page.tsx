import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Award,
  Briefcase,
  Layers3,
  Rocket,
  Shield,
  Sparkles
} from "lucide-react";

import { profile } from "@/content/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionIds } from "@/lib/sections";
import { buildPageMetadata } from "@/lib/metadata";
import type { Project, Skills as SkillsData } from "@/types/cv";

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale });

  return buildPageMetadata({
    t,
    locale: params.locale,
    path: "",
    titleKey: "pages.home.title",
    descriptionKey: "pages.home.description"
  });
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale });
  const highlights = t.raw("home.highlights.items") as string[];
  const highlightIcons = [Shield, Rocket, Layers3];
  const projects = (t.raw("cv.projects") as Project[]).slice(0, 3);
  const skills = t.raw("cv.skills") as SkillsData;
  const topSkills = skills.technical.slice(0, 8);
  const stats = [
    { label: t("home.stats.experience"), value: t("home.stats.experienceValue"), icon: Briefcase },
    { label: t("home.stats.projects"), value: t("home.stats.projectsValue"), icon: Award },
    { label: t("home.stats.focus"), value: t("home.stats.focusValue"), icon: Sparkles }
  ];

  return (
    <main id={sectionIds.content} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-28">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-muted-foreground">
            {t("home.hero.eyebrow")}
          </p>
          <h1 className="text-4xl font-display font-semibold tracking-tight text-foreground md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-xl text-foreground/80 md:text-2xl">
            {t("home.hero.headline")}
          </p>
          <div className="space-y-2 text-base leading-relaxed text-muted-foreground">
            {(t.raw("home.hero.summary") as string[]).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={`/${params.locale}/experience`}>
                {t("home.hero.ctaPrimary")}
                <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/${params.locale}/contact`}>{t("home.hero.ctaSecondary")}</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-border/60 bg-card/80">
                <CardContent className="flex items-center gap-3 pt-6">
                  <span className="rounded-full bg-primary/10 p-2 text-primary">
                    <stat.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Card className="border-border/60 bg-card/80">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">
              {t("home.highlights.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm text-muted-foreground">
            {highlights.map((item, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/50 p-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border/60 bg-card/80">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">{t("home.quickLook.projects")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            {projects.map((project) => (
              <div key={project.name} className="space-y-1">
                <p className="text-base font-semibold text-foreground">{project.name}</p>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.slice(0, 2).map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
            <Button variant="outline" asChild className="mt-4 w-fit">
              <Link href={`/${params.locale}/projects`}>{t("home.quickLook.projectsCta")}</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/80">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">{t("home.quickLook.skills")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {topSkills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
            <div className="w-full">
              <Button variant="outline" asChild className="mt-4 w-fit">
                <Link href={`/${params.locale}/skills`}>{t("home.quickLook.skillsCta")}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <Card className="border-border/60 bg-card/80">
          <CardContent className="flex flex-col items-start gap-4 py-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {t("home.cta.eyebrow")}
              </p>
              <h2 className="text-2xl font-display font-semibold text-foreground">
                {t("home.cta.title")}
              </h2>
              <p className="text-sm text-muted-foreground">{t("home.cta.description")}</p>
            </div>
            <Button asChild>
              <Link href={`/${params.locale}/contact`}>{t("home.cta.button")}</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

import { getTranslations } from "next-intl/server";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

import { profile } from "@/content/profile";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { sectionIds } from "@/lib/sections";

export default async function Contact() {
  const t = await getTranslations();

  return (
    <section id={sectionIds.contact} className="py-14">
      <SectionHeader eyebrow={t("sections.contact.eyebrow")} title={t("sections.contact.title")}>
        {t("sections.contact.description")}
      </SectionHeader>
      <Card className="border-border/60 bg-card/80">
        <CardContent className="grid gap-6 pt-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <div className="grid gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a className="hover:text-foreground" href={`mailto:${profile.contact.email}`}>
                  {profile.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  className="hover:text-foreground"
                  href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                >
                  {profile.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a
                  className="hover:text-foreground"
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{t("sections.contact.location")}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={`mailto:${profile.contact.email}`}>{t("sections.contact.actions.email")}</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  {t("sections.contact.actions.linkedin")}
                </a>
              </Button>
            </div>
          </div>
          <TooltipProvider>
            <div className="flex items-center gap-3 md:justify-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    aria-label={t("sections.contact.actions.email")}
                  >
                    <a href={`mailto:${profile.contact.email}`}>
                      <Mail />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{t("sections.contact.tooltip.email")}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    aria-label={t("sections.contact.actions.phone")}
                  >
                    <a href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}>
                      <Phone />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{t("sections.contact.tooltip.phone")}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    aria-label={t("sections.contact.actions.linkedin")}
                  >
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{t("sections.contact.tooltip.linkedin")}</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </section>
  );
}

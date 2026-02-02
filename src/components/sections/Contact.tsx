import { cv } from "@/content/cv";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-14">
      <SectionHeader eyebrow="Colaboración" title="Contacto">
        Disponible para liderar productos AI, escalar plataformas backend y conectar estrategia con ejecución.
      </SectionHeader>
      <Card className="border-white/10 bg-white/5">
        <CardContent className="flex flex-col gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`tel:${cv.contact.phone.replace(/\s+/g, "")}`}>{cv.contact.phone}</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={cv.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
          <TooltipProvider>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild aria-label="Enviar email">
                    <a href={`mailto:${cv.contact.email}`}>
                      <Mail />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild aria-label="Llamar por teléfono">
                    <a href={`tel:${cv.contact.phone.replace(/\s+/g, "")}`}>
                      <Phone />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Teléfono</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild aria-label="Ver LinkedIn">
                    <a href={cv.contact.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </section>
  );
}

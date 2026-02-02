"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, Printer } from "lucide-react";

import { cv } from "@/content/cv";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/site/ThemeToggle";

const links = [
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "formacion", label: "Formación" },
  { id: "idiomas", label: "Idiomas" },
  { id: "contacto", label: "Contacto" }
];

export default function TopNav() {
  const [active, setActive] = useState(links[0].id);
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => links.map((link) => link.id), []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.15, 0.4, 0.7] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (open) return;
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, [open]);

  useEffect(() => {
    const handleHashChange = () => {
      setOpen(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <nav className="no-print fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xs font-semibold uppercase tracking-[0.45em] text-sand-200">
          {cv.name.split(" ")[0]}
        </div>
        <div className="hidden items-center gap-6 text-[0.65rem] uppercase tracking-[0.4em] text-sand-300 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "page" : undefined}
              className={`transition hover:text-white ${
                active === link.id ? "text-white" : "text-sand-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Imprimir CV"
            onClick={() => window.print()}
          >
            <Printer />
          </Button>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10 bg-ink-950 text-sand-50">
              <SheetHeader>
                <SheetTitle className="text-sm uppercase tracking-[0.4em] text-sand-300">
                  Navegación
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4 text-sm">
                {links.map((link) => (
                  <SheetClose
                    key={link.id}
                    asChild
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      className="text-sand-200 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-8 text-xs uppercase tracking-[0.3em] text-sand-400">
                {cv.contact.email}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

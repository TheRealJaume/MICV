"use client";

import { useMemo, useState } from "react";
import { Menu, Printer } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { profile } from "@/content/profile";
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
import LanguageSwitcher from "@/components/site/LanguageSwitcher";

export default function TopNav() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "", label: t("nav.links.home") },
      { href: "about", label: t("nav.links.about") },
      { href: "experience", label: t("nav.links.experience") },
      { href: "projects", label: t("nav.links.projects") },
      { href: "skills", label: t("nav.links.skills") },
      { href: "education", label: t("nav.links.education") },
      { href: "languages", label: t("nav.links.languages") },
      { href: "contact", label: t("nav.links.contact") }
    ],
    [t]
  );

  const activePath = pathname.replace(/^\/(es|en)(?=\/|$)/, "").replace(/^\//, "");

  return (
    <nav className="no-print fixed left-0 right-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
          {profile.name.split(" ")[0]}
        </div>
        <div className="hidden items-center gap-6 text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href ? `/${link.href}` : ""}`}
              aria-current={activePath === link.href ? "page" : undefined}
              className={`transition hover:text-foreground ${
                activePath === link.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("nav.print")}
            onClick={() => window.print()}
          >
            <Printer />
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label={t("nav.menu")}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-border/60 bg-background text-foreground"
              closeLabel={t("nav.close")}
            >
              <SheetHeader>
                <SheetTitle className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                  {t("nav.navigation")}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4 text-sm">
                {links.map((link) => (
                  <SheetClose
                    key={link.href}
                    asChild
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Link
                      href={`/${locale}${link.href ? `/${link.href}` : ""}`}
                      className="text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {profile.contact.email}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

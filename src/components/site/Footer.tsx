import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server"; // <- añade setRequestLocale

import { profile } from "@/content/profile";
import { Separator } from "@/components/ui/separator";

export default async function Footer({ locale }: { locale: string }) {
  // Opcional pero recomendable (refuerza static rendering)
  setRequestLocale(locale);
  const t = await getTranslations({locale});

  const year = new Date().getFullYear();
  const links = [
    { href: "", label: t("nav.links.home") },
    { href: "about", label: t("nav.links.about") },
    { href: "experience", label: t("nav.links.experience") },
    { href: "projects", label: t("nav.links.projects") },
    { href: "skills", label: t("nav.links.skills") },
    { href: "education", label: t("nav.links.education") },
    { href: "languages", label: t("nav.links.languages") },
    { href: "contact", label: t("nav.links.contact") }
  ];

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Separator className="mb-6 bg-border/60" />
        <div className="grid gap-6 text-xs text-muted-foreground md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-2">
            <p>{t("footer.copyright", { year })}</p>
            <p>{t("footer.tagline")}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
              {t("footer.linksTitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href ? `/${link.href}` : ""}`}
                  className="transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              <a className="block" href={`mailto:${profile.contact.email}`}>
                {profile.contact.email}
              </a>
              <a
                className="block"
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.contact.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

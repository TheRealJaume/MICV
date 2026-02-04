"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

import { locales, type Locale } from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const localeCookieMaxAge = 60 * 60 * 24 * 365;

export default function LanguageSwitcher() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = useCallback(
    (nextLocale: Locale) => {
      const pathWithoutLocale = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
      const search = typeof window !== "undefined" ? window.location.search : "";
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      const nextPath = `/${nextLocale}${pathWithoutLocale || ""}${
        search ? `${search}` : ""
      }${hash}`;

      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${localeCookieMaxAge}`;
      router.replace(nextPath);
    },
    [pathname, router]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("language.switcher")}>
          <Globe />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {locales.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => handleSwitch(option)}
            className={option === locale ? "font-semibold" : undefined}
          >
            {t(`language.${option}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

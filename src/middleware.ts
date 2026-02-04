import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always"
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const pathnameLocale = request.nextUrl.pathname.split("/")[1];

  if (locales.includes(pathnameLocale as (typeof locales)[number])) {
    response.cookies.set("NEXT_LOCALE", pathnameLocale, { path: "/" });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};

import createMiddleware from "next-intl/middleware";

// Ajusta locales y defaultLocale a los tuyos
export default createMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always" // fuerza /es y /en
});

// Importante: evita que el middleware intercepte assets y rutas internas
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};

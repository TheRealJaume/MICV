import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Jaume Fabregat Marqués · Product Owner & AI / Backend Engineer",
  description:
    "Currículum profesional de Jaume Fabregat Marqués. Liderazgo de producto, gestión de proyectos e ingeniería backend/AI.",
  openGraph: {
    title: "Jaume Fabregat Marqués · Product Owner & AI / Backend Engineer",
    description:
      "Perfil híbrido: Product Owner, Project Manager y Backend/AI Engineer. Experiencia en productos digitales basados en IA.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <ThemeProvider>
          <a className="skip-link" href="#contenido">
            Saltar al contenido principal
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

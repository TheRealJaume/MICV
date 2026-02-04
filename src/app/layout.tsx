import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { defaultLocale } from "@/i18n";

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

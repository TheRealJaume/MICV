import { Outfit, Sora } from "next/font/google";
import { getLocale } from "next-intl/server";
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

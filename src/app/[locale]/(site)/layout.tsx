import { setRequestLocale } from "next-intl/server";
import TopNav from "@/components/site/TopNav";
import Footer from "@/components/site/Footer";

export default async function SiteLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const { locale } = await Promise.resolve(params);
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <TopNav />
      {children}
      <Footer locale={locale} />
    </div>
  );
}

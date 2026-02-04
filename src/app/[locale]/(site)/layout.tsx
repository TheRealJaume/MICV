import TopNav from "@/components/site/TopNav";
import Footer from "@/components/site/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}

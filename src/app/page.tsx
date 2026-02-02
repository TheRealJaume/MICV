import TopNav from "@/components/site/TopNav";
import Footer from "@/components/site/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Hero />
      <main id="contenido" className="mx-auto w-full max-w-6xl px-6">
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

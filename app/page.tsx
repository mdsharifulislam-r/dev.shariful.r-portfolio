import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,109,86,0.15),transparent_25%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

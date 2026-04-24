"use client";

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OpenToWorkBanner from "@/components/OpenToWorkBanner";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Terminal from "@/components/Terminal";
import { useTerminal } from "@/hooks/useTerminal";

export default function Home() {
  const { open, setOpen } = useTerminal();
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <CurrentlyLearning />
      <Contact />
      <Footer />
      <OpenToWorkBanner />
      <Terminal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}

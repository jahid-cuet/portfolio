// app/page.tsx
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main className="min-h-screen theme-shell selection:bg-[color:var(--accent)] selection:text-[color:var(--accent-foreground)]">
      <Navbar />
      <HomeSection />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

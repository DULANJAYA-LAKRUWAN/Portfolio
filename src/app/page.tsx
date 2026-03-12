import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceEducation from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

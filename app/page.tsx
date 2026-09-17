import NeuralBackground from "@/components/NeuralBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CertEdu from "@/components/CertEdu";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        <Nav />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <CertEdu />
        <Contact />
      </div>
    </>
  );
}

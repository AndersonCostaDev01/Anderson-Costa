import Abautme from "@/components/section/Abautme";
import Contact from "@/components/section/Contact";
import Hero from "@/components/section/Hero";
import NavBar from "@/components/section/NavBar";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Skils from "@/components/section/Skils";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <Abautme />
      <Services />
      <Skils />
      <Projects />
      <Contact />
    </>
  );
}

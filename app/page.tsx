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
      <div className="container mx-auto mt-5 w-[100%] lg:w-[70%]">
        <Abautme />
        <Services />
        <Skils />
        <Projects />
      </div>
      <Contact />
      <footer className="flex justify-center items-center p-4">
        <p>Copyright © Anderson Costa - 2025</p>
      </footer>
    </>
  );
}

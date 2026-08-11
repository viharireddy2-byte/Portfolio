import { useMemo } from "react";
import Nav from "./components/Nav";
import LineageRail from "./components/LineageRail";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { sections } from "./data/profile";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const sectionIds = useMemo(() => sections.map((s) => s.id), []);
  const { activeId, passedIds } = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">
      <Nav activeId={activeId} />
      <LineageRail activeId={activeId} passedIds={passedIds} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

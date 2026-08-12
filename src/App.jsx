import { useMemo } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import { sections } from "./data/profile";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";

function App() {
  const sectionIds = useMemo(() => sections.map((s) => s.id), []);
  const { activeId } = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-page">
      <Nav activeId={activeId} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Journey />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;

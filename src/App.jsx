import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { profile } from "./data/profile";
import Navbar from "./components/ui/Navbar";
import LoadingScreen from "./components/ui/LoadingScreen";
import BackgroundEffects from "./components/ui/BackgroundEffects";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import WhyStandOutSection from "./components/sections/WhyStandOutSection";
import EducationSection from "./components/sections/EducationSection";
import CurrentLearningSection from "./components/sections/CurrentLearningSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

const navItems = [
  { id: "hero", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "habilidades", label: "Habilidades" },
  { id: "projetos", label: "Projetos" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

function App() {
  const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const [isDark, setIsDark] = useState(storedTheme !== "light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const metaTitle = useMemo(
    () => `${profile.name} | Portfólio Profissional`,
    [],
  );

  useEffect(() => {
    document.title = metaTitle;
  }, [metaTitle]);

  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <AnimatePresence>{isLoading && <LoadingScreen key="loading" />}</AnimatePresence>
      <BackgroundEffects />
      <Navbar navItems={navItems} isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <WhyStandOutSection />
        <CurrentLearningSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer navItems={navItems} />
    </div>
  );
}

export default App;

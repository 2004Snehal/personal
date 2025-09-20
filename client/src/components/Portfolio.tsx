import { useEffect } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TimelineSection from "./TimelineSection";
import HodosSection from "./HodosSection";
import ProjectsSection from "./ProjectsSection";
import AchievementsSection from "./AchievementsSection";
import CVSection from "./CVSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Portfolio() {
  useEffect(() => {
    // Initialize theme on load
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <HodosSection />
        <ProjectsSection />
        <AchievementsSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
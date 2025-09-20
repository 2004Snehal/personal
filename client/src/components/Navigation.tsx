import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">Snehal Pal</div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-timeline"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-achievements"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "neon" | "hacker";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("neon");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Apply theme to html element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    // Add glitch effect during transition
    document.body.classList.add("flicker-once");
    
    setTimeout(() => {
      setTheme((prev) => (prev === "neon" ? "hacker" : "neon"));
      setIsTransitioning(false);
      document.body.classList.remove("flicker-once");
    }, 150);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}


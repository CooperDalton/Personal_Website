"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-4 py-2 border-2 border-current font-pixel text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        color: `var(--accent-primary)`,
        boxShadow: `0 0 12px var(--accent-primary), inset 0 0 8px var(--accent-primary)`,
        textShadow: `0 0 8px var(--accent-primary)`,
      }}
    >
      [ SWITCH THEME ]
    </button>
  );
}


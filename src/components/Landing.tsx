"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Landing() {
  const { theme } = useTheme();
  const [bootStep, setBootStep] = useState(0);
  const [showHero, setShowHero] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const bootMessages = [
    "> Initializing Wizdro OS...",
    "> Loading modules...",
    "> Fetching projects...",
    "> READY_",
  ];

  useEffect(() => {
    // Boot sequence animation
    const bootInterval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < bootMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(bootInterval);
          setTimeout(() => {
            setShowHero(true);
            setTimeout(() => {
              setShowMenu(true);
            }, 800);
          }, 500);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const menuItems = ["BLOG", "PROJECTS", "BOOKS", "HABITS", "ABOUT"];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      {/* Boot Screen */}
      <div className="w-full max-w-2xl">
        {bootMessages.slice(0, bootStep + 1).map((msg, idx) => (
          <div
            key={idx}
            className="font-mono text-sm mb-2 opacity-0 animate-[fadeIn_0.3s_ease-in_forwards]"
            style={{
              animationDelay: `${idx * 0.1}s`,
              color: idx === bootMessages.length - 1 ? `var(--accent-primary)` : `var(--text)`,
            }}
          >
            {msg}
            {idx === bootMessages.length - 1 && (
              <span className={cursorVisible ? "opacity-100" : "opacity-0"}>_</span>
            )}
          </div>
        ))}

        {/* Hero Text */}
        {showHero && (
          <div
            className="mt-12 mb-16 text-center animate-[fadeIn_0.6s_ease-in_forwards] opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <h1
              className={`font-pixel text-3xl md:text-5xl uppercase tracking-wider mb-2 glitch ${theme === "neon" ? "neon-glow" : "terminal-glow"}`}
              data-text="WIZDRO // indie dev + hacker"
              style={{
                color: `var(--text)`,
              }}
            >
              <span className="relative z-10">WIZDRO // indie dev + hacker</span>
            </h1>
          </div>
        )}

        {/* Main Menu */}
        {showMenu && (
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-[fadeIn_0.6s_ease-in_forwards] opacity-0" style={{ animationDelay: "0.4s" }}>
            {menuItems.map((item, idx) => (
              <button
                key={item}
                className="group relative px-6 py-3 border-2 border-current font-pixel text-xs uppercase tracking-wider transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  color: `var(--accent-primary)`,
                  borderColor: `var(--accent-primary)`,
                  boxShadow: `0 0 8px var(--accent-primary)`,
                  animationDelay: `${0.5 + idx * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px var(--accent-primary), 0 0 40px var(--accent-secondary), inset 0 0 12px var(--accent-primary)`;
                  e.currentTarget.style.textShadow = `0 0 12px var(--accent-primary)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 8px var(--accent-primary)`;
                  e.currentTarget.style.textShadow = `none`;
                }}
              >
                [ {item} ]
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


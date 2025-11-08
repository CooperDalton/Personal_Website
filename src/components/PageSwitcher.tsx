"use client";

import { useState } from "react";

type PageStyle = "default" | "pixel" | "game" | "arcade" | "minimalist";

interface PageSwitcherProps {
  currentStyle: PageStyle;
  onStyleChange: (style: PageStyle) => void;
}

export default function PageSwitcher({ currentStyle, onStyleChange }: PageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const styles: { value: PageStyle; label: string }[] = [
    { value: "default", label: "Default" },
    { value: "pixel", label: "Pixel" },
    { value: "game", label: "Game" },
    { value: "arcade", label: "Arcade" },
    { value: "minimalist", label: "Minimalist" },
  ];

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-2 text-xs font-mono transition-colors ${
          currentStyle === "pixel"
            ? "bg-black border-2 border-green-500 text-green-500 hover:bg-black/80 font-pixel"
            : currentStyle === "game"
            ? "bg-black border-2 border-cyan-400 text-cyan-400 hover:bg-black/80 font-pixel"
            : currentStyle === "arcade"
            ? "bg-black border-2 border-cyan-400 text-cyan-400 hover:bg-black/80 font-pixel"
            : currentStyle === "minimalist"
            ? "bg-[#0B0B0B] border border-[#1F1F1F] text-neutral-200 hover:bg-[#1F1F1F]"
            : "bg-black/50 border border-white/20 text-white hover:bg-black/70"
        }`}
        style={{ 
          fontFamily: currentStyle === "pixel" || currentStyle === "game" || currentStyle === "arcade"
            ? "var(--font-pixel)" 
            : "var(--font-code)" 
        }}
      >
        {currentStyle.toUpperCase()} ▼
      </button>
      {isOpen && (
        <div className={`mt-2 border ${
          currentStyle === "pixel"
            ? "bg-black border-2 border-green-500"
            : currentStyle === "game" || currentStyle === "arcade"
            ? "bg-black border-2 border-cyan-400"
            : currentStyle === "minimalist"
            ? "bg-[#0B0B0B] border border-[#1F1F1F]"
            : "bg-black/90 border border-white/20"
        }`}>
          {styles.map((style) => (
            <button
              key={style.value}
              onClick={() => {
                onStyleChange(style.value);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-xs transition-colors ${
                currentStyle === "pixel" || currentStyle === "game" || currentStyle === "arcade" ? "font-pixel" : "font-mono"
              } ${
                currentStyle === style.value
                  ? currentStyle === "pixel"
                    ? "bg-green-500/20 text-green-500"
                    : currentStyle === "game" || currentStyle === "arcade"
                    ? "bg-cyan-400/20 text-cyan-400"
                    : currentStyle === "minimalist"
                    ? "bg-white/10 text-white"
                    : "bg-white/20 text-white"
                  : currentStyle === "pixel"
                    ? "text-green-500/70 hover:bg-green-500/10 hover:text-green-500"
                    : currentStyle === "game" || currentStyle === "arcade"
                    ? "text-cyan-400/70 hover:bg-cyan-400/10 hover:text-cyan-400"
                    : currentStyle === "minimalist"
                    ? "text-neutral-400 hover:bg-white/5 hover:text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
              style={{ 
                fontFamily: currentStyle === "pixel" || currentStyle === "game" || currentStyle === "arcade"
                  ? "var(--font-pixel)" 
                  : "var(--font-code)" 
              }}
            >
              {style.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


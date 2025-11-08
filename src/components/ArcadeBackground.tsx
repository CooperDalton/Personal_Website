"use client";

import { useEffect, useState } from "react";

type ThemeMode = "neon" | "terminal";

interface ArcadeBackgroundProps {
  theme: ThemeMode;
}

export default function ArcadeBackground({ theme }: ArcadeBackgroundProps) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate floating pixel particles/sparks
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";
  const accentSecondary = theme === "neon" ? "#FF00C8" : "#E1FF8F";
  const bgColor = theme === "neon" ? "#0A0A0A" : "#0A0A0A";
  const gridColor = theme === "neon" ? "#161616" : "#1A1A1A";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden arcade-bg">
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${bgColor} 0%, #111 100%)`,
        }}
      />

      {/* Subtle checker/pixel grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* CRT Scanlines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            ${accentColor}15 2px,
            ${accentColor}15 4px
          )`,
        }}
      />

      {/* Phosphor texture overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating pixel sparks/particles */}
      {particles.map((particle, idx) => (
        <div
          key={idx}
          className="absolute arcade-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: accentColor,
            opacity: 0.2,
            animationDelay: `${idx * 0.15}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
            boxShadow: `0 0 ${particle.size * 1.5}px ${accentColor}`,
          }}
        />
      ))}

      {/* Bloom glows - corner accents */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] opacity-3"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-3"
        style={{
          background: `radial-gradient(circle, ${accentSecondary} 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Center ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-2"
        style={{
          background: `radial-gradient(ellipse, ${accentColor} 0%, transparent 70%)`,
          filter: "blur(100px)",
          transform: `translate(-50%, ${-50 + scrollY * 0.05}%)`,
        }}
      />

      {/* Lens distortion effect (subtle curvature) */}
      <div
        className="absolute inset-0"
        style={{
          filter: "contrast(110%) brightness(105%) saturate(110%)",
          backdropFilter: "blur(0.5px)",
        }}
      />
    </div>
  );
}


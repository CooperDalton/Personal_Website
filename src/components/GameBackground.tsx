"use client";

import { useEffect, useState } from "react";

type ThemeMode = "neon" | "terminal";

interface GameBackgroundProps {
  theme: ThemeMode;
}

export default function GameBackground({ theme }: GameBackgroundProps) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    // Generate floating pixel particles
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden pixelated">
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: theme === "neon" ? "#0B0D11" : "#0A0A0A",
        }}
      />

      {/* Subtle pixel noise texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${accentColor}22 1px, transparent 1px),
            linear-gradient(90deg, ${accentColor}22 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* CRT Scanlines */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            ${accentColor}33 2px,
            ${accentColor}33 4px
          )`,
        }}
      />

      {/* Floating pixel particles */}
      {particles.map((particle, idx) => (
        <div
          key={idx}
          className="absolute animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: accentColor,
            opacity: 0.3,
            animationDelay: `${idx * 0.2}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Corner glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-5"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-5"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

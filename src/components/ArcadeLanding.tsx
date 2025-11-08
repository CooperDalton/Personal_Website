"use client";

import { useState, useEffect } from "react";
import ArcadeBackground from "./ArcadeBackground";

type ThemeMode = "neon" | "terminal";

export default function ArcadeLanding() {
  const [theme, setTheme] = useState<ThemeMode>("neon");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "neon" ? "terminal" : "neon");
  };

  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";
  const accentSecondary = theme === "neon" ? "#FF00C8" : "#E1FF8F";
  const highlightColor = theme === "neon" ? "#FF8A00" : "#00C8A4";

  return (
    <>
      <ArcadeBackground theme={theme} />
      <main className={`min-h-screen relative z-10 arcade-theme-${theme}`}>
        {/* Fixed Header / Nav Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 arcade-nav">
          <div className="w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="font-pixel text-sm uppercase arcade-logo" style={{ color: accentColor }}>
              WIZDRO // COOPER DALTON
            </div>
            <nav className="flex gap-2 md:gap-4">
              {["BLOG", "PROJECTS", "BOOKS", "HABITS", "ABOUT"].map((item) => (
                <button
                  key={item}
                  className="arcade-nav-btn"
                  style={{ "--accent": accentColor } as React.CSSProperties}
                  onClick={() => {
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  [ {item} ]
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
          <div className="w-full max-w-6xl mx-auto text-center">
            {/* Avatar */}
            <div className="mb-8 arcade-avatar" style={{ "--accent": accentColor } as React.CSSProperties}>
              <div className="w-32 h-32 mx-auto rounded-full border-4 arcade-border-glow flex items-center justify-center text-6xl bg-black/50">
                👾
              </div>
            </div>

            {/* Hero Text */}
            <h1 className="font-pixel text-4xl md:text-6xl uppercase mb-4 arcade-title" style={{ color: accentColor }}>
              HI, I'M WIZDRO
            </h1>
            <p className="font-mono text-base md:text-lg mb-8 arcade-subtitle" style={{ color: accentSecondary }}>
              → indie dev • hacker • cs @ ucsb
            </p>

            {/* Stat Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <StatChip label="LVL 20" theme={theme} />
              <StatChip label="XP: 75%" theme={theme} />
              <StatChip label="STREAK: 14 DAYS" theme={theme} />
              <StatChip label="QUEST: 100 DAYS → $100K" theme={theme} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <ArcadeButton label="START BLOG" sectionId="blog" theme={theme} />
              <ArcadeButton label="VIEW PROJECTS" sectionId="projects" theme={theme} />
              <ArcadeButton label="TRACK PROGRESS" sectionId="habits" theme={theme} />
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="absolute top-24 right-4 arcade-btn-small"
            style={{ "--accent": accentColor } as React.CSSProperties}
          >
            [ SWITCH STYLE ]
          </button>
        </section>

        {/* Habit Tracker Panel */}
        <section id="habits" className="py-16 px-4 arcade-section">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-pixel text-2xl md:text-3xl uppercase mb-6 arcade-section-title" style={{ color: accentColor }}>
              [ HABIT SYSTEM ]
            </h2>
            <div className="arcade-panel p-6">
              <div className="space-y-4">
                <HabitBar name="CODE" progress={75} theme={theme} />
                <HabitBar name="READ" progress={100} theme={theme} />
                <HabitBar name="BUILD" progress={60} theme={theme} />
                <HabitBar name="EXERCISE" progress={40} theme={theme} />
              </div>
              <div className="mt-6 text-right">
                <span className="font-pixel text-xs" style={{ color: highlightColor }}>
                  +420 XP gained today
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 arcade-section">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-pixel text-2xl md:text-3xl uppercase mb-6 arcade-section-title" style={{ color: accentColor }}>
              [ PLAYER BIO ]
            </h2>
            <div className="arcade-panel p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-pixel text-sm uppercase mb-3" style={{ color: accentColor }}>
                    [ ORIGIN STORY ]
                  </h3>
                  <p className="font-mono text-sm md:text-base leading-relaxed mb-4" style={{ color: accentSecondary }}>
                    I'm Cooper (Wizdro), a CS student at UCSB. I build games and SaaS products, currently on a 100-day challenge to reach $100K. This site is my public dashboard—part portfolio, part progress tracker.
                  </p>
                  <h3 className="font-pixel text-sm uppercase mb-3 mt-6" style={{ color: accentColor }}>
                    [ CURRENT QUEST ]
                  </h3>
                  <p className="font-mono text-sm md:text-base leading-relaxed" style={{ color: accentSecondary }}>
                    Building in public, shipping daily, and documenting the journey. Every day counts.
                  </p>
                </div>
                <div>
                  <div className="w-32 h-32 mx-auto md:mx-0 mb-4 border-4 arcade-border-glow flex items-center justify-center text-5xl bg-black/50 rounded-full">
                    👾
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Unity", "Next.js", "TypeScript", "Supabase", "React"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 border arcade-border font-pixel text-xs"
                        style={{
                          backgroundColor: `${accentColor}15`,
                          borderColor: accentColor,
                          color: accentColor,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section id="blog" className="py-16 px-4 arcade-section bg-black/20">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-pixel text-2xl md:text-3xl uppercase arcade-section-title" style={{ color: accentColor }}>
                [ MISSION LOG ]
              </h2>
              <span className="font-mono text-xs opacity-70">SOURCE: /blog</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <BlogCard
                title="Day 14: Building Retro UI"
                date="2024-01-15"
                tag="challenge"
                theme={theme}
              />
              <BlogCard
                title="Game Dev Progress Update"
                date="2024-01-12"
                tag="build log"
                theme={theme}
              />
              <BlogCard
                title="100 Days Challenge Week 2"
                date="2024-01-10"
                tag="challenge"
                theme={theme}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 arcade-section">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-pixel text-2xl md:text-3xl uppercase mb-2 arcade-section-title" style={{ color: accentColor }}>
              [ ARTIFACTS UNLOCKED ]
            </h2>
            <p className="font-mono text-xs mb-6 opacity-70">
              Projects collected during the quest to 100k.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProjectCard
                title="Pixel Art Generator"
                description="Tool for creating retro sprites"
                tech={["React", "Canvas"]}
                theme={theme}
              />
              <ProjectCard
                title="Terminal Portfolio"
                description="Terminal-style website"
                tech={["Next.js", "TypeScript"]}
                theme={theme}
              />
              <ProjectCard
                title="Game Engine"
                description="Lightweight 2D engine"
                tech={["JavaScript", "WebGL"]}
                theme={theme}
              />
              <ProjectCard
                title="CLI Tool Suite"
                description="Productivity CLI tools"
                tech={["Node.js", "CLI"]}
                theme={theme}
              />
              <ProjectCard
                title="???"
                description="???"
                tech={[]}
                theme={theme}
                locked
              />
              <ProjectCard
                title="???"
                description="???"
                tech={[]}
                theme={theme}
                locked
              />
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="py-16 px-4 arcade-section">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="font-pixel text-2xl md:text-3xl uppercase mb-6 arcade-section-title" style={{ color: accentColor }}>
              [ DATA ARCHIVE: BOOKS ]
            </h2>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4">
                <BookCard
                  title="Clean Code"
                  author="Robert C. Martin"
                  topic="business"
                  rating={5}
                  theme={theme}
                />
                <BookCard
                  title="The Pragmatic Programmer"
                  author="Andrew Hunt"
                  topic="business"
                  rating={5}
                  theme={theme}
                />
                <BookCard
                  title="Design Patterns"
                  author="Gang of Four"
                  topic="business"
                  rating={4}
                  theme={theme}
                />
                <BookCard
                  title="You Don't Know JS"
                  author="Kyle Simpson"
                  topic="business"
                  rating={5}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Status Bar */}
        <footer className="border-t-2 arcade-border py-3 px-4 mt-16">
          <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
            <span className="font-pixel text-xs opacity-70">WIZDRO ENGINE v1.0</span>
            <span className="font-mono text-xs opacity-70">
              FPS: 60 | PING: 12ms | UPTIME: 99.9%
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}

function ArcadeButton({ label, sectionId, theme }: { label: string; sectionId?: string; theme: ThemeMode }) {
  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";

  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="arcade-btn"
      style={{ "--accent": accentColor } as React.CSSProperties}
    >
      [ {label} ]
    </button>
  );
}

function StatChip({ label, theme }: { label: string; theme: ThemeMode }) {
  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";

  return (
    <div
      className="px-4 py-2 border arcade-border font-pixel text-xs uppercase"
      style={{
        backgroundColor: `${accentColor}15`,
        borderColor: accentColor,
        color: accentColor,
      }}
    >
      {label}
    </div>
  );
}

function HabitBar({ name, progress, theme }: { name: string; progress: number; theme: ThemeMode }) {
  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";
  const filled = Math.floor(progress / 20);
  const empty = 5 - filled;

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm w-24" style={{ color: accentColor }}>{name}</span>
      <div className="flex-1 flex gap-1">
        {Array(filled)
          .fill(0)
          .map((_, i) => (
            <div
              key={`filled-${i}`}
              className="h-5 flex-1 arcade-bar-fill"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 0 8px ${accentColor}`,
              }}
            />
          ))}
        {Array(empty)
          .fill(0)
          .map((_, i) => (
            <div
              key={`empty-${i}`}
              className="h-5 flex-1 bg-black/50 border arcade-border"
            />
          ))}
      </div>
      <span className="font-mono text-xs w-12 text-right opacity-70">{progress}%</span>
    </div>
  );
}

function BlogCard({
  title,
  date,
  tag,
  theme,
}: {
  title: string;
  date: string;
  tag: string;
  theme: ThemeMode;
}) {
  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";

  return (
    <div className="arcade-panel p-4 cursor-pointer arcade-card-hover">
      <div className="font-pixel text-xs uppercase mb-2" style={{ color: accentColor }}>{tag}</div>
      <h3 className="font-mono text-sm mb-2">{title}</h3>
      <div className="flex items-center justify-between mt-4">
        <span className="font-mono text-xs opacity-70">{date}</span>
        <button className="arcade-btn-small" style={{ "--accent": accentColor } as React.CSSProperties}>
          [ READ LOG ]
        </button>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  theme,
  locked = false,
}: {
  title: string;
  description: string;
  tech: string[];
  theme: ThemeMode;
  locked?: boolean;
}) {
  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";

  return (
    <div className={`arcade-panel p-4 ${locked ? "opacity-50 blur-sm" : "cursor-pointer arcade-card-hover"}`}>
      {locked ? (
        <div className="text-center py-8">
          <div className="font-pixel text-2xl mb-2">🔒</div>
          <div className="font-pixel text-xs uppercase opacity-70">LOCKED</div>
        </div>
      ) : (
        <>
          <div className="text-3xl mb-3">🎮</div>
          <h3 className="font-pixel text-sm uppercase mb-2" style={{ color: accentColor }}>{title}</h3>
          <p className="font-mono text-xs mb-3 opacity-70">{description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 border arcade-border font-pixel text-xs"
                style={{
                  backgroundColor: `${accentColor}15`,
                  borderColor: accentColor,
                  color: accentColor,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <button className="arcade-btn-small w-full" style={{ "--accent": accentColor } as React.CSSProperties}>
            [ OPEN PROJECT ]
          </button>
        </>
      )}
    </div>
  );
}

function BookCard({
  title,
  author,
  topic,
  rating,
  theme,
}: {
  title: string;
  author: string;
  topic: string;
  rating: number;
  theme: ThemeMode;
}) {
  const accentColor = theme === "neon" ? "#00E6E6" : "#00FF9C";

  return (
    <div className="arcade-panel p-4 min-w-[280px] cursor-pointer arcade-card-hover">
      <div className="text-3xl mb-3">📚</div>
      <h3 className="font-pixel text-sm uppercase mb-1" style={{ color: accentColor }}>{title}</h3>
      <p className="font-mono text-xs mb-2 opacity-70">{author}</p>
      <div className="flex items-center justify-between mb-3">
        <span
          className="px-2 py-1 border arcade-border font-pixel text-xs"
          style={{
            backgroundColor: `${accentColor}15`,
            borderColor: accentColor,
            color: accentColor,
          }}
        >
          {topic}
        </span>
        <div className="flex gap-1">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-xs" style={{ color: accentColor }}>⭐</span>
            ))}
        </div>
      </div>
    </div>
  );
}


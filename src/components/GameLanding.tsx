"use client";

import { useState, useEffect } from "react";
import GameBackground from "./GameBackground";

type ThemeMode = "neon" | "terminal";

export default function GameLanding() {
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

  return (
    <>
      <GameBackground theme={theme} />
      <main className={`min-h-screen relative z-10 pixelated game-theme-${theme}`}>
      {/* Hero / Top HUD */}
      <section id="hero" className="min-h-screen flex flex-col px-4 py-8 relative">
        <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col md:flex-row gap-8 items-center">
          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <h1 className="font-pixel text-3xl md:text-5xl uppercase tracking-wider game-title">
              WIZDRO // PLAYER 01
            </h1>
            <p className="font-mono text-sm md:text-base game-subtitle">
              indie dev • hacker • 100 days to 100k
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <GameButton label="START BLOG" sectionId="blog" />
              <GameButton label="VIEW PROJECTS" sectionId="projects" />
              <GameButton label="TRACK PROGRESS" sectionId="habits" />
            </div>
          </div>

          {/* Right Side - Status Panel */}
          <div className="game-panel w-full md:w-80">
            <div className="space-y-4">
              <div>
                <div className="font-pixel text-xs uppercase mb-2 game-label">CHALLENGE</div>
                <div className="font-mono text-sm">Day 14 / 100</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-pixel text-xs">🔥</span>
                <span className="font-mono text-sm">Streak: 14 days</span>
              </div>
              <div>
                <div className="font-pixel text-xs uppercase mb-2 game-label">STATUS</div>
                <div className="font-mono text-sm game-status">OPERATIONAL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Toggle - Top Right */}
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 game-btn-small"
        >
          [ SWITCH THEME ]
        </button>
      </section>

      {/* Habit Tracker / Graph Panel */}
      <section id="habits" className="py-12 px-4 game-section" style={{ animationDelay: "0.1s" }}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-pixel text-xl md:text-2xl uppercase mb-2 game-section-title">
            [ HABIT SYSTEM ]
          </h2>
          <p className="font-mono text-xs mb-6 game-text-secondary">
            Public tracker so you can see if I'm actually doing the work.
          </p>
          <div className="game-panel p-6">
            <HabitTrackerGraph theme={theme} />
            <div className="mt-6 space-y-3">
              <HabitRow name="Code 1h" progress={80} theme={theme} />
              <HabitRow name="Read 10 pages" progress={100} theme={theme} />
              <HabitRow name="Exercise" progress={60} theme={theme} />
              <HabitRow name="Meditate" progress={40} theme={theme} />
            </div>
            <div className="mt-4 text-right">
              <span className="font-pixel text-xs game-accent">+420 XP gained</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Panel */}
      <section id="about" className="py-12 px-4 game-section" style={{ animationDelay: "0.2s" }}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-pixel text-xl md:text-2xl uppercase mb-6 game-section-title">
            [ PLAYER BIO ]
          </h2>
          <div className="game-panel p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="font-mono text-sm md:text-base leading-relaxed mb-4 game-text">
                  I'm Cooper (Wizdro), UCSB CS, I build games + SaaS, currently doing 100 days to 100k.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <StatChip label="LVL 20" theme={theme} />
                  <StatChip label="CLASS: DEV" theme={theme} />
                  <StatChip label="SPECIAL: UNITY / NEXT.JS" theme={theme} />
                </div>
              </div>
              <div className="w-24 h-24 bg-black/50 border-2 game-border flex items-center justify-center">
                <span className="font-pixel text-4xl">👾</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section id="blog" className="py-12 px-4 game-section bg-black/20" style={{ animationDelay: "0.3s" }}>
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-pixel text-xl md:text-2xl uppercase game-section-title">
              [ MISSION LOG ]
            </h2>
            <span className="font-mono text-xs game-text-secondary">SOURCE: /blog</span>
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

      {/* Projects Section - Game Unlock Style */}
      <section id="projects" className="py-12 px-4 game-section" style={{ animationDelay: "0.4s" }}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-pixel text-xl md:text-2xl uppercase mb-2 game-section-title">
            [ UNLOCKED PROJECTS ]
          </h2>
          <p className="font-mono text-xs mb-6 game-text-secondary">
            Artifacts collected during the quest to 100k.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Books / Reading Log */}
      <section id="books" className="py-12 px-4 game-section" style={{ animationDelay: "0.5s" }}>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-pixel text-xl md:text-2xl uppercase mb-6 game-section-title">
            [ DATA ARCHIVE: BOOKS ]
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4">
              <BookCard
                title="Clean Code"
                author="Robert C. Martin"
                takeaway="Essential principles for writing maintainable code."
                tag="business"
                theme={theme}
              />
              <BookCard
                title="The Pragmatic Programmer"
                author="Andrew Hunt"
                takeaway="Practical advice for becoming a better developer."
                tag="business"
                theme={theme}
              />
              <BookCard
                title="Design Patterns"
                author="Gang of Four"
                takeaway="Classic patterns for solving common problems."
                tag="business"
                theme={theme}
              />
              <BookCard
                title="You Don't Know JS"
                author="Kyle Simpson"
                takeaway="Deep dive into JavaScript fundamentals."
                tag="business"
                theme={theme}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Status Bar */}
      <footer className="border-t-2 game-border py-2 px-4">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-pixel text-xs game-text-secondary">WIZDRO ENGINE v1.0</span>
          <span className="font-mono text-xs game-text-secondary">FPS: 60 | PING: 12ms</span>
        </div>
      </footer>

      {/* Save Game Button */}
      <button className="fixed bottom-20 right-4 game-btn-small opacity-50 hover:opacity-100 transition-opacity">
        [ SAVE GAME ]
      </button>
      </main>
    </>
  );
}

function GameButton({ label, sectionId }: { label: string; sectionId?: string }) {
  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <button onClick={handleClick} className="game-btn">
      [ {label} ]
    </button>
  );
}

function HabitTrackerGraph({ theme }: { theme: ThemeMode }) {
  const data = [65, 80, 70, 85, 90, 75, 88]; // Last 7 days
  const maxValue = 100;

  return (
    <div className="mb-6">
      <div className="font-pixel text-xs uppercase mb-3 game-label">Last 7 Days</div>
      <div className="flex items-end gap-1 h-20">
        {data.map((value, idx) => (
          <div
            key={idx}
            className="flex-1 game-bar-fill"
            style={{
              height: `${(value / maxValue) * 100}%`,
              backgroundColor: theme === "neon" ? "#00E6E6" : "#00FF9C",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HabitRow({ name, progress, theme }: { name: string; progress: number; theme: ThemeMode }) {
  const filled = Math.floor(progress / 20);
  const empty = 5 - filled;

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs w-32 game-text">{name}</span>
      <div className="flex-1 flex gap-1">
        {Array(filled)
          .fill(0)
          .map((_, i) => (
            <div
              key={`filled-${i}`}
              className="h-4 flex-1 game-bar-fill"
              style={{
                backgroundColor: theme === "neon" ? "#00E6E6" : "#00FF9C",
              }}
            />
          ))}
        {Array(empty)
          .fill(0)
          .map((_, i) => (
            <div key={`empty-${i}`} className="h-4 flex-1 bg-black/50 border game-border" />
          ))}
      </div>
    </div>
  );
}

function StatChip({ label, theme }: { label: string; theme: ThemeMode }) {
  return (
    <div
      className="px-3 py-1 border game-border font-pixel text-xs"
      style={{
        backgroundColor: theme === "neon" ? "rgba(0, 230, 230, 0.1)" : "rgba(0, 255, 156, 0.1)",
        borderColor: theme === "neon" ? "#00E6E6" : "#00FF9C",
        color: theme === "neon" ? "#00E6E6" : "#00FF9C",
      }}
    >
      {label}
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
  return (
    <div className="game-panel p-4 cursor-pointer hover:scale-[1.02] transition-transform">
      <div className="font-pixel text-xs uppercase mb-2 game-label">{tag}</div>
      <h3 className="font-mono text-sm mb-2 game-text">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs game-text-secondary">{date}</span>
        <button className="game-btn-small">[ READ ]</button>
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
  return (
    <div
      className={`game-panel p-4 ${locked ? "opacity-50 blur-sm" : "cursor-pointer hover:scale-[1.02] transition-transform"}`}
    >
      {locked ? (
        <div className="text-center py-8">
          <div className="font-pixel text-lg mb-2">🔒</div>
          <div className="font-pixel text-xs uppercase game-text-secondary">LOCKED</div>
        </div>
      ) : (
        <>
          <h3 className="font-pixel text-sm uppercase mb-2 game-text">{title}</h3>
          <p className="font-mono text-xs mb-3 game-text-secondary">{description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 border game-border font-pixel text-xs"
                style={{
                  backgroundColor: theme === "neon" ? "rgba(0, 230, 230, 0.1)" : "rgba(0, 255, 156, 0.1)",
                  borderColor: theme === "neon" ? "#00E6E6" : "#00FF9C",
                  color: theme === "neon" ? "#00E6E6" : "#00FF9C",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <button className="game-btn-small w-full">[ OPEN ]</button>
        </>
      )}
    </div>
  );
}

function BookCard({
  title,
  author,
  takeaway,
  tag,
  theme,
}: {
  title: string;
  author: string;
  takeaway: string;
  tag: string;
  theme: ThemeMode;
}) {
  return (
    <div className="game-panel p-4 min-w-[280px] cursor-pointer hover:scale-[1.02] transition-transform">
      <h3 className="font-pixel text-sm uppercase mb-1 game-text">{title}</h3>
      <p className="font-mono text-xs mb-2 game-text-secondary">{author}</p>
      <p className="font-mono text-xs mb-3 game-text">{takeaway}</p>
      <div className="flex items-center justify-between">
        <span
          className="px-2 py-1 border game-border font-pixel text-xs"
          style={{
            backgroundColor: theme === "neon" ? "rgba(0, 230, 230, 0.1)" : "rgba(0, 255, 156, 0.1)",
            borderColor: theme === "neon" ? "#00E6E6" : "#00FF9C",
            color: theme === "neon" ? "#00E6E6" : "#00FF9C",
          }}
        >
          {tag}
        </span>
        <span className="font-mono text-xs game-text-secondary">Updated: 2024-01-15</span>
      </div>
    </div>
  );
}

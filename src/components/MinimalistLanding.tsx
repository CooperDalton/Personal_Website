"use client";

export default function MinimalistLanding() {
  const habits = [
    { name: "Code", progress: 78 },
    { name: "Write", progress: 65 },
    { name: "Read", progress: 82 },
    { name: "Ship", progress: 45 },
  ];

  const blogPosts = [
    {
      date: "Nov 8, 2025",
      title: "Day 14/100 — building public habit tracker",
      description: "Notes on wiring Next.js + Supabase and keeping it simple.",
    },
    {
      date: "Nov 5, 2025",
      title: "Day 11/100 — first revenue milestone",
      description: "Reflections on hitting $1K MRR and what's next.",
    },
    {
      date: "Nov 1, 2025",
      title: "Day 7/100 — shipping ScrollStopper v1",
      description: "Lessons learned from building an AI slideshow generator.",
    },
  ];

  const projects = [
    {
      title: "ScrollStopper",
      description: "AI slideshow video generator for indie hackers.",
      tech: "Next.js • Supabase",
    },
    {
      title: "HabitTracker",
      description: "Public habit tracking with real-time progress updates.",
      tech: "Next.js • PostgreSQL",
    },
    {
      title: "DevTools",
      description: "Collection of productivity tools for developers.",
      tech: "React • TypeScript",
    },
    {
      title: "BlogEngine",
      description: "Minimalist markdown-based blog system.",
      tech: "Next.js • MDX",
    },
  ];

  const books = [
    { title: "The Mom Test", category: "Business" },
    { title: "Atomic Habits", category: "Productivity" },
    { title: "The Lean Startup", category: "Business" },
    { title: "Deep Work", category: "Productivity" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]">
      {/* Header / Nav */}
      <header className="w-full border-b border-[#1F1F1F] sticky top-0 bg-black/70 backdrop-blur z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
          <span className="text-sm tracking-[0.25em] uppercase text-neutral-200">
            COOPER DALTON
          </span>
          <nav className="flex gap-6 text-sm text-neutral-400">
            <a href="#blog" className="hover:text-white transition">
              Blog
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#books" className="hover:text-white transition">
              Books
            </a>
            <a href="#habits" className="hover:text-white transition">
              Habits
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        <p className="text-xs tracking-[0.35em] uppercase text-neutral-500">
          indie dev / cs @ ucsb
        </p>
        <h1 className="text-4xl md:text-5xl font-medium text-white">
          I build games, tools, and document the path to $100K.
        </h1>
        <p className="text-neutral-400 max-w-2xl">
          100 days to 100k challenge, public habits, and long-form notes on
          what I'm building.
        </p>
        <div className="flex gap-3">
          <a
            href="#blog"
            className="bg-white text-black text-sm px-4 py-2 rounded-sm hover:bg-neutral-200 transition"
          >
            Read the blog
          </a>
          <a
            href="#projects"
            className="border border-neutral-700 text-sm px-4 py-2 rounded-sm text-white hover:border-white transition"
          >
            View projects
          </a>
        </div>
      </section>

      {/* Habit Snapshot */}
      <section id="habits" className="max-w-5xl mx-auto px-4 py-12 space-y-4">
        <h2 className="text-sm tracking-[0.25em] uppercase text-neutral-400">
          Habits
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {habits.map((habit) => (
            <div
              key={habit.name}
              className="border border-neutral-900 rounded-sm p-4 bg-black/30"
            >
              <p className="text-sm text-neutral-200">{habit.name}</p>
              <p className="text-2xl text-white mt-2">{habit.progress}%</p>
              <div className="h-1 bg-neutral-900 mt-3">
                <div
                  className="h-full bg-white"
                  style={{ width: `${habit.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog */}
      <section id="blog" className="max-w-5xl mx-auto px-4 py-12 space-y-4">
        <h2 className="text-sm tracking-[0.25em] uppercase text-neutral-400">
          Latest blog
        </h2>
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="border-b border-neutral-900 pb-4 hover:border-neutral-700 transition"
            >
              <p className="text-xs text-neutral-500">{post.date}</p>
              <h3 className="text-lg text-white mt-1 hover:text-neutral-300 transition cursor-pointer">
                {post.title}
              </h3>
              <p className="text-neutral-400 text-sm mt-1 max-w-2xl">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12 space-y-4">
        <h2 className="text-sm tracking-[0.25em] uppercase text-neutral-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-neutral-900 rounded-sm p-4 bg-black/20 hover:border-neutral-700 transition"
            >
              <h3 className="text-white">{project.title}</h3>
              <p className="text-neutral-400 text-sm mt-1">{project.description}</p>
              <p className="text-xs text-neutral-500 mt-3">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Books */}
      <section id="books" className="max-w-5xl mx-auto px-4 py-12 space-y-4">
        <h2 className="text-sm tracking-[0.25em] uppercase text-neutral-400">
          Reading notes
        </h2>
        <div className="space-y-3">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-neutral-900 pb-3 hover:border-neutral-700 transition"
            >
              <div>
                <p className="text-white text-sm">{book.title}</p>
                <p className="text-neutral-500 text-xs">{book.category}</p>
              </div>
              <p className="text-neutral-300 text-xs">Notes →</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-10 text-neutral-500 text-xs border-t border-neutral-900 mt-8">
        © {new Date().getFullYear()} Cooper Dalton. Building in public.
      </footer>
    </main>
  );
}


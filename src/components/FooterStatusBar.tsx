"use client";

import { useEffect, useState } from "react";

export default function FooterStatusBar() {
  const [cpu, setCpu] = useState(42);
  const [mem, setMem] = useState(69);

  useEffect(() => {
    // Animate stats occasionally
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCpu(Math.floor(Math.random() * 100));
        setMem(Math.floor(Math.random() * 100));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t-2 border-current px-6 py-2 flex justify-between items-center font-mono text-xs uppercase tracking-wider z-40" style={{ borderColor: `var(--accent-primary)` }}>
      <div className="flex items-center gap-2">
        <span style={{ color: `var(--accent-primary)` }}>WIZDRO OS</span>
        <span className="opacity-60">v1.0</span>
      </div>
      <div className="flex items-center gap-4">
        <span>
          CPU <span style={{ color: `var(--accent-primary)` }}>{cpu}%</span>
        </span>
        <span>
          MEM <span style={{ color: `var(--accent-secondary)` }}>{mem}%</span>
        </span>
      </div>
    </footer>
  );
}


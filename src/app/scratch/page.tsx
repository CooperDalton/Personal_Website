"use client";

import { useEffect } from "react";

export default function ScratchPage() {
  useEffect(() => {
    // Add class to body to hide ThemeToggle
    document.body.classList.add("scratch-page-active");
    
    return () => {
      // Remove class when leaving the page
      document.body.classList.remove("scratch-page-active");
    };
  }, []);

  return (
    <div className="min-h-screen grid-background">
      {/* Empty page - build from scratch */}
    </div>
  );
}


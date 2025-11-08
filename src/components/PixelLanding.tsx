"use client";

import { useEffect, useState } from "react";

export default function PixelLanding() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Loading bar animation
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setShowContent(true);
            setTimeout(() => {
              setShowHero(true);
              setTimeout(() => {
                setShowMenu(true);
              }, 300);
            }, 200);
          }, 500);
          return 100;
        }
        // Simulate loading with some randomness
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(loadingInterval);
  }, []);

  const menuItems = ["BLOG", "PROJECTS", "BOOKS", "HABITS", "ABOUT"];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10 pixelated">
      {/* Loading Screen */}
      {!showContent && (
        <div className="w-full max-w-md pixelated">
          <div className="mb-4 text-green-500 font-pixel text-xs uppercase tracking-wider">
            Loading...
          </div>
          <div className="border-2 border-green-500 bg-black p-1">
            <div
              className="h-6 bg-green-500 transition-all duration-100 ease-linear"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="mt-2 text-green-500/70 font-pixel text-xs">
            {Math.round(loadingProgress)}%
          </div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="w-full max-w-2xl">
          {/* Hero Text */}
          {showHero && (
            <div
              className="mb-16 text-center pixelated"
              style={{
                animation: "fadeInPixel 0.4s ease-in forwards",
              }}
            >
              <h1
                className="font-pixel text-2xl md:text-4xl uppercase tracking-wider mb-2 text-green-500"
                style={{
                  textShadow: "2px 2px 0px #000, 4px 4px 0px rgba(0, 255, 0, 0.4), 0 0 10px rgba(255, 200, 0, 0.3)",
                }}
              >
                WIZDRO // indie dev + hacker
              </h1>
            </div>
          )}

          {/* Main Menu */}
          {showMenu && (
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pixelated">
              {menuItems.map((item, idx) => (
                <PixelButton key={item} item={item} delay={idx * 0.1} />
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}

function PixelButton({ item, delay }: { item: string; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasBounced, setHasBounced] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHasBounced(false);
    // Reset animation by removing and re-adding the class
    setTimeout(() => setHasBounced(true), 10);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHasBounced(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative pixel-button"
      style={{
        animation: `fadeInPixel 0.4s ease-in forwards`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    >
      <div
        key={hasBounced ? "bounced" : "not-bounced"}
        className={`px-4 py-2 md:px-6 md:py-3 border-2 bg-black text-green-500 font-pixel text-xs uppercase tracking-wider transition-all duration-150 ${
          isHovered && hasBounced ? "pixel-button-hover" : ""
        }`}
        style={{
          borderColor: "#00ff00",
          boxShadow: isHovered
            ? "4px 4px 0px rgba(0, 255, 0, 0.6), 8px 8px 0px rgba(0, 255, 0, 0.3)"
            : "2px 2px 0px rgba(0, 255, 0, 0.4)",
          textShadow: isHovered ? "0 0 8px rgba(0, 255, 0, 0.8)" : "none",
        }}
      >
        [ {item} ]
      </div>
    </button>
  );
}


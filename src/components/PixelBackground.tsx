"use client";

export default function PixelBackground() {
  const squareSize = 40; // 40px squares (increased from 20px)
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden pixelated">
      {/* Grid of black and dark gray squares - checkerboard pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#000000',
          backgroundImage: `
            linear-gradient(90deg, #1a1a1a 0px, #1a1a1a ${squareSize}px, transparent ${squareSize}px, transparent ${squareSize * 2}px),
            linear-gradient(0deg, #1a1a1a 0px, #1a1a1a ${squareSize}px, transparent ${squareSize}px, transparent ${squareSize * 2}px)
          `,
          backgroundSize: `${squareSize * 2}px ${squareSize * 2}px`,
          backgroundPosition: `0 0, ${squareSize}px ${squareSize}px`,
        }}
      />
      
      {/* Subtle green glow in center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-10"
        style={{
          background: `radial-gradient(circle, #00ff00 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      
      {/* Accent color highlights */}
      <div 
        className="absolute top-1/4 right-1/4 w-[200px] h-[200px] opacity-5"
        style={{
          background: `radial-gradient(circle, #ffcc00 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-[150px] h-[150px] opacity-5"
        style={{
          background: `radial-gradient(circle, #ff6600 0%, transparent 70%)`,
          filter: "blur(25px)",
        }}
      />
    </div>
  );
}


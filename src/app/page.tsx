"use client";

import { useState, useEffect } from "react";
import FooterStatusBar from "../components/FooterStatusBar";
import Landing from "../components/Landing";
import PixelLanding from "../components/PixelLanding";
import GameLanding from "../components/GameLanding";
import BackgroundEffects from "../components/BackgroundEffects";
import PixelBackground from "../components/PixelBackground";
import GameBackground from "../components/GameBackground";
import ArcadeLanding from "../components/ArcadeLanding";
import MinimalistLanding from "../components/MinimalistLanding";
import PageSwitcher from "../components/PageSwitcher";

type PageStyle = "default" | "pixel" | "game" | "arcade" | "minimalist";

export default function Home() {
  const [currentStyle, setCurrentStyle] = useState<PageStyle>("default");

  useEffect(() => {
    // Update body background based on style
    if (currentStyle === "pixel") {
      document.body.style.background = "#000000";
    } else if (currentStyle === "game") {
      document.body.style.background = "#0B0D11";
    } else if (currentStyle === "arcade") {
      document.body.style.background = "#0A0A0A";
    } else if (currentStyle === "minimalist") {
      document.body.style.background = "#0B0B0B";
    } else {
      document.body.style.background = "";
    }
  }, [currentStyle]);

  return (
    <>
      <PageSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
      {currentStyle === "default" ? (
        <>
          <BackgroundEffects />
          <Landing />
        </>
      ) : currentStyle === "pixel" ? (
        <>
          <PixelBackground />
          <PixelLanding />
        </>
      ) : currentStyle === "arcade" ? (
        <>
          <ArcadeLanding />
        </>
      ) : currentStyle === "minimalist" ? (
        <>
          <MinimalistLanding />
        </>
      ) : (
        <>
          <GameLanding />
        </>
      )}
      {currentStyle !== "arcade" && currentStyle !== "minimalist" && <FooterStatusBar />}
    </>
  );
}

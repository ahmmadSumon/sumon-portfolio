"use client";
import React, { useEffect, useState } from "react";
import LightRays from "./LightRays";

export default function LightRaysWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    >
      {isMobile ? (
        // Modern animated mobile background
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/70 via-slate-900/80 to-black animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-purple-500/10 to-transparent opacity-70 animate-float"></div>
        </div>
      ) : (
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffffcc"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";

const HERO_VIDEOS = [
  {
    id: 0,
    title: "Facility Overview",
    src: "/galactic-bg.mp4",
  },
  {
    id: 1,
    title: "Advanced Production",
    src: "/bharath.mp4",
  },
];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // AUTOMATICALLY ALTERNATE VIDEOS EVERY 8.5 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 8500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#0B0B0C] border-b border-[#EAEAEA] font-sans">
      
      {/* DUAL-VIDEO HERO BACKGROUND SLIDER WITH SMOOTH FADE TRANSITION */}
      {HERO_VIDEOS.map((video, idx) => (
        <video
          key={video.id}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === idx ? "opacity-100 z-0 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      {/* GRADIENT OVERLAY FOR CRISP READABILITY & CINEMATIC CONTRAST */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN OVERLAY */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-[1]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* HERO CONTENT: COMPACT 2-LINE HEADLINE */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 py-20 lg:py-28 w-full">
        
        <div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] drop-shadow-2xl uppercase max-w-4xl">
            <span className="block text-white">Transform Your Ideas</span>
            <span className="block text-[#E53935]">Into Reality</span>
          </h1>
        </div>

      </div>

    </section>
  );
}

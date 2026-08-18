"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const CAPABILITIES = [
  {
    num: "01",
    title: "TRAINING",
    tag: "SKILL DEVELOPMENT & CERTIFICATION",
    description: "Hands-on additive manufacturing learning programs for schools, colleges, and industry professionals.",
    image: "/Training/room.png",
    link: "/training",
  },
  {
    num: "02",
    title: "DESIGN",
    tag: "DfAM & TOPOLOGY OPTIMIZATION",
    description: "DfAM consulting, topology optimization, reverse engineering, and product development support.",
    image: "/consult.png",
    link: "/#services",
  },
  {
    num: "03",
    title: "PRODUCTION",
    tag: "INDUSTRIAL METAL & POLYMER AM",
    description: "Industrial SLS, DMLS, and FDM systems delivering production-grade components at scale.",
    image: "/production.png",
    link: "/machines",
  },
  {
    num: "04",
    title: "SUSTAINABILITY",
    tag: "ECO-CONSCIOUS MANUFACTURING",
    description: "Eco-conscious manufacturing practices focused on material efficiency and waste reduction.",
    image: "/aboutgrp.jpg",
    link: "/about",
  },
];

export default function CapabilitiesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // AUTOPLAY EFFECT - ROTATES EVERY 4.5 SECONDS
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CAPABILITIES.length);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAPABILITIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAPABILITIES.length) % CAPABILITIES.length);
  };

  const currentSlide = CAPABILITIES[currentIndex];

  return (
    <section 
      className="relative min-h-[75vh] lg:min-h-[82vh] bg-[#0B0B0C] text-white overflow-hidden border-t border-b border-zinc-800 font-sans group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ENGINEERING GRID OVERLAY */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* BACKGROUND SLIDE IMAGES WITH CINEMATIC CROSS-FADE */}
      {CAPABILITIES.map((slide, index) => (
        <div
          key={slide.num}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
              index === currentIndex ? "scale-105" : "scale-100"
            }`}
          />
          {/* DARK GRADIENT OVERLAYS FOR READABILITY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>
      ))}

      {/* LARGE BACKGROUND SLIDE NUMBER (WATERMARK STYLE) */}
      <div className="absolute top-10 left-6 sm:top-14 sm:left-14 z-10 opacity-15 font-black text-7xl sm:text-9xl tracking-tighter text-white pointer-events-none">
        {currentSlide.num}
      </div>

      {/* MAIN CONTENT OVERLAY */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-8 min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-between py-16 sm:py-20">
        
        {/* TOP SECTION BADGE & AUTOPLAY INDICATOR */}
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D32F2F]/20 border border-[#D32F2F]/40 text-[#D32F2F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles size={14} className="text-[#D32F2F]" /> Capabilities Showcase
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider backdrop-blur-md bg-black/40 px-3 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-ping" />
            {isPaused ? "Paused on Hover" : "Auto Rotating"}
          </div>
        </div>

        {/* CENTER CONTENT: SLIDE HEADING & DESCRIPTION */}
        <div className="max-w-2xl space-y-5 my-auto">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D32F2F] block">
              {currentSlide.num} — {currentSlide.tag}
            </span>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">
              {currentSlide.title}
            </h2>
          </div>

          <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-normal max-w-xl drop-shadow-md">
            {currentSlide.description}
          </p>

          <div className="pt-2">
            <Link
              href={currentSlide.link}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#D32F2F] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-red-950/40 group cursor-pointer"
            >
              Explore {currentSlide.title} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* BOTTOM NAVIGATION BAR (MANUAL TABS & PREV/NEXT BUTTONS) */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* 4 TAB PROGRESS INDICATORS */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full sm:w-auto">
            {CAPABILITIES.map((slide, index) => (
              <button
                key={slide.num}
                onClick={() => setCurrentIndex(index)}
                className={`text-left px-3 py-2 rounded-lg transition-all duration-300 border ${
                  index === currentIndex
                    ? "bg-white/15 border-[#D32F2F] text-white shadow-md backdrop-blur-md"
                    : "bg-black/30 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-0.5">
                  <span className={index === currentIndex ? "text-[#D32F2F]" : "text-zinc-500"}>
                    {slide.num}
                  </span>
                </div>
                <span className="text-xs font-extrabold uppercase tracking-tight block truncate">
                  {slide.title}
                </span>
              </button>
            ))}
          </div>

          {/* MANUAL ARROW NAVIGATION BUTTONS */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 hover:bg-[#D32F2F] text-white backdrop-blur-md border border-white/15 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-xs font-bold text-zinc-400 tracking-wider">
              <span className="text-white">{currentIndex + 1}</span> / {CAPABILITIES.length}
            </span>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 hover:bg-[#D32F2F] text-white backdrop-blur-md border border-white/15 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "srv-01",
    title: "RAPID PROTOTYPING",
    lines: [
      "Accelerated functional prototyping and design iteration for complex engineered components.",
      "High-precision DMLS metal and FDM thermoplastic prototypes delivered in 24 to 48 hours."
    ],
    features: [
      "Fast 24-48 hour turnaround",
      "Functional DMLS & FDM prototypes",
      "Confidential DfAM design review",
    ],
    gallery: ["/dmls.webp", "/spark.jpg"],
  },
  {
    id: "srv-02",
    title: "FULL-SCALE PRODUCTION",
    lines: [
      "High-volume metal additive manufacturing certified for aerospace, defense, and automotive standards.",
      "Complete quality control with parameter tracking, heat treatment, and 100% CMM inspection reporting."
    ],
    features: [
      "Certified alloy powder supply chain",
      "Documented parameter control",
      "Full heat treatment & CMM inspection",
    ],
    gallery: ["/production.png", "/hist1.jpeg"],
  },
  {
    id: "srv-03",
    title: "CUSTOM MANUFACTURING",
    lines: [
      "Tailored additive manufacturing solutions optimized for complex geometries and specialized assemblies.",
      "Multi-material engineering in titanium, inconel, and aluminum with precision CNC post-processing."
    ],
    features: [
      "Complex geometry support",
      "Specialized materials",
      "Custom finishing",
    ],
    gallery: ["/consult.png", "/aboutgrp.jpg"],
  },
  {
    id: "srv-04",
    title: "MANUFACTURING PATTERN",
    lines: [
      "We help you design, validate, and build research-driven solutions with expert application development.",
      "Scaling for tomorrow with an India-first approach across a wide range of materials and DMLS/LPBF contract manufacturing."
    ],
    features: [
      "Research Driven & Collaborative",
      "Application Development & DMLS/LPBF",
      "India First Contract Manufacturing",
    ],
    gallery: ["/hist2.jpg", "/production.png"],
  },
];

export default function ServiceTabs() {
  const [activeTabId, setActiveTabId] = useState("srv-04");

  const activeService = SERVICES.find((s) => s.id === activeTabId) || SERVICES[3];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-[#111111] font-sans relative overflow-hidden border-t border-b border-[#EAEAEA]">
      
      {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN OVERLAY MATCHING THE WEBSITE */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER */}
        <div className="border-b border-[#EAEAEA] pb-8 mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-none">
            Manufacturing <span className="text-[#E53935]">Services</span>
          </h2>
        </div>

        {/* 3-COLUMN INTERACTIVE SERVICES SHOWCASE IN WHITE THEME */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* COLUMN 1: LEFT SERVICE SELECTOR TABS (4 COLS) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-between">
            {SERVICES.map((srv) => {
              const isSelected = activeTabId === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTabId(srv.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-[#E53935] text-white border-[#E53935] shadow-[0_0_25px_rgba(229,57,53,0.25)]"
                      : "bg-white text-[#111111] border-[#EAEAEA] hover:border-[#E53935]/60 hover:shadow-md"
                  }`}
                >
                  <h3 className={`text-base sm:text-lg font-black uppercase tracking-tight ${
                    isSelected ? "text-white" : "text-[#111111] group-hover:text-[#E53935]"
                  }`}>
                    {srv.title}
                  </h3>

                  <ArrowRight 
                    size={18} 
                    className={`transition-transform shrink-0 ${
                      isSelected ? "text-white translate-x-1" : "text-gray-400 group-hover:text-[#E53935] group-hover:translate-x-1"
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* COLUMN 2: MIDDLE ACTIVE SERVICE DETAIL CARD */}
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-[#EAEAEA] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* SERVICE HEADER WITH ICON */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 text-[#E53935] flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                  </div>

                  {/* ACTIVE TITLE */}
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111] leading-tight mb-4">
                    {activeService.title}
                  </h3>

                  {/* EXACT 2-LINE DESCRIPTION ABOUT THE SELECTED SERVICE */}
                  <div className="space-y-2 mb-6 border-l-2 border-[#E53935] pl-4 py-1">
                    {activeService.lines.map((line, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* FEATURE PILLS WITH CHECKMARK */}
                  <div className="space-y-2.5">
                    {activeService.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm font-semibold text-gray-800"
                      >
                        <CheckCircle2 size={16} className="text-[#E53935] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA BUTTON */}
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <span>Request Production Quote</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLUMN 3: RIGHT MEDIA GALLERY PREVIEW CARDS IN LIGHT THEME */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="h-full flex flex-col gap-4"
              >
                {activeService.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="relative flex-1 min-h-[160px] rounded-2xl overflow-hidden border-2 border-[#EAEAEA] bg-white group shadow-xs hover:border-[#E53935] transition-colors"
                  >
                    <img
                      src={imgSrc}
                      alt={activeService.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

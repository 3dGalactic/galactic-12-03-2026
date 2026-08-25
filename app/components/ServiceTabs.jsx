"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Factory, Cpu, ShieldCheck, ArrowRight, CheckCircle2, Download } from "lucide-react";

const SERVICES = [
  {
    id: "srv-01",
    title: "Rapid Prototyping",
    tag: "PROTOTYPING",
    icon: Zap,
    image: "/dmls.webp",
    desc: "Accelerated functional prototyping, design iteration, and DMLS metal & FDM plastic prototypes delivered in 24 to 48 hours.",
    features: ["24-48h Turnaround", "Functional DMLS", "DfAM Review"],
  },
  {
    id: "srv-02",
    title: "Full-Scale Production",
    tag: "PRODUCTION",
    icon: Factory,
    image: "/production.png",
    desc: "High-volume metal additive manufacturing certified for aerospace, defense, and automotive engineering standards.",
    features: ["Certified Powders", "Parameter Control", "CMM Inspection"],
  },
  {
    id: "srv-03",
    title: "Custom Manufacturing",
    tag: "CUSTOM",
    icon: Cpu,
    image: "/consult.png",
    desc: "Tailored additive solutions optimized for complex geometries, multi-material titanium/inconel, and precision CNC finishing.",
    features: ["Complex Geometries", "Specialized Alloys", "CNC Finishing"],
  },
  {
    id: "srv-04",
    title: "Manufacturing Partner",
    tag: "PARTNER",
    icon: ShieldCheck,
    image: "/hist1.jpeg",
    desc: "Research-driven collaborative engineering, DMLS/LPBF application development, and India-first contract manufacturing.",
    features: ["Collaborative R&D", "LPBF Contract", "India First"],
  },
];

export default function ServiceTabs() {
  return (
    <section id="services" className="py-12 lg:py-16 bg-transparent text-[#111111] font-sans relative overflow-hidden border-t border-b border-[#EAEAEA]">
      
      {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN OVERLAY */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER MATCHING SCREENSHOT + DOWNLOAD BROCHURE BUTTON */}
        <div className="border-b border-[#EAEAEA] pb-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111111] leading-none">
              MANUFACTURING <span className="text-[#E53935]">SERVICES</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/galactic-3d-contract-manufacturing-brochure.pdf"
              download="Galactic_3D_Contract_Manufacturing_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs sm:text-sm font-extrabold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              <span>Download Brochure</span>
            </a>
            
            <span className="hidden md:inline-flex text-xs font-bold uppercase tracking-wider px-3.5 py-2.5 bg-red-50 text-[#E53935] rounded-xl border border-red-100 shrink-0">
              Industrial Capabilities
            </span>
          </div>
        </div>

        {/* CARD GRID WITH UNIFORM CLEAN BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#E53935] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* TOP IMAGE CONTAINER WITH OVERLAYS */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* BOTTOM-LEFT RED ICON BADGE */}
                    <div className="absolute bottom-3 left-3 z-10 w-8 h-8 rounded-full bg-[#E53935] text-white flex items-center justify-center shadow-md">
                      <Icon size={16} />
                    </div>

                    {/* BOTTOM-RIGHT CATEGORY PILL BADGE */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 text-white backdrop-blur-xs">
                        {srv.tag}
                      </span>
                    </div>
                  </div>

                  {/* CARD BODY CONTENT */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-extrabold tracking-tight text-[#111111] group-hover:text-[#E53935] transition-colors leading-tight">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      {srv.desc}
                    </p>

                    {/* FEATURE TAGS */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {srv.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold text-gray-700 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md flex items-center gap-1"
                        >
                          <CheckCircle2 size={10} className="text-[#E53935]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM EXPLORE BUTTON */}
                <div className="px-5 pb-5 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-50 group-hover:bg-red-50 text-gray-800 group-hover:text-[#E53935] font-extrabold text-xs flex items-center justify-between border border-gray-200 group-hover:border-red-200 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

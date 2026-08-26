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
        
        {/* SECTION HEADER MATCHING "Industries We Serve" EXACT FONT, FONT-WEIGHT, AND STYLING WITH RED "SERVICES" */}
        <div className="border-b border-[#EAEAEA] pb-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Manufacturing <span className="text-[#D32F2F]">Services</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/galactic-3d-contract-manufacturing-brochure.pdf"
              download="Galactic_3D_Contract_Manufacturing_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-extrabold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>

        {/* CARD GRID WITH UNIFORM CLEAN BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#D32F2F] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md"
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
                    <div className="absolute bottom-3 left-3 z-10 w-8 h-8 rounded-full bg-[#D32F2F] text-white flex items-center justify-center shadow-md">
                      <Icon size={16} />
                    </div>

                    {/* TOP-RIGHT CATEGORY TAG */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/10 shadow-xs">
                        {srv.tag}
                      </span>
                    </div>
                  </div>

                  {/* CARD TITLE & DESCRIPTION */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-extrabold text-base text-[#111111] group-hover:text-[#D32F2F] transition-colors leading-tight">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-4 font-medium">
                      {srv.desc}
                    </p>

                    {/* KEY FEATURE BADGES */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {srv.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-700"
                        >
                          <CheckCircle2 size={11} className="text-[#D32F2F]" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION BUTTON */}
                <div className="p-5 pt-0">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#D32F2F] hover:text-white border border-gray-200 hover:border-[#D32F2F] text-xs font-extrabold text-[#111111] transition-all duration-200 flex items-center justify-between group/btn cursor-pointer shadow-xs"
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
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

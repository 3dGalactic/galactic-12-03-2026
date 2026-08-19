"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Layers,
  ShieldCheck,
  Compass,
  Check,
} from "lucide-react";

const WORKFLOW_TABS = [
  {
    id: "design",
    label: "DESIGN",
    title: "Research-Driven DfAM & Solution Design",
    desc: "Collaborative expert experience helping you design and optimize topology, micro-lattices, and fluid channels for additive manufacturing."
  },
  {
    id: "build",
    label: "BUILD",
    title: "DMLS / LPBF Contract Manufacturing",
    desc: "Industrial Metal AM using DMLS and LPBF technologies for demanding superalloys, complex geometries, and rapid application development."
  },
  {
    id: "validate",
    label: "VALIDATE",
    title: "Material Testing & Quality Certification",
    desc: "Mechanical validation, CMM inspection, and certified material parameter sets before parts move to full-scale production."
  }
];

const WHY_ITEMS = [
  {
    num: "01",
    title: "Research Driven",
    subtitle: "Collaborative engineering and solution design to validate and build research-backed industrial solutions.",
    icon: Compass,
    pillarTag: "Research Driven"
  },
  {
    num: "02",
    title: "India First Approach",
    subtitle: "Global-grade manufacturing operating with an India-first approach from our high-precision production floor.",
    icon: Globe,
    pillarTag: "India First Approach"
  },
  {
    num: "03",
    title: "Wide Range of Materials",
    subtitle: "Certified parameter sets across Titanium, Inconel, Aluminum, Superalloys, and High-Temp Polymers.",
    icon: ShieldCheck,
    pillarTag: "Wide Range of Materials"
  },
  {
    num: "04",
    title: "Metal AM (DMLS / LPBF)",
    subtitle: "Industrial DMLS and LPBF for demanding alloys, critical geometries, and rapid application development.",
    icon: Layers,
    pillarTag: "DMLS / LPBF",
    link: "/materials"
  },
  {
    num: "05",
    title: "Scaling for Tomorrow",
    subtitle: "Future-ready contract manufacturing workflows engineered for agile scaling and long-term production confidence.",
    icon: TrendingUp,
    pillarTag: "Scaling for Tomorrow"
  }
];

export default function WhyGalactic() {
  const [activeTab, setActiveTab] = useState("build");
  const [activeItem, setActiveItem] = useState("01");

  const currentTabInfo = WORKFLOW_TABS.find((t) => t.id === activeTab) || WORKFLOW_TABS[1];

  return (
    <section className="py-20 lg:py-28 bg-white text-[#111111] font-sans relative overflow-hidden border-t border-b border-[#EAEAEA]">
      
      {/* SUBTLE ENGINEERING GRID BACKGROUND OVERLAY MATCHING HOMEPAGE THEME */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 mb-12">
          
          <div className="space-y-3">
            {/* TOP LOGO BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
              GALACTIC 3D
            </div>

            {/* HEADLINE: Why choose Galactic? */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111]">
              Why choose <span className="text-[#D32F2F]">Galactic?</span>
            </h2>
          </div>

          {/* RIGHT SIDE SUBTEXT */}
          <div className="max-w-md space-y-2 lg:text-right">
            <p className="text-xs sm:text-sm font-extrabold text-[#D32F2F]">
              We will help you to design solution to validate &amp; build.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
              Precision production for aerospace, medical, and defence teams that need certified materials, validated processes, and speed.
            </p>
          </div>

        </div>

        {/* 2-COLUMN MAIN CONTENT (LEFT WORKFLOW CARD / RIGHT NUMBERED PILLARS) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE (5 COLUMNS): WORKFLOW CARD WITH TABS */}
          <div className="lg:col-span-5 bg-white border-2 border-[#EAEAEA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            
            <div className="space-y-6">
              {/* CARD HEADING */}
              <p className="text-base sm:text-lg font-bold text-[#111111] leading-snug">
                From design to validation, our workflow keeps every stage connected to production outcomes.
              </p>

              {/* 3-TAB TOGGLE BUTTONS (DESIGN | BUILD | VALIDATE) */}
              <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-gray-100 rounded-xl border border-gray-200">
                {WORKFLOW_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-extrabold tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#D32F2F] text-white shadow-sm"
                          : "text-gray-700 hover:text-[#111111] hover:bg-gray-200/60"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* DYNAMIC TAB DETAIL CONTENT */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 space-y-2">
                <h4 className="text-sm font-extrabold text-[#D32F2F]">
                  {currentTabInfo.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {currentTabInfo.desc}
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (7 COLUMNS): 5 NUMBERED PILLAR CARDS LIST */}
          <div className="lg:col-span-7 flex flex-col gap-3 justify-between">
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon;
              const isSelected = activeItem === item.num;

              const cardContent = (
                <>
                  <div className="flex items-center gap-5">
                    {/* NUMBER BADGE */}
                    <span className={`text-2xl sm:text-3xl font-black transition-colors ${
                      isSelected ? "text-[#D32F2F]" : "text-gray-300 group-hover:text-gray-400"
                    }`}>
                      {item.num}
                    </span>

                    {/* TEXT CONTENT */}
                    <div className="space-y-1">
                      <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                        isSelected ? "text-[#111111]" : "text-gray-800 group-hover:text-[#111111]"
                      }`}>
                        {item.title}
                        {item.link && (
                          <span className="ml-2 text-xs font-semibold text-[#D32F2F] align-middle">
                            View →
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-gray-600 font-medium leading-relaxed max-w-lg">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* CIRCULAR ICON CONTAINER ON RIGHT */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ml-4 ${
                    isSelected
                      ? "bg-red-50 text-[#D32F2F] border border-red-200"
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                  }`}>
                    {isSelected ? <Check size={18} /> : <Icon size={18} />}
                  </div>
                </>
              );

              const cardClasses = `p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                isSelected
                  ? "bg-white border-[#D32F2F] shadow-md ring-1 ring-[#D32F2F]/20"
                  : "bg-white border-[#EAEAEA] hover:border-gray-300"
              }`;

              if (item.link) {
                return (
                  <Link
                    key={item.num}
                    href={item.link}
                    onMouseEnter={() => setActiveItem(item.num)}
                    className={cardClasses}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={item.num}
                  onClick={() => setActiveItem(item.num)}
                  className={cardClasses}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
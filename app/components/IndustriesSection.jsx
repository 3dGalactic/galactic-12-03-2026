"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Car,
  Activity,
  GraduationCap,
  Cpu,
  Zap,
  ArrowRight,
  CheckCircle2,
  X,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const INDUSTRIES_DATA = [
  {
    id: "aerospace-defence",
    title: "Aerospace & Defence",
    category: "Aerospace",
    icon: Plane,
    image: "/hist1.jpeg",
    shortDesc: "High-performance lightweight flight components, DMLS titanium brackets, heat exchangers, and certified defense hardware.",
    overview: "Galactic 3D delivers flight-ready additive manufacturing for aerospace OEMs, defense contractors, and space launch organizations. We specialize in topology-optimized metal structures and flame-retardant thermoplastics.",
    challenges: "Strict weight limits, extreme thermal cycles, high vibration fatigue, 100% material heat traceability.",
    solutions: "DfAM topology optimization yielding 30%+ mass reduction, DMLS Inconel 718 / Titanium Ti6Al4V printing, metallurgical vacuum stress-relief, and full CMM inspection.",
    services: ["DMLS Metal Printing", "DfAM Topology Optimization", "Vacuum Stress Relief"],
    materials: ["Titanium Ti6Al4V", "Inconel 718", "Aluminum AlSi10Mg", "ULTEM 9085"],
    tech: ["EOS M 290 DMLS", "Fortus 450mc FDM"],
    caseStudy: {
      title: "Satellite Structural Bracket Mass Reduction",
      result: "32% Mass Reduction while exceeding stiffness requirements for Indian Space payloads.",
    },
  },
  {
    id: "automotive",
    title: "Automotive & Motorsport",
    category: "Automotive",
    icon: Car,
    image: "/spark.jpg",
    shortDesc: "Rapid functional prototyping, intake manifolds, lightweight brake calipers, and ergonomic assembly jigs for agile automotive engineering.",
    overview: "We partner with automotive OEMs and motorsport teams to shorten vehicle development cycles, fabricate complex under-hood fluid assemblies, and supply durable assembly fixtures.",
    challenges: "Accelerated development deadlines, harsh thermal environments, complex fluid dynamics, assembly line operator fatigue.",
    solutions: "High-temperature FDM thermoplastic printing, continuous carbon-fiber tooling, supportless SLS duct consolidation from multi-part assemblies into single components.",
    services: ["Rapid Prototyping", "Carbon-Fiber Composite Tooling", "Low-Volume Production"],
    materials: ["Carbon-Fiber Nylon", "ULTEM 9085", "Aluminum AlSi10Mg", "ABS-M30"],
    tech: ["Fortus 450mc FDM", "EOS P 396 SLS"],
    caseStudy: {
      title: "Integrated Intake Manifold Consolidation",
      result: "Reduced assembly parts from 14 to 1 while improving fluid airflow efficiency by 18%.",
    },
  },
  {
    id: "medical-healthcare",
    title: "Medical & Healthcare",
    category: "Medical",
    icon: Activity,
    image: "/production.png",
    shortDesc: "Biocompatible titanium orthopedic implants, patient-specific surgical guides, and anatomical planning models.",
    overview: "Delivering precise, bio-compatible additive solutions for orthopedic surgeons, dental laboratories, and medical device manufacturers adhering to ISO quality frameworks.",
    challenges: "Anatomical customization for individual patients, biocompatibility, sterilization endurance, porous lattice structures.",
    solutions: "Patient-matched DMLS titanium printing with trabecular lattice structures for fast osseo-integration, high-detail surgical guides.",
    services: ["DMLS Medical Implants", "Surgical Guide Fabrication", "Anatomical Modeling"],
    materials: ["Titanium Grade 5 (Ti6Al4V ELI)", "PEEK", "Medical-Grade Resin"],
    tech: ["EOS M 290 DMLS", "High-Precision SLA"],
    caseStudy: {
      title: "Patient-Specific Cranial Implant",
      result: "Custom Ti6Al4V cranial plate implant reduced operating room setup time by 40%.",
    },
  },
  {
    id: "education-research",
    title: "Education & Research",
    category: "Education",
    icon: GraduationCap,
    image: "/aboutgrp.jpg",
    shortDesc: "Advanced DfAM research models, mechanical testing specimens, fluid dynamics test rigs, and university additive lab training.",
    overview: "Supporting academic institutions, engineering universities, and R&D centers with industrial additive manufacturing access, metallurgical test specimens, and DfAM training.",
    challenges: "Access to industrial-grade AM machinery, complex lattice research, faculty technical upskilling.",
    solutions: "University research partnerships, standardized tensile & fatigue specimens, and certified DfAM training cohorts.",
    services: ["Academic Research Support", "Material Specimen Printing", "Additive Training"],
    materials: ["Titanium Ti6Al4V", "Inconel 718", "Stainless Steel 316L", "PA12 Nylon"],
    tech: ["EOS M 290 DMLS", "EOS P 396 SLS", "Fortus 450mc FDM"],
    caseStudy: {
      title: "Micro-Lattice Energy Absorption Study",
      result: "Fabricated DMLS titanium test matrices for university aerospace impact research.",
    },
  },
  {
    id: "electronics",
    title: "Electronics & Semiconductors",
    category: "Electronics",
    icon: Cpu,
    image: "/spark.jpg",
    shortDesc: "ESD-safe component trays, custom heat sinks with internal micro-fins, RF shielding housings, and wafer-handling tools.",
    overview: "Providing thermal management and static-safe tooling solutions for semiconductor assembly and power electronics packaging.",
    challenges: "Extreme heat dissipation in compact enclosures, electrostatic discharge (ESD) hazards.",
    solutions: "Copper and aluminum DMLS heat sinks with internal micro-channel cooling, ESD-safe thermoplastic component trays.",
    services: ["Thermal Management DfAM", "ESD-Safe Fixture Printing"],
    materials: ["Pure Copper", "Aluminum AlSi10Mg", "ABS-ESD7 Thermoplastic"],
    tech: ["EOS M 290 DMLS", "Fortus 450mc FDM"],
    caseStudy: {
      title: "Micro-Fin Copper Heat Sink",
      result: "Improved thermal heat dissipation by 38% in dense power electronics enclosures.",
    },
  },
  {
    id: "energy-power",
    title: "Energy & Power",
    category: "Energy",
    icon: Zap,
    image: "/production.png",
    shortDesc: "Gas turbine combustion nozzles, heat exchangers, wind turbine sensor brackets, and high-pressure oil & gas valves.",
    overview: "Engineered superalloy components for power generation turbines, renewable energy installations, and subsea oil & gas platforms.",
    challenges: "High-temperature oxidation up to 700°C, severe pressure differentials, corrosive environments.",
    solutions: "DMLS Inconel 718 swirl combustion nozzles with internal fuel mixing passages, heat-treated cobalt-chrome components.",
    services: ["Superalloy DMLS Printing", "Thermal Barrier Heat Treatment"],
    materials: ["Inconel 718", "Stainless Steel 316L", "Cobalt-Chrome"],
    tech: ["EOS M 290 DMLS", "Vacuum Furnace"],
    caseStudy: {
      title: "Swirl Combustion Fuel Nozzle",
      result: "Extended turbine maintenance service interval by 2x while lowering NOx emissions.",
    },
  },
];

export default function IndustriesSection() {
  const [filter, setFilter] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const categories = ["All", "Aerospace", "Automotive", "Medical", "Education", "Electronics", "Energy"];

  // Active industry selection based on filter tab or modal selection
  const activeIndustryInfo = filter !== "All"
    ? INDUSTRIES_DATA.find((item) => item.category === filter)
    : selectedIndustry;

  return (
    <section className="py-16 lg:py-20 bg-transparent border-t border-[#EAEAEA] font-sans relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION TITLE & FILTER TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-xl">
              Delivering advanced manufacturing and 3D printing solutions across multiple industries.
            </p>
          </div>

          {/* FILTERING CAPABILITY PILLS */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  if (cat === "All") setSelectedIndustry(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-extrabold transition cursor-pointer ${
                  filter === cat
                    ? "bg-[#D32F2F] text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-[#D32F2F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CASE 1: WHEN "ALL" IS SELECTED - DISPLAY 6-CARD GRID */}
        {filter === "All" && !activeIndustryInfo && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 animate-fadeIn">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-xl border border-[#EAEAEA] overflow-hidden flex flex-col justify-between hover:border-[#D32F2F] transition-all duration-300 group shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* CARD IMAGE */}
                    <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                        <div className="p-1.5 rounded-lg bg-[#D32F2F] text-white shadow-xs">
                          <Icon size={16} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-xs px-2.5 py-0.5 rounded text-white">
                          {ind.category}
                        </span>
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-4 space-y-2">
                      <h3 className="font-extrabold text-sm text-[#111111] leading-snug group-hover:text-[#D32F2F] transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {ind.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* EXPLORE INDUSTRY BUTTON */}
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => setFilter(ind.category)}
                      className="w-full py-2.5 px-3 rounded-lg bg-gray-50 border border-gray-200 text-xs font-extrabold text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all duration-200 flex items-center justify-between group/btn cursor-pointer shadow-xs"
                    >
                      <span>Explore {ind.category} Full Info</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* CASE 2: WHEN A SPECIFIC INDUSTRY OPTION IS SELECTED - SHOW FULL DETAILED INFO SHOWCASE */}
        {activeIndustryInfo && (
          <div className="bg-white rounded-2xl border-2 border-[#D32F2F] shadow-lg overflow-hidden animate-fadeIn">
            
            {/* HERO HEADER FOR SELECTED INDUSTRY - CRISP & CLEAR IMAGE */}
            <div className="relative h-64 sm:h-80 bg-gray-900 text-white flex items-end p-6 sm:p-8 overflow-hidden">
              <img
                src={activeIndustryInfo.image}
                alt={activeIndustryInfo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 z-[1]" />
              
              <button
                onClick={() => {
                  setFilter("All");
                  setSelectedIndustry(null);
                }}
                className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md text-white hover:bg-[#D32F2F] font-extrabold text-xs transition z-20 flex items-center gap-1.5 shadow-lg border border-white/20 cursor-pointer"
              >
                <X size={14} /> Close &amp; View All Industries
              </button>

              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D32F2F] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                  <Sparkles size={13} /> Full Industry Profile
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                  {activeIndustryInfo.title}
                </h3>
              </div>
            </div>

            {/* FULL INFORMATION SHOWCASE CONTENT */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* OVERVIEW SECTION */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D32F2F]">
                  Industry Overview &amp; Additive Engineering Scope
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  {activeIndustryInfo.overview}
                </p>
              </div>

              {/* CHALLENGES & SOLUTIONS GRID */}
              <div className="grid sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
                    Key Industry Challenges
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {activeIndustryInfo.challenges}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D32F2F]">
                    Galactic 3D Advanced Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {activeIndustryInfo.solutions}
                  </p>
                </div>
              </div>

              {/* SERVICES, MATERIALS, TECHNOLOGIES TRIPLE COLUMN */}
              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-200">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
                    Relevant Services
                  </h4>
                  <ul className="space-y-2">
                    {activeIndustryInfo.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-gray-700 font-bold">
                        <CheckCircle2 size={14} className="text-[#D32F2F] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-200">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
                    Qualified Materials
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeIndustryInfo.materials.map((m) => (
                      <span key={m} className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-800 font-bold text-xs">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-200">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeIndustryInfo.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-red-50 text-[#D32F2F] border border-red-100 font-bold text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FEATURED CASE STUDY */}
              <div className="p-5 rounded-xl bg-red-50/80 border border-red-100 flex items-start gap-4 shadow-xs">
                <ShieldCheck size={24} className="text-[#D32F2F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F]">
                    Featured Industry Success Story
                  </span>
                  <h5 className="text-sm sm:text-base font-extrabold text-[#111111]">
                    {activeIndustryInfo.caseStudy.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">
                    {activeIndustryInfo.caseStudy.result}
                  </p>
                </div>
              </div>

              {/* BOTTOM CTA BAR */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-600 font-bold">
                  Looking for custom DfAM engineering or contract additive production for {activeIndustryInfo.title}?
                </p>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setFilter("All");
                      setSelectedIndustry(null);
                    }}
                    className="px-4 py-2.5 rounded-lg border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 transition"
                  >
                    View All Industries
                  </button>

                  <Link
                    href="/contact"
                    className="btn-corporate-primary"
                  >
                    Request Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

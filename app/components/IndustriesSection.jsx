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

  const filteredIndustries = filter === "All"
    ? INDUSTRIES_DATA
    : INDUSTRIES_DATA.filter((item) => item.category === filter);

  return (
    <section className="py-20 bg-white border-t border-[#EAEAEA] font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION TITLE & SUBTITLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 mb-10">
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
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold transition cursor-pointer ${
                  filter === cat
                    ? "bg-[#D32F2F] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* EQUAL-SIZED INDUSTRY CARDS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="corporate-card bg-white rounded-lg border border-[#EAEAEA] overflow-hidden flex flex-col justify-between hover:border-[#D32F2F] transition-all duration-300 group shadow-sm hover:shadow-md"
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
                      <div className="p-1.5 rounded bg-[#D32F2F] text-white">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-white">
                        {ind.category}
                      </span>
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-sm text-[#111111] leading-snug group-hover:text-[#D32F2F] transition-colors">
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
                    onClick={() => setSelectedIndustry(ind)}
                    className="w-full py-2 px-3 rounded bg-gray-50 border border-gray-200 text-xs font-bold text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all duration-200 flex items-center justify-between group/btn cursor-pointer"
                  >
                    <span>Explore Industry</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* DEDICATED INDUSTRY DETAIL MODAL */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 animate-fadeIn my-8">
            
            {/* MODAL HEADER WITH IMAGE */}
            <div className="relative h-48 sm:h-56 bg-gray-900 text-white flex items-end p-6">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition z-10 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#D32F2F] text-white text-[10px] font-bold uppercase tracking-wider">
                  Industrial Sector Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedIndustry.title}
                </h2>
              </div>
            </div>

            {/* MODAL CONTENT BODY */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              
              {/* OVERVIEW */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-2">
                  Industry Overview
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedIndustry.overview}
                </p>
              </div>

              {/* CHALLENGES & SOLUTIONS GRID */}
              <div className="grid sm:grid-cols-2 gap-6 bg-[#F8F9FA] p-5 rounded-lg border border-[#EAEAEA]">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                    Industry Challenges
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {selectedIndustry.challenges}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-2">
                    Galactic 3D Engineering Solutions
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {selectedIndustry.solutions}
                  </p>
                </div>
              </div>

              {/* SERVICES, MATERIALS, TECH */}
              <div className="grid sm:grid-cols-3 gap-6 text-xs">
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-[#111111] mb-2.5">
                    Relevant Services
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedIndustry.services.map((s) => (
                      <li key={s} className="flex items-center gap-1.5 text-gray-700 font-medium">
                        <CheckCircle2 size={13} className="text-[#D32F2F]" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold uppercase tracking-wider text-[#111111] mb-2.5">
                    Materials Qualified
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedIndustry.materials.map((m) => (
                      <span key={m} className="px-2 py-0.5 rounded bg-gray-100 text-gray-800 font-medium text-[11px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold uppercase tracking-wider text-[#111111] mb-2.5">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedIndustry.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-red-50 text-[#D32F2F] font-bold text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* REAL CASE STUDY HIGHLIGHT */}
              <div className="p-4 rounded-lg bg-red-50 border border-red-100 flex items-start gap-3">
                <ShieldCheck size={20} className="text-[#D32F2F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F]">
                    Featured Industry Success Story
                  </span>
                  <h5 className="text-sm font-bold text-[#111111] mt-0.5">
                    {selectedIndustry.caseStudy.title}
                  </h5>
                  <p className="text-xs text-gray-700 mt-1">
                    {selectedIndustry.caseStudy.result}
                  </p>
                </div>
              </div>

            </div>

            {/* MODAL FOOTER CTA */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-600 font-medium">
                Need specialized DfAM review for your {selectedIndustry.title} application?
              </span>

              <Link
                href="/contact"
                onClick={() => setSelectedIndustry(null)}
                className="btn-corporate-primary shrink-0"
              >
                Request Industry Review <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

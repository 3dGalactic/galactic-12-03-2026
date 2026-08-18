"use client";

import { useState } from "react";
import { Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const TECHNOLOGIES = [
  {
    id: "dmls",
    name: "EOS M 290 DMLS Metal System",
    category: "Direct Metal Laser Sintering",
    buildVolume: "250 x 250 x 325 mm",
    laserType: "400W Yb-fiber laser",
    layerThickness: "20 - 60 µm",
    materials: ["Titanium Ti6Al4V", "Inconel 718", "Stainless Steel 316L", "Aluminum AlSi10Mg"],
    description: "Industry-standard metal additive manufacturing system equipped with high-precision optics and recirculating inert gas management for full-density components.",
  },
  {
    id: "fdm",
    name: "Fortus 450mc Industrial FDM",
    category: "Fused Deposition Modeling",
    buildVolume: "406 x 355 x 406 mm",
    temperature: "Up to 350°C Chamber Temp",
    accuracy: "±0.127 mm (±0.005 in.)",
    materials: ["ULTEM 9085", "PEEK", "Nylon 12CF", "ABS-ESD7"],
    description: "High-accuracy production FDM system engineered for manufacturing tooling, jigs, fixtures, and end-use thermoplastics requiring high heat resistance.",
  },
  {
    id: "sls",
    name: "EOS P 396 SLS Nylon System",
    category: "Selective Laser Sintering",
    buildVolume: "340 x 340 x 600 mm",
    laserType: "70W CO2 Laser",
    layerThickness: "60 - 120 µm",
    materials: ["PA12 Nylon", "PA11 Glass-Filled", "TPU Flexible"],
    description: "High-productivity powder bed fusion system for batch manufacturing without support structures. Delivers isotropic mechanical properties and fine detail.",
  },
];

export default function TechShowcase() {
  const [selectedTech, setSelectedTech] = useState(TECHNOLOGIES[0].id);
  const activeTech = TECHNOLOGIES.find((t) => t.id === selectedTech) || TECHNOLOGIES[0];

  return (
    <section className="py-20 bg-[#F8F9FA] border-t border-[#EAEAEA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
            Hardware Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Industrial Printing Hardware & Systems
          </h2>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Enterprise-grade additive manufacturing machinery capable of executing high-tolerance production runs.
          </p>
        </div>

        {/* TECH SELECTOR GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-3">
            {TECHNOLOGIES.map((tech) => {
              const selected = selectedTech === tech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-200 ${
                    selected
                      ? "bg-white border-[#D32F2F] shadow-sm text-[#111111]"
                      : "bg-white/60 border-[#EAEAEA] hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] block mb-1">
                    {tech.category}
                  </span>
                  <h3 className="font-bold text-sm text-[#111111]">{tech.name}</h3>
                </button>
              );
            })}
          </div>

          {/* ACTIVE TECH SPECIFICATIONS */}
          <div className="lg:col-span-8 bg-white rounded-lg border border-[#EAEAEA] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded bg-red-50 text-[#D32F2F]">
                <Cpu size={22} />
              </div>
              <div>
                <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider block">
                  {activeTech.category}
                </span>
                <h3 className="text-2xl font-extrabold text-[#111111]">
                  {activeTech.name}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {activeTech.description}
            </p>

            {/* SPECIFICATIONS GRID */}
            <div className="grid sm:grid-cols-3 gap-4 p-4 rounded-lg bg-[#F8F9FA] border border-[#EAEAEA] mb-6 text-xs">
              <div>
                <span className="text-gray-400 block font-medium mb-1">Build Volume:</span>
                <span className="font-bold text-[#111111]">{activeTech.buildVolume}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium mb-1">System Specs:</span>
                <span className="font-bold text-[#111111]">{activeTech.laserType || activeTech.temperature}</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium mb-1">Layer Thickness / Accuracy:</span>
                <span className="font-bold text-[#111111]">{activeTech.layerThickness || activeTech.accuracy}</span>
              </div>
            </div>

            {/* QUALIFIED MATERIALS */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3">
                Supported Material Formulations
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {activeTech.materials.map((mat) => (
                  <div key={mat} className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 size={14} className="text-[#D32F2F] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAEAEA] flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">
                Precision Machine Parameter Assurance
              </span>
              <Link href="/contact" className="btn-corporate-primary">
                Inquire Machine Capacity <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ShieldCheck, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const MATERIALS = [
  {
    name: "Titanium Ti6Al4V Grade 5",
    family: "Metal Alloys (DMLS)",
    tensileStrength: "1150 MPa",
    density: "4.43 g/cm³",
    elongation: "12%",
    description: "High-strength, lightweight titanium alloy with exceptional corrosion resistance. Ideal for aerospace structural components, turbine blades, and biomedical implants.",
  },
  {
    name: "Inconel 718 Superalloy",
    family: "Metal Alloys (DMLS)",
    tensileStrength: "1350 MPa",
    density: "8.19 g/cm³",
    elongation: "15%",
    description: "Precipitation-hardenable nickel-chromium alloy offering high yield, tensile, and creep-rupture properties at temperatures up to 700°C. Engineered for rocket propulsion and exhaust systems.",
  },
  {
    name: "Stainless Steel 316L",
    family: "Metal Alloys (DMLS)",
    tensileStrength: "650 MPa",
    density: "7.99 g/cm³",
    elongation: "40%",
    description: "Austenitic stainless steel with low carbon content, offering high ductility and excellent corrosion resistance for food processing, chemical, and marine applications.",
  },
  {
    name: "Aluminum AlSi10Mg",
    family: "Metal Alloys (DMLS)",
    tensileStrength: "460 MPa",
    density: "2.67 g/cm³",
    elongation: "6%",
    description: "Lightweight aluminum casting alloy with good thermal conductivity and high dynamic load capacity. Preferred for automotive heat exchangers and aerospace brackets.",
  },
  {
    name: "ULTEM 9085 Thermoplastic",
    family: "High-Temp Polymers (FDM)",
    tensileStrength: "71.6 MPa",
    heatDeflection: "153°C @ 1.82 MPa",
    flameRating: "FAR 25.853 / FST Compliant",
    description: "Flame-retardant high-performance thermoplastic with high strength-to-weight ratio. Fully certified for commercial aircraft interior components.",
  },
  {
    name: "PA12 Nylon (Polytechnic)",
    family: "Engineering Polymers (SLS)",
    tensileStrength: "48 MPa",
    density: "0.95 g/cm³",
    elongation: "18%",
    description: "Balanced mechanical property profile with high chemical resistance and fatigue endurance. Standard choice for complex ducting and functional snap-fit enclosures.",
  },
];

export default function MaterialShowcase() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Metal Alloys (DMLS)", "High-Temp Polymers (FDM)", "Engineering Polymers (SLS)"];

  const filteredMaterials = filter === "All"
    ? MATERIALS
    : MATERIALS.filter((m) => m.family === filter);

  return (
    <section className="py-20 bg-white border-t border-[#EAEAEA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
              Technical Datasheet Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Engineered Materials & Specifications
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition ${
                  filter === cat
                    ? "bg-[#D32F2F] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MATERIALS CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((mat, idx) => (
            <div
              key={idx}
              className="corporate-card p-6 rounded-lg bg-white border border-[#EAEAEA] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-2 py-0.5 rounded">
                    {mat.family}
                  </span>
                  <span className="text-[10px] text-gray-500 flex items-center gap-1">
                    <ShieldCheck size={13} className="text-green-600" /> Validated Batch
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111111] mb-2">
                  {mat.name}
                </h3>
                
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  {mat.description}
                </p>
              </div>

              {/* PROPERTY METRICS */}
              <div className="pt-4 border-t border-[#EAEAEA]">
                <div className="grid grid-cols-2 gap-2 text-[11px] mb-4">
                  <div className="bg-[#F8F9FA] p-2 rounded">
                    <span className="text-gray-400 block">Tensile Strength</span>
                    <span className="font-bold text-[#111111]">{mat.tensileStrength}</span>
                  </div>
                  <div className="bg-[#F8F9FA] p-2 rounded">
                    <span className="text-gray-400 block">{mat.heatDeflection ? "Heat Deflection" : "Density"}</span>
                    <span className="font-bold text-[#111111]">{mat.heatDeflection || mat.density}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#D32F2F] hover:text-[#B71C1C] inline-flex items-center gap-1 transition"
                >
                  Request Technical Datasheet <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Download, ArrowLeft, ShieldCheck } from "lucide-react";

const MATERIALS_CATALOG = [
  {
    name: "Titanium Ti6Al4V Grade 5",
    category: "DMLS Metal",
    tensile: "1,100 MPa",
    hdt: "400 °C",
    density: "4.43 g/cm³",
    description: "Aerospace-grade titanium alloy with extreme strength-to-weight ratio and bio-compatibility.",
  },
  {
    name: "Stainless Steel 316L",
    category: "DMLS Metal",
    tensile: "650 MPa",
    hdt: "300 °C",
    density: "8.00 g/cm³",
    description: "Highly corrosion-resistant stainless steel ideal for food, medical, and marine applications.",
  },
  {
    name: "Inconel 718",
    category: "DMLS Metal",
    tensile: "1,350 MPa",
    hdt: "700 °C",
    density: "8.19 g/cm³",
    description: "Nickel-based superalloy engineered for extreme thermal exhaust and rocket propulsion components.",
  },
  {
    name: "PA12 Nylon (SLS)",
    category: "SLS Polymer",
    tensile: "48 MPa",
    hdt: "175 °C",
    density: "0.95 g/cm³",
    description: "Versatile, tough engineering thermoplastic for functional prototypes and housing enclosures.",
  },
  {
    name: "ULTEM 9085 (FDM)",
    category: "FDM High-Temp",
    tensile: "89 MPa",
    hdt: "153 °C",
    density: "1.34 g/cm³",
    description: "Flame-retardant high-performance thermoplastic with FAR 25.853 aerospace rating.",
  },
  {
    name: "Aluminum AlSi10Mg",
    category: "DMLS Metal",
    tensile: "460 MPa",
    hdt: "200 °C",
    density: "2.67 g/cm³",
    description: "Lightweight aluminum alloy offering good thermal conductivity for heat exchangers and automotive parts.",
  },
];

export default function MaterialsPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "DMLS Metal", "SLS Polymer", "FDM High-Temp"];

  const filtered = MATERIALS_CATALOG.filter((mat) => {
    const matchesSearch = mat.name.toLowerCase().includes(search.toLowerCase()) || mat.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === "All" || mat.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#D32F2F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
            Technical Catalog
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Industrial Materials & Specifications
          </h1>
          <p className="mt-2 text-gray-600 text-sm max-w-2xl mx-auto">
            Explore technical datasheets, tensile strengths, heat deflection limits, and density metrics for DMLS metals and high-temp polymers.
          </p>
        </div>

        {/* FILTER & SEARCH BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search titanium, Inconel, PA12..."
              className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2 text-xs text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D32F2F]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCat === cat
                    ? "bg-[#D32F2F] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MATERIAL CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mat, idx) => (
            <div
              key={idx}
              className="corporate-card bg-white rounded-xl border border-[#EAEAEA] p-6 flex flex-col justify-between hover:border-[#D32F2F] transition duration-300 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#D32F2F] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> {mat.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#D32F2F] transition-colors">
                  {mat.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {mat.description}
                </p>

                {/* METRICS */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-gray-50 rounded-lg border border-[#EAEAEA] mb-6 text-xs">
                  <div>
                    <span className="text-gray-400 block text-[9px] uppercase font-bold">Tensile:</span>
                    <span className="text-[#111111] font-bold text-[11px]">{mat.tensile}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[9px] uppercase font-bold">HDT Limit:</span>
                    <span className="text-[#111111] font-bold text-[11px]">{mat.hdt}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[9px] uppercase font-bold">Density:</span>
                    <span className="text-[#111111] font-bold text-[11px]">{mat.density}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" /> Request Material Certificate
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Download, ArrowLeft, ShieldCheck } from "lucide-react";
import { METAL_FAMILIES } from "./data";

export default function MaterialsPage() {
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();

  // Filter materials within each family by search term (family or material name)
  const filteredFamilies = METAL_FAMILIES.map((fam) => {
    const familyMatches = fam.family.toLowerCase().includes(q);
    const materials = familyMatches
      ? fam.materials
      : fam.materials.filter((m) => m.name.toLowerCase().includes(q));
    return { ...fam, materials };
  }).filter((fam) => fam.materials.length > 0);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
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
            Metal Materials & Datasheets
          </h1>
          <p className="mt-2 text-gray-600 text-sm max-w-2xl mx-auto">
            Download technical datasheets for every DMLS metal alloy we work
            with, grouped by material family.
          </p>
        </div>

        {/* SEARCH */}
        <div className="relative w-full sm:w-96 mx-auto mb-14">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Titanium, Inconel, AlSi10Mg..."
            className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D32F2F]"
          />
        </div>

        {/* FAMILY SECTIONS */}
        <div className="space-y-10">
          {filteredFamilies.map((fam) => (
            <div key={fam.family} id={fam.family.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-24">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
                <h2 className="text-lg font-bold text-[#111111] uppercase tracking-wide">
                  {fam.family}
                </h2>
                <span className="text-xs text-gray-400 font-medium">
                  ({fam.materials.length})
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#EAEAEA]">
                {fam.materials.map((mat, i) => (
                  <div
                    key={mat.name}
                    className={`flex items-center justify-between px-5 py-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } ${i !== fam.materials.length - 1 ? "border-b border-[#EAEAEA]" : ""}`}
                  >
                    <span className="text-sm font-semibold text-[#111111]">
                      {mat.name}
                    </span>

                    <a
                      href={`/datasheets/${encodeURIComponent(mat.file)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-3.5 py-2 text-xs font-bold text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition"
                    >
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredFamilies.length === 0 && (
            <p className="text-center text-sm text-gray-400 py-16">
              No materials match "{search}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Download, Eye, ArrowLeft, ShieldCheck, ChevronDown } from "lucide-react";
import { METAL_FAMILIES } from "./data";

function familySlug(family) {
  return family.toLowerCase().replace(/\s+/g, "-");
}

export default function MaterialsPage() {
  const [search, setSearch] = useState("");
  const [openFamilies, setOpenFamilies] = useState({});

  const q = search.trim().toLowerCase();

  const filteredFamilies = METAL_FAMILIES.map((fam) => {
    const familyMatches = fam.family.toLowerCase().includes(q);
    const materials = familyMatches
      ? fam.materials
      : fam.materials.filter((m) => m.name.toLowerCase().includes(q));
    return { ...fam, materials };
  }).filter((fam) => fam.materials.length > 0);

  
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    setOpenFamilies((prev) => ({ ...prev, [hash]: true }));
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, []);

  // Typing a search term auto-expands every family so results are visible.
  useEffect(() => {
    if (q) {
      const expanded = {};
      filteredFamilies.forEach((fam) => {
        expanded[familySlug(fam.family)] = true;
      });
      setOpenFamilies((prev) => ({ ...prev, ...expanded }));
    }
  }, [q]);

  const toggleFamily = (slug) => {
    setOpenFamilies((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

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
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Metal Materials & Datasheets
          </h1>
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

        {/* FAMILY ACCORDION SECTIONS */}
        <div className="space-y-4">
          {filteredFamilies.map((fam) => {
            const slug = familySlug(fam.family);
            const isOpen = !!openFamilies[slug];

            return (
              <div
                key={fam.family}
                id={slug}
                className="scroll-mt-24 rounded-xl border border-[#EAEAEA] overflow-hidden"
              >
                <button
                  onClick={() => toggleFamily(slug)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
                    <span className="text-base font-bold text-[#111111] uppercase tracking-wide">
                      {fam.family}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      ({fam.materials.length})
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#EAEAEA]">
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

                        <div className="flex items-center gap-2">
                          <a
                            href={`/datasheets/${encodeURIComponent(mat.file)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-xs font-bold text-[#111111] hover:bg-gray-100 transition"
                          >
                            <Eye className="w-3.5 h-3.5" /> View
                          </a>
                          <a
                            href={`/datasheets/${encodeURIComponent(mat.file)}`}
                            download
                            className="inline-flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 p-2 text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition"
                            aria-label={`Download ${mat.name} datasheet`}
                            title="Download"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

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
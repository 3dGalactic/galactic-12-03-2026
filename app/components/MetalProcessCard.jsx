"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { METAL_FAMILIES } from "../materials/data";
import MaterialFamilyModal from "./MaterialFamilyModal";

function familySlug(family) {
  return family.toLowerCase().replace(/\s+/g, "-");
}

function findFamily(name) {
  return METAL_FAMILIES.find((f) => f.family.toLowerCase() === name.toLowerCase());
}


const METAL_TAGS = [
  { label: "Titanium", familyName: "Titanium" },
  { label: "Aluminum", familyName: "Aluminium" },
  { label: "Stainless Steel", familyName: "Stainless Steel" },
  { label: "Tool Steel", familyName: "Tool Steel" },
  { label: "Inconel", familyName: "Nickel Alloys" },
  { label: "Copper", familyName: "Copper" },
];

export default function MetalProcessCard() {
  const [activeTag, setActiveTag] = useState(null);

  const activeFamily = activeTag ? findFamily(activeTag.familyName) : null;

  return (
    <section className="py-16 lg:py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl border border-[#EAEAEA] bg-white shadow-sm overflow-hidden grid md:grid-cols-2">
          {/* LEFT: INFO + TAGS + PROCESS */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                  <p className="text-xs font-bold text-[#D32F2F] tracking-widest mb-1">
                    M290
                  </p>
                <h3 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
                  METAL
                </h3>
              </div>

              <p className="text-xs font-bold text-gray-400 tracking-widest mb-3">
                MATERIAL FAMILY
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {METAL_TAGS.map((tag) => (
                  <button
                    key={tag.label}
                    onClick={() => setActiveTag(tag)}
                    className="rounded-full border border-[#EAEAEA] bg-gray-50 px-4 py-2 text-sm font-semibold text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-colors"
                  >
                    {tag.label}
                  </button>
                ))}
              </div>

              <div className="border-t border-[#EAEAEA] pt-6">
                <p className="text-xs font-bold text-gray-400 tracking-widest mb-1">
                  PROCESS
                </p>
                <p className="text-xl font-extrabold text-[#D32F2F] mb-4">
                  DMLS / LPBF
                </p>

                <p className="text-xs font-bold text-gray-400 tracking-widest mb-1">
                  BUILD VOLUME
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-tight">
                  250 x 250 x 300mm
                </p>
              </div>
            </div>

            <Link
              href="/materials"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#D32F2F] px-5 py-3 text-sm font-bold text-white hover:bg-[#B71C1C] transition-colors"
            >
              Explore
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT: MACHINE IMAGE + ITS OWN EXPLORE */}
          <div className="relative">
            <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-full md:h-full">
              <Image
                src="/eos-m290.jpg"
                alt="EOS M290 metal 3D printing machine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 right-6">
                <Link
                  href="/equipment"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D32F2F] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#B71C1C] transition-colors shadow-lg"
                >
                  Explore
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeFamily && (
        <MaterialFamilyModal
          title={activeTag.label}
          slug={familySlug(activeFamily.family)}
          materials={activeFamily.materials}
          onClose={() => setActiveTag(null)}
        />
      )}
    </section>
  );
}
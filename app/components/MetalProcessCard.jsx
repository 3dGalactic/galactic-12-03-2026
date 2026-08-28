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
    <section className="py-16 lg:py-20 font-sans relative overflow-hidden">
     
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl border border-[#EAEAEA] bg-white shadow-sm overflow-hidden grid md:grid-cols-2">
          {/* LEFT: INFO + TAGS + PROCESS */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                  EOS M290
                </h3>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-gray-400 tracking-widest mb-2">
                  MATERIALS WE PRINT
                </p>

                <div className="grid grid-cols-3 gap-2 max-w-xl">
                  {METAL_TAGS.map((tag) => (
                    <button
                      key={tag.label}
                      onClick={() => setActiveTag(tag)}
                      className="w-full rounded-full border border-[#EAEAEA] bg-gray-50 px-3 py-2 text-sm font-semibold text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-colors cursor-pointer"
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#EAEAEA] pt-6">
                <p className="text-xs font-bold text-gray-400 tracking-widest mb-1">
                  PROCESS
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D32F2F] mb-4">
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
                src="/eos-m290.webp"
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

      {activeTag && activeFamily && (
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
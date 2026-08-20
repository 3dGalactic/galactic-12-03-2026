"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Phone, Mail } from "lucide-react";
import IndustriesSection, { INDUSTRIES_DATA } from "../components/IndustriesSection";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#222222] font-sans">
      
      {/* PAGE HERO HEADER */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-16 lg:py-24 border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={16} /> Enterprise Manufacturing Sectors
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Industries We Serve
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Delivering advanced additive manufacturing, DMLS metal 3D printing, and certified engineering solutions across 10 specialized industrial sectors.
            </p>

            <div className="pt-4 flex justify-center gap-4">
              <Link href="/contact" className="btn-corporate-primary">
                Consult With Industry Engineer <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10 INDUSTRIES GRID & INTERACTIVE DETAILS */}
      <IndustriesSection />

      {/* SECTOR COMPLIANCE & QUALITY ASSURANCE BANNER */}
      <section className="py-16 bg-[#111111] text-white border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-3 py-1 rounded bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider">
              Quality Assurance & Compliance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
              Need Industry-Specific Material Certifications or Batch Reports?
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every production run includes documented parameters, material test certificates, and full ISO 9001:2015 dimensional inspection reports.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-corporate-primary">
                Request RFQ & Material Certification <ArrowRight size={15} />
              </Link>
              <a
                href="mailto:admin@galactic-3d.com"
                className="btn-corporate-secondary border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white"
              >
                Email Industry Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

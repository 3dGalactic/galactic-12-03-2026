"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IndustriesSection from "../components/IndustriesSection";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#222222] font-sans">
      
      {/* PAGE HERO HEADER */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-16 lg:py-24 border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
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
      <section className="py-16 bg-white border-t border-[#EAEAEA] text-[#111111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111]">
              Need Industry-Specific Material Certifications or Batch Reports?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every production run includes documented parameters, material test certificates, and full ISO 9001:2015 dimensional inspection reports.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-corporate-primary">
                Request RFQ & Material Certification <ArrowRight size={15} />
              </Link>
              <a
                href="mailto:admin@galactic-3d.com"
                className="btn-corporate-secondary"
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

"use client";

import Link from "next/link";
import { GraduationCap, School, Building2, ArrowRight, ShieldCheck } from "lucide-react";

export default function TrainingProgramsNav() {
  return (
    <section className="py-16 lg:py-24 bg-white text-[#222222] border-t border-[#EAEAEA] font-sans relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER MATCHING "Industries We Serve" EXACT FONT FAMILY, FONT WEIGHT & SIZE */}
        <div className="mb-10 border-b border-[#EAEAEA] pb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Training &amp; Industry Programs
          </h2>
        </div>

        {/* 3-COLUMN LAYOUT (LEFT FEATURE CARD / CENTER NAV CARDS / RIGHT PARTNERS & CTA) */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT SIDE (4 COLUMNS): LARGE FEATURE CARD */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#EAEAEA] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="space-y-4">
              {/* FEATURED TRAINING PHOTO */}
              <div className="h-44 w-full rounded-xl overflow-hidden border border-[#EAEAEA] shadow-xs">
                <img
                  src="/Training/mentorship.jpg"
                  alt="Galactic 3D Additive Training Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Training Programs
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Hands-on additive manufacturing and 3D printing learning programs designed for students, educational institutions, and industry professionals.
              </p>
            </div>

            {/* BOTTOM STATISTICS ROW */}
            <div className="pt-6 mt-6 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <span className="text-xs font-extrabold text-[#D32F2F] block">3 TRACKS</span>
                <span className="text-[10px] text-gray-500 font-medium block">Structured</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <span className="text-xs font-extrabold text-[#111111] block">READY</span>
                <span className="text-[10px] text-gray-500 font-medium block">Industry</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <span className="text-xs font-extrabold text-emerald-700 block">CERTIFIED</span>
                <span className="text-[10px] text-gray-500 font-medium block">Programs</span>
              </div>
            </div>
          </div>

          {/* CENTER SIDE (5 COLUMNS): 3 DESTINATION NAVIGATION CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* DESTINATION 1: SCHOOLS */}
            <Link
              href="/training"
              className="p-5 rounded-2xl bg-white border border-[#EAEAEA] hover:border-[#D32F2F] transition-all duration-200 shadow-xs hover:shadow-md group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                <School size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors">
                    Schools
                  </h4>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-[#D32F2F] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  STEM, innovation, and 3D printing exposure programs for school students.
                </p>
                <span className="text-[11px] font-bold text-[#D32F2F] inline-flex items-center gap-1 group-hover:underline">
                  Explore Programs &rarr;
                </span>
              </div>
            </Link>

            {/* DESTINATION 2: COLLEGES & UNIVERSITIES */}
            <Link
              href="/training"
              className="p-5 rounded-2xl bg-white border border-[#EAEAEA] hover:border-[#D32F2F] transition-all duration-200 shadow-xs hover:shadow-md group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors">
                    Colleges &amp; Universities
                  </h4>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-[#D32F2F] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Workshops, internships, faculty development programs, research support, and AM curriculum integration.
                </p>
                <span className="text-[11px] font-bold text-[#D32F2F] inline-flex items-center gap-1 group-hover:underline">
                  Explore Programs &rarr;
                </span>
              </div>
            </Link>

            {/* DESTINATION 3: INDUSTRY */}
            <Link
              href="/training"
              className="p-5 rounded-2xl bg-white border border-[#EAEAEA] hover:border-[#D32F2F] transition-all duration-200 shadow-xs hover:shadow-md group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                <Building2 size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors">
                    Industry
                  </h4>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-[#D32F2F] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  SME and corporate training for additive manufacturing design, production optimization, and workforce upskilling.
                </p>
                <span className="text-[11px] font-bold text-[#D32F2F] inline-flex items-center gap-1 group-hover:underline">
                  Explore Programs &rarr;
                </span>
              </div>
            </Link>

          </div>

          {/* RIGHT SIDE (3 COLUMNS): STRATEGIC PARTNERS + CTA */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-[#EAEAEA] p-6 flex flex-col justify-between shadow-sm">
            <div className="flex-1 flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                STRATEGIC PARTNERS
              </span>

              <div className="grid grid-rows-2 gap-4 flex-1 my-1">
                {/* LOGO 1: EOS */}
                <a
                  href="https://www.eos.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit EOS Official Website"
                  className="p-4 rounded-xl border-2 border-gray-200 bg-gray-50/60 hover:bg-white flex items-center justify-center h-full hover:border-[#D32F2F] hover:shadow-md transition-all cursor-pointer group"
                >
                  <img
                    src="/eos.png"
                    alt="EOS Ecosystem Partner"
                    className="max-h-16 max-w-[85%] w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </a>

                {/* LOGO 2: MATERIALISE */}
                <a
                  href="https://www.materialise.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit Materialise Official Website"
                  className="p-4 rounded-xl border-2 border-gray-200 bg-gray-50/60 hover:bg-white flex items-center justify-center h-full hover:border-[#D32F2F] hover:shadow-md transition-all cursor-pointer group"
                >
                  <img
                    src="/Materialise-Logo.jpg"
                    alt="Materialise Partner"
                    className="max-h-16 max-w-[85%] w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* ACTION CTA BUTTON */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                href="/training"
                className="w-full py-3 px-4 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore All Programs</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

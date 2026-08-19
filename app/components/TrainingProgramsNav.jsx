"use client";

import Link from "next/link";
import { GraduationCap, School, Building2, ArrowRight, ShieldCheck } from "lucide-react";

export default function TrainingProgramsNav() {
  return (
    <section className="py-16 lg:py-24 bg-white text-[#222222] border-t border-[#EAEAEA] font-sans relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-10 border-b border-[#EAEAEA] pb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
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

          {/* CENTER COLUMN (5 COLUMNS): 3 CLICKABLE NAVIGATION CARDS STACKED VERTICALLY */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            
            {/* CARD 1: SCHOOLS */}
            <Link
              href="/training#schools"
              className="group bg-white hover:bg-gray-50/80 rounded-2xl border border-[#EAEAEA] hover:border-[#D32F2F] p-5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-between shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50 text-[#D32F2F] border border-red-100 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F] transition-colors shrink-0">
                  <School size={22} />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                    Schools
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    STEM, innovation, and 3D printing exposure programs for school students.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D32F2F] mt-2 group-hover:underline">
                    View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              <ArrowRight size={18} className="text-gray-400 group-hover:text-[#D32F2F] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>

            {/* CARD 2: COLLEGES & UNIVERSITIES */}
            <Link
              href="/training#colleges"
              className="group bg-white hover:bg-gray-50/80 rounded-2xl border border-[#EAEAEA] hover:border-[#D32F2F] p-5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-between shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50 text-[#D32F2F] border border-red-100 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F] transition-colors shrink-0">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                    Colleges &amp; Universities
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    Workshops, internships, faculty development programs, research support, and AM curriculum integration.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D32F2F] mt-2 group-hover:underline">
                    View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              <ArrowRight size={18} className="text-gray-400 group-hover:text-[#D32F2F] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>

            {/* CARD 3: INDUSTRY */}
            <Link
              href="/training#industry"
              className="group bg-white hover:bg-gray-50/80 rounded-2xl border border-[#EAEAEA] hover:border-[#D32F2F] p-5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-between shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50 text-[#D32F2F] border border-red-100 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F] transition-colors shrink-0">
                  <Building2 size={22} />
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                    Industry
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">
                    DfAM training, AM implementation, production readiness, process optimization, and workforce upskilling.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D32F2F] mt-2 group-hover:underline">
                    View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              <ArrowRight size={18} className="text-gray-400 group-hover:text-[#D32F2F] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
            </Link>

          </div>

          {/* RIGHT COLUMN (3 COLUMNS): STRATEGIC PARTNERS SIDEBAR CARD */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-[#EAEAEA] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-4 border-b border-gray-100 pb-2.5">
                Strategic Partners
              </h4>

              {/* PARTNER CARDS */}
              <div className="space-y-3 mb-6">
                
                {/* PARTNER 1: MATERIALISE */}
                <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0 border border-gray-200 shadow-sm mt-0.5">
                    <ShieldCheck className="text-[#D32F2F]" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#111111] block">Materialise</span>
                    <span className="text-[11px] text-gray-600 leading-snug block mt-0.5">
                      Industrial software and additive manufacturing workflow solutions.
                    </span>
                  </div>
                </div>

                {/* PARTNER 2: EOS */}
                <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0 border border-gray-200 shadow-sm mt-0.5">
                    <img src="/eos.png" alt="EOS Partner" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#111111] block">EOS</span>
                    <span className="text-[11px] text-gray-600 leading-snug block mt-0.5">
                      Industrial DMLS metal additive manufacturing technology partner.
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA BUTTON: EXPLORE TRAINING PROGRAMS */}
            <Link
              href="/training"
              className="w-full py-3.5 px-4 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg group cursor-pointer"
            >
              <span>Explore Training Programs</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

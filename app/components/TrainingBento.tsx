"use client";

import React from "react";
import { GraduationCap, School, Building2, CheckCircle2, ArrowRight, Clock, Users, Award, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

const DESTINATION_PROGRAMS = [
  {
    id: "school-training",
    icon: School,
    badge: "K-12 & STEM Education",
    title: "School STEM & 3D Printing Program",
    subtitle: "Nurturing early innovation, 3D spatial thinking, and digital manufacturing skills for young minds.",
    overview: "Hands-on exposure to 3D printing and spatial thinking tailored for school students (K-12). Students learn spatial design principles, basic CAD modeling, and witness live 3D printing of custom models.",
    outcomes: [
      "Understanding additive manufacturing fundamentals & 3D space",
      "Hands-on CAD design & 3D printing workflow experience",
      "Problem-solving and creative engineering mindset",
      "Awareness of future Industry 4.0 technology careers"
    ],
    modules: [
      "STEM learning",
      "Basic CAD exposure",
      "3D printing demonstrations",
      "Innovation workshops",
      "Future manufacturing awareness"
    ],
    duration: "1 to 3 Days | Interactive Hands-on Workshop",
    eligibility: "Students from Grade 6 to Grade 12 & STEM Educators",
    benefits: [
      "Early technological exposure & career awareness",
      "Practical hands-on spatial problem solving",
      "Certified STEM Program Completion Certificate",
      "School STEM Lab Setup Support & Guidance"
    ],
  },
  {
    id: "college-training",
    icon: GraduationCap,
    badge: "Undergraduate & Post-Graduate Tracks",
    title: "College & University Additive Manufacturing Program",
    subtitle: "Advanced DfAM curriculum, CAD/CAM integration, and industrial workshop training for engineering students and faculty.",
    overview: "Comprehensive academic partnership offering hands-on DfAM curriculum integration, faculty development programs (FDP), student internships, and research laboratory support.",
    outcomes: [
      "Mastering Design for Additive Manufacturing (DfAM) rules",
      "CAD/CAM parametric modeling and topology optimization",
      "Hands-on operation of industrial DMLS, SLS & FDM systems",
      "Research publication and capstone project execution"
    ],
    modules: [
      "CAD/CAM training",
      "Design for Additive Manufacturing (DfAM)",
      "Industry workshops",
      "Internships",
      "Research collaboration",
      "Certification programs"
    ],
    duration: "2 Weeks to 6 Months | Certificate & Internship Tracks",
    eligibility: "B.Tech / M.Tech / Diploma Mechanical, Aerospace, Materials & Industrial Engineering Students & Faculty",
    benefits: [
      "Industry-accredited certification for resume enhancement",
      "Real-world prototype production on commercial 3D printers",
      "Direct internship placement pathways with AM leaders",
      "Co-authored research paper publication opportunities"
    ],
  },
  {
    id: "industry-training",
    icon: Building2,
    badge: "Enterprise & Workforce Upskilling",
    title: "Industry Workforce Upskilling Program",
    subtitle: "Specialized production readiness, DfAM optimization, and industrial hardware workflow training for manufacturing engineers and enterprises.",
    overview: "Targeted executive upskilling for engineering teams to transition traditional subtractive manufacturing designs into lightweight, production-ready 3D printed components.",
    outcomes: [
      "Lightweighting and lattice structural optimization for aerospace",
      "EOS DMLS and Materialise Magics industrial software mastery",
      "Thermal stress reduction, build orientation & support strategy",
      "Production readiness assessment and cost-per-part reduction"
    ],
    modules: [
      "DfAM implementation",
      "Production optimization",
      "EOS and Materialise workflow training",
      "Industrial AM processes",
      "Manufacturing readiness",
      "Workforce skill development"
    ],
    duration: "3 Days to 2 Weeks | Custom Executive & Enterprise Cohorts",
    eligibility: "Industry Professionals, Design Engineers, R&D Managers & Production Specialists",
    benefits: [
      "Drastic reduction in component weight and iteration time",
      "Mastery of EOS DMLS and Materialise Magics workflows",
      "Enterprise AM adoption roadmap and production readiness",
      "Direct technical consultation for active client projects"
    ],
  },
];

export default function TrainingBento() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-[#EAEAEA] font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="border-b border-[#EAEAEA] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
              <Award size={16} /> Specialized Training Curriculum
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
              Program Details &amp; Curriculum
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-gray-600 leading-relaxed md:text-right">
            Detailed learning modules, duration, eligibility, and accreditation outcomes for schools, universities, and industrial enterprises.
          </p>
        </div>

        {/* 3 DESTINATION DETAIL SECTIONS */}
        <div className="space-y-12">
          {DESTINATION_PROGRAMS.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-28 bg-white rounded-2xl border border-[#EAEAEA] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                
                {/* HERO TITLE & BADGE */}
                <div className="border-b border-gray-100 pb-6 mb-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#D32F2F] border border-red-100 text-xs font-bold uppercase tracking-wider">
                      <IconComponent size={14} /> {program.badge}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                      <Clock size={14} className="text-[#D32F2F]" /> {program.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight mb-2">
                    {program.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D32F2F] font-bold">
                    {program.subtitle}
                  </p>
                </div>

                {/* PROGRAM OVERVIEW */}
                <div className="mb-8 bg-gray-50/70 p-5 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
                    <BookOpen size={16} className="text-[#D32F2F]" /> Program Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {program.overview}
                  </p>
                </div>

                {/* 2-COLUMN GRID (MODULES & OUTCOMES ON LEFT / ELIGIBILITY & BENEFITS ON RIGHT) */}
                <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
                  
                  {/* LEFT SIDE: TRAINING MODULES & LEARNING OUTCOMES */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* TRAINING MODULES */}
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3 flex items-center gap-2">
                        <Sparkles size={16} className="text-[#D32F2F]" /> Key Training Modules
                      </h4>

                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {program.modules.map((module, mIdx) => (
                          <div key={mIdx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-gray-200/80 text-xs font-semibold text-[#111111] shadow-2xs">
                            <CheckCircle2 size={16} className="text-[#D32F2F] shrink-0" />
                            <span>{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* LEARNING OUTCOMES */}
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3 flex items-center gap-2">
                        <Award size={16} className="text-emerald-600" /> Learning Outcomes
                      </h4>

                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] mt-1.5 shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* RIGHT SIDE: ELIGIBILITY & BENEFITS */}
                  <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-200/80 space-y-6">
                    
                    {/* ELIGIBILITY */}
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
                        <Users size={15} className="text-[#D32F2F]" /> Who Should Attend / Eligibility
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed font-medium">
                        {program.eligibility}
                      </p>
                    </div>

                    {/* BENEFITS */}
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3 flex items-center gap-2">
                        <Award size={15} className="text-[#D32F2F]" /> Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA BUTTON: ENQUIRE NOW */}
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg group cursor-pointer"
                      >
                        <span>Enquire Now</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

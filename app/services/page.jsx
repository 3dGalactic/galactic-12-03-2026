"use client";

import Link from "next/link";
import {
  Rocket,
  Factory,
  Shapes,
  Wrench,
  Box,
  Users,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Globe2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      key: "rapid-prototyping",
      title: "Rapid Prototyping",
      intro: "Validate concepts fast using high-detail resins and engineering polymers.",
      desc: "Compress weeks into days with fit-feel-function iterations. Align stakeholders early, reduce risk before tooling, and accelerate design confidence.",
      features: [
        "High-detail resin and engineering polymers",
        "Functional testing and quick iteration loops",
        "Design refinements before production tooling",
      ],
      primaryHref: "/submit",
      secondaryHref: "/contact",
      Icon: Rocket,
    },
    {
      key: "contract-manufacturing",
      title: "Contract Manufacturing",
      intro: "Production-grade parts with documentation, consistency, and repeatability at scale.",
      desc: "From pilot runs to steady production: qualified parameters, traceability, and dimensional reports so every shipment meets spec—program after program.",
      features: [
        "Process documentation and material traceability",
        "Dimensional reports and sign-offs",
        "Stable, repeatable production at scale",
      ],
      primaryHref: "/submit",
      secondaryHref: "/contact",
      Icon: Factory,
    },
    {
      key: "dfam-design",
      title: "DFAM & Product Design",
      intro: "Optimize for additive: lattices, topology, part consolidation for lighter products.",
      desc: "Co-engineer lighter, stronger parts. Reduce assemblies and unlock internal features that machining can't reach—while ensuring manufacturability.",
      features: [
        "Lattice infill and topology optimization",
        "Part consolidation and BOM reduction",
        "DFAM reviews and manufacturability checks",
      ],
      primaryHref: "/contact",
      secondaryHref: "/contact",
      Icon: Shapes,
    },
    {
      key: "reverse-engineering",
      title: "Reverse Engineering",
      intro: "Scan and reconstruct parts to create production-ready parametric CAD.",
      desc: "Capture geometry, rebuild parametric models, and define tolerances so legacy spares can be produced reliably on demand.",
      features: [
        "3D scanning and mesh processing",
        "Parametric CAD reconstruction",
        "Tolerance definition for production",
      ],
      primaryHref: "/contact",
      secondaryHref: "/contact",
      Icon: Wrench,
    },
    {
      key: "part-production",
      title: "Part Production",
      intro: "Reliable batch and continuous production using SLS, FDM, and metal AM with inspections.",
      desc: "Qualified parameters, controlled post-processing, and inspection so every part meets performance and regulatory requirements.",
      features: [
        "SLS, FDM, and metal AM capabilities",
        "Post-processing and finishing controls",
        "Incoming/outgoing inspection protocols",
      ],
      primaryHref: "/submit",
      secondaryHref: "/contact",
      Icon: Box,
    },
    {
      key: "designer-marketplace",
      title: "Designer Marketplace",
      intro: "Explore, upload, and sell printable designs; source ready-to-manufacture files.",
      desc: "A curated catalog of printable components. Go from digital inventory to on-demand production with a click.",
      features: [
        "Curated, production-ready designs",
        "Sell or source high-performance parts",
        "Seamless quote-to-production flow",
      ],
      primaryHref: "/marketplace",
      secondaryHref: "/contact",
      Icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#D32F2F] selection:text-white relative">
      
      {/* SUBTLE ENGINEERING GRID BACKGROUND OVERLAY MATCHING HOMEPAGE */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 border-b border-[#EAEAEA] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-mono font-extrabold uppercase tracking-wider shadow-xs">
                <Sparkles size={14} /> End-to-End Capabilities
              </div>
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight">
                Our Industrial <span className="text-[#D32F2F]">Services</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                From initial concept to full scale production: DfAM engineering, rapid prototyping, additive manufacturing, and quality delivery—seamlessly connected.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => {
                const IconComponent = svc.Icon;
                return (
                  <div
                    key={svc.key}
                    className="bg-white rounded-2xl border-2 border-[#EAEAEA] p-8 shadow-sm hover:border-[#D32F2F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div>
                      {/* ICON HEADER */}
                      <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 text-[#D32F2F] flex items-center justify-center mb-6 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors duration-300 shadow-xs">
                        <IconComponent size={26} />
                      </div>

                      {/* TITLE & INTRO */}
                      <h3 className="text-2xl font-black uppercase tracking-tight text-[#111111] mb-2 group-hover:text-[#D32F2F] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-extrabold text-[#D32F2F] mb-3 leading-snug">
                        {svc.intro}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium mb-6">
                        {svc.desc}
                      </p>

                      {/* FEATURE CHECKMARKS */}
                      <div className="space-y-2.5 mb-8 border-t border-gray-100 pt-6">
                        {svc.features.map((f, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs font-semibold text-gray-800">
                            <CheckCircle2 size={16} className="text-[#D32F2F] shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="pt-4 border-t border-[#EAEAEA] flex flex-wrap gap-3">
                      <Link
                        href={svc.primaryHref}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                      >
                        <span>Submit CAD</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href={svc.secondaryHref}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#111111] text-xs font-extrabold uppercase tracking-wider border border-gray-300 transition-all cursor-pointer"
                      >
                        <span>Contact Team</span>
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUTRO CTA BANNER */}
        <section className="py-20 bg-gray-50 text-[#111111] border-t border-[#EAEAEA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                Initiate Production
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
                Ready to Accelerate Your Manufacturing Production?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Submit your CAD files for confidential DfAM review, material selection, and production quote within 24 hours.
              </p>

              {/* STAT BADGES */}
              <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-bold text-gray-700">
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 flex items-center gap-2 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#D32F2F]" /> ISO-Certified Facility
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 flex items-center gap-2 shadow-xs">
                  <Clock3 className="w-4 h-4 text-[#D32F2F]" /> 24-48h Rapid Turnaround
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 flex items-center gap-2 shadow-xs">
                  <Globe2 className="w-4 h-4 text-[#D32F2F]" /> Aerospace & Defense Grade
                </span>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-corporate-primary">
                  Submit CAD File / Request Quote <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-corporate-secondary border-gray-300 bg-white text-[#111111] hover:bg-gray-100 cursor-pointer"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

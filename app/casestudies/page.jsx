"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, ArrowUpRight } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "aerospace-titanium-bracket",
    title: "Lightweight Aerospace Jet Engine Bracket Redesign",
    client: "Global Defense & Aerospace OEM",
    industry: "Aerospace",
    technology: "DMLS (Direct Metal Laser Sintering)",
    material: "Titanium Ti6Al4V Grade 5",
    machine: "EOS M 290",
    challenge: "Original CNC machined aluminum engine bracket was heavy (1.85 kg), required 6 separate sub-assembly fasteners, and had a 12-week forging lead time.",
    solution: "Topology optimized single-piece generative titanium lattice structure produced via DMLS additive manufacturing with internal stress reduction annealing.",
    results: [
      "62% Weight Reduction (1.85 kg down to 0.70 kg)",
      "Zero assembly required (Monolithic consolidated part)",
      "Lead time reduced from 12 weeks to 4 days",
      "Passed 150% structural proof load vibration tests"
    ],
    beforeAfter: {
      before: "Legacy 6-Piece Assembly (1.85 kg)",
      after: "Galactic 3D Monolithic Titanium Bracket (0.70 kg)",
    },
  },
  {
    id: "automotive-robotic-gripper",
    title: "Integrated Lightweight Robotic EOAT Gripper",
    client: "Tier-1 Automotive Assembly Integrator",
    industry: "Automotive",
    technology: "SLS (Selective Laser Sintering)",
    material: "PA12 Nylon + Carbon Fiber Composite",
    machine: "EOS P 396",
    challenge: "Heavy CNC aluminum end-of-arm tooling limited robot arm acceleration, causing bottleneck cycle times and frequent pneumatic line snagging.",
    solution: "Internal conformal air channels printed directly inside SLS nylon body, eliminating external hoses and reducing gripper weight by 55%.",
    results: [
      "55% Payload Weight Reduction",
      "Internal pneumatic channels eliminate hose entanglement",
      "30% Increase in pick-and-place robot cycle speed",
      "Integrated quick-change coupler geometry"
    ],
    beforeAfter: {
      before: "Heavy CNC Aluminum Gripper (4.2 kg)",
      after: "Internal Channel SLS Nylon Gripper (1.9 kg)",
    },
  },
  {
    id: "medical-cranial-implant",
    title: "Patient-Specific Biocompatible Cranial Implant",
    client: "Super-Specialty Neurosurgery Center",
    industry: "Medical",
    technology: "DMLS (Direct Metal Laser Sintering)",
    material: "Titanium Grade 5 (Ti6Al4V ELI)",
    machine: "EOS M 290",
    challenge: "Standard off-the-shelf mesh plates required manual bending during surgery, extending OR procedure duration and increasing infection risks.",
    solution: "CT-scan derived patient-matched titanium cranial plate with porous trabecular border lattice for rapid bone in-growth.",
    results: [
      "40% Reduction in operating room surgical time",
      "100% Anatomical fit precision from patient CT data",
      "Integrated porous lattice for biological osseo-integration",
      "Validated bio-compatible batch sterilization protocol"
    ],
    beforeAfter: {
      before: "Hand-Bent Standard Titanium Mesh",
      after: "Patient-Matched CT-Guided DMLS Implant",
    },
  },
];

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState(CASE_STUDIES[0]);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#D32F2F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
              Technical Documentation
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Industrial Case Studies
            </h1>
            <p className="mt-2 text-gray-600 text-sm max-w-2xl">
              Real-world DfAM case studies detailing topology optimization, weight reduction, lead time compression, and ROI.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-corporate-primary"
          >
            Submit Your CAD Challenge <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CASE SELECTOR TABS */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {CASE_STUDIES.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCase(cs)}
              className={`p-5 rounded-xl border text-left transition duration-300 ${
                selectedCase.id === cs.id
                  ? "border-[#D32F2F] bg-red-50/40 text-[#111111] shadow-sm"
                  : "border-[#EAEAEA] bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <h3 className="text-sm font-bold text-[#111111] mb-1.5">{cs.title}</h3>
              <span className="text-xs text-[#D32F2F] font-semibold block">{cs.material}</span>
            </button>
          ))}
        </div>

        {/* SELECTED CASE STUDY DETAIL */}
        <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6 sm:p-10 space-y-8 shadow-sm">
          {/* HEADER */}
          <div className="border-b border-[#EAEAEA] pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                {selectedCase.title}
              </h2>
              <p className="text-gray-600 text-xs mt-1">Client Sector: <span className="font-semibold text-gray-900">{selectedCase.client}</span></p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-[#EAEAEA] text-xs">
              <div>
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Material:</span>
                <span className="text-[#111111] font-bold">{selectedCase.material}</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase font-bold">Machine Fleet:</span>
                <span className="text-[#111111] font-bold">{selectedCase.machine}</span>
              </div>
            </div>
          </div>

          {/* CHALLENGE vs SOLUTION */}
          <div className="grid md:grid-cols-2 gap-8 text-xs leading-relaxed">
            <div className="p-6 rounded-xl border border-red-200 bg-red-50/30 space-y-3">
              <h4 className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D32F2F]" /> Engineering Challenge
              </h4>
              <p className="text-gray-700 font-medium">{selectedCase.challenge}</p>
              <div className="mt-4 p-3 rounded-lg bg-white border border-red-100 text-gray-600 text-[11px]">
                <span className="text-gray-400 block text-[10px] font-bold uppercase">Legacy State:</span>
                {selectedCase.beforeAfter.before}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-3">
              <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Galactic DfAM Solution
              </h4>
              <p className="text-gray-700 font-medium">{selectedCase.solution}</p>
              <div className="mt-4 p-3 rounded-lg bg-white border border-emerald-100 text-emerald-800 font-bold text-[11px]">
                <span className="text-gray-400 block text-[10px] font-bold uppercase">Optimized State:</span>
                {selectedCase.beforeAfter.after}
              </div>
            </div>
          </div>

          {/* RESULTS & METRICS */}
          <div className="border-t border-[#EAEAEA] pt-8 space-y-4">
            <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#D32F2F]" /> Measured Quantitative Impact
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedCase.results.map((res, r) => (
                <div
                  key={r}
                  className="p-4 rounded-xl border border-[#EAEAEA] bg-gray-50 flex items-start gap-3 text-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

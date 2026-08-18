"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ArrowLeft, HelpCircle, FileText, PhoneCall } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What CAD file formats do you accept for quotation?",
    a: "We accept standard CAD formats including STL (.stl), STEP (.step / .stp), OBJ (.obj), IGES (.igs), and 3MF (.3mf). Files can be uploaded directly via our Instant Quote tool up to 100MB.",
    category: "Quotation & CAD",
  },
  {
    q: "What is your typical turnaround time for DMLS metal 3D printing?",
    a: "Standard lead time for DMLS metal printing (Titanium, Stainless Steel 316L, Inconel) is 3-5 business days. Express 24-48 hour production dispatch is available upon request.",
    category: "Lead Times",
  },
  {
    q: "What dimensional tolerances can Galactic 3D guarantee?",
    a: "For DMLS metal parts, standard tolerances are ±0.05 mm or ±0.2% (whichever is greater). For SLS Nylon powder printing, tolerances are ±0.1 mm. Precision CNC post-machining is available for critical bearing surfaces down to ±0.005 mm.",
    category: "Quality & Tolerances",
  },
  {
    q: "Are your manufacturing facility and quality systems certified?",
    a: "Yes. Galactic 3D operates under certified ISO 9001:2015 Quality Management Systems and AS9100D Aerospace standards. CMM dimensional inspection reports and material test certificates (MTC) are included upon request.",
    category: "Quality & Tolerances",
  },
  {
    q: "How do you protect proprietary CAD intellectual property?",
    a: "All file uploads and technical drawings are protected by strict Non-Disclosure Agreements (NDAs). Data is stored on 256-bit encrypted servers and is never shared, sold, or exposed to third parties.",
    category: "Security & IP",
  },
  {
    q: "Can you assist with Design for Additive Manufacturing (DfAM)?",
    a: "Yes! Our team of additive manufacturing engineers provides full DfAM optimization, including wall thickness analysis, overhang support reduction, topology optimization, and weight reduction recommendations.",
    category: "Engineering & DfAM",
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState(null);

  const filtered = FAQ_ITEMS.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  // Generate JSON-LD FAQ Schema for Google Rich Results SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Inject Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#D32F2F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
            Help & Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-gray-600 text-sm max-w-xl mx-auto">
            Find immediate technical answers regarding lead times, CAD file compatibility, DMLS tolerances, and ISO 9001 quality controls.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tolerances, lead times, STL formats..."
            className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-xs text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#D32F2F]"
          />
        </div>

        {/* ACCORDION FAQ LIST */}
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="border border-[#EAEAEA] rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#111111] hover:bg-gray-50 transition"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#D32F2F] shrink-0" />
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180 text-[#D32F2F]" : ""
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="p-5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA FOOTER */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-[#EAEAEA] text-center space-y-4">
          <h3 className="text-xl font-bold text-[#111111]">Have a Custom Engineering Question?</h3>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Our additive manufacturing technical specialists are available to review your drawings and provide DfAM feedback.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href="mailto:admin@galactic-3d.com?subject=Technical%20Inquiry%20to%20Galactic%203D%20Team"
              className="px-6 py-3 rounded-lg bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-widest transition"
            >
              Email Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

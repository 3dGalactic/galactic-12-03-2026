"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, ArrowRight, X, Sparkles, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CERTIFICATIONS = [
  {
    id: "iso",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    badge: "Certified QMS",
    logo: "/ios.webp",
    fullImage: "/iso-cert-full.png",
    side: "left", // Click opens detail panel on RIGHT side column
    bullets: [
      "Certified quality management system",
      "Consistent manufacturing processes",
      "Audited compliance for industrial parts"
    ]
  },
  {
    id: "startup",
    title: "Startup India Recognition",
    subtitle: "DPIIT Government Recognition",
    badge: "DPIIT Recognized",
    logo: "/startup.png",
    fullImage: "/startup-india-full.png",
    side: "right", // Click opens detail panel on LEFT side column
    bullets: [
      "DPIIT-recognized deep-tech startup",
      "Pioneering indigenous metal 3D printing",
      "Industry 4.0 advanced manufacturing focus"
    ]
  },
  {
    id: "sustainability",
    title: "Sustainability Audit",
    subtitle: "Greenvio Eco Certificate",
    badge: "Eco Approved",
    logo: "/greenvio.png",
    fullImage: "/sustainability-audit-full.png",
    side: "right", // Click opens detail panel on LEFT side column
    bullets: [
      "Eco-friendly powder recycling workflows",
      "Resource-efficient energy optimization",
      "Zero-waste additive manufacturing pledge"
    ]
  }
];

export default function TrustCertifications() {
  const [activeCertId, setActiveCertId] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const activeCert = CERTIFICATIONS.find((c) => c.id === activeCertId);

  return (
    <section className="py-16 lg:py-24 bg-white text-[#111111] border-t border-b border-[#EAEAEA] font-sans relative overflow-hidden">
      
      {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-10 border-b border-[#EAEAEA] pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111] tracking-tight leading-none">
              Certifications &amp; <span className="text-[#E53935]">Recognitions</span>
            </h2>
          </div>
          {activeCert && (
            <button
              onClick={() => setActiveCertId(null)}
              className="text-xs font-bold text-gray-500 hover:text-[#E53935] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <X size={14} /> Reset View
            </button>
          )}
        </div>

        {/* 2-COLUMN ASYMMETRICAL GRID (100% ALIGNED INSIDE BOX) */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative">
          
          {/* LEFT COLUMN (50% WIDTH): SHOWS ISO CARD OR DETAIL PANEL FOR RIGHT-SIDE CARDS */}
          <div className="lg:col-span-6 flex flex-col h-full">
            {activeCert && activeCert.side === "right" ? (
              
              /* DETAIL PANEL FOR RIGHT-SIDE CARDS (SHOWS HERE ON THE LEFT SIDE, ALIGNED IN GRID) */
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full bg-white rounded-[24px] border-2 border-[#E53935] p-6 sm:p-8 shadow-md flex flex-col justify-between relative"
              >
                <button
                  onClick={() => setActiveCertId(null)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-full bg-gray-100 hover:bg-[#E53935] transition cursor-pointer"
                  aria-label="Close detail view"
                >
                  <X size={16} />
                </button>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 text-[#E53935] border border-red-100 text-[10px] font-extrabold uppercase tracking-wider">
                      <ShieldCheck size={11} /> {activeCert.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-400">
                      Certificate Inspection
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase text-[#111111] mb-4">
                    {activeCert.title}
                  </h3>

                  {/* LARGE PORTRAIT CERTIFICATE IMAGE DISPLAY - CLEARLY VISIBLE */}
                  <div 
                    onClick={() => setExpandedImage(activeCert.fullImage)}
                    className="w-full aspect-[3/4] h-[340px] sm:h-[400px] bg-white rounded-xl overflow-hidden mb-5 border-2 border-gray-200 p-2 flex items-center justify-center shadow-md hover:border-[#E53935] transition-all cursor-pointer relative group/cert"
                  >
                    <img
                      src={activeCert.fullImage}
                      alt={activeCert.title}
                      className="w-full h-full object-contain drop-shadow"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 rounded-xl">
                      <ZoomIn size={16} /> Click to expand full resolution
                    </div>
                  </div>

                  {/* BULLET HIGHLIGHTS */}
                  <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                    {activeCert.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 size={15} className="text-[#E53935] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            ) : (

              /* DEFAULT ISO 9001 CARD (LEFT SIDE) */
              (() => {
                const cert = CERTIFICATIONS[0]; // ISO
                const isSelected = activeCertId === cert.id;
                return (
                  <div
                    onClick={() => setActiveCertId((prev) => (prev === cert.id ? null : cert.id))}
                    className={`group relative text-left bg-white rounded-[24px] border-2 p-8 sm:p-10 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer flex flex-col justify-between w-full h-full shadow-sm hover:shadow-[0_0_30px_rgba(229,57,53,0.18)] overflow-hidden ${
                      isSelected
                        ? "border-[#E53935] ring-2 ring-[#E53935]/30 bg-gray-50/80 shadow-[0_0_30px_rgba(229,57,53,0.2)]"
                        : "border-[#EAEAEA] hover:border-[#E53935]"
                    }`}
                  >
                    <div>
                      {/* STATUS TAG */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#E53935] border border-red-100 text-[10px] font-extrabold uppercase tracking-wider">
                          <Sparkles size={11} /> {cert.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#E53935] transition-colors">
                          01 / 03
                        </span>
                      </div>

                      {/* LOGO THUMBNAIL CENTERED */}
                      <div className="relative aspect-[16/10] max-h-56 bg-white rounded-xl overflow-hidden mb-6 border border-gray-200 flex items-center justify-center p-6 group-hover:scale-102 transition-transform shadow-xs">
                        <img
                          src={cert.logo}
                          alt={cert.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] group-hover:text-[#E53935] transition-colors mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        {cert.subtitle}
                      </p>
                    </div>

                    {/* BOTTOM ACTION */}
                    <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E53935]">
                      <span>{isSelected ? "Viewing details on right →" : "Click to view details on right →"}</span>
                      <ArrowRight size={16} className={`transition-transform ${isSelected ? "translate-x-1 font-bold" : "group-hover:translate-x-1"}`} />
                    </div>
                  </div>
                );
              })()

            )}
          </div>

          {/* RIGHT COLUMN (50% WIDTH): SHOWS RIGHT CARDS OR DETAIL PANEL FOR ISO CARD */}
          <div className="lg:col-span-6 flex flex-col h-full">
            {activeCert && activeCert.side === "left" ? (

              /* DETAIL PANEL FOR ISO CARD (SHOWS HERE ON THE RIGHT SIDE, ALIGNED IN GRID) */
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full bg-white rounded-[24px] border-2 border-[#E53935] p-6 sm:p-8 shadow-md flex flex-col justify-between relative min-h-[440px]"
              >
                <button
                  onClick={() => setActiveCertId(null)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-white p-1.5 rounded-full bg-gray-100 hover:bg-[#E53935] transition cursor-pointer"
                  aria-label="Close detail view"
                >
                  <X size={16} />
                </button>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 text-[#E53935] border border-red-100 text-[10px] font-extrabold uppercase tracking-wider">
                      <ShieldCheck size={11} /> {activeCert.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-400">
                      Certificate Inspection
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase text-[#111111] mb-4">
                    {activeCert.title}
                  </h3>

                  {/* LARGE PORTRAIT CERTIFICATE IMAGE DISPLAY - CLEARLY VISIBLE */}
                  <div 
                    onClick={() => setExpandedImage(activeCert.fullImage)}
                    className="w-full aspect-[3/4] h-[340px] sm:h-[400px] bg-white rounded-xl overflow-hidden mb-5 border-2 border-gray-200 p-2 flex items-center justify-center shadow-md hover:border-[#E53935] transition-all cursor-pointer relative group/cert"
                  >
                    <img
                      src={activeCert.fullImage}
                      alt={activeCert.title}
                      className="w-full h-full object-contain drop-shadow"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 rounded-xl">
                      <ZoomIn size={16} /> Click to expand full resolution
                    </div>
                  </div>

                  {/* BULLET HIGHLIGHTS */}
                  <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                    {activeCert.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 size={15} className="text-[#E53935] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            ) : (

              /* DEFAULT STARTUP INDIA & SUSTAINABILITY AUDIT CARDS (RIGHT SIDE) */
              <div className="flex flex-col gap-6 justify-between h-full">
                {CERTIFICATIONS.slice(1).map((cert, index) => {
                  const isSelected = activeCertId === cert.id;
                  return (
                    <div
                      key={cert.id}
                      onClick={() => setActiveCertId((prev) => (prev === cert.id ? null : cert.id))}
                      className={`group relative text-left bg-white rounded-[24px] border-2 p-6 sm:p-8 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer flex flex-col sm:flex-row items-center gap-6 w-full flex-1 shadow-sm hover:shadow-[0_0_30px_rgba(229,57,53,0.18)] overflow-hidden ${
                        isSelected
                          ? "border-[#E53935] ring-2 ring-[#E53935]/30 bg-gray-50/80 shadow-[0_0_30px_rgba(229,57,53,0.2)]"
                          : "border-[#EAEAEA] hover:border-[#E53935]"
                      }`}
                    >
                      {/* CENTERED LOGO */}
                      <div className="relative w-full sm:w-2/5 aspect-[16/10] bg-white rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center p-4 shrink-0 group-hover:scale-102 transition-transform shadow-xs">
                        <img
                          src={cert.logo}
                          alt={cert.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="text-left space-y-2 flex-grow">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 text-[#E53935] border border-red-100 text-[10px] font-extrabold uppercase tracking-wider">
                            <Sparkles size={10} /> {cert.badge}
                          </span>
                          <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#E53935] transition-colors">
                            0{index + 2} / 03
                          </span>
                        </div>

                        <h3 className="text-xl font-black uppercase text-[#111111] group-hover:text-[#E53935] transition-colors leading-tight">
                          {cert.title}
                        </h3>

                        <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#E53935]">
                          <span>{isSelected ? "← Viewing details on left" : "← Click to view details on left"}</span>
                          <ArrowRight size={14} className={`transition-transform ${isSelected ? "-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            )}
          </div>

        </div>

      </div>

      {/* FULLSCREEN HIGH-RESOLUTION LIGHTBOX MODAL */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#E53935] transition z-10 cursor-pointer"
            >
              <X size={24} />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center p-2">
              <img
                src={expandedImage}
                alt="Certificate Full View"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white p-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

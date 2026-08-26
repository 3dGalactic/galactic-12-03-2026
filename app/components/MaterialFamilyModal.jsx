"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, Eye, Download, ShieldCheck } from "lucide-react";

export default function MaterialFamilyModal({ title, slug, materials, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (materials) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [materials]);

  if (!materials || !mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        zIndex: 999999,
        margin: 0,
        padding: "1rem",
        boxSizing: "border-box",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 animate-fadeIn my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER BANNER */}
        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0b0b0b] px-6 sm:px-8 pt-8 pb-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition z-10 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#D32F2F] text-white text-[10px] font-bold uppercase tracking-wider mb-3">
            Material Family
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
        </div>

        {/* BODY */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Available Types ({materials.length})
            </p>
          </div>

          <div className="rounded-lg border border-[#EAEAEA] overflow-hidden">
            {materials.map((mat, i) => (
              <div
                key={mat.name}
                className={`flex items-center justify-between px-4 py-3 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"
                } ${i !== materials.length - 1 ? "border-b border-[#EAEAEA]" : ""}`}
              >
                <span className="text-sm font-semibold text-[#111111]">
                  {mat.name}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={`/datasheets/${encodeURIComponent(mat.file)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 border border-gray-200 px-3 py-1.5 text-xs font-bold text-[#111111] hover:bg-gray-100 transition"
                  >
                    <Eye className="w-3.5 h-3.5" /> View
                  </a>
                  <a
                    href={`/datasheets/${encodeURIComponent(mat.file)}`}
                    download
                    className="inline-flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 p-1.5 text-[#111111] hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition"
                    aria-label={`Download ${mat.name} datasheet`}
                    title="Download"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="flex items-center justify-between gap-4 p-4 sm:p-5 bg-[#F8F9FA] border-t border-[#EAEAEA]">
          <p className="text-xs text-gray-500 hidden sm:block">
            Browse every metal family we work with.
          </p>
          <Link
            href={`/materials#${slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-[#D32F2F] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#B71C1C] transition-colors"
          >
            View Full Catalog
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}
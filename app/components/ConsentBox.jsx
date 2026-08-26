"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, X, FileText } from "lucide-react";

export const CONSENT_TEXT = `By submitting this form, I consent to receiving communications from Galactic 3D regarding industrial manufacturing services, additive manufacturing solutions, DMLS metal printing, training programs, events, consultations, quotations, career opportunities, certifications, and other relevant business communications via Email, Phone, SMS, or WhatsApp.

I understand that my name, phone number, email address, company information, resume (if uploaded), and other submitted details may be processed solely for communication, recruitment, customer support, quotation requests, training enrollment, project discussions, and related business purposes.

My information will not be sold to third parties and will only be shared with authorized service providers when required for communication delivery or business operations.

Submitting this form does not guarantee employment, admission into training programs, project selection, partnership approval, quotation acceptance, certification issuance, or participation in any Galactic 3D activity.

By submitting this form, I agree to receive email notifications, WhatsApp messages, phone calls, and SMS communications related to my inquiry or application.`;

export default function ConsentBox({ value = "", onChange, error }) {
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [inputText, setInputText] = useState(value);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputText(val);

    const cleaned = val.trim().toUpperCase();
    const isValid = cleaned === "YES I ACCEPT";

    if (onChange) {
      onChange(val, isValid);
    }
  };

  const currentVal = value !== undefined && value !== null ? value : inputText;
  const cleanedVal = currentVal.trim().toUpperCase();
  const isAccepted = cleanedVal === "YES I ACCEPT";

  return (
    <div className="w-full my-4 font-sans text-left">
      <div
        className={`p-4 sm:p-5 rounded-2xl bg-gray-50 border transition-all ${
          error
            ? "border-red-500 bg-red-50/20"
            : isAccepted
            ? "border-emerald-500 bg-emerald-50/10"
            : "border-gray-200 focus-within:border-[#D32F2F] focus-within:bg-white"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111]">
            DATA PRIVACY CONSENT
          </h4>

          {/* SECONDARY REVIEW POLICY BUTTON */}
          <button
            type="button"
            onClick={() => setShowPolicyModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E53935] bg-white text-[#E53935] hover:bg-red-50 text-xs font-bold transition shadow-2xs cursor-pointer active:scale-95"
          >
            <FileText size={14} />
            <span>Review Policy</span>
          </button>
        </div>

        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
          Please type:
          <span className="block mt-1 font-mono font-black text-sm text-[#D32F2F] tracking-wide">
            &quot;YES I ACCEPT&quot;
          </span>
        </p>

        <div className="relative">
          <input
            type="text"
            id="consentInput"
            value={currentVal}
            onChange={handleInputChange}
            placeholder="YES I ACCEPT"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-[#111111] font-bold tracking-wide placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition shadow-xs uppercase pr-32 sm:pr-36"
          />

          {isAccepted && (
            <span className="absolute right-3 top-2.5 text-emerald-600 flex items-center gap-1.5 text-xs font-black bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
              <CheckCircle2 size={16} /> YES I ACCEPT
            </span>
          )}
        </div>
      </div>

      {/* VALIDATION ERROR MESSAGE */}
      {error && (
        <p className="mt-2 text-xs font-bold text-[#D32F2F] flex items-center gap-1">
          Please type &quot;YES I ACCEPT&quot; to proceed.
        </p>
      )}

      {/* POLICY REVIEW MODAL OVERLAY */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl max-w-xl w-full max-h-[85vh] flex flex-col overflow-hidden relative my-auto">
            {/* MODAL HEADER */}
            <div className="bg-[#111111] p-5 sm:p-6 text-white flex items-center justify-between shrink-0 border-b border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D32F2F]/20 border border-[#D32F2F]/40 flex items-center justify-center text-[#D32F2F]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-white">
                    DATA PRIVACY &amp; COMMUNICATION CONSENT
                  </h3>
                  <p className="text-[11px] text-gray-400 font-mono">Galactic 3D Official Policy Terms</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* MODAL BODY (SCROLLABLE) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              {CONSENT_TEXT.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-700 font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold transition cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-5 py-2 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

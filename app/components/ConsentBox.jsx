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
    <div className="w-full my-4 font-sans text-left relative">
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

          {/* INLINE REVIEW POLICY BUTTON */}
          <button
            type="button"
            onClick={() => setShowPolicyModal(!showPolicyModal)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E53935] bg-white text-[#E53935] hover:bg-red-50 text-xs font-bold transition shadow-2xs cursor-pointer active:scale-95"
          >
            <FileText size={14} />
            <span>{showPolicyModal ? "Hide Policy" : "Review Policy"}</span>
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

        {/* IN-PLACE POLICY POPUP BOX */}
        {showPolicyModal && (
          <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#D32F2F] shadow-xl animate-in fade-in zoom-in-95 duration-200 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#D32F2F]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase text-[#111111]">
                  Data Privacy &amp; Communication Terms
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#D32F2F] text-gray-500 hover:text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Close policy"
              >
                <X size={15} />
              </button>
            </div>

            <div className="max-h-52 overflow-y-auto space-y-2 pr-1 text-xs text-gray-600 leading-relaxed font-sans border-b border-gray-100 pb-3">
              {CONSENT_TEXT.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-4 py-1.5 rounded-lg bg-[#D32F2F] hover:bg-red-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                Close Policy
              </button>
            </div>
          </div>
        )}
      </div>

      {/* VALIDATION ERROR MESSAGE */}
      {error && (
        <p className="mt-2 text-xs font-bold text-[#D32F2F] flex items-center gap-1">
          Please type &quot;YES I ACCEPT&quot; to proceed.
        </p>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#D32F2F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-[#D32F2F]" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Terms of Service
          </h1>
        </div>

        <p className="text-gray-500 text-xs mb-8">
          Last updated: August 2026
        </p>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#111111] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Galactic 3D&apos;s website, custom 3D printing, rapid prototyping, and additive manufacturing services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111111] mb-3">2. Manufacturing Services & Specifications</h2>
            <p>
              All 3D printing orders submitted through our platform are evaluated according to customer-provided CAD/STL models and material selections (e.g., FDM, DMLS, SLA). Customers are responsible for verifying model dimensions and structural integrity.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111111] mb-3">3. Quotation & Pricing</h2>
            <p>
              Instant quotes generated online are based on initial geometry analysis. Final production pricing may be adjusted if CAD files require structural modifications or advanced post-processing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111111] mb-3">4. Intellectual Property</h2>
            <p>
              You retain full ownership of all CAD models, 3D designs, and intellectual property submitted to Galactic 3D. We store and process your data strictly for order execution.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111111] mb-3">5. Contact Information</h2>
            <p>
              For any legal or service inquiry regarding these Terms, contact our legal compliance team at{" "}
              <a href="mailto:admin@galactic-3d.com" className="text-[#D32F2F] font-bold hover:underline">
                admin@galactic-3d.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

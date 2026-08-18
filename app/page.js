"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "./components/HeroSection";
import ServiceTabs from "./components/ServiceTabs";
import TrainingProgramsNav from "./components/TrainingProgramsNav";
import TeamCarousel from "./components/TeamCarousel";
import TrustCertifications from "./components/TrustCertifications";
import IndustriesSection from "./components/IndustriesSection";
import EmailTeamModal from "./components/EmailTeamModal";
import WhyGalactic from "./components/whygalactic";

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#D32F2F] selection:text-white">
      
      {/* 1. DUAL-VIDEO HERO SECTION */}
      <HeroSection />

      {/* 2. DEDICATED TRUST & CERTIFICATIONS SECTION */}
      <TrustCertifications />

      {/* 3. MANUFACTURING SERVICES MATRIX */}
      <ServiceTabs />

      {/* 4. INDUSTRIES WE SERVE SECTION */}
      <IndustriesSection />

      {/* 5. TRAINING & INDUSTRY PROGRAMS NAVIGATION SHOWCASE (GATEWAY OVERVIEW) */}
      <TrainingProgramsNav />

      {/* 6. WHY CHOOSE GALACTIC? CAPABILITY PILLARS SECTION (PLACED RIGHT ABOVE GALACTIC TEAM) */}
      <WhyGalactic />

      {/* 7. INTERACTIVE TEAM SIGNALS SHOWCASE (GALACTIC TEAM) */}
      <TeamCarousel />

      {/* 8. ENTERPRISE CONTACT CTA BANNER - CLEAN LIGHT THEME */}
      <section className="py-20 bg-gray-50 text-[#111111] border-t border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
              Initiate Production
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Ready to Accelerate Your Manufacturing Production?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Submit your CAD files for confidential DfAM review, material selection, and production quote within 24 hours.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-corporate-primary">
                Submit CAD File / Request Quote <ArrowRight size={15} />
              </Link>
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="btn-corporate-secondary border-gray-300 bg-white text-[#111111] hover:bg-gray-100 cursor-pointer"
              >
                Email Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <EmailTeamModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />

    </div>
  );
}

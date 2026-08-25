"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function CorporateFooter() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-zinc-800 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          
          {/* COL 1: COMPANY OVERVIEW */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/navbar/logo.svg"
                alt="Galactic 3D"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Galactic 3D is a premier industrial additive manufacturing &amp; engineering organization specializing in DMLS metals, high-temp polymers, and DfAM solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} /> Industrial Metal &amp; Polymer Additive Solutions
            </div>
          </div>

          {/* COL 2: MANUFACTURING SERVICES */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#D32F2F] pl-3">
              Capabilities &amp; Services
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Direct Metal Laser Sintering (DMLS)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Fused Deposition Modeling (FDM)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Selective Laser Sintering (SLS)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Design for Additive Manufacturing (DfAM)
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Precision Post-Processing &amp; CNC
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: QUICK LINKS */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#D32F2F] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/materials" className="hover:text-white transition">
                  Materials Library
                </Link>
              </li>
              <li>
                <Link href="/casestudies" className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/workshops-events" className="hover:text-white transition">
                  Workshop/Forum
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white transition">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers Portal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: INDUSTRIAL FACILITY & CONTACT */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#D32F2F] pl-3">
              Facility &amp; Contact
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D32F2F] shrink-0 mt-0.5" />
                <span>
                  Cambridge Institute of Technology, Krishnarajapuram, Bengaluru, Karnataka 560036
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#D32F2F] shrink-0" />
                <a href="tel:+919740331995" className="hover:text-white transition">
                  +91 97403 31995
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D32F2F] shrink-0" />
                <a href="mailto:admin@galactic-3d.com" className="hover:text-white transition">
                  admin@galactic-3d.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Galactic 3D. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-zinc-300 transition">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
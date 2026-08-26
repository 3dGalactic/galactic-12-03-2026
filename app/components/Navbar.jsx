"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown, Wrench, MessageSquareText, Factory, FileText } from "lucide-react";

export default function GalacticNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

  const isIndustriesActive =
    pathname === "/industries" ||
    pathname === "/casestudies" ||
    pathname === "/case-studies" ||
    pathname.includes("industr") ||
    pathname.includes("case");

  const isEventsActive =
    pathname === "/workshops-events" ||
    pathname === "/forum" ||
    pathname.includes("workshop") ||
    pathname.includes("forum");

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EAEAEA]">
      {/* MAIN NAVIGATION HEADER CONTAINER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-3.5">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/navbar/logo.svg"
            alt="Galactic 3D"
            className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 sm:gap-4 lg:gap-6 px-1">
            <Link
              href="/"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                pathname === "/" ? "text-[#D32F2F] font-bold" : "text-[#222222] hover:text-[#D32F2F]"
              }`}
            >
              Home
              {pathname === "/" && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
            </Link>

            {/* INDUSTRIES NAVIGATION LINK & DROPDOWN MENU */}
            <div
              className="relative group flex items-center"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              {/* CLICKABLE DIRECT LINK TO INDUSTRIES PAGE */}
              <Link
                href="/industries"
                onClick={() => setIndustriesDropdownOpen(false)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors relative flex items-center gap-1 cursor-pointer ${
                  isIndustriesActive ? "text-[#D32F2F]" : "text-[#222222] hover:text-[#D32F2F]"
                }`}
              >
                <span>INDUSTRIES</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180 shrink-0" />
                {isIndustriesActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
              </Link>

              {/* DROPDOWN MENU OPTIONS */}
              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-gray-200 py-2.5 space-y-1 z-[110] animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/industries"
                    onClick={() => setIndustriesDropdownOpen(false)}
                    className="px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F] hover:bg-red-50/70 transition flex items-center justify-between group/item"
                  >
                    <span className="flex items-center gap-2">
                      <Factory size={14} className="text-[#D32F2F]" /> All Industries
                    </span>
                    <ArrowRight size={12} className="transition-transform group-hover/item:translate-x-1" />
                  </Link>
                  <Link
                    href="/casestudies"
                    onClick={() => setIndustriesDropdownOpen(false)}
                    className="px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F] hover:bg-red-50/70 transition flex items-center justify-between group/item"
                  >
                    <span className="flex items-center gap-2">
                      <FileText size={14} className="text-[#D32F2F]" /> Case Studies
                    </span>
                    <ArrowRight size={12} className="transition-transform group-hover/item:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/training"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                pathname === "/training" ? "text-[#D32F2F] font-bold" : "text-[#222222] hover:text-[#D32F2F]"
              }`}
            >
              Training
              {pathname === "/training" && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
            </Link>

            <Link
              href="/careers"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                pathname === "/careers" ? "text-[#D32F2F] font-bold" : "text-[#222222] hover:text-[#D32F2F]"
              }`}
            >
              Careers
              {pathname === "/careers" && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
            </Link>

            {/* EVENTS NAVIGATION LINK & DROPDOWN MENU */}
            <div
              className="relative group flex items-center"
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
            >
              {/* CLICKABLE DIRECT LINK TO EVENTS PAGE */}
              <Link
                href="/workshops-events"
                onClick={() => setEventsDropdownOpen(false)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors relative flex items-center gap-1 cursor-pointer ${
                  isEventsActive ? "text-[#D32F2F]" : "text-[#222222] hover:text-[#D32F2F]"
                }`}
              >
                <span>EVENTS</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180 shrink-0" />
                {isEventsActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
              </Link>

              {/* DROPDOWN MENU OPTIONS */}
              {eventsDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-2xl shadow-xl border border-gray-200 py-2.5 space-y-1 z-[110] animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/workshops-events#workshops"
                    onClick={() => setEventsDropdownOpen(false)}
                    className="px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F] hover:bg-red-50/70 transition flex items-center justify-between group/item"
                  >
                    <span className="flex items-center gap-2">
                      <Wrench size={14} className="text-[#D32F2F]" /> WORKSHOP
                    </span>
                    <ArrowRight size={12} className="transition-transform group-hover/item:translate-x-1" />
                  </Link>
                  <Link
                    href="/workshops-events#forums"
                    onClick={() => setEventsDropdownOpen(false)}
                    className="px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F] hover:bg-red-50/70 transition flex items-center justify-between group/item"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquareText size={14} className="text-[#D32F2F]" /> FORUM
                    </span>
                    <ArrowRight size={12} className="transition-transform group-hover/item:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                pathname === "/contact" ? "text-[#D32F2F] font-bold" : "text-[#222222] hover:text-[#D32F2F]"
              }`}
            >
              Contact
              {pathname === "/contact" && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
            </Link>
          </div>

          {/* GET QUOTE PRIMARY RED BUTTON */}
          <Link
            href="/contact"
            className="ml-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-2 shrink-0"
          >
            Get Quote <ArrowRight size={14} />
          </Link>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-2.5 md:hidden">
          <Link
            href="/contact"
            className="bg-[#D32F2F] text-white px-3.5 py-1.5 rounded font-bold text-[11px] uppercase tracking-wider transition shadow-xs flex items-center gap-1"
          >
            Quote <ArrowRight size={12} />
          </Link>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-gray-700 hover:text-[#D32F2F] hover:bg-gray-100 transition border border-gray-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* MOBILE EXPANDED MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAEAEA] bg-white px-5 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname === "/" ? "bg-red-50 text-[#D32F2F]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* MOBILE INDUSTRIES DROPDOWN & CLICKABLE LINK */}
            <div className="space-y-1">
              <div className={`flex items-center justify-between rounded-lg transition-colors ${
                isIndustriesActive ? "bg-red-50 text-[#D32F2F]" : "hover:bg-gray-50 text-gray-800"
              }`}>
                <Link
                  href="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider"
                >
                  INDUSTRIES
                </Link>
                <button
                  onClick={() => setMobileIndustriesOpen((prev) => !prev)}
                  className="px-4 py-2.5 text-gray-600 hover:text-[#D32F2F] cursor-pointer"
                  aria-label="Expand Industries Options"
                >
                  <ChevronDown size={14} className={`transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {mobileIndustriesOpen && (
                <div className="pl-6 space-y-1 border-l-2 border-[#D32F2F] ml-4 py-1">
                  <Link
                    href="/industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F]"
                  >
                    → All Industries
                  </Link>
                  <Link
                    href="/casestudies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F]"
                  >
                    → Case Studies
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/training"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname === "/training" ? "bg-red-50 text-[#D32F2F]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Training
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname === "/careers" ? "bg-red-50 text-[#D32F2F]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Careers
            </Link>

            {/* MOBILE EVENTS DROPDOWN & CLICKABLE LINK */}
            <div className="space-y-1">
              <div className={`flex items-center justify-between rounded-lg transition-colors ${
                isEventsActive ? "bg-red-50 text-[#D32F2F]" : "hover:bg-gray-50 text-gray-800"
              }`}>
                <Link
                  href="/workshops-events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider"
                >
                  EVENTS
                </Link>
                <button
                  onClick={() => setMobileEventsOpen((prev) => !prev)}
                  className="px-4 py-2.5 text-gray-600 hover:text-[#D32F2F] cursor-pointer"
                  aria-label="Expand Events Options"
                >
                  <ChevronDown size={14} className={`transition-transform ${mobileEventsOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {mobileEventsOpen && (
                <div className="pl-6 space-y-1 border-l-2 border-[#D32F2F] ml-4 py-1">
                  <Link
                    href="/workshops-events#workshops"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F]"
                  >
                    → WORKSHOP
                  </Link>
                  <Link
                    href="/workshops-events#forums"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-gray-800 hover:text-[#D32F2F]"
                  >
                    → FORUM
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname === "/contact" ? "bg-red-50 text-[#D32F2F]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

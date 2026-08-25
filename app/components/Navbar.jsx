"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown, Wrench, MessageSquareText } from "lucide-react";

export default function GalacticNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

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

            <Link
              href="/industries"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                pathname === "/industries" ? "text-[#D32F2F] font-bold" : "text-[#222222] hover:text-[#D32F2F]"
              }`}
            >
              Industries
              {pathname === "/industries" && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
            </Link>

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

            {/* EVENTS DROPDOWN MENU */}
            <div
              className="relative group"
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
            >
              <button
                onClick={() => setEventsDropdownOpen((prev) => !prev)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer relative ${
                  isEventsActive ? "text-[#D32F2F]" : "text-[#222222] hover:text-[#D32F2F]"
                }`}
              >
                EVENTS <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                {isEventsActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />}
              </button>

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
            className="p-2 rounded-lg text-gray-700 hover:text-[#D32F2F] hover:bg-gray-100 transition border border-gray-200"
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

            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                pathname === "/industries" ? "bg-red-50 text-[#D32F2F]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Industries
            </Link>

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

            {/* MOBILE EVENTS DROPDOWN */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileEventsOpen((prev) => !prev)}
                className={`w-full px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                  isEventsActive ? "bg-red-50 text-[#D32F2F]" : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                <span>EVENTS</span>
                <ChevronDown size={14} className={`transition-transform ${mobileEventsOpen ? "rotate-180" : ""}`} />
              </button>

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

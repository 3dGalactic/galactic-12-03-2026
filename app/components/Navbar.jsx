"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Training", path: "/training" },
  { name: "Careers", path: "/careers" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function GalacticNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* DESKTOP NAVIGATION LINKS (HIDDEN ON MOBILE, VISIBLE ON MD+) */}
        <nav className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 sm:gap-6 px-1">
            {LINKS.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                    active
                      ? "text-[#D32F2F] font-bold"
                      : "text-[#222222] hover:text-[#D32F2F]"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D32F2F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* GET QUOTE PRIMARY RED BUTTON */}
          <Link
            href="/contact"
            className="ml-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-2 shrink-0"
          >
            Get Quote <ArrowRight size={14} />
          </Link>
        </nav>

        {/* MOBILE CONTROLS: GET QUOTE & HAMBURGER MENU TOGGLE BUTTON (VISIBLE ON MOBILE ONLY) */}
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
        <div className="md:hidden border-t border-[#EAEAEA] bg-white px-5 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    active
                      ? "bg-red-50 text-[#D32F2F]"
                      : "text-gray-800 hover:bg-gray-50 hover:text-[#D32F2F]"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#D32F2F] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm"
            >
              Get Custom Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

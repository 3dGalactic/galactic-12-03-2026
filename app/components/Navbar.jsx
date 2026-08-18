"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Services", path: "/services" },
  { name: "Training", path: "/training" },
  { name: "Careers", path: "/careers" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function GalacticNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] w-full bg-white shadow-sm border-b border-[#EAEAEA]">
      {/* MAIN NAVIGATION HEADER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-3.5">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/navbar/logo.svg"
            alt="Galactic 3D"
            className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="flex items-center gap-1 sm:gap-2">
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
      </div>
    </header>
  );
}

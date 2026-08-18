"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";

const TEAM = [
  {
    name: "Nithin Yadav Mohan",
    role: "Director & CEO",
    img: "https://ik.imagekit.io/0s6dxbeae/nithin.png?updatedAt=1778333557296",
    desc: "Leading Galactic 3D's vision for advanced additive manufacturing, strategic partnerships, and industrial innovation.",
  },
  {
    name: "Aabid Husen Hakeem",
    role: "Head of Business Development",
    img: "https://ik.imagekit.io/0s6dxbeae/abid.png?updatedAt=1778333952944",
    desc: "Driving enterprise expansion, industrial client partnerships, and additive manufacturing adoption across aerospace and defense sectors.",
  },
  {
    name: "Dipak Cumar",
    role: "Head of Training",
    img: "https://ik.imagekit.io/0s6dxbeae/dipakblack.png?updatedAt=1778335954298",
    desc: "Spearheading technical education, DfAM curriculum development, and workforce upskilling programs for schools, colleges, and industry.",
  },
  {
    name: "Selva Kumar S",
    role: "Head of Production",
    img: "https://ik.imagekit.io/0s6dxbeae/selvam.png?updatedAt=1778331522954",
    desc: "Managing precision DMLS, SLS, and polymer production floors to deliver zero-defect aerospace components.",
  },
  {
    name: "Bhaskaran P",
    role: "Application Engineer",
    img: "https://ik.imagekit.io/0s6dxbeae/bhaskar.png?updatedAt=1778336480163",
    desc: "Optimizing laser parameters, build orientations, and DfAM lattice structures for complex high-temperature metal parts.",
  },
  {
    name: "Bharath Kumar S",
    role: "Business Development Executive",
    img: "https://ik.imagekit.io/0s6dxbeae/bharath.png?updatedAt=1778331522931",
    desc: "Engaging industrial clients, providing technical consultation, and coordinating rapid turn-around project deliveries.",
  },
  {
    name: "Bhramanandam",
    role: "Finance Officer",
    img: "/bhaskaran.jpg",
    desc: "Overseeing financial operations, capital investment in advanced AM infrastructure, and fiscal compliance.",
  },
];

export default function TeamCarousel() {
  const [active, setActive] = useState(0);
  const activeMember = TEAM[active];

  return (
    <section className="py-16 lg:py-24 bg-white text-[#222222] border-t border-[#EAEAEA] font-sans relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-12 border-b border-[#EAEAEA] pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
            <Users size={16} /> Leadership &amp; Engineering
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
            Galactic Team
          </h2>
        </div>

        {/* SPLIT LAYOUT: GRID ON LEFT + ACTIVE MEMBER PREVIEW PANEL ON RIGHT */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: TEAM MEMBER CARDS GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEAM.map((member, index) => {
              const isActive = active === index;
              return (
                <button
                  key={member.name}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group relative text-left p-4 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-gray-50 border-[#D32F2F] shadow-md ring-2 ring-[#D32F2F]/20"
                      : "bg-white border-[#EAEAEA] hover:border-[#D32F2F]/60 hover:bg-gray-50/80 shadow-sm"
                  }`}
                >
                  {/* CLEARLY VISIBLE MEMBER PHOTO CONTAINER */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-200 mb-3 shadow-inner">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover transition-all duration-500 ${
                        isActive
                          ? "grayscale-0 scale-105"
                          : "grayscale group-hover:grayscale-0 group-hover:scale-105"
                      }`}
                    />
                    
                    {/* MEMBER NUMBER BADGE IN TOP LEFT */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded shadow-sm ${
                        isActive
                          ? "bg-[#D32F2F] text-white"
                          : "bg-black/75 text-white backdrop-blur-sm"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {isActive && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] block animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* MEMBER ROLE & NAME */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors leading-tight">
                      {member.name}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: ACTIVE MEMBER PREVIEW PANEL */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 bg-gray-50 rounded-2xl border border-[#EAEAEA] p-6 sm:p-7 shadow-md flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* PREVIEW BADGE */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-[10px] font-bold uppercase tracking-wider mb-5">
                  <Sparkles size={13} /> Active Member
                </div>

                {/* LARGE MEMBER IMAGE */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm mb-6">
                  <Image
                    src={activeMember.img}
                    alt={activeMember.name}
                    fill
                    sizes="450px"
                    className="object-cover"
                  />
                </div>

                {/* MEMBER DETAILS */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight leading-none">
                  {activeMember.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D32F2F]">
                  {activeMember.role}
                </p>

                {/* SHORT PROFESSIONAL DESCRIPTION */}
                <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {activeMember.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* BOTTOM CTA LINK */}
            <Link
              href="/team"
              className="mt-8 pt-5 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#D32F2F] hover:text-[#111111] transition group"
            >
              <span>View Full Team Page</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </aside>

        </div>

      </div>
    </section>
  );
}

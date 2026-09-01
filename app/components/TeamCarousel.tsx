"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const TEAM = [
  {
    name: "Nithin Yadav Mohan",
    role: "Director & CEO",
    email: "ceo@galactic-3d.com",
    img: "/nithin.jpg",
    objectPos: "object-top",
    desc: "Leading Galactic 3D's vision for advanced additive manufacturing, strategic partnerships, and industrial innovation.",
  },
  {
    name: "Aabid Husen Hakeem",
    role: "Head of Business Development",
    email: "aabid@galactic-3d.com",
    img: "/abid.jpg",
    objectPos: "object-top",
    desc: "Driving enterprise expansion, industrial client partnerships, and additive manufacturing adoption across aerospace and defense sectors.",
  },
  {
    name: "Dipak Cumar",
    role: "Head of Training",
    email: "training@galactic-3d.com",
    img: "/dipak.jpg",
    objectPos: "object-top",
    desc: "Spearheading technical education, DfAM curriculum development, and workforce upskilling programs for schools, colleges, and industry.",
  },
  {
    name: "Selva Kumar S",
    role: "Head of Production",
    email: "production@galactic-3d.com",
    img: "/selvam.jpg",
    objectPos: "object-top",
    desc: "Managing precision DMLS, SLS, and polymer production floors to deliver zero-defect aerospace components.",
  },
  {
    name: "Bhaskaran P",
    role: "Application Engineer",
    email: "bhaskaran@galactic-3d.com",
    img: "/bhaskaran.jpg",
    objectPos: "object-top",
    desc: "Optimizing laser parameters, build orientations, and DfAM lattice structures for complex high-temperature metal parts.",
  },
  {
    name: "Bharath Kumar S",
    role: "Business Development Executive",
    email: "contact@galactic-3d.com",
    img: "/brth.png",
    objectPos: "object-top",
    desc: "Engaging industrial clients, providing technical consultation, and coordinating rapid turn-around project deliveries.",
  },
  {
    name: "Bhramanandam",
    role: "Finance Officer",
    email: "accounts@galactic-3d.com",
    img: "/bhramanandam.png",
    objectPos: "object-top",
    desc: "Overseeing financial operations, capital investment in advanced AM infrastructure, and fiscal compliance.",
  },
  {
    name: "Tushar Mishra",
    role: "Application Research Engineer",
    email: "contact@galactic-3d.com",
    img: "/tushar.jpg",
    objectPos: "object-top",
    desc: "Conducting additive manufacturing research, DfAM parameter optimization, and advanced engineering application development.",
  },
];

export default function TeamCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-white text-[#222222] border-t border-[#EAEAEA] font-sans relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-12 border-b border-[#EAEAEA] pb-6 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Galactic Team
          </h2>
          <Link
            href="/team"
            className="text-xs sm:text-sm font-bold text-[#D32F2F] hover:underline"
          >
            View Full Team →
          </Link>
        </div>

        {/* TEAM MEMBER CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
          {TEAM.map((member, index) => {
            const isActive = active === index;
            return (
              <div
                key={member.name}
                onMouseEnter={() => setActive(index)}
                className={`group relative text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-gray-50 border-[#D32F2F] shadow-md ring-2 ring-[#D32F2F]/20"
                    : "bg-white border-[#EAEAEA] hover:border-[#D32F2F]/60 hover:bg-gray-50/80 shadow-sm"
                }`}
              >
                {/* MEMBER PHOTO CONTAINER WITH PROPER HEIGHT AND TOP-ALIGNED HEADSHOTS */}
                <div className="relative aspect-[4/3.5] w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-200 mb-3 shadow-inner">
                  {member.img ? (
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={`object-cover ${member.objectPos || "object-top"} transition-all duration-500 group-hover:scale-105`}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-extrabold text-2xl select-none">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* MEMBER ROLE, NAME & CLICKABLE EMAIL */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors leading-tight mb-1">
                    {member.name}
                  </h3>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs font-semibold text-gray-500 hover:text-[#D32F2F] hover:underline transition-colors flex items-center gap-1.5 mt-1 truncate cursor-pointer"
                      title={`Send email to ${member.name}`}
                    >
                      <Mail size={12} className="shrink-0 text-[#D32F2F]" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

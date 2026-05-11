// import React from 'react';
// import Image from 'next/image';
// import { 
//   AcademicCapIcon, 
//   BuildingLibraryIcon, 
//   Cog6ToothIcon, 
//   ArrowRightIcon 
// } from '@heroicons/react/24/outline';

// const TrainingBento = () => {
//   return (
//     <section className=" text-white px-6">
//       <div className="container mx-auto ">
        
//         {/* --- UPPER BENTO GRID (Common for both) --- */}
//         <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-6 mb-6">
          
//           {/* HERO TILE */}
//           <div className="col-span-1 md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-8 flex flex-col justify-center hover:bg-white/10 transition">
//             <div className="inline-flex items-center gap-3 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 w-fit">
//               <AcademicCapIcon className="w-5 h-5 text-blue-400" />
//               <span className="text-[10px] md:text-xs text-blue-300 tracking-[0.2em] uppercase font-bold">
//                 Training & Development
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-['test'] mb-4 leading-tight italic">
//               Build Your Future in
//               <br />
//               <span className="text-blue-400">Additive Manufacturing</span>
//             </h2>
//             <p className="text-gray-400 font-['scrib'] text-sm md:text-base leading-relaxed max-w-md">
//               From schools to institutions and industry professionals, we offer
//               comprehensive training programs combining hands-on experience.
//             </p>
//           </div>

//           {/* SCHOOLS */}
//           <div className="col-span-1 md:col-span-1 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between hover:border-blue-400/30 transition group">
//             <AcademicCapIcon className="w-8 h-8 text-blue-400" />
//             <div>
//               <h3 className="text-xl font-bold mb-2 italic uppercase">Schools</h3>
//               <p className="text-gray-400 font-['scrib'] text-sm">STREAM-based learning modules for early engineering.</p>
//             </div>
//           </div>

//           {/* INSTITUTIONS */}
//           <div className="col-span-1 md:col-span-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between hover:border-purple-400/30 transition">
//             <BuildingLibraryIcon className="w-8 h-8 text-purple-400" />
//             <h3 className="text-lg font-bold italic uppercase">Institutions</h3>
//           </div>

//           {/* INDUSTRY */}
//           <div className="col-span-1 md:col-span-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between hover:border-red-400/30 transition">
//             <Cog6ToothIcon className="w-8 h-8 text-red-400" />
//             <h3 className="text-lg font-bold italic uppercase">Industry</h3>
//           </div>
//         </div>

//         {/* --- LOWER SECTION: UNIFIED GLASS (MOBILE) vs PUZZLE (DESKTOP) --- */}

//         {/* 1. MOBILE: SINGLE UNIFIED GLASS PANE */}
//         <div className="block md:hidden bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-2xl overflow-hidden">
//           {/* STAT 1 */}
//           <div className="p-8 border-b border-white/10 flex items-center justify-between">
//             <div className="text-5xl font-black text-blue-400 tracking-tighter">30+</div>
//             <p className="text-gray-400 text-xs font-['scrib'] uppercase tracking-widest text-right">Years Combined <br/> Experience</p>
//           </div>

//           {/* PARTNER LOGO */}
//           <div className="p-8 border-b border-white/10 flex items-center justify-center bg-white/[0.02]">
//             <Image src="/eos.svg" alt="EOS" width={100} height={40} className="opacity-80 grayscale brightness-200" />
//           </div>

//           {/* STAT 2 + CTA */}
//           <div className="p-8 bg-blue-600/10">
//             <div className="flex items-center justify-between mb-6">
//               <span className="text-4xl font-bold text-blue-400">100%</span>
//               <span className="text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">Hands-On Training</span>
//             </div>
//             <a href="/training" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
//               Explore All Programs <ArrowRightIcon className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* 2. DESKTOP: THE ORIGINAL PUZZLE PIECES */}
//         <div className="hidden md:flex flex-row items-center justify-center gap-6 py-10">
//           <div
//             className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center hover:bg-white/10 transition"
//             style={{
//               clipPath: "polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0 100%, 0 0)",
//               width: "280px",
//               height: "180px",
//             }}
//           >
//             <div className="text-4xl font-bold text-blue-400">30+</div>
//             <p className="text-gray-300 text-sm font-['scrib'] mt-2">Years Combined Experience</p>
//           </div>

//           <div
//             className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
//             style={{
//               clipPath: "polygon(0 25%, 15% 0, 100% 0, 100% 100%, 0 100%)",
//               width: "320px",
//               height: "180px",
//             }}
//           >
//             <Image src="/eos.svg" alt="EOS" width={90} height={40} className="mb-3 grayscale brightness-200" />
//             <p className="text-gray-300 text-sm font-['scrib'] text-center">Approved Training Partner</p>
//           </div>

//           <div
//             className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
//             style={{
//               clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)",
//               width: "320px",
//               height: "180px",
//             }}
//           >
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-3xl font-bold text-blue-400 italic">100%</span>
//               <span className="text-gray-300 text-xs font-['scrib']">Hands-On Learning</span>
//             </div>
//             <a href="/training" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all duration-300">
//               Explore Training <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TrainingBento;













import React from "react";
import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const tracks = [
  {
    title: "Schools",
    code: "01",
    icon: AcademicCapIcon,
    text: "STREAM-based modules for early engineering exposure.",
  },
  {
    title: "Institutions",
    code: "02",
    icon: BuildingLibraryIcon,
    text: "Lab programs, faculty workshops, and AM curriculum support.",
  },
  {
    title: "Industry",
    code: "03",
    icon: Cog6ToothIcon,
    text: "Production AM upskilling for working engineers.",
  },
];

const partners = [
  { name: "EOS", src: "/eos.svg" },
  {
    name: "Materialise",
    src: "https://cdn.worldvectorlogo.com/logos/materialise-logo.svg",
  },
];

export default function TrainingBento() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden  px-4 py-5 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[70vw] -translate-x-1/2 rounded-full  blur-[170px]" />
        <div className="absolute inset-0  opacity-25" />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-[1500px] grid-rows-[auto_1fr_auto]">
        <header className="flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[10px] uppercase tracking-[0.28em]">
          <p className="text-red-400">Training System</p>
          <p className="text-white/40">EOS / Materialise / AM</p>
        </header>

        <main className="grid gap-4 py-4 lg:grid-cols-12">
          <section className="relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5 sm:p-7 lg:col-span-5">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-500/10 blur-[110px]" />

            <div className="relative">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/25 bg-red-500/10">
                <SparklesIcon className="h-5 w-5 text-red-400" />
              </div>

              <p className="mb-6 max-w-md text-sm leading-6 text-white/45">
                A hands-on additive manufacturing learning system for students,
                educators, and production teams.
              </p>

              <h2 className="max-w-4xl text-[17vw] font-semibold uppercase leading-[0.76] tracking-[-0.08em] sm:text-[7.2rem] lg:text-[5.8vw]">
                Training
                <span className="block text-red-500">Program</span>
              </h2>
            </div>

            <div className="relative mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
              <span className="bg-[#0d0d0d] p-4">3 Tracks</span>
              <span className="bg-[#0d0d0d] p-4 text-center text-red-400">
                2 Partners
              </span>
              <span className="bg-[#0d0d0d] p-4 text-right">AM Ready</span>
            </div>
          </section>

          <section className="grid gap-4 lg:col-span-7 lg:grid-cols-7">
            <div className="grid gap-4 lg:col-span-4">
              {tracks.map((track, index) => (
                <TrackBlade key={track.title} track={track} index={index} />
              ))}
            </div>

            <div className="grid gap-4 lg:col-span-3">
              {partners.map((partner) => (
                <PartnerBlade key={partner.name} partner={partner} />
              ))}

              <a
                href="/training"
                className="group flex min-h-[130px] items-end justify-between rounded-[1.5rem] border border-red-500/40 bg-red-500 p-5 text-white transition hover:bg-red-400"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
                  Explore Programs
                </span>
                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </section>
        </main>

        
      </div>
    </section>
  );
}

function TrackBlade({
  track,
  index,
}: {
  track: (typeof tracks)[number];
  index: number;
}) {
  const Icon = track.icon;

  return (
    <article className="group grid min-h-[175px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] transition duration-500 hover:border-red-500/50 hover:bg-[#111111] sm:grid-cols-[120px_1fr]">
      <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-red-400">
          TR-{track.code}
        </span>

        <span className="text-5xl font-semibold leading-none text-white/[0.08] transition group-hover:text-red-500/35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-end justify-between gap-6 p-5">
        <div>
          <Icon className="mb-7 h-6 w-6 text-red-400" />

          <h3 className="text-3xl font-semibold uppercase leading-none tracking-[-0.05em]">
            {track.title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
            {track.text}
          </p>
        </div>

        <ArrowRightIcon className="hidden h-5 w-5 shrink-0 text-white/25 transition group-hover:translate-x-1 group-hover:text-red-400 sm:block" />
      </div>
    </article>
  );
}

function PartnerBlade({
  partner,
}: {
  partner: (typeof partners)[number];
}) {
  const isMaterialise = partner.name.toLowerCase() === "materialise";

  return (
    <article className="grid min-h-[190px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] transition duration-500 hover:border-red-500/45 hover:bg-[#111111]">
      <div className="flex flex-col justify-between p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
          {partner.name} Partner
        </p>

        <div
          className={`mt-8 flex min-h-[96px] items-center justify-center rounded-xl px-7 py-7 ${
            isMaterialise ? "bg-[#EF4444]" : ""
          }`}
        >
          <Image
            src={partner.src}
            alt={partner.name}
            width={220}
            height={88}
            className={`h-auto w-full object-contain ${
              isMaterialise ? "max-w-[220px]" : "max-w-[190px]"
            }`}
          />
        </div>
      </div>
    </article>
  );
}

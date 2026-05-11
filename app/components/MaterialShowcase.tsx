// import React from 'react';
// import { CpuChipIcon, CubeTransparentIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

// const facilities = [
//   {
//     type: "METAL",
//     icon: <CpuChipIcon className="w-6 h-6 text-sky-400" />,
//     theme: "sky",
//     buildSize: "250×250×300mm",
//     tag: "Performance Set",
//     materials: [
//       { title: "Titanium", text: "Ti64Al4V, Ti64 ELI, Grade 5, Grade 23" },
//       { title: "Aluminum", text: "AlSi10Mg, AlF357, Al6061, Al7050" },
//       { title: "Stainless Steel", text: "SS316L, SS304L, 17-4PH, 15-5PH" },
//       { title: "Tool / Maraging Steel", text: "M300, H13, MS1, C300" },
//       { title: "Superalloys", text: "Inconel 718, 625, 939, Haynes 282" },
//       { title: "Cobalt / Copper", text: "CoCr MP1, CuCr1Zr, Pure Copper" },
//     ]
//   },
//   {
//     type: "POLYMER",
//     icon: <CubeTransparentIcon className="w-6 h-6 text-cyan-400" />,
//     theme: "cyan",
//     buildSize: "250×250×250mm",
//     tag: "Material Range",
//     materials: [
//       { title: "Polyamide-12", text: "PA2200, PA2210 FR, PA3200 GF" },
//       { title: "Polyamide-11", text: "PA1100, PA1101, PA1102" },
//       { title: "FDM Engineering", text: "PLA, ABS, ASA, PETG, TPU" },
//       { title: "High-Temp Polymers", text: "PEEK, PEKK, ULTEM 9085" },
//       { title: "Resins", text: "Clear, tough, dental, rubber-like" },
//       { title: "Vacuum Casting", text: "PU-ABS, PC-like, silicone rubbers" },
//     ]
//   }
// ];

// export default function FacilityDisplay() {
//   return (
//     <section className="relative py-32 bg-[#020202] text-white overflow-hidden">
      
//       {/* 1. LAYERED BACKGROUND ARCHITECTURE */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
//            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//       <div className="relative max-w-7xl mx-auto px-6">
        
//         {/* HEADER SECTION */}
//         <div className="flex flex-col items-center text-center mb-24">
        
//           <h2 className="text-5xl md:text-7xl font-black  tracking-tighter uppercase leading-[0.9] mb-8">
//             Material  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Showcase</span>
//           </h2>
//           <p className="max-w-2xl text-gray-400 font-light italic leading-relaxed text-lg">
//             Our advanced manufacturing facilities combine cutting-edge technology
//             with expert engineering teams to deliver superior performance.
//           </p>
//         </div>

//         {/* 2. THE FACILITY MODULES */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
//           {facilities.map((fac, idx) => (
//             <div key={idx} className="relative group bg-[#050505] p-10 md:p-14 transition-all duration-700 hover:bg-black">
              
//               {/* ACCENT LIGHTING */}
//               <div className={`absolute top-0 ${idx === 0 ? 'left-0' : 'right-0'} w-40 h-40 bg-${fac.theme}-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

//               {/* MODULE HEADER */}
//               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
//                 <div className="flex items-start gap-6">
//                   <div className={`w-16 h-16 rounded-2xl bg-${fac.theme}-500/10 border border-${fac.theme}-500/20 flex items-center justify-center shadow-inner`}>
//                     {fac.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-4xl font-black  uppercase tracking-tighter mb-1">
//                       {fac.type}
//                     </h3>
//                     <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
//                       <span className={`w-2 h-2 rounded-full bg-${fac.theme}-500 animate-pulse`} />
//                       Volume: {fac.buildSize}
//                     </div>
//                   </div>
//                 </div>
//                 <span className={`text-[10px] font-bold uppercase tracking-[0.2em] border border-${fac.theme}-500/30 bg-${fac.theme}-500/5 px-4 py-2 rounded-lg text-${fac.theme}-200`}>
//                   {fac.tag}
//                 </span>
//               </div>

//               {/* MATERIALS GRID - High Density Look */}
//               <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {fac.materials.map((mat, i) => (
//                   <div key={i} className="group/item relative p-4 rounded-xl border border-white/[0.03] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
//                     <div className="flex flex-col h-full justify-between">
//                       <h4 className={`text-xs font-bold uppercase tracking-widest text-${fac.theme}-400 mb-2`}>
//                         {mat.title}
//                       </h4>
//                       <p className="text-[11px] text-gray-500 group-hover/item:text-gray-300 transition-colors leading-relaxed">
//                         {mat.text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

            
//             </div>
//           ))}
//         </div>

      

//       </div>
//     </section>
//   );
// }















import React from "react";
import {
  ArrowUpRightIcon,
  CpuChipIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

const facilities = [
  {
    type: "Metal",
    code: "M-01",
    icon: CpuChipIcon,
    buildSize: "250 x 250 x 300mm",
    process: "DMLS / LPBF",
    materials: [
      "Titanium",
      "Aluminum",
      "Stainless Steel",
      "Tool Steel",
      "Inconel",
      "Copper",
    ],
  },
  {
    type: "Polymer",
    code: "P-02",
    icon: CubeTransparentIcon,
    buildSize: "250 x 250 x 250mm",
    process: "SLS / FDM / SLA",
    materials: [
      "PA12",
      "PA11",
      "ABS",
      "ASA",
      "TPU",
      "PEEK",
      "ULTEM",
      "Resins",
    ],
  },
];

export default function FacilityDisplay() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[66vw] -translate-x-1/2 rounded-full bg-red-600/12 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,transparent,rgba(0,0,0,0.88))]" />
      </div>

      <div className="relative mx-auto ">
        <div className="mb-5 grid gap-5 border-b border-white/10 pb-5 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-red-400">
              Facility System
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl">
              Process Board
            </h2>
          </div>

          <p className="text-sm leading-6 text-white/48 md:text-right">
            Medium-density comparison for material families, machine envelopes,
            and production capability.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {facilities.map((facility) => (
            <FacilityPanel key={facility.type} facility={facility} />
          ))}
        </div>

        <footer className="mt-5 grid gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.26em] text-white/35 sm:grid-cols-3">
          <span>Qualified Processes</span>
          <span className="text-red-400 sm:text-center">Material Ready</span>
          <span className="sm:text-right">Industrial Output</span>
        </footer>
      </div>
    </section>
  );
}

function FacilityPanel({
  facility,
}: {
  facility: (typeof facilities)[number];
}) {
  const Icon = facility.icon;

  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0d0d0d] transition duration-500 hover:border-red-500/45 hover:bg-[#111111]">
      <header className="grid gap-px bg-white/10 md:grid-cols-[1fr_190px]">
        <div className="flex items-center justify-between bg-[#0d0d0d] p-5 sm:p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-red-400">
              {facility.code}
            </p>
            <h3 className="mt-2 text-4xl font-semibold uppercase leading-none tracking-[-0.06em]">
              {facility.type}
            </h3>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-red-400">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <div className="flex flex-col justify-between bg-[#090909] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            Process
          </p>
          <p className="mt-6 text-xl font-semibold uppercase leading-tight tracking-[-0.04em] text-red-400">
            {facility.process}
          </p>
        </div>
      </header>

      <div className="grid gap-px bg-white/10 md:grid-cols-[1fr_240px]">
        <div className="bg-[#0d0d0d] p-5 sm:p-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
            Material Family
          </p>

          <div className="flex flex-wrap gap-2">
            {facility.materials.map((material) => (
              <span
                key={material}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-white/64 transition group-hover:border-red-500/35 group-hover:text-white"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between bg-[#090909] p-5 sm:p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-red-400">
              Build Volume
            </p>
            <p className="mt-4 text-3xl font-semibold uppercase leading-[0.88] tracking-[-0.06em]">
              {facility.buildSize}
            </p>
          </div>

          <button className="mt-8 flex w-fit items-center gap-3 rounded-full bg-red-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-400">
            Explore
            <ArrowUpRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}



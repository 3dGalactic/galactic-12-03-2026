import React from 'react';
import { CpuChipIcon, CubeTransparentIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const facilities = [
  {
    type: "METAL",
    icon: <CpuChipIcon className="w-6 h-6 text-sky-400" />,
    theme: "sky",
    buildSize: "250×250×300mm",
    tag: "Performance Set",
    materials: [
      { title: "Titanium", text: "Ti64Al4V, Ti64 ELI, Grade 5, Grade 23" },
      { title: "Aluminum", text: "AlSi10Mg, AlF357, Al6061, Al7050" },
      { title: "Stainless Steel", text: "SS316L, SS304L, 17-4PH, 15-5PH" },
      { title: "Tool / Maraging Steel", text: "M300, H13, MS1, C300" },
      { title: "Superalloys", text: "Inconel 718, 625, 939, Haynes 282" },
      { title: "Cobalt / Copper", text: "CoCr MP1, CuCr1Zr, Pure Copper" },
    ]
  },
  {
    type: "POLYMER",
    icon: <CubeTransparentIcon className="w-6 h-6 text-cyan-400" />,
    theme: "cyan",
    buildSize: "250×250×250mm",
    tag: "Material Range",
    materials: [
      { title: "Polyamide-12", text: "PA2200, PA2210 FR, PA3200 GF" },
      { title: "Polyamide-11", text: "PA1100, PA1101, PA1102" },
      { title: "FDM Engineering", text: "PLA, ABS, ASA, PETG, TPU" },
      { title: "High-Temp Polymers", text: "PEEK, PEKK, ULTEM 9085" },
      { title: "Resins", text: "Clear, tough, dental, rubber-like" },
      { title: "Vacuum Casting", text: "PU-ABS, PC-like, silicone rubbers" },
    ]
  }
];

export default function FacilityDisplay() {
  return (
    <section className="relative py-32 bg-[#020202] text-white overflow-hidden">
      
      {/* 1. LAYERED BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-24">
        
          <h2 className="text-5xl md:text-7xl font-black  tracking-tighter uppercase leading-[0.9] mb-8">
            Material  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Showcase</span>
          </h2>
          <p className="max-w-2xl text-gray-400 font-light italic leading-relaxed text-lg">
            Our advanced manufacturing facilities combine cutting-edge technology
            with expert engineering teams to deliver superior performance.
          </p>
        </div>

        {/* 2. THE FACILITY MODULES */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {facilities.map((fac, idx) => (
            <div key={idx} className="relative group bg-[#050505] p-10 md:p-14 transition-all duration-700 hover:bg-black">
              
              {/* ACCENT LIGHTING */}
              <div className={`absolute top-0 ${idx === 0 ? 'left-0' : 'right-0'} w-40 h-40 bg-${fac.theme}-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* MODULE HEADER */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-${fac.theme}-500/10 border border-${fac.theme}-500/20 flex items-center justify-center shadow-inner`}>
                    {fac.icon}
                  </div>
                  <div>
                    <h3 className="text-4xl font-black  uppercase tracking-tighter mb-1">
                      {fac.type}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                      <span className={`w-2 h-2 rounded-full bg-${fac.theme}-500 animate-pulse`} />
                      Volume: {fac.buildSize}
                    </div>
                  </div>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] border border-${fac.theme}-500/30 bg-${fac.theme}-500/5 px-4 py-2 rounded-lg text-${fac.theme}-200`}>
                  {fac.tag}
                </span>
              </div>

              {/* MATERIALS GRID - High Density Look */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fac.materials.map((mat, i) => (
                  <div key={i} className="group/item relative p-4 rounded-xl border border-white/[0.03] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-col h-full justify-between">
                      <h4 className={`text-xs font-bold uppercase tracking-widest text-${fac.theme}-400 mb-2`}>
                        {mat.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 group-hover/item:text-gray-300 transition-colors leading-relaxed">
                        {mat.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}
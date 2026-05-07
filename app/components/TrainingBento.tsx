import React from 'react';
import Image from 'next/image';
import { 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  Cog6ToothIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const TrainingBento = () => {
  return (
    <section className=" text-white px-6">
      <div className="container mx-auto ">
        
        {/* --- UPPER BENTO GRID (Common for both) --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-6 mb-6">
          
          {/* HERO TILE */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-8 flex flex-col justify-center hover:bg-white/10 transition">
            <div className="inline-flex items-center gap-3 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 w-fit">
              <AcademicCapIcon className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] md:text-xs text-blue-300 tracking-[0.2em] uppercase font-bold">
                Training & Development
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-['test'] mb-4 leading-tight italic">
              Build Your Future in
              <br />
              <span className="text-blue-400">Additive Manufacturing</span>
            </h2>
            <p className="text-gray-400 font-['scrib'] text-sm md:text-base leading-relaxed max-w-md">
              From schools to institutions and industry professionals, we offer
              comprehensive training programs combining hands-on experience.
            </p>
          </div>

          {/* SCHOOLS */}
          <div className="col-span-1 md:col-span-1 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between hover:border-blue-400/30 transition group">
            <AcademicCapIcon className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-xl font-bold mb-2 italic uppercase">Schools</h3>
              <p className="text-gray-400 font-['scrib'] text-sm">STREAM-based learning modules for early engineering.</p>
            </div>
          </div>

          {/* INSTITUTIONS */}
          <div className="col-span-1 md:col-span-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between hover:border-purple-400/30 transition">
            <BuildingLibraryIcon className="w-8 h-8 text-purple-400" />
            <h3 className="text-lg font-bold italic uppercase">Institutions</h3>
          </div>

          {/* INDUSTRY */}
          <div className="col-span-1 md:col-span-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 flex flex-col justify-between hover:border-red-400/30 transition">
            <Cog6ToothIcon className="w-8 h-8 text-red-400" />
            <h3 className="text-lg font-bold italic uppercase">Industry</h3>
          </div>
        </div>

        {/* --- LOWER SECTION: UNIFIED GLASS (MOBILE) vs PUZZLE (DESKTOP) --- */}

        {/* 1. MOBILE: SINGLE UNIFIED GLASS PANE */}
        <div className="block md:hidden bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-2xl overflow-hidden">
          {/* STAT 1 */}
          <div className="p-8 border-b border-white/10 flex items-center justify-between">
            <div className="text-5xl font-black text-blue-400 tracking-tighter">30+</div>
            <p className="text-gray-400 text-xs font-['scrib'] uppercase tracking-widest text-right">Years Combined <br/> Experience</p>
          </div>

          {/* PARTNER LOGO */}
          <div className="p-8 border-b border-white/10 flex items-center justify-center bg-white/[0.02]">
            <Image src="/eos.svg" alt="EOS" width={100} height={40} className="opacity-80 grayscale brightness-200" />
          </div>

          {/* STAT 2 + CTA */}
          <div className="p-8 bg-blue-600/10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl font-bold text-blue-400">100%</span>
              <span className="text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">Hands-On Training</span>
            </div>
            <a href="/training" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              Explore All Programs <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2. DESKTOP: THE ORIGINAL PUZZLE PIECES */}
        <div className="hidden md:flex flex-row items-center justify-center gap-6 py-10">
          <div
            className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center hover:bg-white/10 transition"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0 100%, 0 0)",
              width: "280px",
              height: "180px",
            }}
          >
            <div className="text-4xl font-bold text-blue-400">30+</div>
            <p className="text-gray-300 text-sm font-['scrib'] mt-2">Years Combined Experience</p>
          </div>

          <div
            className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
            style={{
              clipPath: "polygon(0 25%, 15% 0, 100% 0, 100% 100%, 0 100%)",
              width: "320px",
              height: "180px",
            }}
          >
            <Image src="/eos.svg" alt="EOS" width={90} height={40} className="mb-3 grayscale brightness-200" />
            <p className="text-gray-300 text-sm font-['scrib'] text-center">Approved Training Partner</p>
          </div>

          <div
            className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)",
              width: "320px",
              height: "180px",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold text-blue-400 italic">100%</span>
              <span className="text-gray-300 text-xs font-['scrib']">Hands-On Learning</span>
            </div>
            <a href="/training" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all duration-300">
              Explore Training <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingBento;
"use client";

import React, { useState } from "react";
import { 
  Microscope, 
  Layers, 
  Zap, 
  Cpu, 
  TrendingUp, 
  Building2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    number: "01",
    title: "Research Driven",
    description: "Engineering-led innovation backed by practical industry expertise.",
    icon: Microscope,
  },
  {
    number: "02",
    title: "Design Solutions",
    description: "End-to-end product design support from concept to manufacturable models.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Prototype & Validate",
    description: "Rapid prototyping and testing to minimize development risks.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Application Development",
    description: "Customized additive manufacturing solutions for diverse industries.",
    icon: Cpu,
  },
  {
    number: "05",
    title: "Scale For Tomorrow",
    description: "Production-ready workflows designed for future growth and scalability.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "India-First Manufacturing",
    description: "World-class manufacturing capabilities built in India.",
    icon: Building2,
  },
];

export default function TransformIdeasSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white text-[#111111] border-t border-b border-[#EAEAEA] font-sans relative overflow-hidden">
      
      {/* SUBTLE LIGHT GREY GRID PATTERN BACKGROUND OVERLAY */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE (50% / 6 COLS): STICKY HEADING & DESCRIPTION */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-6">
            
            {/* SECTION LABEL */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E53935] text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} /> Why Galactic 3D
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111111] tracking-tight leading-[1.05]">
              Transform Your Ideas <br />
              <span className="text-[#E53935]">Into Reality</span>
            </h2>

            {/* RED ACCENT LINE */}
            <div className="w-24 h-1.5 bg-[#E53935] rounded-full my-6" />

            {/* SUPPORTING TEXT */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-xl">
              From concept validation to production-scale manufacturing, Galactic 3D delivers innovative additive manufacturing solutions with speed, precision, and engineering excellence.
            </p>

            {/* VALUE METRICS STRIP */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4">
              <div>
                <span className="text-2xl font-black text-[#111111] block">10x</span>
                <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider block">Faster Prototypes</span>
              </div>

              <div>
                <span className="text-2xl font-black text-[#E53935] block">99.4%</span>
                <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider block">Part Density</span>
              </div>

              <div>
                <span className="text-2xl font-black text-[#111111] block">ISO</span>
                <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider block">9001:2015</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (50% / 6 COLS): 6 CAPABILITY CARDS VERTICAL STACK */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {CAPABILITIES.map((card, idx) => {
              const Icon = card.icon;
              const isActive = activeCardIndex === idx;

              return (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onMouseEnter={() => setActiveCardIndex(idx)}
                  className={`group relative bg-white rounded-2xl border-2 p-6 sm:p-7 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-[#E53935] shadow-[0_0_25px_rgba(229,57,53,0.15)] ring-2 ring-[#E53935]/20 bg-gray-50/40"
                      : "border-[#EAEAEA] hover:border-[#E53935]/60 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    
                    {/* ICON CONTAINER WITH RED ACCENT */}
                    <div className={`p-3.5 rounded-xl border transition-colors shrink-0 ${
                      isActive
                        ? "bg-[#E53935] text-white border-[#E53935]"
                        : "bg-red-50 text-[#E53935] border-red-100 group-hover:bg-[#E53935] group-hover:text-white transition-colors"
                    }`}>
                      <Icon size={24} />
                    </div>

                    <div className="flex-1 space-y-1.5">
                      
                      {/* CARD NUMBER & TITLE HEADER */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-extrabold text-[#E53935] tracking-widest uppercase">
                          Card {card.number}
                        </span>
                        <ArrowRight 
                          size={16} 
                          className={`transition-all ${
                            isActive ? "text-[#E53935] translate-x-1" : "text-gray-300 group-hover:text-[#E53935] group-hover:translate-x-1"
                          }`} 
                        />
                      </div>

                      <h3 className={`text-lg sm:text-xl font-extrabold text-[#111111] transition-colors ${
                        isActive ? "text-[#E53935]" : "group-hover:text-[#E53935]"
                      }`}>
                        {card.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {card.description}
                      </p>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

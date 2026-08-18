"use client";

import { useState } from "react";
import { Cpu, CheckCircle2, Shield, Zap } from "lucide-react";

const HARDWARE_FLEET = [
  {
    name: "EOS M 290",
    tech: "Direct Metal Laser Sintering (DMLS)",
    buildVolume: "250 x 250 x 325 mm",
    laserPower: "400W Yb-fiber laser",
    layerThickness: "20 - 80 µm",
    bestFor: "Aerospace turbine blades, Titanium implants, Tooling inserts",
  },
  {
    name: "Bambu Lab X1E Industrial",
    tech: "Fused Deposition Modeling (FDM / CFR)",
    buildVolume: "256 x 256 x 256 mm",
    laserPower: "320°C Dual Extruder",
    layerThickness: "50 - 300 µm",
    bestFor: "Carbon-fiber composite brackets, Functional prototypes",
  },
  {
    name: "Markforged X7",
    tech: "Continuous Fiber Reinforcement (CFR)",
    buildVolume: "330 x 270 x 200 mm",
    laserPower: "Continuous Onyx Fiber",
    layerThickness: "50 - 125 µm",
    bestFor: "Aluminum-strength composite replacement parts & jigs",
  },
  {
    name: "Formlabs Form 4",
    tech: "Micro-SLA Resin (LFS)",
    buildVolume: "200 x 125 x 210 mm",
    laserPower: "High-Power Light Engine",
    layerThickness: "25 - 100 µm",
    bestFor: "Biocompatible dental guides, Micro-fluidics, Investment casting",
  },
];

export default function MachineComparisonTool() {
  return (
    <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-8 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-['dena'] uppercase tracking-widest text-red-400 mb-3">
            <Cpu className="w-3.5 h-3.5" /> Hardware Fleet Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['test']">
            Industrial Printer Specifications
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-['scrib']">
            Compare build envelopes, laser power, and layer resolution across our hardware fleet.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HARDWARE_FLEET.map((machine, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between hover:border-red-500/40 transition duration-300 group"
          >
            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded bg-red-600/10 border border-red-500/30 text-red-400 font-['dena'] text-[10px] uppercase font-bold">
                {machine.tech}
              </span>
              <h3 className="text-xl font-bold text-white font-['test'] group-hover:text-red-400 transition">
                {machine.name}
              </h3>

              <div className="space-y-2 font-['scrib'] text-xs border-t border-zinc-800/80 pt-4">
                <div>
                  <span className="text-zinc-500 block">Build Envelope:</span>
                  <span className="font-bold text-white font-['dena']">{machine.buildVolume}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Energy Source:</span>
                  <span className="font-bold text-zinc-300 font-['dena']">{machine.laserPower}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Min. Layer Thickness:</span>
                  <span className="font-bold text-red-400 font-['dena']">{machine.layerThickness}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <span className="text-[11px] text-zinc-500 block mb-1 font-['dena']">Ideal Applications:</span>
              <p className="text-xs text-zinc-300 leading-relaxed font-['scrib']">{machine.bestFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

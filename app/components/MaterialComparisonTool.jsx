"use client";

import { useState } from "react";
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const MATERIALS_DATABASE = [
  {
    id: "ti6al4v",
    name: "Titanium Ti6Al4V Grade 5",
    type: "DMLS Metal",
    tensile: "1,100 MPa",
    hdt: "400 °C",
    density: "4.43 g/cm³",
    cost: "High ($$$$)",
    applications: "Aerospace Structural, Medical Implants, Turbine Blades",
  },
  {
    id: "ss316l",
    name: "Stainless Steel 316L",
    type: "DMLS Metal",
    tensile: "650 MPa",
    hdt: "300 °C",
    density: "8.00 g/cm³",
    cost: "Medium-High ($$$)",
    applications: "Corrosion Resistant Manifolds, Food & Pharma Tooling",
  },
  {
    id: "inconel718",
    name: "Inconel 718 Superalloy",
    type: "DMLS Metal",
    tensile: "1,350 MPa",
    hdt: "700 °C",
    density: "8.19 g/cm³",
    cost: "Extreme ($$$$$)",
    applications: "Rocket Nozzles, Extreme High-Temp Exhausts",
  },
  {
    id: "pa12",
    name: "PA12 Nylon Powder",
    type: "SLS Polymer",
    tensile: "48 MPa",
    hdt: "175 °C",
    density: "0.95 g/cm³",
    cost: "Economical ($$)",
    applications: "Complex Ducting, Production Enclosures, Snap-Fits",
  },
  {
    id: "ultem9085",
    name: "ULTEM 9085 (PEI)",
    type: "FDM High-Temp",
    tensile: "71 MPa",
    hdt: "153 °C",
    density: "1.34 g/cm³",
    cost: "High ($$$$)",
    applications: "FAR 25.853 Flame-Retardant Aerospace Interiors",
  },
];

export default function MaterialComparisonTool() {
  const [matA, setMatA] = useState(MATERIALS_DATABASE[0]);
  const [matB, setMatB] = useState(MATERIALS_DATABASE[3]);

  return (
    <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-8 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-['dena'] uppercase tracking-widest text-red-400 mb-3">
            <Layers className="w-3.5 h-3.5" /> Mechanical Data Sheet Comparator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['test']">
            Material Mechanical Properties
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-['scrib']">
            Compare DMLS metal alloys against SLS & FDM engineering polymers side-by-side.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* MATERIAL A SELECTOR */}
        <div className="space-y-4 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60">
          <label className="block font-['dena'] text-xs uppercase tracking-widest text-red-400 font-bold">
            Material A Selection
          </label>
          <select
            value={matA.id}
            onChange={(e) => setMatA(MATERIALS_DATABASE.find((m) => m.id === e.target.value))}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white font-['dena'] focus:outline-none focus:border-red-500"
          >
            {MATERIALS_DATABASE.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.type})
              </option>
            ))}
          </select>

          <div className="space-y-3 pt-4 border-t border-zinc-800 font-['scrib'] text-xs">
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Process Type:</span>
              <span className="font-bold text-white font-['dena']">{matA.type}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Tensile Strength:</span>
              <span className="font-bold text-red-400 font-['dena']">{matA.tensile}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Heat Deflection Temp (HDT):</span>
              <span className="font-bold text-white font-['dena']">{matA.hdt}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Density:</span>
              <span className="font-bold text-white font-['dena']">{matA.density}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Relative Cost Index:</span>
              <span className="font-bold text-amber-400 font-['dena']">{matA.cost}</span>
            </div>
            <div className="pt-2">
              <span className="text-zinc-500 block mb-1">Primary OEM Applications:</span>
              <span className="text-zinc-300 leading-relaxed block font-['scrib']">{matA.applications}</span>
            </div>
          </div>
        </div>

        {/* MATERIAL B SELECTOR */}
        <div className="space-y-4 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60">
          <label className="block font-['dena'] text-xs uppercase tracking-widest text-zinc-400 font-bold">
            Material B Selection
          </label>
          <select
            value={matB.id}
            onChange={(e) => setMatB(MATERIALS_DATABASE.find((m) => m.id === e.target.value))}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white font-['dena'] focus:outline-none focus:border-red-500"
          >
            {MATERIALS_DATABASE.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.type})
              </option>
            ))}
          </select>

          <div className="space-y-3 pt-4 border-t border-zinc-800 font-['scrib'] text-xs">
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Process Type:</span>
              <span className="font-bold text-white font-['dena']">{matB.type}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Tensile Strength:</span>
              <span className="font-bold text-red-400 font-['dena']">{matB.tensile}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Heat Deflection Temp (HDT):</span>
              <span className="font-bold text-white font-['dena']">{matB.hdt}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Density:</span>
              <span className="font-bold text-white font-['dena']">{matB.density}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-zinc-900">
              <span className="text-zinc-500">Relative Cost Index:</span>
              <span className="font-bold text-amber-400 font-['dena']">{matB.cost}</span>
            </div>
            <div className="pt-2">
              <span className="text-zinc-500 block mb-1">Primary OEM Applications:</span>
              <span className="text-zinc-300 leading-relaxed block font-['scrib']">{matB.applications}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

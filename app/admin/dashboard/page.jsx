"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, DollarSign, Activity, FileText, CheckCircle2, AlertTriangle, ArrowUpRight, Search, ShieldCheck } from "lucide-react";

const ADMIN_QUOTES = [
  { id: "Q-1049", customer: "SpaceX Propulsion Eng", material: "Titanium Ti6Al4V", volume: "124 cm³", estValue: "$1,850", status: "Pending Engineering Review" },
  { id: "Q-1048", customer: "BMW Motorsport", material: "PA12 Carbon Fiber", volume: "310 cm³", estValue: "$640", status: "Approved for Printing" },
  { id: "Q-1047", customer: "MedTech BioDevices", material: "Stainless Steel 316L", volume: "85 cm³", estValue: "$920", status: "In Slicing Queue" },
  { id: "Q-1046", customer: "Robotics Corp India", material: "ULTEM 9085", volume: "450 cm³", estValue: "$2,100", status: "Quality Inspection" },
];

const MACHINE_FLEET_STATUS = [
  { id: "M-01", name: "EOS M 290 (DMLS Metal)", status: "Active Printing", temp: "1,650 °C Laser", job: "Turbine Bracket #4" },
  { id: "M-02", name: "Bambu Lab X1E (FDM Composite)", status: "Active Printing", temp: "320 °C Extruder", job: "Robotic Gripper #12" },
  { id: "M-03", name: "Markforged X7 (CFR Fiber)", status: "Idle - Maintenance Clean", temp: "Ambient", job: "Queue Ready" },
  { id: "M-04", name: "Formlabs Form 4 (mSLA Resin)", status: "Active Printing", temp: "Post-Cure Active", job: "Biocompatible Dental #8" },
];

export default function AdminDashboardPage() {
  const [filter, setFilter] = useState("");

  return (
    <div className="min-h-screen bg-black text-white px-6 py-28 max-w-7xl mx-auto font-mono">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-8 mb-10">
        <div>
          <span className="text-xs text-red-500 uppercase tracking-widest block mb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Executive Manufacturing Operations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Admin Control Center
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-widest transition"
          >
            Switch to Client Portal
          </Link>
        </div>
      </div>

      {/* OVERVIEW STATS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Monthly Revenue (Est.)</span>
          <span className="text-3xl font-extrabold text-green-400">$124,500</span>
        </div>
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Active Machine Utilization</span>
          <span className="text-3xl font-extrabold text-white">87.5%</span>
        </div>
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Pending CAD Reviews</span>
          <span className="text-3xl font-extrabold text-red-400">14 Quotes</span>
        </div>
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">ISO Quality Audit</span>
          <span className="text-sm font-bold text-green-400 flex items-center gap-1.5 mt-2">
            <CheckCircle2 className="w-4 h-4" /> 100% Pass Rate
          </span>
        </div>
      </div>

      {/* MACHINE FLEET REAL-TIME MONITORING */}
      <div className="mb-12 space-y-6">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Cpu className="w-5 h-5 text-red-500" /> Real-Time Machine Fleet Telemetry
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {MACHINE_FLEET_STATUS.map((m) => (
            <div
              key={m.id}
              className="p-5 rounded-2xl border border-zinc-800 bg-zinc-950 space-y-3"
            >
              <div className="flex justify-between items-start">
                <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 font-bold text-[10px]">
                  {m.id}
                </span>
                <span className={`text-[10px] font-bold ${m.status.includes("Active") ? "text-green-400" : "text-amber-400"}`}>
                  ● {m.status}
                </span>
              </div>

              <h3 className="font-bold text-white text-sm">{m.name}</h3>
              <div className="space-y-1 text-zinc-400 text-[11px]">
                <p>Telemetry: <strong className="text-white">{m.temp}</strong></p>
                <p>Active Job: <strong className="text-zinc-300">{m.job}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INCOMING CAD QUOTE REQUESTS TABLE */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-500" /> Incoming CAD Quote Pipeline
          </h2>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter quotes or material..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-zinc-900/80 border-b border-zinc-800 text-zinc-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Quote ID</th>
                <th className="p-4">Client OEM</th>
                <th className="p-4">Requested Material</th>
                <th className="p-4">Volume</th>
                <th className="p-4">Est. Value</th>
                <th className="p-4">Pipeline State</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900">
              {ADMIN_QUOTES.filter(
                (q) =>
                  q.customer.toLowerCase().includes(filter.toLowerCase()) ||
                  q.material.toLowerCase().includes(filter.toLowerCase())
              ).map((q) => (
                <tr key={q.id} className="hover:bg-zinc-900/40 transition">
                  <td className="p-4 font-bold text-red-400">{q.id}</td>
                  <td className="p-4 font-bold text-white">{q.customer}</td>
                  <td className="p-4">{q.material}</td>
                  <td className="p-4 text-zinc-400">{q.volume}</td>
                  <td className="p-4 font-bold text-green-400">{q.estValue}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px]">
                      {q.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => alert(`Opening CAD slice inspector for ${q.id}`)}
                      className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-[10px] uppercase transition"
                    >
                      Inspect CAD
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

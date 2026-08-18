'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Box, Clock, CheckCircle2, FileCode, Download, RefreshCw, LogOut, Cpu, ArrowUpRight } from 'lucide-react'

const RECENT_ORDERS = [
  {
    id: "ORD-9482",
    fileName: "Turbine_Housing_v3.step",
    material: "Titanium Ti6Al4V (DMLS)",
    quantity: 4,
    status: "In Production",
    progress: 75,
    date: "2026-08-02",
    estDelivery: "2026-08-06",
  },
  {
    id: "ORD-9104",
    fileName: "Robotic_Gripper_Body.stl",
    material: "PA12 Nylon (SLS)",
    quantity: 12,
    status: "Quality Inspection",
    progress: 90,
    date: "2026-07-28",
    estDelivery: "2026-08-05",
  },
  {
    id: "ORD-8812",
    fileName: "Enclosure_FrontPanel.3mf",
    material: "ULTEM 9085 (FDM)",
    quantity: 2,
    status: "Delivered",
    progress: 100,
    date: "2026-07-15",
    estDelivery: "Delivered Jul 18",
  },
];

export default function CustomerDashboardPage() {
  const router = useRouter()
  const [orders] = useState(RECENT_ORDERS)

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
    } catch (e) {
      // safe fallback
    }
    router.replace('/auth')
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-28 max-w-7xl mx-auto font-mono">
      {/* TOP HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-8 mb-10">
        <div>
          <span className="text-xs text-red-500 uppercase tracking-widest block mb-2">
            Client Portal | Industrial Manufacturing
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Customer Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/upload"
            className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest transition shadow-lg flex items-center gap-2"
          >
            New CAD Order <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2"
          >
            <LogOut className="w-4 h-4 text-red-400" /> Sign Out
          </button>
        </div>
      </div>

      {/* METRICS METERS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Active Production Jobs</span>
          <span className="text-3xl font-extrabold text-white">2 Parts</span>
        </div>
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Completed Deliveries</span>
          <span className="text-3xl font-extrabold text-green-400">18 Orders</span>
        </div>
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">Total CAD Files Uploaded</span>
          <span className="text-3xl font-extrabold text-white">42 Files</span>
        </div>
        <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
          <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">ISO Certificate Status</span>
          <span className="text-sm font-bold text-green-400 flex items-center gap-1.5 mt-2">
            <CheckCircle2 className="w-4 h-4" /> Verified ISO 9001
          </span>
        </div>
      </div>

      {/* RECENT ORDERS PIPELINE */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">
          Active & Recent Manufacturing Orders
        </h2>

        <div className="space-y-4">
          {orders.map((ord) => (
            <div
              key={ord.id}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-zinc-700 transition"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-red-400 text-[10px] font-bold">
                    {ord.id}
                  </span>
                  <span className="text-xs text-zinc-400">Ordered: {ord.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-red-500" /> {ord.fileName}
                </h3>
                <p className="text-xs text-zinc-400">
                  Material: <span className="text-white font-bold">{ord.material}</span> | Qty: {ord.quantity} units
                </p>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full lg:w-72">
                <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                  <span>Status: <strong className="text-white">{ord.status}</strong></span>
                  <span className="text-red-400 font-bold">{ord.progress}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                  <div
                    className="h-full bg-red-600 transition-all duration-500"
                    style={{ width: `${ord.progress}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-zinc-500 mt-1 block">Est: {ord.estDelivery}</span>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2">
                <button
                  onClick={() => alert(`Downloading inspection report & invoice for ${ord.id}`)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Invoice
                </button>
                <Link
                  href={`/upload?reorder=${encodeURIComponent(ord.id)}`}
                  className="px-4 py-2 rounded-xl bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Re-Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

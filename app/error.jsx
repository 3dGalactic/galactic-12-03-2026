"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("App Router Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center font-mono">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-500 mb-6">
        <AlertCircle className="h-8 w-8" />
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight mb-2">
        System Notice
      </h1>
      <p className="text-zinc-400 text-sm max-w-md mb-8">
        An unexpected error occurred while loading this view. Please try refreshing or return to the main dashboard.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest transition"
        >
          <RefreshCw className="w-4 h-4" /> Refresh View
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest transition"
        >
          <Home className="w-4 h-4 text-red-400" /> Back to Home
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error Boundary:", error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 text-center font-mono">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-500 mb-6">
          <AlertCircle className="h-8 w-8" />
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Galactic 3D System Error
        </h1>
        <p className="text-zinc-400 text-sm max-w-md mb-8">
          A root error occurred. Click below to reload the application.
        </p>

        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest transition"
        >
          <RefreshCw className="w-4 h-4" /> Reload System
        </button>
      </body>
    </html>
  );
}

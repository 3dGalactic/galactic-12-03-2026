"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "+919740331995";
  const defaultMessage = encodeURIComponent(
    "Hello Galactic 3D! I am interested in custom 3D printing and engineering services."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-24 right-6 z-[9990] flex items-center gap-3 rounded-full border border-green-500/30 bg-zinc-950/80 px-4 py-3 text-white shadow-2xl backdrop-blur-xl transition duration-300 hover:border-green-500 hover:bg-green-600/90 hover:scale-105 active:scale-95 group"
    >
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-black font-bold">
        <MessageCircle className="h-5 w-5 fill-current text-black" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
      <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider text-zinc-200 group-hover:text-white">
        WhatsApp Live
      </span>
    </a>
  );
}

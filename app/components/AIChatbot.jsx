"use client";

import { useState } from "react";
import { Bot, X, Send, Sparkles, User, FileText, ChevronRight } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am Galactic AI Assistant. How can I help with your 3D printing project today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickPrompts = [
    "What materials do you offer?",
    "How fast is DMLS metal printing?",
    "How to get an instant quote?",
    "Supported CAD file types?",
  ];

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const newMessages = [...messages, { sender: "user", text: textToSend }];
    setMessages(newMessages);
    if (!userText) setInput("");

    // Simulate AI intelligent responses based on 3D printing domain
    setTimeout(() => {
      let botReply =
        "Galactic 3D offers end-to-end industrial additive manufacturing including DMLS, SLS, FDM, and SLA. You can upload CAD files on our Instant Quote page for 24-hour evaluation!";

      const lower = textToSend.toLowerCase();
      if (lower.includes("material")) {
        botReply =
          "We print in Titanium Ti6Al4V, Stainless Steel 316L, Inconel 718, PA12 Nylon, ULTEM 9085, ABS, PETG, and High-Temp Resins. View our Materials page for technical datasheets!";
      } else if (lower.includes("dmls") || lower.includes("metal")) {
        botReply =
          "Direct Metal Laser Sintering (DMLS) uses high-power 400W lasers to fuse titanium and steel powders into fully dense (99.9%) production-grade metal parts with ±0.05mm accuracy.";
      } else if (lower.includes("quote") || lower.includes("cost") || lower.includes("price")) {
        botReply =
          "You can use our Instant Quote Calculator to upload STL, STEP, OBJ, or 3MF files and receive instant pricing estimates based on material volume!";
      } else if (lower.includes("file") || lower.includes("format") || lower.includes("cad")) {
        botReply =
          "We accept STL, STEP, IGES, OBJ, and 3MF files up to 100MB. Secure cloud encryption keeps all proprietary CAD designs confidential.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
        className="fixed bottom-24 left-6 z-[9990] flex items-center gap-2 rounded-full border border-red-500/40 bg-zinc-950/90 px-4 py-3 text-white shadow-2xl backdrop-blur-xl transition duration-300 hover:border-red-500 hover:bg-red-600 hover:scale-105 active:scale-95 group"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider text-zinc-200 group-hover:text-white">
          Galactic AI
        </span>
      </button>

      {/* CHAT MODAL */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-[9999] w-[90vw] sm:w-[380px] h-[520px] flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl overflow-hidden font-sans">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600/20 text-red-500 border border-red-500/30">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                  Galactic AI Engineer
                </h3>
                <p className="text-[10px] text-green-400 font-mono flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Online Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="h-6 w-6 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-1">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[80%] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-red-600 text-white rounded-br-none"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* QUICK SUGGESTIONS */}
          <div className="p-2 border-t border-zinc-900 bg-zinc-950 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 text-[10px] font-mono transition"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* INPUT FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-zinc-800 bg-zinc-900/40 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about 3D printing, materials, quotes..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-mono"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-red-600 hover:bg-red-500 text-white transition"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

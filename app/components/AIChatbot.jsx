"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Maximize2,
  Minimize2,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  ExternalLink,
  Mic,
  MicOff,
  ChevronRight,
  Upload,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  User as UserIcon,
  HelpCircle,
  Copy,
  Check,
  Globe
} from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

const INITIAL_WELCOME = `Hello, I am the Galactic 3D AI Assistant.

I can help you with:
• Services
• Materials
• Industries
• Manufacturing Capabilities
• Training Programs
• Technical Questions
• Quote Requests
• Metal 3D Printing Guidance

How can I help you today?`;

const QUICK_ACTIONS = [
  { label: "About Galactic 3D", query: "About Galactic 3D" },
  { label: "Services", query: "Services" },
  { label: "Materials", query: "Materials" },
  { label: "Industries", query: "Industries" },
  { label: "Training Programs", query: "Training Programs" },
  { label: "Request Quote", query: "Request Quote" },
  { label: "Contact Team", query: "Contact Team" },
];

export default function AIChatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [language, setLanguage] = useState("en"); // en | hi | kn
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: INITIAL_WELCOME,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [feedbackGiven, setFeedbackGiven] = useState({});
  const [isListening, setIsListening] = useState(false);

  // In-chat Lead Form State
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirement: "",
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize Session
  useEffect(() => {
    const existing = localStorage.getItem("galactic_chat_session_id");
    if (existing) {
      setSessionId(existing);
    } else {
      const newId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      setSessionId(newId);
      localStorage.setItem("galactic_chat_session_id", newId);
    }
  }, []);

  // Auto scroll logic:
  // When bot responds, scroll to the TOP of the new message so the first line is immediately visible!
  useEffect(() => {
    if (!isOpen) return;

    if (isLoading) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.role === "assistant" && lastMsg.id !== "welcome") {
      setTimeout(() => {
        const botElement = document.getElementById(`msg-${lastMsg.id}`);
        if (botElement) {
          botElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }, 60);
    } else if (lastMsg && lastMsg.role === "user") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, showLeadForm, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && !isFullScreen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, isFullScreen]);

  // Voice Input (Speech to Text)
  const toggleSpeechRecognition = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in your current browser.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = language === "hi" ? "hi-IN" : language === "kn" ? "kn-IN" : "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };

    recognition.start();
  };

  const handleSend = async (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessageId = `usr_${Date.now()}`;
    const newMessages = [
      ...messages,
      {
        id: userMessageId,
        role: "user",
        content: textToSend.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];

    setMessages(newMessages);
    if (!userText) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend.trim(),
          sessionId,
          language,
          conversationHistory: newMessages.slice(-6).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot_${Date.now()}`,
            role: "assistant",
            content: data.answer,
            citations: data.citations || [],
            followUpQuestions: data.followUpQuestions || [],
            intent: data.intent,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);

        if (data.suggestLeadForm && !leadSubmitted) {
          setShowLeadForm(true);
          setLeadFormData((prev) => ({
            ...prev,
            requirement: prev.requirement || textToSend.trim(),
          }));
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot_err_${Date.now()}`,
            role: "assistant",
            content: "I apologize, but I encountered an issue connecting to the Galactic 3D knowledge base. Please reach out to info@galactic-3d.com directly.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot_err_${Date.now()}`,
          role: "assistant",
          content: "Unable to reach server. Please check your connection or contact Galactic 3D support.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadFormData.name || !leadFormData.email) {
      alert("Please provide both your Name and Email.");
      return;
    }

    setLeadSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadFormData,
          sessionId,
          source: "Galactic 3D AI Assistant Widget",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setLeadSubmitted(true);
        setShowLeadForm(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `lead_ack_${Date.now()}`,
            role: "assistant",
            content: `Thank you, **${leadFormData.name}**! 🚀 Your requirement has been registered with Galactic 3D Engineering. Our Technical Application Specialist will review your specifications and contact you at **${leadFormData.email}** within 24 hours.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        alert(data.error || "Failed to submit lead");
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      alert("Submission error. Please email info@galactic-3d.com directly.");
    } finally {
      setLeadSubmitting(false);
    }
  };

  const handleFeedback = async (msgId, rating) => {
    setFeedbackGiven((prev) => ({ ...prev, [msgId]: rating }));
    try {
      await fetch("/api/admin/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, rating }),
      });
    } catch (e) {
      // silent
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const restartChat = () => {
    const newId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    setSessionId(newId);
    localStorage.setItem("galactic_chat_session_id", newId);
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: INITIAL_WELCOME,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setShowLeadForm(false);
    setLeadSubmitted(false);
  };

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* 1. FLOATING LAUNCHER BUTTON (COMPACT CIRCULAR SYMBOL ONLY) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[9995]">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Galactic 3D AI Assistant"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#D32F2F] text-white shadow-[0_8px_25px_rgba(211,47,47,0.45)] hover:bg-[#B71C1C] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30 group"
          >
            <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
            </span>
          </button>
        </div>
      )}

      {/* 2. CHAT MODAL / EXPANDED WINDOW */}
      {isOpen && (
        <div
          className={`fixed z-[9999] flex flex-col bg-white text-[#111111] shadow-[0_12px_48px_rgba(0,0,0,0.25)] border border-[#EAEAEA] transition-all duration-300 font-sans ${
            isFullScreen
              ? "inset-2 sm:inset-6 rounded-2xl"
              : "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[440px] h-[640px] max-h-[90vh] rounded-2xl"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-[#EAEAEA] bg-[#111111] text-white p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D32F2F] text-white shadow-md">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm tracking-wide text-white">
                    Galactic 3D AI Assistant
                  </h3>
                </div>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Application Engineer
                </p>
              </div>
            </div>

            {/* HEADER CONTROLS */}
            <div className="flex items-center gap-1 text-zinc-400">
              {/* Language Selector */}
              <div className="relative flex items-center mr-1">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 rounded px-2 py-1 focus:outline-none focus:border-red-500 cursor-pointer"
                  title="Select Language"
                >
                  <option value="en">English (EN)</option>
                  <option value="hi">हिन्दी (HI)</option>
                  <option value="kn">ಕನ್ನಡ (KN)</option>
                </select>
              </div>

              <button
                onClick={restartChat}
                title="Restart Conversation"
                className="p-1.5 rounded-lg hover:bg-zinc-800 hover:text-white transition"
              >
                <RotateCcw className="h-4 w-4" />
              </button>

              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
                className="p-1.5 rounded-lg hover:bg-zinc-800 hover:text-white transition"
              >
                {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1.5 rounded-lg hover:bg-red-600 hover:text-white transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* MESSAGES BODY */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#FBFBFC] to-[#F5F6F7] text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                id={`msg-${msg.id}`}
                className={`flex gap-2.5 scroll-mt-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="h-7 w-7 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/30 flex items-center justify-center text-[#D32F2F] flex-shrink-0 mt-0.5">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div className={`max-w-[88%] space-y-2`}>
                  {/* MESSAGE BUBBLE */}
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-[#D32F2F] text-white rounded-tr-none font-medium"
                        : "bg-white border border-[#EAEAEA] text-[#222222] rounded-tl-none shadow-sm"
                    }`}
                  >
                    <MarkdownRenderer content={msg.content} isUser={msg.role === "user"} />
                  </div>





                  {/* BOTTOM ACTION BUTTONS */}
                  {msg.role === "assistant" && msg.id !== "welcome" && (
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 pt-0.5">
                      <span>{msg.timestamp}</span>
                      <span>•</span>
                      <button
                        onClick={() => copyToClipboard(msg.content, msg.id)}
                        className="hover:text-zinc-600 flex items-center gap-0.5 transition"
                        title="Copy answer"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        {copiedId === msg.id ? "Copied" : "Copy"}
                      </button>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleFeedback(msg.id, 1)}
                          className={`hover:text-zinc-700 p-0.5 ${
                            feedbackGiven[msg.id] === 1 ? "text-emerald-600 font-bold" : ""
                          }`}
                          title="Helpful"
                        >
                          <ThumbsUp className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleFeedback(msg.id, 0)}
                          className={`hover:text-zinc-700 p-0.5 ${
                            feedbackGiven[msg.id] === 0 ? "text-red-600 font-bold" : ""
                          }`}
                          title="Not helpful"
                        >
                          <ThumbsDown className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* IN-CHAT LEAD CAPTURE FORM */}
            {showLeadForm && !leadSubmitted && (
              <div className="bg-white border-2 border-[#D32F2F] rounded-2xl p-4 shadow-lg space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-red-100 text-[#D32F2F]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#111111]">
                        Connect with Galactic 3D Engineering
                      </h4>
                      <p className="text-[10px] text-zinc-500">
                        Get direct DfAM review, material guidance & quote within 24h
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowLeadForm(false)}
                    className="text-zinc-400 hover:text-zinc-600 p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-600 block mb-0.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={leadFormData.name}
                        onChange={(e) =>
                          setLeadFormData({ ...leadFormData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-2.5 py-1.5 rounded-lg border border-zinc-200 text-xs focus:outline-none focus:border-[#D32F2F]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-600 block mb-0.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={leadFormData.email}
                        onChange={(e) =>
                          setLeadFormData({ ...leadFormData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full px-2.5 py-1.5 rounded-lg border border-zinc-200 text-xs focus:outline-none focus:border-[#D32F2F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-600 block mb-0.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={leadFormData.phone}
                        onChange={(e) =>
                          setLeadFormData({ ...leadFormData, phone: e.target.value })
                        }
                        placeholder="+91 9876543210"
                        className="w-full px-2.5 py-1.5 rounded-lg border border-zinc-200 text-xs focus:outline-none focus:border-[#D32F2F]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-zinc-600 block mb-0.5">
                        Company / Org
                      </label>
                      <input
                        type="text"
                        value={leadFormData.company}
                        onChange={(e) =>
                          setLeadFormData({ ...leadFormData, company: e.target.value })
                        }
                        placeholder="Aerospace Corp"
                        className="w-full px-2.5 py-1.5 rounded-lg border border-zinc-200 text-xs focus:outline-none focus:border-[#D32F2F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold text-zinc-600 block mb-0.5">
                      Requirement / Part Specs
                    </label>
                    <textarea
                      rows={2}
                      value={leadFormData.requirement}
                      onChange={(e) =>
                        setLeadFormData({ ...leadFormData, requirement: e.target.value })
                      }
                      placeholder="e.g., Titanium Ti6Al4V prototype, 4 units, need quote by tomorrow..."
                      className="w-full px-2.5 py-1.5 rounded-lg border border-zinc-200 text-xs focus:outline-none focus:border-[#D32F2F]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      100% NDA Protected
                    </span>
                    <button
                      type="submit"
                      disabled={leadSubmitting}
                      className="px-4 py-1.5 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition shadow"
                    >
                      {leadSubmitting ? "Submitting..." : "Submit to Engineers"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TYPING INDICATOR */}
            {isLoading && (
              <div className="flex items-center gap-2 text-zinc-500 text-xs bg-white border border-[#EAEAEA] p-3 rounded-2xl w-36 shadow-sm">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-[#D32F2F] animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 rounded-full bg-[#D32F2F] animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 rounded-full bg-[#D32F2F] animate-bounce"></div>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Analyzing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 3. QUICK ACTION BUTTONS STRIP */}
          <div className="p-2 border-t border-[#EAEAEA] bg-white flex gap-1.5 overflow-x-auto no-scrollbar shadow-inner">
            {QUICK_ACTIONS.map((action, i) => (
              <button
                key={i}
                onClick={() => handleSend(action.query)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-red-50 hover:text-[#D32F2F] hover:border-red-300 text-zinc-700 border border-zinc-200 text-[11px] font-medium transition active:scale-95"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* 4. INPUT BAR */}
          <div className="p-3 border-t border-[#EAEAEA] bg-white rounded-b-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <button
                type="button"
                onClick={toggleSpeechRecognition}
                className={`p-2.5 rounded-xl border transition ${
                  isListening
                    ? "bg-red-600 text-white border-red-600 animate-pulse"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200"
                }`}
                title={isListening ? "Listening... click to stop" : "Voice Input"}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about DMLS metal printing, titanium, quotes, DFAM..."
                className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-[#D32F2F] focus:bg-white transition"
              />

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] disabled:bg-zinc-300 text-white transition shadow active:scale-95 flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-2 px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                ISO 9001 Certified Manufacturing
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

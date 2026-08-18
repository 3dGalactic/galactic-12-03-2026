"use client";

import { useState } from "react";
import { Mail, X, Send, CheckCircle2, AlertCircle, ExternalLink, Globe } from "lucide-react";

export default function EmailTeamModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Inquiry to Galactic 3D Team",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Failed to send email:", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=admin@galactic-3d.com&su=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(formData.message)}`;
  const mailtoUrl = `mailto:admin@galactic-3d.com?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(formData.message)}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200">
        
        {/* MODAL HEADER */}
        <div className="bg-[#111111] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/20 border border-[#D32F2F]/40 flex items-center justify-center text-[#D32F2F]">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Email Galactic 3D Team</h3>
              <p className="text-xs text-zinc-400">Direct recipient: <span className="text-white font-mono">admin@galactic-3d.com</span></p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 space-y-4">
          
          {status === "success" ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <CheckCircle2 size={40} className="text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-gray-900">Email Sent Successfully!</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Your message has been delivered to <strong>admin@galactic-3d.com</strong>. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", subject: "Inquiry to Galactic 3D Team", message: "" });
                  onClose();
                }}
                className="btn-corporate-primary text-xs w-full justify-center"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-[#111111] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-[#111111] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-[#111111] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your manufacturing or engineering inquiry..."
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-[#111111] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition resize-none"
                />
              </div>

              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle size={15} /> Failed to submit. Please use the Webmail links below.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-corporate-primary justify-center text-xs py-3"
              >
                {submitting ? "Sending Email..." : "Send Email to admin@galactic-3d.com"} <Send size={14} />
              </button>

            </form>
          )}

          {/* ALTERNATIVE WEBMAIL LINKS */}
          <div className="pt-3 border-t border-gray-200 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block text-center">
              Or Send Directly via Webmail / App:
            </span>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 font-semibold flex items-center justify-center gap-1.5 transition"
              >
                <Globe size={14} className="text-red-600" /> Open in Gmail
              </a>

              <a
                href={mailtoUrl}
                className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 font-semibold flex items-center justify-center gap-1.5 transition"
              >
                <Mail size={14} className="text-blue-600" /> Open Mail App
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

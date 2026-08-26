"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
  PhoneCall,
  User,
  Coffee,
  FileCheck2,
  Cpu,
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Tag,
  Percent,
  Wrench,
  MessageSquareText,
  Camera,
} from "lucide-react";

const FEATURED_WORKSHOP = {
  id: "industry-immersion-2026",
  title: "Industry Immersion Workshop on Additive Manufacturing & Metal 3D Printing",
  experience:
    "Experience the complete industrial workflow of Additive Manufacturing, from design and build preparation to live Metal 3D Printing.",
  date: "18th & 19th September 2026",
  time: "9:00 AM – 4:00 PM (Both Days)",
  location:
    "Cambridge Institute of Technology, Jai Bhuvaneshwari Layout Rd, SR Layout, Chikkabasavanapura, Krishnarajapuram, Bengaluru, Karnataka 560036",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Cambridge+Institute+of+Technology,+Jai+Bhuvaneshwari+Layout+Rd,+SR+Layout,+Chikkabasavanapura,+Krishnarajapuram,+Bengaluru,+Karnataka+560036",
  badge: "Featured Masterclass",
  contactName: "Bharath Kumar S",
  contactPhone: "6360146030",
  pricing: {
    earlyBird: {
      students: "₹1,499/-",
      professionals: "₹1,999/-",
    },
    regular: {
      students: "₹1,999/-",
      professors: "₹2,499/-",
      professionals: "₹2,999/-",
    },
    group: {
      groupOf3: "₹5,999/-",
      groupOf5: "₹7,499/-",
    },
  },
  highlights: [
    "Introduction to Additive Manufacturing",
    "Design for Additive Manufacturing (DfAM)",
    "Industrial Applications & Case Studies",
    "Conformal Cooling Design Concepts",
    "Introduction to Metal Additive Manufacturing",
    "Metal AM Processes & Materials",
    "Materialise Magics Software Training",
    "Support Structures & Build Preparation",
    "Part Organization & Optimization",
    "Galactic 3D Facility Tour",
    "Metal Part Samples Showcase",
    "Career Opportunities in Additive Manufacturing",
    "Industry Trends & Future Scope",
  ],
  day1: {
    dateLabel: "Day 1 — 18th September 2026",
    agenda:
      "AM Fundamentals • DfAM • Industrial Applications • Metal AM Introduction • Facility Tour • Machine Overview",
  },
  day2: {
    dateLabel: "Day 2 — 19th September 2026",
    agenda:
      "Materialise Magics • Support Structures • Build Preparation • Industry Scope & Careers",
  },
  includes: [
    "Certificate",
    "Lunch",
    "Refreshments",
    "Facility Tour",
    "Software Exposure",
    "Live Metal 3D Printing Experience",
  ],
};

const PAST_WORKSHOPS = [
  {
    id: "am-workshop-july-2026",
    date: "3 – 4 July 2026",
    title: "Additive Manufacturing Workshop",
    category: "Masterclass",
    description: "Comprehensive 2-day technical masterclass featuring Materialise Magics software training and industrial Additive Manufacturing workflows.",
    highlights: [
      "Covered the complete industrial AM workflow.",
      "Included design, build preparation, live Metal 3D Printing and post-processing.",
      "Exposure to industrial applications and processes.",
      "Discussed career opportunities in Additive Manufacturing.",
    ],
    images: [
      "/events/am-workshop-july/am_workshop_july_1.jpg",
      "/events/am-workshop-july/am_workshop_july_2.jpg",
      "/events/am-workshop-july/am_workshop_july_3.jpg",
    ],
  },
  {
    id: "alstom-exposure-2026",
    date: "5 March 2026",
    title: "Alstom Industry Exposure",
    category: "Corporate Workshop",
    description: "Dedicated corporate technical exposure session hosted for Alstom engineering teams.",
    highlights: [
      "Exposure to the complete industrial Additive Manufacturing workflow.",
      "Covered design, build preparation, live Metal 3D Printing and post-processing.",
      "Received positive feedback from attendees.",
    ],
    images: [
      "/events/alstom-2026/alstom_1.jpg",
      "/events/alstom-2026/alstom_2.jpg",
      "/events/alstom-2026/alstom_3.jpg",
    ],
  },
];

const PAST_FORUMS = [
  {
    id: "water-forum-2026",
    date: "8 August 2026",
    title: "Water in the City Forum (Water Conservation & Tech)",
    category: "Innovation Forum",
    description: "A high-impact cross-sector water innovation & conservation forum hosted by Galactic 3D, bringing together water-tech companies, treatment players, AI & smart-monitoring experts, academics, investors, ESG professionals, and community stakeholders.",
    highlights: [
      "Cross-sector water innovation & conservation technology ecosystem showcase.",
      "Brought together water-tech companies, treatment players, AI & smart-monitoring experts, academics, investors, ESG professionals and community stakeholders.",
      "Focus on turning networking into problem-solving, pilot projects, research, funding and measurable impact.",
      "Interactive technical roundtables discussing sustainable urban water management, smart monitoring, and advanced filtration hardware.",
    ],
    images: [
      "/events/water-forum/water_forum_1.jpg",
      "/events/water-forum/water_forum_2.jpg",
      "/events/water-forum/water_forum_3.jpg",
      "/events/water-forum/water_forum_4.jpg",
    ],
  },
  {
    id: "east-point-2026",
    date: "22 August 2026",
    title: "Industry Visit – East Point College of Engineering",
    category: "Academic & Tech Forum",
    description: "Industrial exposure visit to Galactic 3D's metal additive manufacturing facility.",
    highlights: [
      "Students visited Galactic 3D for an industrial exposure visit.",
      "Facility tour and faculty-led technical explanation.",
      "Students experienced 3D printing and gained ideas for future opportunities.",
    ],
    images: [
      "/events/east-point-2026/east_point_1.jpg",
      "/events/east-point-2026/east_point_2.jpg",
      "/events/east-point-2026/east_point_3.jpg",
      "/events/east-point-2026/east_point_4.jpg",
    ],
  },
  {
    id: "additive-tech-2026",
    date: "27 June 2026",
    title: "Additive Tech Forum",
    category: "Technical Forum",
    description: "Ecosystem conference exploring practical AM applications across major industrial sectors.",
    highlights: [
      "Explored practical AM applications across major industrial sectors.",
      "Brought attention to manufacturing ecosystem challenges.",
      "Focused on developing agile, localized and efficient supply chains.",
    ],
    images: [
      "/events/additive-tech-2026/additive_tech_june_1.jpg",
      "/events/additive-tech-2026/additive_tech_june_2.jpg",
      "/events/additive-tech-2026/additive_tech_june_3.jpg",
    ],
  },
  {
    id: "additive-tech-2025",
    date: "4 July 2025",
    title: "Additive Tech Forum",
    category: "Technical Forum",
    description: "Practical applications of Additive Manufacturing across Aerospace, Automotive, Medical Devices, Oil & Gas.",
    highlights: [
      "Practical applications of Additive Manufacturing across Aerospace, Automotive, Medical Devices, Oil & Gas, Research & Education.",
      "Focus on addressing gaps in the manufacturing ecosystem.",
      "Promotes agile, localized and efficient supply chains.",
    ],
    images: [
      "/events/additive-tech-2025/additive_tech_1.jpg",
      "/events/additive-tech-2025/additive_tech_2.jpg",
      "/events/additive-tech-2025/additive_tech_3.jpg",
    ],
  },
];

export default function WorkshopsEventsPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [selectedDetailEvent, setSelectedDetailEvent] = useState(null);
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    selectedPass: "Early Bird Student Pass — ₹1,499/-",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.organization,
          subject: `Workshop Registration (${formData.selectedPass}): ${FEATURED_WORKSHOP.title}`,
          message: `Workshop Registration Details:\nEvent: ${FEATURED_WORKSHOP.title}\nSelected Pass: ${formData.selectedPass}\nRole/Designation: ${formData.designation || "N/A"}\nOrganization: ${formData.organization || "N/A"}\nContact Coordinator: ${FEATURED_WORKSHOP.contactName} (${FEATURED_WORKSHOP.contactPhone})\nNotes/Goals: ${formData.notes || "N/A"}`,
          sourcePage: "Workshops & Events Page",
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Workshop registration error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowRegModal(false);
        setSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          designation: "",
          selectedPass: "Early Bird Student Pass — ₹1,499/-",
          notes: "",
        });
      }, 3500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      
      {/* WORKSHOPS SECTION (BLOCK 1) */}
      <section id="workshops" className="scroll-mt-24 py-6 sm:py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-6">
          
          {/* PAGE HEADER & SECTION SELECTOR */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-gray-100">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Workshop &amp; <span className="text-[#D32F2F]">Forum</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-3xl">
                Hands-on industrial metal 3D printing masterclasses, build preparation labs, DfAM training, and technical forums designed for engineers, researchers, and industry leaders.
              </p>
            </div>

            {/* QUICK SECTION JUMP BUTTONS */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#workshops"
                className="px-4 py-2 rounded-xl bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5"
              >
                <Wrench size={14} /> WORKSHOP
              </a>
              <a
                href="#forums"
                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#111111] text-xs font-bold uppercase tracking-wider transition border border-gray-300 flex items-center gap-1.5"
              >
                <MessageSquareText size={14} className="text-[#D32F2F]" /> FORUM
              </a>
            </div>
          </div>

          {/* MAIN EVENT CARD CONTAINER */}
          <div className="bg-white rounded-3xl border border-[#EAEAEA] p-6 sm:p-9 shadow-lg hover:border-[#D32F2F] transition-all duration-300 space-y-8">
            
            {/* TOP TITLE & COMPACT SUMMARY */}
            <div className="space-y-4">
              {/* CONTINUOUS RIGHT-TO-LEFT MOVING REGISTRATION TICKER BADGE */}
              <div className="w-full overflow-hidden bg-emerald-50 border border-emerald-200 rounded-xl py-2 px-3 shadow-2xs">
                <div className="animate-marquee-left flex items-center gap-8 text-xs font-extrabold text-emerald-800 uppercase tracking-wider whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} className="text-emerald-600 shrink-0" /> Open for Registrations — Early Bird Passes Active
                  </span>
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} className="text-emerald-600 shrink-0" /> Open for Registrations — Reserve Your Seat Today
                  </span>
                  <span className="flex items-center gap-2">
                    <Sparkles size={14} className="text-emerald-600 shrink-0" /> Open for Registrations — Limited Seats Remaining
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] leading-tight">
                {FEATURED_WORKSHOP.title}
              </h3>

              {/* QUICK LOGISTICS & PRICING BADGES BAR */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-700 pt-1">
                <div className="flex items-center gap-2 bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-200">
                  <Calendar size={16} className="text-[#D32F2F]" />
                  <span>{FEATURED_WORKSHOP.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-200">
                  <Clock size={16} className="text-[#D32F2F]" />
                  <span>{FEATURED_WORKSHOP.time}</span>
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-[#D32F2F] px-3.5 py-2 rounded-xl border border-red-200 font-extrabold">
                  <Tag size={16} />
                  <span>Early Bird: Students ₹1,499/- | Professionals ₹1,999/-</span>
                </div>
              </div>

              {/* BRIEF EXPERIENCE PREVIEW */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 border-l-4 border-l-[#D32F2F]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#D32F2F] block mb-1">
                  Experience:
                </span>
                <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                  {FEATURED_WORKSHOP.experience}
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS BAR (HOVER TO EXPAND & REGISTER) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-gray-100">
              <button
                onMouseEnter={() => setIsExpanded(true)}
                onClick={() => setIsExpanded((prev) => !prev)}
                className="px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-[#D32F2F] hover:text-white text-[#111111] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-gray-300 shadow-2xs group"
              >
                {isExpanded ? (
                  <>
                    Hide Details <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
                  </>
                ) : (
                  <>
                    Full Details <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                  </>
                )}
              </button>

              <a
                href="https://forms.gle/28vL83h1RRQa4BYK7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                Register Now <ArrowRight size={16} />
              </a>
            </div>

            {/* EXPANDABLE FULL DETAILS SECTION */}
            {isExpanded && (
              <div className="space-y-10 pt-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-4 duration-300">
                
                {/* LOGISTICS & SCHEDULE META GRID (LIGHT THEME - NO BLACK BACKGROUND) */}
                <div className="grid md:grid-cols-3 gap-4 p-6 bg-gray-50 text-[#111111] rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block mb-0.5">Dates</span>
                      <span className="text-sm font-extrabold text-[#111111]">{FEATURED_WORKSHOP.date}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block mb-0.5">Time</span>
                      <span className="text-sm font-extrabold text-[#111111]">{FEATURED_WORKSHOP.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block mb-0.5">
                        Venue (Click to Locate)
                      </span>
                      <a
                        href={FEATURED_WORKSHOP.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-extrabold text-[#111111] hover:text-[#D32F2F] hover:underline transition-colors flex items-start gap-1.5 group cursor-pointer leading-snug"
                      >
                        <span>{FEATURED_WORKSHOP.location}</span>
                        <ExternalLink size={14} className="shrink-0 mt-0.5 text-[#D32F2F] group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* REGISTRATION FEES & PRICING TIERS */}
                <div className="space-y-4">
                  <h4 className="text-lg font-extrabold text-[#111111] flex items-center gap-2">
                    <Tag size={18} className="text-[#D32F2F]" /> Registration Passes &amp; Pricing Tiers
                  </h4>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* EARLY BIRD OFFER */}
                    <div className="bg-gradient-to-br from-red-50 via-white to-gray-50 rounded-2xl border-2 border-[#D32F2F] p-6 space-y-3 relative shadow-sm">
                      <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#D32F2F] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                        Special Offer
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#D32F2F] block">
                        Early Bird Passes
                      </span>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-semibold text-gray-700">Students</span>
                          <span className="font-black text-[#111111]">₹1,499/-</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-semibold text-gray-700">Professionals</span>
                          <span className="font-black text-[#111111]">₹1,999/-</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pt-1">
                        Discounted early registration rates for student and professional applicants.
                      </p>
                    </div>

                    {/* REGULAR INDIVIDUAL PASSES */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#111111] block">
                        Regular Individual Passes
                      </span>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                          <span className="font-semibold text-gray-700">Students</span>
                          <span className="font-extrabold text-[#111111]">₹1,999/-</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                          <span className="font-semibold text-gray-700">Professors / Faculty</span>
                          <span className="font-extrabold text-[#111111]">₹2,499/-</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                          <span className="font-semibold text-gray-700">Industry Professionals</span>
                          <span className="font-extrabold text-[#111111]">₹2,999/-</span>
                        </div>
                      </div>
                    </div>

                    {/* GROUP PACKAGES */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#111111] block">
                        Group Registration Packages
                      </span>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200">
                          <div>
                            <span className="font-bold text-[#111111] block">Group of 3 Participants</span>
                            <span className="text-[10px] text-emerald-700 font-semibold">Save ₹3,000+</span>
                          </div>
                          <span className="font-extrabold text-base text-[#D32F2F]">₹5,999/-</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200">
                          <div>
                            <span className="font-bold text-[#111111] block">Group of 5 Participants</span>
                            <span className="text-[10px] text-emerald-700 font-semibold">Save ₹7,500+ (Best Value)</span>
                          </div>
                          <span className="font-extrabold text-base text-[#D32F2F]">₹7,499/-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TWO DAY AGENDA BREAKDOWN */}
                <div className="space-y-4">
                  <h4 className="text-lg font-extrabold text-[#111111] flex items-center gap-2">
                    <Calendar size={18} className="text-[#D32F2F]" /> Day-Wise Schedule &amp; Agenda
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* DAY 1 */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-2.5 hover:border-[#D32F2F]/50 transition">
                      <div className="inline-block px-3 py-1 rounded-md bg-[#111111] text-white text-xs font-bold uppercase tracking-wider">
                        {FEATURED_WORKSHOP.day1.dateLabel}
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed pt-2">
                        {FEATURED_WORKSHOP.day1.agenda}
                      </p>
                    </div>

                    {/* DAY 2 */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-2.5 hover:border-[#D32F2F]/50 transition">
                      <div className="inline-block px-3 py-1 rounded-md bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider">
                        {FEATURED_WORKSHOP.day2.dateLabel}
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed pt-2">
                        {FEATURED_WORKSHOP.day2.agenda}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WORKSHOP HIGHLIGHTS GRID */}
                <div className="space-y-4">
                  <h4 className="text-lg font-extrabold text-[#111111] flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#D32F2F]" /> Workshop Highlights &amp; Modules
                  </h4>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {FEATURED_WORKSHOP.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800 flex items-center gap-2.5 hover:border-[#D32F2F] hover:bg-white transition shadow-2xs"
                      >
                        <CheckCircle2 size={16} className="text-[#D32F2F] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INCLUDES BADGES */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400 block">
                    Package Includes:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {FEATURED_WORKSHOP.includes.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-2 rounded-lg bg-red-50 text-[#D32F2F] border border-red-100 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                      >
                        <Sparkles size={13} /> {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTTOM BAR: CONTACT & REGISTER CTA */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
                  
                  {/* CONTACT INFO */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 font-bold">
                      <User size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                        Workshop Coordinator &amp; Contact:
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-extrabold text-[#111111]">
                          {FEATURED_WORKSHOP.contactName}
                        </span>
                        <a
                          href={`tel:${FEATURED_WORKSHOP.contactPhone}`}
                          className="text-xs font-bold text-[#D32F2F] hover:underline flex items-center gap-1 bg-white px-2.5 py-1 rounded border border-gray-200"
                        >
                          <PhoneCall size={12} /> {FEATURED_WORKSHOP.contactPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM ACTION BUTTONS */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="px-5 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider transition flex items-center gap-1 cursor-pointer border border-gray-300"
                    >
                      Hide Details <ChevronUp size={16} />
                    </button>

                    <a
                      href="https://forms.gle/28vL83h1RRQa4BYK7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 rounded-xl bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      Register Now <ArrowRight size={16} />
                    </a>
                  </div>

                </div>

              </div>
            )}

          </div>

          {/* PAST WORKSHOPS ARCHIVE */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] flex items-center gap-2">
              <Wrench size={20} className="text-[#D32F2F]" /> Previous Workshop
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAST_WORKSHOPS.map((event, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDetailEvent(event)}
                  className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 hover:border-[#D32F2F] hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-md bg-red-50 text-[#D32F2F] border border-red-100 text-[11px] font-extrabold flex items-center gap-1.5">
                        <Calendar size={13} /> {event.date}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-extrabold text-[#111111] leading-snug group-hover:text-[#D32F2F] transition-colors">
                      {event.title}
                    </h4>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                        Key Highlights:
                      </span>
                      <ul className="space-y-1.5">
                        {event.highlights.slice(0, 2).map((highlight, hIdx) => (
                          <li key={hIdx} className="text-xs text-gray-700 font-medium leading-relaxed flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-[#D32F2F] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button className="px-4 py-2 rounded-xl bg-gray-100 group-hover:bg-[#D32F2F] text-gray-700 group-hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer">
                      Full Details <ChevronDown size={14} />
                    </button>
                    <span className="text-gray-400 font-medium text-[11px]">Galactic 3D</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* DEDICATED FORUMS SECTION (BLOCK 2) */}
      <section id="forums" className="scroll-mt-24 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-8">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] flex items-center gap-2">
              <MessageSquareText size={20} className="text-[#D32F2F]" /> Previous Forum
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAST_FORUMS.map((event, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedDetailEvent(event)}
                className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 hover:border-[#D32F2F] hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-md bg-red-50 text-[#D32F2F] border border-red-100 text-[11px] font-extrabold flex items-center gap-1.5">
                      <Calendar size={13} /> {event.date}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[#111111] leading-snug group-hover:text-[#D32F2F] transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {event.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-gray-700 font-medium leading-relaxed flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#D32F2F] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button className="px-4 py-2 rounded-xl bg-gray-100 group-hover:bg-[#D32F2F] text-gray-700 group-hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer">
                    Full Details <ChevronDown size={14} />
                  </button>
                  <span className="text-gray-400 font-medium text-[11px]">Galactic 3D</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* EVENT DETAIL & GALLERY MODAL POPUP */}
      {selectedDetailEvent && (
        <div className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200 font-sans">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl w-full max-w-4xl overflow-hidden relative max-h-[90vh] flex flex-col my-auto">
            
            {/* MODAL HEADER */}
            <div className="bg-[#111111] text-white p-6 sm:p-8 flex items-start justify-between gap-4 shrink-0 border-b border-zinc-800">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-md bg-[#D32F2F] text-white text-[10px] font-extrabold uppercase tracking-wider">
                    {selectedDetailEvent.category}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-zinc-800 text-zinc-300 text-[11px] font-bold flex items-center gap-1.5 border border-zinc-700">
                    <Calendar size={13} className="text-[#D32F2F]" /> {selectedDetailEvent.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  {selectedDetailEvent.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedDetailEvent(null)}
                className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition cursor-pointer shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              
              {/* DESCRIPTION */}
              {selectedDetailEvent.description && (
                <div className="space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D32F2F] block">
                    Event Overview
                  </span>
                  <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                    {selectedDetailEvent.description}
                  </p>
                </div>
              )}

              {/* HIGHLIGHTS */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
                  Key Highlights &amp; Outcomes:
                </span>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {selectedDetailEvent.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed flex items-start gap-2.5 bg-gray-50 p-3.5 rounded-xl border border-gray-200/80">
                      <CheckCircle2 size={16} className="text-[#D32F2F] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EVENT PHOTO GALLERY */}
              {selectedDetailEvent.images && selectedDetailEvent.images.length > 0 ? (
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5">
                      <Camera size={14} /> Event Photo Gallery ({selectedDetailEvent.images.length} Photos)
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Click any photo to enlarge</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedDetailEvent.images.map((imgSrc, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() => setFullscreenPhoto(imgSrc)}
                        className="group relative aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-200 shadow-xs cursor-pointer hover:border-[#D32F2F] transition-all"
                      >
                        <img
                          src={imgSrc}
                          alt={`${selectedDetailEvent.title} photo ${imgIdx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                          <Sparkles size={14} /> Enlarge
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-100 text-xs text-gray-400 font-medium italic">
                  Photo archive for this event will be published soon.
                </div>
              )}

            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-4 shrink-0">
              <span className="text-xs text-gray-500 font-bold">
                Galactic 3D Official Event Archive
              </span>
              <button
                onClick={() => setSelectedDetailEvent(null)}
                className="px-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX POPUP */}
      {fullscreenPhoto && (
        <div
          className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setFullscreenPhoto(null)}
        >
          <button
            onClick={() => setFullscreenPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-10"
          >
            <X size={24} />
          </button>

          <img
            src={fullscreenPhoto}
            alt="Event Detail Fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      )}

      {/* REGISTRATION MODAL POPUP */}
      {showRegModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-lg overflow-hidden relative animate-fade-in-up">
            
            {/* MODAL HEADER */}
            <div className="bg-[#111111] text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] block">
                  Event Registration Pass
                </span>
                <h3 className="text-lg font-extrabold text-white mt-0.5 leading-tight">
                  {FEATURED_WORKSHOP.title}
                </h3>
              </div>
              <button
                onClick={() => setShowRegModal(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-extrabold text-[#111111]">Registration Delivered!</h4>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto">
                    Your workshop registration details have been delivered to <strong className="text-emerald-600">admin@galactic-3d.com</strong>. Coordinator <strong>Bharath Kumar S ({FEATURED_WORKSHOP.contactPhone})</strong> will contact you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Select Registration Pass *</label>
                    <select
                      value={formData.selectedPass}
                      onChange={(e) => setFormData({ ...formData, selectedPass: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden font-semibold text-gray-800"
                    >
                      <option value="Early Bird Student Pass — ₹1,499/-">Early Bird: Student — ₹1,499/-</option>
                      <option value="Early Bird Professional Pass — ₹1,999/-">Early Bird: Professional — ₹1,999/-</option>
                      <option value="Student Individual Pass — ₹1,999/-">Individual: Student — ₹1,999/-</option>
                      <option value="Professor / Academician Pass — ₹2,499/-">Individual: Professor / Academician — ₹2,499/-</option>
                      <option value="Industry Professional Pass — ₹2,999/-">Individual: Industry Professional — ₹2,999/-</option>
                      <option value="Group Pass (3 Members) — ₹5,999/-">Group Package (3 Participants) — ₹5,999/-</option>
                      <option value="Group Pass (5 Members) — ₹7,499/-">Group Package (5 Participants) — ₹7,499/-</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Organization / College *</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company / University"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Role / Designation</label>
                      <input
                        type="text"
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        placeholder="e.g. Design Engineer / Student"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Specific Learning Goals / Questions</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your learning goals or DfAM requirements..."
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    {isSubmitting ? "Submitting..." : "Confirm Workshop Registration"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

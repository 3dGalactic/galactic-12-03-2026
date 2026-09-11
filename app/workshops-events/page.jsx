"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Wrench,
  MessageSquareText,
  Camera,
} from "lucide-react";

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

/* CARD COVER IMAGE — auto-cycles through the event's photos with a crossfade */
function EventCoverImage({ images, title, date, category }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative aspect-[16/10] bg-gray-900 overflow-hidden shrink-0">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
        <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-xs text-white border border-white/20 text-[11px] font-extrabold flex items-center gap-1.5">
          <Calendar size={13} /> {date}
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#D32F2F] text-white text-[10px] font-bold uppercase tracking-wider">
          {category}
        </span>
      </div>
    </div>
  );
}

export default function WorkshopsEventsPage() {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDetailEvent, setSelectedDetailEvent] = useState(null);
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null);
  const [cardPhotoModal, setCardPhotoModal] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when any modal is open and trigger 300ms entry animation
  useEffect(() => {
    if (selectedDetailEvent || fullscreenPhoto) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setAnimateIn(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedDetailEvent, fullscreenPhoto]);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      
      {/* WORKSHOPS SECTION (BLOCK 1) */}
      <section id="workshops" className="scroll-mt-24 py-6 sm:py-8 bg-white relative overflow-hidden">
        {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN OVERLAY */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 space-y-6">
          
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

          {/* PAST WORKSHOPS ARCHIVE */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] flex items-center gap-2">
              <Wrench size={20} className="text-[#D32F2F]" /> Previous Workshop
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAST_WORKSHOPS.map((event, idx) => {
                const isSelected = selectedDetailEvent?.id === event.id;
                const isViewingPhoto = cardPhotoModal?.eventId === event.id;
                const hasImages = event.images && event.images.length > 0;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedDetailEvent(isSelected ? null : event)}
                    className={`relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                      isSelected || isViewingPhoto ? "border-[#D32F2F] ring-2 ring-red-100" : "border-gray-200 hover:border-[#D32F2F]"
                    }`}
                  >
                    {/* CARD COVER IMAGE (INDUSTRIES-STYLE, AUTO-CYCLING) */}
                    {hasImages && (
                      <EventCoverImage
                        images={event.images}
                        title={event.title}
                        date={event.date}
                        category={event.category}
                      />
                    )}

                    {/* IN-PLACE POP-UP LARGE PHOTO LIGHTBOX OVERLAY (WHITE BACKGROUND) */}
                    {isViewingPhoto && (
                      <div className="absolute inset-0 z-30 bg-white text-[#111111] rounded-2xl p-4 flex flex-col justify-between shadow-2xl animate-in fade-in zoom-in-95 duration-200 border-2 border-[#D32F2F]">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 z-10">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                            Photo {cardPhotoModal.index + 1} of {cardPhotoModal.list.length}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCardPhotoModal(null);
                            }}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#D32F2F] text-gray-600 hover:text-white flex items-center justify-center transition cursor-pointer"
                            aria-label="Close photo"
                          >
                            <X size={15} />
                          </button>
                        </div>

                        <div className="relative flex-1 flex items-center justify-center my-2 overflow-hidden bg-gray-50 rounded-xl p-2 border border-gray-100">
                          <img
                            src={cardPhotoModal.imgSrc}
                            alt="Enlarged event photo"
                            className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                          />

                          {cardPhotoModal.list.length > 1 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const prevIdx = (cardPhotoModal.index - 1 + cardPhotoModal.list.length) % cardPhotoModal.list.length;
                                  setCardPhotoModal({
                                    ...cardPhotoModal,
                                    index: prevIdx,
                                    imgSrc: cardPhotoModal.list[prevIdx],
                                  });
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111]/80 hover:bg-[#D32F2F] text-white transition cursor-pointer shadow-lg"
                              >
                                <ChevronLeft size={18} />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const nextIdx = (cardPhotoModal.index + 1) % cardPhotoModal.list.length;
                                  setCardPhotoModal({
                                    ...cardPhotoModal,
                                    index: nextIdx,
                                    imgSrc: cardPhotoModal.list[nextIdx],
                                  });
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111]/80 hover:bg-[#D32F2F] text-white transition cursor-pointer shadow-lg"
                              >
                                <ChevronRight size={18} />
                              </button>
                            </>
                          )}
                        </div>

                        <div className="text-center text-[10px] text-gray-500 font-bold z-10">
                          Click X to close photo
                        </div>
                      </div>
                    )}

                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        {!hasImages && (
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-md bg-red-50 text-[#D32F2F] border border-red-100 text-[11px] font-extrabold flex items-center gap-1.5">
                              <Calendar size={13} /> {event.date}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                              {event.category}
                            </span>
                          </div>
                        )}

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

                      {/* SMOOTH ANIMATED INLINE DETAILS EXPANDER */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isSelected
                            ? "max-h-[1200px] opacity-100 mt-4 pt-4 border-t-2 border-[#D32F2F] bg-red-50/40 rounded-xl p-4 space-y-3"
                            : "max-h-0 opacity-0 py-0 border-none"
                        }`}
                      >
                        {event.description && (
                          <div className="space-y-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] block">
                              Overview
                            </span>
                            <p className="text-xs text-gray-700 font-medium leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        )}

                        {event.highlights && event.highlights.length > 2 && (
                          <div className="space-y-1.5 pt-2 border-t border-gray-200/60">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block">
                              All Outcomes:
                            </span>
                            <ul className="space-y-1">
                              {event.highlights.slice(2).map((hl, hIdx) => (
                                <li key={hIdx} className="text-[11px] text-gray-700 flex items-start gap-1.5">
                                  <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0 mt-0.5" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {event.images && event.images.length > 0 && (
                          <div className="space-y-2 pt-2 border-t border-gray-200/60">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] flex items-center gap-1">
                              <Camera size={13} /> Photo Showcase (Click to enlarge 🔍)
                            </span>
                            <div className="grid grid-cols-3 gap-2">
                              {event.images.map((imgSrc, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCardPhotoModal({
                                      eventId: event.id,
                                      imgSrc,
                                      index: imgIdx,
                                      list: event.images,
                                    });
                                  }}
                                  className="group relative aspect-video rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-[#D32F2F] transition-all bg-gray-900"
                                >
                                  <img src={imgSrc} alt="Event photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[9px] font-bold">
                                    Enlarge
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDetailEvent(isSelected ? null : event);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer ${
                          isSelected ? "bg-[#D32F2F] text-white shadow-sm" : "bg-gray-100 hover:bg-[#D32F2F] text-gray-700 hover:text-white"
                        }`}
                      >
                        {isSelected ? "Hide Details" : "Full Details"} <ChevronDown size={14} className={`transition-transform duration-200 ${isSelected ? "rotate-180" : ""}`} />
                      </button>
                      <span className="text-gray-400 font-medium text-[11px]">Galactic 3D</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* DEDICATED FORUMS SECTION (BLOCK 2) */}
      <section id="forums" className="scroll-mt-24 py-12 sm:py-16 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN OVERLAY */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 space-y-8">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] flex items-center gap-2">
              <MessageSquareText size={20} className="text-[#D32F2F]" /> Previous Forum
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAST_FORUMS.map((event, idx) => {
              const isSelected = selectedDetailEvent?.id === event.id;
              const isViewingPhoto = cardPhotoModal?.eventId === event.id;
              const hasImages = event.images && event.images.length > 0;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedDetailEvent(isSelected ? null : event)}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer group shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                    isSelected || isViewingPhoto ? "border-[#D32F2F] ring-2 ring-red-100" : "border-gray-200 hover:border-[#D32F2F]"
                  }`}
                >
                  {/* CARD COVER IMAGE (INDUSTRIES-STYLE, AUTO-CYCLING) */}
                  {hasImages && (
                    <EventCoverImage
                      images={event.images}
                      title={event.title}
                      date={event.date}
                      category={event.category}
                    />
                  )}

                  {/* IN-PLACE POP-UP LARGE PHOTO LIGHTBOX OVERLAY (WHITE BACKGROUND) */}
                  {isViewingPhoto && (
                    <div className="absolute inset-0 z-30 bg-white text-[#111111] rounded-2xl p-4 flex flex-col justify-between shadow-2xl animate-in fade-in zoom-in-95 duration-200 border-2 border-[#D32F2F]">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2 z-10">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                          Photo {cardPhotoModal.index + 1} of {cardPhotoModal.list.length}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardPhotoModal(null);
                          }}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#D32F2F] text-gray-600 hover:text-white flex items-center justify-center transition cursor-pointer"
                          aria-label="Close photo"
                        >
                          <X size={15} />
                        </button>
                      </div>

                      <div className="relative flex-1 flex items-center justify-center my-2 overflow-hidden bg-gray-50 rounded-xl p-2 border border-gray-100">
                        <img
                          src={cardPhotoModal.imgSrc}
                          alt="Enlarged event photo"
                          className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                        />

                        {cardPhotoModal.list.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const prevIdx = (cardPhotoModal.index - 1 + cardPhotoModal.list.length) % cardPhotoModal.list.length;
                                setCardPhotoModal({
                                  ...cardPhotoModal,
                                  index: prevIdx,
                                  imgSrc: cardPhotoModal.list[prevIdx],
                                });
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111]/80 hover:bg-[#D32F2F] text-white transition cursor-pointer shadow-lg"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const nextIdx = (cardPhotoModal.index + 1) % cardPhotoModal.list.length;
                                setCardPhotoModal({
                                  ...cardPhotoModal,
                                  index: nextIdx,
                                  imgSrc: cardPhotoModal.list[nextIdx],
                                });
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111]/80 hover:bg-[#D32F2F] text-white transition cursor-pointer shadow-lg"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </>
                        )}
                      </div>

                      <div className="text-center text-[10px] text-gray-500 font-bold z-10">
                        Click X to close photo
                      </div>
                    </div>
                  )}

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      {!hasImages && (
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-md bg-red-50 text-[#D32F2F] border border-red-100 text-[11px] font-extrabold flex items-center gap-1.5">
                            <Calendar size={13} /> {event.date}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                            {event.category}
                          </span>
                        </div>
                      )}

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

                    {/* SMOOTH ANIMATED INLINE DETAILS EXPANDER */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isSelected
                          ? "max-h-[1200px] opacity-100 mt-4 pt-4 border-t-2 border-[#D32F2F] bg-red-50/40 rounded-xl p-4 space-y-3"
                          : "max-h-0 opacity-0 py-0 border-none"
                      }`}
                    >
                      {event.description && (
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] block">
                            Overview
                          </span>
                          <p className="text-xs text-gray-700 font-medium leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      )}

                      {event.highlights && event.highlights.length > 2 && (
                        <div className="space-y-1.5 pt-2 border-t border-gray-200/60">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block">
                            All Outcomes:
                          </span>
                          <ul className="space-y-1">
                            {event.highlights.slice(2).map((hl, hIdx) => (
                              <li key={hIdx} className="text-[11px] text-gray-700 flex items-start gap-1.5">
                                <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.images && event.images.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-gray-200/60">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] flex items-center gap-1">
                            <Camera size={13} /> Photo Showcase (Click to enlarge 🔍)
                          </span>
                          <div className="grid grid-cols-3 gap-2">
                            {event.images.map((imgSrc, imgIdx) => (
                              <div
                                key={imgIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCardPhotoModal({
                                    eventId: event.id,
                                    imgSrc,
                                    index: imgIdx,
                                    list: event.images,
                                  });
                                }}
                                className="group relative aspect-video rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-[#D32F2F] transition-all bg-gray-900"
                              >
                                <img src={imgSrc} alt="Event photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[9px] font-bold">
                                  Enlarge
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDetailEvent(isSelected ? null : event);
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isSelected ? "bg-[#D32F2F] text-white shadow-sm" : "bg-gray-100 hover:bg-[#D32F2F] text-gray-700 hover:text-white"
                      }`}
                    >
                      {isSelected ? "Hide Details" : "Full Details"} <ChevronDown size={14} className={`transition-transform duration-200 ${isSelected ? "rotate-180" : ""}`} />
                    </button>
                    <span className="text-gray-400 font-medium text-[11px]">Galactic 3D</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>



      {/* FULLSCREEN LIGHTBOX POPUP - MOUNTED DIRECTLY TO document.body VIA PORTAL */}
      {mounted && fullscreenPhoto && createPortal(
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            zIndex: 999999,
            margin: 0,
            padding: "1rem",
            boxSizing: "border-box",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setFullscreenPhoto(null);
            }
          }}
        >
          <div
            style={{
              position: "relative",
              margin: "auto",
              width: "min(1000px, 92vw)",
              maxHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullscreenPhoto(null)}
              className="absolute -top-12 right-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <img
              src={fullscreenPhoto}
              alt="Event Detail Fullscreen"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}

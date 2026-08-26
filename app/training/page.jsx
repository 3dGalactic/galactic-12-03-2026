"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  CheckCircle2,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Camera,
  CheckCircle,
  X,
  FileText,
  Clock,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Target,
  Compass,
  Briefcase,
  Cpu,
  Factory,
  Download,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import ConsentBox from "../components/ConsentBox";

export default function TrainingPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPartnerModal, setSelectedPartnerModal] = useState(null);
  const [hoveredPartnerId, setHoveredPartnerId] = useState(null);
  const [selectedProgramDetail, setSelectedProgramDetail] = useState(null);
  const [activeEnrollId, setActiveEnrollId] = useState(null);
  const [enrollSuccessId, setEnrollSuccessId] = useState(null);
  
  // DIRECT PHOTO LIGHTBOX VIEWER STATE
  const [photoLightbox, setPhotoLightbox] = useState(null); // { src, caption, list, index, title }
  const [cardPhotoModal, setCardPhotoModal] = useState(null); // { partnerId, index, imgSrc, caption, list }
  const [animateIn, setAnimateIn] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consentText, setConsentText] = useState("");
  const [consentValid, setConsentValid] = useState(false);
  const [consentError, setConsentError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when any modal is open and trigger 300ms entry animation
  useEffect(() => {
    if (selectedPartnerModal || showEnrollModal || photoLightbox || selectedProgramDetail) {
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
  }, [selectedPartnerModal, showEnrollModal, photoLightbox, selectedProgramDetail]);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPhotoLightbox(null);
        setSelectedPartnerModal(null);
        setShowEnrollModal(false);
        setSelectedProgramDetail(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const PARTNER_DETAILS = {
    nmit: {
      id: "nmit",
      name: "Nitte Meenakshi Institute of Technology (NMIT)",
      location: "Bengaluru, Karnataka",
      years: "2024 – 2025",
      type: "Engineering UG/PG Training & DfAM Workshop",
      description:
        "Specialized additive manufacturing and DfAM training program conducted for engineering students and faculty at Nitte Meenakshi Institute of Technology (NMIT). The cohort completed intensive hands-on lab modules in CAD slicing, topology optimization, build preparation, and live EOS DMLS metal 3D printing workflow demonstrations.",
      highlights: [
        "Hands-on CAD design & 3D printing software training in NMIT computer lab",
        "Live industrial EOS DMLS metal additive manufacturing & DfAM lectures",
        "Student & faculty certification in digital manufacturing workflows",
        "Real-world prototype data preparation and lattice structure optimization",
      ],
      images: [
        {
          src: "/events/nmit-2025/nmit_lab_1.png",
          caption: "Students actively engaged in hands-on CAD & 3D printing software training at NMIT computer lab.",
        },
        {
          src: "/events/nmit-2025/nmit_lab_2.png",
          caption: "Galactic 3D specialist conducting industrial Additive Manufacturing & EOS DMLS technical presentation.",
        },
      ],
    },
    alliance: {
      id: "alliance",
      name: "Alliance University",
      location: "Bengaluru, Karnataka",
      years: "2024 – 2025",
      type: "University Additive Manufacturing Track",
      description:
        "Advanced 3D printing technology exposure and build preparation lab training conducted for undergraduate engineering cohorts at Alliance University.",
      highlights: [
        "Build Preparation & Material Science Fundamentals",
        "3D Printer Calibration & Machine Operation",
        "Student Project Guidance & Prototyping Support",
      ],
      images: [],
    },
    cit: {
      id: "cit",
      name: "Cambridge Institute of Technology (CIT)",
      location: "Bengaluru, Karnataka",
      years: "2024 – Present",
      type: "Ongoing Academic Partner & Skill Center",
      description:
        "Ongoing collaborative skill development center offering Industry 4.0, DfAM, and additive manufacturing training for CIT engineering students and researchers.",
      highlights: [
        "Continuous Additive Manufacturing Curriculum Integration",
        "Industrial Project Co-Supervision",
        "Joint Research & Prototyping Initiatives",
      ],
      images: [],
    },
    cambridge_school: {
      id: "cambridge_school",
      name: "Cambridge School",
      location: "Bengaluru",
      years: "2024 – 2025",
      type: "K-12 STREAM 3D Printing & Spatial Design",
      description:
        "Interactive STEM program for school students covering 3D spatial thinking, introductory CAD modeling, and live 3D printing demonstrations.",
      highlights: [
        "STREAM-Based Spatial Thinking & Problem Solving",
        "Introductory 3D CAD Modeling & Slicing",
        "Live 3D Printer Operation & Model Creation",
      ],
      images: [],
    },
    imtma: {
      id: "imtma",
      name: "IMTMA (Indian Machine Tool Manufacturers' Association)",
      location: "Bengaluru",
      years: "March 2026",
      type: "Industrial Metal AM & Executive Upskilling",
      description:
        "Specialized industrial metal additive manufacturing masterclass focusing on EOS DMLS production readiness, build preparation, and workforce upskilling.",
      highlights: [
        "Industrial Metal DMLS Production Readiness",
        "Materialise Magics Slicing & Support Strategy",
        "Enterprise AM Cost-per-Part Optimization",
      ],
      images: [],
    },
  };



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    interests: "",
  });

  const handleEnrollSubmit = async (e) => {
    e.preventDefault();
    if (!consentValid) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setIsSubmitting(true);

    const courseTitle = selectedCourse ? selectedCourse.title : "General Additive Training Program";

    try {
      await fetch("/api/training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          trainingType: courseTitle,
          courseTitle,
          type: "training",
          subject: courseTitle || "Training Inquiry",
          message: `Training inquiry for ${courseTitle || "program"}.\n\nInstitution: ${formData.institution || "N/A"}\nInterests: ${formData.interests || "N/A"}`,
          sourcePage: "Training Page",
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Enrollment error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowEnrollModal(false);
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", institution: "", interests: "" });
      }, 4000);
    }
  };

  const SCHOOL_PROGRAMS = [
    {
      id: "sch-01",
      title: "3D Printing Designer (Consumer)",
      target: "High School & STREAM Learners",
      description:
        "Hands-on introduction to 3D design fundamentals, CAD basics, and file slicing for consumer models.",
      topics: [
        "3D Design & CAD Basics",
        "Consumer Model Creation",
        "Design Software Utilization",
        "STL File Preparation & Slicing",
      ],
    },
    {
      id: "sch-02",
      title: "3D Printing Technology & Operation",
      target: "Vocational & Technical Students",
      description:
        "Practical experience in 3D printer data preparation, machine operation, and G-code calibration.",
      topics: [
        "Hands-On Data Preparation",
        "Printer Calibration & Maintenance",
        "G-Code Optimization",
        "Post-Processing & Surface Cleaning",
      ],
    },
    {
      id: "sch-03",
      title: "3D Printing Application Developer",
      target: "Applied Engineering Students",
      description:
        "Specialized training for designing 3D printed parts in automotive, drone, and lifestyle applications.",
      topics: [
        "Automotive & Drone Parts Design",
        "Lifestyle Applications",
        "Multi-Part Fit Assembly",
        "Material Selection & Tolerancing",
      ],
    },
  ];

  const INSTITUTION_PROGRAMS = [
    {
      id: "inst-01",
      title: "AM Designer & Industry 4.0",
      target: "B.Tech / Polytechnic Engineering Students & Faculty",
      description:
        "Introduction to AM design, polymer DfAM, generative design, AI/ML integration, and Industry 4.0 principles.",
      topics: [
        "Introduction to AM & CAD Modelling",
        "Design for Polymer AM & Topology Optimization",
        "Generative Design & AI/ML Innovation",
        "IoT & Automation Principles",
        "GenAI, ChatGPT & ML in Manufacturing",
      ],
    },
    {
      id: "inst-02",
      title: "AM Engineer",
      target: "UG/PG Engineering Candidates",
      description:
        "Comprehensive study of AM machine architecture, material science, print parameters, and simulation.",
      topics: [
        "AM Machine Architecture & Material Science",
        "Slicing Software & Print Parameters",
        "Data Preparation & Simulation (FDM/DLP/SLS)",
        "Comparative Technology Study",
        "Industry Capstone Project & Review",
      ],
    },
    {
      id: "inst-[#03]",
      title: "Design Thinking & DFAM",
      target: "Advanced DfAM Engineers & Designers",
      description:
        "Advanced DfAM optimization for polymer and metal parts, lattice structures, and serial production case studies.",
      topics: [
        "Design Thinking for Innovation",
        "Prototyping & Social Innovation",
        "DFAM for Polymers & Lattice Structures",
        "Optimization for Serial AM Production",
        "Capstone Design & Simulation Case Study",
      ],
    },
  ];

  const INDUSTRY_PROGRAMS = [
    {
      id: "ind-01",
      title: "PG Diploma in Additive Manufacturing",
      duration: "Duration: 1 & 2 Years",
      target: "Industry Professionals & Working Engineers",
      description:
        "Comprehensive professional diploma focusing on end-to-end AM production integration and metallurgy.",
      topics: [
        "End-to-End AM Production Integration",
        "Advanced Material Science & Metallurgy",
        "Industrial Part Certification & Testing",
        "Multi-Industry Application Deployment",
      ],
    },
    {
      id: "ind-02",
      title: "Certifications in Additive Manufacturing",
      duration: "Duration: 6 Months",
      target: "Specialized Engineering Teams",
      description:
        "Specialized 6-month certification covering DFAM workflows, material characterization, and lab practicals.",
      topics: [
        "Specialized DFAM Workflows",
        "Powder & Resin Material Characterization",
        "Real-World Industry Problem Solving",
        "Hands-On Lab Certifications",
      ],
    },
    {
      id: "ind-03",
      title: "Executive Certifications",
      duration: "Duration: 3 / 6 / 9 Months",
      target: "C-Suite, R&D Heads & Plant Managers",
      description:
        "Strategic leadership program on AM business case modeling, ROI analysis, and supply chain integration.",
      topics: [
        "Strategic AM Business Case Modeling",
        "Unit Cost Analysis & ROI Estimation",
        "Supply Chain & On-Demand Production",
        "Executive Leadership Roadmap",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#222222] font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-16 lg:py-24 border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              From Learning to Leading in Additive Manufacturing
            </h1>
            
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              Empowering schools, engineering institutions, and enterprise leaders with world-class AM curriculum, hands-on industrial labs, and certified competence training.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedCourse({ title: "General Training & Skill Development" });
                  setShowEnrollModal(true);
                }}
                className="btn-corporate-primary flex items-center gap-2 cursor-pointer"
              >
                <span>Enroll in Training Program</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="/training-brochure.pdf"
                download="Galactic_3D_Training_Brochure.pdf"
                className="btn-corporate-secondary border-gray-300 text-[#111111] hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              >
                <Download size={16} />
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 bg-white border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-12">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* VISION & OBJECTIVES */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111]">
                  Pioneering Competence-Based 3D Printing Education
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Galactic 3D offers structured training programs designed to bridge academia and industry. Our curriculum covers fundamental design, advanced DfAM, material science, machine building, and industrial part qualification.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#EAEAEA] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0">
                    <Target size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111111]">Targeted Modules</h3>
                    <p className="text-[11px] text-gray-500 leading-tight">Tailored learning tracks for STREAM schools, colleges &amp; MSMEs.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#EAEAEA] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111111]">Industry Credentials</h3>
                    <p className="text-[11px] text-gray-500 leading-tight">Certifications validated by EOS &amp; Board of Studies.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F8F9FA] border-l-4 border-[#D32F2F] flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-1">Our Vision</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To make Additive Manufacturing an integral part of education across schools, universities, and enterprise R&amp;D, empowering learners to drive industrial transformation sustainably.
                  </p>
                </div>
              </div>
            </div>

            {/* BROCHURE SHOWCASE IMAGE - OPENS DIRECT PHOTO LIGHTBOX */}
            <div className="lg:col-span-6">
              <div
                onClick={() =>
                  setPhotoLightbox({
                    title: "Hands-On Expert Mentorship",
                    src: "/Training/mentorship.jpg",
                    caption: "Students and researchers interacting directly with industrial 3D printing equipment.",
                  })
                }
                className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-md group cursor-pointer bg-gray-900"
              >
                <img
                  src="/Training/mentorship.jpg"
                  alt="Mentorship & Competence Training"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#111111] block">Hands-On Expert Mentorship</span>
                    <span className="text-[11px] text-gray-600">Students and researchers interacting directly with industrial equipment.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-[#F8F9FA] border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#111111]">
              Why Choose Galactic 3D Training?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* PILLAR 1 */}
            <div
              onClick={() =>
                setPhotoLightbox({
                  title: "Industry-Aligned Curriculum",
                  src: "/Training/curriculum.png",
                  caption: "Curated by 30+ year experienced AM pioneers, approved by EOS and Board of Studies.",
                })
              }
              className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors relative bg-gray-900">
                  <img
                    src="/Training/curriculum.png"
                    alt="Industry-aligned curriculum"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">Industry-Aligned Curriculum</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Curated by 30+ year experienced AM pioneers, approved by EOS and the Board of Studies.
                </p>
              </div>
            </div>

            {/* PILLAR 2 */}
            <div
              onClick={() =>
                setPhotoLightbox({
                  title: "Hands-on Industrial Exposure",
                  src: "/Training/competence.png",
                  caption: "Direct interaction with DMLS metal printers, polymer SLS/FDM systems, and inspection tools.",
                })
              }
              className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors relative bg-gray-900">
                  <img
                    src="/Training/competence.png"
                    alt="Hands-on Industrial Exposure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">Hands-on Industrial Exposure</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Direct interaction with DMLS metal printers, polymer SLS/FDM systems, and inspection tools.
                </p>
              </div>
            </div>

            {/* PILLAR 3 */}
            <div
              onClick={() =>
                setPhotoLightbox({
                  title: "Ph.D & Expert Faculty",
                  src: "/Training/experts.png",
                  caption: "Mentorship from Ph.D. holders, M.Tech specialists, and seasoned manufacturing engineers.",
                })
              }
              className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors relative bg-gray-900">
                  <img
                    src="/Training/experts.png"
                    alt="Ph.D & Expert Faculty"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">Ph.D &amp; Expert Faculty</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mentorship from Ph.D. holders, M.Tech specialists, and seasoned manufacturing engineers.
                </p>
              </div>
            </div>

            {/* PILLAR 4 */}
            <div
              onClick={() =>
                setPhotoLightbox({
                  title: "End-to-End Skill Pathways",
                  src: "/Training/facility.png",
                  caption: "From STREAM high school basics to UG/PG engineering, PG Diplomas, and executive MSME support.",
                })
              }
              className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors relative bg-gray-900">
                  <img
                    src="/Training/facility.png"
                    alt="End-to-End Skill Pathways"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">End-to-End Skill Pathways</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  From STREAM high school basics to UG/PG engineering, PG Diplomas, and executive MSME support.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROGRAM SCOPE MATRIX */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                Complete Training Program Scope
              </h2>
            </div>

            {/* CATEGORY FILTER BUTTONS */}
            <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-xl border border-gray-200">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory === "all" ? "bg-[#D32F2F] text-white" : "text-gray-700 hover:text-[#111111]"
                }`}
              >
                All Programs
              </button>
              <button
                onClick={() => setSelectedCategory("school")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory === "school" ? "bg-[#D32F2F] text-white" : "text-gray-700 hover:text-[#111111]"
                }`}
              >
                School Scope
              </button>
              <button
                onClick={() => setSelectedCategory("institution")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory === "institution" ? "bg-[#D32F2F] text-white" : "text-gray-700 hover:text-[#111111]"
                }`}
              >
                Institution Scope
              </button>
              <button
                onClick={() => setSelectedCategory("industry")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory === "industry" ? "bg-[#D32F2F] text-white" : "text-gray-700 hover:text-[#111111]"
                }`}
              >
                Industry Scope
              </button>
            </div>
          </div>

          {/* SCHOOL PROGRAM SCOPE */}
          {(selectedCategory === "all" || selectedCategory === "school") && (
            <div id="schools" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-[#D32F2F] rounded-full" />
                <h3 className="text-2xl font-extrabold text-[#111111]">
                  School&apos;s Program Scope (STREAM-Based Learning)
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Introduces students to age-appropriate 3D printing learning modules through hands-on, STREAM-based learning. It nurtures creativity, problem-solving, and technical skills, preparing young minds for real-world applications.
              </p>

              <div className="grid md:grid-cols-3 gap-6 items-start">
                {SCHOOL_PROGRAMS.map((prog) => {
                  const isSelected = selectedProgramDetail?.id === prog.id;
                  const isEnrolling = activeEnrollId === prog.id;
                  return (
                    <div
                      key={prog.id}
                      className="relative corporate-card bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-start transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden hover:border-[#D32F2F]"
                    >
                      {/* IN-PLACE POP-UP ENROLLMENT SUBMISSION FORM */}
                      {isEnrolling && (
                        <div className="absolute inset-0 z-30 bg-[#111111] text-white rounded-2xl p-5 flex flex-col justify-between shadow-2xl animate-in fade-in zoom-in-95 duration-200 border-2 border-[#D32F2F]">
                          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F]">
                                Quick Enrollment Form
                              </span>
                              <h4 className="text-xs sm:text-sm font-extrabold text-white line-clamp-1">
                                {prog.title}
                              </h4>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveEnrollId(null);
                              }}
                              className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-[#D32F2F] text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 ml-2"
                              aria-label="Close form"
                            >
                              <X size={15} />
                            </button>
                          </div>

                          {enrollSuccessId === prog.id ? (
                            <div className="my-auto text-center py-4 space-y-2 bg-emerald-950/80 p-4 rounded-xl border border-emerald-700 text-emerald-100">
                              <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
                              <h5 className="text-sm font-extrabold">Enrollment Submitted!</h5>
                              <p className="text-xs text-zinc-300">
                                Our academic coordinator will contact you for <strong>{prog.title}</strong>.
                              </p>
                              <button
                                onClick={() => {
                                  setActiveEnrollId(null);
                                  setEnrollSuccessId(null);
                                }}
                                className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition cursor-pointer"
                              >
                                Done
                              </button>
                            </div>
                          ) : (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                setEnrollSuccessId(prog.id);
                              }}
                              className="space-y-2.5 my-auto"
                            >
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Full Name *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="e.g. Rahul Sharma"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Phone / WhatsApp *</label>
                                <input
                                  type="tel"
                                  required
                                  placeholder="+91 98765 43210"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">School / Institution</label>
                                <input
                                  type="text"
                                  placeholder="School Name"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full py-2.5 bg-[#D32F2F] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer mt-1"
                              >
                                Confirm Enrollment
                              </button>
                            </form>
                          )}
                        </div>
                      )}

                      <div>
                        <h4 className="text-base font-extrabold text-[#111111] mb-2 leading-snug">{prog.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                            Core Modules:
                          </span>
                          {prog.topics.slice(0, 3).map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                              <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0" />
                              <span className="line-clamp-1">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveEnrollId(prog.id);
                          }}
                          className="w-full py-3 px-4 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-black text-white hover:shadow-md"
                        >
                          <span>Enroll Now</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* SCHOOL TRAINING COLLABORATION BADGE */}
              <div
                onClick={() => {
                  setSelectedPartnerModal(PARTNER_DETAILS.cambridge_school);
                }}
                className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block">Training Conducted For:</span>
                    <span className="text-xs font-bold text-blue-900">Cambridge School <span className="text-[#D32F2F] font-extrabold ml-1">(2024 – 2025)</span></span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-gray-600 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-2xs group-hover:border-[#D32F2F] group-hover:text-[#D32F2F] transition-all self-start sm:self-auto flex items-center gap-1">
                  STREAM 3D Design &amp; CAD Workshops &rarr;
                </span>
              </div>
            </div>
          )}

          {/* INSTITUTION PROGRAM SCOPE */}
          {(selectedCategory === "all" || selectedCategory === "institution") && (
            <div id="colleges" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-[#111111] rounded-full" />
                <h3 className="text-2xl font-extrabold text-[#111111]">
                  Institution&apos;s Program Scope (UG / PG Engineering Curriculum)
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Comprehensive curriculum guiding students from design basics to advanced additive manufacturing machine building, Industry 4.0 integration, GenAI, ChatGPT, ML, EOSPRINT, and metal DMLS specialization.
              </p>

              <div className="grid md:grid-cols-3 gap-6 items-start">
                {INSTITUTION_PROGRAMS.map((prog) => {
                  const isSelected = selectedProgramDetail?.id === prog.id;
                  const isEnrolling = activeEnrollId === prog.id;
                  return (
                    <div
                      key={prog.id}
                      className="relative corporate-card bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-start transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden hover:border-[#D32F2F]"
                    >
                      {/* IN-PLACE POP-UP ENROLLMENT SUBMISSION FORM */}
                      {isEnrolling && (
                        <div className="absolute inset-0 z-30 bg-[#111111] text-white rounded-2xl p-5 flex flex-col justify-between shadow-2xl animate-in fade-in zoom-in-95 duration-200 border-2 border-[#D32F2F]">
                          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F]">
                                Quick Enrollment Form
                              </span>
                              <h4 className="text-xs sm:text-sm font-extrabold text-white line-clamp-1">
                                {prog.title}
                              </h4>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveEnrollId(null);
                              }}
                              className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-[#D32F2F] text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 ml-2"
                              aria-label="Close form"
                            >
                              <X size={15} />
                            </button>
                          </div>

                          {enrollSuccessId === prog.id ? (
                            <div className="my-auto text-center py-4 space-y-2 bg-emerald-950/80 p-4 rounded-xl border border-emerald-700 text-emerald-100">
                              <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
                              <h5 className="text-sm font-extrabold">Enrollment Submitted!</h5>
                              <p className="text-xs text-zinc-300">
                                Our academic team will contact you for <strong>{prog.title}</strong>.
                              </p>
                              <button
                                onClick={() => {
                                  setActiveEnrollId(null);
                                  setEnrollSuccessId(null);
                                }}
                                className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition cursor-pointer"
                              >
                                Done
                              </button>
                            </div>
                          ) : (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                setEnrollSuccessId(prog.id);
                              }}
                              className="space-y-2.5 my-auto"
                            >
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Full Name *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="e.g. Rahul Sharma"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Phone / WhatsApp *</label>
                                <input
                                  type="tel"
                                  required
                                  placeholder="+91 98765 43210"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Institution / College</label>
                                <input
                                  type="text"
                                  placeholder="College Name"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full py-2.5 bg-[#D32F2F] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer mt-1"
                              >
                                Confirm Enrollment
                              </button>
                            </form>
                          )}
                        </div>
                      )}

                      <div>
                        <h4 className="text-base font-extrabold text-[#111111] mb-2 leading-snug">{prog.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                            Curriculum Highlights:
                          </span>
                          {prog.topics.slice(0, 3).map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                              <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0" />
                              <span className="line-clamp-1">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveEnrollId(prog.id);
                          }}
                          className="w-full py-3 px-4 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-black text-white hover:shadow-md"
                        >
                          <span>Enroll Now</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* INSTITUTIONAL TRAINING COLLABORATIONS */}
              <div className="mt-6 p-5 rounded-2xl bg-red-50/50 border border-red-200/80 space-y-4 shadow-xs">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-[#D32F2F]" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
                    Training Conducted Across Premier Engineering Institutions &amp; Universities:
                  </h4>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 items-start">
                  {/* NMIT */}
                  <div
                    onClick={() => setHoveredPartnerId(hoveredPartnerId === "nmit" ? null : "nmit")}
                    className={`relative p-4 rounded-xl bg-white border transition-all duration-300 cursor-pointer group flex flex-col justify-start shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                      hoveredPartnerId === "nmit" ? "border-[#D32F2F] ring-2 ring-red-100" : "border-gray-200 hover:border-[#D32F2F]"
                    }`}
                  >
                    {/* IN-PLACE POP-UP LARGE PHOTO OVERLAY (WHITE BACKGROUND) */}
                    {cardPhotoModal?.partnerId === "nmit" && (
                      <div className="absolute inset-0 z-30 bg-white text-[#111111] rounded-xl p-4 flex flex-col justify-between shadow-2xl animate-in fade-in zoom-in-95 duration-200 border-2 border-[#D32F2F]">
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

                        <div className="relative flex-1 flex items-center justify-center my-2 overflow-hidden bg-gray-50 rounded-xl p-2 border border-gray-100 min-h-[220px]">
                          <img
                            src={cardPhotoModal.imgSrc}
                            alt={cardPhotoModal.caption || "Enlarged photo"}
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
                                    imgSrc: cardPhotoModal.list[prevIdx].src || cardPhotoModal.list[prevIdx],
                                    caption: cardPhotoModal.list[prevIdx].caption || "",
                                  });
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111]/80 hover:bg-[#D32F2F] text-white transition cursor-pointer shadow-lg z-20"
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
                                    imgSrc: cardPhotoModal.list[nextIdx].src || cardPhotoModal.list[nextIdx],
                                    caption: cardPhotoModal.list[nextIdx].caption || "",
                                  });
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111]/80 hover:bg-[#D32F2F] text-white transition cursor-pointer shadow-lg z-20"
                              >
                                <ChevronRight size={18} />
                              </button>
                            </>
                          )}
                        </div>

                        {cardPhotoModal.caption && (
                          <div className="text-[11px] text-center text-gray-700 font-bold pt-1 truncate bg-gray-50 px-2 py-1 rounded-md border border-gray-200">
                            {cardPhotoModal.caption}
                          </div>
                        )}
                      </div>
                    )}

                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block mb-1 leading-tight">
                        Nitte Meenakshi Institute of Technology (NMIT)
                      </span>
                      <p className="text-[11px] text-gray-500 font-medium">Hands-on CAD &amp; DfAM lab sessions</p>

                      {/* SMOOTH INLINE HOVER DRAWER */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          hoveredPartnerId === "nmit"
                            ? "max-h-[1200px] opacity-100 mt-3 pt-3 border-t border-red-100 bg-red-50/40 rounded-xl p-3 space-y-2 text-left"
                            : "max-h-0 opacity-0 py-0 border-none"
                        }`}
                      >
                        <p className="text-xs text-gray-700 font-medium leading-relaxed">
                          {PARTNER_DETAILS.nmit.description}
                        </p>
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] block">
                            Key Outcomes &amp; Modules:
                          </span>
                          <ul className="space-y-1">
                            {PARTNER_DETAILS.nmit.highlights.map((hl, idx) => (
                              <li key={idx} className="text-[11px] text-gray-800 flex items-start gap-1.5 font-medium">
                                <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {PARTNER_DETAILS.nmit.images && PARTNER_DETAILS.nmit.images.length > 0 && (
                          <div className="space-y-2 pt-2 border-t border-red-200/60">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5">
                                <Camera size={13} /> NMIT Lab Showcase ({PARTNER_DETAILS.nmit.images.length} Photos)
                              </span>
                              <span className="text-[10px] font-bold text-gray-500">Click photo to enlarge 🔍</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5">
                              {PARTNER_DETAILS.nmit.images.map((img, i) => (
                                <div
                                  key={i}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCardPhotoModal({
                                      partnerId: "nmit",
                                      index: i,
                                      imgSrc: img.src,
                                      caption: img.caption,
                                      list: PARTNER_DETAILS.nmit.images,
                                    });
                                  }}
                                  className="group relative rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#D32F2F] shadow-sm cursor-pointer transition-all bg-gray-900"
                                >
                                  <img
                                    src={img.src}
                                    alt={img.caption || "NMIT lab photo"}
                                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-extrabold gap-1">
                                    <Maximize2 size={14} /> Enlarge High-Res
                                  </div>
                                  <div className="absolute bottom-1 left-1 right-1 bg-black/70 backdrop-blur-xs text-white text-[9px] font-medium px-2 py-1 rounded-md truncate">
                                    {img.caption}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-500 mt-3 pt-2 border-t border-gray-100">
                      <span className="font-extrabold text-[#D32F2F]">2024 – 2025</span>
                      <span className={`font-bold transition-colors flex items-center gap-1 ${
                        hoveredPartnerId === "nmit" ? "text-[#D32F2F]" : "text-gray-700 group-hover:text-[#D32F2F]"
                      }`}>
                        {hoveredPartnerId === "nmit" ? "Hide Details" : "View Details"} &rarr;
                      </span>
                    </div>
                  </div>

                  {/* ALLIANCE UNIVERSITY */}
                  <div
                    onClick={() => setHoveredPartnerId(hoveredPartnerId === "alliance" ? null : "alliance")}
                    className={`p-4 rounded-xl bg-white border transition-all duration-300 cursor-pointer group flex flex-col justify-start shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                      hoveredPartnerId === "alliance" ? "border-[#D32F2F] ring-2 ring-red-100" : "border-gray-200 hover:border-[#D32F2F]"
                    }`}
                  >
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block mb-1 leading-tight">
                        Alliance University
                      </span>
                      <p className="text-[11px] text-gray-500 font-medium">3D printing &amp; build preparation track</p>

                      {/* SMOOTH INLINE HOVER DRAWER */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          hoveredPartnerId === "alliance"
                            ? "max-h-[1200px] opacity-100 mt-3 pt-3 border-t border-red-100 bg-red-50/40 rounded-xl p-3 space-y-2 text-left"
                            : "max-h-0 opacity-0 py-0 border-none"
                        }`}
                      >
                        <p className="text-xs text-gray-700 font-medium leading-relaxed">
                          {PARTNER_DETAILS.alliance.description}
                        </p>
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] block">
                            Key Outcomes &amp; Modules:
                          </span>
                          <ul className="space-y-1">
                            {PARTNER_DETAILS.alliance.highlights.map((hl, idx) => (
                              <li key={idx} className="text-[11px] text-gray-800 flex items-start gap-1.5 font-medium">
                                <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-500 mt-3 pt-2 border-t border-gray-100">
                      <span className="font-extrabold text-[#D32F2F]">2024 – 2025</span>
                      <span className={`font-bold transition-colors flex items-center gap-1 ${
                        hoveredPartnerId === "alliance" ? "text-[#D32F2F]" : "text-gray-700 group-hover:text-[#D32F2F]"
                      }`}>
                        {hoveredPartnerId === "alliance" ? "Hide Details" : "View Details"} &rarr;
                      </span>
                    </div>
                  </div>

                  {/* CAMBRIDGE INSTITUTE OF TECHNOLOGY (CIT) */}
                  <div
                    onClick={() => setHoveredPartnerId(hoveredPartnerId === "cit" ? null : "cit")}
                    className={`p-4 rounded-xl bg-white border transition-all duration-300 cursor-pointer group flex flex-col justify-start shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                      hoveredPartnerId === "cit" ? "border-[#D32F2F] ring-2 ring-red-100" : "border-gray-200 hover:border-[#D32F2F]"
                    }`}
                  >
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block mb-1 leading-tight">
                        Cambridge Institute of Technology (CIT)
                      </span>
                      <p className="text-[11px] text-gray-500 font-medium">Industry 4.0 Skill Center Partner</p>

                      {/* SMOOTH INLINE HOVER DRAWER */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          hoveredPartnerId === "cit"
                            ? "max-h-[1200px] opacity-100 mt-3 pt-3 border-t border-red-100 bg-red-50/40 rounded-xl p-3 space-y-2 text-left"
                            : "max-h-0 opacity-0 py-0 border-none"
                        }`}
                      >
                        <p className="text-xs text-gray-700 font-medium leading-relaxed">
                          {PARTNER_DETAILS.cit.description}
                        </p>
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] block">
                            Key Outcomes &amp; Modules:
                          </span>
                          <ul className="space-y-1">
                            {PARTNER_DETAILS.cit.highlights.map((hl, idx) => (
                              <li key={idx} className="text-[11px] text-gray-800 flex items-start gap-1.5 font-medium">
                                <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-500 mt-3 pt-2 border-t border-gray-100">
                      <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">2024 – Present</span>
                      <span className={`font-bold transition-colors flex items-center gap-1 ${
                        hoveredPartnerId === "cit" ? "text-[#D32F2F]" : "text-gray-700 group-hover:text-[#D32F2F]"
                      }`}>
                        {hoveredPartnerId === "cit" ? "Hide Details" : "View Details"} &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INDUSTRY PROGRAM SCOPE */}
          {(selectedCategory === "all" || selectedCategory === "industry") && (
            <div id="industry">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-[#D32F2F] rounded-full" />
                <h3 className="text-2xl font-extrabold text-[#111111]">
                  Industry Program Scope (PG Diploma, Certifications &amp; Executive Training)
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Tailored for SME/MSME needs with expert-led learning, driving innovation, cost efficiency, and real-world AM implementation across aerospace, automotive, and medical manufacturing sectors.
              </p>

              <div className="grid md:grid-cols-3 gap-6 items-start">
                {INDUSTRY_PROGRAMS.map((prog) => {
                  const isSelected = selectedProgramDetail?.id === prog.id;
                  const isEnrolling = activeEnrollId === prog.id;
                  return (
                    <div
                      key={prog.id}
                      className="relative corporate-card bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-start transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden hover:border-[#D32F2F]"
                    >
                      {/* IN-PLACE POP-UP ENROLLMENT SUBMISSION FORM */}
                      {isEnrolling && (
                        <div className="absolute inset-0 z-30 bg-[#111111] text-white rounded-2xl p-5 flex flex-col justify-between shadow-2xl animate-in fade-in zoom-in-95 duration-200 border-2 border-[#D32F2F]">
                          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F]">
                                Quick Enrollment Form
                              </span>
                              <h4 className="text-xs sm:text-sm font-extrabold text-white line-clamp-1">
                                {prog.title}
                              </h4>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveEnrollId(null);
                              }}
                              className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-[#D32F2F] text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer shrink-0 ml-2"
                              aria-label="Close form"
                            >
                              <X size={15} />
                            </button>
                          </div>

                          {enrollSuccessId === prog.id ? (
                            <div className="my-auto text-center py-4 space-y-2 bg-emerald-950/80 p-4 rounded-xl border border-emerald-700 text-emerald-100">
                              <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
                              <h5 className="text-sm font-extrabold">Enrollment Submitted!</h5>
                              <p className="text-xs text-zinc-300">
                                Our industry team will contact you for <strong>{prog.title}</strong>.
                              </p>
                              <button
                                onClick={() => {
                                  setActiveEnrollId(null);
                                  setEnrollSuccessId(null);
                                }}
                                className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition cursor-pointer"
                              >
                                Done
                              </button>
                            </div>
                          ) : (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                setEnrollSuccessId(prog.id);
                              }}
                              className="space-y-2.5 my-auto"
                            >
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Full Name *</label>
                                <input
                                  type="text"
                                  required
                                  placeholder="e.g. Rahul Sharma"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Phone / WhatsApp *</label>
                                <input
                                  type="tel"
                                  required
                                  placeholder="+91 98765 43210"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-zinc-300 mb-0.5">Company / Organization</label>
                                <input
                                  type="text"
                                  placeholder="Company Name"
                                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-[#D32F2F] focus:outline-hidden"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full py-2.5 bg-[#D32F2F] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition shadow-md cursor-pointer mt-1"
                              >
                                Confirm Enrollment
                              </button>
                            </form>
                          )}
                        </div>
                      )}

                      <div>
                        <h4 className="text-base font-extrabold text-[#111111] mb-2 leading-snug">{prog.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                            Specialized Modules:
                          </span>
                          {prog.topics.slice(0, 3).map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                              <CheckCircle2 size={13} className="text-[#D32F2F] shrink-0" />
                              <span className="line-clamp-1">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveEnrollId(prog.id);
                          }}
                          className="w-full py-3 px-4 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-black text-white hover:shadow-md"
                        >
                          <span>Enroll Now</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* INDUSTRY TRAINING COLLABORATION BADGE */}
              <div
                onClick={() => {
                  setSelectedPartnerModal(PARTNER_DETAILS.imtma);
                }}
                className="mt-6 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Factory size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block">Industrial Workforce Training Conducted For:</span>
                    <span className="text-xs font-bold text-emerald-950">IMTMA (Indian Machine Tool Manufacturers&apos; Association) <span className="text-emerald-700 font-extrabold ml-1">(March 2026)</span></span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-gray-600 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-2xs group-hover:border-[#D32F2F] group-hover:text-[#D32F2F] transition-all self-start sm:self-auto flex items-center gap-1">
                  Metal Additive Masterclass &rarr;
                </span>
              </div>
            </div>
          )}

        </div>
      </section>





      {/* ENROLLMENT PORTAL MODAL */}
      {mounted && showEnrollModal && createPortal(
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
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            zIndex: 999999,
            margin: 0,
            padding: "1rem",
            boxSizing: "border-box",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowEnrollModal(false);
            }
          }}
        >
          <div
            className="relative w-full max-w-lg bg-white border border-gray-200 text-[#111111] rounded-2xl shadow-2xl p-6 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-[10px] font-extrabold text-[#D32F2F] uppercase tracking-wider block">Galactic 3D Academy</span>
                <h3 className="text-lg font-extrabold text-[#111111]">Enroll in Training Program</h3>
                {selectedCourse?.title && (
                  <p className="text-xs text-[#D32F2F] font-bold">{selectedCourse.title}</p>
                )}
              </div>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#D32F2F] text-gray-500 hover:text-white flex items-center justify-center transition cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-base font-extrabold text-[#111111]">Enrollment Inquiry Received!</h4>
                <p className="text-xs text-gray-600 max-w-xs mx-auto">
                  Thank you for enrolling. Our training team will review your application and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="space-y-4 pt-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-[#111111] placeholder:text-gray-400 focus:border-[#D32F2F] focus:bg-white focus:outline-hidden transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-[#111111] placeholder:text-gray-400 focus:border-[#D32F2F] focus:bg-white focus:outline-hidden transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-[#111111] placeholder:text-gray-400 focus:border-[#D32F2F] focus:bg-white focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Institution / Organization</label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. NMIT / Corporate Company"
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-[#111111] placeholder:text-gray-400 focus:border-[#D32F2F] focus:bg-white focus:outline-hidden transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Training Interests / Objectives</label>
                  <textarea
                    rows={2}
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    placeholder="Describe your 3D printing background or learning goals..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50 border border-gray-300 text-[#111111] placeholder:text-gray-400 focus:border-[#D32F2F] focus:bg-white focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                {/* CONSENT BOX */}
                <ConsentBox
                  consentText={consentText}
                  setConsentText={setConsentText}
                  consentValid={consentValid}
                  setConsentValid={setConsentValid}
                  consentError={consentError}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#D32F2F] hover:bg-red-700 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Enrollment Application</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* DIRECT PHOTO LIGHTBOX VIEWER - MOUNTED DIRECTLY TO document.body VIA PORTAL */}
      {mounted && photoLightbox && createPortal(
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
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 999999,
            margin: 0,
            padding: "1rem",
            boxSizing: "border-box",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setPhotoLightbox(null);
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div
              className="w-full max-w-5xl flex items-center justify-between text-white mb-3 px-2 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                  {photoLightbox.title || "Galactic 3D Training Photo"}
                </span>
                {photoLightbox.list && (
                  <span className="text-xs text-gray-300 font-extrabold">
                    Photo {photoLightbox.index + 1} of {photoLightbox.list.length}
                  </span>
                )}
              </div>
              <button
                onClick={() => setPhotoLightbox(null)}
                className="p-2 rounded-full bg-white/20 hover:bg-[#D32F2F] text-white transition flex items-center gap-2 text-xs font-bold px-4 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
                <span>Close (Esc)</span>
              </button>
            </div>

            {/* MAIN PHOTO DISPLAY */}
            <div
              className="relative max-w-5xl w-full flex-1 flex flex-col items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photoLightbox.src}
                alt={photoLightbox.caption || photoLightbox.title}
                className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/20"
              />

              {/* PREVIOUS ARROW */}
              {photoLightbox.list && photoLightbox.list.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIdx = (photoLightbox.index - 1 + photoLightbox.list.length) % photoLightbox.list.length;
                    setPhotoLightbox({
                      ...photoLightbox,
                      src: photoLightbox.list[newIdx].src,
                      caption: photoLightbox.list[newIdx].caption,
                      index: newIdx,
                    });
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#D32F2F] text-white transition shadow-2xl border border-white/20 cursor-pointer"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {/* NEXT ARROW */}
              {photoLightbox.list && photoLightbox.list.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIdx = (photoLightbox.index + 1) % photoLightbox.list.length;
                    setPhotoLightbox({
                      ...photoLightbox,
                      src: photoLightbox.list[newIdx].src,
                      caption: photoLightbox.list[newIdx].caption,
                      index: newIdx,
                    });
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#D32F2F] text-white transition shadow-2xl border border-white/20 cursor-pointer"
                >
                  <ChevronRight size={28} />
                </button>
              )}

              {/* CAPTION BAR */}
              {photoLightbox.caption && (
                <div className="mt-3 max-w-2xl text-center bg-zinc-900/90 text-white px-5 py-2 rounded-xl border border-zinc-800 text-xs sm:text-sm font-medium shadow-xl shrink-0">
                  {photoLightbox.caption}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}

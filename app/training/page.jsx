"use client";

import { useState, useEffect } from "react";
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
  Layers,
  Cpu,
  Factory,
  Download,
} from "lucide-react";

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPartnerModal, setSelectedPartnerModal] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const PARTNER_DETAILS = {
    nmit: {
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

  // AUTOMATIC SMOOTH SCROLL & BRIEF HIGHLIGHT FOR HASH TARGETS (#schools, #colleges, #industry)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      let targetId = hash;
      if (hash === "schools") targetId = "school-training";
      if (hash === "colleges") targetId = "college-training";
      if (hash === "industry") targetId = "industry-training";

      setTimeout(() => {
        const el = document.getElementById(targetId) || document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          el.classList.add("ring-4", "ring-[#D32F2F]/60", "transition-all", "duration-500");
          setTimeout(() => {
            el.classList.remove("ring-4", "ring-[#D32F2F]/60");
          }, 2500);
        }
      }, 300);
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    interests: "",
  });

  const handleEnrollSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const courseTitle = selectedCourse ? selectedCourse.title : "General Additive Training Program";

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseTitle,
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
      }, 3000);
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
      id: "inst-03",
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
      
      {/* 1. HERO SECTION - HOME THEME (EDS TECHNOLOGIES STYLE) */}
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
                className="btn-corporate-primary flex items-center gap-2"
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

      {/* 3. BROCHURE PAGE 2 OVERVIEW: VISION, MENTORSHIP & LAB SHOWCASE */}
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

            {/* BROCHURE PAGE 2 IMAGE SHOWCASE */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-md group">
                <img
                  src="/Training/mentorship.jpg"
                  alt="Mentorship & Competence Training"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-xs font-bold text-[#111111] block">Hands-On Expert Mentorship</span>
                  <span className="text-[11px] text-gray-600">Students and researchers interacting directly with industrial 3D printing equipment.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US? (4 PILLARS WITH BROCHURE ILLUSTRATION IMAGES) */}
      <section className="py-16 bg-[#F8F9FA] border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#111111]">
              Why Choose Galactic 3D Training?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* PILLAR 1 */}
            <div className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors">
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
            <div className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors">
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
            <div className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors">
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
            <div className="p-5 bg-white rounded-2xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden mb-4 border border-[#EAEAEA] shadow-xs group-hover:border-[#D32F2F]/40 transition-colors">
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

      {/* 5. COMPLETE TRAINING PROGRAM SCOPE (DETAILED CARD MATRIX) */}
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

              <div className="grid md:grid-cols-3 gap-6">
                {SCHOOL_PROGRAMS.map((prog) => (
                  <div
                    key={prog.id}
                    className="corporate-card bg-white rounded-xl border border-[#EAEAEA] p-6 flex flex-col justify-between hover:border-[#D32F2F] transition-all shadow-sm"
                  >
                    <div>
                      <h4 className="text-base font-bold text-[#111111] mb-2">{prog.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                      
                      <div className="space-y-1.5 mb-6">
                        {prog.topics.map((t, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-700">
                            <CheckCircle size={12} className="text-[#D32F2F] shrink-0" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCourse(prog);
                        setShowEnrollModal(true);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold text-[#111111] hover:bg-[#D32F2F] hover:text-white transition flex items-center justify-between"
                    >
                      <span>Enroll Program</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
              </div>

              {/* SCHOOL TRAINING COLLABORATION BADGE */}
              <div
                onClick={() => setSelectedPartnerModal(PARTNER_DETAILS.cambridge_school)}
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

              <div className="grid md:grid-cols-3 gap-6">
                {INSTITUTION_PROGRAMS.map((prog) => (
                  <div
                    key={prog.id}
                    className="corporate-card bg-white rounded-xl border border-[#EAEAEA] p-6 flex flex-col justify-between hover:border-[#D32F2F] transition-all shadow-sm"
                  >
                    <div>
                      <h4 className="text-base font-bold text-[#111111] mb-2">{prog.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                      
                      <div className="space-y-1.5 mb-6">
                        {prog.topics.map((t, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-700">
                            <CheckCircle size={12} className="text-[#D32F2F] shrink-0" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCourse(prog);
                        setShowEnrollModal(true);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold text-[#111111] hover:bg-[#D32F2F] hover:text-white transition flex items-center justify-between"
                    >
                      <span>Enroll Program</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
              </div>

              {/* INSTITUTIONAL TRAINING COLLABORATIONS BADGE */}
              <div className="mt-6 p-5 rounded-xl bg-red-50/50 border border-red-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-[#D32F2F]" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
                    Training Conducted Across Premier Engineering Institutions &amp; Universities:
                  </h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {/* NMIT */}
                  <div
                    onClick={() => setSelectedPartnerModal(PARTNER_DETAILS.nmit)}
                    className="p-3 bg-white rounded-lg border border-[#D32F2F]/40 hover:border-[#D32F2F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block mb-1">
                        Nitte Meenakshi Institute of Technology (NMIT)
                      </span>
                      <p className="text-[10px] text-gray-500 line-clamp-1">Hands-on CAD &amp; DfAM lab sessions</p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-gray-500 mt-2">
                      <span className="font-extrabold text-[#D32F2F]">2024 – 2025</span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#D32F2F] bg-red-50 px-2 py-0.5 rounded-full border border-red-100 group-hover:bg-[#D32F2F] group-hover:text-white transition-colors">
                        📸 2 Photos &amp; Details &rarr;
                      </span>
                    </div>
                  </div>

                  {/* ALLIANCE UNIVERSITY */}
                  <div
                    onClick={() => setSelectedPartnerModal(PARTNER_DETAILS.alliance)}
                    className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#D32F2F] hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block mb-1">
                        Alliance University
                      </span>
                      <p className="text-[10px] text-gray-500 line-clamp-1">3D printing &amp; build preparation track</p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-gray-500 mt-2">
                      <span className="font-extrabold text-[#D32F2F]">2024 – 2025</span>
                      <span className="font-bold text-gray-500 group-hover:text-[#D32F2F] transition-colors">
                        View Details &rarr;
                      </span>
                    </div>
                  </div>

                  {/* CAMBRIDGE INSTITUTE OF TECHNOLOGY (CIT) */}
                  <div
                    onClick={() => setSelectedPartnerModal(PARTNER_DETAILS.cit)}
                    className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#D32F2F] hover:shadow-sm transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors block mb-1">
                        Cambridge Institute of Technology (CIT)
                      </span>
                      <p className="text-[10px] text-gray-500 line-clamp-1">Industry 4.0 Skill Center Partner</p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-gray-500 mt-2">
                      <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">2024 – Present</span>
                      <span className="font-bold text-gray-500 group-hover:text-[#D32F2F] transition-colors">
                        View Details &rarr;
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

              <div className="grid md:grid-cols-3 gap-6">
                {INDUSTRY_PROGRAMS.map((prog) => (
                  <div
                    key={prog.id}
                    className="corporate-card bg-white rounded-xl border border-[#EAEAEA] p-6 flex flex-col justify-between hover:border-[#D32F2F] transition-all shadow-sm"
                  >
                    <div>
                      <h4 className="text-base font-bold text-[#111111] mb-2">{prog.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                      
                      <div className="space-y-1.5 mb-6">
                        {prog.topics.map((t, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-700">
                            <CheckCircle size={12} className="text-[#D32F2F] shrink-0" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCourse(prog);
                        setShowEnrollModal(true);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold text-[#111111] hover:bg-[#D32F2F] hover:text-white transition flex items-center justify-between"
                    >
                      <span>Enroll Program</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
              </div>

              {/* INDUSTRY TRAINING COLLABORATION BADGE */}
              <div
                onClick={() => setSelectedPartnerModal(PARTNER_DETAILS.imtma)}
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

      {/* ENROLLMENT MODAL POPUP */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-lg overflow-hidden relative animate-fade-in-up">
            
            {/* MODAL HEADER */}
            <div className="bg-[#111111] text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] block">
                  Galactic 3D Additive Academy
                </span>
                <h3 className="text-lg font-extrabold text-white mt-0.5">
                  {selectedCourse ? selectedCourse.title : "Program Enrollment"}
                </h3>
              </div>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 space-y-4">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-extrabold text-[#111111]">Registration Received!</h4>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto">
                    Your registration details have been delivered to <strong className="text-emerald-600">admin@galactic-3d.com</strong>. Our academic coordinator will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
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
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
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
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Institution / Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="College or Company Name"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Specific Interests / Questions</label>
                    <textarea
                      rows={2}
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      placeholder="Tell us about your learning goals or lab requirements..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:border-[#D32F2F] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Registration & Get Syllabus"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* PARTNER / INSTITUTION DETAILS MODAL POPUP WITH PHOTO GALLERY */}
      {selectedPartnerModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-3xl overflow-hidden relative animate-fade-in-up my-8">
            
            {/* MODAL HEADER */}
            <div className="bg-[#111111] text-white p-6 flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#D32F2F] bg-red-950/60 border border-red-900/60 px-2.5 py-0.5 rounded-full mb-2">
                  <GraduationCap size={13} /> {selectedPartnerModal.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedPartnerModal.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  📍 {selectedPartnerModal.location} &bull; <strong className="text-white">{selectedPartnerModal.years}</strong>
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedPartnerModal(null);
                  setActivePhoto(null);
                }}
                className="w-8 h-8 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 flex items-center justify-center transition cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* IMAGE GALLERY SHOWCASE */}
              {selectedPartnerModal.images && selectedPartnerModal.images.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-[#D32F2F]" /> Training Lab Photos ({selectedPartnerModal.images.length})
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedPartnerModal.images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActivePhoto(img.src)}
                        className="group relative rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer hover:border-[#D32F2F] transition-all bg-gray-900"
                      >
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
                          <p className="text-[11px] text-white font-medium leading-tight drop-shadow-xs">
                            {img.caption}
                          </p>
                          <span className="text-[10px] font-bold text-red-300 mt-1 flex items-center gap-1">
                            Click to Enlarge 🔍
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* OVERVIEW & DESCRIPTION */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                  <BookOpen size={15} className="text-[#D32F2F]" /> Program Overview
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {selectedPartnerModal.description}
                </p>
              </div>

              {/* KEY HIGHLIGHTS */}
              {selectedPartnerModal.highlights && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111] mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#D32F2F]" /> Program Highlights &amp; Outcomes
                  </h4>
                  <div className="space-y-2">
                    {selectedPartnerModal.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 bg-white p-2.5 rounded-lg border border-gray-200">
                        <CheckCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FOOTER ACTIONS */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200">
                <button
                  onClick={() => {
                    const name = selectedPartnerModal.name;
                    setSelectedPartnerModal(null);
                    setSelectedCourse({ title: `Training Program for ${name}` });
                    setShowEnrollModal(true);
                  }}
                  className="btn-corporate-primary flex items-center gap-2 text-xs py-2.5 px-4"
                >
                  <span>Enroll Similar Program for Your Institution</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => setSelectedPartnerModal(null)}
                  className="py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* FULLSCREEN PHOTO LIGHTBOX ZOOM */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={activePhoto}
              alt="Enlarged Training Photo"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-800"
            />
            <button
              onClick={() => setActivePhoto(null)}
              className="mt-3 px-4 py-1.5 rounded-full bg-white/20 text-white hover:bg-white/40 text-xs font-bold transition flex items-center gap-2 cursor-pointer"
            >
              <X size={14} /> Close Fullscreen
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

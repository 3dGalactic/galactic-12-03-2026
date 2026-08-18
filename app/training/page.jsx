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
} from "lucide-react";

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      await fetch("/api/training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          courseTitle,
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
      level: "Level 1",
      title: "3D Printing Designer (Consumer)",
      target: "High School & STREAM Learners",
      description:
        "Introduces students to 3D design fundamentals, enabling them to create basic consumer-friendly models for everyday use. Focuses on utilizing design software and preparing files for 3D printing.",
      topics: [
        "3D Design Fundamentals & CAD Basics",
        "Consumer-Friendly Model Creation",
        "Design Software Utilization",
        "STL File Preparation & Slicing",
      ],
    },
    {
      level: "Level 2",
      title: "3D Printing Technology & Operation",
      target: "Vocational & Technical Students",
      description:
        "Students gain hands-on experience with 3D printing data preparation techniques & machine operation.",
      topics: [
        "Hands-On Data Preparation",
        "Printer Calibration & Maintenance",
        "G-Code Optimization",
        "Post-Processing & Surface Cleaning",
      ],
    },
    {
      level: "Level 3",
      title: "3D Printing Application Developer",
      target: "Applied Engineering Students",
      description:
        "Focuses on 3D printing applications for home decor, automotive, drone & lifestyle.",
      topics: [
        "Automotive & Drone Parts Design",
        "Lifestyle & Home Decor Applications",
        "Multi-Part Fit Assembly",
        "Material Selection & Tolerancing",
      ],
    },
    {
      level: "Level 4",
      title: "3D Innovator",
      target: "Young Inventors & Machine Builders",
      description:
        "Equips students in designing & developing their own 3D printer for multiple purposes.",
      topics: [
        "3D Printer Kinematics & Mechanics",
        "Custom Extruder & Bed Assembly",
        "Firmware Configuration & Tuning",
        "Hardware Troubleshooting & Building",
      ],
    },
  ];

  const INSTITUTION_PROGRAMS = [
    {
      level: "Level 1",
      title: "AM Designer & Industry 4.0",
      target: "B.Tech / Polytechnic Engineering Students & Faculty",
      description:
        "Introduction to Additive Manufacturing & CAD Modelling, Design for Polymer AM & Topology Optimization, Generative Design & Innovation, AI & ML in Manufacturing, IoT & Automation principles associated with Industry 4.0, Gen AI, ChatGPT & ML.",
      topics: [
        "Introduction to AM & CAD Modelling",
        "Design for Polymer AM & Topology Optimization",
        "Generative Design & AI/ML Innovation",
        "IoT & Automation Principles",
        "GenAI, ChatGPT & ML in Manufacturing",
      ],
    },
    {
      level: "Level 2",
      title: "AM Engineer",
      target: "UG/PG Engineering Candidates",
      description:
        "Introduction to Additive Manufacturing, AM Machine Architecture, Material Science in AM, Slicing Software & Print Parameters, Data Preparation & Simulation (FDM/DLP/SLS), Comparative Study, Capstone Project & Review.",
      topics: [
        "AM Machine Architecture & Material Science",
        "Slicing Software & Print Parameters",
        "Data Preparation & Simulation (FDM/DLP/SLS)",
        "Comparative Technology Study",
        "Industry Capstone Project & Review",
      ],
    },
    {
      level: "Level 3",
      title: "Design Thinking & DFAM",
      target: "Advanced DfAM Engineers & Designers",
      description:
        "Design Thinking for Innovation, Prototyping & Social Innovation, DFAM for Polymers, Optimization for AM, Capstone Project (Design & Simulation), Part Printing comparative Case study.",
      topics: [
        "Design Thinking for Innovation",
        "Prototyping & Social Innovation",
        "DFAM for Polymers & Lattice Structures",
        "Optimization for Serial AM Production",
        "Capstone Design & Simulation Case Study",
      ],
    },
    {
      level: "Level 4",
      title: "AM Specialist (Metal AM & Industrial Visits)",
      target: "Advanced Metallurgists & Lab Researchers",
      description:
        "Introduction to Metal AM, Overheating in DMLS, Basics of AM Data Repair, Designing Support-Free Metal AM, Reference Point Calibration, EOSPRINT Software, Monitoring with EOSTATE, Business Case for AM, Tooling Design, Hands-on Build Preparation, Advanced Parameter Editing, Post Processing & Surface Finishing, Ensuring Print Quality, Application Sprint (Capstone Project), Industrial Visit.",
      topics: [
        "Metal AM & DMLS Overheating Management",
        "Basics of AM Data Repair & Support-Free Metal DfAM",
        "EOSPRINT Software & EOSTATE Process Monitoring",
        "Tooling Design & Parameter Editing",
        "Post-Processing, Quality Assurance & Industrial Visits",
      ],
    },
  ];

  const INDUSTRY_PROGRAMS = [
    {
      level: "PG Diploma",
      title: "PG Diploma in Additive Manufacturing",
      duration: "Duration: 1 Year & 2 Years",
      target: "Industry Professionals & Working Engineers",
      description:
        "A comprehensive program for professionals, focusing on AM technologies, material science, and industrial applications. Learn how to integrate 3D printing into production processes for diverse industries.",
      topics: [
        "End-to-End AM Production Integration",
        "Advanced Material Science & Metallurgy",
        "Industrial Part Certification & Testing",
        "Multi-Industry Application Deployment",
      ],
    },
    {
      level: "Certification",
      title: "Certifications in Additive Manufacturing",
      duration: "Duration: 6 Months",
      target: "Specialized Email Teams",
      description:
        "Specialized courses for professionals to enhance their skills in specific areas of AM, including DFAM, material for AM, and applications. These certifications provide practical knowledge to solve industry challenges using AM technologies.",
      topics: [
        "Specialized DFAM Workflows",
        "Powder & Resin Material Characterization",
        "Real-World Industry Problem Solving",
        "Hands-On Lab Certifications",
      ],
    },
    {
      level: "Executive",
      title: "Executive Certifications",
      duration: "Duration: 3 / 6 / 9 Months",
      target: "C-Suite, R&D Heads & Plant Managers",
      description:
        "Designed for industry leaders, this program offers high-level insights into the strategic use of Additive Manufacturing. It covers business applications, cost analysis, and supply chain integration in AM.",
      topics: [
        "Strategic AM Business Case Modeling",
        "Unit Cost Analysis & ROI Estimation",
        "Supply Chain & On-Demand Production",
        "Executive Leadership Roadmap",
      ],
    },
    {
      level: "Level 4",
      title: "3D Innovator (Customized Industry Solutions)",
      duration: "Duration: As per requirement",
      target: "Aerospace, Automotive & Healthcare SMEs / MSMEs",
      description:
        "Tailored training for industries such as aerospace, automotive, and healthcare, focusing on applications of AM in each sector. Courses cover Design Thinking, DFAM, Material science, Machine operation, and more.",
      topics: [
        "Aerospace & Defense Part Qualification",
        "Automotive Tooling & Holding Fixtures",
        "Medical Implants & Surgical Guides DfAM",
        "Custom MSME Technical Enablement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      
      {/* 1. HERO SECTION - HOME THEME (EDS TECHNOLOGIES STYLE) */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-16 lg:py-24 border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
              <GraduationCap size={16} /> Training, Skill & Entrepreneurship Development
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              From Learning to Leading in Additive Manufacturing
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Galactic 3D provides comprehensive educational and technical training programs bridging Generative AI, ChatGPT, Machine Learning, and advanced digital additive manufacturing.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedCourse({ title: "General Additive Training Program" });
                  setShowEnrollModal(true);
                }}
                className="btn-corporate-primary relative z-10 cursor-pointer"
              >
                Enroll Now <ArrowRight size={15} />
              </button>
              <a
                href="/training-brochure.pdf"
                download="Galactic3D_Training_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-corporate-secondary relative z-10 cursor-pointer"
              >
                <FileText size={15} /> Download Official Brochure PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LAB & FACILITY HERO IMAGE SHOWCASE */}
      <section className="py-12 bg-white border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-lg group">
            <img
              src="/Training/room.png"
              alt="Galactic 3D Training & Innovation Facility"
              className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="inline-block px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded w-fit mb-2">
                State-of-the-Art Training Facility
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Galactic 3D & EOS Industrial Additive Manufacturing Lab
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mt-1">
                Equipped with CAD workstations, DfAM simulation software, EOS 3D printers, and post-processing centers at Cambridge Institute of Technology, Bengaluru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS & MISSION/VISION WITH LAB IMAGE */}
      <section className="py-16 bg-white border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-2">
              Our Core Philosophy
            </div>
            <h2 className="text-3xl font-extrabold text-[#111111]">
              Mentorship | Competence | Empowerment
            </h2>
            <p className="text-xs text-gray-600 mt-2">
              Learn the endless possibilities of AM and its associations with GenAI, ChatGPT & ML. Whether you&apos;re a student, professional, or executive, our programs prepare you for limitless innovation.
            </p>
          </div>

          {/* SIDE-BY-SIDE CONTENT & BROCHURE IMAGE */}
          <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              {/* MISSION */}
              <div className="p-6 rounded-xl bg-[#F8F9FA] border border-[#EAEAEA] flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#D32F2F] text-white shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-1">Our Mission</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To foster the next generation of innovators and leaders in advanced manufacturing through world-class training, hands-on industrial equipment access, and career-aligned education.
                  </p>
                </div>
              </div>

              {/* VISION */}
              <div className="p-6 rounded-xl bg-[#F8F9FA] border border-[#EAEAEA] flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#111111] text-white shrink-0">
                  <Compass size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-1">Our Vision</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    To make Additive Manufacturing an integral part of education across schools, universities, and enterprise R&D, empowering learners to drive industrial transformation sustainably.
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

          {/* GALACTIC 3D FOUR KEY VERTICALS */}
          <div className="bg-[#111111] text-white rounded-xl p-8 sm:p-10">
            <h3 className="text-xl font-extrabold text-white mb-2 text-center">
              Our Services Span Across Four Key Verticals
            </h3>
            <p className="text-xs text-zinc-400 text-center max-w-xl mx-auto mb-8">
              Bridging the gap to the future with cutting-edge technology and expert support.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                <Layers className="text-[#D32F2F] mx-auto mb-2" size={20} />
                <h4 className="text-xs font-bold text-white">Design, DFAM & Data Preparation</h4>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                <Factory className="text-[#D32F2F] mx-auto mb-2" size={20} />
                <h4 className="text-xs font-bold text-white">Contract Manufacturing & Part Printing</h4>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                <GraduationCap className="text-[#D32F2F] mx-auto mb-2" size={20} />
                <h4 className="text-xs font-bold text-white">Training & Entrepreneurship Development</h4>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                <Cpu className="text-[#D32F2F] mx-auto mb-2" size={20} />
                <h4 className="text-xs font-bold text-white">Capital Equipment Manufacturing</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US? (4 PILLARS WITH BROCHURE ILLUSTRATION IMAGES) */}
      <section className="py-16 bg-[#F8F9FA] border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-3 py-1 rounded">
              Competitive Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-[#111111] mt-3">
              Why Choose Galactic 3D Training?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* PILLAR 1 */}
            <div className="p-6 bg-white rounded-xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="w-20 h-20 rounded-full bg-red-50 overflow-hidden mx-auto mb-4 p-2 border border-red-100 flex items-center justify-center">
                  <img
                    src="/Training/curriculum.png"
                    alt="Industry-aligned curriculum"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#111111] mb-2">Industry-Aligned Curriculum</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  STREAM-based and career-focused modules approved by EOS and academic Boards of Studies.
                </p>
              </div>
            </div>

            {/* PILLAR 2 */}
            <div className="p-6 bg-white rounded-xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="w-20 h-20 rounded-full bg-red-50 overflow-hidden mx-auto mb-4 p-2 border border-red-100 flex items-center justify-center">
                  <img
                    src="/Training/facility.png"
                    alt="Access to state-of-the-art facilities"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#111111] mb-2">Access to State-of-the-Art Facilities</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Direct exposure to EOS metal/polymer 3D printers, DfAM simulation labs, and post-processing centers.
                </p>
              </div>
            </div>

            {/* PILLAR 3 */}
            <div className="p-6 bg-white rounded-xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="w-20 h-20 rounded-full bg-red-50 overflow-hidden mx-auto mb-4 p-2 border border-red-100 flex items-center justify-center">
                  <img
                    src="/Training/experts.png"
                    alt="Expert trainers and real-world projects"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#111111] mb-2">Expert Trainers & Real Projects</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Guided by PhD holders, M.Tech graduates, and industrial veterans with 30+ years cumulative experience.
                </p>
              </div>
            </div>

            {/* PILLAR 4 */}
            <div className="p-6 bg-white rounded-xl border border-[#EAEAEA] text-center shadow-sm hover:border-[#D32F2F] transition flex flex-col justify-between group">
              <div>
                <div className="w-20 h-20 rounded-full bg-red-50 overflow-hidden mx-auto mb-4 p-2 border border-red-100 flex items-center justify-center">
                  <img
                    src="/Training/competence.png"
                    alt="Internships & Placement assistance"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#111111] mb-2">Internships & Placement Pathways</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Career placement support, industrial project mentorship, and direct connections to manufacturing hubs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PROGRAM SCOPE SECTIONS (SCHOOL, INSTITUTION, INDUSTRY) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAEAEA] pb-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
                Full Educational & Industrial Scope
              </div>
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
                School Scope (L1–L4)
              </button>
              <button
                onClick={() => setSelectedCategory("institution")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory === "institution" ? "bg-[#D32F2F] text-white" : "text-gray-700 hover:text-[#111111]"
                }`}
              >
                Institution Scope (L1–L4)
              </button>
              <button
                onClick={() => setSelectedCategory("industry")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory === "industry" ? "bg-[#D32F2F] text-white" : "text-gray-700 hover:text-[#111111]"
                }`}
              >
                Industry Scope (PG Diploma / Executive)
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

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SCHOOL_PROGRAMS.map((prog) => (
                  <div
                    key={prog.level}
                    className="corporate-card bg-white rounded-xl border border-[#EAEAEA] p-6 flex flex-col justify-between hover:border-[#D32F2F] transition-all shadow-sm"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-[10px] font-bold uppercase tracking-wider mb-3">
                        {prog.level}
                      </span>
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
                      <span>Enroll Level</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
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

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {INSTITUTION_PROGRAMS.map((prog) => (
                  <div
                    key={prog.level}
                    className="corporate-card bg-white rounded-xl border border-[#EAEAEA] p-6 flex flex-col justify-between hover:border-[#D32F2F] transition-all shadow-sm"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded bg-zinc-100 text-[#111111] text-[10px] font-bold uppercase tracking-wider mb-3">
                        {prog.level}
                      </span>
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
            </div>
          )}

          {/* INDUSTRY PROGRAM SCOPE */}
          {(selectedCategory === "all" || selectedCategory === "industry") && (
            <div id="industry">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-[#D32F2F] rounded-full" />
                <h3 className="text-2xl font-extrabold text-[#111111]">
                  Industry Program Scope (PG Diploma, Certifications & Executive Training)
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Tailored for SME/MSME needs with expert-led learning, driving innovation, cost efficiency, and real-world AM implementation across aerospace, automotive, and medical manufacturing sectors.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {INDUSTRY_PROGRAMS.map((prog) => (
                  <div
                    key={prog.level}
                    className="corporate-card bg-white rounded-xl border border-[#EAEAEA] p-6 flex flex-col justify-between hover:border-[#D32F2F] transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-[10px] font-bold uppercase tracking-wider">
                          {prog.level}
                        </span>
                        <span className="text-[10px] text-gray-500 font-bold">
                          {prog.duration}
                        </span>
                      </div>
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
                      <span>Request Syllabus</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. OUR CORE TEAM & LOCATION FOOTER STRIP WITH CLASSROOM PHOTO */}
      <section className="py-16 bg-[#F8F9FA] border-t border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-3 py-1 rounded">
                EOS & Board of Studies Approved
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                Our Core Team & Course Content Standard
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                A highly qualified expert team with 30+ years of experience, including Ph.D. holders, M.Tech graduates, and industry professionals, specializing in advanced manufacturing technologies and fostering innovation in training and curating course content approved by EOS and the Board of Studies.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#111111]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#D32F2F]" />
                  <span>Industry-Aligned Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#D32F2F]" />
                  <span>Approved by EOS</span>
                </div>
              </div>

              {/* CLASSROOM PHOTO DISPLAY */}
              <div className="mt-6 rounded-xl overflow-hidden border border-[#EAEAEA] shadow-sm">
                <img
                  src="/aboutgrp.jpg"
                  alt="Galactic 3D Additive Training Team & Students"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-[#EAEAEA] shadow-sm space-y-4">
              <h4 className="text-base font-bold text-[#111111] flex items-center gap-2">
                <MapPin size={18} className="text-[#D32F2F]" /> India Training Innovation Hub
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Cambridge Institute of Technology</strong><br />
                Jai Bhuvaneshwari Layout Road, SR Layout,<br />
                Krishnarajapuram, Bengaluru, Karnataka 560036.
              </p>

              <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-700 font-medium">
                <a href="mailto:admin@galactic-3d.com" className="flex items-center gap-2 hover:text-[#D32F2F] transition-colors">
                  <Mail size={14} className="text-[#D32F2F]" /> admin@galactic-3d.com
                </a>
                <a href="mailto:aabid@galactic-3d.com" className="flex items-center gap-2 hover:text-[#D32F2F] transition-colors">
                  <Mail size={14} className="text-[#D32F2F]" /> aabid@galactic-3d.com
                </a>
                <a href="tel:+919740331995" className="flex items-center gap-2 hover:text-[#D32F2F] transition-colors">
                  <Phone size={14} className="text-[#D32F2F]" /> +91 97403 31995
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CORPORATE ENROLLMENT MODAL */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 my-8">
            
            {/* HEADER */}
            <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F]">
                  Official Enrollment Application
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {selectedCourse ? selectedCourse.title : "Additive Training Registration"}
                </h3>
              </div>

              <button
                onClick={() => setShowEnrollModal(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* FORM BODY */}
            <form
              onSubmit={handleEnrollSubmit}
              className="p-6 space-y-4 text-xs"
            >
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-[#111111]">Registration Submitted!</h4>
                  <p className="text-xs text-gray-600">
                    Your registration details have been routed directly to <span className="font-bold text-[#D32F2F]">admin@galactic-3d.com</span>.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block font-bold text-[#111111] mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-[#111111] focus:outline-none focus:border-[#D32F2F]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#111111] mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@institution.com"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-[#111111] focus:outline-none focus:border-[#D32F2F]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#111111] mb-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-[#111111] focus:outline-none focus:border-[#D32F2F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#111111] mb-1">Institution / Organization *</label>
                    <input
                      required
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="University, College, or Company name"
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-[#111111] focus:outline-none focus:border-[#D32F2F]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#111111] mb-1">Specific Training Interests</label>
                    <textarea
                      rows={3}
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      placeholder="Tell us about your learning objectives or team training size..."
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-[#111111] focus:outline-none focus:border-[#D32F2F] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <span className="text-[10px] text-gray-500 font-medium">
                      Routing to: <strong className="text-[#D32F2F]">admin@galactic-3d.com</strong>
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowEnrollModal(false)}
                        className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-bold hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-corporate-primary disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Submit Registration"} <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>

          </div>
        </div>
      )}

    </div>
  );
}

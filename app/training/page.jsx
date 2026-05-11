"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  GraduationCap,
  Factory,
  Building2,
  CheckCircle2,
  Lightbulb,
  Target,
  Award,
  Users,
  BookOpen,
  Microscope,
  Cog,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Layers,
} from "lucide-react";

import {
  AcademicCapIcon,
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  ClockIcon,
  Cog8ToothIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function TrainingPage() {
  const schoolLevels = [
    {
      level: "Level 1",
      title: "3D Printing Designer (Consumer)",
      description:
        "Introduces students to 3D design fundamentals, enabling them to create basic consumer-friendly models for everyday use. Focuses on utilizing design software and preparing files for 3D printing.",
    },
    {
      level: "Level 2",
      title: "3D Printing Technology & Operation",
      description:
        "Students gain hands-on experience with 3D printing data preparation techniques & machine operation.",
    },
    {
      level: "Level 3",
      title: "3D Printing Application Developer",
      description:
        "Focuses on 3D printing applications for home decor, automotive, drone & lifestyle.",
    },
    {
      level: "Level 4",
      title: "3D Innovator",
      description:
        "Equips students in designing & developing their own 3D printer for multiple purposes.",
    },
  ];

  const institutionLevels = [
    {
      level: "Level 1",
      title: "AM Designer & Industry 4.0",
      topics: [
        "Introduction to Additive Manufacturing & CAD Modelling",
        "Design for Polymer AM & Topology Optimization",
        "Generative Design & Innovation",
        "AI & ML in Manufacturing",
        "IoT & Automation principles associated with Industry 4.0, GenAI, ChatGPT & ML",
      ],
    },
    {
      level: "Level 2",
      title: "AM Engineer",
      topics: [
        "Introduction to Additive Manufacturing",
        "AM Machine Architecture",
        "Material Science in AM",
        "Slicing Software & Print Parameters",
        "Data Preparation & Simulation (FDM/DLP/SLS)",
        "Comparative Study",
        "Capstone Project & Review",
      ],
    },
    {
      level: "Level 3",
      title: "Design Thinking & DFAM",
      topics: [
        "Design Thinking for Innovation",
        "Prototyping & Social Innovation",
        "DFAM for Polymers",
        "Optimization for AM",
        "Capstone Project (Design & Simulation)",
        "Part Printing comparative Case study",
      ],
    },
    {
      level: "Level 4",
      title: "AM Specialist (Metal AM & Industrial Visits)",
      topics: [
        "Introduction to Metal AM",
        "Overheating in DMLS",
        "Basics of AM Data Repair",
        "Designing Support-Free Metal AM",
        "Reference Point Calibration",
        "EOSPRINT Software",
        "Monitoring with EOSTATE",
        "Business Case for AM",
        "Tooling Design",
        "Hands-on Build Preparation",
        "Advanced Parameter Editing",
        "Post-Processing & Surface Finishing",
        "Ensuring Print Consistency",
        "Application Sprint (Capstone Project)",
        "Industrial Visit",
      ],
    },
  ];

  const industryPrograms = [

    {
      title: "Certifications in Additive Manufacturing",
      description:
        "Specialized courses for professionals to enhance their skills in specific areas of AM, including DFAM, material for AM, and applications. These certifications provide practical knowledge to solve industry challenges using AM technologies.",
      duration: "6 months",
    },
    {
      title: "Executive Certifications",
      description:
        "Designed for industry leaders, this program offers high-level insights into the strategic use of Additive Manufacturing. It covers business applications, cost analysis, and supply chain integration in AM.",
      duration: "3/6/9 months",
    },
    {
      title: "Industry-Specific Training",
      description:
        "Tailored training for industries such as aerospace, automotive, and healthcare, focusing on applications of AM in each sector. Courses cover Design Thinking, DFAM, Material science, Machine operation, and more.",
      duration: "As per the requirement",
    },
  ];

  return (
    <main className="text-white">
      {/* HERO SECTION */}
      {/* <section className="relative min-h-[90vh] pt-28 pb-16 flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2000&auto=format&fit=crop"
            alt="3D Printing Training Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-blue-900/20" />
        </div>

        
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-red-500"></div>
              <div className="text-xs md:text-sm  tracking-[0.2em] text-red-400 uppercase">
                Training & Development
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6">
              From Learning to Leading
              <br />
              <span className="text-red-400">in Additive Manufacturing</span>
            </h1>
            <p className="mt-6 font-['scrib'] text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Explore the transformative potential of Additive Manufacturing and
              its integration with Generative AI, Machine Learning, and advanced
              technologies. Our comprehensive training programs empower
              students, professionals, and executives to excel in design,
              production, and innovation.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                href="/contact?subject=Training"
                className="bg-red-600 hover:bg-red-700 text-white  px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-red-500/50"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact?subject=Inquiry"
                className="border-2 border-white/30 hover:border-white/50 hover:bg-white/5 text-white  px-8 py-4 rounded-sm transition-all duration-300"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
          style={{
            WebkitClipPath: "polygon(0 0, 100% 100%, 0 100%)",
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(15,11,11,0.9))",
          }}
        />
      </section> */}

      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-20">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2000&auto=format&fit=crop"
            alt="3D Printing Training Facility"
            className="w-full h-full object-cover"
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* subtle color wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20" />
        </div>


        {/* CONTENT */}
        <div className="container mx-auto px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >

            {/* EYEBROW */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-14 bg-red-500" />
              <p className="text-xs tracking-[0.35em] uppercase text-red-400 font-['dena']">
                Training & Development
              </p>
            </div>


            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-['test'] leading-[1.05] mb-8">
              From Learning
              <br />
              <span className="text-red-400">
                to Leading
              </span>{" "}
              in Additive Manufacturing
            </h1>


            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-gray-300 font-['scrib'] max-w-2xl leading-relaxed">
              Explore the transformative potential of additive manufacturing and
              its intersection with Generative AI, Machine Learning, and advanced
              digital production workflows.
            </p>


            {/* ACTIONS */}
            <div className="mt-12 flex gap-5 flex-wrap">

              <Link
                href="/contact?subject=Training"
                className="group px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition flex items-center gap-3"
              >
                <span className="font-['dena'] tracking-wide">
                  Enroll Now
                </span>

                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>


              <Link
                href="/contact?subject=Inquiry"
                className="group px-8 py-4 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.1] transition flex items-center gap-3"
              >
                <span className="font-['dena'] tracking-wide">
                  Download Brochure
                </span>

                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>

            </div>

          </motion.div>

        </div>


        {/* FADE BOTTOM */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(10,10,10,1))",
          }}
        />

      </section>

      {/* MISSION & VISION */}
      {/* <section className="relative py-20 md:py-32 bg-white/[0.02]">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['test'] mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-24 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt="Team collaboration and mentorship"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-blue-900/90 group-hover:via-black/70 transition-all duration-500" />
              </div>

              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-blue-400" strokeWidth={2} />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-['test'] mb-4 text-white">
                  Mentorship
                </h3>
                <p className="text-gray-200 font-['scrib'] leading-relaxed">
                  Expert guidance from industry professionals with decades of
                  experience in additive manufacturing and product development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
                  alt="Hands-on 3D printing training"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-red-900/90 group-hover:via-black/70 transition-all duration-500" />
              </div>

              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-xl border border-red-400/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-400" strokeWidth={2} />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-['test'] mb-4 text-white">
                  Competence
                </h3>
                <p className="text-gray-200 font-['scrib'] leading-relaxed">
                  Build practical skills through hands-on training with
                  industry-standard equipment and real-world project experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-green-500/40 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                  alt="Innovation and technology empowerment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-green-900/90 group-hover:via-black/70 transition-all duration-500" />
              </div>

              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 backdrop-blur-xl border border-green-400/30 flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-400" strokeWidth={2} />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-['test'] mb-4 text-white">
                  Empowerment
                </h3>
                <p className="text-gray-200 font-['scrib'] leading-relaxed">
                  Drive industrial transformation by equipping learners with the
                  knowledge to innovate and lead in the AM ecosystem.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-sm p-10 backdrop-blur group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-3xl  mb-6 relative">
                Mission
              </h3>
              <p className="text-gray-300 font-['scrib'] text-lg leading-relaxed relative">
                To foster the next generation of innovators and leaders in
                advanced manufacturing through world-class training, education,
                and hands-on experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-sm p-10 backdrop-blur group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-3xl  mb-6 relative">
                Vision
              </h3>
              <p className="text-gray-300 font-['scrib'] text-lg leading-relaxed relative">
                To make Additive Manufacturing an integral part of education,
                empowering learners to drive industrial transformation
                sustainably.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="relative overflow-hidden bg-[#050505] py-32 text-white">

  {/* ATMOSPHERE */}
  <div className="pointer-events-none absolute inset-0">

    {/* GRID */}
    <div
      className="absolute inset-0
      bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
      bg-[size:12vw_100%] opacity-20"
    />

    {/* RADIAL */}
    <div
      className="absolute left-1/2 top-0 h-[500px] w-[65vw]
      -translate-x-1/2 rounded-full bg-red-600/10 blur-[160px]"
    />

  </div>

  {/* HUGE BG TEXT */}
  <div
    className="pointer-events-none absolute inset-0
    flex items-center justify-center overflow-hidden"
  >

    <span
      className="translate-y-10 select-none
      font-['test']
      text-[18vw]
      font-black uppercase
      tracking-[-0.08em]
      text-white/[0.03]"
    >
      PHILOSOPHY
    </span>

  </div>

  <div className="relative z-20 px-5 sm:px-8 lg:px-10">

    {/* TOP BAR */}
    <div
      className="mb-10 flex items-center justify-between
      border-y border-white/10 py-5
      font-mono text-[10px]
      uppercase tracking-[0.28em]"
    >

      <span className="text-red-400">
        Galactic 3D / Philosophy
      </span>

      <span className="hidden text-white/35 sm:block">
        Industrial Education Framework
      </span>

    </div>

    {/* HERO */}
    <div
      className="grid gap-12
      lg:grid-cols-[1fr_320px]
      lg:items-end"
    >

      <div>

        {/* LABEL */}
        <div className="mb-8 flex items-center gap-4">

          <div className="h-px w-14 bg-red-500" />

          <span
            className="font-mono text-[10px]
            uppercase tracking-[0.32em]
            text-red-400"
          >
            Our Philosophy
          </span>

        </div>

        {/* TITLE */}
        <h2
          className="max-w-6xl
          font-['test']
          text-[15vw]
          leading-[0.82]
          tracking-[-0.08em]
          sm:text-[6.8rem]
          lg:text-[8vw]"
        >
          Principles
          <span className="block text-white/22">
            That Shape
          </span>
          <span className="block text-red-500">
            Innovation.
          </span>
        </h2>

      </div>

      {/* SIDE PANEL */}
      <div
        className="rounded-[1.75rem]
        border border-white/10
        bg-black/40 p-6
        backdrop-blur-xl"
      >

        <p
          className="font-mono text-[10px]
          uppercase tracking-[0.24em]
          text-white/35"
        >
          Core Framework
        </p>

        <div className="mt-8 space-y-5">

          {[
            "Mentorship",
            "Competence",
            "Empowerment",
            "Industry Alignment",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between
              border-b border-white/10 pb-4"
            >

              <span className="text-sm text-white/70">
                {item}
              </span>

              <div className="h-2 w-2 rounded-full bg-red-500" />

            </div>
          ))}

        </div>

      </div>

    </div>

    {/* FEATURED PANEL */}
    <div
      className="mt-20 overflow-hidden
      rounded-[2rem]
      border border-white/10"
    >

      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

        {/* IMAGE */}
        <div className="relative min-h-[620px] overflow-hidden">

          <img
            src="/Training/mentorship.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            className="absolute inset-0
            bg-gradient-to-t from-black via-black/50 to-transparent"
          />

        </div>

        {/* CONTENT */}
        <div
          className="flex flex-col justify-between
          bg-[#0a0a0a] p-8 sm:p-12"
        >

          <div>

            <Lightbulb className="h-10 w-10 text-red-500" />

            <p
              className="mt-10 font-mono text-[10px]
              uppercase tracking-[0.3em]
              text-red-400"
            >
              Mentorship
            </p>

            <h3
              className="mt-5 text-5xl
              font-black leading-[0.9]
              tracking-[-0.05em]"
            >
              Guided By
              <span className="block text-white/25">
                Industry
              </span>
              Experts.
            </h3>

            <p
              className="mt-8 max-w-lg
              text-sm leading-7
              text-white/50"
            >
              Learn directly from professionals working at the
              intersection of additive manufacturing, engineering,
              industrial production, and next-generation digital
              fabrication systems.
            </p>

          </div>

          {/* BOTTOM META */}
          <div
            className="mt-16 border-t
            border-white/10 pt-6"
          >

            <div className="flex items-center justify-between">

              <span
                className="font-mono text-[10px]
                uppercase tracking-[0.22em]
                text-white/35"
              >
                Knowledge Transfer
              </span>

              <span
                className="font-mono text-[10px]
                uppercase tracking-[0.22em]
                text-red-400"
              >
                Active
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* LOWER GRID */}
    <div className="mt-4 grid gap-4 lg:grid-cols-2">

      {/* CARD */}
      <div
        className="group relative overflow-hidden
        rounded-[2rem]
        border border-white/10"
      >

        <div className="relative h-[520px] overflow-hidden">

          <img
            src="/Training/competence.png"
            className="absolute inset-0 h-full w-full
            object-cover transition duration-700
            group-hover:scale-105"
          />

          <div
            className="absolute inset-0
            bg-gradient-to-t from-black via-black/50 to-transparent"
          />

        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">

          <Target className="h-8 w-8 text-red-500" />

          <h3
            className="mt-6 text-4xl
            font-black tracking-[-0.04em]"
          >
            Competence
          </h3>

          <p
            className="mt-5 max-w-md
            text-sm leading-7
            text-white/55"
          >
            Develop production-ready skills using industry-standard
            additive manufacturing systems and engineering workflows.
          </p>

        </div>

      </div>

      {/* CARD */}
      <div
        className="group relative overflow-hidden
        rounded-[2rem]
        border border-white/10"
      >

        <div className="relative h-[520px] overflow-hidden">

          <img
            src="/aboutgrp.jpg"
            className="absolute inset-0 h-full w-full
            object-cover transition duration-700
            group-hover:scale-105"
          />

          <div
            className="absolute inset-0
            bg-gradient-to-t from-black via-black/50 to-transparent"
          />

        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">

          <Award className="h-8 w-8 text-red-500" />

          <h3
            className="mt-6 text-4xl
            font-black tracking-[-0.04em]"
          >
            Empowerment
          </h3>

          <p
            className="mt-5 max-w-md
            text-sm leading-7
            text-white/55"
          >
            Empower innovators to lead the future of sustainable,
            digitally driven manufacturing ecosystems.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* <section className="relative py-28 bg-black">
        <div className="container mx-auto px-8">

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-14 bg-red-500" />
              <p className="text-xs tracking-[0.35em] uppercase text-red-400 font-['dena']">
                Why Choose Us
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
              Training Built
              <br />
              For Real Industry
            </h2>

            <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed">
              Comprehensive additive manufacturing training supported by
              modern labs, real engineering projects and direct industry exposure.
            </p>
          </motion.div>


          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group relative h-[420px] rounded-2xl overflow-hidden"
            >

              <img
                src="/Training/facility.png"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md">
                <h3 className="text-4xl font-['test'] text-white mb-4">
                  State-of-the-Art Facilities
                </h3>

                <p className="text-gray-300 font-['scrib'] leading-relaxed">
                  Train using modern additive manufacturing equipment,
                  industrial software workflows and advanced prototyping tools.
                </p>
              </div>

            </motion.div>



            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[420px] rounded-2xl overflow-hidden"
            >

              <img
                src="/Training/curriculum.png"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-3xl font-['test'] text-white mb-3">
                  Industry-Aligned Curriculum
                </h3>

                <p className="text-gray-300 font-['scrib'] text-sm">
                  Structured programs built with real industrial workflows and
                  engineering practices.
                </p>
              </div>

            </motion.div>



            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[340px] rounded-2xl overflow-hidden"
            >

              <img
                src="/Training/experts.png"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-['test'] text-white">
                  Expert Trainers
                </h3>
              </div>

            </motion.div>



            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[340px] rounded-2xl overflow-hidden lg:col-span-2"
            >

              <img
                src="/Training/room.png"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute bottom-10 left-10 max-w-md">
                <h3 className="text-3xl font-['test'] text-white mb-4">
                  Internships & Placement Support
                </h3>

                <p className="text-gray-300 font-['scrib']">
                  Connect with industry partners and gain access to career
                  opportunities through internship programs.
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </section> */}


      <section className="relative overflow-hidden bg-[#050505] py-32 text-white">

  {/* ATMOSPHERE */}
  <div className="pointer-events-none absolute inset-0">

    {/* GRID */}
    <div
      className="absolute inset-0
      bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
      bg-[size:12vw_100%] opacity-20"
    />

    {/* GLOW */}
    <div
      className="absolute left-1/2 top-0 h-[500px] w-[60vw]
      -translate-x-1/2 rounded-full bg-red-600/10 blur-[160px]"
    />

  </div>

  <div className="relative z-20 px-5 sm:px-8 lg:px-10">

    {/* TOP STRIP */}
    <div
      className="mb-12 flex items-center justify-between
      border-y border-white/10 py-5
      font-mono text-[10px]
      uppercase tracking-[0.28em]"
    >

      <span className="text-red-400">
        Galactic 3D / Training Ecosystem
      </span>

      <span className="hidden text-white/35 sm:block">
        Built For Real Industry
      </span>

    </div>

    {/* INTRO */}
    <div className="mb-24 max-w-3xl">

      <div className="mb-7 flex items-center gap-4">

        <div className="h-px w-14 bg-red-500" />

        <span
          className="font-mono text-[10px]
          uppercase tracking-[0.32em]
          text-red-400"
        >
          Why Choose Us
        </span>

      </div>

      <p
        className="text-3xl leading-[1.3]
        tracking-[-0.03em]
        text-white/85 sm:text-5xl"
      >
        Comprehensive additive manufacturing education
        supported by modern labs, engineering workflows,
        real projects, and direct industry exposure.
      </p>

    </div>

    {/* FEATURED FACILITY */}
    <div className="relative mb-6 overflow-hidden rounded-[2.5rem]">

      {/* IMAGE */}
      <div className="relative h-[78vh] min-h-[720px] overflow-hidden">

        <img
          src="/Training/facility.png"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0
          bg-gradient-to-t from-black via-black/30 to-transparent"
        />

      </div>

      {/* FLOATING PANEL */}
      <div
        className="absolute left-6 top-6
        max-w-md rounded-[2rem]
        border border-white/10
        bg-black/45 p-7
        backdrop-blur-xl sm:left-10 sm:top-10"
      >

        <p
          className="font-mono text-[10px]
          uppercase tracking-[0.28em]
          text-red-400"
        >
          Infrastructure
        </p>

        <h3
          className="mt-5 text-4xl
          font-black leading-[0.95]
          tracking-[-0.04em]"
        >
          State-Of-The-Art
          Manufacturing Labs
        </h3>

        <p
          className="mt-6 text-sm
          leading-7 text-white/55"
        >
          Train using industrial additive manufacturing systems,
          engineering-grade software, prototyping labs,
          and production-ready workflows.
        </p>

      </div>

      {/* BOTTOM META STRIP */}
      <div
        className="absolute bottom-0 left-0 right-0
        grid border-t border-white/10
        bg-black/45 backdrop-blur-xl
        sm:grid-cols-3"
      >

        {[
          ["Equipment", "Industrial Grade"],
          ["Workflow", "Production Focused"],
          ["Environment", "Hands-On Learning"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border-white/10 p-6
            sm:border-r last:border-r-0"
          >

            <p
              className="font-mono text-[10px]
              uppercase tracking-[0.22em]
              text-white/35"
            >
              {label}
            </p>

            <p className="mt-3 text-sm text-white/75">
              {value}
            </p>

          </div>
        ))}

      </div>

    </div>

    {/* STAGGERED GRID */}
    <div className="grid gap-6 lg:grid-cols-12">

      {/* LEFT STACK */}
      <div className="space-y-6 lg:col-span-5">

        {/* CURRICULUM */}
        <div
          className="group relative overflow-hidden
          rounded-[2rem]"
        >

          <div className="relative h-[580px] overflow-hidden">

            <img
              src="/Training/curriculum.png"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            <div
              className="absolute inset-0
              bg-gradient-to-t from-black via-black/50 to-transparent"
            />

          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8">

            <p
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Curriculum
            </p>

            <h3
              className="mt-5 text-4xl
              font-black tracking-[-0.04em]"
            >
              Industry-Aligned
              Programs
            </h3>

            <p
              className="mt-5 max-w-md
              text-sm leading-7 text-white/55"
            >
              Structured around real engineering workflows,
              additive manufacturing systems, and modern
              industrial practices.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT STACK */}
      <div className="space-y-6 lg:col-span-7">

        {/* TRAINERS */}
        <div
          className="group relative overflow-hidden
          rounded-[2rem]"
        >

          <div className="relative h-[340px] overflow-hidden">

            <img
              src="/Training/experts.png"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            <div
              className="absolute inset-0
              bg-gradient-to-r from-black via-black/45 to-transparent"
            />

          </div>

          <div
            className="absolute inset-y-0 left-0
            flex max-w-lg flex-col
            justify-center p-8"
          >

            <p
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Mentorship
            </p>

            <h3
              className="mt-5 text-4xl
              font-black tracking-[-0.04em]"
            >
              Learn From
              Industry Experts
            </h3>

            <p
              className="mt-5 text-sm
              leading-7 text-white/55"
            >
              Gain direct guidance from professionals
              experienced in additive manufacturing,
              engineering systems, and industrial production.
            </p>

          </div>

        </div>

        {/* INTERNSHIPS */}
        <div
          className="group relative overflow-hidden
          rounded-[2rem]"
        >

          <div className="relative h-[520px] overflow-hidden">

            <img
              src="/Training/room.png"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            <div
              className="absolute inset-0
              bg-gradient-to-t from-black via-black/45 to-transparent"
            />

          </div>

          {/* FLOATING CONTENT */}
          <div
            className="absolute bottom-8 right-8
            max-w-md rounded-[1.75rem]
            border border-white/10
            bg-black/45 p-7
            backdrop-blur-xl"
          >

            <p
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Career Support
            </p>

            <h3
              className="mt-5 text-4xl
              font-black tracking-[-0.04em]"
            >
              Internships &
              Placement Support
            </h3>

            <p
              className="mt-5 text-sm
              leading-7 text-white/55"
            >
              Connect with manufacturing partners,
              internship programs, and real industrial
              career opportunities.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      

      {/* <section className="relative py-28 bg-black overflow-hidden">

        <div className="container mx-auto px-8">

        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-20"
          >
            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 rounded-xl flex items-center justify-center">
                <AcademicCapIcon className="w-7 h-7 text-blue-400" />
              </div>

              <p className="text-xs tracking-[0.35em] uppercase text-blue-400 font-['dena']">
                Schools Program
              </p>

            </div>

            <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
              Inspiring Young
              <br />
              3D Innovators
            </h2>

            <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-3xl">
              Our STREAM-based learning programs introduce students to additive
              manufacturing through hands-on modules designed to nurture
              creativity, engineering thinking and real-world problem solving.
            </p>

          </motion.div>



          
          <div className="grid md:grid-cols-2 gap-10">

            {[
              {
                level: "Level 1",
                title: "3D Printing Designer",
                description: "Students learn fundamental 3D design skills to create functional everyday objects.",
                image: "/dragon.png",
                size: "large"
              },
              {
                level: "Level 2",
                title: "Technology & Operation",
                description: "Hands-on training in data preparation and machine operation.",
                image: "https://ik.imagekit.io/0s6dxbeae/landscape.png",
                size: "small"
              },
              {
                level: "Level 3",
                title: "Application Developer",
                description: "Students explore real-world applications from automotive to drone technology.",
                image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1600&auto=format&fit=crop",
                size: "small"
              },
              {
                level: "Level 4",
                title: "3D Innovator",
                description: "Students design and build their own 3D printer systems.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
                size: "large"
              },
            ].map((item, idx) => {

              const height = item.size === "large" ? "h-[420px]" : "h-[320px]";

              return (

                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative ${height} overflow-hidden rounded-2xl`}
                >

                 
                  <img
                    src={item.image}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />


                  
                  <div className="absolute bottom-6 left-6 right-6">

                    <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition group-hover:bg-white/[0.08]">

                    
                      <div className="flex items-center justify-between mb-3">

                        <span className="text-xs tracking-[0.25em] text-blue-400 uppercase font-['dena']">
                          {item.level}
                        </span>

                        <ArrowUpRightIcon className="w-5 h-5 text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />

                      </div>

                      <h3 className="text-xl font-['test'] text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm font-['scrib'] leading-relaxed">
                        {item.description}
                      </p>

                    </div>

                  </div>


                  
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 flex items-center justify-center">

                    <AcademicCapIcon className="w-6 h-6 text-blue-400" />

                  </div>

                </motion.div>

              )
            })}

          </div>

        </div>

      </section> */}

      <section className="relative overflow-hidden bg-[#050505] text-white">

  {/* BACKGROUND */}
  <div className="pointer-events-none absolute inset-0">

    {/* GRID */}
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />

    {/* RED GLOW */}
    <div className="absolute left-[15%] top-[10%] h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]" />

  </div>

  <div className="relative z-10 px-5 py-28 sm:px-8 lg:px-10">

    {/* TOP */}
    <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

      <div className="max-w-4xl">

        <div className="mb-6 flex items-center gap-4">

          <div className="h-px w-14 bg-red-500" />

          <span
            className="font-mono text-[10px]
            uppercase tracking-[0.28em]
            text-red-400"
          >
            Student Innovation Program
          </span>

        </div>

        <h2
          className="max-w-5xl
          text-5xl font-black
          leading-[0.95]
          tracking-[-0.06em]
          sm:text-7xl"
        >
          Learn by building.
        </h2>

      </div>

      <p
        className="max-w-md text-sm
        leading-7 text-white/55"
      >
        Students work with real machines,
        real software, and real workflows —
        from modeling and prototyping
        to advanced manufacturing concepts.
      </p>

    </div>

    {/* MAIN LAYOUT */}
    <div className="grid gap-5 lg:grid-cols-12">

      {/* LEFT COLUMN */}
      <div className="space-y-5 lg:col-span-4">

        {/* CARD */}
        <div
          className="rounded-[2rem]
          border border-white/10
          bg-[#0a0a0a]"
        >

          <div className="p-7">

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Design
            </span>

            <h3
              className="mt-5 text-3xl
              font-black tracking-[-0.04em]"
            >
              3D Modeling &
              Product Design
            </h3>

            <p
              className="mt-5 text-sm
              leading-7 text-white/50"
            >
              Learn how to design functional
              products and prepare them
              for manufacturing.
            </p>

          </div>

          <div className="relative h-[260px] overflow-hidden">

            <img
              src="/dragon.png"
              className="absolute inset-0 h-full w-full object-cover"
            />

          </div>

        </div>

        {/* SMALL PANEL */}
        <div
          className="rounded-[2rem]
          border border-white/10
          bg-white/[0.03]
          p-7 backdrop-blur-xl"
        >

          <p
            className="font-mono text-[10px]
            uppercase tracking-[0.24em]
            text-red-400"
          >
            Skills
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "CAD",
              "3D Printing",
              "Design Thinking",
              "Prototyping",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full
                border border-white/10
                px-4 py-2
                font-mono text-[10px]
                uppercase tracking-[0.18em]
                text-white/60"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* CENTER FEATURE */}
      <div className="lg:col-span-5">

        <div
          className="group relative h-full min-h-[760px]
          overflow-hidden rounded-[2.5rem]"
        >

          <img
            src="https://ik.imagekit.io/0s6dxbeae/landscape.png"
            className="absolute inset-0 h-full w-full
            object-cover transition duration-700
            group-hover:scale-105"
          />

          <div
            className="absolute inset-0
            bg-gradient-to-t from-black
            via-black/20 to-transparent"
          />

          {/* FLOATING INFO */}
          <div
            className="absolute bottom-7 left-7 right-7
            rounded-[1.8rem]
            border border-white/10
            bg-black/45 p-7
            backdrop-blur-xl"
          >

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Workshop
            </span>

            <h3
              className="mt-5 text-5xl
              font-black leading-[0.92]
              tracking-[-0.05em]"
            >
              Real Machines.
              Real Learning.
            </h3>

            <p
              className="mt-6 max-w-lg
              text-sm leading-7 text-white/55"
            >
              Students get direct exposure
              to additive manufacturing systems,
              workflows, and hands-on fabrication.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-5 lg:col-span-3">

        {/* TOP */}
        <div
          className="rounded-[2rem]
          border border-white/10
          bg-[#0a0a0a]
          p-7"
        >

          <span
            className="font-mono text-[10px]
            uppercase tracking-[0.24em]
            text-red-400"
          >
            Exposure
          </span>

          <h3
            className="mt-5 text-4xl
            font-black leading-[0.95]
            tracking-[-0.05em]"
          >
            Industry
            Mindset
          </h3>

          <p
            className="mt-5 text-sm
            leading-7 text-white/50"
          >
            Understand how manufacturing,
            automation, and digital production
            work together in the real world.
          </p>

        </div>

        {/* IMAGE */}
        <div
          className="group relative overflow-hidden
          rounded-[2rem]"
        >

          <div className="relative h-[420px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            <div
              className="absolute inset-0
              bg-gradient-to-t from-black
              via-black/30 to-transparent"
            />

          </div>

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Innovation
            </span>

            <h3
              className="mt-4 text-3xl
              font-black tracking-[-0.04em]"
            >
              Build.
              Experiment.
              Iterate.
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* <section className="relative py-28 bg-black overflow-hidden">

        <div className="container mx-auto px-8">

        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-24"
          >
            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 bg-purple-500/10 backdrop-blur-xl border border-purple-400/30 rounded-xl flex items-center justify-center">
                <BuildingOffice2Icon className="w-7 h-7 text-purple-400" />
              </div>

              <p className="text-xs tracking-[0.35em] uppercase text-purple-400 font-['dena']">
                Institution Program
              </p>

            </div>

            <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
              Industry Ready
              <br />
              Additive Manufacturing
            </h2>

            <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-3xl">
              A structured program designed to guide students from design
              fundamentals to advanced additive manufacturing machine development
              aligned with real industry needs.
            </p>

          </motion.div>


        
          <div className="space-y-24">

            {institutionLevels.map((item, idx) => {

              const reverse = idx % 2 !== 0

              return (

                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-16 items-center`}
                >

                
                  <div className={`${reverse ? "md:order-2" : ""} relative group`}>

                    <div className="relative h-[420px] rounded-2xl overflow-hidden">

                      <img
                        src={`https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                    </div>

                  </div>



                
                  <div className={`${reverse ? "md:order-1" : ""}`}>

                    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-10 relative group hover:bg-white/[0.06] transition">

                    
                      <div className="flex items-center justify-between mb-6">

                        <span className="text-xs tracking-[0.35em] uppercase text-purple-400 font-['dena']">
                          {item.level}
                        </span>

                        <ArrowUpRightIcon className="w-5 h-5 text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />

                      </div>


                    
                      <h3 className="text-3xl font-['test'] text-white mb-6">
                        {item.title}
                      </h3>


                
                      <ul className="grid md:grid-cols-2 gap-4">

                        {item.topics.map((topic, tidx) => (
                          <li
                            key={tidx}
                            className="flex items-start gap-3 text-gray-400 font-['scrib'] text-sm"
                          >

                            <CheckCircleIcon className="w-5 h-5 text-purple-400 mt-[2px] flex-shrink-0" />

                            <span>{topic}</span>

                          </li>
                        ))}

                      </ul>

                    </div>

                  </div>

                </motion.div>

              )

            })}

          </div>

        </div>

      </section> */}

      <section className="relative overflow-hidden bg-[#050505] py-32 text-white">

  {/* ATMOSPHERE */}
  <div className="pointer-events-none absolute inset-0">

    {/* GRID */}
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "90px 90px",
      }}
    />

    {/* GLOW */}
    <div
      className="absolute left-[20%] top-[5%]
      h-[500px] w-[500px]
      rounded-full bg-red-600/10 blur-[160px]"
    />

  </div>

  <div className="relative z-10 px-5 sm:px-8 lg:px-10">

    {/* TOP INTRO */}
    <div
      className="mb-24 grid gap-10
      lg:grid-cols-[1fr_320px]
      lg:items-end"
    >

      {/* LEFT */}
      <div>

        <div className="mb-7 flex items-center gap-4">

          <div className="h-px w-14 bg-red-500" />

          <span
            className="font-mono text-[10px]
            uppercase tracking-[0.28em]
            text-red-400"
          >
            Institution Program
          </span>

        </div>

        <h2
          className="max-w-5xl
          text-5xl font-black
          leading-[0.95]
          tracking-[-0.06em]
          sm:text-7xl"
        >
          A clear path from
          learning design to
          building machines.
        </h2>

      </div>

      {/* RIGHT */}
      <div
        className="rounded-[2rem]
        border border-white/10
        bg-white/[0.03]
        p-7 backdrop-blur-xl"
      >

        <p
          className="font-mono text-[10px]
          uppercase tracking-[0.24em]
          text-red-400"
        >
          Program Structure
        </p>

        <p
          className="mt-6 text-sm
          leading-7 text-white/50"
        >
          Students progress through structured levels
          focused on design, machine operation,
          engineering systems, and real-world
          additive manufacturing workflows.
        </p>

      </div>

    </div>

    {/* MAIN SYSTEM */}
    <div className="space-y-6">

      {institutionLevels.map((item, idx) => {

        const layouts = [
          "lg:grid-cols-[1.1fr_0.9fr]",
          "lg:grid-cols-[0.85fr_1.15fr]",
          "lg:grid-cols-[1fr_1fr]",
          "lg:grid-cols-[1.2fr_0.8fr]",
        ]

        return (

          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid gap-5 ${layouts[idx % layouts.length]}`}
          >

            {/* IMAGE SIDE */}
            <div
              className={`group relative overflow-hidden rounded-[2.2rem]
              ${idx % 2 === 0 ? "min-h-[620px]" : "min-h-[520px]"}`}
            >

              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
                className="absolute inset-0 h-full w-full
                object-cover transition duration-700
                group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0
                bg-gradient-to-t from-black
                via-black/40 to-transparent"
              />

              {/* LEVEL */}
              <div
                className="absolute left-6 top-6
                rounded-full border border-white/10
                bg-black/45 px-5 py-3
                backdrop-blur-xl"
              >

                <span
                  className="font-mono text-[10px]
                  uppercase tracking-[0.24em]
                  text-red-400"
                >
                  {item.level}
                </span>

              </div>

            </div>

            {/* CONTENT SIDE */}
            <div
              className="flex flex-col justify-between
              rounded-[2.2rem]
              border border-white/10
              bg-[#0a0a0a]
              p-8 sm:p-10"
            >

              {/* TOP */}
              <div>

                <div className="flex items-center justify-between">

                  <span
                    className="font-mono text-[10px]
                    uppercase tracking-[0.24em]
                    text-white/35"
                  >
                    Training Module
                  </span>

                  <ArrowUpRightIcon
                    className="h-5 w-5 text-white/40
                    transition group-hover:-translate-y-1
                    group-hover:translate-x-1"
                  />

                </div>

                <h3
                  className="mt-8 max-w-xl
                  text-5xl font-black
                  leading-[0.92]
                  tracking-[-0.05em]"
                >
                  {item.title}
                </h3>

                <p
                  className="mt-8 max-w-lg
                  text-sm leading-7
                  text-white/50"
                >
                  Students work through practical concepts,
                  technical workflows, and engineering-based
                  learning experiences designed around
                  modern additive manufacturing systems.
                </p>

              </div>

              {/* TOPICS */}
              <div className="mt-16">

                <div
                  className="grid gap-px overflow-hidden
                  rounded-2xl bg-white/10
                  sm:grid-cols-2"
                >

                  {item.topics.map((topic, tidx) => (

                    <div
                      key={tidx}
                      className="flex items-start gap-4
                      bg-black/70 p-5"
                    >

                      <div
                        className="mt-[6px]
                        h-2 w-2 rounded-full bg-red-500"
                      />

                      <span
                        className="text-sm
                        leading-6 text-white/65"
                      >
                        {topic}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        )
      })}

    </div>

  </div>

</section>

      

      {/* <section className="relative py-28 bg-black">

        <div className="container mx-auto px-8">

         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-24"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 bg-red-500/10 border border-red-400/30 backdrop-blur-xl rounded-xl flex items-center justify-center">
                <BuildingOffice2Icon className="w-7 h-7 text-red-400" />
              </div>

              <p className="text-xs tracking-[0.35em] uppercase text-red-400 font-['dena']">
                Industry Program
              </p>

            </div>

            <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
              Training Built
              <br />
              For Industry
            </h2>

            <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-3xl">
              Industry-specific programs designed to help professionals and
              organizations implement additive manufacturing across design,
              production and post-processing workflows.
            </p>

          </motion.div>



          <div className="relative">

            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />


            <div className="space-y-16">

              {[
                {
                  title: "Certifications in Additive Manufacturing",
                  description: "Specialized courses covering DFAM, AM materials and advanced applications.",
                  duration: "6 months",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
                },
                {
                  title: "Executive Certifications",
                  description: "Strategic insights into additive manufacturing adoption for leadership teams.",
                  duration: "3 / 6 / 9 months",
                  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
                },
                {
                  title: "Industry Specific Training",
                  description: "Customized training for aerospace, automotive and healthcare sectors.",
                  duration: "Custom duration",
                  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
                }
              ].map((program, idx) => (

                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-start gap-10"
                >

                  <div className="relative z-10">

                    <div className="w-12 h-12 bg-red-500/10 border border-red-400/40 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <Cog8ToothIcon className="w-6 h-6 text-red-400" />
                    </div>

                  </div>



                  <div className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

                    <div className="relative h-[220px] overflow-hidden">

                      <img
                        src={program.image}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    </div>


                    <div className="p-8">

                      <div className="flex items-center justify-between mb-4">

                        <h3 className="text-2xl font-['test'] text-white">
                          {program.title}
                        </h3>

                        <ArrowUpRightIcon className="w-5 h-5 text-white/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />

                      </div>


                      <p className="text-gray-400 font-['scrib'] leading-relaxed mb-6">
                        {program.description}
                      </p>


                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-400/30 backdrop-blur-xl">

                        <ClockIcon className="w-4 h-4 text-red-400" />

                        <span className="text-sm text-red-300 font-['dena'] tracking-wide">
                          {program.duration}
                        </span>

                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section> */}

      <section className="relative overflow-hidden bg-[#050505] py-32 text-white">

  {/* ATMOSPHERE */}
  <div className="pointer-events-none absolute inset-0">

    {/* GRID */}
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "90px 90px",
      }}
    />

    {/* RED GLOW */}
    <div
      className="absolute right-[10%] top-[5%]
      h-[500px] w-[500px]
      rounded-full bg-red-600/10 blur-[160px]"
    />

  </div>

  <div className="relative z-10 px-5 sm:px-8 lg:px-10">

    {/* INTRO */}
    <div
      className="mb-24 grid gap-10
      lg:grid-cols-[1fr_320px]
      lg:items-end"
    >

      {/* LEFT */}
      <div>

        <div className="mb-7 flex items-center gap-4">

          <div className="h-px w-14 bg-red-500" />

          <span
            className="font-mono text-[10px]
            uppercase tracking-[0.28em]
            text-red-400"
          >
            Industry Program
          </span>

        </div>

        <h2
          className="max-w-5xl
          text-5xl font-black
          leading-[0.95]
          tracking-[-0.06em]
          sm:text-7xl"
        >
          Training built
          around real
          industry workflows.
        </h2>

      </div>

      {/* RIGHT */}
      <div
        className="rounded-[2rem]
        border border-white/10
        bg-white/[0.03]
        p-7 backdrop-blur-xl"
      >

        <p
          className="font-mono text-[10px]
          uppercase tracking-[0.24em]
          text-red-400"
        >
          Industry Integration
        </p>

        <p
          className="mt-6 text-sm
          leading-7 text-white/50"
        >
          Structured programs for professionals,
          organizations, and leadership teams
          implementing additive manufacturing
          into production environments.
        </p>

      </div>

    </div>

    {/* MAIN GRID */}
    <div className="grid gap-5 lg:grid-cols-12">

      {/* LEFT FEATURE */}
      <div className="space-y-5 lg:col-span-7">

        {/* MAIN IMAGE PANEL */}
        <div
          className="group relative overflow-hidden
          rounded-[2.5rem]"
        >

          <div className="relative h-[760px] overflow-hidden">

            {/* PRESERVED IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0
              bg-gradient-to-t from-black
              via-black/40 to-transparent"
            />

          </div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

            <div
              className="inline-flex items-center gap-3
              rounded-full border border-red-400/30
              bg-red-500/10 px-5 py-3
              backdrop-blur-xl"
            >

              <div className="h-2 w-2 rounded-full bg-red-500" />

              <span
                className="font-mono text-[10px]
                uppercase tracking-[0.22em]
                text-red-300"
              >
                6 Month Program
              </span>

            </div>

            <h3
              className="mt-8 max-w-3xl
              text-5xl font-black
              leading-[0.92]
              tracking-[-0.05em]"
            >
              Certifications in
              Additive Manufacturing
            </h3>

            <p
              className="mt-6 max-w-xl
              text-sm leading-7 text-white/55"
            >
              Specialized programs covering DFAM,
              additive manufacturing materials,
              machine systems, and production workflows.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-5 lg:col-span-5">

        {/* EXECUTIVE PROGRAM */}
        <div
          className="rounded-[2rem]
          border border-white/10
          bg-[#0a0a0a]
          p-8"
        >

          <div className="flex items-center justify-between">

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Executive Certifications
            </span>

            <ArrowUpRightIcon className="h-5 w-5 text-white/40" />

          </div>

          <h3
            className="mt-8 text-4xl
            font-black leading-[0.95]
            tracking-[-0.05em]"
          >
            AM Strategy
            For Leadership
          </h3>

          <p
            className="mt-6 text-sm
            leading-7 text-white/50"
          >
            Strategic programs designed for
            leadership teams exploring additive
            manufacturing adoption and integration.
          </p>

          {/* DURATION GRID */}
          <div
            className="mt-10 grid gap-px overflow-hidden
            rounded-2xl bg-white/10 sm:grid-cols-3"
          >

            {["3 Months", "6 Months", "9 Months"].map((item) => (
              <div
                key={item}
                className="bg-black/70 p-4 text-center"
              >

                <span
                  className="font-mono text-[10px]
                  uppercase tracking-[0.18em]
                  text-white/55"
                >
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* IMAGE PANEL */}
        <div
          className="group relative overflow-hidden
          rounded-[2.5rem]"
        >

          <div className="relative h-[420px] overflow-hidden">

            {/* PRESERVED IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0
              bg-gradient-to-t from-black
              via-black/35 to-transparent"
            />

          </div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-8">

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-red-400"
            >
              Industry Specific Training
            </span>

            <h3
              className="mt-5 text-4xl
              font-black leading-[0.95]
              tracking-[-0.05em]"
            >
              Aerospace.
              Automotive.
              Healthcare.
            </h3>

            <p
              className="mt-5 max-w-md
              text-sm leading-7 text-white/55"
            >
              Customized training modules aligned
              with industry-specific additive
              manufacturing applications.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     

      {/* <section className="relative py-28 bg-black overflow-hidden">
        <div className="container mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center backdrop-blur-xl">
                  <UserGroupIcon className="w-7 h-7 text-yellow-400" />
                </div>

                <p className="text-xs tracking-[0.35em] uppercase text-yellow-400 font-['dena']">
                  Our Team
                </p>
              </div>

              <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
                Experts Behind
                <br />
                The Training
              </h2>

              <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-xl mb-10">
                Our team combines academic research with industrial expertise.
                With decades of combined experience in additive manufacturing,
                they design programs that bridge theory and real-world production.
              </p>

              <div className="flex flex-wrap gap-4">

                <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl">
                  <ShieldCheckIcon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-200 font-['dena']">
                    EOS Approved
                  </span>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl">
                  <AcademicCapIcon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-200 font-['dena']">
                    Board of Studies Certified
                  </span>
                </div>

              </div>

            </motion.div>



            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

                <div className="h-[420px] relative overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>


                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl p-6">

                    <p className="text-sm text-gray-400 mb-2 tracking-wide uppercase font-['dena']">
                      Team Experience
                    </p>

                    <p className="text-lg text-white font-['scrib'] leading-relaxed">
                      30+ years of combined experience in additive manufacturing,
                      engineering research and industrial training.
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section> */}

      <section className="relative overflow-hidden bg-[#050505] py-32 text-white">

  {/* ATMOSPHERE */}
  <div className="pointer-events-none absolute inset-0">

    {/* GRID */}
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "90px 90px",
      }}
    />

    {/* GOLD GLOW */}
    <div
      className="absolute left-[10%] top-[10%]
      h-[420px] w-[420px]
      rounded-full bg-yellow-500/10 blur-[150px]"
    />

  </div>

  <div className="relative z-10 px-5 sm:px-8 lg:px-10">

    {/* TOP STRIP */}
    <div
      className="mb-16 flex items-center justify-between
      border-y border-white/10 py-5
      font-mono text-[10px]
      uppercase tracking-[0.28em]"
    >

      <span className="text-yellow-400">
        Galactic 3D / Leadership & Training
      </span>

      <span className="hidden text-white/35 sm:block">
        Research + Industry Experience
      </span>

    </div>

    {/* INTRO */}
    <div
      className="mb-24 grid gap-10
      lg:grid-cols-[1fr_340px]
      lg:items-end"
    >

      {/* LEFT */}
      <div>

        <div className="mb-7 flex items-center gap-4">

          <div className="h-px w-14 bg-yellow-500" />

          <span
            className="font-mono text-[10px]
            uppercase tracking-[0.3em]
            text-yellow-400"
          >
            Our Team
          </span>

        </div>

        <h2
          className="max-w-5xl
          text-5xl font-black
          leading-[0.95]
          tracking-[-0.06em]
          sm:text-7xl"
        >
          Built by people
          who work with the
          technology every day.
        </h2>

      </div>

      {/* RIGHT */}
      <div
        className="rounded-[2rem]
        border border-white/10
        bg-white/[0.03]
        p-7 backdrop-blur-xl"
      >

        <p
          className="font-mono text-[10px]
          uppercase tracking-[0.24em]
          text-yellow-400"
        >
          Team Experience
        </p>

        <p
          className="mt-6 text-sm
          leading-7 text-white/50"
        >
          Our trainers combine industrial
          workflows, engineering research,
          and hands-on additive manufacturing
          experience to create practical,
          industry-focused learning programs.
        </p>

      </div>

    </div>

    {/* MAIN GRID */}
    <div className="grid gap-5 lg:grid-cols-12">

      {/* LARGE IMAGE */}
      <div className="lg:col-span-7">

        <div
          className="group relative overflow-hidden
          rounded-[2.5rem]"
        >

          {/* IMAGE */}
          <div className="relative h-[760px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0
              bg-gradient-to-t from-black
              via-black/35 to-transparent"
            />

          </div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

            <div
              className="inline-flex items-center gap-3
              rounded-full border border-yellow-400/20
              bg-yellow-500/10 px-5 py-3
              backdrop-blur-xl"
            >

              <div className="h-2 w-2 rounded-full bg-yellow-400" />

              <span
                className="font-mono text-[10px]
                uppercase tracking-[0.22em]
                text-yellow-300"
              >
                30+ Years Combined Experience
              </span>

            </div>

            <h3
              className="mt-8 max-w-3xl
              text-5xl font-black
              leading-[0.92]
              tracking-[-0.05em]"
            >
              Engineers.
              Researchers.
              Industry Trainers.
            </h3>

            <p
              className="mt-6 max-w-xl
              text-sm leading-7 text-white/55"
            >
              The team behind the program brings together
              expertise in additive manufacturing,
              industrial systems, engineering education,
              and production workflows.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-5 lg:col-span-5">

        {/* CERTIFICATIONS */}
        <div
          className="rounded-[2rem]
          border border-white/10
          bg-[#0a0a0a]
          p-8"
        >

          <div className="flex items-center justify-between">

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-yellow-400"
            >
              Certifications
            </span>

            <ShieldCheckIcon className="h-5 w-5 text-yellow-400" />

          </div>

          <h3
            className="mt-8 text-4xl
            font-black leading-[0.95]
            tracking-[-0.05em]"
          >
            Trusted By
            Institutions
          </h3>

          <div className="mt-10 space-y-4">

            {[
              "EOS Approved Training",
              "Board of Studies Certified",
              "Industry Aligned Curriculum",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4
                rounded-2xl border border-white/10
                bg-white/[0.03] p-5"
              >

                <div className="h-2 w-2 rounded-full bg-yellow-400" />

                <span className="text-sm text-white/65">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* SMALL IMAGE PANEL */}
        <div
          className="group relative overflow-hidden
          rounded-[2.5rem]"
        >

          <div className="relative h-[360px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 h-full w-full
              object-cover transition duration-700
              group-hover:scale-105"
            />

            <div
              className="absolute inset-0
              bg-gradient-to-t from-black
              via-black/30 to-transparent"
            />

          </div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-8">

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.24em]
              text-yellow-400"
            >
              Practical Learning
            </span>

            <h3
              className="mt-5 text-4xl
              font-black leading-[0.95]
              tracking-[-0.05em]"
            >
              Built Around
              Real Workflows.
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      

      {/* <section className="relative py-40 overflow-hidden">

        <div className="absolute inset-0 -z-20">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />


        <div className="container mx-auto px-8 relative z-10">

          <div className="grid lg:grid-cols-2 items-center gap-20">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="flex items-center gap-3 mb-8">

                <BoltIcon className="w-6 h-6 text-red-400" />

                <span className="text-xs tracking-[0.35em] uppercase text-gray-300">
                  Start Your Journey
                </span>

              </div>


              <h2 className="text-[60px] md:text-[90px] leading-[0.95] font-['test']">

                Transform
                <br />

                <span className="text-red-400">
                  Your Future
                </span>

              </h2>

            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >

              <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-10 max-w-md ml-auto">

                <p className="text-gray-300 text-lg font-['scrib'] leading-relaxed mb-8">

                  Join our industry-driven programs in additive manufacturing and
                  gain the skills required to design, prototype and innovate with
                  next-generation production technologies.

                </p>


                <Link
                  href="/contact?subject=Training+Enrollment"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-white transition"
                >

                  Enroll Now

                  <ArrowUpRightIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />

                </Link>

              </div>

            </motion.div>

          </div>

        </div>

      </section> */}

      <section className="relative overflow-hidden bg-black text-white">

  {/* VIDEO */}
  <div className="absolute inset-0 -z-30 overflow-hidden">

    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_24fps.mp4"
        type="video/mp4"
      />
    </video>

  </div>

  {/* OVERLAYS */}
  <div className="absolute inset-0 -z-20 bg-black/80" />

  <div
    className="absolute inset-0 -z-10
    bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_35%)]"
  />

  {/* GRID */}
  <div
    className="absolute inset-0 -z-10 opacity-[0.12]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
      backgroundSize: "90px 90px",
    }}
  />

  <div className="relative z-10 px-5 py-8 sm:px-8 lg:px-10">

    {/* TOP STRIP */}
    <div
      className="flex items-center justify-between
      border-y border-white/10 py-5
      font-mono text-[10px]
      uppercase tracking-[0.28em]"
    >

      <span className="text-red-400">
        Galactic 3D / Enrollment Portal
      </span>

      <div className="flex items-center gap-3">

        <div className="h-2 w-2 rounded-full bg-red-500" />

        <span className="text-white/40">
          Applications Open
        </span>

      </div>

    </div>

    {/* MAIN SYSTEM */}
    <div className="mt-10 grid gap-5 lg:grid-cols-12">

      {/* LEFT SYSTEM */}
      <div className="space-y-5 lg:col-span-7">

        {/* MAIN PANEL */}
        <div
          className="relative overflow-hidden
          rounded-[2.5rem]
          border border-white/10
          bg-black/40 backdrop-blur-xl"
        >

          <div className="grid lg:grid-cols-[1fr_240px]">

            {/* CONTENT */}
            <div className="p-8 sm:p-10 lg:p-12">

              <div className="mb-10 flex items-center gap-4">

                <div className="h-px w-14 bg-red-500" />

                <span
                  className="font-mono text-[10px]
                  uppercase tracking-[0.3em]
                  text-red-400"
                >
                  Start Your Journey
                </span>

              </div>

              <h2
                className="max-w-3xl
                text-5xl font-black
                leading-[0.9]
                tracking-[-0.06em]
                sm:text-7xl"
              >
                Learn additive
                manufacturing
                by actually
                building things.
              </h2>

              <p
                className="mt-10 max-w-xl
                text-base leading-8
                text-white/55"
              >
                Work with industrial systems,
                real workflows, and hands-on
                manufacturing processes designed
                around practical learning.
              </p>

            </div>

            {/* STATUS */}
            <div
              className="border-t border-white/10
              bg-white/[0.03]
              p-8 lg:border-l lg:border-t-0"
            >

              <p
                className="font-mono text-[10px]
                uppercase tracking-[0.22em]
                text-white/35"
              >
                Current Intake
              </p>

              <div className="mt-10 space-y-8">

                {[
                  ["Programs", "06 Active"],
                  ["Mode", "Offline"],
                  ["Level", "Industry"],
                ].map(([title, value]) => (

                  <div
                    key={title}
                    className="border-b border-white/10 pb-5"
                  >

                    <p
                      className="font-mono text-[10px]
                      uppercase tracking-[0.18em]
                      text-white/35"
                    >
                      {title}
                    </p>

                    <p className="mt-3 text-lg text-white">
                      {value}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM MODULES */}
        <div className="grid gap-5 sm:grid-cols-3">

          {[
            [
              "Hands-On",
              "Real machine operation and fabrication workflows.",
            ],
            [
              "Industry Ready",
              "Built around practical manufacturing systems.",
            ],
            [
              "Project Based",
              "Learn through real-world implementation.",
            ],
          ].map(([title, desc]) => (

            <div
              key={title}
              className="rounded-[2rem]
              border border-white/10
              bg-white/[0.03]
              p-6 backdrop-blur-xl"
            >

              <div className="mb-6 h-2 w-2 rounded-full bg-red-500" />

              <h3
                className="text-2xl font-black
                tracking-[-0.04em]"
              >
                {title}
              </h3>

              <p
                className="mt-4 text-sm
                leading-7 text-white/50"
              >
                {desc}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-5 lg:col-span-5">

        {/* VIDEO FRAGMENT */}
        <div
          className="relative overflow-hidden
          rounded-[2.5rem]
          border border-white/10"
        >

          <div className="relative h-[420px] overflow-hidden">

            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_24fps.mp4"
                type="video/mp4"
              />
            </video>

            <div
              className="absolute inset-0
              bg-gradient-to-t from-black
              via-black/30 to-transparent"
            />

          </div>

          {/* FLOATING LABEL */}
          <div
            className="absolute left-6 top-6
            rounded-full border border-white/10
            bg-black/45 px-5 py-3
            backdrop-blur-xl"
          >

            <span
              className="font-mono text-[10px]
              uppercase tracking-[0.22em]
              text-red-300"
            >
              Live Training Environment
            </span>

          </div>

        </div>

        {/* ACTION PANEL */}
        <div
          className="rounded-[2.5rem]
          border border-white/10
          bg-[#0a0a0a]
          p-6"
        >

          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10">

            {[
              {
                title: "Apply Now",
                desc: "Start enrollment",
                href: "/contact?subject=Training+Enrollment",
              },
              {
                title: "Download Brochure",
                desc: "Program details",
                href: "/brochure.pdf",
              },
              {
                title: "Contact Team",
                desc: "Talk to us",
                href: "/contact",
              },
            ].map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center
                justify-between bg-black/70
                p-6 transition hover:bg-red-600"
              >

                <div>

                  <p
                    className="font-mono text-[10px]
                    uppercase tracking-[0.2em]
                    text-white/35 group-hover:text-white/70"
                  >
                    {item.desc}
                  </p>

                  <h3
                    className="mt-3 text-2xl
                    font-black tracking-[-0.04em]"
                  >
                    {item.title}
                  </h3>

                </div>

                <ArrowUpRightIcon
                  className="h-5 w-5
                  transition duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1"
                />

              </Link>

            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}

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
        <span className="h-[1px] w-14 bg-red-500"/>
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

      <section className="relative py-28 bg-black overflow-hidden">
  <div className="container mx-auto px-8">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 max-w-3xl"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[1px] w-14 bg-red-500" />
        <p className="text-xs tracking-[0.35em] uppercase text-red-400 font-['dena']">
          Our Philosophy
        </p>
      </div>

      <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1]">
        The Principles
        <br />
        That Drive Us
      </h2>
    </motion.div>


    {/* Awwwards Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* BIG FEATURE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 group relative h-[420px] overflow-hidden rounded-2xl"
      >

        <img
          src="/Training/mentorship.jpg"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-10 left-10 max-w-lg">
          <Lightbulb className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-4xl font-['test'] mb-4">Mentorship</h3>
          <p className="text-gray-300 font-['scrib'] leading-relaxed">
            Expert guidance from professionals with deep experience in
            additive manufacturing, product design, and advanced engineering.
          </p>
        </div>

      </motion.div>


      {/* Competence */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        className="group relative h-[420px] overflow-hidden rounded-2xl"
      >

        <img
          src="/Training/competence.png"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-10 left-8 right-8">
          <Target className="w-8 h-8 text-red-400 mb-4" />
          <h3 className="text-3xl font-['test'] mb-3">Competence</h3>
          <p className="text-gray-300 font-['scrib'] text-sm">
            Build real skills with hands-on training and
            industry-standard additive manufacturing tools.
          </p>
        </div>

      </motion.div>


      {/* Empowerment */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        viewport={{ once: true }}
        className="group relative w-[87vw] h-[420px] overflow-hidden rounded-2xl"
      >

        <img
          src="/aboutgrp.jpg"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-10 left-8 right-8">
          <Award className="w-8 h-8 text-green-400 mb-4" />
          <h3 className="text-3xl font-['test'] mb-3">Empowerment</h3>
          <p className="text-gray-300 font-['scrib'] text-sm">
            Empower learners to innovate and lead the future
            of advanced manufacturing.
          </p>
        </div>

      </motion.div>

    </div>


    {/* Mission + Vision */}
    <div className="grid md:grid-cols-2 gap-12 mt-24">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative p-10 border border-white/10 rounded-2xl bg-white/[0.02]"
      >
        <p className="text-xs tracking-[0.35em] text-red-400 uppercase mb-4">
          Mission
        </p>

        <h3 className="text-3xl font-['test'] mb-4">
          Building Future Innovators
        </h3>

        <p className="text-gray-400 font-['scrib'] leading-relaxed">
          Foster the next generation of innovators and leaders in advanced
          manufacturing through world-class education, training and hands-on
          experience.
        </p>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative p-10 border border-white/10 rounded-2xl bg-white/[0.02]"
      >
        <p className="text-xs tracking-[0.35em] text-red-400 uppercase mb-4">
          Vision
        </p>

        <h3 className="text-3xl font-['test'] mb-4">
          Transforming Manufacturing Education
        </h3>

        <p className="text-gray-400 font-['scrib'] leading-relaxed">
          Make additive manufacturing an integral part of modern education,
          enabling innovators to lead sustainable industrial transformation.
        </p>
      </motion.div>

    </div>

  </div>
</section>

      {/* WHY CHOOSE US */}
      {/* <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['test'] mb-4">
              Why Choose Us
            </h2>
            <div className="h-1 w-24 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-400 font-['scrib'] text-lg max-w-3xl mx-auto">
              We provide comprehensive training programs backed by industry
              expertise, cutting-edge facilities, and a commitment to your
              success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Industry-Aligned Curriculum",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
                alt: "Professional curriculum and learning materials",
                color: "blue",
              },
              {
                title: "State-of-the-Art Facilities",
                image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8d8?q=80&w=1600&auto=format&fit=crop",
                alt: "Modern 3D printing facility",
                color: "red",
              },
              {
                title: "Expert Trainers & Real Projects",
                image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1600&auto=format&fit=crop",
                alt: "Expert trainers guiding students",
                color: "green",
              },
              {
                title: "Internships & Placement Support",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
                alt: "Career growth and opportunities",
                color: "purple",
              },
            ].map((item, idx) => {
              const colorClasses = {
                blue: "border-blue-500/30 hover:border-blue-500/60",
                red: "border-red-500/30 hover:border-red-500/60",
                green: "border-green-500/30 hover:border-green-500/60",
                purple: "border-purple-500/30 hover:border-purple-500/60",
              };
              const overlayColors = {
                blue: "group-hover:from-blue-900/90",
                red: "group-hover:from-red-900/90",
                green: "group-hover:from-green-900/90",
                purple: "group-hover:from-purple-900/90",
              };
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border ${colorClasses[item.color]} transition-all duration-500 h-80`}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 ${overlayColors[item.color]} transition-all duration-500`} />
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <h3 className="text-2xl font-['test'] text-white leading-tight">
                        {item.title}
                      </h3>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-white/80" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="relative py-28 bg-black">
  <div className="container mx-auto px-8">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mb-20"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[1px] w-14 bg-red-500"/>
        <p className="text-xs tracking-[0.35em] uppercase text-red-400 font-['dena']">
          Why Choose Us
        </p>
      </div>

      <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
        Training Built
        <br/>
        For Real Industry
      </h2>

      <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed">
        Comprehensive additive manufacturing training supported by
        modern labs, real engineering projects and direct industry exposure.
      </p>
    </motion.div>


    {/* Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* FEATURE CARD */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        className="lg:col-span-2 group relative h-[420px] rounded-2xl overflow-hidden"
      >

        <img
          src="/Training/facility.png"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>

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



      {/* CARD 2 */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        className="group relative h-[420px] rounded-2xl overflow-hidden"
      >

        <img
          src="/Training/curriculum.png"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>

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



      {/* CARD 3 */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        className="group relative h-[340px] rounded-2xl overflow-hidden"
      >

        <img
          src="/Training/experts.png"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>

        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-['test'] text-white">
            Expert Trainers
          </h3>
        </div>

      </motion.div>



      {/* CARD 4 */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        className="group relative h-[340px] rounded-2xl overflow-hidden lg:col-span-2"
      >

        <img
          src="/Training/room.png"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>

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
</section>

      {/* SCHOOL'S PROGRAM */}
      {/* <section className="relative py-20 md:py-32 bg-white/[0.02]">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/10 w-14 h-14 rounded-sm flex items-center justify-center">
                <GraduationCap
                  className="w-7 h-7 text-blue-400"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-['test']">
                School's Program
              </h2>
            </div>
            <div className="h-1 w-24 bg-blue-500 mb-6"></div>
            <p className="text-gray-400 font-['scrib'] text-lg max-w-4xl leading-relaxed">
              Our school training introduces students to age-appropriate 3D
              printing learning modules through hands-on, STREAM-based learning.
              It nurtures creativity, problem-solving, and technical skills,
              preparing young minds for future careers in technology and
              innovation for real-world applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                level: "Level 1",
                title: "3D Printing Designer (Consumer)",
                description: "Introduces students to 3D design fundamentals, enabling them to create basic consumer-friendly models for everyday use.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
                alt: "Students learning 3D design",
              },
              {
                level: "Level 2",
                title: "3D Printing Technology & Operation",
                description: "Students gain hands-on experience with 3D printing data preparation techniques & machine operation.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
                alt: "Hands-on 3D printer operation",
              },
              {
                level: "Level 3",
                title: "3D Printing Application Developer",
                description: "Focuses on 3D printing applications for home decor, automotive, drone & lifestyle.",
                image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1600&auto=format&fit=crop",
                alt: "3D printing applications",
              },
              {
                level: "Level 4",
                title: "3D Innovator",
                description: "Equips students in designing & developing their own 3D printer for multiple purposes.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
                alt: "Advanced 3D printer development",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-500 h-96"
              >
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-blue-900/90 transition-all duration-500" />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="mb-4"
                  >
                    <div className="inline-block bg-blue-500/20 backdrop-blur-xl border border-blue-400/40 rounded-full px-4 py-1.5">
                      <span className="text-sm font-bold text-blue-300 tracking-wide">
                        {item.level}
                      </span>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-['test'] mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 font-['scrib'] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
                  className="absolute top-4 right-4 w-12 h-12 border-2 border-blue-400/30 rounded-full flex items-center justify-center backdrop-blur-xl bg-blue-500/10"
                >
                  <GraduationCap className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative py-28 bg-black overflow-hidden">

  <div className="container mx-auto px-8">

    {/* HEADER */}
    <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="max-w-4xl mb-20"
    >
      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 rounded-xl flex items-center justify-center">
          <AcademicCapIcon className="w-7 h-7 text-blue-400"/>
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-blue-400 font-['dena']">
          Schools Program
        </p>

      </div>

      <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
        Inspiring Young
        <br/>
        3D Innovators
      </h2>

      <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-3xl">
        Our STREAM-based learning programs introduce students to additive
        manufacturing through hands-on modules designed to nurture
        creativity, engineering thinking and real-world problem solving.
      </p>

    </motion.div>



    {/* STAGGERED GRID */}
    <div className="grid md:grid-cols-2 gap-10">

      {[
        {
          level:"Level 1",
          title:"3D Printing Designer",
          description:"Students learn fundamental 3D design skills to create functional everyday objects.",
          image:"/dragon.png",
          size:"large"
        },
        {
          level:"Level 2",
          title:"Technology & Operation",
          description:"Hands-on training in data preparation and machine operation.",
          image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
          size:"small"
        },
        {
          level:"Level 3",
          title:"Application Developer",
          description:"Students explore real-world applications from automotive to drone technology.",
          image:"https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1600&auto=format&fit=crop",
          size:"small"
        },
        {
          level:"Level 4",
          title:"3D Innovator",
          description:"Students design and build their own 3D printer systems.",
          image:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
          size:"large"
        },
      ].map((item,idx)=>{

        const height = item.size === "large" ? "h-[420px]" : "h-[320px]";

        return(

        <motion.div
          key={idx}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:idx*0.1}}
          className={`group relative ${height} overflow-hidden rounded-2xl`}
        >

          {/* IMAGE */}
          <img
            src={item.image}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>


          {/* GLASS CONTENT */}
          <div className="absolute bottom-6 left-6 right-6">

            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl p-6 transition group-hover:bg-white/[0.08]">

              {/* level tag */}
              <div className="flex items-center justify-between mb-3">

                <span className="text-xs tracking-[0.25em] text-blue-400 uppercase font-['dena']">
                  {item.level}
                </span>

                <ArrowUpRightIcon className="w-5 h-5 text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/>

              </div>

              <h3 className="text-xl font-['test'] text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm font-['scrib'] leading-relaxed">
                {item.description}
              </p>

            </div>

          </div>


          {/* ICON */}
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 flex items-center justify-center">

            <AcademicCapIcon className="w-6 h-6 text-blue-400"/>

          </div>

        </motion.div>

        )
      })}

    </div>

  </div>

</section>

      {/* INSTITUTION'S PROGRAM */}
      {/* <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-500/10 w-14 h-14 rounded-sm flex items-center justify-center">
                <Building2
                  className="w-7 h-7 text-purple-400"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-['test']">
                Institution's Program
              </h2>
            </div>
            <div className="h-1 w-24 bg-purple-500 mb-6"></div>
            <p className="text-gray-400 font-['scrib'] text-lg max-w-4xl leading-relaxed">
              The program introduces 3D printing, fosters skills through
              hands-on learning with a comprehensive curriculum, and guides
              students from design basics to advanced Additive manufacturing
              machine building for future tech opportunities which is Industry
              relevant & Career Focused.
            </p>
          </motion.div>

          <div className="space-y-6">
            {institutionLevels.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 rounded-sm p-8 backdrop-blur transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-500/10 rounded-sm px-4 py-1.5 border border-purple-500/30">
                    <span className="text-sm  text-purple-300 tracking-wide">
                      {item.level}
                    </span>
                  </div>
                  <h3 className="text-2xl  text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.topics.map((topic, tidx) => (
                    <li
                      key={tidx}
                      className="flex items-start gap-3 text-gray-400 font-['scrib']"
                    >
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative py-28 bg-black overflow-hidden">

  <div className="container mx-auto px-8">

    {/* HEADER */}
    <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="max-w-4xl mb-24"
    >
      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 bg-purple-500/10 backdrop-blur-xl border border-purple-400/30 rounded-xl flex items-center justify-center">
          <BuildingOffice2Icon className="w-7 h-7 text-purple-400"/>
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-purple-400 font-['dena']">
          Institution Program
        </p>

      </div>

      <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
        Industry Ready
        <br/>
        Additive Manufacturing
      </h2>

      <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-3xl">
        A structured program designed to guide students from design
        fundamentals to advanced additive manufacturing machine development
        aligned with real industry needs.
      </p>

    </motion.div>


    {/* PROGRAM LEVELS */}
    <div className="space-y-24">

      {institutionLevels.map((item,idx)=>{

        const reverse = idx % 2 !== 0

        return(

        <motion.div
          key={idx}
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className={`grid md:grid-cols-2 gap-16 items-center`}
        >

          {/* IMAGE */}
          <div className={`${reverse ? "md:order-2":""} relative group`}>

            <div className="relative h-[420px] rounded-2xl overflow-hidden">

              <img
                src={`https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>

            </div>

          </div>



          {/* GLASS CONTENT */}
          <div className={`${reverse ? "md:order-1":""}`}>

            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-10 relative group hover:bg-white/[0.06] transition">

              {/* level */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-xs tracking-[0.35em] uppercase text-purple-400 font-['dena']">
                  {item.level}
                </span>

                <ArrowUpRightIcon className="w-5 h-5 text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/>

              </div>


              {/* title */}
              <h3 className="text-3xl font-['test'] text-white mb-6">
                {item.title}
              </h3>


              {/* topics */}
              <ul className="grid md:grid-cols-2 gap-4">

                {item.topics.map((topic,tidx)=>(
                  <li
                    key={tidx}
                    className="flex items-start gap-3 text-gray-400 font-['scrib'] text-sm"
                  >

                    <CheckCircleIcon className="w-5 h-5 text-purple-400 mt-[2px] flex-shrink-0"/>

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

</section>

      {/* INDUSTRY PROGRAM */}
      {/* <section className="relative py-20 md:py-32 bg-white/[0.02]">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 w-14 h-14 rounded-sm flex items-center justify-center">
                <Factory className="w-7 h-7 text-red-400" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-['test']">
                Industry Program
              </h2>
            </div>
            <div className="h-1 w-24 bg-red-500 mb-6"></div>
            <p className="text-gray-400 font-['scrib'] text-lg max-w-4xl leading-relaxed">
              Our Industry-Specific training equips professionals with practical
              expertise and hands-on training in Additive Manufacturing, from
              design to machine operations and post-processing. Tailored for
              SME/MSME needs with Expert-Led learning, it drives innovation,
              efficiency, and real-world AM implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certifications in Additive Manufacturing",
                description: "Specialized courses for professionals to enhance their skills in specific areas of AM, including DFAM, material for AM, and applications.",
                duration: "6 months",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
                alt: "Professional certification training",
              },
              {
                title: "Executive Certifications",
                description: "Designed for industry leaders, this program offers high-level insights into the strategic use of Additive Manufacturing.",
                duration: "3/6/9 months",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
                alt: "Executive leadership training",
              },
              {
                title: "Industry-Specific Training",
                description: "Tailored training for industries such as aerospace, automotive, and healthcare, focusing on applications of AM in each sector.",
                duration: "As per the requirement",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
                alt: "Industry-specific AM training",
              },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img
                    src={program.image}
                    alt={program.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-red-900/90 transition-all duration-500" />
                </div>

                <div className="relative z-10 p-8 min-h-[400px] flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <h3 className="text-2xl font-['test'] mb-4 text-white group-hover:text-red-300 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-200 font-['scrib'] mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-xl border border-red-400/40 rounded-full px-5 py-2">
                      <Cog className="w-5 h-5 text-red-400" strokeWidth={1.5} />
                      <span className="text-sm font-bold text-red-300 tracking-wide">
                        Duration: {program.duration}
                      </span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute top-4 right-4 w-14 h-14 bg-red-500/20 backdrop-blur-xl border-2 border-red-400/40 rounded-full flex items-center justify-center"
                >
                  <Factory className="w-7 h-7 text-red-400" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="relative py-28 bg-black">

  <div className="container mx-auto px-8">

    {/* HEADER */}
    <motion.div
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="max-w-4xl mb-24"
    >

      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 bg-red-500/10 border border-red-400/30 backdrop-blur-xl rounded-xl flex items-center justify-center">
          <BuildingOffice2Icon className="w-7 h-7 text-red-400"/>
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-red-400 font-['dena']">
          Industry Program
        </p>

      </div>

      <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
        Training Built
        <br/>
        For Industry
      </h2>

      <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-3xl">
        Industry-specific programs designed to help professionals and
        organizations implement additive manufacturing across design,
        production and post-processing workflows.
      </p>

    </motion.div>



    {/* TIMELINE */}
    <div className="relative">

      {/* vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10"/>


      <div className="space-y-16">

        {[
          {
            title:"Certifications in Additive Manufacturing",
            description:"Specialized courses covering DFAM, AM materials and advanced applications.",
            duration:"6 months",
            image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
          },
          {
            title:"Executive Certifications",
            description:"Strategic insights into additive manufacturing adoption for leadership teams.",
            duration:"3 / 6 / 9 months",
            image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
          },
          {
            title:"Industry Specific Training",
            description:"Customized training for aerospace, automotive and healthcare sectors.",
            duration:"Custom duration",
            image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
          }
        ].map((program,idx)=>(
          
        <motion.div
          key={idx}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:idx*0.1}}
          className="relative flex items-start gap-10"
        >

          {/* timeline icon */}
          <div className="relative z-10">

            <div className="w-12 h-12 bg-red-500/10 border border-red-400/40 backdrop-blur-xl rounded-full flex items-center justify-center">
              <Cog8ToothIcon className="w-6 h-6 text-red-400"/>
            </div>

          </div>



          {/* CARD */}
          <div className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            {/* IMAGE */}
            <div className="relative h-[220px] overflow-hidden">

              <img
                src={program.image}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"/>

            </div>


            {/* CONTENT */}
            <div className="p-8">

              <div className="flex items-center justify-between mb-4">

                <h3 className="text-2xl font-['test'] text-white">
                  {program.title}
                </h3>

                <ArrowUpRightIcon className="w-5 h-5 text-white/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/>

              </div>


              <p className="text-gray-400 font-['scrib'] leading-relaxed mb-6">
                {program.description}
              </p>


              {/* duration */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-400/30 backdrop-blur-xl">

                <ClockIcon className="w-4 h-4 text-red-400"/>

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

</section>

      {/* CORE TEAM */}
      {/* <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-['test'] mb-4">
              Our Expert Team
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 max-w-6xl mx-auto"
          >
          
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
                alt="Expert team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/30 via-transparent to-orange-900/30" />
            </div>

        
            <div className="relative z-10 p-16">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex items-center justify-center mb-10"
              >
                <div className="bg-yellow-500/20 w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-yellow-400/40 backdrop-blur-xl">
                  <Users
                    className="w-12 h-12 text-yellow-400"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-100 font-['scrib'] text-xl mb-10 text-center leading-relaxed max-w-4xl mx-auto"
              >
                A highly qualified expert team with 30+ years of combined
                experience, including Ph.D. holders, M.Tech graduates, and
                industry professionals, specializing in advanced manufacturing
                technologies and fostering innovation in training and curating
                course content.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-xl border-2 border-yellow-400/40 rounded-full px-8 py-4"
                >
                  <Shield className="w-6 h-6 text-yellow-400" strokeWidth={1.5} />
                  <span className="font-bold text-yellow-300 tracking-wide">
                    EOS Approved
                  </span>
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-xl border-2 border-yellow-400/40 rounded-full px-8 py-4"
                >
                  <Award className="w-6 h-6 text-yellow-400" strokeWidth={1.5} />
                  <span className="font-bold text-yellow-300 tracking-wide">
                    Board of Studies Certified
                  </span>
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-10 -left-10 w-40 h-40 border border-yellow-400/20 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-10 -right-10 w-32 h-32 border border-yellow-400/20 rounded-full"
            />
          </motion.div>
        </div>
      </section> */}

      <section className="relative py-28 bg-black overflow-hidden">
  <div className="container mx-auto px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center backdrop-blur-xl">
            <UserGroupIcon className="w-7 h-7 text-yellow-400"/>
          </div>

          <p className="text-xs tracking-[0.35em] uppercase text-yellow-400 font-['dena']">
            Our Team
          </p>
        </div>

        <h2 className="text-5xl md:text-6xl font-['test'] leading-[1.1] mb-6">
          Experts Behind
          <br/>
          The Training
        </h2>

        <p className="text-gray-400 font-['scrib'] text-lg leading-relaxed max-w-xl mb-10">
          Our team combines academic research with industrial expertise.
          With decades of combined experience in additive manufacturing,
          they design programs that bridge theory and real-world production.
        </p>

        {/* badges */}
        <div className="flex flex-wrap gap-4">

          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl">
            <ShieldCheckIcon className="w-5 h-5 text-yellow-400"/>
            <span className="text-sm text-gray-200 font-['dena']">
              EOS Approved
            </span>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl">
            <AcademicCapIcon className="w-5 h-5 text-yellow-400"/>
            <span className="text-sm text-gray-200 font-['dena']">
              Board of Studies Certified
            </span>
          </div>

        </div>

      </motion.div>



      {/* RIGHT SIDE GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          {/* image */}
          <div className="h-[420px] relative overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"/>
          </div>


          {/* overlay content */}
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
</section>

      {/* FINAL CTA */}
      {/* <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-red-500/10 border border-red-500/30 rounded-sm px-6 py-2">
              <Zap className="w-5 h-5 text-red-400" strokeWidth={1.5} />
              <span className="text-sm  text-red-300 tracking-widest uppercase">
                Start Your Journey
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-['test'] mb-6 leading-tight">
              Ready to Transform
              <br />
              Your Future?
            </h2>

            <p className="text-gray-300 font-['scrib'] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our world-class training programs in Additive Manufacturing
              and become part of the next generation of innovators.
            </p>

            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Link
                href="/contact?subject=Training+Enrollment"
                className="group bg-red-600 hover:bg-red-700 text-white  px-10 py-5 rounded-sm transition-all duration-300 shadow-xl hover:shadow-red-500/50 flex items-center gap-3"
              >
                <span>Enroll Now</span>
                <TrendingUp
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  strokeWidth={1.5}
                />
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="relative py-40 overflow-hidden">

  {/* VIDEO */}
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

  {/* subtle gradient */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />


  <div className="container mx-auto px-8 relative z-10">

    <div className="grid lg:grid-cols-2 items-center gap-20">

      {/* LEFT SIDE — MASSIVE TYPOGRAPHY */}
      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >

        <div className="flex items-center gap-3 mb-8">

          <BoltIcon className="w-6 h-6 text-red-400"/>

          <span className="text-xs tracking-[0.35em] uppercase text-gray-300">
            Start Your Journey
          </span>

        </div>


        <h2 className="text-[60px] md:text-[90px] leading-[0.95] font-['test']">

          Transform
          <br/>

          <span className="text-red-400">
            Your Future
          </span>

        </h2>

      </motion.div>



      {/* RIGHT SIDE — FLOATING GLASS CTA */}
      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{delay:0.2}}
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

            <ArrowUpRightIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/>

          </Link>

        </div>

      </motion.div>

    </div>

  </div>

</section>
    </main>
  );
}

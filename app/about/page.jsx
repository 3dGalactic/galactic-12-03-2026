'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EyeIcon, RocketLaunchIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { Users, Award, Building, Briefcase, Handshake, ArrowRight, CheckCircle, ExternalLink, Linkedin, ChevronRight } from 'lucide-react'

export default function About() {
  // State for active timeline item
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

  // Timeline data
  const timelineItems = [
    { year: 2018, title: 'Founded', description: 'Galactic 3D was established with a vision to revolutionize additive manufacturing.' },
    { year: 2019, title: 'First Product Launch', description: 'Released our flagship metal 3D printer, setting new industry standards.' },
    { year: 2020, title: 'Global Expansion', description: 'Opened offices in Europe and Asia to serve international clients.' },
    { year: 2021, title: 'Industry Partnership', description: 'Formed strategic alliance with aerospace and automotive leaders.' },
    { year: 2022, title: 'Innovation Award', description: 'Received the Global Additive Manufacturing Innovation Award.' },
    { year: 2023, title: 'Sustainability Initiative', description: 'Launched eco-friendly materials and carbon-neutral production.' },
  ]

  return (
    <main className="text-white">
      {/* HERO / INTRO */}
      {/* <section className="relative min-h-[70vh] pt-28 pb-16 flex items-end overflow-hidden">
        
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/80" />
          <div className="absolute -inset-40 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(185,28,28,0.20),transparent_60%)]" />
          <div className="absolute -inset-40 bg-[radial-gradient(700px_circle_at_80%_20%,rgba(255,255,255,0.06),transparent_65%)] animate-spin-slow" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6">About Galactic 3D</h1>
            <p className="text-xl md:text-2xl font-['scrib'] text-red-50/90 max-w-3xl mb-8">Pioneering the future of Additive Manufacturing.</p>
            <Link href="#our-story" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-['dena'] px-6 py-3 rounded-md transition">
              Join Our Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      <section className="relative min-h-[85vh] flex items-end overflow-hidden pt-32 pb-20">

        {/* VIDEO BACKGROUND */}

        <div className="absolute inset-0 -z-30">
          <video
            className="w-full h-full object-cover scale-[1.05]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop"
          >
            <source src="/galactic-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CINEMATIC OVERLAYS */}

        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="absolute inset-0 -z-10 pointer-events-none">

          <div className="absolute -inset-40 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(185,28,28,0.25),transparent_60%)]" />

          <div className="absolute -inset-40 bg-[radial-gradient(700px_circle_at_85%_20%,rgba(255,255,255,0.06),transparent_65%)] animate-spin-slow" />

        </div>

        {/* CONTENT */}

        <div className="container mx-auto px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black/30"
          >

            <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6 text-white tracking-tight">
              About Galactic 3D
            </h1>

            <p className="text-xl md:text-2xl font-['scrib'] text-red-50/90 mb-10">
              Pioneering the future of Additive Manufacturing.
            </p>

            <Link
              href="#our-story"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-['dena'] px-7 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Join Our Journey
              <ArrowRight className="w-5 h-5" />
            </Link>

          </motion.div>

        </div>

      </section>


      {/* OUR STORY & HISTORY */}
      {/* <section id="our-story" className="py-20 bg-dark-300 relative overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent opacity-60"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story & History
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50"></div>

              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative pl-12 pb-10 cursor-pointer ${index === activeTimelineItem ? 'opacity-100' : 'opacity-60'}`}
                  onClick={() => setActiveTimelineItem(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: index === activeTimelineItem ? 1 : 0.6, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${index === activeTimelineItem ? 'bg-primary' : 'bg-dark-200'}`}>
                    <span className="text-xs font-['dena']">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-['test'] mb-2">{item.title}</h3>
                  <p className="text-white/70 font-['scrib']">{item.description}</p>
                </motion.div>
              ))}
            </div>

          
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-dark-200/50 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-['test'] mb-6 text-primary">Our Journey</h3>
              <p className="mb-4 font-['scrib'] text-white/80">
                Founded in 2018 by a team of engineers and designers with a shared vision, Galactic 3D began as a small startup with big dreams. Our founders recognized the untapped potential of additive manufacturing to revolutionize how products are designed, prototyped, and manufactured.
              </p>
              <p className="mb-4 font-['scrib'] text-white/80">
                What started as a research project in a university lab has grown into a global leader in advanced manufacturing solutions. Through relentless innovation and strategic partnerships, we've expanded our capabilities and reach year after year.
              </p>
              <p className="mb-6 font-['scrib'] text-white/80">
                Today, Galactic 3D stands at the forefront of the industry, pushing the boundaries of what's possible with 3D printing technology. Our journey continues as we explore new materials, develop more efficient processes, and create solutions that empower our clients to bring their most ambitious ideas to life.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Link href="/company-history" className="inline-flex font-['dena'] items-center hover:underline">
                  <span>Read our full history</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section id="our-story" className="relative py-36 bg-[#0b0b0c] overflow-hidden">

        <div className="max-w-7xl mx-auto px-10">

          {/* Title */}

          <motion.h2
            className="text-5xl md:text-6xl font-['dena'] mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story & History
          </motion.h2>

          <div className="grid lg:grid-cols-[380px_1fr] gap-20 items-start">

            {/* Timeline navigation */}

            <div className="flex flex-col gap-10">

              {timelineItems.map((item, index) => (

                <div
                  key={index}
                  onClick={() => setActiveTimelineItem(index)}
                  className={`cursor-pointer transition ${index === activeTimelineItem
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                    }`}
                >

                  <div className="text-primary text-sm font-['dena'] mb-1">
                    {item.year}
                  </div>

                  <h3 className="text-xl font-['test']">
                    {item.title}
                  </h3>

                </div>

              ))}

            </div>

            {/* Image story panel */}

            <motion.div
              key={activeTimelineItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >

              {/* image */}

              <img
                src={timelineItems[activeTimelineItem].image}
                className="rounded-3xl w-full h-[520px] object-cover"
              />

              {/* dark overlay */}

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* text panel */}

              <div className="absolute bottom-0 p-10 max-w-xl">

                <p className="text-white/80 font-['scrib'] mb-6">
                  {timelineItems[activeTimelineItem].description}
                </p>

                <Link
                  href="/company-history"
                  className="text-primary font-['dena'] hover:underline flex items-center gap-2"
                >
                  Read our full history
                  <ChevronRight className="w-4 h-4" />
                </Link>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* VISION & MISSION */}
      {/* <section className="py-24 bg-dark-200 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-full h-full rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full rounded-full bg-gradient-to-l from-secondary/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-0 bg-dark-200/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Vision & Mission
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-['test']">Our Vision</h3>
              </div>
              <p className="mb-6 text-white/80 font-['scrib']">
                To lead the global transformation of manufacturing through innovative additive technologies that enable sustainable, efficient, and limitless creation.
              </p>
              <p className="text-white/80 font-['scrib']">
                We envision a future where additive manufacturing is the cornerstone of production across industries, where design constraints are eliminated, and where customization at scale is the norm rather than the exception.
              </p>
              <p className="mt-6 text-white/80 font-['scrib']">
                By pioneering advanced materials, intelligent systems, and accessible platforms, we aim to democratize manufacturing and empower creators worldwide to bring their ideas to life with unprecedented speed and precision.
              </p>
            </motion.div>

            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Building className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-['test']">Our Mission</h3>
              </div>
              <p className="mb-6 text-white/80 font-['scrib']">
                To deliver cutting-edge additive manufacturing solutions that solve complex challenges and create new possibilities for our clients and partners.
              </p>
              <ul className="space-y-4 font-['scrib']">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Develop and deploy next-generation 3D printing technologies that set new standards for speed, precision, and material capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Foster a culture of continuous innovation through research, collaboration, and knowledge sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Provide exceptional service and support that empowers our clients to maximize the potential of additive manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">Lead the industry in sustainable practices and environmentally responsible manufacturing solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="relative py-36 bg-[#0b0b0c] overflow-hidden">

        {/* ambient background */}

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[160px]"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[160px]"></div>

        </div>

        <div className="max-w-6xl mx-auto px-10 relative z-10">

          {/* TITLE */}

          <motion.h2
            className="text-5xl md:text-6xl font-['dena'] mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Vision & Mission
          </motion.h2>

          <div className="flex flex-col gap-32">

            {/* VISION */}

            <motion.div
              className="max-w-3xl backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-3xl p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <EyeIcon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-3xl font-['test']">
                  Our Vision
                </h3>

              </div>

              <p className="text-white/80 font-['scrib'] leading-relaxed text-lg">
                To lead the global transformation of manufacturing through innovative additive technologies that enable sustainable, efficient, and limitless creation.
              </p>

              <p className="text-white/70 font-['scrib'] leading-relaxed mt-6">
                We envision a future where additive manufacturing is the cornerstone of production across industries — eliminating design constraints and enabling customization at scale.
              </p>

            </motion.div>

            {/* MISSION */}

            <motion.div
              className="ml-auto max-w-3xl backdrop-blur-xl bg-white/[0.05] border border-white/10 rounded-3xl p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <RocketLaunchIcon className="w-6 h-6 text-secondary" />
                </div>

                <h3 className="text-3xl font-['test']">
                  Our Mission
                </h3>

              </div>

              <ul className="space-y-5 font-['scrib'] text-white/80 text-lg">

                <li className="flex gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-1" />
                  Develop next-generation 3D printing technologies that redefine speed, precision and material capabilities.
                </li>

                <li className="flex gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-1" />
                  Foster continuous innovation through research, collaboration and knowledge sharing.
                </li>

                <li className="flex gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-1" />
                  Empower clients to unlock the full potential of additive manufacturing.
                </li>

                <li className="flex gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-1" />
                  Lead the industry toward sustainable and responsible manufacturing practices.
                </li>

              </ul>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FOUNDERS & TEAM */}
      {/* <section className="py-24 bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-dark-300/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Founders & Team
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="mb-16">
            <motion.h3
              className="text-2xl font-['test'] mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Founders
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-dark-200/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                    alt="Dr. Alexander Chen"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-['test'] mb-1">Dr. Alexander Chen</h4>
                  <p className="text-primary mb-4 font-['dena']">CEO & Co-Founder</p>
                  <p className="text-white/70 font-['scrib'] mb-4">Former aerospace engineer with 15+ years of experience in advanced manufacturing technologies.</p>
                  <div className="flex items-center gap-3">
                    <Link href="https://linkedin.com" className="text-white/60 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="/team/alexander-chen" className="text-white/60 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-200/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
                    alt="Dr. Sophia Rodriguez"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-['test'] mb-1">Dr. Sophia Rodriguez</h4>
                  <p className="text-primary mb-4 font-['dena']">CTO & Co-Founder</p>
                  <p className="text-white/70 mb-4 font-['scrib']">Materials scientist and pioneer in metal additive manufacturing with multiple patents.</p>
                  <div className="flex items-center gap-3">
                    <Link href="https://linkedin.com" className="text-white/60 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="/team/sophia-rodriguez" className="text-white/60 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-200/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
                    alt="Marcus Johnson"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-['test'] mb-1">Marcus Johnson</h4>
                  <p className="text-primary mb-4 font-['dena']">COO & Co-Founder</p>
                  <p className="text-white/70 mb-4 font-['scrib']">Former operations executive with expertise in scaling manufacturing businesses globally.</p>
                  <div className="flex items-center gap-3">
                    <Link href="https://linkedin.com" className="text-white/60 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="/team/marcus-johnson" className="text-white/60 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mb-16">
            <motion.h3
              className="text-2xl font-['test'] mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Leadership Team
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                    alt="Emily Zhang"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">Emily Zhang</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Engineering</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                    alt="David Patel"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">David Patel</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Product</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=400&auto=format&fit=crop"
                    alt="Sarah Johnson"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">Sarah Johnson</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Sales</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-dark-200/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                    alt="Michael Torres"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-['test']">Michael Torres</h4>
                  <p className="text-primary/90 text-sm mb-2 font-['dena']">VP of Research</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
                alt="Galactic 3D Team"
                fill
                style={{ objectFit: 'cover' }}
                className="brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-['test'] mb-4">Join Our Team</h3>
                <p className="text-white/80 mb-6 font-['scrib'] max-w-2xl">We're always looking for talented individuals who are passionate about pushing the boundaries of what's possible in additive manufacturing.</p>
                <Link href="/careers" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 font-['dena'] rounded-md transition">
                  View Open Positions <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="relative py-40 bg-[#0a0a0a] overflow-hidden">

        <div className="max-w-7xl mx-auto px-10">

          {/* TITLE */}

          <motion.h2
            className="text-6xl font-['dena'] mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Founders & Team
          </motion.h2>


          {/* FOUNDER 1 */}

          <motion.div
            className="grid lg:grid-cols-2 gap-20 items-center mb-40"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="relative h-[520px] rounded-3xl overflow-hidden">

              <Image
                src=""
                alt="Founder"
                fill
                className="object-cover"
              />

            </div>

            <div>

              <h3 className="text-4xl font-['test'] mb-3">
                Dr. Alexander Chen
              </h3>

              <p className="text-primary font-['dena'] mb-6">
                CEO & Co-Founder
              </p>

              <p className="text-white/70 font-['scrib'] leading-relaxed text-lg">
                Former aerospace engineer with more than fifteen years of experience
                in advanced manufacturing technologies and large-scale production systems.
              </p>

            </div>

          </motion.div>



          {/* FOUNDER 2 */}

          <motion.div
            className="grid lg:grid-cols-2 gap-20 items-center mb-40"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="order-2 lg:order-1">

              <h3 className="text-4xl font-['test'] mb-3">
                Dr. Sophia Rodriguez
              </h3>

              <p className="text-primary font-['dena'] mb-6">
                CTO & Co-Founder
              </p>

              <p className="text-white/70 font-['scrib'] leading-relaxed text-lg">
                Materials scientist and pioneer in metal additive manufacturing
                with multiple patents in industrial printing technologies.
              </p>

            </div>

            <div className="relative h-[520px] rounded-3xl overflow-hidden order-1 lg:order-2">

              <Image
                src=""
                alt="Founder"
                fill
                className="object-cover"
              />

            </div>

          </motion.div>



          {/* FOUNDER 3 */}

          <motion.div
            className="grid lg:grid-cols-[1fr_420px] gap-24 items-center mb-40"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="relative h-[520px] rounded-3xl overflow-hidden">

              <Image
                src=""
                alt="Founder"
                fill
                className="object-cover"
              />

            </div>

            <div>

              <h3 className="text-4xl font-['test'] mb-3">
                Marcus Johnson
              </h3>

              <p className="text-primary font-['dena'] mb-6">
                COO & Co-Founder
              </p>

              <p className="text-white/70 font-['scrib'] leading-relaxed text-lg">
                Operations executive with deep expertise in scaling manufacturing
                businesses across global markets.
              </p>

            </div>

          </motion.div>



    



          {/* JOIN OUR TEAM */}

          
          </div>
      </section>

      

      {/* CERTIFICATIONS & PARTNERSHIPS */}
      {/* <section className="py-20 bg-dark-200 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-['dena'] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Certifications & Partnerships
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="ISO Certification"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Aerospace Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Automotive Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Medical Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>

            <motion.div
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
                alt="Research Partner"
                width={120}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0.9) grayscale(0.5)' }}
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/partners" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-['test'] transition-colors">
              <span>View all our partners and certifications</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      <section className="py-24 bg-dark-200 relative overflow-hidden">

  {/* ambient background lighting */}

  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 blur-[140px]" />

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[140px]" />

  </div>


  <div className="max-w-6xl mx-auto px-6 relative z-10">

    {/* HEADER */}

    <div className="text-center mb-20">

      <motion.h2
        className="text-4xl md:text-5xl font-['dena'] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certifications & Partnerships
      </motion.h2>

      <p className="text-white/60 font-['scrib']">
        Trusted by industry leaders and global research partners.
      </p>

    </div>



    {/* LOGO GRID */}

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>(

        <motion.div
          key={i}
          className="relative group rounded-2xl overflow-hidden flex items-center justify-center h-28"

          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:i*0.05}}

          whileHover={{
            y:-6,
            scale:1.03
          }}
        >

          {/* glass base */}

          <div className="absolute inset-0 backdrop-blur-2xl bg-white/[0.06] border border-white/15 rounded-2xl"/>

          {/* glass highlight */}

          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-20"/>

          {/* inner glow */}

          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]"/>

          {/* logo */}

          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200"
            alt="Partner Logo"
            width={110}
            height={60}
            className="relative opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
          />

        </motion.div>

      ))}

    </div>



    {/* CTA */}

    <motion.div
      className="flex justify-center mt-16"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{duration:0.7}}
    >

      <Link
        href="/partners"
        className="flex items-center gap-2 text-primary hover:text-secondary font-['test'] text-lg transition"
      >
        View all partners
        <ArrowRight className="w-5 h-5"/>
      </Link>

    </motion.div>

  </div>

</section>

      {/* CAREERS */}
      {/* <section className="py-20 bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-dark-300/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-['test'] mb-6">Join Our Team</h2>
              <p className="text-xl text-white/80 font-['scrib'] mb-8">
                Be part of a team that's redefining what's possible in additive manufacturing. We're looking for passionate individuals who thrive on innovation and collaboration.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-['dena']">Diverse & Inclusive Culture</h3>
                    <p className="text-white/70 font-['scrib']">We celebrate diversity and create an inclusive environment where everyone can thrive.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-['dena']">Continuous Learning</h3>
                    <p className="text-white/70 font-['scrib']">We invest in your growth with ongoing training and development opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-['dena']">Competitive Benefits</h3>
                    <p className="text-white/70 font-['scrib']">Comprehensive healthcare, retirement plans, and work-life balance initiatives.</p>
                  </div>
                </div>
              </div>
              <Link href="/careers" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-['dena'] px-6 py-3 rounded-md transition">
                View Open Positions <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Galactic 3D Team Collaboration"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section> */}


      <section className="relative py-28 bg-dark-300 overflow-hidden">

  {/* Background glow */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full"></div>
    <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-secondary/20 blur-[140px] rounded-full"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.8 }}
      className="max-w-3xl mb-16"
    >
      <h2 className="text-5xl md:text-6xl font-['test'] leading-tight tracking-tight">
        Join the <span className="text-primary">Future</span> of
        <br/>Manufacturing
      </h2>

      <p className="text-xl text-white/70 mt-6 font-['scrib']">
        We're building the next frontier of additive manufacturing.
        Join a team that blends engineering, creativity, and bold
        experimentation.
      </p>
    </motion.div>


    {/* Layout */}
    <div className="grid lg:grid-cols-3 gap-8 items-start">

      {/* Left text block */}
      <motion.div
        initial={{ opacity:0, x:-40 }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.7 }}
        className="lg:col-span-1"
      >
        <p className="text-white/60 font-['scrib'] mb-8 leading-relaxed">
          At Galactic 3D we believe the next generation of engineers,
          creators, and dreamers will redefine how products are made.
          We give our team the tools, autonomy, and environment to
          push boundaries every single day.
        </p>

        <Link
          href="/careers"
          className="inline-flex items-center gap-3 bg-primary hover:bg-secondary px-7 py-3 rounded-full text-white font-['dena'] transition"
        >
          Explore Careers
          <ArrowRight className="w-5 h-5"/>
        </Link>
      </motion.div>


      {/* Glass benefits card */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.8 }}
        className="lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"
      >

        <div className="grid md:grid-cols-3 gap-8">

          <div className="group">
            <Users className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition"/>
            <h3 className="text-xl font-['dena'] mb-2">
              Inclusive Culture
            </h3>
            <p className="text-white/60 font-['scrib'] text-sm leading-relaxed">
              A diverse team where every voice contributes to shaping
              the future of manufacturing.
            </p>
          </div>

          <div className="group">
            <Award className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition"/>
            <h3 className="text-xl font-['dena'] mb-2">
              Continuous Learning
            </h3>
            <p className="text-white/60 font-['scrib'] text-sm leading-relaxed">
              Access mentorship, workshops, and cutting-edge tools
              to accelerate your career.
            </p>
          </div>

          <div className="group">
            <Handshake className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition"/>
            <h3 className="text-xl font-['dena'] mb-2">
              Meaningful Impact
            </h3>
            <p className="text-white/60 font-['scrib'] text-sm leading-relaxed">
              Work on projects that shape the future of engineering
              and advanced manufacturing.
            </p>
          </div>

        </div>

      </motion.div>

    </div>


    {/* Cinematic Image */}
    <motion.div
      initial={{ opacity:0, y:60 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.9 }}
      className="mt-20 relative h-[420px] rounded-2xl overflow-hidden border border-white/10"
    >

      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
        alt="Team collaboration"
        fill
        className="object-cover scale-105 hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>

    </motion.div>

  </div>
</section>

      {/* FINAL CTA SECTION */}
      {/* <section className="py-24 bg-gradient-to-r from-dark-300 to-dark-200 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-dark-300/50"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['test'] mb-8 text-white leading-tight">
              Together, We Shape the Future<br />of Manufacturing
            </h2>
            <p className="text-xl text-white/80 font-['scrib'] mb-10 max-w-3xl mx-auto">
              Partner with us to transform your ideas into reality with cutting-edge additive manufacturing solutions.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="/contact"
                  className="bg-primary text-white font-['dena'] py-4 px-8 rounded-full inline-flex items-center space-x-2 hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="/projects"
                  className="bg-transparent text-white font-['dena'] py-4 px-8 rounded-full border-2 border-white/30 inline-flex items-center space-x-2 hover:bg-white/10 transition-all duration-300"
                >
                  <span>Explore Our Work</span>
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="py-28 bg-gradient-to-br from-dark-300 via-dark-300 to-dark-200 relative overflow-hidden">

  {/* Ambient lighting */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-primary/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-secondary/20 blur-[120px] rounded-full"></div>
  </div>

  {/* subtle overlay */}
  <div className="absolute inset-0 bg-dark-300/60 backdrop-blur-[2px]" />

  <div className="container mx-auto px-6 relative z-10 flex justify-center">

    {/* Glass panel */}
    <motion.div
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.8 }}
      className="max-w-4xl w-full text-center backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl px-10 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-['test'] text-white leading-tight mb-6 tracking-tight">
        Together, We Shape the Future  
        <span className="block text-primary mt-2">
          of Manufacturing
        </span>
      </h2>

      {/* Supporting text */}
      <p className="text-lg md:text-xl text-white/70 font-['scrib'] max-w-2xl mx-auto mb-10 leading-relaxed">
        Partner with Galactic 3D to transform bold ideas into precision-engineered
        products through advanced additive manufacturing technologies.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-5">

        <motion.div
          whileHover={{ scale:1.05 }}
          whileTap={{ scale:0.96 }}
          transition={{ type:"spring", stiffness:320, damping:18 }}
        >
          <Link
            href="/contact"
            className="group bg-primary text-white font-['dena'] px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1"/>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale:1.05 }}
          whileTap={{ scale:0.96 }}
          transition={{ type:"spring", stiffness:320, damping:18 }}
        >
          <Link
            href="/projects"
            className="group backdrop-blur-md bg-white/5 border border-white/20 text-white font-['dena'] px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-white/10 transition-all duration-300"
          >
            Explore Our Work
            <ExternalLink className="w-5 h-5 transition group-hover:rotate-12"/>
          </Link>
        </motion.div>

      </div>

    </motion.div>

  </div>

</section>

      
    </main>
  );
}
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EyeIcon, RocketLaunchIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { Users, Award, Building, Briefcase, Handshake, ArrowRight, CheckCircle, ExternalLink, Linkedin, ChevronRight } from 'lucide-react'
import TrustCertifications from '../components/TrustCertifications'

export default function About() {
  // State for active timeline item
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

  // Timeline data
  const timelineItems = [

{
year: 2023,
title: "Foundation & Facility Launch",
description: "Galactic 3D Private Limited was officially incorporated in Bengaluru, India. In the same year, the company established its advanced metal additive manufacturing facility in collaboration with Cambridge Institute of Technology and began offering industrial 3D printing services across sectors like aerospace, automotive, defense, electronics, and medical devices.",
image: "/hist1.jpeg"
},

{
year: 2024,
title: "Technology Expansion & Service Growth",
description: "Galactic 3D expanded its capabilities to include DMLS, SLS, FDM, DLP, CNC machining, and vacuum casting, enabling full-cycle product development. The company also strengthened its offerings in rapid prototyping, scalable production, and custom manufacturing, while launching training and educational programs in additive manufacturing.",
image: "/spark.jpg"

},

{
year: 2025,
title: "Multi-Industry Adoption",
description: "Galactic 3D began supporting design teams and OEMs across multiple industries including aerospace, automotive, robotics, medical, and electronics with functional prototypes and end-use production components.",
image: "/hist2.jpg"

}

];

  const pdfs = [
  {
    title: "ISO Certification",
    file: "/iso.pdf",
    thumbnail: "/ios.webp",
  },
  {
    title: "Startup India",
    file: "/startup-india.pdf",
    thumbnail: "/startup.png",
  },
  {
    title: "Sustainability",
    file: "/sustain.pdf",
    thumbnail: "/greenvio.png",
  },
 
];

  return (
    <main className="text-white">
   

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


      
      <section id="our-story" className="relative py-36 bg-white text-black border-t border-gray-200 overflow-hidden">

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
                  href="/about"
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

      {/* TRUST & CERTIFICATIONS SECTION */}
      <TrustCertifications />

      <section className="relative py-36 bg-white text-black border-t border-gray-200 overflow-hidden">

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

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

      {pdfs.map((doc, i) => (

        <motion.a
          key={i}
          href={doc.file}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group rounded-2xl overflow-hidden flex items-center justify-center h-28 cursor-pointer"

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}

          whileHover={{
            y: -6,
            scale: 1.03
          }}
        >

          {/* glass base */}
          <div className="absolute inset-0 backdrop-blur-2xl bg-white/[0.06] border border-white/15 rounded-2xl"/>

          {/* glass highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-20"/>

          {/* inner glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]"/>

          {/* thumbnail */}
          <Image
            src={doc.thumbnail}
            alt={doc.title}
            width={110}
            height={60}
            className="relative opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
          />

        </motion.a>

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
        href="/contact"
        className="flex items-center gap-2 text-primary hover:text-secondary font-['test'] text-lg transition"
      >
        View all partners
        <ArrowRight className="w-5 h-5"/>
      </Link>

    </motion.div>

  </div>

</section>

     


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
      className="mt-20 relative h-[500px] rounded-2xl overflow-hidden border border-white/10"
    >

      <Image
        src="/aboutgrp.jpg"
        alt="Team collaboration"
        fill
        className="object-cover scale-100  hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>

    </motion.div>

  </div>
</section>

     

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
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  CheckCircleIcon,
  CursorArrowRaysIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  TruckIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TeamCarousel from "../app/components/TeamCarousel";
import MS from './components/MaterialShowcase'
import ServiceTabs from "../app/components/ServiceTabs";
import TechShowcase from "./components/TechShowcase";
import WhyGalactic from "./components/whygalactic";
import AdvancedProcess from "../app/components/AdvancedProcess";
import TrainingBento from "./components/TrainingBento";


gsap.registerPlugin(ScrollTrigger);



export default function Home() {

  const videos = [
    "/galactic-bg.mp4",
    "/bharath.mp4",
  ];



  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef(null);

  // This function runs every single time a new video source loads
  const handleVideoLoad = () => {
    if (videoRef.current) {
      if (activeVideo === 0) {
        videoRef.current.playbackRate = 2.0; // Force 2x for the first video
      } else {
        videoRef.current.playbackRate = 1.0; // Reset to normal for others
      }
      videoRef.current.defaultPlaybackRate = videoRef.current.playbackRate;
    }
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden 
    // bg-gradient-to-br from-black via-[#0f0b0b] to-[#b91c1c] 
    "
    >
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
  {/* VIDEO BACKGROUND */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.video
        ref={videoRef}
        key={activeVideo}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        onPlay={handleVideoLoad}
        onLoadedMetadata={handleVideoLoad}
        onEnded={() => setActiveVideo((prev) => (prev + 1) % videos.length)}
      >
        <source src={videos[activeVideo]} type="video/mp4" />
      </motion.video>
    </AnimatePresence>

    <div className="absolute inset-0 bg-black/62" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,transparent,rgba(0,0,0,0.9))]" />
  </div>

  <div className="pointer-events-none absolute inset-4 z-10 border border-white/10" />

  

  <div className="relative z-20 flex min-h-screen items-end pb-24 pt-28 sm:px-10 ">
    <div className="grid w-full gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
      <div className="sm:pl-12">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
          Additive Manufacturing / India
        </p>

        <h1 className="max-w-6xl font-['test'] text-[clamp(3.2rem,8vw,8rem)] leading-[0.82] tracking-normal">
          Concept
          <span className="block text-white/28">Engineered Into</span>
          <span className="block text-red-500">Production</span>
        </h1>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
        <p className="font-['scrib'] text-sm leading-6 text-white/62">
          High-performance additive manufacturing for prototypes, tooling, and
          production-grade industrial parts.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
          <span className="bg-black/55 p-3">Metal</span>
          <span className="bg-black/55 p-3 text-center text-red-400">FDM</span>
          <span className="bg-black/55 p-3 text-right">DMLS</span>
        </div>

        <a
          href="/iso.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-xl transition hover:bg-white/10"
        >
          <img src="/ios.webp" className="h-6 w-6" alt="ISO Logo" />
          <span className="font-['dena'] text-xs tracking-widest text-white/75">
            ISO CERTIFIED
          </span>
        </a>
      </div>
    </div>
  </div>

  <div className="absolute bottom-6 left-6 z-30 flex gap-2 sm:left-10 lg:left-16">
    {videos.map((_, idx) => (
      <div
        key={idx}
        className={`h-1 rounded-full transition-all duration-500 ${
          idx === activeVideo ? "w-14 bg-red-500" : "w-8 bg-white/20"
        }`}
      />
    ))}
  </div>
</section>

      <section className="relative py-36  text-white overflow-hidden">

        {/* ambient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40  h-[600px] bg-red-500/20 blur-[180px] rounded-full"></div>
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px]  blur-[180px] rounded-full"></div>
        </div>

        <div className="relative w-full overflow-hidden  px-4 py-20 text-white sm:px-6 ">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[560px] w-[72vw] -translate-x-1/2 rounded-full  blur-[170px]" />
            <div className="absolute inset-0  opacity-20" />
            <div className="absolute inset-0 " />
          </div>

          <div className="relative mx-auto ">
            <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[10px] uppercase tracking-[0.28em]">
              <span className="text-red-400">Additive Manufacturing</span>
              <span className="text-white/35">Galactic 3D / Industrial AM</span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <section className="flex min-h-[680px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5 sm:p-8">
                <div>
                  <p className="mb-8 max-w-md text-sm leading-6 text-white/45">
                    Galactic 3D bridges the gap to the future with customized,
                    efficient, high-precision additive manufacturing solutions across
                    industries.
                  </p>

                  <h2 className="max-w-5xl text-[15vw] font-semibold uppercase leading-[0.78] tracking-[-0.08em] sm:text-[7rem] lg:text-[4.7vw]">
                    
                    <span className="block text-white/22">Additive</span>
                    <span className="block text-red-500">Manufacturing</span>
                  </h2>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 font-['scrib'] text-sm text-white/62">
                  <div className="bg-[#0d0d0d] p-5">
                    <CheckCircleIcon className="mb-4 h-5 w-5 text-red-400" />
                    Design, DFAM & Data Preparation
                  </div>

                  <div className="bg-[#0d0d0d] p-5">
                    <CheckCircleIcon className="mb-4 h-5 w-5 text-red-400" />
                    Contract Manufacturing & Part Printing
                  </div>

                  <div className="bg-[#0d0d0d] p-5">
                    <CheckCircleIcon className="mb-4 h-5 w-5 text-red-400" />
                    Training, Skill & Entrepreneurship Development
                  </div>

                  <div className="bg-[#0d0d0d] p-5">
                    <CheckCircleIcon className="mb-4 h-5 w-5 text-red-400" />
                    Capital Equipment Manufacturing
                  </div>
                </div>
              </section>

              <section className="grid gap-4">
                <article className="group grid min-h-[215px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] transition duration-500 hover:border-red-500/50 hover:bg-[#111111] sm:grid-cols-[180px_1fr]">
                  <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-red-400">
                      01
                    </span>
                    <CursorArrowRaysIcon className="h-8 w-8 text-red-400" />
                  </div>

                  <div className="flex flex-col justify-end p-5 sm:p-7">
                    <h3 className="text-4xl font-semibold uppercase leading-none tracking-[-0.06em]">
                      Precision
                    </h3>
                    <p className="mt-4 max-w-xl font-['scrib'] text-sm leading-6 text-white/48">
                      Delivering high-accuracy parts with rigorous testing and
                      traceability at every step.
                    </p>
                  </div>
                </article>

                <article className="group grid min-h-[215px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] transition duration-500 hover:border-red-500/50 hover:bg-[#111111] sm:grid-cols-[180px_1fr] lg:ml-12">
                  <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-red-400">
                      02
                    </span>
                    <LightBulbIcon className="h-8 w-8 text-red-400" />
                  </div>

                  <div className="flex flex-col justify-end p-5 sm:p-7">
                    <h3 className="text-4xl font-semibold uppercase leading-none tracking-[-0.06em]">
                      Innovation
                    </h3>
                    <p className="mt-4 max-w-xl font-['scrib'] text-sm leading-6 text-white/48">
                      Leveraging cutting-edge additive manufacturing technology and
                      expertise.
                    </p>
                  </div>
                </article>

                <article className="group grid min-h-[215px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] transition duration-500 hover:border-red-500/50 hover:bg-[#111111] sm:grid-cols-[180px_1fr]">
                  <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-red-400">
                      03
                    </span>
                    <GlobeAltIcon className="h-8 w-8 text-red-400" />
                  </div>

                  <div className="flex flex-col justify-end p-5 sm:p-7">
                    <h3 className="text-4xl font-semibold uppercase leading-none tracking-[-0.06em]">
                      Sustainability
                    </h3>
                    <p className="mt-4 max-w-xl font-['scrib'] text-sm leading-6 text-white/48">
                      Reducing waste and energy consumption through additive processes.
                    </p>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>


      </section>
      <section className="relative w-full overflow-hidden   py-20 text-white sm:px-6 ">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[72vw] -translate-x-1/2 rounded-full bg-red-600/14 blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:12.5vw_100%] opacity-20" />
          <div className="absolute inset-0 " />
        </div>

        <div className="relative mx-auto ">
          <div className="mb-10 grid gap-8 border-y border-white/10 py-8 lg:grid-cols-[1fr_520px] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-red-400">
                Manufacturing Services
              </p>

              <h2 className="max-w-5xl font-['test'] text-5xl leading-[0.88] tracking-normal md:text-7xl lg:text-8xl">
                Transform Your Ideas
                <span className="block text-white/30">Into Reality</span>
              </h2>
            </div>

            <p className="max-w-xl font-['scrib'] text-sm leading-6 text-white/52 lg:text-right">
              Leveraging cutting-edge additive manufacturing facilities, we deliver
              customized high-performance parts with speed, precision, and production
              confidence.
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section>



      <div className="relative mx-auto w-full overflow-hidden  px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[70vw] -translate-x-1/2 rounded-full  blur-[150px]" />
          <div className="absolute inset-x-0 top-0 h-px " />
        </div>

        <div className="relative mx-auto ">
          <div className="mb-10 grid gap-6 border-y border-white/10 py-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-red-400">
                Technology Stack
              </p>

              <h2 className="max-w-4xl font-['test'] text-5xl leading-[0.9] tracking-normal md:text-7xl">
                Advanced
                <span className="block text-white/35">Technology</span>
              </h2>
            </div>

            <p className="max-w-md font-['scrib'] text-sm leading-6 text-white/50 md:text-right">
              We utilize state-of-the-art additive manufacturing processes for
              production-grade outcomes.
            </p>
          </div>

          <TechShowcase />
        </div>
      </div>






      <section className="relative py-28 overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/video/training.mp4" type="video/mp4" />
          </video>
        </div>

        {/* OVERLAY */}

        <div className=" mx-auto">


          {/* <div className="grid md:grid-cols-4 auto-rows-[180px] gap-6">

            
            <div className="col-span-4 md:col-span-2 row-span-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-8 flex flex-col justify-center hover:bg-white/10 transition">

              <div className="inline-flex items-center gap-3 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 backdrop-blur-md w-fit">
                <AcademicCapIcon className="w-5 h-5 text-blue-400" />
                <span className="text-xs text-blue-300 tracking-widest uppercase">
                  Training & Development
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-['test'] mb-4 leading-tight">
                Build Your Future in
                <br />
                <span className="text-blue-400">Additive Manufacturing</span>
              </h2>

              <p className="text-gray-300 font-['scrib'] text-sm md:text-base leading-relaxed max-w-md">
                From schools to institutions and industry professionals, we offer
                comprehensive training programs combining hands-on experience with
                expert mentorship.
              </p>

            </div>

          
            <div className="col-span-2 md:col-span-1 row-span-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-blue-400/30 transition">

              <AcademicCapIcon className="w-8 h-8 text-blue-400" />

              <div>
                <h3 className="text-lg mb-2">School Programs</h3>
                <p className="text-gray-400 text-sm font-['scrib']">
                  STREAM-based learning modules introducing students to 3D printing
                  and design thinking from an early age.
                </p>
              </div>

            </div>

        
            <div className="col-span-2 md:col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-purple-400/30 transition">

              <BuildingLibraryIcon className="w-8 h-8 text-purple-400" />

              <div>
                <h3 className="text-lg mb-1">Institution Programs</h3>
                <p className="text-gray-400 text-sm font-['scrib']">
                  Curriculum covering design basics to advanced machine building.
                </p>
              </div>

            </div>

            
            <div className="col-span-2 md:col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-red-400/30 transition">

              <Cog6ToothIcon className="w-8 h-8 text-red-400" />

              <div>
                <h3 className="text-lg mb-1">Industry Training</h3>
                <p className="text-gray-400 text-sm font-['scrib']">
                  Expert-led programs for professionals covering real-world AM
                  implementation.
                </p>
              </div>

            </div>

        
            <div className="col-span-4 relative flex flex-col md:flex-row items-center justify-center gap-6 py-10">

          
              <div
                className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center hover:bg-white/10 transition"
                style={{
                  clipPath:
                    "polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0 100%, 0 0)",
                  width: "280px",
                  height: "180px",
                }}
              >
                <div className="text-4xl font-bold text-blue-400">30+</div>
                <p className="text-gray-300 text-sm font-['scrib'] mt-2">
                  Years of Combined Experience
                </p>
              </div>

        
              <div
                className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
                style={{
                  clipPath:
                    "polygon(0 25%, 15% 0, 100% 0, 100% 100%, 0 100%)",
                  width: "320px",
                  height: "180px",
                }}
              >
                <Image
                  src="/eos.svg"
                  alt="EOS"
                  width={90}
                  height={40}
                  className="mb-3"
                />

                <p className="text-gray-300 text-sm font-['scrib'] text-center">
                  Approved Training Partner
                </p>
              </div>

          
              <div
                className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 flex flex-col items-center justify-center hover:bg-white/10 transition"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)",
                  width: "320px",
                  height: "180px",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-blue-400">100%</span>
                  <span className="text-gray-300 text-sm font-['scrib']">
                    Hands-On Learning
                  </span>
                </div>

                <a
                  href="/training"
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow hover:shadow-blue-500/40"
                >
                  Explore Training
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>


            

          </div> */}

          <TrainingBento />

        </div>

      </section>





      <AdvancedProcess />


      {/* <section className="relative overflow-hidden bg-black py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-4 font-['scrib'] text-xs uppercase tracking-[0.35em] text-blue-300">
                Why Galactic
              </p>

              <h2 className="max-w-4xl font-['test'] text-5xl leading-[0.95] tracking-normal md:text-7xl">
                Built in India.
                <span className="block text-white/45">Engineered for orbit-grade ambition.</span>
              </h2>
            </div>

            <p className="font-['scrib'] text-sm leading-6 text-white/55 md:col-span-4 md:text-right">
              Advanced manufacturing for teams that need precision, certification,
              material confidence, and speed without compromise.
            </p>
          </div>

          <div className="grid auto-rows-[180px] gap-4 md:grid-cols-12">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:border-blue-300/40 md:col-span-7 md:row-span-2 md:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_38%)] opacity-80" />
              <div className="absolute bottom-0 right-0 text-[10rem] font-black leading-none text-white/[0.03] md:text-[14rem]">
                01
              </div>

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <GlobeAltIcon className="h-6 w-6 text-blue-300" />
                  </div>

                  <h3 className="max-w-xl font-['dena'] text-3xl leading-tight md:text-5xl">
                    Building in India for the globe
                  </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                  <p className="max-w-md font-['scrib'] text-sm leading-6 text-white/55">
                    Trusted by aerospace, medical, and defence teams for high-performance
                    parts, validated processes, and dependable production timelines.
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-white/70">
                    <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                      <CubeTransparentIcon className="h-4 w-4 text-blue-300" />
                      Aerospace
                    </span>

                    <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                      <BeakerIcon className="h-4 w-4 text-blue-300" />
                      Medical
                    </span>

                    <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                      <TruckIcon className="h-4 w-4 text-blue-300" />
                      Fast Logistics
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/25 md:col-span-5">
              <span className="absolute right-6 top-5 font-['test'] text-5xl text-white/[0.04]">
                02
              </span>

              <CubeTransparentIcon className="mb-5 h-7 w-7 text-blue-300" />

              <h3 className="mb-3 font-['dena'] text-xl leading-tight">
                Metal 3D Printing / DMLS / LPBF
              </h3>

              <p className="max-w-sm font-['scrib'] text-sm leading-6 text-white/50">
                Multiple production technologies under one roof, matched to the right
                process for every critical part.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/25 md:col-span-3">
              <span className="absolute right-6 top-5 font-['test'] text-5xl text-white/[0.04]">
                03
              </span>

              <CheckBadgeIcon className="mb-5 h-7 w-7 text-blue-300" />

              <h4 className="mb-3 font-['dena'] text-lg">
                Certified Materials
              </h4>

              <p className="font-['scrib'] text-sm leading-6 text-white/50">
                Verified parameters for production-grade parts.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/25 md:col-span-4">
              <span className="absolute right-6 top-5 font-['test'] text-5xl text-white/[0.04]">
                04
              </span>

              <BeakerIcon className="mb-5 h-7 w-7 text-blue-300" />

              <h4 className="mb-3 font-['dena'] text-lg">
                Material Testing
              </h4>

              <p className="font-['scrib'] text-sm leading-6 text-white/50">
                Mechanical validation and analysis for demanding applications.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-300/40 md:col-span-5">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
              <span className="absolute right-6 top-5 font-['test'] text-5xl text-white/[0.04]">
                05
              </span>

              <WrenchScrewdriverIcon className="mb-5 h-7 w-7 text-blue-300" />

              <h3 className="mb-3 font-['dena'] text-xl">
                Research & Collaboration
              </h3>

              <p className="max-w-sm font-['scrib'] text-sm leading-6 text-white/50">
                Design, manufacturing, post-processing, and inspection handled as one
                connected workflow.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <WhyGalactic />





      {/* <section className="relative py-24 bg-black text-white overflow-hidden">

        
        <div className="absolute inset-0 opacity-[0.04] 
      bg-[linear-gradient(to_right,#fff_1px,transparent_1px),
      linear-gradient(to_bottom,#fff_1px,transparent_1px)] 
      bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl tracking-tight font-['test'] mb-4 text-center">
            Facilities Designed for the Future
          </h2>

          <p className="text-gray-300 font-['scrib'] mb-14 text-center max-w-3xl mx-auto leading-relaxed">
            Our advanced manufacturing facilities combine cutting-edge technology
            with expert engineering teams to deliver superior performance and
            reliability across every stage of production.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

          
            <div className="relative overflow-hidden rounded-2xl border border-white/15 
          bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">

             
              <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-br from-white/10 via-transparent to-transparent 
            opacity-40 pointer-events-none" />

              <div className="relative">

             
                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl 
                  bg-sky-300/15 border border-sky-200/20 
                  flex items-center justify-center">
                      <CpuChipIcon className="w-6 h-6 text-sky-200" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-['dena']">
                        Metal
                      </h3>
                      <p className="text-sm text-gray-300 font-['scrib']">
                        Build Size: Up to 250×250×300mm
                      </p>
                    </div>

                  </div>

                  <span className="text-xs uppercase tracking-wide 
                border border-sky-200/20 bg-sky-300/15 px-3 py-1 rounded-full">
                    Performance Set
                  </span>

                </div>

        
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {[
                    {
                      title: "Titanium",
                      text: "Ti64Al4V, Ti64 ELI, Grade 5, Grade 23",
                    },
                    {
                      title: "Aluminum",
                      text: "AlSi10Mg, AlF357, Al6061, Al7050",
                    },
                    {
                      title: "Stainless Steel",
                      text: "SS316L, SS304L, 17-4PH, 15-5PH",
                    },
                    {
                      title: "Tool / Maraging Steel",
                      text: "M300, H13, MS1, C300",
                    },
                    {
                      title: "Superalloys",
                      text: "Inconel 718, 625, 939, Haynes 282",
                    },
                    {
                      title: "Cobalt / Copper",
                      text: "CoCr MP1, CuCr1Zr, Pure Copper",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/15 
                    bg-white/[0.07] backdrop-blur-md p-3 
                    hover:bg-white/[0.12] transition"
                    >
                      <h4 className="text-sm font-semibold tracking-wide text-sky-100 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-['scrib']">
                        {item.text}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>

      
            <div className="relative overflow-hidden rounded-2xl border border-white/15 
          bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">

              <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-br from-white/10 via-transparent to-transparent 
            opacity-40 pointer-events-none" />

              <div className="relative">

              
                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl 
                  bg-cyan-300/15 border border-cyan-200/20 
                  flex items-center justify-center">
                      <CubeTransparentIcon className="w-6 h-6 text-cyan-200" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-['dena']">
                        Polymer
                      </h3>
                      <p className="text-sm text-gray-300 font-['scrib']">
                        Build Size: Up to 250×250×250mm
                      </p>
                    </div>

                  </div>

                  <span className="text-xs uppercase tracking-wide 
                border border-cyan-200/20 bg-cyan-300/15 px-3 py-1 rounded-full">
                    Material Range
                  </span>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {[
                    {
                      title: "Polyamide-12",
                      text: "PA2200, PA2210 FR, PA3200 GF",
                    },
                    {
                      title: "Polyamide-11",
                      text: "PA1100, PA1101, PA1102",
                    },
                    {
                      title: "FDM Engineering",
                      text: "PLA, ABS, ASA, PETG, TPU",
                    },
                    {
                      title: "High-Temp Polymers",
                      text: "PEEK, PEKK, ULTEM 9085",
                    },
                    {
                      title: "Resins",
                      text: "Clear, tough, dental, rubber-like",
                    },
                    {
                      title: "Vacuum Casting",
                      text: "PU-ABS, PC-like, silicone rubbers",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/15 
                    bg-white/[0.07] backdrop-blur-md p-3 
                    hover:bg-white/[0.12] transition"
                    >
                      <h4 className="text-sm font-semibold tracking-wide text-cyan-100 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-['scrib']">
                        {item.text}
                      </p>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>
        </div>
      </section> */}

      <MS />

      <TeamCarousel />


      <section className="relative w-full overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[520px] w-[70vw] -translate-x-1/2 rounded-full bg-red-600/12 blur-[160px]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:12.5vw_100%] opacity-20" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,transparent,rgba(0,0,0,0.9))]" />
  </div>

  <div className="relative mx-auto max-w-[1500px]">
    <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr]">
      <aside className="flex min-h-[560px] flex-col justify-between border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r">
        <div>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-red-400">
            Contact
          </p>

          <h2 className="max-w-3xl font-['test'] text-5xl leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl">
            Start a
            <span className="block text-white/25">conversation.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
          <span className="bg-black/45 p-4">Project</span>
          <span className="bg-black/45 p-4 text-center text-red-400">
            Quote
          </span>
          <span className="bg-black/45 p-4 text-right">Build</span>
        </div>
      </aside>

      <main className="p-5 sm:p-8 lg:p-10">
        <p className="mb-10 max-w-xl font-['scrib'] text-sm leading-6 text-white/48">
          Have a project in mind? Share a few details and our team will get back
          to you within 24 hours.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
          <label className="block">
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              Name
            </span>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-red-500/50 focus:bg-white/[0.055]"
            />
          </label>

          <label className="block">
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              Email
            </span>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-red-500/50 focus:bg-white/[0.055]"
            />
          </label>

          <label className="block">
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              Project
            </span>
            <textarea
              rows={5}
              placeholder="Tell us about your part, material, timeline, or application"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-red-500/50 focus:bg-white/[0.055]"
            />
          </label>

          <div className="flex justify-end border-t border-white/10 pt-6">
            <button
              type="submit"
              className="rounded-full bg-red-500 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-red-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</section>



    </div>
  );
}

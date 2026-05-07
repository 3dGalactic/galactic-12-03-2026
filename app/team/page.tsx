// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import Link from "next/link";

// import MEMBERS from "./members"; 
// import INTERNS from "./interns"; 

// export default function AvantGardeTeam() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef });
  
  
//   const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
 
//   const xText = useTransform(smoothY, [0, 1], ["10%", "-50%"]);

//   const leadTrio = MEMBERS.slice(0, 3);
//   const coreQuartet = MEMBERS.slice(3, 7);

//   return (
//     <main ref={containerRef} className="bg-[#020202] text-[#e5e5e5] min-h-screen overflow-x-hidden selection:bg-white selection:text-black font-sans">
      
      
//       <div className="fixed inset-0 z-0 pointer-events-none flex items-center">
//         <motion.h1 
//           style={{ x: xText }}
//           className="text-[45vw] font-black uppercase leading-none text-white/[0.01] whitespace-nowrap italic tracking-tighter"
//         >
//           Collective Architecture
//         </motion.h1>
//       </div>

//       <div className="relative z-10">
        
//         <section className="h-screen flex flex-col justify-end px-6 md:px-16 pb-20">
//           <div className="flex flex-col md:flex-row items-end justify-between gap-12 border-b border-white/5 pb-20">
//             <motion.h2 
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
//               className="text-[12vw] font-black leading-[0.8] uppercase tracking-tighter"
//             >
//               The <br /> <span className="italic font-light opacity-20">Nodes.</span>
//             </motion.h2>
//             <div className="max-w-[300px] text-[10px] uppercase tracking-[0.6em] text-white/30 leading-loose">
//               Archive_2026 // A multidisciplinary unit architecting digital-physical convergence.
//             </div>
//           </div>
//         </section>

        
//         <section className="px-6 md:px-16 py-40 max-w-[2400px] mx-auto">
          
          
//           <div className="flex flex-col md:flex-row items-start gap-32 md:gap-0 mb-[30vh]">
//             {leadTrio.map((m, i) => (
//               <div 
//                 key={m.id} 
//                 className={`relative w-full md:w-1/3 ${
//                   i === 0 ? "md:mt-0" : i === 1 ? "md:mt-96 md:-ml-20" : "md:mt-40 md:-ml-10"
//                 }`}
//               >
//                 <GlassDistortionCard member={m} index={i} priority />
//               </div>
//             ))}
//           </div>

         
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 border-t border-white/5 pt-20">
//             {coreQuartet.map((m, i) => (
//               <GlassDistortionCard key={m.id} member={m} index={i + 3} />
//             ))}
//           </div>
//         </section>

       
//         <section className="px-6 md:px-16 py-60">
//           <div className="flex items-center gap-10 mb-20 opacity-10">
//             <h3 className="text-8xl font-black uppercase italic tracking-tighter">Rising</h3>
//             <div className="h-px flex-1 bg-white" />
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
//             {INTERNS.map((intern, idx) => (
//               <motion.div 
//                 key={intern.id}
//                 whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
//                 className="group relative aspect-[3/4] bg-[#050505] p-6 flex flex-col justify-between overflow-hidden transition-all duration-700 cursor-crosshair"
//               >
//                 <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                   <Image src={intern.img} alt={intern.name} fill className="object-cover grayscale" />
//                 </div>
//                 <div className="relative z-10 flex flex-col h-full justify-between mix-blend-difference text-white">
//                   <span className="text-[9px] font-mono tracking-widest opacity-30">REF_0{idx + 1}</span>
//                   <div>
//                     <h4 className="text-xl font-black uppercase tracking-tighter leading-none">{intern.name}</h4>
//                     <p className="text-[9px] uppercase tracking-widest mt-2 opacity-40">{intern.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>

      
//       <footer className="p-10 text-center">
//         <span className="text-[10px] uppercase tracking-[1em] text-white/10 italic">Galactic Industrial / Personnel</span>
//       </footer>

      
//       <div className="fixed inset-0 pointer-events-none z-[200] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
//     </main>
//   );
// }

// function GlassDistortionCard({ member, index, priority = false }: any) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 1.1 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//       className="group relative"
//     >
//       <Link href={`/team/${member.id}`} className="block">
        
//         <div className={`relative overflow-hidden bg-[#0a0a0a] transition-all duration-1000 group-hover:rotate-1 ${priority ? 'aspect-[4/6]' : 'aspect-square'}`}>
//           <Image
//             src={member.img}
//             alt={member.name}
//             fill
//             className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-60 group-hover:opacity-100"
//           />
          
          
//           <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
//           <div className="absolute inset-0 backdrop-blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
          
          
//           <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 z-30">
//             <h3 className="text-5xl font-black uppercase tracking-tighter italic leading-none">{member.name}</h3>
//             <p className="text-[10px] uppercase tracking-[0.4em] mt-4 text-white/50">{member.role}</p>
//           </div>
//         </div>

        
//         <div className="mt-8 flex items-baseline gap-4 group-hover:translate-x-4 transition-transform duration-700">
//           <span className="text-[9px] font-mono text-white/10">0{index + 1}</span>
//           <h3 className={`${priority ? 'text-4xl' : 'text-lg'} font-black uppercase tracking-tighter group-hover:text-white transition-colors`}>
//             {member.name}
//           </h3>
//           <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-white/20 transition-colors" />
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

















'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ArrowUpRight, Zap, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const LOGO_URL = "/navbar/logo.svg"; 
const TRANSITION = { type: "spring", stiffness: 350, damping: 30, mass: 1 } as const;

/**
 * LEADERSHIP ROW COMPONENT (The "Directorate" Style)
 * Switched to Black/Red/White palette
 */
function LeaderRow({ member, index, onSelect }: { member: any, index: number, onSelect: any }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={container} 
      style={{ opacity }}
      className="relative min-h-[80vh] flex items-center py-32 border-b border-white/5 last:border-0"
    >
      {/* BACKGROUND TEXT ANCHOR */}
      {/* <div className={`absolute hidden lg:block ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 z-0`}>
         <span className="text-[12vw] opacity-[0.3] font-black text-red-600 uppercase tracking-tighter vertical-text select-none italic">
            {member.role.split(' ')[0]}
         </span>
      </div> */}

      <div className={`w-full grid lg:grid-cols-12 gap-16 items-center relative z-10`}>
        
        {/* CINEMATIC PORTRAIT */}
        <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
          <motion.div 
            layoutId={`card-container-${member.id}`}
            onClick={() => onSelect(member.id)}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5 group shadow-2xl cursor-pointer"
          >
            <motion.img 
              layoutId={`img-${member.id}`}
              src={member.img} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

        {/* CONTENT PLATE */}
        <div className={`lg:col-span-7 space-y-8 ${index % 2 !== 0 ? 'lg:order-1 lg:text-right lg:items-end' : ''} flex flex-col`}>
          <div className="space-y-4">
            
            <h3 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
              {member.name.split(' ').map((word: string, i: number) => (
                <span key={i} className={i === 0 ? "block" : "block opacity-30"}>{word} </span>
              ))}
            </h3>
          </div>

          <p className="text-xl font-light text-white/50 max-w-xl leading-relaxed">
            {member.role}
          </p>

          <button 
            onClick={() => onSelect(member.id)}
            className="group flex items-center gap-4 pt-6"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
               <Plus size={24} className="group-hover:text-white group-hover:rotate-90 transition-all duration-500" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-red-500 transition-colors">Access Bio</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function GalacticNexusBento() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const allMembers = useMemo(() => [...TEAM_CORE, ...INTERNS], []);
  const currentMember = allMembers.find(m => m.id === selectedId);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigate = (direction: number) => {
    if (!selectedId) return;
    const currentIndex = allMembers.findIndex(m => m.id === selectedId);
    const nextIndex = (currentIndex + direction + allMembers.length) % allMembers.length;
    setSelectedId(allMembers[nextIndex].id);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-red-600/30">
      
      {/* CUSTOM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter pointer-events-none z-[10000] mix-blend-difference"
        animate={{ 
          x: mousePos.x - 24, 
          y: mousePos.y - 24,
          scale: (isHovering || selectedId) ? 1 : 0,
          opacity: (isHovering || selectedId) ? 1 : 0
        }}
      >
        {!selectedId && isHovering && "View"}
      </motion.div>

      {/* LEADERSHIP SECTION (Scroll Rows) */}
      <section className="px-6 lg:px-24 pt-40 pb-20">
        <div className="mb-40 space-y-6">
          <div className="h-[2px] w-24 bg-red-600 mb-12" />
          <h2 className="text-7xl lg:text-[140px] font-black text-white tracking-tighter leading-[0.75] uppercase ">
            The Minds<br />
            <span className="text-red-600 opacity-80">Behind Galactic 3D</span>
          </h2>y
        </div>

        <div>
          {TEAM_CORE.map((member, i) => (
            <LeaderRow key={member.id} member={member} index={i} onSelect={setSelectedId} />
          ))}
        </div>
      </section>

      {/* INTERN SECTION (Bento Grid) */}
      <section className="py-64 flex flex-col items-center">
        <TeamGrid title="Interns" data={INTERNS} aspect="aspect-[16/12]" onSelect={setSelectedId} setIsHovering={setIsHovering} transition={TRANSITION} />
      </section>

      {/* GLOBAL MODAL */}
      <AnimatePresence>
        {selectedId && currentMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 cursor-default">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
            
            <div className="absolute inset-x-4 md:inset-x-10 flex justify-between items-center z-[105] pointer-events-none">
                <button onClick={() => navigate(-1)} className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white pointer-events-auto transition-all"><ChevronLeft size={32}/></button>
                <button onClick={() => navigate(1)} className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white pointer-events-auto transition-all"><ChevronRight size={32}/></button>
            </div>

            <motion.div layoutId={`card-container-${selectedId}`} transition={TRANSITION} className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row h-fit min-h-[600px] z-[101]">
              <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                <motion.img key={`img-${selectedId}`} layoutId={`img-${selectedId}`} src={currentMember.img} className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative">
                <button onClick={() => setSelectedId(null)} className="absolute top-10 right-10 p-3 bg-white/5 rounded-full hover:text-red-500 transition-all"><X size={24} /></button>
                <motion.span layoutId={`role-${selectedId}`} className="font-mono text-[10px] tracking-[0.5em] text-red-600 uppercase font-bold mb-4 block">{currentMember.role}</motion.span>
                <motion.h3 layoutId={`name-${selectedId}`} className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase italic">{currentMember.name}</motion.h3>
                <motion.p key={`bio-${selectedId}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-white/40 text-lg leading-relaxed mb-12">{currentMember.bio}</motion.p>
                <button className="flex items-center gap-3 w-fit bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all">View Full Dossier <ArrowUpRight size={18} /></button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}

// ... Keep your TeamGrid and FlipTile functions here (untouched for interns)

// Sub-components (TeamGrid & FlipTile) remain largely the same, 
// but ensure TeamGrid passes the `selectedId` logic correctly.

function TeamGrid({ title, data, aspect, onSelect, setIsHovering, transition }: any) {
  const [isAssembled, setIsAssembled] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      const timer = setTimeout(() => setIsAssembled(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [hasStarted]);

  return (
    <motion.div onViewportEnter={() => setHasStarted(true)} viewport={{ once: true, amount: 0.2 }} className="w-full max-w-7xl px-6">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="flex items-center gap-6 mb-16"
      >
        <div className="h-12 w-[6px] bg-red-600" />
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] uppercase  leading-none">
          {title}
        </h2>
      </motion.div>
      
      <div className={`relative w-full ${aspect}`}>
        {data.map((m: any) => (
          <motion.div
            layoutId={`card-container-${m.id}`}
            transition={transition}
            key={m.id}
            onClick={() => !isAssembled && onSelect(m.id)}
            onMouseEnter={() => !isAssembled && setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="absolute cursor-pointer"
            animate={{
                left: m.left,
                top: m.top,
                width: m.width,
                height: m.height,
                padding: isAssembled ? "0px" : "12px"
            }}
          >
            <FlipTile member={m} isAssembled={isAssembled} transition={transition} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FlipTile({ member, isAssembled, transition }: any) {
  return (
    <div className="relative w-full h-full [perspective:2000px]">
      <motion.div
        animate={{ rotateY: isAssembled ? 0 : 180 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        <div 
            className="absolute inset-0 backface-hidden overflow-hidden" 
            style={{ 
                backfaceVisibility: 'hidden',
                transform: isAssembled ? 'scale(1.01)' : 'scale(1)',
                outline: '1px solid transparent'
            }}
        >
          <div 
            className="absolute"
            style={{
              width: 'calc(100% * ' + (100 / parseFloat(member.width)) + ')',
              height: 'calc(100% * ' + (100 / parseFloat(member.height)) + ')',
              left: '-' + (parseFloat(member.left) * (100 / parseFloat(member.width))) + '%',
              top: '-' + (parseFloat(member.top) * (100 / parseFloat(member.height))) + '%',
              backgroundImage: `url(${LOGO_URL})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        <div 
          className="absolute inset-0 backface-hidden overflow-hidden bg-[#0c0c0c] [transform:rotateY(180deg)] rounded-[2.5rem] border border-white/10 shadow-inner"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <motion.div layoutId={`img-container-${member.id}`} transition={transition} className="w-full h-full">
            <motion.img 
              layoutId={`img-${member.id}`}
              src={member.img} 
              transition={transition}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-8">
            <motion.p layoutId={`role-${member.id}`} transition={transition} className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-widest mb-1">
              {member.role}
            </motion.p>
            <motion.h3 layoutId={`name-${member.id}`} transition={transition} className="text-2xl font-black uppercase italic tracking-tighter">
              {member.name}
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}









// Data stays similar to your provided sets
const TEAM_CORE = [
  { 
    id: 1, 
    name: "Aabid Husen Hakeem", 
    role: "Head of Business Development", 
    bio: "Business and technology leader specializing in advanced manufacturing, aerospace materials, and sustainable industrial development. Aabid blends deep technical expertise with sustainability-driven commercial strategy across industry and academia.", 
    img: "/abid.jpg", 
    left: "0%", 
    top: "0%", 
    width: "33.33%", 
    height: "50%" 
  },
  { 
    id: 2, 
    name: "Nithin Yadav Mohan", 
    role: "Director & CEO", 
    bio: "Leading Galactic 3D and the Cambridge Group of Institutions, building industry-grade additive manufacturing capabilities and an education ecosystem that bridges research, industry, and talent.", 
    img: "/nithin.jpg", 
    left: "33.33%", 
    top: "0%", 
    width: "33.33%", 
    height: "50%" 
  },
  { 
    id: 3, 
    name: "Dipak Cumar", 
    role: "Head of Training", 
    bio: "Generative design specialist creating next-generation additive solutions with expertise in CAD and industry-standard training protocols.", 
    img: "/dipak.jpg", 
    left: "66.66%", 
    top: "0%", 
    width: "33.33%", 
    height: "50%" 
  },
  { 
    id: 4, 
    name: "Bhaskaran P", 
    role: "Application Engineer", 
    bio: "Research-driven approach to advanced material development and testing, specializing in the practical application of 3D printing technologies.", 
    img: "/bhskrn.jpeg", 
    left: "0%", 
    top: "50%", 
    width: "25%", 
    height: "50%" 
  },
  { 
    id: 5, 
    name: "Selva Kumar S", 
    role: "Head of Production", 
    bio: "Directing strategic production workflows and driving global market expansion through robust manufacturing partnerships.", 
    img: "/slvm.jpeg", 
    left: "25%", 
    top: "50%", 
    width: "25%", 
    height: "50%" 
  },
  { 
    id: 6, 
    name: "Bharath Kumar S", 
    role: "Business Development Executive", 
    bio: "Expanding the reach of intuitive 3D printing solutions through strategic outreach and user-centered market research.", 
    img: "/brth.png", 
    left: "50%", 
    top: "50%", 
    width: "25%", 
    height: "50%" 
  },
  { 
    id: 7, 
    name: "Bhramanandam", 
    role: "Finance Officer", 
    bio: "Managing the fiscal landscape of the enterprise, ensuring sustainable growth for advanced manufacturing initiatives.", 
    img: "/footer/profile3.jpg", 
    left: "75%", 
    top: "50%", 
    width: "25%", 
    height: "50%" 
  },
];


const INTERNS = [
  // ROW 1: 4 Items (Top: 0%)
  { 
    id: 101, 
    name: "Tushar Mishra", 
    role: "Mechanical Design Intern", 
    img: "/tushar.jpeg", 
    bio: "Exploring generative design workflows while pursuing an engineering degree.",
    left: "0%", top: "0%", width: "25%", height: "33.33%" 
  },
  { 
    id: 102, 
    name: "Thanushree", 
    role: "Software Intern", 
    img: "/thanu.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "25%", top: "0%", width: "25%", height: "33.33%" 
  },
  { 
    id: 103, 
    name: "Deabsis Maharana", 
    role: "Software Intern", 
    img: "/debasis.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "50%", top: "0%", width: "25%", height: "33.33%" 
  },
  { 
    id: 104, 
    name: "Nandhitha", 
    role: "Software Intern", 
    img: "/nandita.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "75%", top: "0%", width: "25%", height: "33.33%" 
  },

  // ROW 2: 4 Items (Top: 33.33%)
  { 
    id: 105, 
    name: "Praveen", 
    role: "Software Intern", 
    img: "/praveen.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "0%", top: "33.33%", width: "25%", height: "33.33%" 
  },
  { 
    id: 106, 
    name: "Naveen", 
    role: "Software Intern", 
    img: "/naveen.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "25%", top: "33.33%", width: "25%", height: "33.33%" 
  },
  { 
    id: 107, 
    name: "Guruprasad", 
    role: "Software Intern", 
    img: "/guru.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "50%", top: "33.33%", width: "25%", height: "33.33%" 
  },
  { 
    id: 108, 
    name: "Yashashwini", 
    role: "Software Intern", 
    img: "/yamini.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "75%", top: "33.33%", width: "25%", height: "33.33%" 
  },

  // ROW 3: 3 Items (Top: 66.66%)
  { 
    id: 109, 
    name: "Chetan", 
    role: "Software Intern", 
    img: "/chetan.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "0%", top: "66.66%", width: "33.33%", height: "33.33%" 
  },
  { 
    id: 110, 
    name: "Sundar", 
    role: "Software Intern", 
    img: "/sundar.jpeg", 
    bio: "Developing front-end components and data visualization for the team portal.",
    left: "33.33%", top: "66.66%", width: "33.33%", height: "33.33%" 
  },
  { 
    id: 111, 
    name: "G. Jayaditya", 
    role: "Creative Developer", 
    img: "/jay.jpeg", 
    bio: "The architect behind this digital experience. Specializing in high-end front-end, creative coding, and pixel-perfect interactions.",
    left: "66.66%", top: "66.66%", width: "33.33%", height: "33.33%" 
  },
];
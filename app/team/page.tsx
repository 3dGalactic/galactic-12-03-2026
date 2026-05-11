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

















// 'use client'

// import React, { useState, useEffect, useMemo, useRef } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { X, ArrowUpRight, Zap, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// const LOGO_URL = "/navbar/logo.svg"; 
// const TRANSITION = { type: "spring", stiffness: 350, damping: 30, mass: 1 } as const;

// /**
//  * LEADERSHIP ROW COMPONENT (The "Directorate" Style)
//  * Switched to Black/Red/White palette
//  */
// function LeaderRow({ member, index, onSelect }: { member: any, index: number, onSelect: any }) {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   return (
//     <motion.div 
//       ref={container} 
//       style={{ opacity }}
//       className="relative min-h-[80vh] flex items-center py-32 border-b border-white/5 last:border-0"
//     >
//       {/* BACKGROUND TEXT ANCHOR */}
//       {/* <div className={`absolute hidden lg:block ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 z-0`}>
//          <span className="text-[12vw] opacity-[0.3] font-black text-red-600 uppercase tracking-tighter vertical-text select-none italic">
//             {member.role.split(' ')[0]}
//          </span>
//       </div> */}

//       <div className={`w-full grid lg:grid-cols-12 gap-16 items-center relative z-10`}>
        
//         {/* CINEMATIC PORTRAIT */}
//         <div className={`lg:col-span-5 ${index % 2  !== 0 ? 'lg:order-2' : ''}`}>
//           <motion.div 
//             layoutId={`card-container-${member.id}`}
//             onClick={() => onSelect(member.id)}
//             className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5 group shadow-2xl cursor-pointer"
//           >
//             <motion.img 
//               layoutId={`img-${member.id}`}
//               src={member.img} 
//               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//           </motion.div>
//         </div>

//         {/* CONTENT PLATE */}
//         <div className={`lg:col-span-7 space-y-8 ${index % 2 !== 0 ? 'lg:order-1 lg:text-right lg:items-end' : ''} flex flex-col`}>
//           <div className="space-y-4">
            
//             <h3 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
//               {member.name.split(' ').map((word: string, i: number) => (
//                 <span key={i} className={i === 0 ? "block" : "block opacity-30"}>{word} </span>
//               ))}
//             </h3>
//           </div>

//           <p className="text-xl font-light text-white/50 max-w-xl leading-relaxed">
//             {member.role}
//           </p>

//           <button 
//             onClick={() => onSelect(member.id)}
//             className="group flex items-center gap-4 pt-6"
//           >
//             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
//                <Plus size={24} className="group-hover:text-white group-hover:rotate-90 transition-all duration-500" />
//             </div>
//             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-red-500 transition-colors">Access Bio</span>
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function GalacticNexusBento() {
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const allMembers = useMemo(() => [...TEAM_CORE, ...INTERNS], []);
//   const currentMember = allMembers.find(m => m.id === selectedId);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const navigate = (direction: number) => {
//     if (!selectedId) return;
//     const currentIndex = allMembers.findIndex(m => m.id === selectedId);
//     const nextIndex = (currentIndex + direction + allMembers.length) % allMembers.length;
//     setSelectedId(allMembers[nextIndex].id);
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-red-600/30">
      
//       {/* CUSTOM CURSOR */}
//       <motion.div 
//         className="fixed top-0 left-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter pointer-events-none z-[10000] mix-blend-difference"
//         animate={{ 
//           x: mousePos.x - 24, 
//           y: mousePos.y - 24,
//           scale: (isHovering || selectedId) ? 1 : 0,
//           opacity: (isHovering || selectedId) ? 1 : 0
//         }}
//       >
//         {!selectedId && isHovering && "View"}
//       </motion.div>

//       {/* LEADERSHIP SECTION (Scroll Rows) */}
//       <section className="px-6 lg:px-24 pt-40 pb-20">
//         <div className="mb-40 space-y-6">
//           <div className="h-[2px] w-24 bg-red-600 mb-12" />
//           <h2 className="text-7xl lg:text-[140px] font-black text-white tracking-tighter leading-[0.75] uppercase ">
//             The Minds<br />
//             <span className="text-red-600 opacity-80">Behind Galactic 3D</span>
//           </h2>y
//         </div>

//         <div>
//           {TEAM_CORE.map((member, i) => (
//             <LeaderRow key={member.id} member={member} index={i} onSelect={setSelectedId} />
//           ))}
//         </div>
//       </section>

//       {/* INTERN SECTION (Bento Grid) */}
//       <section className="py-64 flex flex-col items-center">
//         <TeamGrid title="Interns" data={INTERNS} aspect="aspect-[16/12]" onSelect={setSelectedId} setIsHovering={setIsHovering} transition={TRANSITION} />
//       </section>

//       {/* GLOBAL MODAL */}
//       <AnimatePresence>
//         {selectedId && currentMember && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 cursor-default">
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)} className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
            
//             <div className="absolute inset-x-4 md:inset-x-10 flex justify-between items-center z-[105] pointer-events-none">
//                 <button onClick={() => navigate(-1)} className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white pointer-events-auto transition-all"><ChevronLeft size={32}/></button>
//                 <button onClick={() => navigate(1)} className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white pointer-events-auto transition-all"><ChevronRight size={32}/></button>
//             </div>

//             <motion.div layoutId={`card-container-${selectedId}`} transition={TRANSITION} className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row h-fit min-h-[600px] z-[101]">
//               <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
//                 <motion.img key={`img-${selectedId}`} layoutId={`img-${selectedId}`} src={currentMember.img} className="w-full h-full object-cover" />
//               </div>
//               <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative">
//                 <button onClick={() => setSelectedId(null)} className="absolute top-10 right-10 p-3 bg-white/5 rounded-full hover:text-red-500 transition-all"><X size={24} /></button>
//                 <motion.span layoutId={`role-${selectedId}`} className="font-mono text-[10px] tracking-[0.5em] text-red-600 uppercase font-bold mb-4 block">{currentMember.role}</motion.span>
//                 <motion.h3 layoutId={`name-${selectedId}`} className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none uppercase italic">{currentMember.name}</motion.h3>
//                 <motion.p key={`bio-${selectedId}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-white/40 text-lg leading-relaxed mb-12">{currentMember.bio}</motion.p>
//                 <button className="flex items-center gap-3 w-fit bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all">View Full Dossier <ArrowUpRight size={18} /></button>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       <style jsx global>{`
//         .vertical-text {
//           writing-mode: vertical-rl;
//           text-orientation: mixed;
//         }
//       `}</style>
//     </div>
//   );
// }

// // ... Keep your TeamGrid and FlipTile functions here (untouched for interns)

// // Sub-components (TeamGrid & FlipTile) remain largely the same, 
// // but ensure TeamGrid passes the `selectedId` logic correctly.

// function TeamGrid({ title, data, aspect, onSelect, setIsHovering, transition }: any) {
//   const [isAssembled, setIsAssembled] = useState(true);
//   const [hasStarted, setHasStarted] = useState(false);

//   useEffect(() => {
//     if (hasStarted) {
//       const timer = setTimeout(() => setIsAssembled(false), 1200);
//       return () => clearTimeout(timer);
//     }
//   }, [hasStarted]);

//   return (
//     <motion.div onViewportEnter={() => setHasStarted(true)} viewport={{ once: true, amount: 0.2 }} className="w-full max-w-7xl px-6">
//       <motion.div 
//         initial={{ x: -20, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "circOut" }}
//         className="flex items-center gap-6 mb-16"
//       >
//         <div className="h-12 w-[6px] bg-red-600" />
//         <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] uppercase  leading-none">
//           {title}
//         </h2>
//       </motion.div>
      
//       <div className={`relative w-full ${aspect}`}>
//         {data.map((m: any) => (
//           <motion.div
//             layoutId={`card-container-${m.id}`}
//             transition={transition}
//             key={m.id}
//             onClick={() => !isAssembled && onSelect(m.id)}
//             onMouseEnter={() => !isAssembled && setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             className="absolute cursor-pointer"
//             animate={{
//                 left: m.left,
//                 top: m.top,
//                 width: m.width,
//                 height: m.height,
//                 padding: isAssembled ? "0px" : "12px"
//             }}
//           >
//             <FlipTile member={m} isAssembled={isAssembled} transition={transition} />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function FlipTile({ member, isAssembled, transition }: any) {
//   return (
//     <div className="relative w-full h-full [perspective:2000px]">
//       <motion.div
//         animate={{ rotateY: isAssembled ? 0 : 180 }}
//         transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//         className="relative w-full h-full [transform-style:preserve-3d]"
//       >
//         <div 
//             className="absolute inset-0 backface-hidden overflow-hidden" 
//             style={{ 
//                 backfaceVisibility: 'hidden',
//                 transform: isAssembled ? 'scale(1.01)' : 'scale(1)',
//                 outline: '1px solid transparent'
//             }}
//         >
//           <div 
//             className="absolute"
//             style={{
//               width: 'calc(100% * ' + (100 / parseFloat(member.width)) + ')',
//               height: 'calc(100% * ' + (100 / parseFloat(member.height)) + ')',
//               left: '-' + (parseFloat(member.left) * (100 / parseFloat(member.width))) + '%',
//               top: '-' + (parseFloat(member.top) * (100 / parseFloat(member.height))) + '%',
//               backgroundImage: `url(${LOGO_URL})`,
//               backgroundSize: 'contain',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//             }}
//           />
//         </div>

//         <div 
//           className="absolute inset-0 backface-hidden overflow-hidden bg-[#0c0c0c] [transform:rotateY(180deg)] rounded-[2.5rem] border border-white/10 shadow-inner"
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <motion.div layoutId={`img-container-${member.id}`} transition={transition} className="w-full h-full">
//             <motion.img 
//               layoutId={`img-${member.id}`}
//               src={member.img} 
//               transition={transition}
//               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
//             />
//           </motion.div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
//           <div className="absolute bottom-8 left-8">
//             <motion.p layoutId={`role-${member.id}`} transition={transition} className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-widest mb-1">
//               {member.role}
//             </motion.p>
//             <motion.h3 layoutId={`name-${member.id}`} transition={transition} className="text-2xl font-black uppercase italic tracking-tighter">
//               {member.name}
//             </motion.h3>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }









// // Data stays similar to your provided sets
// const TEAM_CORE = [
//   { 
//     id: 1, 
//     name: "Aabid Husen Hakeem", 
//     role: "Head of Business Development", 
//     bio: "Business and technology leader specializing in advanced manufacturing, aerospace materials, and sustainable industrial development. Aabid blends deep technical expertise with sustainability-driven commercial strategy across industry and academia.", 
//     img: "/abid.jpg", 
//     left: "0%", 
//     top: "0%", 
//     width: "33.33%", 
//     height: "50%" 
//   },
//   { 
//     id: 2, 
//     name: "Nithin Yadav Mohan", 
//     role: "Director & CEO", 
//     bio: "Leading Galactic 3D and the Cambridge Group of Institutions, building industry-grade additive manufacturing capabilities and an education ecosystem that bridges research, industry, and talent.", 
//     img: "/nithin.jpg", 
//     left: "33.33%", 
//     top: "0%", 
//     width: "33.33%", 
//     height: "50%" 
//   },
//   { 
//     id: 3, 
//     name: "Dipak Cumar", 
//     role: "Head of Training", 
//     bio: "Generative design specialist creating next-generation additive solutions with expertise in CAD and industry-standard training protocols.", 
//     img: "/dipak.jpg", 
//     left: "66.66%", 
//     top: "0%", 
//     width: "33.33%", 
//     height: "50%" 
//   },
//   { 
//     id: 4, 
//     name: "Bhaskaran P", 
//     role: "Application Engineer", 
//     bio: "Research-driven approach to advanced material development and testing, specializing in the practical application of 3D printing technologies.", 
//     img: "/bhskrn.jpeg", 
//     left: "0%", 
//     top: "50%", 
//     width: "25%", 
//     height: "50%" 
//   },
//   { 
//     id: 5, 
//     name: "Selva Kumar S", 
//     role: "Head of Production", 
//     bio: "Directing strategic production workflows and driving global market expansion through robust manufacturing partnerships.", 
//     img: "/slvm.jpeg", 
//     left: "25%", 
//     top: "50%", 
//     width: "25%", 
//     height: "50%" 
//   },
//   { 
//     id: 6, 
//     name: "Bharath Kumar S", 
//     role: "Business Development Executive", 
//     bio: "Expanding the reach of intuitive 3D printing solutions through strategic outreach and user-centered market research.", 
//     img: "/brth.png", 
//     left: "50%", 
//     top: "50%", 
//     width: "25%", 
//     height: "50%" 
//   },
//   { 
//     id: 7, 
//     name: "Bhramanandam", 
//     role: "Finance Officer", 
//     bio: "Managing the fiscal landscape of the enterprise, ensuring sustainable growth for advanced manufacturing initiatives.", 
//     img: "/footer/profile3.jpg", 
//     left: "75%", 
//     top: "50%", 
//     width: "25%", 
//     height: "50%" 
//   },
// ];


// const INTERNS = [
//   // ROW 1: 4 Items (Top: 0%)
//   { 
//     id: 101, 
//     name: "Tushar Mishra", 
//     role: "Mechanical Design Intern", 
//     img: "/tushar.jpeg", 
//     bio: "Exploring generative design workflows while pursuing an engineering degree.",
//     left: "0%", top: "0%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 102, 
//     name: "Thanushree", 
//     role: "Software Intern", 
//     img: "/thanu.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "25%", top: "0%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 103, 
//     name: "Deabsis Maharana", 
//     role: "Software Intern", 
//     img: "/debasis.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "50%", top: "0%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 104, 
//     name: "Nandhitha", 
//     role: "Software Intern", 
//     img: "/nandita.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "75%", top: "0%", width: "25%", height: "33.33%" 
//   },

//   // ROW 2: 4 Items (Top: 33.33%)
//   { 
//     id: 105, 
//     name: "Praveen", 
//     role: "Software Intern", 
//     img: "/praveen.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "0%", top: "33.33%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 106, 
//     name: "Naveen", 
//     role: "Software Intern", 
//     img: "/naveen.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "25%", top: "33.33%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 107, 
//     name: "Guruprasad", 
//     role: "Software Intern", 
//     img: "/guru.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "50%", top: "33.33%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 108, 
//     name: "Yashashwini (Dabba )", 
//     role: "Additive Design Intern", 
//     img: "/yamini.jpeg", 
//     bio: "A designing genious who is brillient at the work she does and the best part is she finishes her work fast. ",
//     left: "75%", top: "33.33%", width: "25%", height: "33.33%" 
//   },

//   // ROW 3: 3 Items (Top: 66.66%)
//   { 
//     id: 109, 
//     name: "Chetan", 
//     role: "Software Intern", 
//     img: "/chetan.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "0%", top: "66.66%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 110, 
//     name: "Sundar", 
//     role: "Software Intern", 
//     img: "/sundar.jpeg", 
//     bio: "Developing front-end components and data visualization for the team portal.",
//     left: "25%", top: "66.66%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 111, 
//     name: "G. Jayaditya", 
//     role: "Creative Developer", 
//     img: "/jay.jpeg", 
//     bio: "The architect behind this digital experience. Specializing in high-end front-end, creative coding, and pixel-perfect interactions.",
//     left: "50%", top: "66.66%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 112, 
//     name: "Arev Kumar", 
//     role: "Creative Developer", 
//     img: "/arev.jpeg", 
//     bio: "The architect behind this digital experience. Specializing in high-end front-end, creative coding, and pixel-perfect interactions.",
//     left: "75%", top: "66.66%", width: "25%", height: "33.33%" 
//   },
//   { 
//     id: 113, 
//     name: "Shashi Kumar . R", 
//     role: "Product Designer", 
//     img: "/shashi kumar.R.jpeg", 
//     bio: "Designing intuitive digital experiences with a focus on usability, clean interfaces, and seamless user interactions. ",
//     left: "0", top: "99.99%", width: "25%", height: "33.33%" 
//   }
// ];

























'use client';

import React, { memo, useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Terminal,
  X,
} from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  img: string;
};

type ModalSource = 'core' | 'intern' | null;

const EASE = [0.16, 1, 0.3, 1] as const;
const MODAL_TRANSITION = { duration: 0.55, ease: EASE };
const IMAGE_TRANSITION = { duration: 0.5, ease: EASE };

export default function GlassTeamArchive() {
  const allCore = TEAM_CORE;
  const allInterns = INTERNS;

  const [activeCore, setActiveCore] = useState(0);
  const [activeIntern, setActiveIntern] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [modalSource, setModalSource] = useState<ModalSource>(null);

  const shouldReduceMotion = useReducedMotion();

  const currentCore = allCore[activeCore] ?? allCore[0];
  const currentIntern = allInterns[activeIntern] ?? allInterns[0];

  const selectedMember = useMemo(() => {
    if (!selectedId) return null;
    return [...allCore, ...allInterns].find((m) => m.id === selectedId) ?? null;
  }, [selectedId]);

  const openProfile = useCallback((id: number, source: ModalSource) => {
    setSelectedId(id);
    setModalSource(source);
  }, []);

  const closeProfile = useCallback(() => {
    setSelectedId(null);
    setModalSource(null);
  }, []);

  const moveCore = useCallback((dir: number) => {
    setActiveCore((i) => (i + dir + allCore.length) % allCore.length);
  }, [allCore.length]);

  const moveIntern = useCallback((dir: number) => {
    setActiveIntern((i) => (i + dir + allInterns.length) % allInterns.length);
  }, [allInterns.length]);

  const moveModal = useCallback((direction: number) => {
    if (!selectedId || !modalSource) return;
    const list = modalSource === 'core' ? allCore : allInterns;
    const idx = list.findIndex((m) => m.id === selectedId);
    if (idx === -1) return;
    const next = (idx + direction + list.length) % list.length;
    setSelectedId(list[next].id);
  }, [selectedId, modalSource, allCore, allInterns]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Atmosphere />
      <Hero totalMembers={allCore.length + allInterns.length} />

      <CommandSystem
        member={currentCore}
        activeIndex={activeCore}
        move={moveCore}
        setActiveIndex={setActiveCore}
        onOpen={(id) => openProfile(id, 'core')}
        shouldReduceMotion={shouldReduceMotion}
      />

      <SignalSystem
        member={currentIntern}
        activeIndex={activeIntern}
        move={moveIntern}
        setActiveIndex={setActiveIntern}
        onOpen={(id) => openProfile(id, 'intern')}
        shouldReduceMotion={shouldReduceMotion}
      />

      <AnimatePresence>
        {selectedMember && (
          <ProfileModal
            member={selectedMember}
            onClose={closeProfile}
            onPrevious={() => moveModal(-1)}
            onNext={() => moveModal(1)}
            shouldReduceMotion={shouldReduceMotion}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

/* ==================== Background & Hero (unchanged) ==================== */
function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(220,38,38,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.07),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="absolute inset-0 bg-black/75" />
    </div>
  );
}

function Hero({ totalMembers }: { totalMembers: number }) {
  // ... (same as previous version)
  return (
    <section className="relative z-10 flex min-h-screen flex-col justify-between px-4 py-8 sm:px-6 lg:px-8">
      

      <div className='relative top-[12vw]'>
        <p className="mb-6 flex items-center gap-3 font-mono text-xs text-white/60">
          <Terminal size={18} className="text-red-500" />
          SYSTEM BOOT COMPLETE. Loading operators...
        </p>
        <h1 className="text-[15vw] font-black uppercase leading-[0.78] tracking-[-0.04em] sm:text-[12vw] lg:text-[9.2vw]">
          Galactic <span className="block text-red-600">Minds</span>
        </h1>
      </div>

      <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 font-mono text-xs uppercase tracking-widest text-white/40 backdrop-blur-md sm:grid-cols-3">
        <span>01 command operators</span>
        <span className="sm:text-center">02 signal operators</span>
        <span className="sm:text-right">enter to inspect</span>
      </div>
    </section>
  );
}

/* ==================== Command System - Fixed Image Size ==================== */
function CommandSystem({ member, activeIndex, move, setActiveIndex, onOpen, shouldReduceMotion }: any) {
  return (
    <section className="relative z-10 px-4 py-20 lg:py-28">
      <SystemHeader label="01 / COMMAND OPERATORS" title="Core Members" text="..." tone="red" />

      <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-3 lg:grid-cols-[360px_1fr]">
        {/* List */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/70">
          {TEAM_CORE.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              onDoubleClick={() => onOpen(item.id)}
              className={`w-full border-b border-white/10 p-5 text-left font-mono text-sm transition-all last:border-b-0 ${
                idx === activeIndex ? 'bg-red-600 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="mr-4 opacity-50">{String(idx + 1).padStart(2, '0')}</span>
              <span className="uppercase">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="grid h-[680px] gap-4 lg:grid-cols-[1fr_440px]">
          {/* Info Panel */}
          <div className="rounded-2xl border border-white/10 bg-black/70 p-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={member.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={IMAGE_TRANSITION}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-red-400">{member.role}</p>
                <button onClick={() => onOpen(member.id)} className="group text-left">
                  <h3 className="mt-4 text-6xl font-black uppercase tracking-tighter transition group-hover:text-red-400">
                    {member.name}
                  </h3>
                </button>
                <p className="mt-6 leading-relaxed text-white/70">{member.bio}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-auto flex gap-3 pt-8">
              <IconButton onClick={() => move(-1)}><ChevronLeft size={22} /></IconButton>
              <IconButton onClick={() => move(1)}><ChevronRight size={22} /></IconButton>
              <button onClick={() => onOpen(member.id)} className="ml-auto flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black">
                Inspect <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* FIXED SIZE IMAGE */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black h-full min-h-[680px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={member.id}
                src={member.img}
                alt={member.name}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={IMAGE_TRANSITION}
                className="absolute inset-0 h-full w-full object-cover grayscale"
                loading="eager"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-red-950/30 mix-blend-screen" />
            <div className="absolute bottom-0 h-1 w-full bg-red-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== Signal System - Fixed Size ==================== */
function SignalSystem({ member, activeIndex, move, setActiveIndex, onOpen, shouldReduceMotion }: any) {
  return (
    <section className="relative z-10 px-4 py-20 lg:py-28">
      <SystemHeader label="02 / SIGNAL OPERATORS" title="Intern Members" text="..." tone="white" />

      <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-3 lg:grid-cols-[1fr_440px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10">
          {INTERNS.map((item, idx) => (
            <SignalCell
              key={item.id}
              member={item}
              index={idx}
              active={idx === activeIndex}
              setActiveIndex={setActiveIndex}
              onOpen={onOpen}
            />
          ))}
        </div>

        {/* FIXED SIZE DETAIL */}
        <div className="rounded-2xl border border-white/10 bg-black/70 p-6 flex flex-col h-[680px]">
          <div className="relative flex-1 overflow-hidden rounded-xl bg-black min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={member.id}
                src={member.img}
                alt={member.name}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={IMAGE_TRANSITION}
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
          </div>

          <div className="pt-6">
            <p className="font-mono text-xs uppercase tracking-widest text-red-400">{member.role}</p>
            <h3 className="mt-2 text-4xl font-black uppercase tracking-tighter">{member.name}</h3>

            <div className="mt-6 flex gap-3">
              <IconButton onClick={() => move(-1)} small><ChevronLeft size={20} /></IconButton>
              <IconButton onClick={() => move(1)} small><ChevronRight size={20} /></IconButton>
              <button onClick={() => onOpen(member.id)} className="flex-1 rounded-full bg-red-600 py-3.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black">
                Inspect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SignalCell = memo(({ member, index, active, setActiveIndex, onOpen }: any) => (
  <button
    onMouseEnter={() => setActiveIndex(index)}
    onClick={() => onOpen(member.id)}
    className={`group relative h-[218px] bg-[#0a0a0a] p-6 text-left transition-all duration-300 ${
      active ? 'text-red-400' : 'text-white/60 hover:text-white'
    }`}
  >
    <div className="mb-8 font-mono text-[10px] uppercase tracking-widest">SIG_{String(index + 1).padStart(2, '0')}</div>
    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{member.name}</h3>
    <p className="mt-3 text-xs uppercase tracking-widest opacity-60">{member.role}</p>
  </button>
));

/* ==================== SMOOTH MODAL ==================== */
/* ==================== CONSISTENT SIZE MODAL ==================== */
function ProfileModal({
  member,
  onClose,
  onPrevious,
  onNext,
  shouldReduceMotion,
}: {
  member: TeamMember;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.button
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Consistent Size Modal */}
      <motion.article
        initial={{ opacity: 0, scale: 0.88, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 60 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1080px] max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl flex flex-col lg:flex-row"
        style={{ aspectRatio: '1080 / 620' }}   // ← Consistent ratio
      >
        {/* Image Side - FIXED ASPECT RATIO */}
        <div className="relative lg:w-5/12 bg-black overflow-hidden flex-shrink-0">
          <div className="relative w-full h-full aspect-[4/5] lg:aspect-auto">
            <img
              src={member.img}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-red-950/25 mix-blend-screen" />
          </div>
        </div>

        {/* Content Side */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16 overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 p-3 hover:bg-red-600 transition z-10"
          >
            <X size={24} />
          </button>

          <p className="font-mono text-xs uppercase tracking-widest text-red-400">
            {member.role}
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-none">
            {member.name}
          </h2>

          <p className="mt-9 text-[15.2px] leading-relaxed text-white/75 max-w-prose">
            {member.bio}
          </p>

          <div className="mt-12 flex gap-4">
            <IconButton onClick={onPrevious}>
              <ChevronLeft size={24} />
            </IconButton>
            <IconButton onClick={onNext}>
              <ChevronRight size={24} />
            </IconButton>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function IconButton({ children, onClick, small = false }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition ${small ? 'h-12 w-12' : 'h-14 w-14'}`}
    >
      {children}
    </button>
  );
}

function SystemHeader({ label, title, text, tone }: any) {
  return (
    <div className="mb-8 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md lg:grid-cols-12 lg:items-end">
      <p className={`font-mono text-xs uppercase tracking-widest lg:col-span-3 ${tone === 'red' ? 'text-red-400' : 'text-white/40'}`}>
        {label}
      </p>
      <h2 className="text-6xl font-black uppercase tracking-tighter lg:col-span-5">{title}</h2>
      <p className="max-w-md text-sm text-white/60 lg:col-span-4 lg:text-right">{text}</p>
    </div>
  );
}















const TEAM_CORE = [
  { 
    id: 1, 
    name: "Nithin Yadav Mohan", 
    role: "Director & CEO", 
    bio: "Leading Galactic 3D and the Cambridge Group of Institutions, building industry-grade additive manufacturing capabilities and an education ecosystem that bridges research, industry, and talent.", 
    img: "https://ik.imagekit.io/0s6dxbeae/nithin.png", 
    left: "33.33%", 
    top: "0%", 
    width: "33.33%", 
    height: "50%" 
  },
  { 
    id: 2, 
    name: "Aabid Husen Hakeem", 
    role: "Head of Business Development", 
    bio: "Business and technology leader specializing in advanced manufacturing, aerospace materials, and sustainable industrial development. Aabid blends deep technical expertise with sustainability-driven commercial strategy across industry and academia.", 
    img: "https://ik.imagekit.io/0s6dxbeae/abid.png", 
    left: "0%", 
    top: "0%", 
    width: "33.33%", 
    height: "50%" 
  },
  
  { 
    id: 3, 
    name: "Dipak Cumar", 
    role: "Head of Training", 
    bio: "Generative design specialist creating next-generation additive solutions with expertise in CAD and industry-standard training protocols.", 
    img: "https://ik.imagekit.io/0s6dxbeae/dipakblack.png", 
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
    img: "https://ik.imagekit.io/0s6dxbeae/bhaskar.png", 
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
    img: "https://ik.imagekit.io/0s6dxbeae/selvam.png", 
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
    img: "https://ik.imagekit.io/0s6dxbeae/bharath.png", 
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
  { id: 101, name: "Tushar Mishra", role: "Mechanical Design Intern", img: "/tushar.jpeg", bio: "Exploring generative design workflows while pursuing an engineering degree.", left: "0%", top: "0%", width: "25%", height: "33.33%" },
  { id: 102, name: "Thanushree", role: "Software Intern", img: "/thanu.jpeg", bio: "Developing front-end components and data visualization for the team portal.", left: "25%", top: "0%", width: "25%", height: "33.33%" },
  { id: 103, name: "Deabsis Maharana", role: "Software Intern", img: "/debasis.jpeg", bio: "Developing front-end components and data visualization for the team portal.", left: "50%", top: "0%", width: "25%", height: "33.33%" },
  { id: 104, name: "Nandhitha", role: "Software Intern", img: "/nandita.jpeg", bio: "Developing front-end components and data visualization for the team portal.", left: "75%", top: "0%", width: "25%", height: "33.33%" },
  { id: 105, name: "Praveen", role: "Software Intern", img: "/praveen.jpeg", bio: "Developing front-end components and data visualization for the team portal.", left: "0%", top: "33.33%", width: "25%", height: "33.33%" },
  { id: 106, name: "Naveen", role: "Software Intern", img: "/naveen.jpeg", bio: "Developing front-end components and data visualization for the team portal.", left: "25%", top: "33.33%", width: "25%", height: "33.33%" },
  { id: 107, name: "Guruprasad", role: "Software Intern", img: "/guru.jpeg", bio: "Developing front-end components and data visualization for the team portal.", left: "50%", top: "33.33%", width: "25%", height: "33.33%" },
  { id: 108, name: "Yashashwini", role: "Additive Design Intern", img: "https://ik.imagekit.io/0s6dxbeae/winismita.png", bio: "A designing genious who is brillient at the work she does and the best part is she finishes her work fast. ", left: "75%", top: "33.33%", width: "25%", height: "33.33%" },
  { id: 109, name: "Chetan", role: "Software Intern", img: "https://ik.imagekit.io/0s6dxbeae/chetanblack.png", bio: "Developing front-end components and data visualization for the team portal.", left: "0%", top: "66.66%", width: "25%", height: "33.33%" },
  { id: 110, name: "Sundar", role: "Software Intern", img: "/sundar.jpeg", bio: "Developing front-end components and data visualization for the team portal.", left: "25%", top: "66.66%", width: "25%", height: "33.33%" },
  { id: 111, name: "G. Jayaditya", role: "Creative Developer", img: "/jay.jpeg", bio: "The architect behind this digital experience. Specializing in high-end front-end, creative coding, and pixel-perfect interactions.", left: "50%", top: "66.66%", width: "25%", height: "33.33%" },
  { id: 112, name: "Arev Kumar", role: "Creative Developer", img: "/arev.jpeg", bio: "The architect behind this digital experience. Specializing in high-end front-end, creative coding, and pixel-perfect interactions.", left: "75%", top: "66.66%", width: "25%", height: "33.33%" },
  { id: 113, name: "Shashi Kumar . R", role: "Product Designer", img: "https://ik.imagekit.io/0s6dxbeae/vikram.png", bio: "Designing intuitive digital experiences with a focus on usability, clean interfaces, and seamless user interactions. ", left: "0", top: "99.99%", width: "25%", height: "33.33%" }
];

// 'use client'

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const LOGO_URL = "/navbar/logo.svg"; 

// const getRandomDelay = () => Math.random() * 1.2;

// const TEAM_CORE = [
//   { id: 1, name: "Julian Voss", role: "Founder", img: "https://picsum.photos/seed/1/600", left: "0%", top: "0%", width: "33.33%", height: "50%" },
//   { id: 2, name: "Elena Rossi", role: "Design", img: "https://picsum.photos/seed/2/600", left: "33.33%", top: "0%", width: "33.33%", height: "50%" },
//   { id: 3, name: "Kaito Sato", role: "Tech", img: "https://picsum.photos/seed/3/600", left: "66.66%", top: "0%", width: "33.33%", height: "50%" },
//   { id: 4, name: "Aiden Vance", role: "Ops", img: "https://picsum.photos/seed/4/600", left: "0%", top: "50%", width: "25%", height: "50%" },
//   { id: 5, name: "Lara Croft", role: "UX", img: "https://picsum.photos/seed/5/600", left: "25%", top: "50%", width: "25%", height: "50%" },
//   { id: 6, name: "Marcus Thorne", role: "Motion", img: "https://picsum.photos/seed/6/600", left: "50%", top: "50%", width: "25%", height: "50%" },
//   { id: 7, name: "Sarah Jenkins", role: "Product", img: "https://picsum.photos/seed/7/600", left: "75%", top: "50%", width: "25%", height: "50%" },
// ].map(m => ({ ...m, delay: getRandomDelay() }));

// const INTERNS = [
//   { id: 101, name: "Intern A", role: "Frontend Dev", img: "https://picsum.photos/seed/a/600", left: "0%", top: "0%", width: "25%", height: "33.33%" },
//   { id: 102, name: "Intern B", role: "UI Designer", img: "https://picsum.photos/seed/b/600", left: "25%", top: "0%", width: "25%", height: "33.33%" },
//   { id: 103, name: "Intern C", role: "Visual Design", img: "https://picsum.photos/seed/c/600", left: "50%", top: "0%", width: "25%", height: "33.33%" },
//   { id: 104, name: "Intern D", role: "Backend Dev", img: "https://picsum.photos/seed/d/600", left: "75%", top: "0%", width: "25%", height: "33.33%" },
//   { id: 105, name: "Intern E", role: "Cybersecurity", img: "https://picsum.photos/seed/e/600", left: "0%", top: "33.33%", width: "25%", height: "33.33%" },
//   { id: 106, name: "Intern F", role: "AI Research", img: "https://picsum.photos/seed/f/600", left: "25%", top: "33.33%", width: "25%", height: "33.33%" },
//   { id: 107, name: "Intern G", role: "Motion Graphics", img: "https://picsum.photos/seed/g/600", left: "50%", top: "33.33%", width: "25%", height: "33.33%" },
//   { id: 108, name: "Intern H", role: "App Developer", img: "https://picsum.photos/seed/h/600", left: "75%", top: "33.33%", width: "25%", height: "33.33%" },
//   { id: 109, name: "Intern I", role: "Fullstack Dev", img: "https://picsum.photos/seed/i/600", left: "0%", top: "66.66%", width: "33.33%", height: "33.33%" },
//   { id: 110, name: "Intern J", role: "Product Design", img: "https://picsum.photos/seed/j/600", left: "33.33%", top: "66.66%", width: "33.33%", height: "33.33%" },
//   { id: 111, name: "Intern K", role: "Data Science", img: "https://picsum.photos/seed/k/600", left: "66.66%", top: "66.66%", width: "33.33%", height: "33.33%" },
// ].map(i => ({ ...i, delay: getRandomDelay() }));

// export default function GalacticStaggeredTeam() {
//   return (
//     <div className="min-h-screen bg-[#050505] flex flex-col items-center gap-64 py-40 overflow-x-hidden">
      
//       {/* SECTION 1: CORE TEAM */}
//       <TeamSection title="Core Leadership" data={TEAM_CORE} aspect="md:aspect-[21/9] aspect-[16/10]" />

//       {/* SECTION 2: INTERNS */}
//       <TeamSection title="The Engine Room" data={INTERNS} aspect="aspect-[16/12]" />

//     </div>
//   );
// }

// function TeamSection({ title, data, aspect }: any) {
//   const [isAssembled, setIsAssembled] = useState(true);
//   const [hasStarted, setHasStarted] = useState(false);

//   // Trigger the flip 3 seconds after the section enters the viewport
//   useEffect(() => {
//     if (hasStarted) {
//       const timer = setTimeout(() => setIsAssembled(false), 3500);
//       return () => clearTimeout(timer);
//     }
//   }, [hasStarted]);

//   return (
//     <motion.div 
//       onViewportEnter={() => setHasStarted(true)}
//       viewport={{ once: true, amount: 0.3 }}
//       className="w-full max-w-7xl px-6"
//     >
//       <h2 className="text-[11px] font-mono text-red-600 tracking-[1.5em] uppercase mb-12 opacity-80 border-l-2 border-red-600 pl-4">
//         {title}
//       </h2>
      
//       <div className={`relative w-full ${aspect}`}>
//         {data.map((m: any) => (
//           <motion.div
//             key={m.id}
//             initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
//             animate={hasStarted ? { 
//               opacity: 1, 
//               scale: 1, 
//               filter: 'blur(0px)',
//               left: m.left, top: m.top, width: m.width, height: m.height,
//               padding: isAssembled ? "0px" : "12px" 
//             } : {}}
//             transition={{ 
//               opacity: { delay: m.delay, duration: 0.8 },
//               scale: { delay: m.delay, duration: 0.8 },
//               filter: { delay: m.delay, duration: 1 },
//               default: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } 
//             }}
//             className="absolute"
//           >
//             <FlipTile member={m} isAssembled={isAssembled} />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function FlipTile({ member, isAssembled }: any) {
//   return (
//     <div className="relative w-full h-full [perspective:2000px]">
//       <motion.div
//         animate={{ rotateY: isAssembled ? 0 : 180 }}
//         transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
//         className="relative w-full h-full [transform-style:preserve-3d]"
//       >
//         {/* FRONT: LOGO SLICE */}
//         <div className="absolute inset-0 backface-hidden overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
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

//         {/* BACK: MEMBER DATA */}
//         <div 
//           className="absolute inset-0 backface-hidden overflow-hidden bg-[#0c0c0c] [transform:rotateY(180deg)] rounded-[1.5rem] border border-white/10 shadow-2xl"
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <img 
//             src={member.img} 
//             className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" 
//             alt={member.name} 
//           />
          
//           {/* Enhanced Text Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
//           <div className="absolute bottom-8 left-8 right-8">
//             <motion.p 
//               animate={{ opacity: isAssembled ? 0 : 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-[0.3em] mb-2"
//             >
//               {member.role}
//             </motion.p>
//             <motion.h3 
//               animate={{ opacity: isAssembled ? 0 : 1 }}
//               transition={{ delay: 0.6 }}
//               className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-md"
//             >
//               {member.name}
//             </motion.h3>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





// 'use client'

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const LOGO_URL = "/navbar/logo.svg"; 

// const getRandomDelay = () => Math.random() * 0.8;

// const TEAM_CORE = [
//   { id: 1, name: "Julian Voss", role: "Founder", bio: "Visionary architect behind Galactic's core engine with 15+ years in neural networks.", img: "https://picsum.photos/seed/1/800", left: "0%", top: "0%", width: "33.33%", height: "50%" },
//   { id: 2, name: "Elena Rossi", role: "Design", bio: "Leading the aesthetic frontier, Elena blends brutalist digital art with fluid UX.", img: "https://picsum.photos/seed/2/800", left: "33.33%", top: "0%", width: "33.33%", height: "50%" },
//   { id: 3, name: "Kaito Sato", role: "Tech", bio: "Specialist in high-concurrency systems and the lead developer of our Three.js engine.", img: "https://picsum.photos/seed/3/800", left: "66.66%", top: "0%", width: "33.33%", height: "50%" },
//   { id: 4, name: "Aiden Vance", role: "Ops", bio: "Ensuring the monolith runs without friction, managing our global infrastructure.", img: "https://picsum.photos/seed/4/800", left: "0%", top: "50%", width: "25%", height: "50%" },
//   { id: 5, name: "Lara Croft", role: "UX", bio: "Mapping human behavior into digital interactions to create seamless user journeys.", img: "https://picsum.photos/seed/5/800", left: "25%", top: "50%", width: "25%", height: "50%" },
//   { id: 6, name: "Marcus Thorne", role: "Motion", bio: "The master of GSAP and Framer Motion, bringing life to every static pixel.", img: "https://picsum.photos/seed/6/800", left: "50%", top: "50%", width: "25%", height: "50%" },
//   { id: 7, name: "Sarah Jenkins", role: "Product", bio: "Bridging the gap between technical possibility and market necessity.", img: "https://picsum.photos/seed/7/800", left: "75%", top: "50%", width: "25%", height: "50%" },
// ].map(m => ({ ...m, delay: getRandomDelay() }));

// const INTERNS = [
//   // ROW 1: 4 Items (Top: 0%)
//   { id: 101, name: "Intern A", role: "Frontend Dev", bio: "Exploring the depths of React and high-end styling.", img: "https://picsum.photos/seed/a/800", left: "0%", top: "0%", width: "25%", height: "33.33%" },
//   { id: 102, name: "Intern B", role: "UI Designer", bio: "Crafting pixel-perfect layouts.", img: "https://picsum.photos/seed/b/800", left: "25%", top: "0%", width: "25%", height: "33.33%" },
//   { id: 103, name: "Intern C", role: "UX Researcher", bio: "Digging deep into user behavior and data.", img: "https://picsum.photos/seed/c/800", left: "50%", top: "0%", width: "25%", height: "33.33%" },
//   { id: 104, name: "Intern D", role: "Motion Artist", bio: "Bringing static interfaces to life with GSAP.", img: "https://picsum.photos/seed/d/800", left: "75%", top: "0%", width: "25%", height: "33.33%" },

//   // ROW 2: 4 Items (Top: 33.33%)
//   { id: 105, name: "Intern E", role: "Backend Dev", bio: "Scaling server-side logic and database architecture.", img: "https://picsum.photos/seed/e/800", left: "0%", top: "33.33%", width: "25%", height: "33.33%" },
//   { id: 106, name: "Intern F", role: "Product Manager", bio: "Managing timelines and feature roadmaps.", img: "https://picsum.photos/seed/f/800", left: "25%", top: "33.33%", width: "25%", height: "33.33%" },
//   { id: 107, name: "Intern G", role: "AI Engineer", bio: "Integrating LLMs and neural networks into UX.", img: "https://picsum.photos/seed/g/800", left: "50%", top: "33.33%", width: "25%", height: "33.33%" },
//   { id: 108, name: "Intern H", role: "Cybersecurity", bio: "Protecting the monolith from external threats.", img: "https://picsum.photos/seed/h/800", left: "75%", top: "33.33%", width: "25%", height: "33.33%" },

//   // ROW 3: 3 Items (Top: 66.66%)
//   { id: 109, name: "Intern I", role: "Fullstack Dev", bio: "The bridge between visual design and technical reality.", img: "https://picsum.photos/seed/i/800", left: "0%", top: "66.66%", width: "33.33%", height: "33.33%" },
//   { id: 110, name: "Intern J", role: "Visual Design", bio: "Expert in brand identity and typography.", img: "https://picsum.photos/seed/j/800", left: "33.33%", top: "66.66%", width: "33.33%", height: "33.33%" },
//   { id: 111, name: "Intern K", role: "Creative Coder", bio: "Experimenting with Three.js and WebGL particles.", img: "https://picsum.photos/seed/k/800", left: "66.66%", top: "66.66%", width: "33.33%", height: "33.33%" },
// ].map(i => ({ ...i, delay: getRandomDelay() }));

// export default function GalacticStaggeredTeam() {
//   const [selectedMember, setSelectedMember] = useState<any>(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   // Custom Cursor Logic
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const allMembers = [...TEAM_CORE, ...INTERNS];

//   const navigateMember = (direction: number) => {
//     const currentIndex = allMembers.findIndex(m => m.id === selectedMember.id);
//     let nextIndex = currentIndex + direction;
//     if (nextIndex < 0) nextIndex = allMembers.length - 1;
//     if (nextIndex >= allMembers.length) nextIndex = 0;
//     setSelectedMember(allMembers[nextIndex]);
//   };

//   return (
//     <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center gap-64 py-40 overflow-x-hidden cursor-none">
      
//       {/* View Follower */}
//       <motion.div 
//         className="fixed top-0 left-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter pointer-events-none z-[9999]"
//         animate={{ 
//           x: mousePos.x - 24, 
//           y: mousePos.y - 24,
//           scale: isHovering ? 1 : 0,
//           opacity: isHovering ? 1 : 0
//         }}
//       >
//         View
//       </motion.div>

//       <TeamSection 
//         title="Leadership" 
//         data={TEAM_CORE} 
//         aspect="md:aspect-[21/9] aspect-[16/10]" 
//         onMemberClick={setSelectedMember} 
//         setIsHovering={setIsHovering}
//       />

//       <TeamSection 
//         title="Intern Engine" 
//         data={INTERNS} 
//         aspect="aspect-[16/12]" 
//         onMemberClick={setSelectedMember} 
//         setIsHovering={setIsHovering}
//       />

//       {/* Modal Overlay */}
//       <AnimatePresence>
//         {selectedMember && (
//           <>
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedMember(null)}
//               className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] cursor-auto"
//             />
//             <motion.div 
//               layoutId={`card-${selectedMember.id}`}
//               className="fixed inset-4 md:inset-20 bg-[#0a0a0a] border border-white/10 rounded-3xl z-[101] overflow-hidden flex flex-col md:flex-row cursor-auto shadow-2xl"
//             >
//               <div className="w-full md:w-1/2 h-64 md:h-auto relative">
//                 <img src={selectedMember.img} className="w-full h-full object-cover" alt={selectedMember.name} />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
//               </div>

//               <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative">
//                 <button 
//                   onClick={() => setSelectedMember(null)}
//                   className="absolute top-8 right-8 text-white/40 hover:text-red-500 transition-colors"
//                 >
//                   <X size={32} />
//                 </button>

//                 <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-red-500 font-mono tracking-[0.4em] uppercase text-sm mb-4">
//                   {selectedMember.role}
//                 </motion.p>
//                 <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">
//                   {selectedMember.name}
//                 </motion.h2>
//                 <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed">
//                   {selectedMember.bio}
//                 </motion.p>

//                 <div className="flex gap-4 mt-12">
//                   <button onClick={() => navigateMember(-1)} className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"><ChevronLeft /></button>
//                   <button onClick={() => navigateMember(1)} className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"><ChevronRight /></button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function TeamSection({ title, data, aspect, onMemberClick, setIsHovering }: any) {
//   const [isAssembled, setIsAssembled] = useState(true);
//   const [hasStarted, setHasStarted] = useState(false);

//   useEffect(() => {
//     if (hasStarted) {
//       const timer = setTimeout(() => setIsAssembled(false), 3500);
//       return () => clearTimeout(timer);
//     }
//   }, [hasStarted]);

//   return (
//     <motion.div 
//       onViewportEnter={() => setHasStarted(true)}
//       viewport={{ once: true, amount: 0.2 }}
//       className="w-full max-w-7xl px-6"
//     >
//       <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-16 border-l-8 border-red-600 pl-6">
//         {title}
//       </h2>
      
//       <div className={`relative w-full ${aspect}`}>
//         {data.map((m: any) => (
//           <motion.div
//             layoutId={`card-${m.id}`}
//             key={m.id}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={hasStarted ? { opacity: 1, scale: 1, left: m.left, top: m.top, width: m.width, height: m.height, padding: isAssembled ? "0px" : "12px" } : {}}
//             transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
//             className="absolute"
//             onMouseEnter={() => !isAssembled && setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             onClick={() => !isAssembled && onMemberClick(m)}
//           >
//             <FlipTile member={m} isAssembled={isAssembled} />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function FlipTile({ member, isAssembled }: any) {
//   return (
//     <div className="relative w-full h-full [perspective:2000px]">
//       <motion.div
//         animate={{ rotateY: isAssembled ? 0 : 180 }}
//         transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
//         className="relative w-full h-full [transform-style:preserve-3d]"
//       >
//         {/* FRONT */}
//         <div className="absolute inset-0 backface-hidden overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
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

//         {/* BACK */}
//         <div 
//           className="absolute inset-0 backface-hidden overflow-hidden bg-[#111] [transform:rotateY(180deg)] rounded-3xl border border-white/10 shadow-2xl"
//           style={{ backfaceVisibility: 'hidden' }}
//         >
//           <img src={member.img} className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-700" alt={member.name} />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
//           <div className="absolute bottom-8 left-8 right-8">
//             <p className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-[0.3em] mb-2">{member.role}</p>
//             <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none text-white">{member.name}</h3>
//           </div>
//         </div>
//       </motion.div>
//     </div>
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
            <motion.p className="font-mono text-[10px] tracking-[0.5em] text-red-600 uppercase font-bold">
              AUTH_LEVEL_0{index + 1}
            </motion.p>
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
          <h2 className="text-7xl lg:text-[140px] font-black text-white tracking-tighter leading-[0.75] uppercase italic">
            The Minds<br />
            <span className="text-red-600 opacity-80">Behind Galactic 3D</span>
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start pt-12 gap-8 border-t border-white/5">
             <p className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase">Auth_Level: Absolute</p>
             <p className="max-w-xl text-white/40 text-xl font-light">
               Synthesis of <span className="text-white font-bold italic">25+ years</span> industrial experience and advanced computational research.
             </p>
          </div>
        </div>

        <div>
          {TEAM_CORE.map((member, i) => (
            <LeaderRow key={member.id} member={member} index={i} onSelect={setSelectedId} />
          ))}
        </div>
      </section>

      {/* INTERN SECTION (Bento Grid) */}
      <section className="py-64 flex flex-col items-center">
        <TeamGrid title="Intern Engine" data={INTERNS} aspect="aspect-[16/12]" onSelect={setSelectedId} setIsHovering={setIsHovering} transition={TRANSITION} />
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
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] uppercase italic leading-none">
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
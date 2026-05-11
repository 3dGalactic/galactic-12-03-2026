// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import styles from "../team/team.module.css";

// const MEMBERS = [
//   {
//     id: 1,
//     name: "Aabid Khan",
//     role: "Founder & CTO",
//     img: "/footer/profile1.jpg",
//   },
//   {
//     id: 2,
//     name: "Priya Rao",
//     role: "Head of Production",
//     img: "/footer/profile2.jpg",
//   },
//   {
//     id: 3,
//     name: "Miguel Santos",
//     role: "Lead Designer",
//     img: "/footer/profile3.jpg",
//   },
//   {
//     id: 4,
//     name: "Sarah Chen",
//     role: "Materials Engineer",
//     img: "/footer/profile1.jpg",
//   },
//   {
//     id: 5,
//     name: "James Mitchell",
//     role: "Business Development",
//     img: "/footer/profile2.jpg",
//   },
//   {
//     id: 6,
//     name: "Lisa Park",
//     role: "UX/Product Lead",
//     img: "/footer/profile3.jpg",
//   }
// ];

// export default function TeamCarousel() {
//   const carouselRef = useRef(null);

//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       const scrollAmount = 340;
//       carouselRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <section style={{ padding: "60px 20px", background: "#2f1212" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "60px", paddingRight: "60px" }}>
//         <div style={{ marginBottom: "40px" }}>
//           <h2 style={{ textAlign: "center", fontSize: "42px", fontWeight: "700", color: "#fff", margin: 0 }}>
//             Meet Our Brilliant Minds
//           </h2>
//           <p style={{ textAlign: "center", color: "#9ca3af", marginTop: "12px", fontSize: "16px" }}>
//             A world-class team dedicated to pushing the boundaries of additive manufacturing
//           </p>
//         </div>

//         <div className={styles.carouselWrapper}>
//           <button 
//             className={styles.arrowBtn} 
//             onClick={() => scroll("left")}
//             aria-label="Scroll left"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <section ref={carouselRef} className={styles.carousel}>
//             {MEMBERS.map((m) => (
//               <Link key={m.id} href={`/team/${m.id}`} className={styles.cardLink}>
//                 <div className={styles.card}>
//                   <Image
//                     src={m.img}
//                     alt={m.name}
//                     fill
//                     className={styles.image}
//                   />

//                   <div className={styles.overlay}></div>

//                   <div className={styles.info}>
//                     <p className={styles.role}>{m.role}</p>
//                     <h3 className={styles.name}>{m.name}</h3>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </section>

//           <button 
//             className={styles.arrowBtn} 
//             onClick={() => scroll("right")}
//             aria-label="Scroll right"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         <div style={{ textAlign: "center", marginTop: "30px" }}>
//           <Link 
//             href="/team" 
//             style={{
//               display: "inline-block",
//               color: "#ef4444",
//               textDecoration: "none",
//               fontWeight: "600",
//               fontSize: "16px",
//               borderBottom: "2px solid #ef4444",
//               paddingBottom: "4px",
//               transition: "opacity 0.3s"
//             }}
//           >
//             View Full Team →
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


















// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const TEAM = [
//   // Top Row (3 People)
//   { name: "Nithin Yadav Mohan", role: "Director & CEO", img: "/nithin.jpg" },
//   { name: "Abid Husen Hakeem", role: "Head Of Business Development", img: "/abid.jpg" },
//   { name: "Dipak Cumar", role: "Head of Training", img: "/dipak.jpg" },
//   // Bottom Row (4 People)
//   { name: "Selva Kyumar S", role: "Head of Production", img: "/slvm.jpeg" },
//   { name: "Bhaskaran", role: "Application Engineer", img: "/bhskrn.jpeg" },
//   { name: "Bharath Kumar S", role: "Business Development Executive", img: "/brth.png" },
//   { name: "Bhramanandan", role: "Finance Officer", img: "/me.jpg" }, 
// ];

// export default function StaggeredTeam() {
//   return (
//     <section className="relative py-32 bg-[#050505] text-white overflow-hidden">
//       <div className="max-w-[1400px] mx-auto px-6">
        
//         {/* HEADER SECTION */}
//         <div className="mb-24 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-12">
//           <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8]">
//             THE <br /> <span className="text-white/20">COLLECTIVE.</span>
//           </h2>
//           <p className="max-w-xs text-sm text-white/40 uppercase tracking-widest leading-relaxed mt-8 md:mt-0">
//             Meet the minds behind additive manufacturing.
//           </p>
//         </div>

//         {/* GRID SYSTEM */}
//         <div className="flex flex-col gap-12">
          
//           {/* TOP ROW: 3 PEOPLE (Wider slots) */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {TEAM.slice(0, 3).map((member, i) => (
//               <TeamMemberCard key={i} member={member} index={i} />
//             ))}
//           </div>

//           {/* BOTTOM ROW: 4 PEOPLE (Narrower, tighter slots) */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {TEAM.slice(3, 7).map((member, i) => (
//               <TeamMemberCard key={i + 3} member={member} index={i} isSmall />
//             ))}
//           </div>

//         </div>

//         {/* FOOTER CTA */}
//         <div className="mt-24 text-center">
//           <Link href="/team">
//            <motion.button 
//              whileHover={{ scale: 1.05 }}
//              className="px-10 py-4 rounded-full border border-white/20 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors duration-500"
//              >
//              View the Whole Team
//            </motion.button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TeamMemberCard({ member, index, isSmall = false }: { member: any, index: number, isSmall?: boolean }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
//       className="group relative"
//     >
//       <div className={`relative overflow-hidden rounded-xl bg-[#111] border border-white/5 
//         ${isSmall ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
        
//         <Image
//           src={member.img}
//           alt={member.name}
//           fill
//           className="object-cover  transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
//         />

//         {/* OVERLAY ON HOVER */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
//           <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1">{member.role}</p>
//           <h4 className="text-xl font-bold tracking-tighter uppercase">{member.name}</h4>
//         </div>
//       </div>

//       {/* STATIC LABEL (BELOW) */}
//       <div className="mt-4 flex items-center justify-between group-hover:opacity-0 transition-opacity duration-300">
//         <div>
//            <h4 className="text-sm font-bold uppercase tracking-tighter">{member.name}</h4>
//            <p className="text-[9px] text-white/30 uppercase tracking-widest">{member.role}</p>
//         </div>
//         <div className="h-[1px] w-4 bg-white/10" />
//       </div>
//     </motion.div>
//   );
// }





















"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TEAM = [
  {
    name: "Nithin Yadav Mohan",
    role: "Director & CEO",
    img: "https://ik.imagekit.io/0s6dxbeae/nithin.png?updatedAt=1778333557296",
  },
  {
    name: "Aabid Husen Hakeem",
    role: "Head of Business Development",
    img: "https://ik.imagekit.io/0s6dxbeae/abid.png?updatedAt=1778333952944",
  },
  {
    name: "Dipak Cumar",
    role: "Head of Training",
    img: "https://ik.imagekit.io/0s6dxbeae/dipakblack.png?updatedAt=1778335954298",
  },
  {
    name: "Selva Kumar S",
    role: "Head of Production",
    img: "https://ik.imagekit.io/0s6dxbeae/selvam.png?updatedAt=1778331522954",
  },
  {
    name: "Bhaskaran P",
    role: "Application Engineer",
    img: "https://ik.imagekit.io/0s6dxbeae/bhaskar.png?updatedAt=1778336480163",
  },
  {
    name: "Bharath Kumar S",
    role: "Business Development Executive",
    img: "https://ik.imagekit.io/0s6dxbeae/bharath.png?updatedAt=1778331522931",
  },
  {
    name: "Bhramanandam",
    role: "Finance Officer",
    img: "/footer/profile3.jpg",
  },
];

export default function StaggeredTeam() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[70vw] -translate-x-1/2 rounded-full bg-red-600/12 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:12.5vw_100%] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,transparent,rgba(0,0,0,0.9))]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <header className="mb-8 grid gap-6 border-y border-white/10 py-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-red-400">
              Core Team
            </p>

            <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              Team
              <span className="block text-white/24">Signals</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/45 lg:text-right">
            A compact leadership interface. Hover a profile to reveal the active
            signal.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-3 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
                active={active === index}
                onActivate={() => setActive(index)}
              />
            ))}
          </div>

          <aside className="flex min-h-[420px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={TEAM[active].name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-red-400">
                  Active Member
                </p>

                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
                  <Image
                    src={TEAM[active].img}
                    alt={TEAM[active].name}
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <h3 className="text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.06em]">
                  {TEAM[active].name}
                </h3>

                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/38">
                  {TEAM[active].role}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              href="/team"
              className="group mt-8 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45 transition hover:text-white"
            >
              View the Whole Team
              <ArrowUpRight
                size={17}
                className="transition group-hover:rotate-45 group-hover:text-red-400"
              />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
  active,
  onActivate,
}: {
  member: (typeof TEAM)[number];
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`group relative min-h-[300px] overflow-hidden rounded-[1.25rem] border text-left transition duration-500 ${
        active
          ? "border-red-500/50 bg-[#111111]"
          : "border-white/10 bg-black hover:border-white/20"
      }`}
    >
      <Image
        src={member.img}
        alt={member.name}
        fill
        sizes="(max-width: 1024px) 50vw, 22vw"
        className={`object-cover transition duration-700 ${
          active ? "scale-100 grayscale-0" : "scale-105 grayscale opacity-55"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          className={`mb-2 font-mono text-[9px] uppercase tracking-[0.22em] transition ${
            active ? "text-red-400" : "text-white/35"
          }`}
        >
          {member.role}
        </p>

        <h3 className="text-2xl font-semibold uppercase leading-none tracking-[-0.05em] text-white">
          {member.name}
        </h3>
      </div>
    </button>
  );
}

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


















"use client";

import Image from "next/image";
import Link from "next/link";

const IMAGES = [
  "/nithin.jpg",
  "/abid.jpg",
  "/dipak.jpg",
  "/selvam.jpg",
  "/bhaskaran.jpg",
  "/bharath.png",
];

export default function TeamTeaser() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            The Minds Behind Galactic
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Engineers, designers and innovators shaping the future of
            additive manufacturing.
          </p>
        </div>

        {/* COLLAGE */}
        <div className="relative h-[520px] flex items-center justify-center">

          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="absolute w-[180px] h-[220px] md:w-[220px] md:h-[260px]
              rounded-xl overflow-hidden shadow-2xl border border-white/10
              hover:scale-105 transition duration-500"
              style={{
                transform: `
                  translate(${(i % 4) * 220 - 330}px, ${Math.floor(i / 4) * 180 - 120}px)
                  rotate(${(i % 2 === 0 ? -1 : 1) * (i + 3)}deg)
                `
              }}
            >
              <Image
                src={`${img}?w=400`}
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 border border-white/20
            px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            Meet the Full Team →
          </Link>
        </div>

      </div>
    </section>
  );
}
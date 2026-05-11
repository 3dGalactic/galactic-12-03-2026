// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";

// export default function Navbar() {

//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => setScrolled(window.scrollY > 20);
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   const blobRef = useRef(null);
//   const linksRef = useRef([]);

//   // lock background scroll

//   const closeMenu = () => {

//     gsap.to(linksRef.current, {
//       opacity: 0,
//       duration: 0.15
//     });

//     gsap.to(blobRef.current, {
//       width: 46,
//       height: 46,
//       borderRadius: 999,
//       duration: 0.35,
//       ease: "power3.inOut"
//     });

//     setOpen(false);
//   };

//   const toggleMenu = () => {

//     if (!open) {

//       // expand blob
//       gsap.to(blobRef.current, {
//         width: 300,
//         height: 420,
//         borderRadius: 24,
//         duration: 0.45,
//         ease: "power3.out"
//       });

//       // animate links
//       gsap.fromTo(
//         linksRef.current,
//         { opacity: 0, y: 12 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.05,
//           delay: 0.2,
//           duration: 0.3
//         }
//       );

//     } else {

//       // hide links
//       gsap.to(linksRef.current, {
//         opacity: 0,
//         duration: 0.15
//       });

//       // collapse blob
//       gsap.to(blobRef.current, {
//         width: 46,
//         height: 46,
//         borderRadius: 999,
//         duration: 0.35,
//         ease: "power3.inOut"
//       });

//     }

//     setOpen(!open);
//   };

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Upload", href: "/upload" },
//     { name: "Careers", href: "/careers" },
//     { name: "Training", href: "/training" },
//     { name: "Contact", href: "/contact" }
//   ];

//   return (
//     <>
//       {/* LOGO */}
//       <div className="fixed top-6 left-6 z-50">
//   <div className="relative">

//     {/* Blur layer */}
//     <div
//   className={`absolute bg-black/20 inset-0 rounded-lg transition-opacity duration-300
//   ${scrolled ? "opacity-100 backdrop-blur-[6px]" : "opacity-0"}`}
// ></div>

//     {/* Logo */}
//     <Link href="/" className="relative block px-2 py-1">
//       <img src="/navbar/logo.svg" className="h-9 w-auto" />
//     </Link>

//   </div>
// </div>

//       {/* MENU BUTTON + BLOB */}
//       <div className="fixed top-6 right-6 z-50">

//         <div
//           ref={blobRef}
//           className="relative w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden flex flex-col"
//         >

//           {/* BUTTON */}
//           <button
//             onClick={toggleMenu}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 text-lg"
//           >
//             {open ? "✕" : "☰"}
//           </button>

//           {/* MENU CONTENT */}
//           <div className="flex flex-col h-full pt-16 px-10 pb-6 justify-between">

//             {/* LINKS */}
//             <div className="flex flex-col gap-5 text-lg font-neueMontreal">

//               {links.map((link, i) => (
//                 <Link
//                   key={i}
//                   ref={(el) => (linksRef.current[i] = el)}
//                   href={link.href}
//                   className="opacity-0 text-white/80 hover:text-white transition"
//                   onClick={closeMenu}                >
//                   {link.name}
//                 </Link>
//               ))}

//             </div>

//             {/* CTA */}
//             <div className="border-t border-white/10 pt-5">

//               <Link
//                 ref={(el) => (linksRef.current[links.length] = el)}
//                 href="/contact"
//                 onClick={closeMenu}
//                 className="opacity-0 block text-center bg-primary hover:bg-secondary px-4 py-3 rounded-full text-sm font-monumentExtended"
//               >
//                 Get a Quote
//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>
//     </>
//   );
// }














"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const LINKS = [
  { name: "Home", path: "/", id: "01" },
  { name: "Upload", path: "/upload", id: "02" },
  { name: "Careers", path: "/careers", id: "03" },
  { name: "Training", path: "/training", id: "04" },
  { name: "Team", path: "/team", id: "05" },
  { name: "Contact", path: "/contact", id: "06" },
];

export default function GalacticNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pillRef = useRef(null);
  const contentRef = useRef(null);
  const gridItemsRef = useRef([]);

  const toggleMenu = () => {
    const tl = gsap.timeline();

    if (!isOpen) {
      setIsOpen(true);

      tl.to(pillRef.current, {
        width: 600,
        height: 480,
        borderRadius: 24,
        duration: 0.8,
        ease: "expo.inOut",
      });

      tl.to(contentRef.current, { opacity: 1, duration: 0.3 }, "-=0.4");

      tl.fromTo(
        gridItemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );
    } else {
      tl.to(contentRef.current, { opacity: 0, duration: 0.2 });

      tl.to(pillRef.current, {
        width: 44,
        height: 44,
        borderRadius: 999,
        duration: 0.6,
        ease: "expo.inOut",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  return (
    <>
      {/* LOGO */}
      <div className="fixed left-8 top-8 z-[100]">
        <Link
          href="/"
          className="flex h-12 items-center rounded-full border border-white/15 bg-black/45 px-4 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition hover:border-white/25 hover:bg-black/60"
        >
          <img
            src="/navbar/logo.svg"
            alt="Galactic"
            className="h-8 w-auto transition-transform hover:scale-105"
          />
        </Link>
      </div>

      {/* MORPHING PILL */}
      <div className="fixed right-8 top-8 z-[100] flex justify-end">
        <div
          ref={pillRef}
          className="relative overflow-hidden border border-white/10 bg-black/55 shadow-2xl backdrop-blur-2xl transition-colors duration-500 hover:border-white/20"
          style={{ width: 44, height: 44, borderRadius: 999 }}
        >
          <button
            onClick={toggleMenu}
            className="absolute right-0 top-0 z-[110] flex h-11 w-11 items-center justify-center"
          >
            <div className="flex flex-col items-end gap-1">
              <span
                className={`h-px bg-white transition-all duration-500 ${
                  isOpen ? "w-5 translate-y-[2px] rotate-45" : "w-5"
                }`}
              />
              <span
                className={`h-px bg-white transition-all duration-500 ${
                  isOpen ? "w-5 -translate-y-[2px] -rotate-45" : "w-3"
                }`}
              />
            </div>
          </button>

          <div
            ref={contentRef}
            className={`flex h-full flex-col p-10 pt-20 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <nav className="flex-1">
              <p className="mb-4 border-b border-white/10 pb-4 font-mono text-[9px] uppercase tracking-widest text-white/35">
                Navigation Index
              </p>

              <div className="grid grid-cols-2 border border-white/10 text-white">
                {LINKS.map((link, i) => (
                  <Link
                    key={link.id}
                    href={link.path}
                    ref={(el) => (gridItemsRef.current[i] = el)}
                    onClick={toggleMenu}
                    className="group flex items-center justify-between border-b border-white/10 px-6 py-6 hover:bg-white/8"
                    style={{
                      borderRight:
                        i % 2 === 0
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                    }}
                  >
                    <h2 className="text-xl font-light text-white transition-colors">
                      {link.name}
                    </h2>
                    <span className="font-mono text-[11px] text-white/30 transition-colors group-hover:text-red-500">
                      {link.id}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-tighter text-white/30">
                <span>Bengaluru_HQ</span>
                <span>©2026_Galactic</span>
              </div>

              <Link
                href="/contact"
                className="w-full rounded-full bg-white py-4 text-center text-[11px] font-black uppercase tracking-widest text-black transition-colors hover:bg-red-600 hover:text-white"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

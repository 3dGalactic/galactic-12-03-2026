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

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blobRef = useRef(null);
  const contentRef = useRef(null);
  const linksRef = useRef([]);

  const toggleMenu = () => {
    if (!open) {
      setOpen(true);
      const tl = gsap.timeline();

      // 1. Expand Width 
      // We explicitly set height to 44 to ensure it stays a horizontal pill before growing down
      tl.to(blobRef.current, {
        width: 300,
        height: 44, 
        duration: 0.4,
        ease: "expo.out"
      });

      // 2. Expand Height
      // Now grow from 44 to 420
      tl.to(blobRef.current, {
        height: 420,
        borderRadius: 24,
        duration: 0.4,
        ease: "expo.out"
      }, "-=0.2"); // Overlap slightly for a "liquid" feel without the bounce

      // 3. Fade in content
      tl.to(contentRef.current, { opacity: 1, duration: 0.2 }, "-=0.3");
      
      tl.fromTo(
        linksRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out"
        },
        "-=0.2"
      );
    } else {
      const tl = gsap.timeline({ 
        onComplete: () => {
          setOpen(false);
          gsap.set(contentRef.current, { opacity: 0 });
        } 
      });

      // Collapse Height first
      tl.to(blobRef.current, {
        height: 44,
        duration: 0.4,
        ease: "expo.inOut"
      });

      // Collapse Width
      tl.to(blobRef.current, {
        width: 44,
        borderRadius: 999,
        duration: 0.4,
        ease: "expo.inOut"
      }, "-=0.2");
    }
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Upload", href: "/upload" },
    { name: "Careers", href: "/careers" },
    { name: "Training", href: "/training" },
    { name: "Team", href: "/team" }
  ];

  return (
    <>
      {/* LOGO */}
      <div className="fixed top-6 left-6 z-50">
        <div className="relative">
          <div className={`absolute bg-black/20 inset-0 rounded-lg transition-opacity duration-300 ${scrolled ? "opacity-100 backdrop-blur-[6px]" : "opacity-0"}`}></div>
          <Link href="/" className="relative block px-2 py-1">
            <img src="/navbar/logo.svg" className="h-9 w-auto" alt="Logo" />
          </Link>
        </div>
      </div>

      {/* MENU CONTAINER */}
      <div className="fixed top-6 right-6 z-50 flex justify-end">
        <div
          ref={blobRef}
          style={{ maxWidth: 'calc(100vw - 48px)' }}
          className="relative w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden flex flex-col shadow-2xl"
        >
          {/* BUTTON - Centered in the 44px area */}
          <button
            onClick={toggleMenu}
            className="absolute top-0 right-0 w-11 h-11 flex items-center justify-center text-white z-[60] text-xl leading-none"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* INTERNAL CONTENT - Absolute positioned to prevent "snapping" */}
          <div 
            ref={contentRef}
            className={`absolute top-0 right-0 w-[300px] h-[420px] flex flex-col pt-16 px-10 pb-6 justify-between transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="flex flex-col gap-5 text-lg font-neueMontreal">
              {links.map((link, i) => (
                <Link
                  key={i}
                  ref={(el) => (linksRef.current[i] = el)}
                  href={link.href}
                  className="text-white/80 hover:text-white transition whitespace-nowrap"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/10 pt-5">
              <Link
                ref={(el) => (linksRef.current[links.length] = el)}
                href="/contact"
                onClick={toggleMenu}
                className="block text-center bg-primary hover:bg-secondary px-4 py-3 rounded-full text-sm font-monumentExtended whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



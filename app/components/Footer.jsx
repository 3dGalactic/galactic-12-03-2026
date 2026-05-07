// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [subscribeStatus, setSubscribeStatus] = useState(null);

//   const handleSubscribe = (e) => {
//     e.preventDefault();

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setSubscribeStatus("error");
//       return;
//     }

//     // Simulate successful subscription
//     setSubscribeStatus("success");
//     setEmail("");

//     // In a real implementation, you would send this to your API
//     // fetch('/api/subscribe', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ email })
//     // });
//   };

//   return (
//     <footer className="bg-gradient-to-br from-dark-500 via-background-dark to-dark-400 text-white pt-16 pb-8">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Column 1: Company Info */}
//           <div>
//             <div className="mb-4">
//               {/* Logo - replace with your actual logo */}
//               <div className="text-white font-bold text-2xl mb-2 font-monument">
//                 GALACTIC 3D
//               </div>
//             </div>
//             <p className="text-gray-300 mb-6">
//               Shaping the Future with Additive Manufacturing.
//             </p>

//             {/* Address with Google Maps link */}
//             <div className="mb-4">
//               <a
//                 href="https://maps.google.com/?q=Cambridge+Institute+of+Technology,+Jai+Bhuvaneshwari+Layout+Road,+SR+Layout,+Krishnarajapuram,+Bengaluru,+Karnataka+560036"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-primary transition-all duration-300 flex items-start"
//               >
//                 <svg
//                   className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   ></path>
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   ></path>
//                 </svg>
//                 <span>
//                   Cambridge Institute of Technology,
//                   <br />
//                   Jai Bhuvaneshwari Layout Road,
//                   <br />
//                   SR Layout, Krishnarajapuram,
//                   <br />
//                   Bengaluru, Karnataka 560036
//                 </span>
//               </a>
//             </div>

//             {/* Contact info */}
//             <div className="mb-2">
//               <a
//                 href="tel:+919740331995"
//                 className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 text-primary mr-2 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   ></path>
//                 </svg>
//                 <span>+91 97403 31995</span>
//               </a>
//             </div>

//             <div className="mb-2">
//               <a
//                 href="mailto:aabid@galactic-3d.com"
//                 className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 text-primary mr-2 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   ></path>
//                 </svg>
//                 <span>aabid@galactic-3d.com</span>
//               </a>
//             </div>

//             <div>
//               <a
//                 href="https://www.galactic-3d.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 text-primary mr-2 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                   ></path>
//                 </svg>
//                 <span>www.galactic-3d.com</span>
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 font-aeonik">Quick Links</h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/marketplace"
//                   className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
//                 >
//                   Marketplace
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/resources"
//                   className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
//                 >
//                   Resources
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: Social Media */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 font-aeonik">
//               Connect With Us
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {/* LinkedIn */}
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
//                 aria-label="LinkedIn"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </a>

//               {/* Instagram */}
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
//                 aria-label="Instagram"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                 </svg>
//               </a>

//               {/* Twitter/X */}
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
//                 aria-label="Twitter/X"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
//                 </svg>
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
//                 aria-label="YouTube"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                 </svg>
//               </a>
//             </div>

//             <div className="mt-8">
//               <h4 className="text-lg font-semibold mb-2 font-aeonik">
//                 Business Hours
//               </h4>
//               <div className="text-gray-400 flex items-center">
//                 <svg
//                   className="w-5 h-5 text-primary mr-2 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                   ></path>
//                 </svg>
//                 <span>Monday - Friday: 9AM - 6PM</span>
//               </div>
//             </div>
//           </div>

//           {/* Column 4: Newsletter Signup */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 font-aeonik">
//               Newsletter Signup
//             </h3>
//             <form onSubmit={handleSubscribe} className="mb-4">
//               <div className="relative">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full bg-dark-300 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="mt-3 w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-4 rounded-md transition-all duration-300"
//                 >
//                   Subscribe 🚀
//                 </button>
//               </div>

//               {/* Status messages */}
//               {subscribeStatus === "success" && (
//                 <p className="text-green-400 text-sm mt-2">
//                   Thanks! You're now part of our community.
//                 </p>
//               )}
//               {subscribeStatus === "error" && (
//                 <p className="text-red-400 text-sm mt-2">
//                   Please enter a valid email.
//                 </p>
//               )}
//             </form>
//             <p className="text-gray-400 text-sm">
//               Join our newsletter to stay updated with the latest news, product
//               launches, and exclusive offers.
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 my-8"></div>

//         {/* Bottom Bar (Legal) */}
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-500 text-sm mb-4 md:mb-0">
//             &copy; {new Date().getFullYear()} Galactic 3D. All Rights Reserved.
//           </p>
//           <div className="flex space-x-6">
//             <Link
//               href="/terms"
//               className="text-gray-500 hover:text-primary text-sm transition-all duration-300"
//             >
//               Terms of Service
//             </Link>
//             <Link
//               href="/privacy"
//               className="text-gray-500 hover:text-primary text-sm transition-all duration-300"
//             >
//               Privacy Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




















"use client";

import Link from "next/link";
import { useState } from "react";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {

  const [email,setEmail]=useState("");
  const [status,setStatus]=useState(null);

  const handleSubscribe=(e)=>{
    e.preventDefault();

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="text-white w-full">

      {/* GLASS STRIP */}
      <div className="w-full border-t border-white/10 bg-white/[0.04] backdrop-blur-md px-[5vw] py-6">

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* BRAND */}
          <div className="space-y-2">

            <h3 className="font-monument text-xl">
              GALACTIC 3D
            </h3>

            <p className="text-gray-400 text-xs max-w-xs">
              Shaping the future with additive manufacturing.
            </p>

          </div>


          {/* NAV + NEWSLETTER */}
          <div className="space-y-4">

            {/* NAVIGATION */}
            <div className="flex flex-wrap gap-2">

              {[
                {name:"Home",href:"/"},
                {name:"Upload",href:"/upload"},
                {name:"Careers",href:"/careers"},
                {name:"Training",href:"/training"},
                {name:"Team",href:"/team"},
                {name:"Contact",href:"/contact"}
              ].map((item,i)=>(
                <Link
                  key={i}
                  href={item.href}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-primary transition"
                >
                  {item.name}
                </Link>
              ))}

            </div>

            

            

          </div>


          {/* CONTACT + SOCIAL */}
          <div className="space-y-4">

            {/* ADDRESS */}
            <div className="text-gray-400 text-xs leading-relaxed">

              Cambridge Institute of Technology <br/>
              Krishnarajapuram, Bengaluru

            </div>

            {/* CONTACT CHIPS */}
            <div className="flex flex-wrap gap-2 text-[11px]">

              <a
                href="tel:+919740331995"
                className="px-2.5 py-1 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-primary transition"
              >
                +91 97403 31995
              </a>

              <a
                href="mailto:aabid@galactic-3d.com"
                className="px-2.5 py-1 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-primary transition"
              >
                aabid@galactic-3d.com
              </a>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-2">

              {[
                {icon:Linkedin,href:"https://www.linkedin.com/company/galactic-3d/posts/?feedView=all"},
                {icon:Instagram,href:"https://www.instagram.com/galactic.3d/?hl=en"},
              
                // {icon:Youtube,href:"#"}
              ].map(({icon:Icon,href},i)=>(
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition"
                >
                  <Icon size={16}/>
                </a>
              ))}

            </div>

          </div>

        </div>


        {/* LEGAL */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 border-t border-white/10 mt-6 pt-3">

          <span>
            © {new Date().getFullYear()} Galactic 3D
          </span>

          <div className="flex gap-4 mt-1 md:mt-0">

            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>

            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

















// "use client";

// import React, { useRef } from "react";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function GalacticVoidFooter() {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end end"],
//   });

//   // Dramatic tracking expansion for that "High-End" look
//   const tracking = useTransform(scrollYProgress, [0, 1], ["-0.1em", "0.5em"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.3, 1]);

//   return (
//     <footer 
//       ref={targetRef} 
//       className="relative h-[120vh] bg-[#000] text-white flex flex-col justify-between p-[4vw] overflow-hidden font-sans"
//     >
//       {/* 01. THE KINETIC ANCHOR (Framer Motion) */}
//       <div className="flex-1 flex flex-col justify-center">
//         <motion.div style={{ opacity }} className="space-y-4">
//           <span className="text-[10px] uppercase tracking-[1em] text-white/40 block ml-2">
//             Initiate Project
//           </span>
//           <Link href="/contact" className="group block">
//             <motion.h2 
//               style={{ letterSpacing: tracking }}
//               className="text-[12vw] font-black uppercase leading-none font-monument transition-all duration-1000 group-hover:italic"
//             >
//               Contact
//             </motion.h2>
//           </Link>
//         </motion.div>
//       </div>

//       {/* 02. THE "SWISS-OS" DATA GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-12">
        
//         {/* COL 1: SYSTEM INFO */}
//         <div className="md:col-span-4 space-y-8">
//           <div className="flex items-center gap-4">
//             <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//             <span className="text-[10px] uppercase tracking-widest font-bold">Galactic_Core_Active</span>
//           </div>
//           <p className="text-sm font-light text-white/60 max-w-xs leading-tight">
//             Specializing in high-end, immersive web experiences and additive manufacturing logic.
//           </p>
//         </div>

//         {/* COL 2: NAV (STRICT ALIGNMENT) */}
//         <div className="md:col-span-4 grid grid-cols-2 gap-4">
//           <div className="flex flex-col gap-3">
//             <span className="text-[10px] uppercase text-white/30 tracking-widest mb-2">INDEX</span>
//             {["Upload", "Training", "Team"].map((item) => (
//               <Link key={item} href={`/${item.toLowerCase()}`} className="text-xs uppercase hover:text-primary transition-colors tracking-tighter">
//                 {item}
//               </Link>
//             ))}
//           </div>
//           <div className="flex flex-col gap-3">
//             <span className="text-[10px] uppercase text-white/30 tracking-widest mb-2">SOCIAL</span>
//             {["LinkedIn", "Instagram", "GitHub"].map((item) => (
//               <a key={item} href="#" className="text-xs uppercase hover:italic transition-all tracking-tighter">
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* COL 3: METRICS */}
//         <div className="md:col-span-4 flex flex-col justify-between items-end text-right">
//           <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
//             <p>Loc: 13.0113° N, 77.7126° E</p>
//             <p>Node: BENGALURU_KA</p>
//           </div>
//           <div className="text-[8vw] font-black leading-none opacity-5 select-none">
//             2026
//           </div>
//         </div>
//       </div>

//       {/* 03. THE SIGNATURE */}
//       <div className="mt-20 flex justify-between items-end border-t border-white/5 pt-6">
//         <div className="text-[9px] uppercase tracking-[0.5em] text-white/30">
//           Built for the Future of Fabrication
//         </div>
//         <div className="text-[9px] uppercase tracking-[0.5em] text-white/30 italic">
//           Design & Dev by Jayaditya
//         </div>
//       </div>

//       {/* 🌫️ THE "GRAIN" OVERLAY */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
//     </footer>
//   );
// }
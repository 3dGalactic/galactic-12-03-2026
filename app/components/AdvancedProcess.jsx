// "use client";
// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//     {
//         id: "01",
//         title: "Consultation & Design",
//         description: "We begin with a deep dive into your requirements. Our engineers work with CAD to optimize designs for additive manufacturing (DFAM), ensuring feasibility and cost-efficiency.",
//         image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop",
//         color: "blue",
//     },
//     {
//         id: "02",
//         title: "Rapid Prototyping",
//         description: "Fail fast, learn faster. We produce initial functional prototypes to validate form, fit, and function before committing to full-scale production runs.",
//         image: "https://images.unsplash.com/photo-1581090405962-9a28c1b1f7b3?q=80&w=1600&auto=format&fit=crop",
//         color: "purple",
//     },
//     {
//         id: "03",
//         title: "Process Assurance",
//         description: "Quality is built steps before the printer starts. We simulate build strategies and verify material batches to guarantee repeatable, high-integrity parts.",
//         image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
//         color: "cyan",
//     },
//     {
//         id: "04",
//         title: "Production",
//         description: "Using our fleet of industrial SLS, DMLS, and FDM machines, we execute production runs with precision. Our 24/7 facility ensures rapid turnaround times.",
//         image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
//         color: "red",
//     },
//     {
//         id: "05",
//         title: "Delivery & Logistics",
//         description: "Finished parts are post-processed, inspected, packed with care, and shipped globally. We handle the logistics so you can focus on innovation.",
//         image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
//         color: "orange",
//     },
// ];

// export default function AdvancedProcess() {
//     const containerRef = useRef(null);
//     const sliderRef = useRef(null);

//     useLayoutEffect(() => {
//         let ctx = gsap.context(() => {
//             const slides = sliderRef.current.children;
//             const totalSlides = slides.length;

//             gsap.to(sliderRef.current, {
//                 xPercent: -100 * (totalSlides - 1),
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     pin: true,
//                     scrub: 1,
//                     start: "top top",
//                     end: () => `+=${window.innerWidth * 1.5}`, // Tighter scroll for 5 steps
//                     invalidateOnRefresh: true,
//                 },
//             });

//         }, containerRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section
//             ref={containerRef}
//             className="relative w-full h-screen overflow-hidden"
//         >
//             <div
//                 ref={sliderRef}
//                 className="flex h-full w-[100vw] bg-black text-white"
//             >
//                 {steps.map((step) => (
//                     <div
//                         key={step.id}
//                         className="w-screen h-full relative flex items-center justify-center p-6 md:p-20 shrink-0"
//                     >
//                         {/* Background Image */}
//                         <div
//                             className="absolute inset-0 z-0 bg-cover bg-center"
//                             style={{
//                                 backgroundImage: `url(${step.image})`,
//                             }}
//                         >
//                             <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
//                         </div>

//                         {/* Glass Card */}
//                         <div className="relative z-10 w-full max-w-5xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12 items-center overflow-hidden">

//                             {/* Decorative Glow */}
//                             <div className={`absolute -top-20 -left-20 w-64 h-64 bg-${step.color}-500/20 rounded-full blur-[100px] pointer-events-none`} />
//                             <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-${step.color}-500/20 rounded-full blur-[100px] pointer-events-none`} />

//                             {/* Number */}
//                             <div className="absolute top-4 right-8 md:static md:w-auto">
//                                 <span className="text-6xl md:text-9xl font-['test'] font-bold text-white/5 md:text-white/10 select-none">
//                                     {step.id}
//                                 </span>
//                             </div>

//                             {/* Content */}
//                             <div className="flex-1 relative z-20 text-center md:text-left">
//                                 <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-${step.color}-500/30 bg-${step.color}-500/10 text-${step.color}-400 text-xs font-bold uppercase tracking-widest`}>
//                                     <span className={`w-2 h-2 rounded-full bg-${step.color}-400 animate-pulse`} />
//                                     Manufacturing Stage {step.id}
//                                 </div>

//                                 <h2 className="text-3xl md:text-6xl font-['dena'] mb-6 leading-tight text-white drop-shadow-lg">
//                                     {step.title}
//                                 </h2>

//                                 <p className="text-lg md:text-xl text-gray-200 font-['scrib'] leading-relaxed max-w-2xl mx-auto md:mx-0">
//                                     {step.description}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }























"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "01",
    title: "Consultation & Design",
    description:
      "We collaborate closely with your engineering teams to optimize designs for additive manufacturing and ensure cost-efficient builds.",
    image:
      "https://ik.imagekit.io/0s6dxbeae/landscape.png",
  },
  {
    id: "02",
    title: "Rapid Prototyping",
    description:
      "Functional prototypes allow quick validation of form, fit and mechanical performance before production begins.",
    image:
      "./dragon.png",
  },
  {
    id: "03",
    title: "Process Assurance",
    description:
      "We simulate builds and validate materials to guarantee repeatability and structural integrity.",
    image:
      "./PA.jpg",
  },
  {
    id: "04",
    title: "Production",
    description:
      "Industrial SLS, DMLS and FDM systems run continuously to deliver production-grade components at scale.",
    image:
      "./production.png",
  },
  {
    id: "05",
    title: "Delivery",
    description:
      "Parts are post-processed, inspected and shipped worldwide with reliable logistics.",
    image:
      "https://ik.imagekit.io/0s6dxbeae/delivery1.png",
  },
];

export default function AdvancedProcess() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const slides = gsap.utils.toArray(".slide");
      const totalSlides = slides.length;

      const scrollTween = gsap.to(sliderRef.current, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.7,
          start: "top top",
          end: () => `+=${window.innerWidth * totalSlides}`,
        },
      });

      /* PARALLAX IMAGE */
      gsap.utils.toArray(".bg-image").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.2 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: img,
              containerAnimation: scrollTween,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          }
        );
      });

      /* TITLE REVEAL */
      gsap.utils.toArray(".title").forEach((title) => {
        gsap.from(title, {
          y: 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            containerAnimation: scrollTween,
            start: "left center",
          },
        });
      });

      /* DESCRIPTION */
      gsap.utils.toArray(".desc").forEach((desc) => {
        gsap.from(desc, {
          y: 80,
          opacity: 0,
          delay: 0.2,
          scrollTrigger: {
            trigger: desc,
            containerAnimation: scrollTween,
            start: "left center",
          },
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      <div
        ref={sliderRef}
        className="flex h-full w-[100vw]"
      >
        {steps.map((step) => (
          <div
            key={step.id}
            className="slide relative w-screen h-screen shrink-0 overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="bg-image absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${step.image})` }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* BIG STEP NUMBER */}
            <div className="absolute top-20 right-20 text-[200px] font-bold text-white/10 select-none">
              {step.id}
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-32 left-24 max-w-3xl">

              <h2 className="title text-6xl md:text-7xl font-bold leading-tight mb-6">
                {step.title}
              </h2>

              <p className="desc text-xl text-gray-300 leading-relaxed max-w-xl">
                {step.description}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
        <div className="progress h-full bg-white w-0"></div>
      </div>
    </section>
  );
}















// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     id: "01",
//     eyebrow: "Discover",
//     title: "Consultation & Design",
//     description:
//       "We collaborate with engineering teams to optimize geometry, material selection, tolerances, and cost before anything reaches the machine.",
//     image: "/consult.png",
//   },
//   {
//     id: "02",
//     eyebrow: "Prototype",
//     title: "Rapid Prototyping",
//     description:
//       "Functional prototypes validate form, fit, and mechanical performance quickly, so production decisions are made with confidence.",
//     image: "/dragon.png",
//   },
//   {
//     id: "03",
//     eyebrow: "Validate",
//     title: "Process Assurance",
//     description:
//       "Build simulation, material validation, and inspection workflows help ensure repeatability and structural integrity.",
//     image: "/PA.jpg",
//   },
//   {
//     id: "04",
//     eyebrow: "Manufacture",
//     title: "Production",
//     description:
//       "Industrial SLS, DMLS, and FDM systems deliver production-grade components at scale with dependable process control.",
//     image: "/production.png",
//   },
//   {
//     id: "05",
//     eyebrow: "Deliver",
//     title: "Delivery",
//     description:
//       "Finished parts are post-processed, inspected, documented, and shipped worldwide through reliable logistics.",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
//   },
// ];

// export default function AdvancedProcess() {
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);
//   const progressRef = useRef(null);
//   const imageRefs = useRef([]);
//   const copyRefs = useRef([]);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const totalSlides = steps.length;

//       const scrollTween = gsap.to(sliderRef.current, {
//         xPercent: -100 * (totalSlides - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           pin: true,
//           scrub: 0.8,
//           start: "top top",
//           end: () => `+=${window.innerWidth * (totalSlides - 1)}`,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             gsap.set(progressRef.current, {
//               scaleX: self.progress,
//               transformOrigin: "left center",
//             });
//           },
//         },
//       });

//       imageRefs.current.forEach((image) => {
//         gsap.fromTo(
//           image,
//           { scale: 1.18, xPercent: -4 },
//           {
//             scale: 1,
//             xPercent: 4,
//             ease: "none",
//             scrollTrigger: {
//               trigger: image,
//               containerAnimation: scrollTween,
//               start: "left right",
//               end: "right left",
//               scrub: true,
//             },
//           },
//         );
//       });

//       copyRefs.current.forEach((copy) => {
//         gsap.from(copy.children, {
//           y: 80,
//           opacity: 0,
//           stagger: 0.12,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: copy,
//             containerAnimation: scrollTween,
//             start: "left 70%",
//           },
//         });
//       });

//       ScrollTrigger.refresh();
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full overflow-hidden bg-[#050505] text-white"
//     >
//       <div ref={sliderRef} className="flex h-full">
//         {steps.map((step, index) => (
//           <article
//             key={step.id}
//             className="relative h-screen w-screen shrink-0 overflow-hidden"
//           >
//             <div
//               ref={(el) => {
//                 if (el) imageRefs.current[index] = el;
//               }}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${step.image})` }}
//             />

//             <div className="absolute inset-0 bg-black/62" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(239,68,68,0.22),transparent_34%)]" />
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20vw_100%] opacity-25" />

//             <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between border-b border-white/15 pb-5 font-['scrib'] text-[10px] uppercase tracking-[0.3em] text-white/45 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
//               <span>Galactic Process</span>
//               <span className="text-red-400">{step.eyebrow}</span>
//             </div>

//             <span className="pointer-events-none absolute right-4 top-20 font-['test'] text-[32vw] leading-none text-white/[0.07] sm:right-8 sm:text-[22vw] lg:right-12 lg:text-[15rem]">
//               {step.id}
//             </span>

//             <div
//               ref={(el) => {
//                 if (el) copyRefs.current[index] = el;
//               }}
//               className="absolute bottom-20 left-5 right-5 z-10 max-w-5xl sm:bottom-24 sm:left-8 sm:right-8 lg:bottom-28 lg:left-12 lg:right-auto"
//             >
//               <p className="mb-5 font-['scrib'] text-[10px] uppercase tracking-[0.32em] text-red-400">
//                 Step {step.id}
//               </p>

//               <h2 className="max-w-4xl font-['test'] text-5xl leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl">
//                 {step.title}
//               </h2>

//               <p className="mt-7 max-w-xl font-['scrib'] text-base leading-7 text-white/62 sm:text-lg">
//                 {step.description}
//               </p>
//             </div>
//           </article>
//         ))}
//       </div>

//       <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/15">
//         <div
//           ref={progressRef}
//           className="h-full w-full origin-left scale-x-0 bg-red-500"
//         />
//       </div>
//     </section>
//   );
// }













// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ImageCascadeGSAP from "./ImageCascadeGSAP";

// const services = [
//     {
//         id: "prototyping",
//         title: "Rapid Prototyping",
//         description:
//             "Test and refine your designs quickly with our high-speed prototyping services. Perfect for concept validation and functional testing with certifications.",
//         list: [
//             "⚡ Concept validation in days",
//             "⚡ Functional testing capabilities",
//             "⚡ Certified materials available",
//         ],
//         // Duplicating image for cascade effect
//         images: [
//             "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581092335397-9ccec58b4513?q=80&w=800&auto=format&fit=crop",
//         ],
//         color: "blue",
//     },
//     {
//         id: "production",
//         title: "Full-Scale Production",
//         description:
//             "From low-volume batch production to large-scale runs, we deliver end-use parts with exceptional precision, speed and durability.",
//         list: [
//             "🏭 Scalable production volumes",
//             "🏭 Consistent results across batches",
//             "🏭 End-use grade materials",
//         ],
//         images: [
//             "https://images.unsplash.com/photo-1581091215831-7b5e8d9a9a6b?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581093458791-9f302f54a1n?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581090405962-9a28c1b1f7b3?q=80&w=800&auto=format&fit=crop", // reused
//         ],
//         color: "red",
//     },
//     {
//         id: "custom",
//         title: "Custom Manufacturing",
//         description:
//             "Tailored solutions for complex designs, intricate geometries, and unique industrial needs.",
//         list: [
//             "🛠 Complex geometry support",
//             "🛠 Application-specific materials",
//             "🛠 Custom finishing options",
//         ],
//         images: [
//             "https://images.unsplash.com/photo-1581091014534-047f69f1f5ae?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581093588401-fbb62a02f13a?q=80&w=800&auto=format&fit=crop",
//         ],
//         color: "purple",
//     },
//     {
//         id: "sustainability",
//         title: "Sustainability in Manufacturing",
//         description:
//             "Eco-conscious production with reduced waste, optimized material usage, and energy-efficient workflows — because future-proof companies care.",
//         list: [
//             "🌱 Reduced material waste",
//             "🌱 Energy-efficient processes",
//             "🌱 Responsible sourcing",
//         ],
//         images: [
//             "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", // Mountains
//             "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop", // Nature/Green
//             "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
//         ],
//         color: "green",
//     },
//     {
//         id: "traceability",
//         title: "Material Traceability",
//         description:
//             "Track every material from source to finished part with full documentation for quality assurance and compliance.",
//         list: [
//             "🔍 Batch-level tracking",
//             "🔍 Certified material records",
//             "🔍 Compliance-ready documentation",
//         ],
//         images: [
//             "https://images.unsplash.com/photo-1581090405962-9a28c1b1f7b3?q=80&w=800&auto=format&fit=crop", // Writing
//             "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop", // Inspection
//             "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
//         ],
//         color: "cyan",
//     },
//     {
//         id: "turnaround",
//         title: "Rapid Turnaround",
//         description:
//             "Accelerated production pipelines ensure your parts move from design to delivery in record time — without compromising precision.",
//         list: [
//             "⚡ Same-week manufacturing",
//             "⚡ Optimized workflow automation",
//             "⚡ Priority production lanes",
//         ],
//         images: [
//             "https://images.unsplash.com/photo-1581090406132-7b9a1d25d7f8?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Delivery/Truck
//             "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=800&auto=format&fit=crop",
//         ],
//         color: "orange",
//     },
//     {
//         id: "facilities",
//         title: "Advanced Facilities",
//         description:
//             "Industry-grade infrastructure equipped with modern automation, real-time monitoring, and precision tooling for consistent, high-quality output.",
//         list: [
//             "🏭 Smart manufacturing systems",
//             "🏭 Automated inspection pipelines",
//             "🏭 Scalable factory capacity",
//         ],
//         images: [
//             "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=800&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=800&auto=format&fit=crop", // Poster-ish
//             "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=800&auto=format&fit=crop",
//         ],
//         color: "slate",
//     },
// ];

// export default function ServiceTabs() {
//     const [activeTab, setActiveTab] = useState(services[0]);

//     return (
//         <div className="container mx-auto px-6">
//             <div className="flex flex-col lg:flex-row gap-12">
//                 {/* Left Panel: Tabs */}
//                 <div className="lg:w-1/3 flex flex-col gap-2">
//                     {services.map((service) => (
//                         <button
//                             key={service.id}
//                             onClick={() => setActiveTab(service)}
//                             className={`text-left px-6 py-4 rounded-xl transition-all duration-300 border font-['dena'] ${activeTab.id === service.id
//                                 ? `bg-${service.color}-500/20 border-${service.color}-500/50 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]`
//                                 : "bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:text-gray-200"
//                                 }`}
//                         >
//                             {service.title}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Right Panel: Content Display */}
//                 <div className="lg:w-2/3 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur relative overflow-hidden min-h-[500px]">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeTab.id}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -20 }}
//                             transition={{ duration: 0.3 }}
//                             className="h-full flex flex-col justify-between"
//                         >
//                             <div>
//                                 <h3 className={`text-3xl md:text-4xl font-['dena'] mb-4 text-${activeTab.color}-400`}>
//                                     {activeTab.title}
//                                 </h3>
//                                 <p className="text-gray-300 font-['scrib'] text-lg mb-8 leading-relaxed">
//                                     {activeTab.description}
//                                 </p>

//                                 <ul className="space-y-3 mb-8">
//                                     {activeTab.list.map((item, index) => (
//                                         <li key={index} className="flex items-center gap-3 text-gray-300 font-['scrib']">
//                                             <span className={`text-${activeTab.color}-400`}>•</span>
//                                             {item.replace(/^[^\s]+\s/, "")} {/* Remove emoji for cleaner look or keep it if preferred */}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             {/* Image Cascade */}
//                             <div className="mt-auto pt-4 relative z-10 w-full mb-12"> {/* Added mb to ensure space */}
//                                 <ImageCascadeGSAP images={activeTab.images} />
//                             </div>

//                             {/* Decorative Gradient Background */}
//                             <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br from-${activeTab.color}-500/10 to-transparent -z-10 pointer-events-none`} />
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>
//             </div>
//         </div>
//     );
// }




























"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "prototyping",
    title: "Rapid Prototyping",
    description:
      "Test and refine your designs quickly with high-speed prototyping services.",
    list: [
      "Concept validation in days",
      "Functional testing capabilities",
      "Certified materials available",
    ],
    images: ["/services/rp.jpg", "/services/rp2.jpg", "/services/rp3.jpg"],
  },
  {
    id: "production",
    title: "Full-Scale Production",
    description:
      "From low-volume batches to large-scale runs with precision and reliability.",
    list: [
      "Scalable production volumes",
      "Consistent batch quality",
      "End-use materials",
    ],
    images: ["/services/fs1.jpg", "/services/fs2.jpg", "/services/fs3.jpg"],
  },
  {
    id: "custom",
    title: "Custom Manufacturing",
    description:
      "Tailored solutions for complex geometries and specialized industrial applications.",
    list: [
      "Complex geometry support",
      "Specialized materials",
      "Custom finishing",
    ],
    images: ["/services/cm1.jpg", "/services/cm2.jpg", "/services/cm3.jpg"],
  },
];

export default function ServiceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cascadeIndex, setCascadeIndex] = useState(0);

  const active = services[activeIndex];

  // rotate cascade every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCascadeIndex((prev) => (prev + 1) % active.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // reset cascade when tab changes
  useEffect(() => {
    setCascadeIndex(0);
  }, [activeIndex]);

  // rotate images
  const rotateImages = (images, offset) => {
    const arr = [...images];
    for (let i = 0; i < offset; i++) {
      arr.push(arr.shift());
    }
    return arr;
  };

  const images = rotateImages(active.images, cascadeIndex);

  const positions = [
    { top: "0%", left: "18%", rotate: -6, z: 3 },
    { top: "22%", left: "40%", rotate: 5, z: 2 },
    { top: "38%", left: "10%", rotate: -3, z: 1 },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden">

        <div className="grid lg:grid-cols-[320px_1fr]">

          {/* SERVICE INDEX */}
          <div className="border-r border-white/10 p-6">
            <div className="flex flex-col gap-2">

              {services.map((service, i) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`cursor-pointer px-4 py-4 rounded-lg transition
                  ${
                    activeIndex === i
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                  }`}
                >
                  <div className="text-sm opacity-60 mb-1">
                    {service.id}
                  </div>

                  <div className="font-['dena']">
                    {service.title}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* CONTENT */}
          <div className="p-10 grid md:grid-cols-2 gap-10 items-center min-h-[460px]">

            {/* TEXT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-2xl font-['dena'] mb-4">
                  {active.title}
                </h3>

                <p className="text-gray-300 font-['scrib'] mb-6">
                  {active.description}
                </p>

                <ul className="space-y-2">
                  {active.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-white/70"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* CASCADE IMAGES */}
            <div key={active.id} className="relative h-[260px]">

              {images.map((img, i) => {
                const pos = positions[i];

                return (
                  <motion.img
                    key={`${active.id}-${img}`}
                    src={img}
                    layout
                    className="absolute w-[70%] rounded-xl object-cover border border-white/10 shadow-2xl"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      transform: `rotate(${pos.rotate}deg)`,
                      zIndex: pos.z,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 16,
                    }}
                  />
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
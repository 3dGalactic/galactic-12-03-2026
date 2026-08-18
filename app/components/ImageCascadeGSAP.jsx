"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ImageCascadeAuto({ images }) {
  const containerRef = useRef(null);

  const spread = () => {
    const cards = containerRef.current.querySelectorAll(".cascade-img");
    gsap.to(cards, {
      x: (i) => (i - 1) * 80,
      rotate: (i) => (i - 1) * 12,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.05,
    });
  };

  const stack = () => {
    const cards = containerRef.current.querySelectorAll(".cascade-img");
    gsap.to(cards, {
      x: 0,
      rotate: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power3.out",
    });
  };


  // auto rotate images
  useEffect(() => {
    const container = containerRef.current;

    const interval = setInterval(() => {
      // Always select the fresh 'first' element in the DOM (which is currently visually top/front if we manage z-index right)
      const first = container.querySelectorAll(".cascade-img")[0];
      if (!first) return;

      gsap.to(first, {
        opacity: 0,
        scale: 0.9,
        x: -50, // Slight movement out
        duration: 0.5,
        onComplete: () => {
          container.appendChild(first); // Move to end of DOM
          gsap.set(first, { opacity: 1, scale: 0.95, x: 0 });

          // Re-assign z-indices based on new DOM order to keep the stack visual
          // First in DOM = Top of stack (highest Z)
          const cards = container.querySelectorAll(".cascade-img");
          cards.forEach((card, i) => {
            // Total cards is cards.length. 
            // We want index 0 to have MAX z-index.
            // index (length-1) to have MIN z-index.
            card.style.zIndex = cards.length - i;
          });
        },
      });
    }, 3500); // Slower interval for better viewing

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={spread}
      onMouseLeave={stack}
      className="relative w-full h-[320px] flex items-center justify-center"
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className="cascade-img absolute w-[80%] h-full object-cover rounded-xl shadow-2xl"
          style={{ zIndex: images.length - i, transform: "scale(0.95)" }}
        />
      ))}
    </div>
  );
}

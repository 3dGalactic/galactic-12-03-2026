"use client";
import AnimatedText from "./AnimatedText";

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-background/90 rounded-3xl shadow-2xl border border-dark-100 container mx-auto px-6 my-20 animate-fade-in-up">
      <AnimatedText
        text1="What We"
        text2=" Do"
        css="text-3xl md:text-4xl font-extrabold mb-6 text-center font-['MonumentExtended']"
      />
      <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto font-['NeueMontreal']">
        Galactic 3D is your partner for advanced additive manufacturing, from
        concept to production. We deliver design, prototyping, production, and
        consulting for every industry.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group animate-fade-in-up">
          <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-7 h-7 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">
            Design & Prototyping
          </h3>
          <p className="text-gray-400 font-['NeueMontreal']">
            From CAD to prototype, we help you iterate and validate your ideas
            quickly and efficiently.
          </p>
        </div>
        <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group animate-fade-in-up">
          <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-7 h-7 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2a4 4 0 018 0v2M5 10a7 7 0 0114 0v2a7 7 0 01-14 0v-2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">
            Production & Finishing
          </h3>
          <p className="text-gray-400 font-['NeueMontreal']">
            We deliver high-precision end-use parts with a range of finishing
            options for every application.
          </p>
        </div>
        <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 shadow-xl group animate-fade-in-up">
          <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition duration-300">
            <svg
              className="w-7 h-7 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 font-['MonumentExtended']">
            Consulting & Support
          </h3>
          <p className="text-gray-400 font-['NeueMontreal']">
            Our experts guide you through material selection, design
            optimization, and process planning.
          </p>
        </div>
      </div>
    </section>
  );
}
'use client';
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white text-center animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-['MonumentExtended']">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto font-['NeueMontreal']">
          Contact us today to discuss how Galactic 3D can help bring your
          ideas to life with our advanced additive manufacturing services.
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300 text-lg inline-block group relative overflow-hidden"
        >
          <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative flex items-center justify-center">
            Contact Us
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}

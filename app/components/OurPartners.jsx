"use client";

const partners = [
  "Partner A",
  "Partner B",
  "Partner C",
  "Partner D",
  "Partner E",
  "Partner F",
];

export default function OurPartners() {
  return (
    <div className="py-12 overflow-hidden">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-xl md:text-xl font-extrabold mb-6 text-center font-['MonumentExtended']">
          Trusted By <span className="text-primary">Industry Leaders</span>
        </h2>
      </div>
      <div className="relative w-full">
        <div className="flex animate-pan-left">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 mx-8 w-48">
              <div className="h-24 bg-dark-200/80 rounded-lg flex items-center justify-center p-4 border border-dark-100">
                <span className="text-white text-lg font-bold text-center font-['NeueMontreal']">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes pan-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-pan-left {
          display: flex;
          animation: pan-left 40s linear infinite;
        }
        .animate-pan-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

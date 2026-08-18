'use client';

export default function Testimonials() {
  return (
    <section className="py-20 bg-background/90 rounded-3xl shadow-2xl border border-dark-100 container mx-auto px-6 my-20 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center font-['MonumentExtended']">
        What Our <span className="text-primary">Clients Say</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 shadow-xl group animate-fade-in-up">
          <p className="text-gray-300 text-lg font-['NeueMontreal'] mb-4">
            “Galactic 3D's expertise in additive manufacturing helped us
            achieve results we never thought possible. Their team is
            responsive, innovative, and a pleasure to work with.”
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold font-['MonumentExtended']">
                Sarah Johnson
              </h3>
              <p className="text-primary font-['NeueMontreal']">
                CTO, AeroTech Innovations
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 shadow-xl group animate-fade-in-up">
          <p className="text-gray-300 text-lg font-['NeueMontreal'] mb-4">
            “The rapid prototyping capabilities at Galactic 3D were
            instrumental in our product development process. Their team's
            expertise helped us refine our design quickly and efficiently.”
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold font-['MonumentExtended']">
                Michael Chen
              </h3>
              <p className="text-primary font-['NeueMontreal']">
                Product Manager, MediTech Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark-200/80 p-8 rounded-2xl border border-dark-100 shadow-xl group animate-fade-in-up">
          <p className="text-gray-300 text-lg font-['NeueMontreal'] mb-4">
            “The precision and reliability of Galactic 3D's work is unmatched.
            Their ability to translate our complex designs into functional
            parts while maintaining aesthetic appeal was impressive.”
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold font-['MonumentExtended']">
                David Rodriguez
              </h3>
              <p className="text-primary font-['NeueMontreal']">
                Design Director, AutoInnovate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

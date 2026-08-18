"use client";

export default function Process() {
  return (
    <section className="py-20 bg-background/90 rounded-3xl shadow-2xl border border-dark-100 container mx-auto px-6 my-20 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center font-['MonumentExtended']">
        Our <span className="text-primary">Process</span>
      </h2>
      <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto font-['NeueMontreal']">
        A streamlined approach to bring your ideas from concept to reality.
      </p>
      <div className="relative flex flex-col items-center animate-fade-in-up">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full -translate-x-1/2 z-0"
          style={{ minHeight: "100%" }}
        ></div>
        {[
          {
            title: "Consultation",
            desc: "We begin with a detailed consultation to understand your project requirements, goals, and constraints.",
            icon: (
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
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                ></path>
              </svg>
            ),
          },
          {
            title: "Design & Engineering",
            desc: "Our team works on creating or optimizing designs for additive manufacturing, ensuring they meet all technical specifications.",
            icon: (
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
                  d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6v-6H3v6zm13.293-13.293a1 1 0 011.414 0l1.586 1.586a1 1 0 010 1.414l-8.586 8.586a1 1 0 01-.707.293H7v-1.586a1 1 0 01.293-.707l8.586-8.586z"
                ></path>
              </svg>
            ),
          },
          {
            title: "Prototyping",
            desc: "We create initial prototypes for testing and validation, allowing for design refinements before final production.",
            icon: (
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
                ></path>
              </svg>
            ),
          },
          {
            title: "Production",
            desc: "Once designs are finalized, we move to production using the most appropriate additive manufacturing technology for your project.",
            icon: (
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
                  d="M3 10h2l1 2h13l1-2h2M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4M9 16h6m-6 4h6"
                ></path>
              </svg>
            ),
          },
          {
            title: "Process Assurance",
            desc: "Every product undergoes rigorous inspections to ensure it meets our standards and your specifications.",
            icon: (
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
                  d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            ),
          },
        ].map((step, idx, arr) => (
          <div
            key={step.title}
            className="relative z-10 flex flex-col items-center group w-full max-w-xl mb-12 last:mb-0"
            tabIndex={0}
            aria-label={`Step ${idx + 1}: ${step.title}`}
          >
            <div className="flex flex-col items-center mb-4">
              <div
                className={`w-14 h-14 rounded-full bg-background/80 border-2 border-primary flex items-center justify-center shadow-lg mb-2 transition-all duration-300 group-hover:scale-110 group-focus:scale-110 group-hover:shadow-primary/30 group-focus:shadow-primary/30`}
              >
                {step.icon}
              </div>
              <span className="block text-lg font-bold text-primary font-['MonumentExtended']">
                {idx + 1}
              </span>
            </div>
            <div className="w-full bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-primary group-focus:border-primary group-hover:scale-[1.03] group-focus:scale-[1.03]">
              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary group-focus:text-primary transition duration-300 font-['MonumentExtended']">
                {step.title}
              </h3>
              <p className="text-gray-400 text-center font-['NeueMontreal']">
                {step.desc}
              </p>
            </div>
            {idx < arr.length - 1 && (
              <div className="w-1 h-12 bg-gradient-to-b from-primary via-secondary to-primary rounded-full my-4"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
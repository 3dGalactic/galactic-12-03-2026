'use client';

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-dark-200 relative overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-['MonumentExtended']">
          <span className="relative inline-block">
            Featured <span className="text-primary">Projects</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Example Project Cards */}
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Aerospace Component"
              className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">
              Aerospace Component Optimization
            </h3>
            <p className="text-gray-400 font-['NeueMontreal']">
              Redesigned critical aerospace components for weight reduction
              while maintaining structural integrity, resulting in 30% lighter
              parts and significant fuel savings.
            </p>
          </div>
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Medical Device"
              className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">
              Medical Device Prototyping
            </h3>
            <p className="text-gray-400 font-['NeueMontreal']">
              Rapid prototyping of a novel medical device, enabling the client
              to iterate through 15 design versions in just 8 weeks,
              accelerating time-to-market by 6 months.
            </p>
          </div>
          <div className="bg-background/80 border border-dark-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-[1.03] group animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Automotive Parts"
              className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold mb-2 font-['MonumentExtended']">
              Custom Automotive Parts
            </h3>
            <p className="text-gray-400 font-['NeueMontreal']">
              Designed and manufactured custom interior components for a
              limited-edition sports car, combining aesthetic appeal with
              functional performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

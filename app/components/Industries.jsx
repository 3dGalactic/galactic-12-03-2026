"use client";

export default function Industries() {
  return (
    <section className="py-20 bg-dark-200 relative overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-['MonumentExtended']">
          <span className="relative inline-block">
            Industries We <span className="text-primary">Serve</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Aerospace */}
          <div
            className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-dark-100"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Aerospace"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-primary flex items-center font-['MonumentExtended']">
                  <span className="mr-2">Aerospace</span>
                  <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                </h3>
                <p className="text-gray-300 text-sm font-['NeueMontreal']">
                  Lightweight, high-strength parts for aircraft, satellites,
                  and drones.
                </p>
              </div>
            </div>
          </div>
          {/* Medical */}
          <div
            className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-dark-100"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Medical"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-primary flex items-center font-['MonumentExtended']">
                  <span className="mr-2">Medical</span>
                  <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                </h3>
                <p className="text-gray-300 text-sm font-['NeueMontreal']">
                  Custom implants, prosthetics, and anatomical models for
                  healthcare applications.
                </p>
              </div>
            </div>
          </div>
          {/* Consumer Products */}
          <div
            className="group relative overflow-hidden rounded-xl h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-dark-100"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Consumer Products"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-400/80 to-dark-300/50 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 z-30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <div className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-primary flex items-center font-['MonumentExtended']">
                  <span className="mr-2">Consumer</span>
                  <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                </h3>
                <p className="text-gray-300 text-sm font-['NeueMontreal']">
                  Bespoke products, electronics enclosures, and lifestyle
                  goods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
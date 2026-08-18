"use client"
import React from 'react';
import Link from 'next/link';

const ResearchPage = () => {
  const researchAreas = [
    {
      title: "Poster Design",
      description: "Our team creates visually compelling research posters that effectively communicate complex additive manufacturing concepts. We combine technical accuracy with design excellence to showcase your research at conferences, symposiums, and exhibitions.",
      icon: "📊",
      image: "/research/poster-design.jpg"
    },
    {
      title: "Design Optimization (D.O)",
      description: "We specialize in topology optimization, generative design, and parametric modeling to create parts with optimal performance characteristics. Our research focuses on minimizing material usage while maximizing strength, thermal performance, and other critical properties.",
      icon: "⚙️",
      image: "/research/design-optimization.jpg"
    },
    {
      title: "DFAM (Design for Additive Manufacturing)",
      description: "Our research explores the unique capabilities of additive manufacturing to create geometries impossible with traditional methods. We develop guidelines and methodologies for leveraging AM-specific features like internal lattices, conformal cooling, and part consolidation.",
      icon: "🔧",
      image: "/research/dfam.jpg"
    },
    {
      title: "Literature Review",
      description: "We conduct comprehensive analyses of current research in additive manufacturing, materials science, and design methodologies. Our literature reviews identify trends, gaps, and opportunities in the rapidly evolving AM landscape to inform future research directions.",
      icon: "📚",
      image: "/research/literature-review.jpg"
    },
  ];

  const publications = [
    {
      title: "Topology Optimization for Lattice Structures in Metal Additive Manufacturing",
      authors: "A. Kumar, S. Patel, R. Mehta",
      journal: "Journal of Advanced Manufacturing Technology",
      year: "2023",
      thumbnail: "/research/paper-1.jpg"
    },
    {
      title: "Thermal Performance Analysis of Conformal Cooling Channels Produced via DMLS",
      authors: "M. Singh, J. Wilson, K. Sharma",
      journal: "Additive Manufacturing",
      year: "2022",
      thumbnail: "/research/paper-2.jpg"
    },
    {
      title: "Material Property Characterization of SLS-Printed Polymers for End-Use Applications",
      authors: "P. Gupta, L. Chen, T. Rodriguez",
      journal: "Polymer Testing",
      year: "2023",
      thumbnail: "/research/paper-3.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20 font-['NeueMontreal'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/20 rounded-full blur-3xl"></div>
      
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-16 animate-fade-in-up">
        <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">Innovation</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">
          Ongoing Research & <span className='bg-clip-text text-transparent bg-gradient-red'>Innovation</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">
          Pushing the boundaries of additive manufacturing through cutting-edge research and development.
        </p>
      </div>

      {/* Research Areas Grid */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-black/60 rounded-2xl overflow-hidden border border-dark-100 hover:border-primary transition duration-300 group shadow-xl animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center p-6 border-b border-dark-100">
                <span className="text-4xl mr-4 group-hover:scale-110 transition duration-300">{area.icon}</span>
                <h3 className="text-2xl font-bold font-['MonumentExtended'] group-hover:text-primary transition duration-300">{area.title}</h3>
              </div>
              <div className="p-6">
                <div className="h-48 bg-dark-300 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-dark-300 flex items-center justify-center">
                    <span className="text-4xl text-gray-700">Image Placeholder</span>
                  </div>
                </div>
                <p className="text-gray-400 font-['NeueMontreal']">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Publications */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center font-['MonumentExtended']">Recent <span className="text-primary">Publications</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((paper, index) => (
            <div key={index} className="bg-dark-300/50 rounded-xl overflow-hidden border border-dark-100 hover:border-primary transition duration-300 group shadow-xl animate-fade-in-up" style={{ animationDelay: `${index * 100 + 400}ms` }}>
              <div className="h-64 bg-dark-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <div className="absolute inset-0 bg-dark-300 flex items-center justify-center">
                  <div className="w-3/4 h-5/6 bg-dark-100 rounded-md flex flex-col justify-center items-center p-4 transform rotate-3 shadow-lg">
                    <div className="w-full h-2/3 bg-dark-200 mb-2 flex items-center justify-center">
                      <span className="text-sm text-gray-500">Paper Thumbnail</span>
                    </div>
                    <div className="w-3/4 h-2 bg-dark-200 mb-1"></div>
                    <div className="w-1/2 h-2 bg-dark-200"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition duration-300 font-['MonumentExtended']">{paper.title}</h3>
                <p className="text-gray-400 text-sm mb-1 font-['NeueMontreal']">{paper.authors}</p>
                <p className="text-gray-500 text-sm font-['NeueMontreal']">{paper.journal}, {paper.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Collaboration CTA */}
      <div className="container mx-auto px-6 text-center mb-20">
        <div className="bg-gradient-to-r from-dark-300 to-dark-400 rounded-2xl p-10 border border-dark-100 shadow-xl animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <h2 className="text-3xl font-bold mb-6 font-['MonumentExtended']">Interested in <span className="text-primary">Collaboration?</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-['NeueMontreal']">
            We&apos;re always looking for research partners to push the boundaries of additive manufacturing technology.
          </p>
          <Link href="/contact?subject=ResearchCollaboration" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block">
            Contact Our Research Team
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s both; }
      `}</style>
    </div>
  );
};

export default ResearchPage;
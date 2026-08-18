"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const SellPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Quote request submitted! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      description: ''
    });
  };

  const printingOptions = [
    {
      title: "Metal 3D Printing (EOS)",
      description: "High-precision metal parts with exceptional mechanical properties. Perfect for aerospace, automotive, medical, and industrial applications requiring strength and durability.",
      features: [
        "Materials: Titanium, Aluminum, Stainless Steel, Inconel",
        "Tolerance: ±0.1mm",
        "Min. Wall Thickness: 0.4mm",
        "Max Build Size: 250 × 250 × 325 mm"
      ],
      image: "/sell/metal-printing.jpg"
    },
    {
      title: "FDM Printing",
      description: "Cost-effective and versatile printing for functional prototypes and end-use parts. Ideal for concept models, functional prototypes, and manufacturing tools.",
      features: [
        "Materials: PLA, ABS, PETG, TPU, Nylon, Carbon Fiber",
        "Tolerance: ±0.2mm",
        "Min. Wall Thickness: 0.8mm",
        "Max Build Size: 300 × 300 × 400 mm"
      ],
      image: "/sell/fdm-printing.jpg"
    },
    {
      title: "SLS Printing",
      description: "Superior surface finish and complex geometries without support structures. Perfect for functional prototypes, end-use parts, and complex assemblies.",
      features: [
        "Materials: PA12, PA11, TPU, PP, Glass-filled Nylon",
        "Tolerance: ±0.15mm",
        "Min. Wall Thickness: 0.7mm",
        "Max Build Size: 330 × 330 × 420 mm"
      ],
      image: "/sell/sls-printing.jpg"
    },
  ];

  const offerings = [
    {
      title: "Metal 3D Printing (EOS Parts)",
      description: "Leverage the power of Direct Metal Laser Sintering (DMLS) with our EOS machines. We produce high-strength, fully dense metal parts from materials like stainless steel, titanium, and aluminum. Ideal for aerospace, medical, and high-performance automotive applications where material integrity is critical.",
      useCases: ["Functional prototypes", "End-use production parts", "Complex geometries"],
    },
    {
      title: "FLN Parts",
      description: "Our Fused Layer Modeling (FLM) services offer a fast and cost-effective solution for producing thermoplastic parts. With a wide range of materials, including ABS, PETG, and PLA, we deliver durable components suitable for functional testing, jigs, fixtures, and custom enclosures. High precision and excellent layer adhesion come standard.",
      useCases: ["Rapid prototyping", "Manufacturing aids", "Consumer products"],
    },
    {
      title: "SLS Printing",
      description: "Selective Laser Sintering (SLS) technology enables the creation of tough, durable nylon parts with complex geometries without the need for support structures. This process is perfect for functional prototypes, small-batch manufacturing, and parts with intricate internal channels. Our SLS parts offer excellent mechanical properties and a clean, professional finish.",
      useCases: ["Complex ductwork", "Living hinges", "Low-volume production"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20 font-['NeueMontreal'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/20 rounded-full blur-3xl"></div>
      
      {/* Order Custom 3D Printed Parts Section */}
      <div className="container mx-auto px-6 mb-20 animate-fade-in-up">
        <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">Custom Manufacturing</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">
          Order Custom <span className='bg-clip-text text-transparent bg-gradient-red'>3D Printed Parts</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal'] mb-12">
          From rapid prototyping to end-use production parts, our advanced 3D printing services deliver precision and reliability for your unique requirements.
        </p>
        
        {/* Printing Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {printingOptions.map((option, index) => (
            <div key={index} className="bg-black/60 rounded-2xl overflow-hidden border border-dark-100 hover:border-primary transition duration-500 group shadow-xl animate-fade-in-up flex flex-col" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-48 bg-dark-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <div className="absolute inset-0 bg-dark-300 flex items-center justify-center">
                  <span className="text-4xl text-gray-700">Image Placeholder</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-3 font-['MonumentExtended'] group-hover:text-primary transition duration-300">{option.title}</h3>
                <p className="text-gray-400 font-['NeueMontreal'] mb-4">{option.description}</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Request Quote Form */}
        <div className="bg-dark-300/80 rounded-2xl p-8 border border-dark-100 shadow-xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-3xl font-bold mb-6 text-center font-['MonumentExtended']">Request a <span className="text-primary">Quote</span></h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-dark-200 border border-dark-100 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-dark-200 border border-dark-100 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-dark-200 border border-dark-100 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-1">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full bg-dark-200 border border-dark-100 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Select a printing method</option>
                  <option value="metal">Metal 3D Printing (EOS)</option>
                  <option value="fdm">FDM Printing</option>
                  <option value="sls">SLS Printing</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">Project Description</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="5" 
                  className="w-full bg-dark-200 border border-dark-100 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please describe your project, including dimensions, material preferences, quantity, and any special requirements."
                  required
                ></textarea>
              </div>
              <div className="flex justify-end mt-4">
                <button type="submit" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block">
                  Request Quote
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Sell Your Creations Section */}
      <div className="container mx-auto px-6 mb-16 animate-fade-in-up">
        <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">Marketplace</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">
          Sell Your <span className='bg-clip-text text-transparent bg-gradient-red'>Creations</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">
          Monetize your 3D printing capabilities by offering your services to a global audience of innovators.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {offerings.map((offering, index) => (
          <div key={index} className="bg-black/60 p-8 rounded-2xl border border-dark-100 hover:border-primary transition duration-300 h-full shadow-xl group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="text-2xl font-bold mb-4 font-['MonumentExtended']">{offering.title}</h2>
            <p className="text-gray-400 font-['NeueMontreal'] mb-6">{offering.description}</p>
            <h3 className="text-lg font-bold mb-2 font-['MonumentExtended']">Ideal Use Cases:</h3>
            <ul className="text-gray-400 space-y-2 font-['NeueMontreal']">
              {offering.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start"><span className="text-primary mr-2">•</span><span>{useCase}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 text-center bg-dark-300/50 rounded-3xl border border-dark-100 animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 font-['MonumentExtended']">Why Sell With Us?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-['NeueMontreal']">
          Join a curated marketplace dedicated to excellence and innovation. We connect you with serious buyers and provide the tools you need to manage your orders, streamline your workflow, and grow your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact?subject=SellingInquiry" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg">
            Become a Partner
          </Link>
          <Link href="/about" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300 text-lg">
            Learn More
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

export default SellPage;
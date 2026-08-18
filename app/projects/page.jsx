'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  // Sample project data - in a real application, this would come from a database or CMS
  const projects = [
    {
      id: 1,
      title: 'Aerospace Component Optimization',
      category: 'Aerospace',
      description: 'Redesigned critical aerospace components for weight reduction while maintaining structural integrity, resulting in 30% lighter parts and significant fuel savings.',
      image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      tags: ['Metal 3D Printing', 'Topology Optimization', 'Aerospace'],
    },
    {
      id: 2,
      title: 'Medical Device Prototyping',
      category: 'Healthcare',
      description: 'Rapid prototyping of a novel medical device, enabling the client to iterate through 15 design versions in just 8 weeks, accelerating time-to-market by 6 months.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      tags: ['Medical', 'Prototyping', 'SLA Printing'],
    },
    {
      id: 3,
      title: 'Custom Automotive Parts',
      category: 'Automotive',
      description: 'Designed and manufactured custom interior components for a limited-edition sports car, combining aesthetic appeal with functional performance.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      tags: ['Automotive', 'Custom Parts', 'Carbon Fiber'],
    },
    {
      id: 4,
      title: 'Industrial Tool Redesign',
      category: 'Manufacturing',
      description: 'Redesigned industrial tooling with integrated cooling channels that were impossible to manufacture with traditional methods, improving tool life by 250%.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      tags: ['Industrial', 'Tool Design', 'DMLS'],
    },
    {
      id: 5,
      title: 'Architectural Model Series',
      category: 'Architecture',
      description: 'Created highly detailed architectural models for a major urban development project, allowing stakeholders to visualize the final result with exceptional accuracy.',
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      tags: ['Architecture', 'Scale Models', 'Multi-Material'],
    },
    {
      id: 6,
      title: 'Consumer Electronics Enclosures',
      category: 'Consumer Products',
      description: 'Developed lightweight, durable enclosures for a new line of consumer electronics, reducing assembly time and enhancing product aesthetics.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      tags: ['Consumer Electronics', 'Enclosures', 'Production'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20 relative overflow-hidden font-['NeueMontreal']">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl"></div>
      {/* Projects Header */}
      
      <div className="container mx-auto px-6 mb-16">
      <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">Project Showcase</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">
          Our <span className='bg-clip-text text-transparent bg-gradient-red'> Projects</span> 
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">Explore our portfolio of innovative additive manufacturing solutions across various industries.</p>
      </div>
      {/* Project Filters - In a real app, these would filter the projects */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-primary px-6 py-2 rounded-full text-white font-medium relative overflow-hidden group font-['NeueMontreal']">
            <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative">All Projects</span>
          </button>
          <button className="bg-background hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">Aerospace</button>
          <button className="bg-background hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">Healthcare</button>
          <button className="bg-background hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">Automotive</button>
          <button className="bg-background hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">Manufacturing</button>
          <button className="bg-background hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">Architecture</button>
        </div>
      </div>
      {/* Projects Grid */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-background/90 rounded-3xl overflow-hidden shadow-2xl border border-dark-100 hover:shadow-primary/20 transition-all duration-500 animate-fade-in-up">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-6 group-hover:translate-y-0 transition duration-300">
                  <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-3 font-['NeueMontreal']">{project.category}</span>
                  <h3 className="text-xl font-bold text-white font-['MonumentExtended']">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4 font-['NeueMontreal']">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-black/30 text-gray-300 px-3 py-1 rounded-full font-['NeueMontreal']">{tag}</span>
                  ))}
                </div>
                <button className="text-primary font-medium hover:text-white transition duration-300 font-['MonumentExtended']">View Project Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Case Studies Section */}
      <div className="bg-background/90 py-20 mb-20 rounded-3xl shadow-2xl border border-dark-100 animate-fade-in-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-['MonumentExtended']">Featured Case Studies</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-['NeueMontreal']">Dive deeper into some of our most impactful projects and discover the transformative power of additive manufacturing.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-black/90 rounded-3xl overflow-hidden shadow-xl border border-dark-100 animate-fade-in-up">
              <div className="relative h-80">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Aerospace Case Study" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-3 font-['NeueMontreal']">Case Study</span>
                  <h3 className="text-2xl font-bold text-white font-['MonumentExtended']">Revolutionizing Aerospace Manufacturing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6 font-['NeueMontreal']">How we helped a leading aerospace company reduce component weight by 30% while improving performance and reducing assembly time by 60%.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary font-medium font-['NeueMontreal']">Results:</p>
                    <ul className="text-gray-400 list-disc list-inside font-['NeueMontreal']">
                      <li>30% weight reduction</li>
                      <li>60% faster assembly</li>
                      <li>$2.4M annual savings</li>
                    </ul>
                  </div>
                  <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl transition duration-300 font-['MonumentExtended']">Read Case Study</button>
                </div>
              </div>
            </div>
            {/* Case Study 2 */}
            <div className="bg-black/90 rounded-3xl overflow-hidden shadow-xl border border-dark-100 animate-fade-in-up">
              <div className="relative h-80">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Medical Case Study" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-3 font-['NeueMontreal']">Case Study</span>
                  <h3 className="text-2xl font-bold text-white font-['MonumentExtended']">Accelerating Medical Innovation</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6 font-['NeueMontreal']">How our rapid prototyping services helped a medical device startup bring their innovative product to market 6 months ahead of schedule.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary font-medium font-['NeueMontreal']">Results:</p>
                    <ul className="text-gray-400 list-disc list-inside font-['NeueMontreal']">
                      <li>15 design iterations in 8 weeks</li>
                      <li>6 months faster to market</li>
                      <li>510(k) FDA approval on first submission</li>
                    </ul>
                  </div>
                  <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl transition duration-300 font-['MonumentExtended']">Read Case Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-['MonumentExtended']">Client Testimonials</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-['NeueMontreal']">Hear what our clients have to say about working with Galactic 3D.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-dark-300 p-8 rounded-3xl border border-dark-100 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-2 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold font-['MonumentExtended']">Sarah Johnson</h3>
                <p className="text-gray-400 font-['NeueMontreal']">CTO, AeroTech Innovations</p>
              </div>
            </div>
            <p className="text-gray-300 font-['NeueMontreal']">“Galactic 3D’s expertise in additive manufacturing helped us achieve results we never thought possible. Their team is responsive, innovative, and a pleasure to work with.”</p>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial-card bg-dark-300 p-8 rounded-3xl border border-dark-100 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-2 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold font-['MonumentExtended']">Michael Chen</h3>
                <p className="text-gray-400 font-['NeueMontreal']">Product Manager, MediTech Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 font-['NeueMontreal']">“The rapid prototyping capabilities at Galactic 3D were instrumental in our product development process. Their team's expertise helped us refine our design quickly and efficiently.”</p>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial-card bg-dark-300 p-8 rounded-3xl border border-dark-100 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-2 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold font-['MonumentExtended']">David Rodriguez</h3>
                <p className="text-gray-400 font-['NeueMontreal']">Design Director, AutoInnovate</p>
              </div>
            </div>
            <p className="text-gray-300 font-['NeueMontreal']">“The precision and reliability of Galactic 3D's work is unmatched. Their ability to translate our complex designs into functional parts while maintaining aesthetic appeal was impressive.”</p>
          </div>
        </div>
      </div>
      {/* CTA Section with animated background */}
      <div className="bg-primary py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 rounded-full bg-secondary/30 -top-10 -left-10 animate-spin-slow"></div>
          <div className="absolute w-60 h-60 rounded-full bg-secondary/20 -bottom-20 -right-20 animate-spin-slow"></div>
          <div className="absolute w-20 h-20 rounded-full bg-white/10 top-1/4 right-1/4 animate-float"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discuss how our additive manufacturing solutions can bring your ideas to life.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-200 font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg inline-block group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-gray-300 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Contact Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
            <Link href="/services" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg inline-block group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Explore Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                </svg>
              </span>
            </Link>
          </div>
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
}
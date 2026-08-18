'use client'
import { useEffect } from 'react';
import Link from 'next/link';


export default function Blog() {
  // Sample blog data - in a real application, this would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Additive Manufacturing in Aerospace',
      excerpt: 'Explore how 3D printing is revolutionizing the aerospace industry with lighter components, complex geometries, and faster production times.',
      image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      author: 'Dr. Emily Chen',
      authorRole: 'Chief Technology Officer',
      date: 'June 15, 2023',
      category: 'Industry Insights',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Metal vs. Polymer 3D Printing: Choosing the Right Technology',
      excerpt: 'A comprehensive comparison of metal and polymer 3D printing technologies to help you select the best option for your specific application.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      author: 'James Wilson',
      authorRole: 'Materials Engineer',
      date: 'May 22, 2023',
      category: 'Technology',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Design Optimization for Additive Manufacturing',
      excerpt: 'Learn key principles and techniques for designing parts specifically for additive manufacturing to maximize performance and minimize costs.',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      author: 'Sarah Johnson',
      authorRole: 'Design Director',
      date: 'April 10, 2023',
      category: 'Design',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'How Medical Device Companies Are Leveraging 3D Printing',
      excerpt: 'Discover how the medical industry is using additive manufacturing to create custom implants, surgical tools, and anatomical models.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      author: 'Dr. Michael Rodriguez',
      authorRole: 'Healthcare Solutions Specialist',
      date: 'March 5, 2023',
      category: 'Healthcare',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Sustainability in Additive Manufacturing',
      excerpt: 'Examining the environmental impact of 3D printing compared to traditional manufacturing methods and exploring ways to make it more sustainable.',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      author: 'Lisa Chen',
      authorRole: 'Sustainability Analyst',
      date: 'February 18, 2023',
      category: 'Sustainability',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Post-Processing Techniques for 3D Printed Parts',
      excerpt: 'A guide to the various finishing methods that can improve the appearance, strength, and functionality of additively manufactured components.',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
      author: 'Thomas Wright',
      authorRole: 'Production Manager',
      date: 'January 30, 2023',
      category: 'Manufacturing',
      readTime: '5 min read',
    },
  ];

  // Featured article - typically the most recent or most important post
  const featuredPost = blogPosts[0];
  
  useEffect(() => {
    // Add 3D rotation effect to blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.boxShadow = `${x * 10}px ${y * 10}px 30px rgba(255, 0, 0, 0.1)`;
      };
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
        card.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
      });
    });
    
    // Add hover effect to webinar cards
    const webinarCards = document.querySelectorAll('.webinar-card');
    webinarCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('active');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
      });
    });
    
    return () => {
      blogCards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
      
      webinarCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white pt-24 pb-20 relative overflow-hidden font-['NeueMontreal']">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Blog Header with animated elements */}
      <div className="container mx-auto px-6 mb-16 relative">
        <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal']">Latest Insights</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 relative font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal drop-shadow-xl tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-metal">Galactic 3D</span>
          <span className="bg-clip-text text-transparent bg-gradient-red ml-3">Blog</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl font-['NeueMontreal']">Insights, innovations, and industry trends in additive manufacturing and 3D printing technology.</p>
      </div>

      {/* Featured Article with enhanced styling */}
      <div className="container mx-auto px-6 mb-20">
        <div className="bg-dark-400/90 rounded-3xl overflow-hidden border border-dark-100 shadow-2xl shadow-primary/5 hover:shadow-primary/20 transition-all duration-500 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center relative z-20">
              <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-4 transform hover:scale-105 transition-all duration-300 font-['NeueMontreal']">{featuredPost.category}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 hover:text-primary transition-all duration-300 font-['MonumentExtended']">{featuredPost.title}</h2>
              <p className="text-gray-400 text-lg mb-6 font-['NeueMontreal']">{featuredPost.excerpt}</p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium font-['NeueMontreal']">{featuredPost.author}</p>
                  <p className="text-gray-500 text-sm font-['NeueMontreal']">{featuredPost.date} · {featuredPost.readTime}</p>
                </div>
              </div>
              <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 self-start relative overflow-hidden group text-lg font-['MonumentExtended'] focus:ring-4 focus:ring-primary/40 focus:outline-none active:scale-95 hover:shadow-primary/40">
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center">
                  Read Full Article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters with enhanced styling */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-primary px-6 py-2 rounded-full text-white font-medium relative overflow-hidden group font-['NeueMontreal']">
            <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative">All Posts</span>
          </button>
          <button className="bg-dark-300 hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">
            Industry Insights
          </button>
          <button className="bg-dark-300 hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">
            Technology
          </button>
          <button className="bg-dark-300 hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">
            Design
          </button>
          <button className="bg-dark-300 hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">
            Healthcare
          </button>
          <button className="bg-dark-300 hover:bg-primary/20 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 border border-dark-100 hover:border-primary/50 font-['NeueMontreal']">
            Sustainability
          </button>
        </div>
      </div>

      {/* Blog Posts Grid with 3D effect */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="blog-card bg-dark-300 rounded-lg overflow-hidden group border border-dark-100 hover:border-primary/50 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full transform hover:scale-105 transition-all duration-300">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 group-hover:animate-pulse-glow transition-all duration-300">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription with enhanced styling */}
      <div className="bg-dark-400 py-16 mb-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-metal">Subscribe to Our</span> 
              <span className="bg-clip-text text-transparent bg-gradient-red ml-2">Newsletter</span>
            </h2>
            <p className="text-gray-400 mb-8">Stay updated with the latest trends, technologies, and insights in the world of additive manufacturing.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-dark-300 border border-dark-100 text-white px-6 py-3 rounded-md flex-grow focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
              />
              <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-md transition-all duration-300 whitespace-nowrap relative overflow-hidden group">
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center justify-center">
                  Subscribe
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

      {/* Recent Webinars Section with enhanced styling */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-white">Recent</span> 
            <span className="bg-clip-text text-transparent bg-gradient-red ml-2">Webinars & Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Watch our educational webinars and event recordings to deepen your understanding of additive manufacturing.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Webinar 1 */}
          <div className="webinar-card bg-dark-300 rounded-lg overflow-hidden group border border-dark-100 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="Webinar on Metal 3D Printing" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                45:12
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3 group-hover:bg-primary/30 transition-all duration-300">Webinar</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">Advanced Metal 3D Printing Techniques for Aerospace Applications</h3>
              <p className="text-gray-400 mb-4">Learn about the latest developments in metal additive manufacturing for aerospace components.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">May 10, 2023</span>
                <button className="text-primary font-medium hover:text-white transition-all duration-300 group-hover:translate-x-1 flex items-center">
                  Watch Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Webinar 2 */}
          <div className="webinar-card bg-dark-300 rounded-lg overflow-hidden group border border-dark-100 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="Webinar on Design for Additive Manufacturing" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                38:27
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3 group-hover:bg-primary/30 transition-all duration-300">Workshop</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">Design for Additive Manufacturing: Principles and Best Practices</h3>
              <p className="text-gray-400 mb-4">Master the fundamentals of designing parts specifically for additive manufacturing processes.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">April 22, 2023</span>
                <button className="text-primary font-medium hover:text-white transition-all duration-300 group-hover:translate-x-1 flex items-center">
                  Watch Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Webinar 3 */}
          <div className="webinar-card bg-dark-300 rounded-lg overflow-hidden group border border-dark-100 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581093804721-2857c7a5cdce?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="Webinar on Medical 3D Printing" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                52:18
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3 group-hover:bg-primary/30 transition-all duration-300">Panel Discussion</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">The Future of Medical 3D Printing: From Implants to Bioprinting</h3>
              <p className="text-gray-400 mb-4">Industry experts discuss the revolutionary applications of 3D printing in healthcare.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">March 15, 2023</span>
                <button className="text-primary font-medium hover:text-white transition-all duration-300 group-hover:translate-x-1 flex items-center">
                  Watch Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
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
          <h2 className="text-3xl font-bold mb-6">Have a Question About Additive Manufacturing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Our team of experts is ready to help you understand how 3D printing can benefit your specific application.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-200 font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg inline-block group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-gray-300 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Contact Our Experts
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
            <Link href="/services" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg inline-block group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Explore Our Services
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
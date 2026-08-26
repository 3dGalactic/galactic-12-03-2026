'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Search, FileText, BookOpen, Video, Download, ArrowRight, Play, Book, FileCheck, Bookmark, ExternalLink } from 'lucide-react'

export default function ResourcesPage() {
  // State for active resource type tab
  const [activeTab, setActiveTab] = useState('blogs')
  // State for active blog category
  const [activeBlogCategory, setActiveBlogCategory] = useState('all')
  // State for active webinar category
  const [activeWebinarCategory, setActiveWebinarCategory] = useState('all')
  
  // Sample blog data
  const blogs = [
    { id: 1, title: 'The Future of FDM Printing in Aerospace', category: 'fdm', author: 'Dr. Sarah Chen', date: 'Feb 15, 2024', excerpt: 'How FDM technology is revolutionizing aerospace component manufacturing with lightweight, durable parts.', image: 'https://images.unsplash.com/photo-1581093458791-9d8e8e0e5b2b?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'SLS Printing: Material Innovations', category: 'sls', author: 'James Rodriguez', date: 'Jan 28, 2024', excerpt: 'New materials for SLS printing are expanding possibilities for functional prototypes and end-use parts.', image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Metal 3D Printing: Industry Trends 2024', category: 'materials', author: 'Michael Wong', date: 'Jan 10, 2024', excerpt: 'The latest developments in metal additive manufacturing and what they mean for production.', image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Sustainable Materials in Additive Manufacturing', category: 'materials', author: 'Emma Green', date: 'Dec 12, 2023', excerpt: 'How eco-friendly materials are changing the sustainability landscape in 3D printing.', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, title: 'The Rise of Distributed Manufacturing', category: 'industry', author: 'David Park', date: 'Nov 30, 2023', excerpt: 'How 3D printing is enabling on-demand, localized production across global supply chains.', image: 'https://images.unsplash.com/photo-1581093198932-27fd85e9ac1e?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'FDM vs. SLA: Choosing the Right Technology', category: 'fdm', author: 'Lisa Johnson', date: 'Nov 15, 2023', excerpt: 'A comprehensive comparison of FDM and SLA technologies for different applications.', image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop' },
  ]
  
  // Sample brochure data
  const brochures = [
    { id: 1, title: 'FDM Printer Series Brochure', category: 'printers', icon: <FileText className="w-10 h-10 text-primary" /> },
    { id: 2, title: 'SLS Technology Overview', category: 'technologies', icon: <FileText className="w-10 h-10 text-primary" /> },
    { id: 3, title: 'Metal Printing Capabilities', category: 'technologies', icon: <FileText className="w-10 h-10 text-primary" /> },
    { id: 4, title: 'Engineering Materials Catalog', category: 'materials', icon: <FileText className="w-10 h-10 text-primary" /> },
    { id: 5, title: 'Post-Processing Solutions', category: 'technologies', icon: <FileText className="w-10 h-10 text-primary" /> },
    { id: 6, title: 'Industrial Applications Guide', category: 'applications', icon: <FileText className="w-10 h-10 text-primary" /> },
  ]
  
  // Sample case study data
  const caseStudies = [
    { id: 1, title: 'Aerospace: Lightweight Bracket Redesign', industry: 'Aerospace', description: 'How we helped reduce component weight by 40% while maintaining structural integrity for a major aircraft manufacturer.' },
    { id: 2, title: 'Medical: Custom Surgical Guides', industry: 'Medical', description: 'Patient-specific surgical guides printed on-demand for a leading orthopedic hospital, improving surgical outcomes.' },
    { id: 3, title: 'Automotive: Rapid Tooling for Production', industry: 'Automotive', description: 'Reducing lead times from 12 weeks to 10 days for production tooling at a major automotive supplier.' },
    { id: 4, title: 'Consumer Electronics: Design Iteration', industry: 'Consumer', description: 'Accelerating product development cycles by 60% for a consumer electronics company using rapid prototyping.' },
  ]
  
  // Sample guides data
  const guides = [
    { id: 1, title: "Beginner's Guide to Additive Manufacturing", level: 'Beginner', icon: <Book className="w-8 h-8 text-primary" /> },
    { id: 2, title: 'Design for Additive Manufacturing (DfAM)', level: 'Intermediate', icon: <Book className="w-8 h-8 text-primary" /> },
    { id: 3, title: 'Material Selection Guide', level: 'All Levels', icon: <Book className="w-8 h-8 text-primary" /> },
    { id: 4, title: 'Post-Processing Techniques', level: 'Advanced', icon: <Book className="w-8 h-8 text-primary" /> },
    
    { id: 6, title: 'Cost Optimization Strategies', level: 'Intermediate', icon: <Book className="w-8 h-8 text-primary" /> },
  ]
  
  // Sample webinar data
  const webinars = [
    { id: 1, title: 'Next-Gen Materials for Industrial Applications', category: 'tutorials', date: 'Mar 10, 2024', duration: '45 min', thumbnail: 'https://images.unsplash.com/photo-1581093458791-9d8e8e0e5b2b?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Design Optimization for Metal AM', category: 'tutorials', date: 'Feb 22, 2024', duration: '60 min', thumbnail: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Scaling Production with Additive Manufacturing', category: 'webinars', date: 'Jan 18, 2024', duration: '90 min', thumbnail: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Post-Processing Masterclass', category: 'training', date: 'Dec 05, 2023', duration: '120 min', thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Assurance in Additive Manufacturing', category: 'webinars', date: 'Nov 14, 2023', duration: '60 min', thumbnail: 'https://images.unsplash.com/photo-1581093198932-27fd85e9ac1e?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'Introduction to SLS Technology', category: 'training', date: 'Oct 30, 2023', duration: '45 min', thumbnail: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop' },
  ]
  
  // Filter blogs by category
  const filteredBlogs = activeBlogCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeBlogCategory)
    
  // Filter webinars by category
  const filteredWebinars = activeWebinarCategory === 'all' 
    ? webinars 
    : webinars.filter(webinar => webinar.category === activeWebinarCategory)

  return (
    <main className="text-white">
      {/* HERO / INTRO */}
      <section className="relative min-h-[70vh] pt-28 pb-16 flex items-end overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" loading="lazy" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/80" />
          <div className="absolute -inset-40 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(185,28,28,0.20),transparent_60%)]" />
          <div className="absolute -inset-40 bg-[radial-gradient(700px_circle_at_80%_20%,rgba(255,255,255,0.06),transparent_65%)] animate-spin-slow" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6">Resources & Learning Hub</h1>
            <p className="text-xl md:text-2xl text-red-50/90 font-['scrib']  mb-8">Explore articles, case studies, guides, and videos on Additive Manufacturing.</p>
            <Link href="#resources-tabs" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-['dena'] px-6 py-3 rounded-md transition">
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* RESOURCE TABS NAVIGATION */}
      <section id="resources-tabs" className="sticky top-20 z-30 bg-[#0f0b0b]/80 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Tab Navigation */}
            <div className="flex items-center gap-2 font-['dena'] overflow-x-auto pb-2 hide-scrollbar">
              {[
                { id: 'blogs', label: 'Blog Posts', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'brochures', label: 'Brochures', icon: <FileText className="w-4 h-4" /> },
                { id: 'case-studies', label: 'Case Studies', icon: <FileCheck className="w-4 h-4" /> },
                { id: 'guides', label: 'Guides', icon: <Book className="w-4 h-4" /> },
                { id: 'webinars', label: 'Webinars', icon: <Video className="w-4 h-4" /> },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex  items-center gap-2 px-4 py-2 rounded-full transition ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-white/5 font-['Aeonik'] border border-white/20 rounded-full pl-10 pr-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* BLOG POSTS */}
      {activeTab === 'blogs' && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between mb-10">
              <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena']">Blog Posts</motion.h2>
              
              {/* Blog Category Filters */}
              <div className="flex font-['scrib'] items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'fdm', label: 'FDM' },
                  { id: 'sls', label: 'SLS' },
                  { id: 'materials', label: 'Materials' },
                  { id: 'industry', label: 'Industry Updates' },
                ].map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveBlogCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm transition ${activeBlogCategory === category.id ? 'bg-primary text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, idx) => (
                <motion.div 
                  key={blog.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-red-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-xs text-white/80 bg-black/40 backdrop-blur-sm px-2 font-['test'] py-1 rounded-full">{blog.category.toUpperCase()}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl  mb-2 group-hover:text-primary font-['test'] transition-colors">{blog.title}</h3>
                    <p className="text-gray-300 font-['scrib'] text-sm mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-['test'] text-gray-400">{blog.author} • {blog.date}</div>
                      <Link href={`/blog/${blog.id}`} className="text-primary font-['scrib'] hover:text-secondary text-sm font-bold flex items-center gap-1 transition-colors">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="mt-10 text-center">
              <Link href="/blog" className="font-['dena'] inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition">
                View All Blog Posts <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* BROCHURES & DOWNLOADS */}
      {activeTab === 'brochures' && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-8">
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Brochures & Downloads</motion.h2>
            
            {/* Brochures Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brochures.map((brochure, idx) => (
                <motion.div 
                  key={brochure.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 shadow-xl flex flex-col items-center text-center"
                >
                  <div className="mb-4">{brochure.icon}</div>
                  <h3 className="text-xl font-['test'] mb-2">{brochure.title}</h3>
                  <p className="text-gray-400 font-['scrib'] text-sm mb-6">{brochure.category}</p>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="mt-auto font-['dena'] inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CASE STUDIES */}
      {activeTab === 'case-studies' && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-8">
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Case Studies</motion.h2>
            
            {/* Case Studies List */}
            <div className="space-y-6">
              {caseStudies.map((study, idx) => (
                <motion.div 
                  key={study.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="text-sm text-primary font-['scrib'] mb-2 ">{study.industry}</div>
                        <h3 className="text-xl md:text-2xl font-['test'] mb-3">{study.title}</h3>
                        <p className="text-gray-300 font-['scrib'] mb-4">{study.description}</p>
                      </div>
                      <Link href={`/case-studies/${study.id}`} className="inline-flex font-['dena'] items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition whitespace-nowrap">
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* GUIDES & HOW-TOS */}
      {activeTab === 'guides' && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-8">
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Guides & How-To&apos;s</motion.h2>
            
            {/* Guides Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, idx) => (
                <motion.div 
                  key={guide.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      {guide.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-['test'] mb-2">{guide.title}</h3>
                      <div className="text-xs text-primary mb-4 font-['scrib']">{guide.level}</div>
                      <Link href={`/guides/${guide.id}`} className="inline-flex items-center gap-1 text-white hover:text-primary text-sm font-['dena'] transition-colors">
                        View Guide <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* WEBINARS & VIDEO CONTENT */}
      {activeTab === 'webinars' && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between mb-10">
              <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena']">Webinars & Videos</motion.h2>
              
              {/* Webinar Category Filters */}
              <div className="flex items-center font-['scrib'] gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'webinars', label: 'Past Webinars' },
                  { id: 'training', label: 'Training Clips' },
                  { id: 'tutorials', label: 'Tutorials' },
                ].map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveWebinarCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm transition ${activeWebinarCategory === category.id ? 'bg-primary text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Webinars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar, idx) => (
                <motion.div 
                  key={webinar.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-red-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={webinar.thumbnail} alt={webinar.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-4 text-xs text-white/80 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full font-['scrib']">{webinar.duration}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-['test'] mb-2 group-hover:text-primary transition-colors">{webinar.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-['dena'] text-gray-400">{webinar.date}</div>
                      <Link href={`/webinars/${webinar.id}`} className="text-primary hover:text-secondary text-sm font-['scrib'] flex items-center gap-1 transition-colors">
                        Watch Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Upcoming Webinars */}
            <div className="mt-16">
              <h3 className="text-2xl font-['dena'] mb-6">Upcoming Live Webinars</h3>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-red-500/30 transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-['test'] mb-2">Advanced Metal AM: From Design to Production</h4>
                    <p className="text-gray-300 font-['scrib'] mb-4">Join our experts as they discuss the latest advancements in metal additive manufacturing.</p>
                    <div className="flex items-center font-['dena'] gap-4 text-sm text-gray-400">
                      <span>April 15, 2024</span>
                      <span>11:00 AM EST</span>
                      <span>90 minutes</span>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition whitespace-nowrap font-['dena']">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* FINAL CALL-TO-ACTION */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" loading="lazy" poster="https://images.unsplash.com/photo-1554475901-4538ddfbccc0?q=80&w=1600&auto=format&fit=crop">
            <source src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1a0f0f]/50 to-[#0f0b0b]/80" />
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-4xl md:text-6xl font-['test'] mb-3">Stay Ahead in 3D Printing</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="text-red-50/90 font-['scrib'] mb-6 max-w-2xl mx-auto">Download, watch, and learn with Galactic 3D Resources.</motion.p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/newsletter" className="bg-primary hover:bg-secondary text-white font-['dena'] px-6 py-3 rounded-md transition">Subscribe to Blog</Link>
            <Link href="/contact?subject=Guide+Request" className="bg-white/10 hover:bg-white/20 text-white font-['dena'] px-6 py-3 rounded-md transition">Request a Guide</Link>
          </div>
        </div>
      </section>
    </main>
  )
}



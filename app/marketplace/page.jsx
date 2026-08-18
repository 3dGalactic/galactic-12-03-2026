'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Search, Filter, Upload, ShoppingCart, User, CheckCircle2, Download, ArrowRight, Star, Clock, Tag, Grid3X3, ListFilter } from 'lucide-react'

export default function MarketplacePage() {
  // State for user login status (simulated)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // State for active tab in user account area
  const [activeTab, setActiveTab] = useState('orders')
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Sample design data
  const designs = [
    { id: 1, title: 'Modular Drone Frame', designer: 'AeroDesigns', price: 49.99, category: 'aerospace', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Medical Implant Prototype', designer: 'MedTech Solutions', price: 129.99, category: 'medical', image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Automotive Intake Manifold', designer: 'TurboWorks', price: 79.99, category: 'automotive', image: 'https://images.unsplash.com/photo-1581093458791-9d8e8e0e5b2b?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Ergonomic Phone Stand', designer: 'ConsumerCraft', price: 0, category: 'consumer', image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1600&auto=format&fit=crop', isFree: true },
    { id: 5, title: 'Industrial Robotic Gripper', designer: 'RoboSystems', price: 149.99, category: 'industrial', image: 'https://images.unsplash.com/photo-1581093198932-27fd85e9ac1e?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'Architectural Model Kit', designer: 'UrbanDesigns', price: 39.99, category: 'architecture', image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop' },
  ]
  
  // Sample user orders data
  const userOrders = [
    { id: 'ORD-2023-001', date: '2023-12-15', product: 'Industrial Robotic Gripper', status: 'Completed', price: 149.99 },
    { id: 'ORD-2023-002', date: '2024-01-20', product: 'Modular Drone Frame', status: 'In Production', price: 49.99 },
    { id: 'ORD-2024-003', date: '2024-02-05', product: 'Custom Part Production', status: 'Processing', price: 299.99 },
  ]
  
  // Sample user designs data
  const userDesigns = [
    { id: 'DSG-001', title: 'Custom Keyboard Case', date: '2023-11-10', downloads: 128, price: 19.99 },
    { id: 'DSG-002', title: 'Modular Storage System', date: '2024-01-05', downloads: 57, price: 0, isFree: true },
  ]
  
  // Filter designs by category
  const filteredDesigns = activeCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === activeCategory)

  return (
    <main className="text-white">
      {/* HERO / INTRO */}
      <section className="relative min-h-[70vh] pt-28 pb-16 flex items-end overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/80" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_5%,rgba(185,28,28,0.25),transparent_60%)]" />
          <div className="absolute -inset-48 bg-[radial-gradient(700px_circle_at_80%_20%,rgba(255,255,255,0.06),transparent_65%)] animate-spin-slow" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-7xl font-['test'] leading-tight">Galactic 3D Marketplace</h1>
            <p className="mt-4 text-base md:text-xl font-['scrib'] text-red-50/90 max-w-3xl">Buy, sell, and produce cutting-edge 3D designs.</p>
            <div className="mt-8 flex font-['dena'] flex-wrap gap-4">
              <Link href="#browse" className="bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md shadow transition hover:scale-105">Browse Designs</Link>
              <Link href="#sell" className="bg-white/10 hover:bg-white/20 text-white font-monumentExtended px-6 py-3 rounded-md shadow transition hover:scale-105">Sell Your Design</Link>
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12" style={{ WebkitClipPath: 'polygon(0 0, 100% 100%, 0 100%)', clipPath: 'polygon(0 0, 100% 100%, 0 100%)', background: 'linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(15,11,11,0.9))' }} />
      </section>

      {/* BROWSE DESIGNS */}
      <section id="browse" className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#130d0d] to-[#0f0b0b]" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Browse Designs</motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl p-5 shadow-2xl sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-red-300" />
                  <h3 className="text-xl font-['test']">Filters</h3>
                </div>
                
                {/* Search */}
                <div className="mb-6">
                  <div className="relative font-['scrib']">
                    <input type="text" placeholder="Search designs..." className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 pl-10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-6 font-['scrib']">
                  <h4 className="text-sm font-semibold font-['test'] mb-3 text-gray-300">Categories</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'all', name: 'All Categories' },
                      { id: 'aerospace', name: 'Aerospace & Drones' },
                      { id: 'automotive', name: 'Automotive' },
                      { id: 'medical', name: 'Medical' },
                      { id: 'consumer', name: 'Consumer Products' },
                      { id: 'industrial', name: 'Industrial' },
                      { id: 'architecture', name: 'Architecture' },
                    ].map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${activeCategory === category.id ? 'bg-primary/20 text-white' : 'hover:bg-white/10 text-gray-300'}`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold font-['test'] mb-3 text-gray-300">Price Range</h4>
                  <div className="space-y-2 font-['scrib']">
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                      Free
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                      Under $25
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                      $25 - $50
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                      $50 - $100
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                      $100+
                    </label>
                  </div>
                </div>
                
                {/* Sort By */}
                <div className="font-['scrib']">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">Sort By</h4>
                  <select className="w-full bg-[#1D1818] border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>
            </motion.div>
            
            {/* Design Grid */}
            <div className="lg:col-span-3">
              {/* View Controls */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-gray-300 font-['test']">
                  Showing {filteredDesigns.length} designs
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition">
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition">
                    <ListFilter className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Designs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDesigns.map((design, idx) => (
                  <motion.div 
                    key={design.id} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl overflow-hidden shadow-2xl hover:bg-white/10 hover:border-red-500/40 transition"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img src={design.image} alt={design.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                        <button className="bg-primary hover:bg-secondary text-white font-['test'] px-4 py-2 rounded-md transition transform translate-y-4 group-hover:translate-y-0">View Details</button>
                      </div>
                      {design.isFree && (
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold font-['test'] px-2 py-1 rounded-md">FREE</div>
                      )}
                    </div>
                    <div className="p-4 font-['scrib']">
                      <h3 className="text-lg font-semibold  mb-1 truncate">{design.title}</h3>
                      <p className="text-sm  text-gray-300 mb-2">by {design.designer}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-bold">
                          {design.isFree ? 'Free' : `$${design.price.toFixed(2)}`}
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-xs">4.8</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <button className="bg-white/10 hover:bg-white/20 text-white font-['dena'] px-6 py-3 rounded-md transition">Load More Designs</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELL YOUR DESIGN */}
      <section id="sell" className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#0c0b0b] to-black" />
          <div className="absolute -inset-52 bg-[radial-gradient(900px_circle_at_80%_0%,rgba(185,28,28,0.22),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Sell Your Design</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Explanation */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <h3 className="text-2xl md:text-3xl font-['test'] mb-4">Turn your creativity into income</h3>
              <p className="text-gray-200 font-['scrib'] mb-6">Upload and sell your 3D designs to a global community of makers, engineers, and manufacturers.</p>
              
              <ul className="space-y-3 font-['scrib'] mb-6">
                {[
                  'Earn passive income from your designs',
                  'Reach thousands of potential customers',
                  'Set your own prices and licensing terms',
                  'Get detailed analytics on downloads and sales'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-white/5 border border-red-500/20 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold font-['test']">Designer Spotlight</span>
                </div>
                <p className="text-sm italic font-['scrib'] text-gray-300">"I've earned over $12,000 selling my engineering models on Galactic 3D. The platform makes it easy to reach customers worldwide."</p>
                <p className="text-sm font-['scrib'] text-gray-400 mt-2">— Alex Chen, Mechanical Engineer</p>
              </div>
            </motion.div>
            
            {/* Right Column - Login/Signup or Upload Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              {!isLoggedIn ? (
                <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl p-6 shadow-2xl">
                  <h3 className="text-xl font-['test'] mb-4">Sign In to Start Selling</h3>
                  <p className="text-gray-300 font-['scrib'] mb-6">Create an account or sign in to upload your designs to the marketplace.</p>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4 font-['scrib']">
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Email</label>
                      <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Password</label>
                      <input type="password" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-3 rounded-md transition">Sign In</button>
                    <div className="text-center text-sm text-gray-300">
                      Don't have an account? <button onClick={() => setIsLoggedIn(true)} className="text-primary hover:text-secondary">Sign Up</button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl p-6 shadow-2xl">
                  <h3 className="text-xl font-monumentExtended mb-4">Upload Your Design</h3>
                  
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-primary/50 transition cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                      <p className="text-gray-300 mb-1">Drag & drop your file here</p>
                      <p className="text-xs text-gray-400">Supports STL, OBJ, STEP (Max 50MB)</p>
                      <input type="file" className="hidden" />
                      <button className="mt-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm transition">Browse Files</button>
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Title</label>
                      <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Design title" required />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Description</label>
                      <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary h-24" placeholder="Describe your design..." required></textarea>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-300 block mb-1">Category</label>
                        <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" required>
                          <option value="">Select category</option>
                          <option>Aerospace & Drones</option>
                          <option>Automotive</option>
                          <option>Medical</option>
                          <option>Consumer Products</option>
                          <option>Industrial</option>
                          <option>Architecture</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-gray-300 block mb-1">Price ($)</label>
                        <input type="number" min="0" step="0.01" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="19.99" required />
                        <div className="mt-1 flex items-center gap-2">
                          <input type="checkbox" id="free-design" className="rounded text-primary focus:ring-primary" />
                          <label htmlFor="free-design" className="text-xs text-gray-300">Make it free</label>
                        </div>
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-3 rounded-md transition">Submit Design</button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* UPLOAD PART FOR PRODUCTION */}
      <section id="production" className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#130d0d] to-[#0f0b0b]" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Upload Part for Production</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Illustration */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://ik.imagekit.io/0s6dxbeae/pexels-photo-7480239.jpeg?updatedAt=1756057740972">
                  <source src="https://videos.pexels.com/video-files/3731906/3731906-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
              </div>
                <div className="text-black  absolute -bottom-5 -right-5 bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl p-4 shadow-2xl max-w-xs">
                <h3 className="text-lg font-['scrib'] mb-2">Industrial-Grade Production</h3>
                <p className="font-['scrib'] text-sm text-[#B91C1C] ">Our advanced 3D printing facilities can produce your parts with precision and reliability at scale.</p>
              </div>
            </motion.div>
            
            {/* Right Column - Upload Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="bg-white/5 font-['scrib'] backdrop-blur-xl border border-red-500/20 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-['test'] mb-4">Request a Production Quote</h3>
                <p className="text-gray-300 mb-6">Upload your model and select specifications to receive a production quote.</p>
                
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-primary/50 transition cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-gray-300 mb-1">Upload your 3D model</p>
                    <p className="text-xs text-gray-400">Supports STL, OBJ, STEP (Max 100MB)</p>
                    <input type="file" className="hidden" />
                    <button className="mt-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm transition">Browse Files</button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Material</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" required>
                        <option value="">Select material</option>
                        <option>PLA</option>
                        <option>ABS</option>
                        <option>PETG</option>
                        <option>Nylon</option>
                        <option>TPU</option>
                        <option>Resin (Standard)</option>
                        <option>Resin (Engineering)</option>
                        <option>Metal (Aluminum)</option>
                        <option>Metal (Steel)</option>
                        <option>Metal (Titanium)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Finish</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" required>
                        <option value="">Select finish</option>
                        <option>As Printed</option>
                        <option>Sanded</option>
                        <option>Polished</option>
                        <option>Painted</option>
                        <option>Anodized</option>
                        <option>Plated</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Quantity</label>
                      <input type="number" min="1" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="1" required />
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 block mb-1">Priority</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" required>
                        <option value="">Select priority</option>
                        <option>Standard (7-10 days)</option>
                        <option>Express (3-5 days)</option>
                        <option>Rush (24-48 hours)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-300 block mb-1">Special Instructions (Optional)</label>
                    <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary h-20" placeholder="Any specific requirements or notes..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-3 rounded-md transition">Request Quote</button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USER ACCOUNT AREA (Conditional) */}
      {isLoggedIn && (
        <section id="account" className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#0c0b0b] to-black" />
            <div className="absolute -inset-52 bg-[radial-gradient(900px_circle_at_80%_0%,rgba(185,28,28,0.15),transparent_60%)]" />
          </div>
          <div className="container mx-auto px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-red-300" />
              <h2 className="text-3xl md:text-5xl font-monumentExtended">My Account</h2>
            </motion.div>
            
            {/* Account Tabs */}
            <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-xl overflow-hidden shadow-2xl mb-8">
              <div className="flex border-b border-white/10">
                {[
                  { id: 'orders', label: 'My Orders' },
                  { id: 'designs', label: 'My Designs' },
                  { id: 'settings', label: 'Profile Settings' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-sm font-semibold transition ${activeTab === tab.id ? 'bg-white/10 text-white border-b-2 border-primary' : 'text-gray-300 hover:bg-white/5'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="p-6">
                {/* My Orders Tab */}
                {activeTab === 'orders' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Order History</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10 text-left">
                            <th className="pb-2 text-sm font-semibold text-gray-300">Order ID</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Date</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Product</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Status</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Price</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userOrders.map(order => (
                            <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
                              <td className="py-3 text-sm">{order.id}</td>
                              <td className="py-3 text-sm">{order.date}</td>
                              <td className="py-3 text-sm">{order.product}</td>
                              <td className="py-3 text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Completed' ? 'bg-green-500/20 text-green-300' : order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300'}`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-3 text-sm">${order.price.toFixed(2)}</td>
                              <td className="py-3 text-sm">
                                <button className="text-primary hover:text-secondary text-sm">Details</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {/* My Designs Tab */}
                {activeTab === 'designs' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">My Uploaded Designs</h3>
                      <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm transition">Upload New Design</button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10 text-left">
                            <th className="pb-2 text-sm font-semibold text-gray-300">Design</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Date</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Downloads</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Price</th>
                            <th className="pb-2 text-sm font-semibold text-gray-300">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userDesigns.map(design => (
                            <tr key={design.id} className="border-b border-white/5 hover:bg-white/5">
                              <td className="py-3 text-sm">{design.title}</td>
                              <td className="py-3 text-sm">{design.date}</td>
                              <td className="py-3 text-sm">{design.downloads}</td>
                              <td className="py-3 text-sm">{design.isFree ? 'Free' : `$${design.price.toFixed(2)}`}</td>
                              <td className="py-3 text-sm">
                                <div className="flex gap-2">
                                  <button className="text-primary hover:text-secondary text-sm">Edit</button>
                                  <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {/* Profile Settings Tab */}
                {activeTab === 'settings' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-300 block mb-1">First Name</label>
                          <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="John" />
                        </div>
                        <div>
                          <label className="text-sm text-gray-300 block mb-1">Last Name</label>
                          <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="Doe" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm text-gray-300 block mb-1">Email</label>
                        <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="john.doe@example.com" />
                      </div>
                      
                      <div>
                        <label className="text-sm text-gray-300 block mb-1">Bio</label>
                        <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary h-24" defaultValue="3D designer specializing in mechanical parts and prototypes."></textarea>
                      </div>
                      
                      <div>
                        <label className="text-sm text-gray-300 block mb-1">Change Password</label>
                        <input type="password" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="New password" />
                      </div>
                      
                      <div>
                        <label className="text-sm text-gray-300 block mb-1">Confirm Password</label>
                        <input type="password" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Confirm new password" />
                      </div>
                      
                      <div className="pt-2">
                        <button type="submit" className="bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md transition">Save Changes</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CALL-TO-ACTION */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1554475901-4538ddfbccc0?q=80&w=1600&auto=format&fit=crop">
            <source src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1a0f0f]/50 to-[#0f0b0b]/80" />
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-4xl md:text-6xl font-['test'] mb-3">Join the Future of Making</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="font-['scrib'] text-red-50/90 mb-6 max-w-2xl mx-auto">Upload, share, and produce your designs with Galactic 3D. Be part of the next industrial revolution.</motion.p>
          <div className="flex font-['dena'] items-center justify-center gap-4 flex-wrap">
            <Link href="#sell" className="bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md transition">Start Selling</Link>
            <Link href="#production" className="bg-white/10 hover:bg-white/20 text-white font-monumentExtended px-6 py-3 rounded-md transition">Upload Your Part</Link>
          </div>
          
          <div className="font-['scrib'] mt-12 flex items-center justify-center gap-6 flex-wrap">
            <div className=" flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5 text-red-300" />
              <span className="text-sm">24/7 Production</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Tag className="w-5 h-5 text-red-300" />
              <span className="text-sm">Competitive Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Download className="w-5 h-5 text-red-300" />
              <span className="text-sm">Instant Downloads</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <ArrowRight className="w-5 h-5 text-red-300" />
              <span className="text-sm">Global Shipping</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



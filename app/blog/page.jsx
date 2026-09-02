'use client'

import { useState } from 'react';
import Link from 'next/link';
import { X, Calendar, Clock, User, ArrowRight, CheckCircle2, Linkedin, ExternalLink } from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Aerospace is Being Built Layer by Layer",
      excerpt: "From rocket engines and aircraft fuselages to turbine systems and drone frames, additive manufacturing is transforming aerospace engineering. Traditional manufacturing often limits designers due to tooling constraints, material waste, and lengthy production cycles. Metal 3D printing removes many of these barriers, enabling engineers to create lighter, stronger, and more efficient components.",
      linkedinUrl: "https://www.linkedin.com/pulse/future-aerospace-being-built-layer-galactic-3d-ahaac/?trackingId=hYi2UR5b2rIGg9cgcAGEcg%3D%3D",
      image: "/articles/aerospace-future.png",
      author: "Galactic 3D Team",
      authorRole: "Aerospace & Defense Team",
      date: "September 2026",
      category: "Aerospace & Defense",
      readTime: "5 min read",
      paragraphs: [
        "From rocket engines and aircraft fuselages to turbine systems and drone frames, additive manufacturing is transforming aerospace engineering. Traditional manufacturing often limits designers due to tooling constraints, material waste, and lengthy production cycles. Metal 3D printing removes many of these barriers, enabling engineers to create lighter, stronger, and more efficient components.",
        "At Galactic 3D, advanced metal additive manufacturing technologies help aerospace organizations accelerate innovation while maintaining precision and reliability. Complex geometries that were previously impossible to manufacture can now be produced with reduced material waste and significantly shorter lead times.",
        "As the aerospace industry continues to demand lightweight structures and high-performance materials, additive manufacturing is becoming a key technology powering the next generation of aviation and space exploration."
      ]
    },
    {
      id: 5,
      title: "Additive Manufacturing for Space Technology",
      excerpt: "Space exploration requires components that are lightweight, durable, and capable of withstanding extreme operating conditions. Additive manufacturing provides the flexibility needed to design and produce such components while reducing manufacturing complexity.",
      linkedinUrl: "https://www.linkedin.com/pulse/additive-manufacturing-space-industry-transforming-aerospace-591oc/?trackingId=pSnJMBNmEe%2FpbL3i1pIp0w%3D%3D",
      image: "/articles/space-industry.png",
      author: "Galactic 3D Team",
      authorRole: "Space Technology Team",
      date: "July 2026",
      category: "Space Technology",
      readTime: "4 min read",
      paragraphs: [
        "Space exploration requires components that are lightweight, durable, and capable of withstanding extreme operating conditions. Additive manufacturing provides the flexibility needed to design and produce such components while reducing manufacturing complexity.",
        "By enabling rapid prototyping and the production of mission-critical aerospace parts, additive manufacturing helps reduce lead times and accelerate innovation across the space industry. Collaboration between manufacturing specialists and space technology organizations is driving the development of next-generation aerospace solutions.",
        "Galactic 3D remains committed to supporting India's growing space ecosystem through precision-driven additive manufacturing technologies."
      ]
    },
    {
      id: 8,
      title: "EV Battery Cooling Plates via Metal Additive Manufacturing",
      excerpt: "Metal Additive Manufacturing is transforming EV battery thermal management through advanced cooling plate designs. By leveraging metal AM, engineers can create complex internal cooling channels that improve heat dissipation, reduce weight, and enhance battery efficiency and lifespan.",
      linkedinUrl: "https://www.linkedin.com/pulse/ev-battery-cooling-plates-via-metal-am-galactic-3d-dssjc/?trackingId=cYF1MQEvQiI2kLGiWpY4jg%3D%3D",
      image: "/articles/ev-battery-cooling.png",
      author: "Galactic 3D Team",
      authorRole: "Automotive & EV Thermal Team",
      date: "January 17, 2026",
      category: "Automotive & EV Innovation",
      readTime: "4 min read",
      paragraphs: [
        "Metal Additive Manufacturing is transforming EV battery thermal management through advanced cooling plate designs. By leveraging metal AM, engineers can create complex internal cooling channels that improve heat dissipation, reduce weight, and enhance battery efficiency and lifespan.",
        "These innovations help electric vehicles achieve better performance, safety, and reliability while enabling faster product development cycles.",
        "The technology also supports optimized coolant flow paths that are difficult or impossible to manufacture using conventional methods."
      ]
    },
    {
      id: 9,
      title: "Lattice Structures in Armour and Drone Frames",
      excerpt: "Lattice structures are revolutionizing the design of armor systems and drone frames by delivering exceptional strength-to-weight ratios. Through metal additive manufacturing, engineers can create complex lattice geometries that absorb impact energy, reduce weight, and enhance overall performance.",
      linkedinUrl: "https://www.linkedin.com/pulse/lattice-structures-armour-drone-frames-galactic-3d-hidkc/",
      image: "/articles/lattice-structures.png",
      author: "Galactic 3D Team",
      authorRole: "Defense & Aerospace Structures Team",
      date: "January 3, 2026",
      category: "Aerospace & Defense",
      readTime: "4 min read",
      paragraphs: [
        "Lattice structures are revolutionizing the design of armor systems and drone frames by delivering exceptional strength-to-weight ratios.",
        "Through metal additive manufacturing, engineers can create complex lattice geometries that absorb impact energy, reduce weight, and enhance overall performance.",
        "These structures are enabling the next generation of lightweight defense systems, aerospace components, and high-performance unmanned aerial vehicles."
      ]
    },
    {
      id: 10,
      title: "Printing at 20–40 Microns (0.02–0.04 mm) with EOS M290",
      excerpt: "Ultra-fine layer thicknesses of 20–40 microns on the EOS M290 enable exceptional surface finish, higher dimensional accuracy, and improved feature resolution in metal additive manufacturing. This capability is particularly valuable for aerospace, medical, tooling, and precision engineering applications.",
      linkedinUrl: "https://www.linkedin.com/pulse/printing-2040microns-002004mm-eos-m290-galactic-3d-knjwe/",
      image: "/articles/eos-m290-microns.png",
      author: "Galactic 3D Team",
      authorRole: "Precision Engineering Team",
      date: "June 13, 2025",
      category: "Precision Engineering & Technology",
      readTime: "4 min read",
      paragraphs: [
        "Ultra-fine layer thicknesses of 20–40 microns on the EOS M290 enable exceptional surface finish, higher dimensional accuracy, and improved feature resolution in metal additive manufacturing.",
        "This capability is particularly valuable for aerospace, medical, tooling, and precision engineering applications where quality and performance requirements are extremely demanding.",
        "By fine-tuning laser power, hatch distance, and layer thickness, Galactic 3D delivers components with superior density, microstructural integrity, and sub-millimeter detail precision."
      ]
    },
    {
      id: 11,
      title: "Supply Chain Disruption Through Additive Manufacturing",
      excerpt: "Traditional supply chains are vulnerable to delays, shortages, and global disruptions. Additive Manufacturing enables on-demand, localized production, reducing inventory costs, shortening lead times, and improving supply chain resilience.",
      linkedinUrl: "https://www.linkedin.com/pulse/supply-chain-disruption-through-additive-manufacturing-strategic-4rrrc/",
      image: "/articles/supply-chain-disruption.png",
      author: "Galactic 3D Team",
      authorRole: "Supply Chain & Operations Team",
      date: "June 7, 2025",
      category: "Supply Chain & Manufacturing",
      readTime: "4 min read",
      paragraphs: [
        "Traditional supply chains are vulnerable to delays, shortages, and global disruptions. Additive Manufacturing enables on-demand, localized production, reducing inventory costs, shortening lead times, and improving supply chain resilience.",
        "By leveraging digital manufacturing, companies can produce critical components faster and closer to the point of use, ensuring greater flexibility and operational continuity.",
        "Galactic 3D empowers enterprises to transition from physical warehouse inventories to digital spare part repositories, reducing holding costs and mitigating supply chain bottlenecks."
      ]
    },
    {
      id: 12,
      title: "Enhancing Nuclear Power with Additive Manufacturing: Advancing Safety, Efficiency, and Sustainability",
      excerpt: "Additive Manufacturing is transforming the nuclear energy sector by enabling the production of complex, high-performance components with greater precision and reliability. From improving safety standards and reducing maintenance downtime to enhancing operational efficiency.",
      linkedinUrl: "https://www.linkedin.com/pulse/enhancing-nuclear-power-additive-manufacturing-advancing-safety-tswmc/",
      image: "/articles/nuclear-power.png",
      author: "Galactic 3D Team",
      authorRole: "Nuclear Energy AM Team",
      date: "May 21, 2025",
      category: "Nuclear Energy & AM",
      readTime: "4 min read",
      paragraphs: [
        "Additive Manufacturing is transforming the nuclear energy sector by enabling the production of complex, high-performance components with greater precision and reliability.",
        "From improving safety standards and reducing maintenance downtime to enhancing operational efficiency and sustainability, 3D printing is helping modernize nuclear infrastructure while supporting long-term energy resilience.",
        "Galactic 3D provides qualification-ready metal additive manufacturing for radiation-resistant superalloys, high-density reactor internals, and specialized fluid handling assemblies."
      ]
    },
    {
      id: 13,
      title: "Transforming the Indian Automobile Industry using 3D Printing",
      excerpt: "Metal 3D printing is revolutionizing the Indian automobile industry by enabling faster prototyping, lightweight component manufacturing, and greater design flexibility. Additive Manufacturing helps automotive companies reduce development time, optimize performance, and lower costs.",
      linkedinUrl: "https://www.linkedin.com/pulse/metal-3d-printing-transforming-indian-automobile-industry-aebwc/",
      image: "/articles/automobile-industry.png",
      author: "Galactic 3D Team",
      authorRole: "Automotive AM Team",
      date: "May 16, 2025",
      category: "Automotive & EV Innovation",
      readTime: "4 min read",
      paragraphs: [
        "Metal 3D printing is revolutionizing the Indian automobile industry by enabling faster prototyping, lightweight component manufacturing, and greater design flexibility.",
        "Additive Manufacturing helps automotive companies reduce development time, optimize performance, lower production costs, and accelerate innovation, making vehicle manufacturing more efficient and competitive.",
        "Galactic 3D collaborates with OEM automakers, Tier-1 suppliers, and EV pioneers across India to deliver high-performance engine parts, custom bracketry, structural chassis components, and conformal cooling molds."
      ]
    },
    {
      id: 14,
      title: "Breakthrough in Biomaterials: 3D Printed Bone-Like Implants Set to Revolutionize Medicine",
      excerpt: "A major advancement in additive manufacturing is enabling the development of 3D-printed bone-like implants that closely replicate the complex structure of natural human bone.",
      linkedinUrl: "https://www.linkedin.com/pulse/breakthrough-biomaterials-3d-printed-bone-like-implants-set-irsee/",
      image: "/articles/bone-implants.png",
      author: "Galactic 3D Team",
      authorRole: "Healthcare & Biomaterials Team",
      date: "June 6, 2025",
      category: "Healthcare & Biomaterials",
      readTime: "4 min read",
      paragraphs: [
        "A major advancement in additive manufacturing is enabling the development of 3D-printed bone-like implants that closely replicate the complex structure of natural human bone.",
        "By leveraging advanced biomaterials and nanoscale design principles, these implants offer improved strength, biological integration, and patient-specific customization, opening new possibilities for regenerative medicine, orthopedics, and advanced healthcare treatments.",
        "Galactic 3D collaborates with medical researchers and implant manufacturers to deliver biocompatible, porous titanium structures engineered to encourage cell growth and osseointegration."
      ]
    }
  ];

  const filteredPosts = activeCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const categories = [
    'All Posts',
    'Aerospace & Defense',
    'Space Technology',
    'Healthcare & Biomaterials',
    'Automotive & EV Innovation',
    'Precision Engineering & Technology',
    'Supply Chain & Manufacturing',
    'Nuclear Energy & AM'
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-12 pb-20 relative overflow-hidden font-sans">
      
      {/* ARTICLES HEADER */}
      <div className="container mx-auto px-6 mb-12 relative flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-[#111111]">
            <span>Galactic 3D </span>
            <span className="text-[#D32F2F]">Articles</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed font-medium">
            Official articles, technical insights, and LinkedIn post references on aerospace 3D printing, EV cooling plates, nuclear energy AM, supply chain resilience, micron precision DMLS, space technology, and automotive 3D printing.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/company/galactic-3d/posts/?feedView=articles"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-base font-extrabold transition-all shadow-md hover:shadow-lg shrink-0 w-fit group border border-blue-400/30"
        >
          <div className="w-8 h-8 rounded-lg bg-white text-[#0A66C2] flex items-center justify-center font-black text-xl tracking-tighter leading-none shrink-0 shadow-sm transition-transform group-hover:scale-105 select-none">
            in
          </div>
          <span>Follow on LinkedIn</span>
          <ExternalLink size={16} className="opacity-80 group-hover:opacity-100" />
        </a>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#D32F2F] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#D32F2F]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-bold text-gray-500">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F] bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#D32F2F]" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#111111] group-hover:text-[#D32F2F] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-medium line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-gray-100 flex items-center justify-between mt-4">
                <span className="text-[11px] font-bold text-[#D32F2F] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A66C2] hover:underline bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-200"
                >
                  <Linkedin size={18} className="shrink-0" /> Read on LinkedIn <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FULL ARTICLE LIGHTBOX / MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl relative flex flex-col">
            
            {/* STICKY MODAL HEADER */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-200 flex items-center justify-between z-20">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#D32F2F] border border-red-100">
                {selectedPost.category}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 hover:text-[#D32F2F] flex items-center justify-center transition-colors text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            {/* MODAL BODY CONTENT */}
            <div className="p-6 sm:p-10 space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
                  {selectedPost.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500 pb-6 border-b border-gray-100">
                  <span className="flex items-center gap-1.5 text-[#111111]">
                    <User size={14} className="text-[#D32F2F]" /> {selectedPost.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#D32F2F]" /> {selectedPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#D32F2F]" /> {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* ARTICLE BANNER IMAGE */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ARTICLE BODY PARAGRAPHS */}
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                {selectedPost.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* LINKEDIN REFERENCE BUTTON BANNER */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-black text-2xl tracking-tighter shrink-0 shadow-sm select-none">
                    in
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[#111111]">Official Galactic 3D LinkedIn Reference</h4>
                    <p className="text-[11px] text-gray-600">Read the original pulse article, technical analysis, and comments on LinkedIn.</p>
                  </div>
                </div>
                <a
                  href={selectedPost.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-extrabold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <div className="w-5 h-5 rounded bg-white text-[#0A66C2] flex items-center justify-center font-black text-xs tracking-tighter select-none">in</div>
                  <span>Read on LinkedIn</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* INTERNAL LINKING & TECHNICAL SERVICES MATRIX */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
                  Explore Galactic 3D Manufacturing Capabilities in Bangalore:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs font-bold">
                  <Link
                    href="/services"
                    onClick={() => setSelectedPost(null)}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 hover:text-[#D32F2F] hover:border-[#D32F2F] transition-all flex items-center justify-between"
                  >
                    <span>Metal 3D Printing & DMLS Services</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/materials"
                    onClick={() => setSelectedPost(null)}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 hover:text-[#D32F2F] hover:border-[#D32F2F] transition-all flex items-center justify-between"
                  >
                    <span>Titanium, Inconel & AlSi10Mg Alloys</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/machines"
                    onClick={() => setSelectedPost(null)}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 hover:text-[#D32F2F] hover:border-[#D32F2F] transition-all flex items-center justify-between"
                  >
                    <span>EOS M290 20-40 Micron Printing</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/upload"
                    onClick={() => setSelectedPost(null)}
                    className="p-2.5 rounded-xl bg-[#D32F2F] text-white hover:bg-[#b71c1c] transition-all flex items-center justify-between shadow-sm"
                  >
                    <span>Instant CAD Quote (Bangalore 24h)</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* FOOTER ACTION */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-[#111111]">Published by {selectedPost.author}</p>
                  <p className="text-[11px] text-gray-500">{selectedPost.authorRole}</p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setSelectedPost(null)}
                  className="btn-corporate-primary text-xs"
                >
                  Contact Engineering Team &rarr;
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
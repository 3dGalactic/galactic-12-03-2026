'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  X,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Linkedin,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { DEFAULT_ARTICLES, ARTICLE_CATEGORIES } from '../lib/defaultArticles';

export default function Blog() {
  const [articles, setArticles] = useState(DEFAULT_ARTICLES);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch articles from API on mount
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setIsLoadingArticles(true);
      const res = await fetch('/api/articles');
      const data = await res.json();
      if (data.success && Array.isArray(data.articles)) {
        setArticles(data.articles);
      }
    } catch (err) {
      console.warn('Using default articles due to fetch error:', err);
    } finally {
      setIsLoadingArticles(false);
    }
  };

  const filteredPosts = activeCategory === 'All Posts'
    ? articles
    : articles.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-12 pb-20 relative overflow-hidden font-sans">
      {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN OVERLAY */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* ARTICLES HEADER */}
      <div className="relative z-10 container mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-[#D32F2F]" />
            <span>Industrial Insights & Publications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-[#111111]">
            <span>Galactic 3D </span>
            <span className="text-[#D32F2F]">Articles</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed font-medium">
            Official articles, technical insights, and LinkedIn post references on aerospace 3D printing, EV cooling plates, nuclear energy AM, supply chain resilience, micron precision DMLS, space technology, and automotive 3D printing.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://www.linkedin.com/company/galactic-3d/posts/?feedView=articles"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-sm font-extrabold transition-all shadow-md hover:shadow-lg shrink-0 group border border-blue-400/30"
          >
            <div className="w-7 h-7 rounded-lg bg-white text-[#0A66C2] flex items-center justify-center font-black text-lg tracking-tighter leading-none shrink-0 shadow-sm transition-transform group-hover:scale-105 select-none">
              in
            </div>
            <span>Follow on LinkedIn</span>
            <ExternalLink size={15} className="opacity-80 group-hover:opacity-100" />
          </a>
        </div>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="relative z-10 container mx-auto px-6 mb-10">
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-gray-200">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {ARTICLE_CATEGORIES.map((cat) => {
              const count = cat === 'All Posts'
                ? articles.length
                : articles.filter(p => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-[#D32F2F] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat ? 'bg-white/30 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-500 shrink-0">
            <span>Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}</span>
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div className="relative z-10 container mx-auto px-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-200 p-8">
            <p className="text-gray-500 font-bold text-base mb-3">No articles found in this category.</p>
            <button
              onClick={() => setActiveCategory('All Posts')}
              className="px-4 py-2 bg-[#D32F2F] text-white text-xs font-bold rounded-xl"
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                id={`article-${post.id}`}
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#D32F2F]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
              >
                <div>
                  {/* ARTICLE IMAGE CONTAINER */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/articles/aerospace-future.png';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* CARD CONTENT */}
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

                {/* CARD FOOTER */}
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
                    <Linkedin size={16} className="shrink-0" />
                    <span>LinkedIn</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
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
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/articles/aerospace-future.png';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ARTICLE BODY PARAGRAPHS */}
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                {Array.isArray(selectedPost.paragraphs) && selectedPost.paragraphs.map((p, idx) => (
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
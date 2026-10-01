"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  RefreshCw,
  Plus,
  Trash2,
  Upload,
  CheckCircle2,
  AlertCircle,
  Lock,
  LogOut,
  ExternalLink,
  Newspaper,
  Sparkles,
  Image as ImageIcon,
  X
} from "lucide-react";
import { ARTICLE_CATEGORIES } from "../lib/defaultArticles";

const ADMIN_PRESET_IMAGES = [
  { name: 'Aerospace & Defense', url: '/articles/aerospace-future.png' },
  { name: 'Space Technology', url: '/articles/space-industry.png' },
  { name: 'EV Battery Cooling', url: '/articles/ev-battery-cooling.png' },
  { name: 'Lattice Armour', url: '/articles/lattice-structures.png' },
  { name: 'EOS M290 Precision', url: '/articles/eos-m290-microns.png' },
  { name: 'Bone Implants', url: '/articles/bone-implants.png' },
  { name: 'Nuclear Energy', url: '/articles/nuclear-power.png' },
  { name: 'Supply Chain AM', url: '/articles/supply-chain-disruption.png' },
  { name: 'Automobile 3D', url: '/articles/automobile-industry.png' },
];

function getCategoryDefaultImage(cat) {
  switch (cat) {
    case 'Space Technology': return '/articles/space-industry.png';
    case 'Automotive & EV Innovation': return '/articles/ev-battery-cooling.png';
    case 'Healthcare & Biomaterials': return '/articles/bone-implants.png';
    case 'Nuclear Energy & AM': return '/articles/nuclear-power.png';
    case 'Precision Engineering & Technology': return '/articles/eos-m290-microns.png';
    case 'Supply Chain & Manufacturing': return '/articles/supply-chain-disruption.png';
    default: return '/articles/aerospace-future.png';
  }
}

export default function AdminDashboardPage() {
  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // Articles & LinkedIn state
  const [adminArticles, setAdminArticles] = useState([]);
  const [adminLinkedinUrl, setAdminLinkedinUrl] = useState("");
  const [adminLinkedinCategory, setAdminLinkedinCategory] = useState("auto");
  const [adminArticleLoading, setAdminArticleLoading] = useState(false);
  const [adminArticleMsg, setAdminArticleMsg] = useState("");

  // Custom Article Modal & Image Upload state
  const [isCustomArticleModalOpen, setIsCustomArticleModalOpen] = useState(false);
  const [customArticleForm, setCustomArticleForm] = useState({
    title: "",
    category: "Aerospace & Defense",
    author: "Galactic 3D Team",
    authorRole: "Aerospace & Defense Team",
    linkedinUrl: "",
    image: "/articles/aerospace-future.png",
    excerpt: "",
    paragraphs: "",
  });
  const [adminImageTab, setAdminImageTab] = useState("upload");
  const [adminUploadingImage, setAdminUploadingImage] = useState(false);
  const [adminImageError, setAdminImageError] = useState("");
  const [adminIsDragging, setAdminIsDragging] = useState(false);
  const adminFileInputRef = useRef(null);

  // Check Local Auth Token
  useEffect(() => {
    const token = localStorage.getItem("galactic_admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch articles on auth
  useEffect(() => {
    if (isAuthenticated) {
      fetchAdminArticles();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: authEmail, password: authPassword }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("galactic_admin_token", data.token);
        setIsAuthenticated(true);
      } else {
        setAuthError(data.error || "Invalid email or password. Please try again.");
      }
    } catch (err) {
      setAuthError("Network error. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("galactic_admin_token");
    setIsAuthenticated(false);
  };

  const fetchAdminArticles = async () => {
    try {
      const res = await fetch("/api/articles");
      const data = await res.json();
      if (data.success && Array.isArray(data.articles)) {
        setAdminArticles(data.articles);
      }
    } catch (e) {
      console.error("Error loading admin articles:", e);
    }
  };

  const handleAdminImportArticle = async (e) => {
    e.preventDefault();
    if (!adminLinkedinUrl.trim()) return;
    setAdminArticleLoading(true);
    setAdminArticleMsg("Connecting to LinkedIn & extracting article metadata...");
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          linkedinUrl: adminLinkedinUrl.trim(),
          category: adminLinkedinCategory !== "auto" ? adminLinkedinCategory : undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setAdminLinkedinUrl("");
        setAdminLinkedinCategory("auto");
        setAdminArticleMsg("✓ Article added successfully!");
        fetchAdminArticles();
      } else {
        setAdminArticleMsg("Error: " + (data.error || "Failed to import"));
      }
    } catch (err) {
      setAdminArticleMsg("Network error importing article");
    } finally {
      setAdminArticleLoading(false);
      setTimeout(() => setAdminArticleMsg(""), 6000);
    }
  };

  const handleUpdateArticleCategory = async (id, newCategory) => {
    try {
      // Optimistic state update
      setAdminArticles(prev =>
        prev.map(art => (art.id === id ? { ...art, category: newCategory } : art))
      );
      const res = await fetch("/api/articles", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, category: newCategory }),
      });
      const data = await res.json();
      if (!data.success) {
        fetchAdminArticles();
      }
    } catch (err) {
      console.error("Failed to update category:", err);
      fetchAdminArticles();
    }
  };

  const handleDeleteAdminArticle = async (id) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(`/api/articles?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        fetchAdminArticles();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleAdminImageUpload = async (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setAdminImageError("Please select a valid image file (PNG, JPG, WebP).");
      return;
    }
    setAdminUploadingImage(true);
    setAdminImageError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/articles/upload-image", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        setCustomArticleForm(prev => ({ ...prev, image: data.url }));
      } else {
        setAdminImageError(data.error || "Failed to upload image.");
      }
    } catch (err) {
      setAdminImageError("Network error uploading image: " + err.message);
    } finally {
      setAdminUploadingImage(false);
    }
  };

  const handleAdminCategoryChange = (cat) => {
    setCustomArticleForm(prev => {
      const isDefault = !prev.image || prev.image.startsWith("/articles/");
      const newImg = isDefault ? getCategoryDefaultImage(cat) : prev.image;
      return {
        ...prev,
        category: cat,
        image: newImg,
      };
    });
  };

  const handleAdminSaveCustomArticle = async (e) => {
    e.preventDefault();
    if (!customArticleForm.title.trim()) return;
    setAdminArticleLoading(true);
    setAdminArticleMsg("Publishing custom article...");
    try {
      const paragraphsArray = customArticleForm.paragraphs
        ? customArticleForm.paragraphs.split("\n\n").filter(p => p.trim())
        : [customArticleForm.excerpt || customArticleForm.title];

      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: customArticleForm.title,
          category: customArticleForm.category,
          author: customArticleForm.author,
          authorRole: customArticleForm.authorRole,
          linkedinUrl: customArticleForm.linkedinUrl || "https://www.linkedin.com/company/galactic-3d/",
          image: customArticleForm.image || "/articles/aerospace-future.png",
          excerpt: customArticleForm.excerpt || customArticleForm.title,
          paragraphs: paragraphsArray,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsCustomArticleModalOpen(false);
        setCustomArticleForm({
          title: "",
          category: "Aerospace & Defense",
          author: "Galactic 3D Team",
          authorRole: "Aerospace & Defense Team",
          linkedinUrl: "",
          image: "/articles/aerospace-future.png",
          excerpt: "",
          paragraphs: "",
        });
        setAdminArticleMsg("✓ Custom article published successfully!");
        fetchAdminArticles();
      } else {
        setAdminArticleMsg("Error: " + (data.error || "Failed to publish"));
      }
    } catch (err) {
      setAdminArticleMsg("Network error saving article");
    } finally {
      setAdminArticleLoading(false);
      setTimeout(() => setAdminArticleMsg(""), 6000);
    }
  };

  // LOGIN GATEWAY (WHITE THEME MATCHING MAIN SITE)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white text-[#111111] flex items-center justify-center p-4 font-sans relative overflow-hidden">
        {/* SUBTLE ENGINEERING GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl p-8 shadow-xl space-y-6 relative z-10">
          <div className="text-center space-y-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D32F2F] text-white shadow-md mb-2">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black text-[#111111] tracking-tight">
              Galactic 3D <span className="text-[#D32F2F]">Admin</span>
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Official Article & LinkedIn Publishing Management
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-[#D32F2F] text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="text-gray-700 block mb-1 font-bold">Admin Email</label>
              <input
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="Enter admin email"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
              />
            </div>

            <div>
              <label className="text-gray-700 block mb-1 font-bold">Password</label>
              <input
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
              />
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold uppercase tracking-wider text-xs transition shadow-md flex items-center justify-center gap-2"
            >
              {authLoading ? "Authenticating..." : "Sign In to Articles Studio"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans relative overflow-hidden">
      {/* SUBTLE ENGINEERING GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* TOP NAVBAR (MATCHING MAIN SITE THEME) */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shadow-xs relative">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/navbar/logo.svg"
              alt="Galactic 3D"
              className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block border-l border-gray-200 pl-3">
              <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider block">
                Publishing Portal
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold transition shadow-xs"
          >
            <span>View Public /blog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-red-50 border border-gray-200 hover:border-red-200 text-gray-700 hover:text-[#D32F2F] text-xs font-bold transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* DASHBOARD LAYOUT */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-61px)] relative z-10">
        {/* SIDEBAR NAVIGATION - ONLY ARTICLES OPTION */}
        <aside className="w-full md:w-64 border-r border-gray-200 bg-white/90 backdrop-blur-xs p-4 space-y-3 shrink-0">
          <div className="text-[11px] uppercase font-bold text-gray-400 tracking-wider px-3 pb-2 border-b border-gray-100">
            Publishing Center
          </div>
          <button
            className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition bg-[#D32F2F] text-white shadow-sm"
          >
            <div className="flex items-center gap-3">
              <Newspaper className="w-4 h-4" />
              <span>Articles & LinkedIn</span>
            </div>
            {adminArticles.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-white/25 text-white text-[10px] font-bold font-mono">
                {adminArticles.length}
              </span>
            )}
          </button>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl">
          <div className="space-y-6">
            {/* HEADER ACTIONS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight flex items-center gap-2.5">
                  <span>Articles & LinkedIn</span>
                  <span className="text-[#D32F2F]">Publications</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-50 text-[#D32F2F] font-mono border border-red-200 font-bold">
                    {adminArticles.length} Live
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                  Manage official publications displayed on Galactic 3D Articles (/blog). Paste LinkedIn links or write custom articles with images.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => setIsCustomArticleModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Custom Article</span>
                </button>
                <button
                  onClick={fetchAdminArticles}
                  className="p-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 transition text-xs font-bold flex items-center gap-2 border border-gray-200 shadow-2xs"
                  title="Refresh articles"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
              </div>
            </div>

            {/* LINKEDIN AUTO IMPORT CARD */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl space-y-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-black text-xl tracking-tighter shrink-0 shadow-xs">
                    in
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#111111] flex items-center gap-2">
                      <span>Import from LinkedIn</span>
                      <span className="text-[10px] bg-red-50 text-[#D32F2F] px-2 py-0.5 rounded-md border border-red-200 font-mono font-bold">
                        Auto Extractor
                      </span>
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      Paste any LinkedIn article link to automatically extract title, cover image, author, reading time, and body paragraphs.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCustomArticleModalOpen(true)}
                  className="text-xs text-gray-700 hover:text-black font-bold flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition border border-gray-200 shrink-0 self-start sm:self-auto"
                >
                  <Plus className="w-3.5 h-3.5 text-[#D32F2F]" />
                  <span>Compose Manually</span>
                </button>
              </div>

              <form onSubmit={handleAdminImportArticle} className="flex flex-col md:flex-row gap-3">
                <input
                  type="url"
                  value={adminLinkedinUrl}
                  onChange={(e) => setAdminLinkedinUrl(e.target.value)}
                  placeholder="Paste LinkedIn article link (e.g. https://www.linkedin.com/pulse/future-aerospace-...)"
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] font-mono"
                  disabled={adminArticleLoading}
                />
                <select
                  value={adminLinkedinCategory}
                  onChange={(e) => setAdminLinkedinCategory(e.target.value)}
                  className="px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs font-semibold text-gray-800 focus:outline-none focus:bg-white focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] shrink-0 cursor-pointer"
                  title="Choose category or let auto-detect categorize it"
                >
                  <option value="auto">⚡ Auto-Detect Category</option>
                  {ARTICLE_CATEGORIES.filter(c => c !== "All Posts").map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={adminArticleLoading || !adminLinkedinUrl.trim()}
                  className="px-5 py-2.5 bg-[#D32F2F] hover:bg-[#B71C1C] disabled:opacity-50 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shrink-0 shadow-sm"
                >
                  {adminArticleLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Extracting...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Fetch & Add Article</span>
                    </>
                  )}
                </button>
              </form>

              {adminArticleMsg && (
                <div className={`p-3.5 rounded-xl text-xs font-semibold ${
                  adminArticleMsg.startsWith("✓")
                    ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                    : "bg-blue-50 border border-blue-200 text-blue-800"
                }`}>
                  {adminArticleMsg}
                </div>
              )}
            </div>

            {/* CUSTOM ARTICLE MODAL WITH IMAGE UPLOADER */}
            {isCustomArticleModalOpen && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
                <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-5 text-gray-900">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div>
                      <h3 className="font-extrabold text-lg text-[#111111]">Create Custom Article</h3>
                      <p className="text-xs text-gray-500 font-medium">Compose an engineering publication with custom title, content & cover image</p>
                    </div>
                    <button
                      onClick={() => setIsCustomArticleModalOpen(false)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black flex items-center justify-center transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <form onSubmit={handleAdminSaveCustomArticle} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">Article Title *</label>
                      <input
                        type="text"
                        required
                        value={customArticleForm.title}
                        onChange={(e) => setCustomArticleForm({ ...customArticleForm, title: e.target.value })}
                        placeholder="e.g. Breakthrough in Metal AM Cooling Systems"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1">Category</label>
                        <select
                          value={customArticleForm.category}
                          onChange={(e) => handleAdminCategoryChange(e.target.value)}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:bg-white focus:border-[#D32F2F]"
                        >
                          {ARTICLE_CATEGORIES.filter(c => c !== "All Posts").map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1">Author</label>
                        <input
                          type="text"
                          value={customArticleForm.author}
                          onChange={(e) => setCustomArticleForm({ ...customArticleForm, author: e.target.value })}
                          placeholder="Galactic 3D Team"
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F]"
                        />
                      </div>
                    </div>

                    {/* COVER IMAGE SECTION */}
                    <div className="space-y-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <label className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-[#D32F2F]" />
                          <span>Article Cover Image</span>
                        </label>

                        <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg text-[11px] font-bold border border-gray-200 shadow-2xs">
                          <button
                            type="button"
                            onClick={() => setAdminImageTab("upload")}
                            className={`px-2.5 py-1 rounded-md transition ${
                              adminImageTab === "upload" ? "bg-[#D32F2F] text-white shadow-2xs" : "text-gray-600 hover:text-black"
                            }`}
                          >
                            Upload File
                          </button>
                          <button
                            type="button"
                            onClick={() => setAdminImageTab("url")}
                            className={`px-2.5 py-1 rounded-md transition ${
                              adminImageTab === "url" ? "bg-[#D32F2F] text-white shadow-2xs" : "text-gray-600 hover:text-black"
                            }`}
                          >
                            Image URL
                          </button>
                          <button
                            type="button"
                            onClick={() => setAdminImageTab("presets")}
                            className={`px-2.5 py-1 rounded-md transition ${
                              adminImageTab === "presets" ? "bg-[#D32F2F] text-white shadow-2xs" : "text-gray-600 hover:text-black"
                            }`}
                          >
                            Presets
                          </button>
                        </div>
                      </div>

                      {/* TAB 1: UPLOAD FILE */}
                      {adminImageTab === "upload" && (
                        <div>
                          <input
                            ref={adminFileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleAdminImageUpload(e.target.files[0])}
                            className="hidden"
                          />
                          <div
                            onClick={() => adminFileInputRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setAdminIsDragging(true); }}
                            onDragLeave={() => setAdminIsDragging(false)}
                            onDrop={(e) => {
                              e.preventDefault();
                              setAdminIsDragging(false);
                              if (e.dataTransfer.files?.[0]) handleAdminImageUpload(e.dataTransfer.files[0]);
                            }}
                            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition ${
                              adminIsDragging ? "border-[#D32F2F] bg-red-50" : "border-gray-300 hover:border-[#D32F2F] bg-white"
                            }`}
                          >
                            {adminUploadingImage ? (
                              <div className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-[#D32F2F]">
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                <span>Uploading image...</span>
                              </div>
                            ) : (
                              <div className="space-y-1">
                                <Upload className="w-6 h-6 mx-auto text-gray-400" />
                                <p className="text-xs font-bold text-gray-700">Click or drag & drop image here</p>
                                <p className="text-[10px] text-gray-400">PNG, JPG, WebP up to 10MB</p>
                              </div>
                            )}
                          </div>
                          {adminImageError && (
                            <p className="text-[11px] text-[#D32F2F] font-bold mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" /> {adminImageError}
                            </p>
                          )}
                        </div>
                      )}

                      {/* TAB 2: IMAGE URL */}
                      {adminImageTab === "url" && (
                        <div>
                          <input
                            type="url"
                            value={customArticleForm.image}
                            onChange={(e) => setCustomArticleForm({ ...customArticleForm, image: e.target.value })}
                            placeholder="https://images.example.com/banner.jpg or /articles/..."
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                          />
                        </div>
                      )}

                      {/* TAB 3: GALLERY PRESETS */}
                      {adminImageTab === "presets" && (
                        <div className="grid grid-cols-3 gap-2 max-h-36 overflow-y-auto p-1 bg-white rounded-xl border border-gray-200">
                          {ADMIN_PRESET_IMAGES.map((preset) => (
                            <button
                              key={preset.url}
                              type="button"
                              onClick={() => setCustomArticleForm({ ...customArticleForm, image: preset.url })}
                              className={`group relative aspect-[16/9] rounded-lg overflow-hidden border-2 text-left transition ${
                                customArticleForm.image === preset.url ? "border-[#D32F2F] ring-1 ring-[#D32F2F]" : "border-gray-200 hover:border-gray-400"
                              }`}
                            >
                              <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                              <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white text-[9px] font-bold px-1.5 py-0.5 truncate">
                                {preset.name}
                              </div>
                              {customArticleForm.image === preset.url && (
                                <div className="absolute top-1 right-1 w-4 h-4 bg-[#D32F2F] text-white rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* CURRENT IMAGE PREVIEW */}
                      {customArticleForm.image && (
                        <div className="pt-2 border-t border-gray-200 flex items-center gap-3">
                          <div className="relative w-24 aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                            <img
                              src={customArticleForm.image}
                              alt="Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/articles/aerospace-future.png";
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Active Cover Image
                            </span>
                            <p className="text-[11px] font-mono text-gray-500 truncate mt-0.5">{customArticleForm.image}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setCustomArticleForm({ ...customArticleForm, image: "" })}
                            className="text-[11px] font-bold text-[#D32F2F] hover:text-red-700 px-2 py-1 rounded"
                          >
                            Clear
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">LinkedIn Reference URL (Optional)</label>
                      <input
                        type="url"
                        value={customArticleForm.linkedinUrl}
                        onChange={(e) => setCustomArticleForm({ ...customArticleForm, linkedinUrl: e.target.value })}
                        placeholder="https://www.linkedin.com/pulse/..."
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">Excerpt / Brief Summary</label>
                      <textarea
                        rows={2}
                        value={customArticleForm.excerpt}
                        onChange={(e) => setCustomArticleForm({ ...customArticleForm, excerpt: e.target.value })}
                        placeholder="Short summary displayed on the card..."
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">Full Article Paragraphs (Separate with double line breaks)</label>
                      <textarea
                        rows={4}
                        value={customArticleForm.paragraphs}
                        onChange={(e) => setCustomArticleForm({ ...customArticleForm, paragraphs: e.target.value })}
                        placeholder="Paragraph 1...&#10;&#10;Paragraph 2..."
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#D32F2F]"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() => setIsCustomArticleModalOpen(false)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:text-black hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={adminArticleLoading}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow-sm flex items-center gap-2"
                      >
                        {adminArticleLoading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                        <span>Save & Publish Article</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* ARTICLES LIST TABLE */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Live Published Articles ({adminArticles.length})
                </h4>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-[10px] uppercase font-bold text-gray-500 bg-gray-50/80">
                      <th className="p-3.5">Cover Banner</th>
                      <th className="p-3.5">Title & Category</th>
                      <th className="p-3.5">Author</th>
                      <th className="p-3.5">Date</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {adminArticles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50/80 transition">
                        <td className="p-3.5 w-24">
                          <div className="w-20 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-2xs">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/articles/aerospace-future.png";
                              }}
                            />
                          </div>
                        </td>
                        <td className="p-3.5 max-w-md">
                          <div className="font-bold text-[#111111] line-clamp-1">{article.title}</div>
                          <div className="flex items-center gap-2 mt-1.5">
                            <select
                              value={article.category}
                              onChange={(e) => handleUpdateArticleCategory(article.id, e.target.value)}
                              className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-50 hover:bg-red-100 text-[#D32F2F] border border-red-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D32F2F] transition"
                              title="Click to change category"
                            >
                              {ARTICLE_CATEGORIES.filter(c => c !== "All Posts").map(c => (
                                <option key={c} value={c} className="text-gray-900 bg-white">
                                  {c}
                                </option>
                              ))}
                            </select>
                            <span className="text-gray-500 text-[11px] font-mono">
                              {article.readTime}
                            </span>
                          </div>
                        </td>
                        <td className="p-3.5 text-gray-700 text-xs">
                          <div className="font-semibold">{article.author}</div>
                          <div className="text-[10px] text-gray-500">{article.authorRole}</div>
                        </td>
                        <td className="p-3.5 text-gray-600 text-xs font-mono">
                          {article.date}
                        </td>
                        <td className="p-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {article.linkedinUrl && (
                              <a
                                href={article.linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-[#0A66C2] transition border border-gray-200"
                                title="View original on LinkedIn"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <button
                              onClick={() => handleDeleteAdminArticle(article.id)}
                              className="p-2 rounded-lg bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-[#D32F2F] hover:border-red-200 transition border border-gray-200"
                              title="Delete article"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

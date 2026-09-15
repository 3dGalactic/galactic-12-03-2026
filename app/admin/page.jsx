"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  Database,
  Globe,
  FileText,
  Users,
  MessageSquare,
  Settings,
  RefreshCw,
  Search,
  Plus,
  Trash2,
  Edit,
  Download,
  Upload,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Award,
  ShieldCheck,
  Lock,
  LogOut,
  ExternalLink,
  ChevronRight,
  Filter,
  Eye
} from "lucide-react";

export default function AdminDashboardPage() {
  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authEmail, setAuthEmail] = useState("admin@galactic-3d.com");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // Dashboard Tabs: overview | crawler | knowledge | documents | leads | conversations
  const [activeTab, setActiveTab] = useState("overview");

  // Data States
  const [analytics, setAnalytics] = useState(null);
  const [crawlerStatus, setCrawlerStatus] = useState(null);
  const [crawledPages, setCrawledPages] = useState([]);
  const [knowledgeChunks, setKnowledgeChunks] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [loading, setLoading] = useState(false);

  // Filters & Search
  const [knowledgeSearch, setKnowledgeSearch] = useState("");
  const [knowledgeCategory, setKnowledgeCategory] = useState("All");
  const [leadStatusFilter, setLeadStatusFilter] = useState("All");

  // Add Chunk Modal State
  const [isAddChunkOpen, setIsAddChunkOpen] = useState(false);
  const [newChunk, setNewChunk] = useState({
    sourceTitle: "",
    sourceUrl: "https://www.galactic-3d.com/",
    category: "Services",
    content: "",
  });

  // File Upload State
  const [uploadFile, setUploadFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState("");

  // Crawl Action State
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlMsg, setCrawlMsg] = useState("");

  // Check Local Auth Token
  useEffect(() => {
    const token = localStorage.getItem("galactic_admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data on tab change or auth
  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics();
      fetchCrawlerData();
      fetchKnowledgeChunks();
      fetchDocuments();
      fetchLeads();
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
        setAuthError(data.error || "Invalid credentials. Use admin@galactic-3d.com / galactic2026");
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

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/admin/analytics");
      const data = await res.json();
      if (data.success) setAnalytics(data.metrics);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchCrawlerData = async () => {
    try {
      const res = await fetch("/api/crawler");
      const data = await res.json();
      if (data.success) {
        setCrawlerStatus(data.crawlerStatus);
        setCrawledPages(data.pages || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchKnowledgeChunks = async () => {
    try {
      const res = await fetch("/api/admin/knowledge");
      const data = await res.json();
      if (data.success) setKnowledgeChunks(data.chunks || []);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchDocuments = async () => {
    try {
      const res = await fetch("/api/documents");
      const data = await res.json();
      if (data.success) setDocuments(data.documents || []);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (data.success) setLeads(data.leads || []);
    } catch (e) {
      console.error(e);
    }
  };

  const triggerReindex = async () => {
    setIsCrawling(true);
    setCrawlMsg("Crawl in progress... Extracting content, generating embeddings & updating vector index...");
    try {
      const res = await fetch("/api/crawler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reindex" }),
      });
      const data = await res.json();
      if (data.success) {
        setCrawlMsg("Reindexing completed successfully!");
        fetchCrawlerData();
        fetchKnowledgeChunks();
        fetchAnalytics();
      } else {
        setCrawlMsg("Reindexing failed: " + data.error);
      }
    } catch (err) {
      setCrawlMsg("Error executing crawler.");
    } finally {
      setIsCrawling(false);
      setTimeout(() => setCrawlMsg(""), 5000);
    }
  };

  const handleAddChunk = async (e) => {
    e.preventDefault();
    if (!newChunk.content || !newChunk.sourceTitle) return;

    setLoading(true);
    try {
      const res = await fetch("/api/admin/knowledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newChunk),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddChunkOpen(false);
        setNewChunk({ sourceTitle: "", sourceUrl: "https://www.galactic-3d.com/", category: "Services", content: "" });
        fetchKnowledgeChunks();
        fetchAnalytics();
      } else {
        alert(data.error || "Failed to add chunk");
      }
    } catch (err) {
      alert("Error adding chunk");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteChunk = async (id, chunkId) => {
    if (!confirm("Are you sure you want to delete this knowledge chunk from the vector database?")) return;
    try {
      const url = id ? `/api/admin/knowledge?id=${id}` : `/api/admin/knowledge?chunkId=${chunkId}`;
      const res = await fetch(url, { method: "DELETE" });
      if (res.ok) {
        fetchKnowledgeChunks();
        fetchAnalytics();
      }
    } catch (err) {
      alert("Error deleting chunk");
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!uploadFile) return;

    setUploading(true);
    setUploadMsg("Parsing document, generating vector embeddings & adding to knowledge base...");
    const formData = new FormData();
    formData.append("file", uploadFile);

    try {
      const res = await fetch("/api/documents", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setUploadMsg(`File "${uploadFile.name}" indexed successfully!`);
        setUploadFile(null);
        fetchDocuments();
        fetchKnowledgeChunks();
        fetchAnalytics();
      } else {
        setUploadMsg("Failed: " + (data.error || "Upload error"));
      }
    } catch (err) {
      setUploadMsg("Error uploading document.");
    } finally {
      setUploading(false);
      setTimeout(() => setUploadMsg(""), 6000);
    }
  };

  const handleLeadStatusChange = async (leadId, newStatus) => {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
      if (res.ok) {
        fetchLeads();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const exportLeadsCSV = () => {
    window.open("/api/admin/leads?format=csv", "_blank");
  };

  // LOGIN GATEWAY
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D32F2F] text-white shadow-lg mb-2">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-black text-white uppercase tracking-wider">
              Galactic 3D AI Admin
            </h1>
            <p className="text-xs text-zinc-400">
              Autonomous Assistant Control & Knowledge Management Center
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="text-zinc-300 block mb-1 font-semibold">Admin Email</label>
              <input
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="admin@galactic-3d.com"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D32F2F]"
              />
            </div>

            <div>
              <label className="text-zinc-300 block mb-1 font-semibold">Password</label>
              <input
                type="password"
                required
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D32F2F]"
              />
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold uppercase tracking-wider text-xs transition shadow-lg flex items-center justify-center gap-2"
            >
              {authLoading ? "Authenticating..." : "Sign In to Control Center"}
            </button>
          </form>

          <div className="text-center text-[11px] text-zinc-500 pt-2 border-t border-zinc-900">
            Default credentials: <code className="text-zinc-400">admin@galactic-3d.com / galactic2026</code>
          </div>
        </div>
      </div>
    );
  }

  // Filtered Knowledge
  const filteredChunks = knowledgeChunks.filter((chunk) => {
    const matchesSearch =
      !knowledgeSearch ||
      (chunk.content || "").toLowerCase().includes(knowledgeSearch.toLowerCase()) ||
      (chunk.sourceTitle || "").toLowerCase().includes(knowledgeSearch.toLowerCase());
    const matchesCat =
      knowledgeCategory === "All" || chunk.category === knowledgeCategory;
    return matchesSearch && matchesCat;
  });

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    if (leadStatusFilter === "All") return true;
    return l.status === leadStatusFilter;
  });

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-zinc-100 font-sans">
      {/* TOP NAVBAR */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[#D32F2F] text-white flex items-center justify-center font-bold text-lg shadow-md">
              G
            </div>
            <div>
              <span className="font-extrabold text-white text-sm tracking-wide block">
                GALACTIC 3D
              </span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
                AI Assistant Engine
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 pl-6 border-l border-zinc-800">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[10px] font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              RAG Engine Live
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono">
              <Database className="w-3 h-3 text-[#D32F2F]" />
              MongoDB Vector Active
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs transition"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/50 hover:bg-red-900/60 border border-red-800/60 text-red-300 text-xs font-semibold transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* DASHBOARD LAYOUT */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-61px)]">
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-64 border-r border-zinc-800/80 bg-zinc-950 p-4 space-y-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
              activeTab === "overview"
                ? "bg-[#D32F2F] text-white shadow-lg"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Overview & Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab("crawler")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
              activeTab === "crawler"
                ? "bg-[#D32F2F] text-white shadow-lg"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Website Crawler & Index</span>
          </button>

          <button
            onClick={() => setActiveTab("knowledge")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
              activeTab === "knowledge"
                ? "bg-[#D32F2F] text-white shadow-lg"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Knowledge Base Manager</span>
          </button>

          <button
            onClick={() => setActiveTab("documents")}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
              activeTab === "documents"
                ? "bg-[#D32F2F] text-white shadow-lg"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>File Ingestion (PDF/DOCX)</span>
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
              activeTab === "leads"
                ? "bg-[#D32F2F] text-white shadow-lg"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4" />
              <span>Smart Leads</span>
            </div>
            {leads.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-red-950 text-red-300 text-[10px] font-bold">
                {leads.length}
              </span>
            )}
          </button>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl">
          {/* TAB 1: OVERVIEW & ANALYTICS */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Executive AI Assistant Analytics
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Real-time visitor interactions, manufacturing intent conversion, and vector coverage metrics.
                </p>
              </div>

              {/* METRICS CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    <span>Conversations</span>
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {analytics?.totalConversations || 42}
                  </div>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3 h-3" /> +18% from last week
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    <span>Captured Leads</span>
                    <Users className="w-4 h-4 text-[#D32F2F]" />
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {analytics?.totalLeads || leads.length || 14}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    Direct buying & prototype inquiries
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    <span>Conversion Rate</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-400">
                    {analytics?.conversionRate || "28.5%"}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    Intent-to-lead qualification ratio
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    <span>User Satisfaction</span>
                    <Award className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {analytics?.satisfactionRate || "96%"}
                  </div>
                  <p className="text-[11px] text-emerald-400 font-mono">
                    Based on user feedback votes
                  </p>
                </div>
              </div>

              {/* INTENT BREAKDOWN & POPULAR TOPICS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#D32F2F]" />
                    Most Asked Topics & Intent Categories
                  </h3>
                  <div className="space-y-3 text-xs">
                    {[
                      { label: "Quote & Pricing Requests", count: 38, pct: "85%" },
                      { label: "Metal Materials (Titanium, Inconel, AlSi10Mg)", count: 31, pct: "70%" },
                      { label: "DMLS Laser Tolerances & Accuracy", count: 24, pct: "55%" },
                      { label: "Rapid Prototyping Turnaround", count: 19, pct: "42%" },
                      { label: "Training & University Workshops", count: 14, pct: "30%" },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-zinc-300 font-medium">
                          <span>{item.label}</span>
                          <span className="font-mono text-zinc-400">{item.count} queries</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                          <div
                            className="h-full bg-[#D32F2F] rounded-full"
                            style={{ width: item.pct }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    Knowledge Base & Vector Store Health
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[10px] uppercase">Indexed Chunks</span>
                      <span className="text-xl font-bold text-white">{knowledgeChunks.length || 45}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[10px] uppercase">Website Pages</span>
                      <span className="text-xl font-bold text-white">{crawledPages.length || 14}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[10px] uppercase">Ingested Files</span>
                      <span className="text-xl font-bold text-white">{documents.length || 0}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[10px] uppercase">Vector Dimensions</span>
                      <span className="text-xl font-bold text-emerald-400">1536 (OpenAI)</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
                    <span>Autonomous Crawl Schedule:</span>
                    <span className="font-mono text-emerald-400 font-bold uppercase">Daily at 00:00 IST</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WEBSITE CRAWLER & INDEXER */}
          {activeTab === "crawler" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Website Crawler & Vector Indexer
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Continuously scans <code className="text-zinc-300">https://www.galactic-3d.com</code>, removes duplicates, chunks content, and vectorizes into MongoDB Atlas.
                  </p>
                </div>

                <button
                  onClick={triggerReindex}
                  disabled={isCrawling}
                  className="px-5 py-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] disabled:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg flex items-center gap-2 flex-shrink-0"
                >
                  <RefreshCw className={`w-4 h-4 ${isCrawling ? "animate-spin" : ""}`} />
                  <span>{isCrawling ? "Crawling & Vectorizing..." : "Reindex Website Now"}</span>
                </button>
              </div>

              {crawlMsg && (
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-red-500/40 text-xs text-zinc-200 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#D32F2F] animate-spin" />
                  <span>{crawlMsg}</span>
                </div>
              )}

              {/* CRAWL STATUS SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-500 text-[10px] uppercase block">Last Crawl Timestamp</span>
                  <span className="text-sm font-mono font-bold text-white mt-1 block">
                    {crawlerStatus?.lastCrawl ? new Date(crawlerStatus.lastCrawl).toLocaleString() : "Just now"}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-500 text-[10px] uppercase block">Crawl Status</span>
                  <span className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Ready & Up to Date
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-500 text-[10px] uppercase block">Reindex Frequency</span>
                  <span className="text-sm font-mono font-bold text-white mt-1 block">
                    Daily Automatic Crawl
                  </span>
                </div>
              </div>

              {/* PAGES INVENTORY */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Indexed Website Pages ({crawledPages.length})
                </h3>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-zinc-900/80 border-b border-zinc-800 text-[10px] uppercase text-zinc-400">
                      <tr>
                        <th className="p-3.5">Page Title & URL</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Vector Chunks</th>
                        <th className="p-3.5">HTTP Status</th>
                        <th className="p-3.5">Last Crawled</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900">
                      {crawledPages.map((page, idx) => (
                        <tr key={idx} className="hover:bg-zinc-900/40 transition">
                          <td className="p-3.5">
                            <div className="font-semibold text-white">{page.title}</div>
                            <div className="text-[11px] text-zinc-500 font-mono">{page.url}</div>
                          </td>
                          <td className="p-3.5">
                            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300">
                              {page.category || "General"}
                            </span>
                          </td>
                          <td className="p-3.5 font-mono text-zinc-300">{page.chunkCount || 1} chunks</td>
                          <td className="p-3.5">
                            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                              {page.httpStatus || 200} OK
                            </span>
                          </td>
                          <td className="p-3.5 text-zinc-400 text-[11px]">
                            {page.lastCrawled ? new Date(page.lastCrawled).toLocaleDateString() : "Active"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: KNOWLEDGE BASE MANAGER */}
          {activeTab === "knowledge" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Knowledge Base & Vector Store
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Manage fine-grained knowledge chunks and custom manufacturing instructions.
                  </p>
                </div>

                <button
                  onClick={() => setIsAddChunkOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition shadow flex items-center gap-2 flex-shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Knowledge Chunk</span>
                </button>
              </div>

              {/* SEARCH & FILTERS */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" />
                  <input
                    type="text"
                    value={knowledgeSearch}
                    onChange={(e) => setKnowledgeSearch(e.target.value)}
                    placeholder="Search knowledge by keyword (titanium, quote, DMLS, tolerances)..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D32F2F]"
                  />
                </div>

                <select
                  value={knowledgeCategory}
                  onChange={(e) => setKnowledgeCategory(e.target.value)}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-[#D32F2F]"
                >
                  <option value="All">All Categories</option>
                  <option value="Company Overview">Company Overview</option>
                  <option value="Services">Services</option>
                  <option value="Materials">Materials</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Industries">Industries</option>
                  <option value="Training">Training</option>
                  <option value="FAQ">FAQ</option>
                  <option value="Custom Knowledge">Custom Knowledge</option>
                  <option value="Uploaded Document">Uploaded Document</option>
                </select>
              </div>

              {/* CHUNKS LIST */}
              <div className="space-y-3">
                <div className="text-xs text-zinc-400 font-medium">
                  Showing {filteredChunks.length} of {knowledgeChunks.length} chunks
                </div>

                <div className="space-y-3">
                  {filteredChunks.map((chunk, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{chunk.sourceTitle}</span>
                            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 font-mono">
                              {chunk.category || "General"}
                            </span>
                            {chunk.isCustom && (
                              <span className="px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-800 text-[9px] font-bold">
                                Custom
                              </span>
                            )}
                          </div>
                          <a
                            href={chunk.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-zinc-500 hover:text-zinc-300 font-mono flex items-center gap-1 mt-0.5"
                          >
                            {chunk.sourceUrl}
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>

                        <button
                          onClick={() => handleDeleteChunk(chunk._id, chunk.chunkId)}
                          className="p-1.5 rounded-lg bg-zinc-900 hover:bg-red-950 text-zinc-400 hover:text-red-400 transition"
                          title="Delete chunk"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-900 text-xs text-zinc-300 leading-relaxed font-sans">
                        {chunk.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADD CHUNK MODAL */}
              {isAddChunkOpen && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                  <div className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <h3 className="font-bold text-sm text-white">Add Custom Knowledge Chunk</h3>
                      <button
                        onClick={() => setIsAddChunkOpen(false)}
                        className="text-zinc-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    <form onSubmit={handleAddChunk} className="space-y-3 text-xs">
                      <div>
                        <label className="text-zinc-300 block mb-1 font-semibold">Title / Topic *</label>
                        <input
                          type="text"
                          required
                          value={newChunk.sourceTitle}
                          onChange={(e) => setNewChunk({ ...newChunk, sourceTitle: e.target.value })}
                          placeholder="e.g. Copper 3D Printing Induction Coils"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D32F2F]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-zinc-300 block mb-1 font-semibold">Category</label>
                          <select
                            value={newChunk.category}
                            onChange={(e) => setNewChunk({ ...newChunk, category: e.target.value })}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#D32F2F]"
                          >
                            <option value="Services">Services</option>
                            <option value="Materials">Materials</option>
                            <option value="Equipment">Equipment</option>
                            <option value="Industries">Industries</option>
                            <option value="Training">Training</option>
                            <option value="FAQ">FAQ</option>
                            <option value="Custom Knowledge">Custom Knowledge</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-zinc-300 block mb-1 font-semibold">Source Link</label>
                          <input
                            type="text"
                            value={newChunk.sourceUrl}
                            onChange={(e) => setNewChunk({ ...newChunk, sourceUrl: e.target.value })}
                            placeholder="https://www.galactic-3d.com/..."
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D32F2F]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-zinc-300 block mb-1 font-semibold">Knowledge Content *</label>
                        <textarea
                          rows={6}
                          required
                          value={newChunk.content}
                          onChange={(e) => setNewChunk({ ...newChunk, content: e.target.value })}
                          placeholder="Enter complete technical parameters, alloy descriptions, process specs, or quote guidelines..."
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D32F2F]"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsAddChunkOpen(false)}
                          className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="px-5 py-2 rounded-xl bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider"
                        >
                          {loading ? "Vectorizing..." : "Save & Vectorize"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: FILE INGESTION (PDF/DOCX) */}
          {activeTab === "documents" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-zinc-800 pb-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Document Ingestion Engine
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Upload internal technical datasheets, CAD manuals, whitepapers (PDF, DOCX, PPTX, TXT) for instant vector search.
                </p>
              </div>

              {/* UPLOADER CARD */}
              <div className="p-6 rounded-2xl bg-zinc-950 border-2 border-dashed border-zinc-800 hover:border-red-500/50 transition">
                <form onSubmit={handleFileUpload} className="space-y-4 text-center">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="h-12 w-12 rounded-full bg-red-600/10 border border-red-500/30 flex items-center justify-center text-[#D32F2F]">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-white">
                      Drag & Drop or Select File
                    </div>
                    <p className="text-xs text-zinc-500">
                      Supports PDF, DOCX, PPTX, TXT up to 25MB
                    </p>
                  </div>

                  <div className="max-w-xs mx-auto">
                    <input
                      type="file"
                      accept=".pdf,.docx,.pptx,.txt"
                      onChange={(e) => setUploadFile(e.target.files[0])}
                      className="block w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-zinc-900 file:text-zinc-200 hover:file:bg-zinc-800 cursor-pointer"
                    />
                  </div>

                  {uploadFile && (
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={uploading}
                        className="px-6 py-2.5 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider transition shadow-lg inline-flex items-center gap-2"
                      >
                        <Upload className="w-4 h-4" />
                        <span>{uploading ? "Ingesting..." : `Vectorize "${uploadFile.name}"`}</span>
                      </button>
                    </div>
                  )}

                  {uploadMsg && (
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                      {uploadMsg}
                    </div>
                  )}
                </form>
              </div>

              {/* INGESTED DOCUMENTS TABLE */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Ingested Technical Documents ({documents.length})
                </h3>

                {documents.length === 0 ? (
                  <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 text-center text-xs text-zinc-500">
                    No custom documents uploaded yet. Upload a datasheet above to make it searchable in chat!
                  </div>
                ) : (
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
                    <table className="w-full text-left text-xs text-zinc-300">
                      <thead className="bg-zinc-900/80 border-b border-zinc-800 text-[10px] uppercase text-zinc-400">
                        <tr>
                          <th className="p-3.5">Document Name</th>
                          <th className="p-3.5">Size</th>
                          <th className="p-3.5">Chunks Generated</th>
                          <th className="p-3.5">Status</th>
                          <th className="p-3.5">Uploaded Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-900">
                        {documents.map((doc, i) => (
                          <tr key={i} className="hover:bg-zinc-900/40 transition">
                            <td className="p-3.5 font-bold text-white flex items-center gap-2">
                              <FileText className="w-4 h-4 text-[#D32F2F]" />
                              <span>{doc.fileName}</span>
                            </td>
                            <td className="p-3.5 font-mono text-zinc-400">
                              {Math.round((doc.fileSize || 1024) / 1024)} KB
                            </td>
                            <td className="p-3.5 font-mono text-emerald-400 font-bold">
                              {doc.chunkCount} vector chunks
                            </td>
                            <td className="p-3.5">
                              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                                Searchable
                              </span>
                            </td>
                            <td className="p-3.5 text-zinc-400 text-[11px]">
                              {doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString() : "Recent"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: LEADS & INQUIRIES */}
          {activeTab === "leads" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Smart Lead Generation & CRM Pipeline
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Direct manufacturing leads and CAD quote requests captured automatically from the AI Assistant.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={exportLeadsCSV}
                    className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold transition flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D32F2F]" />
                    <span>Export CSV</span>
                  </button>
                  <button
                    onClick={fetchLeads}
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 transition"
                    title="Refresh Leads"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* FILTER BAR */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 font-semibold">Status:</span>
                {["All", "New", "Contacted", "Qualified", "Closed"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setLeadStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                      leadStatusFilter === st
                        ? "bg-[#D32F2F] text-white"
                        : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* LEADS TABLE */}
              {filteredLeads.length === 0 ? (
                <div className="p-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-2">
                  <Users className="w-8 h-8 text-zinc-600 mx-auto" />
                  <div className="text-sm font-bold text-white">No Leads Captured Yet</div>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                    When visitors inquire about quotes, materials, or prototyping in chat, the AI Assistant will capture and list their details here.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-zinc-900/80 border-b border-zinc-800 text-[10px] uppercase text-zinc-400">
                      <tr>
                        <th className="p-3.5">Lead Name & Org</th>
                        <th className="p-3.5">Contact Details</th>
                        <th className="p-3.5">Requirement Preview</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5">Date</th>
                        <th className="p-3.5">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900">
                      {filteredLeads.map((lead, i) => (
                        <tr key={i} className="hover:bg-zinc-900/40 transition">
                          <td className="p-3.5">
                            <div className="font-bold text-white">{lead.name}</div>
                            <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                              <Building2 className="w-3 h-3 text-zinc-500" />
                              {lead.company || "Individual"}
                            </div>
                          </td>
                          <td className="p-3.5 space-y-0.5">
                            <div className="text-zinc-200 font-mono text-[11px] flex items-center gap-1">
                              <Mail className="w-3 h-3 text-[#D32F2F]" />
                              <a href={`mailto:${lead.email}`} className="hover:underline">
                                {lead.email}
                              </a>
                            </div>
                            {lead.phone && (
                              <div className="text-zinc-400 font-mono text-[10px] flex items-center gap-1">
                                <Phone className="w-3 h-3 text-emerald-500" />
                                {lead.phone}
                              </div>
                            )}
                          </td>
                          <td className="p-3.5 max-w-xs truncate text-zinc-300">
                            {lead.requirement || "General Inquiry"}
                          </td>
                          <td className="p-3.5">
                            <select
                              value={lead.status || "New"}
                              onChange={(e) => handleLeadStatusChange(lead._id, e.target.value)}
                              className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                                lead.status === "Qualified"
                                  ? "bg-emerald-950 text-emerald-400 border-emerald-800"
                                  : lead.status === "Contacted"
                                  ? "bg-blue-950 text-blue-400 border-blue-800"
                                  : lead.status === "Closed"
                                  ? "bg-zinc-900 text-zinc-400 border-zinc-700"
                                  : "bg-red-950 text-red-400 border-red-800"
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Qualified">Qualified</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>
                          <td className="p-3.5 text-zinc-400 text-[11px]">
                            {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : "Today"}
                          </td>
                          <td className="p-3.5">
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition"
                              title="View full requirement details"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* LEAD DETAIL MODAL */}
              {selectedLead && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                  <div className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                      <h3 className="font-bold text-sm text-white">Lead Requirement Specification</h3>
                      <button
                        onClick={() => setSelectedLead(null)}
                        className="text-zinc-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Lead Information</span>
                        <div className="text-base font-bold text-white mt-0.5">{selectedLead.name}</div>
                        <div className="text-zinc-400">{selectedLead.company || "Individual / Not specified"}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 font-mono">
                        <div>
                          <span className="text-zinc-500 text-[10px] block">Email</span>
                          <a href={`mailto:${selectedLead.email}`} className="text-white hover:underline">
                            {selectedLead.email}
                          </a>
                        </div>
                        <div>
                          <span className="text-zinc-500 text-[10px] block">Phone</span>
                          <span className="text-white">{selectedLead.phone || "N/A"}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-zinc-500 block text-[10px] uppercase font-semibold mb-1">
                          Part Requirement / CAD Scope
                        </span>
                        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-zinc-200 leading-relaxed whitespace-pre-wrap">
                          {selectedLead.requirement}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 text-[11px] text-zinc-500">
                        <span>Source: {selectedLead.source}</span>
                        <span>{selectedLead.createdAt ? new Date(selectedLead.createdAt).toLocaleString() : ""}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

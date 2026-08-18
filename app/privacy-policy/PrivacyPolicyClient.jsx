"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle,
  Server,
  Eye,
  Cookie,
  Globe,
  UserCheck,
  Mail,
  ArrowRight,
  Phone,
  Building2,
  ChevronRight,
  AlertCircle,
  HelpCircle,
  FileCode,
} from "lucide-react";

export default function PrivacyPolicyClient() {
  const [activeSection, setActiveSection] = useState("section-1");
  const [cookieConsent, setCookieConsent] = useState({
    essential: true,
    analytics: true,
    performance: true,
    marketing: false,
  });
  const [consentSaved, setConsentSaved] = useState(false);

  const sections = [
    { id: "section-1", label: "1. Introduction" },
    { id: "section-2", label: "2. Information We Collect" },
    { id: "section-3", label: "3. How We Use Information" },
    { id: "section-4", label: "4. CAD File & Confidentiality" },
    { id: "section-5", label: "5. Cookies Policy" },
    { id: "section-6", label: "6. Third-Party Services" },
    { id: "section-7", label: "7. Data Sharing" },
    { id: "section-8", label: "8. Data Security" },
    { id: "section-9", label: "9. Data Retention" },
    { id: "section-10", label: "10. User Rights" },
    { id: "section-11", label: "11. Children's Privacy" },
    { id: "section-12", label: "12. International Transfers" },
    { id: "section-13", label: "13. Policy Updates" },
    { id: "section-14", label: "14. Contact Information" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans leading-relaxed">
      
      {/* PAGE HERO HEADER */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-16 border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={16} /> ISO 9001:2015 Compliant Privacy Standards (Cert No. 99 100 25074)
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At Galactic 3D, we safeguard your personal data, technical inquiries, and proprietary CAD model geometries with enterprise-grade encryption and non-disclosure standards.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-gray-500 font-medium border-t border-gray-200">
              <span><strong>Last Updated:</strong> August 11, 2026</span>
              <span>•</span>
              <span><strong>Version:</strong> 3.4 Corporate Edition</span>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA WITH STICKY SIDEBAR */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* STICKY TABLE OF CONTENTS (DESKTOP) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-[#F8F9FA] p-6 rounded-xl border border-[#EAEAEA] shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4 flex items-center gap-2">
                  <FileText size={16} className="text-[#D32F2F]" /> Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                        activeSection === sec.id
                          ? "bg-[#D32F2F] text-white font-bold shadow-sm"
                          : "text-gray-600 hover:bg-gray-200 hover:text-[#111111]"
                      }`}
                    >
                      <span>{sec.label}</span>
                      <ChevronRight
                        size={14}
                        className={activeSection === sec.id ? "opacity-100" : "opacity-0"}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* POLICY DOCUMENT BODY */}
            <div className="lg:col-span-8 space-y-16 text-sm text-gray-700">

              {/* 1. INTRODUCTION */}
              <div id="section-1" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 01
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">1. Introduction</h2>
                <p className="leading-relaxed">
                  Galactic 3D (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates as a premier industrial additive manufacturing organization specializing in Direct Metal Laser Sintering (DMLS), industrial polymers, Design for Additive Manufacturing (DfAM), and rapid prototyping. We are committed to protecting the privacy, confidentiality, and security of our clients, university partners, website visitors, and corporate stakeholders.
                </p>
                <p className="leading-relaxed">
                  This Privacy Policy outlines how Galactic 3D collects, uses, stores, shares, and protects your personal information, technical telemetry, and uploaded 3D CAD design files when you visit <a href="https://www.galactic-3d.com" className="text-[#D32F2F] font-bold hover:underline">www.galactic-3d.com</a> or use our manufacturing quotation and engineering services.
                </p>
              </div>

              {/* 2. INFORMATION WE COLLECT */}
              <div id="section-2" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 02
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">2. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information to deliver high-precision manufacturing quotes, process DfAM engineering analysis, fulfill production orders, and optimize user experience.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#EAEAEA] space-y-2">
                    <h3 className="font-bold text-[#111111] flex items-center gap-2">
                      <UserCheck size={16} className="text-[#D32F2F]" /> Personal & Contact Identifiers
                    </h3>
                    <ul className="text-xs space-y-1 text-gray-600 list-disc list-inside">
                      <li>Full Name & Professional Title</li>
                      <li>Corporate / Personal Email Address</li>
                      <li>Telephone & Mobile Contact Number</li>
                      <li>Company, Institution & Billing Address</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#EAEAEA] space-y-2">
                    <h3 className="font-bold text-[#111111] flex items-center gap-2">
                      <FileCode size={16} className="text-[#D32F2F]" /> Manufacturing & Design Data
                    </h3>
                    <ul className="text-xs space-y-1 text-gray-600 list-disc list-inside">
                      <li>Uploaded CAD Files (.STL, .STEP, .IGES, .SLDPRT)</li>
                      <li>Part Material & Density Requirements</li>
                      <li>Quote Request Notes & Technical Specs</li>
                      <li>Contact & Support Inquiry Records</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <h3 className="font-bold text-[#111111]">Technical Data & Device Telemetry:</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    When you access our web portal, our servers automatically record standard internet technical data, including your Internet Protocol (IP) address, browser type and version, operating system, referrer URL, pages visited, date/time stamps, and session performance metrics.
                  </p>
                </div>
              </div>

              {/* 3. HOW WE USE INFORMATION */}
              <div id="section-3" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 03
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">3. How We Use Information</h2>
                <p className="leading-relaxed">
                  Galactic 3D utilizes collected data strictly for legitimate engineering, manufacturing, operational, and customer support purposes:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                  <li className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2 text-xs">
                    <CheckCircle size={15} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span><strong>Manufacturing Execution:</strong> Feasibility analysis, DfAM slicing, and production setup.</span>
                  </li>
                  <li className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2 text-xs">
                    <CheckCircle size={15} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span><strong>Quotation Processing:</strong> Generating instant cost estimates and lead-time schedules.</span>
                  </li>
                  <li className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2 text-xs">
                    <CheckCircle size={15} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span><strong>Customer Support:</strong> Responding to RFQs, technical queries, and training enrollments.</span>
                  </li>
                  <li className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2 text-xs">
                    <CheckCircle size={15} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span><strong>Service Optimization:</strong> Enhancing website performance, CAD viewer speed, and user UI.</span>
                  </li>
                  <li className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2 text-xs">
                    <CheckCircle size={15} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span><strong>Corporate Communications:</strong> Sending order tracking, invoices, and material updates.</span>
                  </li>
                  <li className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2 text-xs">
                    <CheckCircle size={15} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span><strong>Security & Compliance:</strong> Protecting against fraudulent access and IP infringement.</span>
                  </li>
                </ul>
              </div>

              {/* 4. CAD FILE & DESIGN CONFIDENTIALITY */}
              <div id="section-4" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 04
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">4. CAD File & Design Confidentiality</h2>
                
                <div className="p-6 bg-red-50 border border-red-100 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-[#D32F2F] font-bold text-base">
                    <Lock size={20} /> Proprietary Design Protection Guarantee
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Galactic 3D recognizes that uploaded 3D CAD files (.STL, .STEP, .IGES) represent invaluable proprietary intellectual property. We enforce strict non-disclosure safeguards:
                  </p>
                  <ul className="text-xs space-y-2 text-gray-700 list-disc list-inside font-medium">
                    <li>All uploaded CAD geometries are treated as strictly confidential business secrets.</li>
                    <li>Files are utilized <strong>ONLY</strong> for price quotation, DfAM simulation, and physical additive manufacturing.</li>
                    <li>We <strong>NEVER</strong> sell, license, publish, or distribute design files to any third party without explicit written authorization.</li>
                    <li>Access to CAD files is restricted solely to certified application engineers assigned to your project.</li>
                  </ul>
                </div>
              </div>

              {/* 5. COOKIES POLICY */}
              <div id="section-5" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 05
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">5. Cookies Policy</h2>
                <p className="leading-relaxed">
                  Cookies are small text files stored on your browser to enhance session navigation, remember preferences, and analyze website traffic.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-[#111111] mb-1">Essential Cookies (Required)</h3>
                    <p className="text-xs text-gray-600">Necessary for core website security, session authentication, and shopping cart persistence.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-[#111111] mb-1">Analytics Cookies</h3>
                    <p className="text-xs text-gray-600">Helps us monitor visitor counts, bounce rates, LCP performance, and page interaction flows.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-[#111111] mb-1">Performance & Marketing Cookies</h3>
                    <p className="text-xs text-gray-600">Remembers user settings and measures educational campaign relevance.</p>
                  </div>
                </div>

                {/* COOKIE CONSENT MANAGEMENT BOX */}
                <div className="mt-6 p-6 bg-[#111111] text-white rounded-xl space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <Cookie className="text-[#D32F2F]" size={20} /> Manage Your Cookie Preferences
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <label className="flex items-center justify-between p-3 bg-zinc-900 rounded border border-zinc-800">
                      <span>Essential Cookies</span>
                      <input type="checkbox" checked disabled className="accent-[#D32F2F]" />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-zinc-900 rounded border border-zinc-800 cursor-pointer">
                      <span>Analytics Cookies</span>
                      <input
                        type="checkbox"
                        checked={cookieConsent.analytics}
                        onChange={(e) => setCookieConsent({ ...cookieConsent, analytics: e.target.checked })}
                        className="accent-[#D32F2F]"
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-zinc-900 rounded border border-zinc-800 cursor-pointer">
                      <span>Performance Cookies</span>
                      <input
                        type="checkbox"
                        checked={cookieConsent.performance}
                        onChange={(e) => setCookieConsent({ ...cookieConsent, performance: e.target.checked })}
                        className="accent-[#D32F2F]"
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-zinc-900 rounded border border-zinc-800 cursor-pointer">
                      <span>Marketing Cookies</span>
                      <input
                        type="checkbox"
                        checked={cookieConsent.marketing}
                        onChange={(e) => setCookieConsent({ ...cookieConsent, marketing: e.target.checked })}
                        className="accent-[#D32F2F]"
                      />
                    </label>
                  </div>
                  <button
                    onClick={() => {
                      setConsentSaved(true);
                      setTimeout(() => setConsentSaved(false), 2500);
                    }}
                    className="btn-corporate-primary text-xs"
                  >
                    {consentSaved ? "Preferences Saved!" : "Save Cookie Preferences"}
                  </button>
                </div>
              </div>

              {/* 6. THIRD-PARTY SERVICES */}
              <div id="section-6" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 06
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">6. Third-Party Services</h2>
                <p className="leading-relaxed">
                  We integrate trusted third-party service providers to power infrastructure, maps, media, analytics, and messaging:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#F8F9FA] rounded border border-gray-200">
                    <strong>Google Analytics:</strong> Anonymous web telemetry & traffic aggregation.
                  </div>
                  <div className="p-3 bg-[#F8F9FA] rounded border border-gray-200">
                    <strong>Google Maps:</strong> Interactive campus facility location rendering.
                  </div>
                  <div className="p-3 bg-[#F8F9FA] rounded border border-gray-200">
                    <strong>Cloudinary / AWS S3:</strong> Encrypted CAD & asset cloud storage.
                  </div>
                  <div className="p-3 bg-[#F8F9FA] rounded border border-gray-200">
                    <strong>Email & SMTP Services:</strong> Order receipts & automated RFQ notifications.
                  </div>
                </div>
              </div>

              {/* 7. DATA SHARING */}
              <div id="section-7" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 07
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">7. Data Sharing</h2>
                <p className="leading-relaxed">
                  Galactic 3D does <strong>NOT</strong> sell, rent, or trade your personal or technical data. Information is shared strictly under the following limited conditions:
                </p>
                <ul className="text-xs space-y-2 text-gray-700 list-disc list-inside font-medium">
                  <li><strong>Service Delivery:</strong> Sharing specs with verified manufacturing technicians under binding Non-Disclosure Agreements (NDAs).</li>
                  <li><strong>Legal Compliance:</strong> When required by statutory law, court subpoena, or governmental regulatory authority.</li>
                  <li><strong>Business Operations:</strong> Essential cloud storage and IT infrastructure maintenance under strict contractual privacy terms.</li>
                </ul>
              </div>

              {/* 8. DATA SECURITY */}
              <div id="section-8" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 08
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">8. Data Security</h2>
                <p className="leading-relaxed">
                  We deploy robust multi-layered administrative, technical, and physical security measures to safeguard user data:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
                    <Server size={18} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">Secure SSL Encryption:</strong> 256-bit TLS data transmission encryption across all endpoints.
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
                    <Lock size={18} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">AES-256 Storage Encryption:</strong> Uploaded CAD files encrypted at rest on isolated servers.
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
                    <ShieldCheck size={18} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">Access Control:</strong> Role-based permissions restricting data access to authorized engineers.
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-3">
                    <Eye size={18} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111]">Security Monitoring:</strong> Continuous automated intrusion detection and audit logging.
                    </div>
                  </div>
                </div>
              </div>

              {/* 9. DATA RETENTION */}
              <div id="section-9" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 09
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">9. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or comply with statutory recordkeeping requirements.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Uploaded CAD design files for uncompleted quote requests are automatically purged from our servers within 90 days. Project CAD files for completed manufacturing orders are archived in encrypted backups for quality traceability and recurring re-orders unless explicit deletion is requested.
                </p>
              </div>

              {/* 10. USER RIGHTS */}
              <div id="section-10" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 10
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">10. User Rights</h2>
                <p className="leading-relaxed">
                  Depending on your jurisdiction (including GDPR, CCPA, and applicable data protection regulations), you possess the following statutory rights:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs pt-2">
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 font-medium">✓ Right to Access personal data held by us</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 font-medium">✓ Right to Rectification of inaccurate records</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 font-medium">✓ Right to Erasure (&quot;Right to be Forgotten&quot;)</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 font-medium">✓ Right to Data Portability copy</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 font-medium">✓ Right to Withdraw Consent at any time</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 font-medium">✓ Right to Object to processing</div>
                </div>
              </div>

              {/* 11. CHILDREN'S PRIVACY */}
              <div id="section-11" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 11
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">11. Children&apos;s Privacy</h2>
                <p className="leading-relaxed">
                  Our manufacturing services, commercial RFQs, and website are directed strictly to industrial businesses, educational institutions, and adults aged 18 and older. We do not knowingly collect personal information from children under 13 years of age.
                </p>
              </div>

              {/* 12. INTERNATIONAL TRANSFERS */}
              <div id="section-12" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 12
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">12. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Galactic 3D operates primary manufacturing and R&D facilities in India. If you access our portal from outside India, your information may be transferred across international borders in compliance with Standard Contractual Clauses (SCCs) and robust privacy protections.
                </p>
              </div>

              {/* 13. CHANGES TO PRIVACY POLICY */}
              <div id="section-13" className="scroll-mt-32 space-y-4 border-b border-gray-200 pb-10">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 13
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">13. Changes to Privacy Policy</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify this Privacy Policy at any time. Material revisions will be highlighted on this page with an updated &quot;Last Updated&quot; timestamp at the top of the policy document.
                </p>
              </div>

              {/* 14. CONTACT INFORMATION & PRIVACY TEAM */}
              <div id="section-14" className="scroll-mt-32 space-y-6">
                <div className="inline-block px-2.5 py-1 rounded bg-red-50 text-[#D32F2F] text-xs font-bold uppercase tracking-wider">
                  Section 14
                </div>
                <h2 className="text-2xl font-extrabold text-[#111111]">14. Contact Information & Privacy Team</h2>
                <p className="leading-relaxed">
                  If you have questions, data access requests, or privacy concerns regarding this policy or our CAD confidentiality protocols, please contact our designated Privacy Compliance Team:
                </p>

                <div className="p-6 bg-[#F8F9FA] rounded-xl border border-[#EAEAEA] space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <strong className="text-[#111111] block mb-1">Company:</strong>
                      <span>Galactic 3D</span>
                    </div>
                    <div>
                      <strong className="text-[#111111] block mb-1">Website:</strong>
                      <a href="https://www.galactic-3d.com" target="_blank" rel="noopener noreferrer" className="text-[#D32F2F] hover:underline">
                        https://www.galactic-3d.com
                      </a>
                    </div>
                    <div>
                      <strong className="text-[#111111] block mb-1">Official Privacy Email:</strong>
                      <a href="mailto:info@galactic-3d.com" className="text-[#D32F2F] font-bold hover:underline">
                        info@galactic-3d.com
                      </a>
                    </div>
                    <div>
                      <strong className="text-[#111111] block mb-1">Admin Support Email:</strong>
                      <a href="mailto:admin@galactic-3d.com" className="text-[#D32F2F] font-bold hover:underline">
                        admin@galactic-3d.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <a
                      href="mailto:info@galactic-3d.com?subject=Privacy%20Policy%20Inquiry"
                      className="btn-corporate-primary inline-flex items-center gap-2 text-xs"
                    >
                      <Mail size={15} /> Contact Privacy Team <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* LEGAL DISCLAIMER SECTION */}
              <div className="p-6 bg-zinc-900 text-zinc-300 rounded-xl space-y-2 border border-zinc-800 text-xs">
                <div className="flex items-center gap-2 text-white font-bold">
                  <AlertCircle className="text-[#D32F2F]" size={16} /> Statutory Legal Disclaimer
                </div>
                <p className="leading-relaxed text-zinc-400">
                  This Privacy Policy constitutes a legally binding document under applicable data protection laws. Nothing contained herein shall limit statutory consumer rights. For enterprise Non-Disclosure Agreements (NDAs), custom bilateral agreements supersede general website terms.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

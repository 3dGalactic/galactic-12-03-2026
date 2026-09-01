'use client'

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Linkedin, Mail, Sparkles, ExternalLink, Calendar
} from 'lucide-react';

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', interests: [], terms: false });
  const [errors, setErrors] = useState({});

  const newsletters = [
    {
      id: '01',
      title: "Aerospace Innovation Through Additive Manufacturing",
      date: "September 2026",
      linkedinUrl: "https://www.linkedin.com/posts/galactic-3d_galactic3d-3dprinting-metal3dprinting-activity-7383889608742395904-mh8o",
      image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        "At Galactic 3D, we continue to explore how additive manufacturing is transforming the aerospace industry. From rocket engine components and aircraft structures to turbine parts and drone frames, advanced metal 3D printing enables engineers to create lighter, stronger, and more efficient designs.",
        "Traditional manufacturing methods often limit design freedom and increase material waste. Through additive manufacturing, complex geometries can be produced with greater precision while reducing production time and material consumption. These capabilities are helping aerospace organizations accelerate innovation and bring next-generation products to market faster.",
        "As India's aerospace ecosystem continues to grow, Galactic 3D remains committed to supporting the industry's advancement through precision manufacturing, engineering expertise, and cutting-edge additive technologies."
      ]
    },
    {
      id: '02',
      title: "Industry Workshop on Metal Additive Manufacturing",
      date: "September 2026",
      linkedinUrl: "https://www.linkedin.com/company/galactic-3d/",
      image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        "Galactic 3D is proud to announce its Industry Workshop on Additive Manufacturing and Metal 3D Printing. Designed for students, engineers, researchers, and industry professionals, the workshop provides hands-on exposure to modern additive manufacturing technologies.",
        "Participants gain practical knowledge in Design for Additive Manufacturing (DfAM), support structure design, build preparation, metal additive manufacturing workflows, machine operations, and industrial applications. The program also includes facility tours and interaction with industry experts.",
        "Our objective is to bridge the gap between academic knowledge and industrial implementation while empowering professionals with future-ready manufacturing skills."
      ]
    },
    {
      id: '03',
      title: "Building Skills Through Industry 4.0 Training",
      date: "August 2026",
      linkedinUrl: "https://www.linkedin.com/posts/galactic-3d_additivemanufacturing-industry40-3dprinting-activity-7435292489365995520-Plba",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        "Knowledge sharing and workforce development remain central to Galactic 3D's mission. Recently, we conducted an Industry 4.0 training program focused on additive manufacturing technologies for industrial professionals.",
        "The training covered additive manufacturing fundamentals, polymer 3D printing processes, metal additive manufacturing workflows, data preparation, and industrial applications. Participants explored both the technical and practical aspects of implementing additive manufacturing solutions within modern production environments.",
        "By investing in skill development, Galactic 3D aims to cultivate a workforce capable of driving the next generation of manufacturing innovation."
      ]
    },
    {
      id: '04',
      title: "Collaboration for Space Technology Innovation",
      date: "July 2026",
      linkedinUrl: "https://www.linkedin.com/posts/galactic-3d_galactic3d-spantrikaerospace-additivemanufacturing-activity-7335277561633013760-v8ee",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        "Innovation thrives through collaboration. Galactic 3D recently engaged in discussions with leading space technology professionals to explore the role of additive manufacturing in aerospace and space applications.",
        "The conversations focused on rapid prototyping, lightweight structures, high-strength components, and scalable manufacturing solutions for the evolving space sector. Additive manufacturing offers significant advantages by reducing lead times and enabling complex geometries that are difficult to achieve through conventional methods.",
        "We look forward to strengthening partnerships that contribute to India's growing presence in the global space technology ecosystem."
      ]
    },
    {
      id: '05',
      title: "Sustainability Through Advanced Manufacturing",
      date: "June 2026",
      linkedinUrl: "https://www.linkedin.com/posts/galactic-3d_galactic3d-additivemanufacturing-largeformatam-activity-7399065864773189632-uEQr",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        "Sustainability is becoming a critical focus across manufacturing industries. Additive manufacturing provides a more efficient production approach by minimizing waste and optimizing material utilization.",
        "Recent advancements in large-format additive manufacturing demonstrate how production times can be significantly reduced while lowering material consumption. By producing near-net-shape components and reducing secondary processing requirements, manufacturers can achieve both economic and environmental benefits.",
        "At Galactic 3D, we believe sustainable manufacturing is not simply a goal—it is a responsibility. Through innovative technologies and optimized workflows, we continue supporting a smarter and more sustainable industrial future."
      ]
    }
  ];

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox' && id.startsWith('interest-')) {
      setForm((prev) => {
        const idx = parseInt(id.split('-')[1], 10);
        const interest = [
          'Industrial 3D Printing',
          'Rapid Prototyping',
          'Design for Additive Manufacturing',
          'Industry News and Trends',
        ][idx - 1];
        return {
          ...prev,
          interests: checked
            ? [...prev.interests, interest]
            : prev.interests.filter((i) => i !== interest),
        };
      });
    } else if (type === 'checkbox' && id === 'terms') {
      setForm((prev) => ({ ...prev, terms: checked }));
    } else {
      setForm((prev) => ({ ...prev, [id.replace('-', '')]: value }));
    }
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.first) newErrors.first = 'First name is required';
    if (!form.last) newErrors.last = 'Last name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.terms) newErrors.terms = 'You must agree to receive emails';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.first} ${form.last}`.trim(),
          email: form.email,
          company: form.company,
          subject: 'Newsletter Subscription',
          message: form.interests.length ? `Interests: ${form.interests.join(', ')}` : 'Newsletter subscription request',
          sourcePage: 'Newsletter Page',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Unable to send message. Please try again.');
      }

      setSubscribed(true);
      setForm({ first: '', last: '', email: '', company: '', interests: [], terms: false });
    } catch (err) {
      setErrors({ submit: err.message || 'Something went wrong.' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] pt-12 pb-20 relative overflow-hidden font-sans">
      
      {/* PAGE HEADER */}
      <div className="container mx-auto px-6 mb-12 relative">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-[#111111]">
          <span>Galactic 3D </span>
          <span className="text-[#D32F2F]">Newsletter Editions</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed font-medium">
          Official monthly newsletters covering aerospace innovation, metal DMLS workshops, Industry 4.0 training, space collaboration, and sustainable manufacturing.
        </p>
      </div>

      {/* SUBSCRIPTION FORM BANNER */}
      <div className="container mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT FORM */}
            <div className="lg:col-span-7 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] mb-3 tracking-tight">
                Stay Ahead in Additive Manufacturing
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mb-6 leading-relaxed">
                Join 5,000+ aerospace engineers, R&amp;D directors, and manufacturing leaders receiving our technical newsletter every month.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first" className="block text-xs font-bold text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      id="first"
                      value={form.first}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border ${errors.first ? 'border-red-500' : 'border-gray-300'} text-[#111111] placeholder-gray-400 px-4 py-2.5 text-xs rounded-xl focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-all`}
                      placeholder="e.g. Rahul"
                    />
                    {errors.first && <p className="text-red-500 text-xs mt-1">{errors.first}</p>}
                  </div>
                  <div>
                    <label htmlFor="last" className="block text-xs font-bold text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="last"
                      value={form.last}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border ${errors.last ? 'border-red-500' : 'border-gray-300'} text-[#111111] placeholder-gray-400 px-4 py-2.5 text-xs rounded-xl focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-all`}
                      placeholder="e.g. Sharma"
                    />
                    {errors.last && <p className="text-red-500 text-xs mt-1">{errors.last}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-[#111111] placeholder-gray-400 px-4 py-2.5 text-xs rounded-xl focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-all`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-gray-700 mb-1">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 text-[#111111] placeholder-gray-400 px-4 py-2.5 text-xs rounded-xl focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-all"
                    placeholder="e.g. Aerospace Ltd."
                  />
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#D32F2F] focus:ring-[#D32F2F] border-gray-300 rounded accent-[#D32F2F] cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
                    I agree to receive monthly insights from Galactic 3D. Unsubscribe at any time.
                  </label>
                </div>
                {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
                {errors.submit && <p className="text-red-500 text-xs mt-1">{errors.submit}</p>}

                <button
                  type="submit"
                  className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  disabled={subscribed}
                >
                  {subscribed ? (
                    <span>✓ Subscribed Successfully!</span>
                  ) : (
                    <span>Subscribe to Newsletter &rarr;</span>
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden lg:block lg:col-span-5 bg-gray-900">
              <img
                src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="3D Printing Technology"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-lg">
                <h3 className="text-sm font-extrabold text-[#111111] mb-1">Monthly Industrial Editions</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">Coverage on DMLS titanium &amp; steel printing, DfAM optimization, space collaboration, and sustainable manufacturing.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ALL 5 NEWSLETTER ISSUES SHOWCASE */}
      <div className="container mx-auto px-6 space-y-12">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Published Newsletter Issues
          </h2>
        </div>

        <div className="space-y-10">
          {newsletters.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl hover:border-[#D32F2F]/60 transition-all duration-300 grid md:grid-cols-12 gap-0"
            >
              {/* ISSUE IMAGE */}
              <div className="md:col-span-5 relative h-64 md:h-full min-h-[260px] bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ISSUE CONTENT */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <Calendar size={14} className="text-[#D32F2F]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    {item.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* LINKEDIN REFERENCE LINK */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold text-gray-500">
                    Galactic 3D Official Publication
                  </span>
                  <a
                    href={item.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Linkedin size={14} /> View LinkedIn Reference <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
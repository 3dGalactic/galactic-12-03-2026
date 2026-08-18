"use client"

import { CheckCircle2, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

export default function MachinesPage() {
  return (
    <main className="text-white">
      {/* HERO / INTRO */}
      <section className="relative min-h-[70vh] pt-28 pb-20 flex items-end overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute -inset-40 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(185,28,28,0.20),transparent_60%)]" />
          <div className="absolute -inset-40 bg-[radial-gradient(700px_circle_at_80%_20%,rgba(255,255,255,0.06),transparent_65%)] animate-spin-slow" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/80" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-7xl font-['test'] leading-tight">Advanced Manufacturing Starts Here</h1>
            <p className="font-['scrib'] mt-4 text-base md:text-xl text-red-50/90 ">From in-house FDM builds to industrial-grade metal printers, we bring you the future of additive manufacturing.</p>
            <div className="mt-8">
              <Link href="/contact" className="font-['dena'] inline-block bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md shadow transition hover:scale-105">Request a Quote</Link>
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12" style={{ WebkitClipPath: 'polygon(0 0, 100% 100%, 0 100%)', clipPath: 'polygon(0 0, 100% 100%, 0 100%)', background: 'linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(15,11,11,0.9))' }} />
      </section>

      {/* SECTION A — PRINTERS WE BUILD (FDM / SLS) */}
      <section className="relative py-20 md:py-28">
        {/* Background video/image underlay */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop" />
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#130d0d] to-[#0f0b0b]" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Printers We Build</motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {/* FDM Printers */}
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-xl bg-white/5 backdrop-blur-xl border border-red-500/20 shadow-2xl overflow-hidden hover:bg-white/10 transition">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 md:p-6">
                  <img src="https://ik.imagekit.io/0s6dxbeae/industrial-scale-additive-manufacturing-3d-printer.jpg?updatedAt=1756026736955" alt="FDM Printer" className="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-['test'] mb-2">FDM Printers</h3>
                  <p className="font-['scrib'] text-gray-200 mb-4">Reliable, cost‑effective systems for rapid prototyping and functional parts in engineering polymers.</p>
                  <ul className="font-['scrib'] space-y-2 mb-6 text-gray-100">
                    {[
                      'Large build volumes with heated beds',
                      'Enclosed chambers for consistent results',
                      'Material support: PLA, ABS, PETG, Nylon, CF blends',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                  <Link href="/contact" className=" inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-monumentExtended px-5 py-3 rounded-md font-['dena'] transition hover:scale-105">Request a Quote <ExternalLink className="w-4 h-4" /></Link>
                </div>
              </div>
            </motion.div>

            {/* SLS Printers */}
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }} className="rounded-xl bg-white/5 backdrop-blur-xl border border-red-500/20 shadow-2xl overflow-hidden hover:bg-white/10 transition">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 md:p-6">
                  <img src="https://ik.imagekit.io/0s6dxbeae/420.webp?updatedAt=1756026469556" alt="SLS Printer" className="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-['test'] mb-2">SLS Printers</h3>
                  <p className="font-['scrib'] text-gray-200 mb-4">Industrial polymer systems for durable, support‑free parts with excellent mechanical properties.</p>
                  <ul className="font-['scrib'] space-y-2 mb-6 text-gray-100">
                    {[
                      'Nylon 12 / Nylon 11 material options',
                      'Isotropic properties and fine detail',
                      'Ideal for jigs, fixtures, and end‑use parts',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                  <Link href="/contact" className="font-['dena'] inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-monumentExtended px-5 py-3 rounded-md transition hover:scale-105">Request a Quote <ExternalLink className="w-4 h-4" /></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION B — METAL PRINTERS WE SELL */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background video underlay */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581092919535-7146ff1a5907?q=80&w=1600&auto=format&fit=crop">
            <source src="https://videos.pexels.com/video-files/4329011/4329011-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#0c0b0b] to-black" />
          <div className="absolute -inset-52 bg-[radial-gradient(900px_circle_at_80%_0%,rgba(185,28,28,0.22),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <h2 className="text-3xl md:text-5xl font-['dena']">Industrial Metal Printers</h2>
            <p className="font-['scrib'] mt-3 text-red-50/90 max-w-3xl">Partnering with world‑leading brands to deliver precision and performance.</p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                brand: "EOS",
                blurb: "Proven, production‑grade laser powder bed fusion systems for aerospace, medical, and tooling.",
                specs: ["Build Vol: up to 400×400×400 mm", "Materials: Al, Ti, SS, Inconel", "Layer: 20–60 μm"],
                brochure: "/brochure.pdf",
                Image: "https://ik.imagekit.io/0s6dxbeae/eosm290.png?updatedAt=1756027333597",
              },
              {
                brand: "SLM Solutions",
                blurb: "Multi‑laser platforms delivering high throughput and exceptional metallurgical properties.",
                specs: ["Build Vol: up to 500×280×365 mm", "Up to 4 lasers", "Closed‑loop powder handling"],
                brochure: "/brochure.pdf",
                Image: "https://ik.imagekit.io/0s6dxbeae/SLM280.jpg?updatedAt=1756028789033",
              },
              {
                brand: "Renishaw",
                blurb: "Compact to mid‑size systems with robust process monitoring and validation workflows.",
                specs: ["Build Vol: 250×250×350 mm", "Optical monitoring", "Process parameter libraries"],
                brochure: "/brochure.pdf",
                video: "https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4",
              },
            ].map((m) => (
              <motion.div key={m.brand} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-2xl bg-gradient-to-tr from-white/5 via-[#1a1a1a]/40 to-white/5 border border-metal-400/20 shadow-2xl p-6 md:p-8 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-['test']">{m.brand}</h3>
                  <Link href={m.brochure} target="_blank" download className="font-['Aeonik'] inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md transition"><Download className="w-4 h-4" /> Brochure</Link>
                </div>
                <p className="font-['scrib'] text-gray-200 mb-4">{m.blurb}</p>
                <ul className="mb-5 space-y-2">
                  {m.specs.map((s) => (
                    <li key={s} className="font-['scrib'] flex items-start gap-2 text-gray-100"><CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" /><span className="text-sm">{s}</span></li>
                  ))}
                </ul>
                <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
                  <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1581092919535-7146ff1a5907?q=80&w=1600&auto=format&fit=crop">
                    <source src={m.video} type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PRINTER INQUIRIES CTA */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/80" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(185,28,28,0.25),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-2xl bg-white/5 backdrop-blur-xl border border-red-500/20 shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-3xl md:text-4xl font-['test']">Looking for a Custom Printer Build?</h3>
                <p className="mt-3 font-['scrib'] text-gray-200">Tell us your requirements — we’ll help design and build the right solution for your lab or factory.</p>
                <div className="mt-6 font-['dena'] flex gap-3">
                  <Link href="/contact" className="bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md transition hover:scale-105">Submit Inquiry</Link>
                  <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-monumentExtended px-6 py-3 rounded-md transition">Talk to an Engineer</Link>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="font-['dena'] bg-black/30 border border-white/10 rounded-xl p-5 md:p-6 grid grid-cols-1 gap-4">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs  text-gray-300">Name</label>
                    <input type="text" required className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-300">Company</label>
                    <input type="text" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Acme Labs" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300">Email</label>
                    <input type="email" required className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-300">Phone (optional)</label>
                    <input type="tel" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1 555 123 4567" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-300">Message / Requirements</label>
                  <textarea rows={4} required className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us what you want to build..." />
                </div>
                <div>
                  <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md transition hover:scale-[1.02] shadow-md">Submit</button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}



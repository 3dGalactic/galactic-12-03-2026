import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Zap,
  Target,
  Gauge,
  Focus,
  Plug,
  Wind,
  Box,
  Activity,
  Settings2,
  ShieldCheck,
  Layers,
  Flame,
  Hammer,
  Sparkles,
  CircleDot,
  Blocks,
} from "lucide-react";
import { METAL_FAMILIES } from "../materials/data";

function familySlug(family) {
  return family.toLowerCase().replace(/\s+/g, "-");
}

const FAMILY_ICONS = {
  "Titanium": Layers,
  "Aluminium": Sparkles,
  "Stainless Steel": ShieldCheck,
  "Tool Steel": Hammer,
  "Nickel Alloys": Flame,
  "Copper": CircleDot,
  "Other Alloys": Blocks,
};

const HIGHLIGHTS = [
  {
    title: "Repeatable Excellence",
    desc: "Exceptional laser quality and detail resolution ensure repeatable results — even for highly complex parts, every single time.",
  },
  {
    title: "Material Versatility",
    desc: "One of the widest ranges of validated materials and processes available, covering nearly every industrial application.",
  },
  {
    title: "From Start to Part Fast",
    desc: "Fast, flexible, dependable, and cost-effective production of metal parts directly from CAD data.",
  },
];

const TECH_SPECS = [
  { label: "Build Volume", value: "250 x 250 x 325 mm", icon: Box },
  { label: "Laser Type", value: "Yb-fiber laser, 1 x 400 W", icon: Zap },
  { label: "Precision Optics", value: "1 F-theta lens, 1 high-speed scanner", icon: Target },
  { label: "Scan Speed", value: "Up to 7.0 m/s", icon: Gauge },
  { label: "Focus Diameter", value: "Approx. 100 µm", icon: Focus },
  { label: "Power Supply", value: "1 x 32 A", icon: Plug },
  { label: "Power Consumption", value: "Max. 8.5 kW / typical 2.4 kW", icon: Activity },
  { label: "Compressed Air Supply", value: "7 Bar, 20 m³/h", icon: Wind },
];

const SOFTWARE = [
  {
    name: "Build Software",
    desc: "Multi-user build preparation with flexible material management and advanced licensing options.",
    icon: Settings2,
  },
  {
    name: "Smart Monitoring",
    desc: "Comprehensive build monitoring paired with heat regulation to keep every build within set parameters.",
    icon: Activity,
  },
  {
    name: "System Suite",
    desc: "Streamlines production by integrating with MES and shop-floor IT systems, generating detailed quality reports.",
    icon: ShieldCheck,
  },
];

export const metadata = {
  title: "EOS M290 | Galactic 3D",
  description: "Technical specifications for the EOS M290 metal 3D printer.",
};

export default function EquipmentPage() {
  return (
    <div className="min-h-screen text-[#111111] font-sans">
      {/* FLOATING DOWNLOAD BUTTON */}
      <a
        href="/EOS M290 _ Galactic 3D.pdf"
        download
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#D32F2F] text-white px-5 py-3 shadow-lg hover:bg-[#B71C1C] transition-colors"
      >
        <Download className="w-5 h-5" />
        <span className="text-sm font-bold hidden sm:inline">Download PDF</span>
      </a>
      {/* HERO */}
      <section className="hero-video-section relative overflow-hidden">
        {/* GRID BACKGROUND PATTERN */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#D32F2F] mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="text-center mb-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              EOS M290
            </h1>
          </div>

        </div>
      </section>

      {/* BODY */}
      <div className="relative overflow-hidden">
        {/* BACKGROUND PATTERN */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">

        {/* DESCRIPTION (text + image side-by-side) */}
        <section className="mt-4 mb-20">
          <h2 className="text-2xl font-bold text-[#D32F2F] mb-8">
            The Benchmark in Metal AM
          </h2>

          <div className="grid sm:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed text-justify">
                <strong className="block text-lg text-[#111111] mb-4">
                  Proven technology. Repeatable results. Production-ready performance.
                </strong>

                The EOS M 290 is a proven metal additive manufacturing platform, trusted for serial production since its introduction in 2014. Its robust architecture and high-quality 400 W fiber laser deliver the precision and consistency required to manufacture complex metal components with reliable, homogeneous properties.
                <br /><br />
                With an extensive portfolio of validated materials and processes, the M 290 gives manufacturers the flexibility to produce components across demanding industrial applications. Advanced monitoring and quality-management capabilities provide real-time insight into production, helping maintain consistent results from part to part and build to build.
                <br /><br />
                From intricate prototypes to repeatable series production, the EOS M 290 combines precision, process control, and production reliability to turn digital designs into high-performance metal parts.
              </p>
            </div>

            <div className="relative w-full h-[420px] sm:h-[440px] -mt-8">
              <Image
                src="/eos-m290-front.webp"
                alt="EOS M290 metal 3D printing machine, front view"
                fill
                className="object-contain object-top scale-125"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="grid sm:grid-cols-3 gap-6 mb-20 relative z-10">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="bg-white rounded-xl border border-[#EAEAEA] shadow-lg p-6"
            >
              <h3 className="text-base font-bold text-[#111111] mb-2">
                {h.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </section>

        {/* TECHNICAL DATA */}
        <section className="mb-20">
          <p className="text-xs font-bold text-[#D32F2F] tracking-widest mb-2">
            SPECIFICATIONS
          </p>
          <h2 className="text-2xl font-bold text-[#111111] mb-8">
            Technical Data
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_SPECS.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.label}
                  className="rounded-xl border border-[#EAEAEA] p-5 bg-white"
                >
                  <Icon className="w-5 h-5 text-[#D32F2F] mb-3" />
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                    {spec.label}
                  </p>
                  <p className="text-sm font-semibold text-[#111111]">
                    {spec.value}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SOFTWARE */}
        <section className="mb-20">
          <p className="text-xs font-bold text-[#D32F2F] tracking-widest mb-2">
            SOFTWARE
          </p>
          <h2 className="text-2xl font-bold text-[#111111] mb-8">
            Built-In Software Suite
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {SOFTWARE.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="rounded-xl border border-[#EAEAEA] p-6 bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FBEAEA] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111111] mb-2">
                    {s.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* MATERIALS & PROCESSES */}
        <section className="mb-20">
          <p className="text-xs font-bold text-[#D32F2F] tracking-widest mb-2">
            MATERIALS & PROCESSES
          </p>
          <h2 className="text-2xl font-bold text-[#111111] mb-3">
            Validated Materials
          </h2>
          

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {METAL_FAMILIES.map((fam) => {
              const Icon = FAMILY_ICONS[fam.family] || Box;
              return (
                <Link
                  key={fam.family}
                  href={`/materials#${familySlug(fam.family)}`}
                  className="group rounded-xl border border-[#EAEAEA] bg-white p-5 flex items-center gap-4 hover:border-[#D32F2F] hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#FBEAEA] flex items-center justify-center shrink-0 group-hover:bg-[#D32F2F] transition-colors">
                    <Icon className="w-5 h-5 text-[#D32F2F] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#111111]">
                      {fam.family}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#D32F2F] transition-colors shrink-0" />
                </Link>
              );
            })}
          </div>

          <Link
            href="/materials"
            className="inline-flex items-center gap-2 mt-8 rounded-full bg-[#D32F2F] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#B71C1C] transition-colors"
          >
            View Full Materials Catalog
          </Link>
        </section>

        </div>
      </div>
    </div>
  );
}
import React from "react";
import {
  BeakerIcon,
  CheckBadgeIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const capabilities = [
  {
    number: "01",
    title: "Built in India",
    text: "Global-grade manufacturing from an Indian production floor.",
    icon: GlobeAltIcon,
  },
  {
    number: "02",
    title: "Metal AM",
    text: "DMLS and LPBF for demanding alloys and critical geometries.",
    icon: CubeTransparentIcon,
  },
  {
    number: "03",
    title: "Certified Materials",
    text: "Validated parameters for production confidence.",
    icon: CheckBadgeIcon,
  },
  {
    number: "04",
    title: "Material Testing",
    text: "Mechanical validation before parts move to scale.",
    icon: BeakerIcon,
  },
  {
    number: "05",
    title: "Collaboration",
    text: "Design, build, finish, and inspection as one connected workflow.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function WhyGalactic() {
  return (
    <section className="relative w-full overflow-hidden bg-[#040404] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[480px] w-[66vw] -translate-x-1/2 rounded-full bg-red-600/14 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-12" />
      </div>

      <div className="relative mx-auto ">
        <header className="mb-5 grid gap-5 border-y border-white/10 py-6 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="mb-3 font-['scrib'] text-[10px] uppercase tracking-[0.3em] text-red-400">
              Why Us?
            </p>

            <h2 className="max-w-4xl font-semibold text-5xl leading-[0.9] tracking-normal sm:text-6xl lg:text-7xl">
              Why choose
              <span className="block text-red-500">Galactic?</span>
            </h2>
          </div>

          <p className="max-w-md font-['scrib'] text-sm leading-6 text-white/48 md:text-right">
            Precision production for aerospace, medical, and defence teams that
            need certified materials, validated processes, and speed.
          </p>
        </header>

        <main className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5 sm:p-7">
            <div>
              <p className="font-['scrib'] text-sm leading-6 text-white/45">
                From design to validation, our workflow keeps every stage
                connected to production outcomes.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 font-['scrib'] text-[10px] uppercase tracking-[0.18em] text-white/42">
                <span className="bg-[#0d0d0d] p-4">Design</span>
                <span className="bg-[#0d0d0d] p-4 text-center text-red-400">
                  Build
                </span>
                <span className="bg-[#0d0d0d] p-4 text-right">Validate</span>
              </div>
            </div>

            <div className="mt-10 grid gap-3 border-t border-white/10 pt-5">
              <Stat value="05" label="Capability pillars" />
              <Stat value="AM" label="Production-ready workflows" />
            </div>
          </section>

          <section className="grid gap-3">
            {capabilities.map((item) => (
              <CapabilityCard key={item.title} item={item} />
            ))}
          </section>
        </main>

        <footer className="mt-5 grid gap-3 border-t border-white/10 pt-5 font-['scrib'] text-[10px] uppercase tracking-[0.28em] text-white/35 sm:grid-cols-3">
          <span>India Built</span>
          <span className="text-red-400 sm:text-center">Material Confidence</span>
          <span className="sm:text-right">Production Ready</span>
        </footer>
      </div>
    </section>
  );
}

function CapabilityCard({
  item,
}: {
  item: (typeof capabilities)[number];
}) {
  const Icon = item.icon;

  return (
    <article className="group grid overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0d0d0d] transition duration-300 hover:border-red-500/40 hover:bg-[#111111] sm:grid-cols-[90px_1fr_auto]">
      <div className="flex items-center justify-between border-b border-white/10 p-4 sm:block sm:border-b-0 sm:border-r">
        <span className="font-['test'] text-4xl leading-none text-white/[0.09] transition group-hover:text-red-500/35">
          {item.number}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="font-['dena'] text-2xl leading-tight">
          {item.title}
        </h3>
        <p className="mt-2 max-w-xl font-['scrib'] text-sm leading-6 text-white/45">
          {item.text}
        </p>
      </div>

      <div className="flex items-center p-4 sm:p-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-red-400 transition group-hover:border-red-500/35">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-end justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4">
      <p className="font-['test'] text-4xl leading-none text-red-500">
        {value}
      </p>
      <p className="max-w-[12rem] text-right font-['scrib'] text-[10px] uppercase leading-5 tracking-[0.22em] text-white/38">
        {label}
      </p>
    </div>
  );
}

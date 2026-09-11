const VENDORS = [
  { name: "Saveer Matrix Nano", logo: "/vendors/saveer-matrix-nano.png" },
  { name: "IndoMiM", logo: "/vendors/indomim.png" },
  { name: "EOS", logo: "/vendors/eos.png" },
  { name: "m4p", logo: "/vendors/m4p.png" },
];

export default function MaterialVendors() {
  return (
    <section className="py-16 bg-white border-b border-[#EAEAEA] relative overflow-hidden">
      {/* SUBTLE ENGINEERING GRID BACKGROUND PATTERN OVERLAY */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-8">
          We precure our <span className="text-[#D32F2F]">materials from</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {VENDORS.map((vendor) => (
            <div
              key={vendor.name}
              className="h-32 sm:h-40 rounded-xl hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <img
                src={vendor.logo}
                alt={`${vendor.name} logo`}
                className="w-full h-full object-contain border-2 border-black rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
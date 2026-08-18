"use client";

import { useState, useRef } from "react";
import { Upload, FileCode, CheckCircle2, ShieldAlert, Cpu, Sparkles, ArrowRight, Clock, Calculator } from "lucide-react";
import { useToast } from "./Toast";

const MATERIALS = [
  { id: "PLA", name: "PLA Tough (Poly-Lactic)", pricePerCm3: 0.15, category: "Polymers", leadTime: "24-48 hrs" },
  { id: "ABS", name: "ABS Industrial Grade", pricePerCm3: 0.18, category: "Polymers", leadTime: "24-48 hrs" },
  { id: "PETG", name: "PETG High Strength", pricePerCm3: 0.22, category: "Polymers", leadTime: "24-48 hrs" },
  { id: "PA12", name: "PA12 Nylon (SLS Powder)", pricePerCm3: 0.45, category: "Polymers", leadTime: "2-3 Days" },
  { id: "ULTEM", name: "ULTEM 9085 Flame Retardant", pricePerCm3: 1.20, category: "Polymers", leadTime: "3-4 Days" },
  { id: "DMLS_STEEL", name: "Stainless Steel 316L (DMLS Metal)", pricePerCm3: 2.80, category: "Metals", leadTime: "3-5 Days" },
  { id: "DMLS_TI", name: "Titanium Ti6Al4V Grade 5 (DMLS Metal)", pricePerCm3: 4.50, category: "Metals", leadTime: "3-5 Days" },
  { id: "DMLS_INCONEL", name: "Inconel 718 Super-Alloy (DMLS Metal)", pricePerCm3: 5.20, category: "Metals", leadTime: "4-5 Days" },
];

export default function QuoteCalculator() {
  const { addToast } = useToast();
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState("PLA");
  const [quantity, setQuantity] = useState(1);
  const [infill, setInfill] = useState(20);
  const [isExpress, setIsExpress] = useState(false);
  const [estimatedVolume, setEstimatedVolume] = useState(45);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (uploadedFile) => {
    const ext = uploadedFile.name.split('.').pop().toLowerCase();
    const allowed = ['stl', 'step', 'obj', 'iges', '3mf'];
    if (!allowed.includes(ext)) {
      addToast(`Unsupported format .${ext}. Please upload STL, STEP, OBJ, IGES, or 3MF files.`, "error");
      return;
    }

    setFile(uploadedFile);
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          const computedVol = Math.max(15, Math.min(350, Math.round(uploadedFile.size / 15000)));
          setEstimatedVolume(computedVol);
          addToast(`File ${uploadedFile.name} parsed successfully!`, "success");
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  const selectedMatObj = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];
  const basePricePerUnit = Math.max(10, estimatedVolume * selectedMatObj.pricePerCm3 * (0.8 + infill / 100));
  const expressMultiplier = isExpress ? 1.35 : 1.0;
  const totalPrice = (basePricePerUnit * quantity * expressMultiplier).toFixed(2);

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    addToast("Instant Quote Request Sent to Email Team!", "success");
  };

  return (
    <div className="w-full rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-8 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-['dena'] uppercase tracking-widest text-red-400 mb-3">
            <Calculator className="w-3.5 h-3.5" /> Instant Pricing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['test']">
            CAD Quote Calculator
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-['scrib']">
            Upload 3D CAD files for real-time volumetric estimation &amp; instant production pricing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-['dena'] text-xs text-zinc-500 uppercase tracking-widest">Supported Formats:</span>
          <div className="flex gap-1.5 font-['dena'] text-[11px]">
            {["STL", "STEP", "OBJ", "IGES", "3MF"].map((ext) => (
              <span key={ext} className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold">
                .{ext}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* FILE UPLOAD & CONFIG SECTION */}
        <div className="lg:col-span-7 space-y-6">
          {/* DRAG & DROP ZONE */}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="group relative cursor-pointer flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-900/40 p-8 text-center transition-all duration-300 hover:border-red-500/60 hover:bg-zinc-900/80"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".stl,.step,.stp,.obj,.iges,.igs,.3mf"
              className="hidden"
            />

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600/10 text-red-500 border border-red-500/20 group-hover:scale-110 transition duration-300">
              <Upload className="h-6 w-6" />
            </div>

            {file ? (
              <div className="space-y-2">
                <p className="font-['dena'] text-sm font-bold text-white flex items-center justify-center gap-2">
                  <FileCode className="w-4 h-4 text-red-400" /> {file.name}
                </p>
                <p className="font-['scrib'] text-xs text-zinc-400">
                  Size: {(file.size / (1024 * 1024)).toFixed(2)} MB | Est. Volume: ~{estimatedVolume} cm³
                </p>
              </div>
            ) : (
              <div>
                <p className="font-['dena'] text-sm font-bold text-white">
                  Drag & Drop 3D File Here or <span className="text-red-400 underline">Browse</span>
                </p>
                <p className="mt-1 font-['scrib'] text-xs text-zinc-500">
                  Max file size: 100MB. Confidential 256-bit encrypted CAD evaluation.
                </p>
              </div>
            )}

            {isUploading && (
              <div className="mt-4 w-full max-w-xs">
                <div className="flex justify-between font-['dena'] text-[10px] text-zinc-400 mb-1">
                  <span>Parsing Mesh & Geometry...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* MATERIAL SELECTOR */}
          <div>
            <label className="block font-['dena'] text-xs uppercase tracking-widest text-zinc-400 mb-3">
              Select Manufacturing Material
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {MATERIALS.map((mat) => (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setSelectedMaterial(mat.id)}
                  className={`flex flex-col justify-between p-4 rounded-xl border text-left transition duration-200 ${
                    selectedMaterial === mat.id
                      ? "border-red-500 bg-red-950/20 text-white shadow-lg"
                      : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-['dena'] text-xs font-bold text-white">{mat.name}</span>
                    <span className="font-['dena'] text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {mat.category}
                    </span>
                  </div>
                  <span className="mt-2 font-['scrib'] text-[11px] text-zinc-500">
                    Lead Time: {mat.leadTime}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SLIDERS & OPTIONS */}
          <div className="grid sm:grid-cols-2 gap-6 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800">
            <div>
              <div className="flex justify-between font-['dena'] text-xs text-zinc-400 mb-2">
                <span>Quantity</span>
                <span className="font-bold text-white">{quantity} Units</span>
              </div>
              <input
                type="range"
                min="1"
                max="500"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full accent-red-500 bg-zinc-800"
              />
            </div>

            <div>
              <div className="flex justify-between font-['dena'] text-xs text-zinc-400 mb-2">
                <span>Infill Density</span>
                <span className="font-bold text-white">{infill}% Solid</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={infill}
                onChange={(e) => setInfill(parseInt(e.target.value))}
                className="w-full accent-red-500 bg-zinc-800"
              />
            </div>
          </div>

          {/* TURNAROUND SPEED */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/60">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-red-400" />
              <div>
                <p className="font-['dena'] text-xs font-bold text-white">24-Hour Express Production</p>
                <p className="font-['scrib'] text-[11px] text-zinc-400">Prioritize job on industrial machines</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsExpress(!isExpress)}
              className={`px-4 py-2 rounded-lg font-['dena'] text-xs font-bold transition ${
                isExpress ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {isExpress ? "Enabled (+35%)" : "Standard Speed"}
            </button>
          </div>
        </div>

        {/* PRICING BREAKDOWN & SUBMIT */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6">
          <div className="space-y-6">
            <h3 className="font-['dena'] text-sm font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-3">
              Quote Summary
            </h3>

            <div className="space-y-3 font-['scrib'] text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Selected Material:</span>
                <span className="font-bold text-white font-['dena']">{selectedMatObj.name}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Est. Model Volume:</span>
                <span className="font-bold text-white font-['dena']">~{estimatedVolume} cm³</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Quantity:</span>
                <span className="font-bold text-white font-['dena']">{quantity} parts</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Infill Density:</span>
                <span className="font-bold text-white font-['dena']">{infill}%</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Production Mode:</span>
                <span className="font-bold text-white font-['dena']">
                  {isExpress ? "24-Hr Express" : "Standard Speed"}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Est. Delivery:</span>
                <span className="font-bold text-green-400 font-['dena']">{selectedMatObj.leadTime}</span>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-4">
              <span className="font-['dena'] text-xs uppercase tracking-widest text-zinc-500">
                Total Estimated Price
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold text-white font-['test']">${totalPrice}</span>
                <span className="text-xs text-zinc-500 font-['scrib']">USD (excl. tax)</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {isSubmitted ? (
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/40 text-center font-['dena'] text-xs text-green-400">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                Quote Request Submitted! Our DfAM engineers will contact you shortly.
              </div>
            ) : (
              <button
                type="button"
                onClick={handleSubmitQuote}
                className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-['dena'] text-xs uppercase tracking-widest font-bold transition flex items-center justify-center gap-2 shadow-xl hover:shadow-red-600/30"
              >
                Submit Official CAD Quote Request <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <p className="font-['scrib'] text-[10px] text-center text-zinc-500">
              Confidential CAD Engineering Review &amp; Quality Inspection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

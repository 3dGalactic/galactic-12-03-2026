// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Briefcase,
//   Upload,
//   Sparkles,
//   Cpu,
//   Factory,
//   Users,
//   ChevronRight,
//   Flame,
//   Layers,
//   Activity,
//   Shield,
//   Zap
// } from "lucide-react";



// const jobsData = [
//   {
//     id: "J-001",
//     title: "Additive Manufacturing Engineer",
//     location: "Bengaluru",
//     type: "Full-time",
//     experience: "3–5 years",
//     salary: "₹8L – ₹14L",
//     description:
//       "Optimize metal AM builds, manage parameters and scale production workflows.",
//     responsibilities: [
//       "Develop print strategies",
//       "Parameter optimization",
//       "Post-processing workflows",
//       "Quality validation"
//     ]
//   },
//   {
//     id: "J-002",
//     title: "Generative Design Engineer",
//     location: "Hybrid",
//     type: "Full-time",
//     experience: "2–4 years",
//     salary: "₹6L – ₹10L",
//     description:
//       "Design production-ready components using DFAM and generative workflows.",
//     responsibilities: [
//       "Topology optimization",
//       "Simulation validation",
//       "Design for additive",
//       "Client collaboration"
//     ]
//   },
//   {
//     id: "J-003",
//     title: "Materials Scientist",
//     location: "On-site",
//     type: "Contract",
//     experience: "PhD preferred",
//     salary: "Negotiable",
//     description:
//       "Characterize material behavior and develop new printable compositions.",
//     responsibilities: [
//       "Material testing",
//       "Microstructure analysis",
//       "Failure investigation",
//       "R&D experiments"
//     ]
//   }
// ];

// const benefits = [
//   { icon: Factory, title: "Industrial Scale Labs", desc: "Metal and polymer production systems." },
//   { icon: Cpu, title: "Advanced Engineering", desc: "Simulation and generative workflows." },
//   { icon: Users, title: "Elite Team", desc: "Mechanical and materials specialists." },
//   { icon: Shield, title: "Mission Critical", desc: "Aerospace and medical deployment." }
// ];

// const equipment = [
//   "EOS M 290 Metal Printer",
//   "SLM 280 Production System",
//   "Carbon M2 Polymer Platform",
//   "Industrial Heat Treatment Furnaces",
//   "5 Axis CNC Post Processing",
//   "Metrology Grade CT Scanning"
// ];

// const processSteps = [
//   "Design Optimization",
//   "Material Preparation",
//   "Precision Printing",
//   "Thermal Processing",
//   "Quality Validation",
//   "Deployment"
// ];



// function GlassPanel({ children, className = "" }) {
//   return (
//     <div className={`relative rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${className}`}>
//       <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.15),transparent_40%)] pointer-events-none" />
//       {children}
//     </div>
//   );
// }

// function Orb({ className }) {
//   return <div className={`absolute rounded-full blur-[140px] opacity-40 ${className}`} />;
// }



// function JobCard({ job, onSelect }) {
//   return (
//     <motion.div
//       whileHover={{ y: -10, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 200, damping: 18 }}
//       onClick={() => onSelect(job)}
//       className="cursor-pointer"
//     >
//       <GlassPanel className="p-8 group overflow-hidden">
//         <div className="flex justify-between mb-6">
//           <div className="text-xs tracking-widest text-red-400/70">{job.id}</div>
//           <Sparkles className="text-white/40 group-hover:text-red-400 transition" />
//         </div>

//         <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>

//         <div className="space-y-2 text-white/60 text-sm mb-6">
//           <div className="flex items-center gap-2"><MapPin size={14}/> {job.location}</div>
//           <div className="flex items-center gap-2"><Briefcase size={14}/> {job.type}</div>
//           <div>{job.experience}</div>
//           <div className="text-white font-medium">{job.salary}</div>
//         </div>

//         <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition">
//           View Role <ChevronRight size={16} />
//         </div>
//       </GlassPanel>
//     </motion.div>
//   );
// }



// export default function CareersPage() {
//   const [selectedJob, setSelectedJob] = useState(null);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative">


//         <section className="py-40 px-6 container mx-auto">
//           <GlassPanel className="p-12 max-w-2xl mx-auto">
//             <h2 className="text-3xl mb-8">Apply</h2>

//             <form className="space-y-6">
//               <input placeholder="Full Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />
//               <input placeholder="Email" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />
//               <input placeholder="Phone" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />
//               <textarea placeholder="Tell us about yourself" className="w-full p-4 rounded-xl bg-white/5 border border-white/10" />

//               <label className="flex items-center gap-3 text-white/70 cursor-pointer">
//                 <Upload /> Upload Resume
//                 <input type="file" className="hidden" />
//               </label>

//               <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-400 font-semibold">
//                 Submit Application
//               </button>
//             </form>
//           </GlassPanel>
//         </section>
//       </div>

//   );
// }






















"use client";

import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { useState, useEffect } from "react";


function Orb({ className }) {
  return (
    <div className={`absolute rounded-full blur-[140px] opacity-30 ${className}`} />
  );
}

export default function CareersPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(loading) return;
    setLoading(true);

    let resumeUrl = null;

    // Upload resume to storage
    if (resume) {
      const fileName = `${Date.now()}-${resume.name}`;

      const { error: uploadError } = await supabase.storage
        .from("resume")
        .upload(fileName, resume);

      if (uploadError) {
        console.error(uploadError);
        setStatus({ type: "error", message: "Resume upload failed. Please try again." });
        return;
      }

      const { data } = supabase.storage
        .from("resume")
        .getPublicUrl(fileName);

      resumeUrl = data.publicUrl;
    }

    // Save application
    const { error } = await supabase
      .from("applications")
      .insert([
        {
          name,
          email,
          role,
          about,
          resume_url: resumeUrl
        }
      ]);

    if (error) {
  console.error(error);
  setStatus({ type: "error", message: "Application submission failed." });
  setLoading(false);
} else {
      setStatus({ type: "success", message: "Application submitted successfully." });
      setName("");
      setEmail("");
      setRole("");
      setAbout("");
      setResume(null);
      document.getElementById("resumeUpload").value = "";
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden px-8 py-40 flex justify-center">

      {/* Background lights */}
      <Orb className="w-[500px] h-[500px] bg-red-500/30 -top-40 -left-40" />
      <Orb className="w-[400px] h-[400px] bg-orange-500/20 bottom-0 right-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full"
      >

        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl font-semibold mb-6">
            Careers
          </h1>

          <p className="text-white/60 max-w-xl leading-relaxed">
            We are always looking for talented engineers, designers,
            and innovators passionate about additive manufacturing.
            Submit your application below.
          </p>
        </div>



        {/* Application */}
        <form onSubmit={handleSubmit} className="space-y-14">

          {/* Name */}
          <div>
            <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
              Full Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg transition"
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg transition"
            />
          </div>


          {/* Role */}
          <div>
            <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
              Position you're applying for
            </label>

            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg transition"
            />
          </div>


          {/* About */}
          <div>
            <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
              Tell us about yourself
            </label>

            <textarea
              rows="4"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg resize-none transition"
            />
          </div>


          {/* Resume */}
          <div>
            <label className="block text-sm text-white/50 mb-6 uppercase tracking-widest">
              Resume
            </label>

            <label htmlFor="resumeUpload" className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-red-400 transition">
              {resume && (
                <p className="text-green-400 text-sm mt-2">
                  Selected: {resume.name}
                </p>
              )}
              <UploadCloud className="w-5 h-5" />
              Upload Resume
              <input
                id="resumeUpload"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
              />           </label>
          </div>


          {/* Submit */}
          <div className="pt-12 flex items-center gap-6">

  <button type="submit" disabled={loading} className="group relative overflow-hidden border border-red-500 px-12 py-4 rounded-full text-white font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed">

    <span className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>

    <span className="relative flex items-center gap-3">
      {loading ? "Processing..." : "Submit Application"}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>

  </button>

  {status && (
    <span
      className={`text-sm transition-opacity duration-500 ${
        status.type === "success"
          ? "text-green-400"
          : "text-red-400"
      }`}
    >
      {status.message}
    </span>
  )}

</div>

        </form>

      </motion.div>

    </div>
  );
}
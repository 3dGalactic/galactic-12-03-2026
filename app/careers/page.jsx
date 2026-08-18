// "use client";

// import { motion } from "framer-motion";
// import { UploadCloud } from "lucide-react";
// import { supabase } from "../lib/supabaseClient";
// import { useState, useEffect } from "react";


// function Orb({ className }) {
//   return (
//     <div className={`absolute rounded-full blur-[140px] opacity-30 ${className}`} />
//   );
// }

// export default function CareersPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [about, setAbout] = useState("");
//   const [resume, setResume] = useState(null);
//   const [status, setStatus] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (status) {
//       const timer = setTimeout(() => {
//         setStatus(null);
//       }, 4000);

//       return () => clearTimeout(timer);
//     }
//   }, [status]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if(loading) return;
//     setLoading(true);

//     let resumeUrl = null;

//     // Upload resume to storage
//     if (resume) {
//       const fileName = `${Date.now()}-${resume.name}`;

//       const { error: uploadError } = await supabase.storage
//         .from("resume")
//         .upload(fileName, resume);

//       if (uploadError) {
//         console.error(uploadError);
//         setStatus({ type: "error", message: "Resume upload failed. Please try again." });
//         return;
//       }

//       const { data } = supabase.storage
//         .from("resume")
//         .getPublicUrl(fileName);

//       resumeUrl = data.publicUrl;
//     }

//     // Save application
//     const { error } = await supabase
//       .from("applications")
//       .insert([
//         {
//           name,
//           email,
//           role,
//           about,
//           resume_url: resumeUrl
//         }
//       ]);

//     if (error) {
//   console.error(error);
//   setStatus({ type: "error", message: "Application submission failed." });
//   setLoading(false);
// } else {
//       setStatus({ type: "success", message: "Application submitted successfully." });
//       setName("");
//       setEmail("");
//       setRole("");
//       setAbout("");
//       setResume(null);
//       document.getElementById("resumeUpload").value = "";
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden px-8 py-40 flex justify-center">

//       {/* Background lights */}
//       <Orb className="w-[500px] h-[500px] bg-red-500/30 -top-40 -left-40" />
//       <Orb className="w-[400px] h-[400px] bg-orange-500/20 bottom-0 right-0" />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-3xl w-full"
//       >

//         {/* Header */}
//         <div className="mb-20">
//           <h1 className="text-5xl font-semibold mb-6">
//             Careers
//           </h1>

//           <p className="text-white/60 max-w-xl leading-relaxed">
//             We are always looking for talented engineers, designers,
//             and innovators passionate about additive manufacturing.
//             Submit your application below.
//           </p>
//         </div>



//         {/* Application */}
//         <form onSubmit={handleSubmit} className="space-y-14">

//           {/* Name */}
//           <div>
//             <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
//               Full Name
//             </label>

//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg transition"
//             />
//           </div>


//           {/* Email */}
//           <div>
//             <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
//               Email Address
//             </label>

//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg transition"
//             />
//           </div>


//           {/* Role */}
//           <div>
//             <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
//               Position you're applying for
//             </label>

//             <input
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg transition"
//             />
//           </div>


//           {/* About */}
//           <div>
//             <label className="block text-sm text-white/50 mb-3 uppercase tracking-widest">
//               Tell us about yourself
//             </label>

//             <textarea
//               rows="4"
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//               className="w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-lg resize-none transition"
//             />
//           </div>


//           {/* Resume */}
//           <div>
//             <label className="block text-sm text-white/50 mb-6 uppercase tracking-widest">
//               Resume
//             </label>

//             <label htmlFor="resumeUpload" className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-red-400 transition">
//               {resume && (
//                 <p className="text-green-400 text-sm mt-2">
//                   Selected: {resume.name}
//                 </p>
//               )}
//               <UploadCloud className="w-5 h-5" />
//               Upload Resume
//               <input
//                 id="resumeUpload"
//                 type="file"
//                 className="hidden"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => setResume(e.target.files[0])}
//               />           </label>
//           </div>


//           {/* Submit */}
//           <div className="pt-12 flex items-center gap-6">

//   <button type="submit" disabled={loading} className="group relative overflow-hidden border border-red-500 px-12 py-4 rounded-full text-white font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed">

//     <span className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>

//     <span className="relative flex items-center gap-3">
//       {loading ? "Processing..." : "Submit Application"}
//       <span className="transition-transform duration-300 group-hover:translate-x-1">
//         →
//       </span>
//     </span>

//   </button>

//   {status && (
//     <span
//       className={`text-sm transition-opacity duration-500 ${
//         status.type === "success"
//           ? "text-green-400"
//           : "text-red-400"
//       }`}
//     >
//       {status.message}
//     </span>
//   )}

// </div>

//         </form>

//       </motion.div>

//     </div>
//   );
// }





























"use client";

import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";

import {
  UploadCloud,
  ArrowRight,
  Check,
} from "lucide-react";

import { gsap } from "gsap";
import { supabase } from "../lib/supabaseClient";

/* =========================================
   REUSABLE CLASSES
========================================= */

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-gray-50 px-5 text-[#111111] outline-none transition duration-200 focus:border-[#D32F2F] focus:bg-white placeholder:text-gray-400 font-sans";

const fieldClass =
  "fade-item border-b border-[#EAEAEA] p-6 sm:p-8 transition-colors duration-300 hover:bg-gray-50/50";

/* =========================================
   FIELD
========================================= */

function Field({
  label,
  number,
  children,
  accent = false,
}) {
  return (

    <div className={fieldClass}>

      <div className="mb-5 flex items-center justify-between">

        <span
          className={`text-[11px] font-bold
          uppercase tracking-[0.24em]
          ${
            accent
              ? "text-[#D32F2F]"
              : "text-gray-500"
          }`}
        >
          {label}
        </span>

        <span className="text-xs text-gray-400 font-mono">
          {number}
        </span>

      </div>

      {children}

    </div>

  );
}

/* =========================================
   PAGE
========================================= */

export default function CareersPage() {

  /* =========================================
     STATE
  ========================================= */

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    about: "",
  });

  const [resume, setResume] = useState(null);

  const [phase, setPhase] = useState("idle");
  /*
    idle
    uploaded
    processing
    success
    error
  */

  const [loading, setLoading] =
    useState(false);

  /* =========================================
     REFS
  ========================================= */

  const formRef = useRef(null);
  const uploadRef = useRef(null);

  /* =========================================
     GSAP INTRO
  ========================================= */

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".fade-item",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 1,
          ease: "power4.out",
          clearProps: "all",
        }
      );

    }, formRef);

    return () => ctx.revert();

  }, []);

  /* =========================================
     AUTO RESET BORDER
  ========================================= */

  useEffect(() => {

    if (
      phase !== "success" &&
      phase !== "error"
    ) return;

    const timeout = setTimeout(() => {

      gsap.to(formRef.current, {
        borderColor:
          "rgba(255,255,255,0.1)",
        duration: 0.6,
      });

      setPhase("idle");

    }, 2500);

    return () => clearTimeout(timeout);

  }, [phase]);

  /* =========================================
     UPDATE FIELD
  ========================================= */

  const updateField = (k, v) =>
    setForm((p) => ({
      ...p,
      [k]: v,
    }));

  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    if (
      !form.name ||
      !form.email ||
      !form.role ||
      !form.about
    ) {

      setPhase("error");

      gsap.fromTo(
        formRef.current,
        {
          x: -8,
        },
        {
          x: 8,
          duration: 0.08,
          repeat: 5,
          yoyo: true,
        }
      );

      return;
    }

    setLoading(true);
    setPhase("processing");

    try {
      const dataPayload = new FormData();
      dataPayload.append("name", form.name);
      dataPayload.append("email", form.email);
      dataPayload.append("role", form.role);
      dataPayload.append("about", form.about);
      if (resume) {
        dataPayload.append("resume", resume);
      }

      const res = await fetch("/api/careers", {
        method: "POST",
        body: dataPayload,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit application");
      }

      /* SUCCESS */
      setPhase("success");

      gsap.to(formRef.current, {
        borderColor: "#22c55e",
        duration: 0.4,
      });

      // Dispatch mailto to admin@galactic-3d.com
      const mailtoUrl = `mailto:admin@galactic-3d.com?subject=${encodeURIComponent(
        `New Career Application: ${form.name} (${form.role})`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPosition: ${form.role}\nAbout: ${form.about}\n`
      )}`;
      
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.click();

      /* RESET */
      setForm({
        name: "",
        email: "",
        role: "",
        about: "",
      });

      setResume(null);

      const input = document.getElementById("resumeUpload");
      if (input) input.value = "";

    } catch (err) {
      console.error("Application Submission Error:", err);
      setPhase("error");

      gsap.to(formRef.current, {
        borderColor: "#ef4444",
        duration: 0.4,
      });
    }

    setLoading(false);
  };

  /* =========================================
     BUTTON STATE
  ========================================= */  const buttonState = {
    idle: {
      text: "Submit Application",
      cls:
        "bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow-md",
      icon: <ArrowRight className="h-5 w-5" />,
    },

    processing: {
      text: "Processing Application",
      cls: "bg-[#B71C1C] text-white",
      icon: (
        <ArrowRight className="h-5 w-5 translate-x-1" />
      ),
    },

    success: {
      text: "Application Sent",
      cls: "bg-green-600 text-white",
      icon: <Check className="h-5 w-5" />,
    },

    error: {
      text: "Submission Failed — Retry",
      cls: "bg-[#D32F2F] text-white",
      icon: <ArrowRight className="h-5 w-5" />,
    },
  };

  const current =
    buttonState[phase] ||
    buttonState.idle;

  /* =========================================
     JSX
  ========================================= */

  return (

    <section
      className="relative min-h-screen overflow-hidden bg-[#F8F9FA] px-5 py-20 text-[#111111] sm:px-8 lg:px-10 border-t border-[#EAEAEA]"
    >

      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* FORM */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="fade-item relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#EAEAEA] bg-white shadow-lg"
      >

        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div className="border-b border-[#EAEAEA] lg:border-b-0 lg:border-r">

            {/* NAME */}
            <Field
              label="Full Name"
              number="01"
              accent
            >

              <input
                value={form.name}
                onChange={(e) =>
                  updateField(
                    "name",
                    e.target.value
                  )
                }
                placeholder="Your name"
                className={`${inputClass} h-24 text-4xl font-[test] tracking-[-0.05em]`}
              />

            </Field>

            {/* EMAIL + ROLE */}
            <div className="grid sm:grid-cols-2">

              <div className="sm:border-r sm:border-white/10">

                <Field
                  label="Email Address"
                  number="02"
                >

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      updateField(
                        "email",
                        e.target.value
                      )
                    }
                    placeholder="name@email.com"
                    className={`${inputClass} h-16 text-[17px] font-[test]`}
                  />

                </Field>

              </div>

              <Field
                label="Position"
                number="03"
              >

                <input
                  value={form.role}
                  onChange={(e) =>
                    updateField(
                      "role",
                      e.target.value
                    )
                  }
                  placeholder="Role you're applying for"
                  className={`${inputClass} h-16 text-[17px] font-[test]`}
                />

              </Field>

            </div>

            {/* ABOUT */}
            <Field
              label="About You"
              number="04"
            >

              <textarea
                rows="7"
                value={form.about}
                onChange={(e) =>
                  updateField(
                    "about",
                    e.target.value
                  )
                }
                placeholder="Tell us about yourself..."
                className={`${inputClass} resize-none py-6 text-[17px] leading-8 font-[test]`}
              />

            </Field>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between bg-[#F8F9FA]">

            {/* TOP */}
            <div className="fade-item border-b border-[#EAEAEA] p-8">

              <div className="flex items-center justify-between">

                <span
                  className="text-[11px] font-bold
                  uppercase tracking-[0.24em]
                  text-[#D32F2F]"
                >
                  Resume Upload
                </span>

                <span className="text-xs text-gray-400 font-mono">
                  05
                </span>

              </div>

              <h3
                className="mt-6 text-3xl font-extrabold text-[#111111]
                leading-tight tracking-tight"
              >
                Upload Your Resume
              </h3>

              <p
                className="mt-3 max-w-xs text-xs
                leading-relaxed text-gray-600"
              >
                PDF, DOC or DOCX format.
                Keep file concise and relevant.
              </p>

            </div>

            {/* DROPZONE */}
            <div className="fade-item flex-1 p-8">

              <label
                ref={uploadRef}
                htmlFor="resumeUpload"
                className="group flex h-full min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-gray-300 bg-white p-8 text-center transition duration-300 hover:border-[#D32F2F] hover:bg-red-50/20"
              >

                <UploadCloud
                  className="h-12 w-12 text-[#D32F2F] transition-transform group-hover:scale-110"
                />

                <p className="mt-6 text-lg font-bold text-[#111111]">

                  {resume
                    ? resume.name
                    : "Upload Resume"}

                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Drag & drop supported (.pdf, .doc, .docx)
                </p>

                <input
                  id="resumeUpload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {

                    const file =
                      e.target.files[0];

                    setResume(file);
                    setPhase("uploaded");

                    gsap.to(uploadRef.current, {
                      borderColor: "#D32F2F",
                      backgroundColor:
                        "rgba(211,47,47,0.05)",
                      duration: 0.4,
                    });

                  }}
                />

              </label>

            </div>

            {/* BUTTON */}
            <div className="fade-item border-t border-[#EAEAEA] p-8">

              <button
                type="submit"
                disabled={loading}
                className={`
                  relative h-20 w-full overflow-hidden
                  rounded-full px-8 transition-all duration-500
                  ${current.cls}
                `}
              >

                {/* SHIMMER */}
                {phase === "processing" && (

                  <div className="absolute inset-0 overflow-hidden rounded-full">

                    <div
                      className="absolute inset-y-0 left-[-40%]
                      w-[40%]
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      animate-[shimmer_1.2s_linear_infinite]"
                    />

                  </div>

                )}

                {/* GLOW */}
                {phase === "success" && (

                  <div
                    className="absolute inset-0
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]"
                  />

                )}

                {/* CONTENT */}
                <div
                  className="relative z-10 flex h-full items-center justify-between"
                >

                  <span
                    className="font-mono text-[11px]
                    uppercase tracking-[0.24em]
                    text-white"
                  >
                    {current.text}
                  </span>

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/20 backdrop-blur-md"
                  >
                    {current.icon}
                  </div>

                </div>

              </button>

            </div>

          </div>

        </div>

      </form>

    </section>

  );
}
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
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-white outline-none transition duration-300 focus:border-red-500/50 focus:bg-white/[0.06] placeholder:text-white/10 font-['Inter']";

const fieldClass =
  "fade-item border-b border-white/10 p-6 sm:p-8 transition-colors duration-500 hover:bg-white/[0.02]";

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
          className={`font- text-[10px]
          uppercase tracking-[0.24em]
          ${
            accent
              ? "text-red-400"
              : "text-white/50"
          }`}
        >
          {label}
        </span>

        <span className="text-xs text-white/20">
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

      let resumeUrl = null;

      /* UPLOAD */

      if (resume) {

        const fileName =
          `${Date.now()}-${resume.name}`;

        const { error: uploadError } =
          await supabase.storage
            .from("resume")
            .upload(fileName, resume);

        if (uploadError)
          throw uploadError;

        const { data } =
          supabase.storage
            .from("resume")
            .getPublicUrl(fileName);

        resumeUrl = data.publicUrl;
      }

      /* INSERT */

      const { error } =
        await supabase
          .from("applications")
          .insert([
            {
              ...form,
              resume_url: resumeUrl,
            },
          ]);

      if (error) throw error;

      /* SUCCESS */

      setPhase("success");

      gsap.to(formRef.current, {
        borderColor: "#22c55e",
        duration: 0.4,
      });

      /* RESET */

      setForm({
        name: "",
        email: "",
        role: "",
        about: "",
      });

      setResume(null);

      const input =
        document.getElementById(
          "resumeUpload"
        );

      if (input) input.value = "";

    } catch (err) {

      console.error(err);

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
  ========================================= */

  const buttonState = {
    idle: {
      text: "Submit Application",
      cls:
        "bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.01]",
      icon: <ArrowRight className="h-5 w-5" />,
    },

    processing: {
      text: "Processing Application",
      cls: "bg-red-700",
      icon: (
        <ArrowRight className="h-5 w-5 translate-x-1" />
      ),
    },

    success: {
      text: "Application Submitted",
      cls: "bg-green-500",
      icon: <Check className="h-5 w-5" />,
    },

    error: {
      text: "Try Again",
      cls:
        "bg-gradient-to-r from-red-700 to-red-600",
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
      className="relative min-h-screen overflow-hidden bg-[#060606] px-5 py-20 text-white sm:px-8 lg:px-10"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(239,68,68,0.12), transparent 30%)",
      }}
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

      {/* HEADER */}
      <div
        className="fade-item mx-auto mb-12 flex max-w-5xl items-center justify-between border-y border-white/10 py-5"
      >

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-red-500" />

          <span
            className="font-mono text-[10px]
            uppercase tracking-[0.28em]
            text-red-400"
          >
            Careers Portal
          </span>

        </div>

        <span
          className="font-mono text-[10px]
          uppercase tracking-[0.24em]
          text-white/45"
        >
          Applications Open
        </span>

      </div>

      {/* FORM */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="fade-item relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#101010]/95 backdrop-blur-xl"
      >

        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div className="border-b border-white/10 lg:border-b-0 lg:border-r">

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
          <div className="flex flex-col justify-between bg-[#141414]">

            {/* TOP */}
            <div className="fade-item border-b border-white/10 p-8">

              <div className="flex items-center justify-between">

                <span
                  className="font-mono text-[10px]
                  uppercase tracking-[0.24em]
                  text-red-400"
                >
                  Resume Upload
                </span>

                <span className="text-xs text-white/20">
                  05
                </span>

              </div>

              <h3
                className="mt-8 text-4xl font-black
                leading-[0.95] tracking-[-0.05em]"
              >
                Upload your
                resume.
              </h3>

              <p
                className="mt-5 max-w-xs text-sm
                leading-7 text-white/55"
              >
                PDF, DOC or DOCX.
                Keep it concise and relevant.
              </p>

            </div>

            {/* DROPZONE */}
            <div className="fade-item flex-1 p-8">

              <label
                ref={uploadRef}
                htmlFor="resumeUpload"
                className="group flex h-full min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-[#1a1a1a] p-8 text-center transition duration-500 hover:border-red-500 hover:bg-[#202020]"
              >

                <UploadCloud
                  className="h-12 w-12 text-white/30 transition group-hover:text-red-400"
                />

                <p className="mt-8 text-xl font-medium text-white/85">

                  {resume
                    ? resume.name
                    : "Upload Resume"}

                </p>

                <p className="mt-3 text-sm text-white/40">
                  Drag & drop supported
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
                      borderColor: "#ef4444",
                      backgroundColor:
                        "rgba(239,68,68,0.08)",
                      duration: 0.4,
                    });

                  }}
                />

              </label>

            </div>

            {/* BUTTON */}
            <div className="fade-item border-t border-white/10 p-8">

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
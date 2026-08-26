"use client";
import Link from "next/link";
import { useState, useRef } from "react";
// import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [consentText, setConsentText] = useState("");
  const [consentValid, setConsentValid] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);
  const formRef = useRef(null);

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.subject) newErrors.subject = "Subject is required";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const faqData = [
    {
      question: "What additive manufacturing technologies do you offer?",
      answer: "We specialize exclusively in advanced industrial metal additive manufacturing technologies: DMLS (Direct Metal Laser Sintering) and LPBF (Laser Powder Bed Fusion). These technologies produce fully dense, high-integrity metal components with mechanical properties exceeding traditional castings."
    },
    {
      question: "What materials can you print with?",
      answer: "We print with high-performance engineering metal alloys including Titanium (Ti6Al4V), Stainless Steel (316L, 17-4PH), Aluminum (AlSi10Mg), Inconel (625, 718), and Cobalt-Chrome for aerospace, medical, and industrial applications."
    },
    {
      question: "What is the maximum build volume you support?",
      answer: "Our DMLS and LPBF metal additive systems support build volumes up to 250 x 250 x 325 mm for single-piece metal components, with segmented assembly options available for larger assemblies."
    },
    {
      question: "What tolerances can you achieve?",
      answer: "Our precision DMLS / LPBF systems achieve dimensional tolerances of ±0.05 mm to ±0.1 mm (or ±0.2%). For critical bearing or mating surfaces, precision CNC post-machining is available down to ±0.005 mm."
    }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus("loading");
    setSubmittedMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "production", sourcePage: "Contact Page" }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Unable to send message. Please try again.");
      }

      setStatus("success");
      setSubmittedMessage("Thank you for contacting Galactic 3D.\n\nYour submission has been received successfully.\n\nOur team will review your information and get back to you shortly via email, phone, or WhatsApp.");

      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });

      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.error("Contact submission error:", err);
      setStatus("error");
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen text-black bg-white relative overflow-hidden">
      {/* Main Content Layout */}
      <div className="container mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form Card */}
        <main
          id="contact-form"
          ref={formRef}
          className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-12 text-black">
              Send Us a Message
            </h2>

            {status === "success" ? (
              <div className="border border-emerald-500/30 bg-emerald-50/50 p-8 sm:p-10 rounded-2xl shadow-sm text-black space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-emerald-600 text-white rounded-full">
                    Direct Email Sent
                  </span>
                  <h3 className="text-2xl font-black mt-3 text-black">
                    Message Sent Directly to admin@galactic-3d.com
                  </h3>
                </div>

                <p className="text-black font-medium text-sm leading-relaxed">
                  Your inquiry has been logged and sent directly to <strong className="text-emerald-700 font-bold">admin@galactic-3d.com</strong>. Our engineering team will review your message and get back to you shortly.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-wider hover:bg-emerald-800 transition shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                className="space-y-10"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      className={`w-full bg-transparent border-b-2 ${
                        errors.name ? "border-red-600" : "border-black"
                      } py-3 text-black font-bold placeholder:text-gray-500 focus:outline-none focus:border-black transition`}
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                    />

                    {errors.name && (
                      <p className="text-red-600 text-xs mt-2 font-bold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                      Your Email *
                    </label>

                    <input
                      type="email"
                      id="email"
                      className={`w-full bg-transparent border-b-2 ${
                        errors.email ? "border-red-600" : "border-black"
                      } py-3 text-black font-bold placeholder:text-gray-500 focus:outline-none focus:border-black transition`}
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <p className="text-red-600 text-xs mt-2 font-bold">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      className="w-full bg-transparent border-b-2 border-black py-3 text-black font-bold placeholder:text-gray-500 focus:outline-none focus:border-black transition"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-transparent border-b-2 border-black py-3 text-black font-bold placeholder:text-gray-500 focus:outline-none focus:border-black transition"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                    Subject *
                  </label>

                  <input
                    type="text"
                    id="subject"
                    className={`w-full bg-transparent border-b-2 ${
                      errors.subject ? "border-red-600" : "border-black"
                    } py-3 text-black font-bold placeholder:text-gray-500 focus:outline-none focus:border-black transition`}
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={handleChange}
                  />

                  {errors.subject && (
                    <p className="text-red-600 text-xs mt-2 font-bold">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                    Message *
                  </label>

                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full bg-transparent border-b-2 ${
                      errors.message ? "border-red-600" : "border-black"
                    } py-3 text-black font-bold placeholder:text-gray-500 resize-none focus:outline-none focus:border-black transition`}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                  />

                  {errors.message && (
                    <p className="text-red-600 text-xs mt-2 font-bold">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submittedMessage && (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 text-[#111111] text-xs font-bold whitespace-pre-line shadow-sm my-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p>{submittedMessage}</p>
                  </div>
                )}

                {/* ALWAYS-VISIBLE SOLID BLACK SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-black px-10 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-lg transition duration-200 hover:bg-zinc-800 active:scale-95 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Response Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl border-t border-gray-200 pt-10"
          >
            <h3 className="text-xl font-bold uppercase text-black mb-3">
              Quick Response Guarantee
            </h3>

            <p className="text-black font-medium leading-relaxed">
              We typically respond to all inquiries within 24–48 hours during
              business days. For urgent matters please call us directly.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[480px] overflow-hidden rounded-2xl border border-gray-200 shadow-md"
          >
            {/* MAP EMBED - SINGLE GALACTIC 3D PIN LOCATION */}
            <iframe
              title="Galactic 3D Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.279644026365!2d77.70105927593685!3d13.014631313175855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a915ab800d%3A0x7b9df0b7c02a0008!2sGalactic-3D!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />

            {/* FLOATING LOCATION CARD */}
            <div className="absolute bottom-8 left-8 max-w-sm rounded-xl border border-gray-200 bg-white/95 backdrop-blur-xl p-6 shadow-xl text-black">
              <p className="text-xs tracking-[0.35em] uppercase text-black font-bold mb-2 font-mono">
                Visit Us
              </p>

              <h3 className="text-xl font-bold mb-2 text-black">
                Galactic 3D
              </h3>

              <p className="text-sm text-black font-medium leading-relaxed mb-4">
                Cambridge Institute of Technology<br />
                Krishnarajapuram, Bengaluru
              </p>

              <a
                href="https://maps.app.goo.gl/LHrfq9h8VYAn8i4v9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black bg-black text-white hover:bg-zinc-800 transition text-xs font-mono font-bold uppercase tracking-wider shadow-sm"
              >
                Get Directions →
              </a>
            </div>
          </motion.section>
        </main>

        {/* Contact Info Sidebar */}
        <aside className="order-1 lg:order-2 lg:col-span-1 lg:sticky lg:top-32 lg:self-start">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10 flex flex-col gap-8 shadow-md text-black"
          >
            {/* heading */}
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black">
                Contact
              </h2>

              <p className="text-black text-sm font-medium mt-2">
                Prefer reaching out directly? Here are other ways to connect.
              </p>
            </div>

            {/* CONTACT ITEMS */}
            <div className="flex flex-col divide-y divide-gray-200">
              {/* Location */}
              <a
                href="https://maps.app.goo.gl/LHrfq9h8VYAn8i4v9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-5"
              >
                <MapPinIcon className="w-6 h-6 text-black mt-1 shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-mono text-black font-bold mb-1">
                    Location
                  </p>

                  <p className="text-base text-black font-bold">
                    Bengaluru, India
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:8939058575"
                className="group flex items-start gap-4 py-5"
              >
                <PhoneIcon className="w-6 h-6 text-black mt-1 shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-mono text-black font-bold mb-1">
                    Phone
                  </p>

                  <p className="text-lg text-black font-bold hover:underline">
                    +91 97403 31995
                  </p>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/919740331995?text=Hello%20Galactic%203D%20team,%20I%20have%20a%20manufacturing%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-5"
              >
                <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#128C7E] font-bold mb-1">
                    WhatsApp Live
                  </p>

                  <p className="text-base text-black font-bold group-hover:text-[#128C7E] transition flex items-center gap-1.5">
                    +91 97403 31995 <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Chat Now</span>
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 py-5">
                <ClockIcon className="w-6 h-6 text-black mt-1 shrink-0" />

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-mono text-black font-bold mb-1">
                    Hours
                  </p>

                  <p className="text-base text-black font-bold">
                    Mon – Fri · 9:00 — 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:8939058575"
              className="group flex items-center justify-between px-6 py-4 rounded-full border border-black bg-black text-white hover:bg-zinc-800 transition shadow-md"
            >

              <span className="font-['dena'] tracking-wide">
                Call Support
              </span>

              <span className="group-hover:translate-x-1 transition">
                →
              </span>

            </a>


            {/* SOCIALS */}
            <div className="flex gap-4 pt-2">

              {/* <a
            href="#"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition"
          >
            <FaXTwitter className="text-white text-sm" />
          </a> */}

              <a
                href="https://www.linkedin.com/company/galactic-3d/posts/?feedView=all"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition"
              >
                <FaLinkedinIn className="text-white text-sm" />
              </a>

              <a
                href="https://www.instagram.com/galactic.3d/"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition"
              >
                <FaInstagram className="text-white text-sm" />
              </a>

            </div>

          </motion.div>
        </aside>
      </div>


      {/* FAQ Section with Accordion */}
      {/* <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-['dena'] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-['scrib'] text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-4"
        >
          
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                What materials do you work with?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 0 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 0 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                We work with a wide range of materials including various
                plastics (PLA, ABS, PETG, Nylon), resins, metals (aluminum,
                titanium, steel), and composites. The specific material choice
                depends on your project requirements and intended application.
                Our experts can help you select the best material for your
                specific needs.
              </div>
            </div>
          </div>

          
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                How long does the 3D printing process take?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 1 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 1 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                Project timelines vary based on complexity, size, and material.
                Simple prototypes can be completed in 1-3 days, while complex
                production parts may take 1-2 weeks. We'll provide a detailed
                timeline during your consultation and keep you updated
                throughout the process. For urgent projects, we also offer
                expedited services at an additional cost.
              </div>
            </div>
          </div>

          
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                Do you offer design services?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 2 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 2 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                Yes, our team of experienced designers can help bring your ideas
                to life. We offer comprehensive design services from concept
                development to CAD modeling and optimization for additive
                manufacturing. Whether you have a rough sketch or a detailed
                concept, we can transform it into a printable 3D model. Our
                design team specializes in creating functional, efficient, and
                aesthetically pleasing designs.
              </div>
            </div>
          </div>

          
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                What file formats do you accept?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 3 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 3 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                We accept most standard 3D file formats including STL, OBJ,
                STEP, IGES, and native CAD files from software like SolidWorks,
                Fusion 360, and AutoCAD. If you have a file in a different
                format, please contact us to discuss compatibility. Our
                email team can also help convert or repair files if
                needed.
              </div>
            </div>
          </div>

          
          <div className="bg-dark-200/80 rounded-xl overflow-hidden border border-dark-100">
            <button
              onClick={() => toggleAccordion(4)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-['dena']">
                Can you handle large production runs?
              </h3>
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  activeAccordion === 4 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === 4 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 font-['test']">
                Absolutely. Our facility is equipped for both small batch
                production and larger manufacturing runs. We'll work with you to
                determine the most efficient production method based on your
                quantity requirements. For high-volume production, we can
                develop a customized manufacturing plan that optimizes cost,
                reliability, and delivery time. We also offer inventory management
                and just-in-time production services for ongoing projects.
              </div>
            </div>
          </div>
        </motion.div>
      </div> */}

      <div className="container mx-auto px-6 mb-28">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-6xl font-['dena'] tracking-tight mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-400 font-['scrib'] max-w-2xl mx-auto">
            Everything you need to know about our additive manufacturing process.
          </p>

        </motion.div>


        {/* FAQ CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden"
        >


          {/* FAQ ITEM */}
          {faqData.map((faq, index) => (

            <div key={index} className="border-b border-white/10 last:border-none">

              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between px-8 py-7 text-left group"
              >

                <h3 className="text-xl md:text-2xl font-['dena'] tracking-tight group-hover:text-primary transition">
                  {faq.question}
                </h3>

                <span
                  className={`ml-6 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 transition
${activeAccordion === index ? "rotate-180 bg-white/10" : "group-hover:bg-white/5"}`}
                >

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>

                </span>

              </button>


              <div
                className={`grid transition-all duration-500 ease-in-out
${activeAccordion === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >

                <div className="overflow-hidden">

                  <div className="px-8 pb-8 text-gray-400 font-['scrib'] leading-relaxed max-w-3xl">
                    {faq.answer}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </motion.div>

      </div>

      {/* CTA Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary/80 to-secondary/80 py-16"
      >
        <div className="container mx-auto px-6 text-center">
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['test'] mb-8 text-white leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl font-['scrib'] mx-auto">
            Contact us today to discuss your needs and discover how our additive
            manufacturing solutions can benefit your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-primary hover:bg-gray-200 font-['dena'] py-4 px-10 rounded-xl text-lg inline-block shadow-lg transition-all duration-300 focus:ring-4 focus:ring-white/40 focus:outline-none active:scale-95 hover:shadow-white/40"
            >
              Explore Our Services
            </Link>
            <a
              href="#contact-form"
              className="bg-dark-400 hover:bg-dark-300 text-white font-['dena'] py-4 px-10 rounded-xl text-lg inline-block shadow-lg transition-all duration-300 focus:ring-4 focus:ring-dark-400/40 focus:outline-none active:scale-95 hover:shadow-dark-400/40"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </motion.div> */}

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s both;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 1s both;
        }
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-right {
          animation: slide-right 1s both;
        }
        @keyframes slide-right {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}

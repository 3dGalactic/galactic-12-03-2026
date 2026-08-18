import React from "react";
import CTA from "../components/CTA";
import styles from "./hiring.module.css";

const HiringPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-black to-dark-500 text-white font-['NeueMontreal'] relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 mb-16 flex flex-col items-center justify-center text-center animate-fade-in">
        <h1 className="text-xl sm:text-2xl md:text-3xl drop-shadow-xl tracking-tight leading-tight animate-slide-down">
          Shape the Future of{" "}
          <span className={styles.primaryColor}>Manufacturing</span> With Us
        </h1>
        <p className="text-base sm:text-lg md:text-2xl pt-4 text-gray-300 max-w-3xl font-['test'] mx-auto animate-fade-in delay-200">
          We’re building the future of additive manufacturing one layer at a
          time. You think you got something to contribute?
        </p>
      </div>

      <div className="container mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <main className="order-2 lg:order-1 lg:col-span-2 flex flex-col gap-12">
          <div className="bg-background/90 p-10 rounded-3xl shadow-2xl animate-fade-in-up border border-dark-200 hover:shadow-primary/30 transition-all duration-300">
            <h2 className="heading-2  drop-shadow-lg animate-slide-right mb-8">
              Apply <span className={styles.primaryColor}>Now</span>
            </h2>
            <form className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-semibold text-gray-300 mb-2"
                    style={{ fontFamily: "NeueMontreal, new, sans-serif" }}
                  >
                    Your Name<span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    aria-required="true"
                    className={`w-full bg-black/80 border border-gray-700 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-gray-300 mb-2"
                    style={{ fontFamily: "NeueMontreal, new, sans-serif" }}
                  >
                    Your Email<span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    aria-required="true"
                    className={`w-full bg-black/80 border border-gray-700 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-base font-semibold text-gray-300 mb-2"
                  style={{ fontFamily: "NeueMontreal, new, sans-serif" }}
                >
                  LinkedIn<span className="text-primary">*</span>
                </label>
                <input
                  type="url"
                  id="linkedin"
                  aria-required="true"
                  className={`w-full bg-black/80 border border-gray-700 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10`}
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-base font-semibold text-gray-300 mb-2"
                  style={{ fontFamily: "NeueMontreal, new, sans-serif" }}
                >
                  Portfolio
                </label>
                <input
                  type="url"
                  id="portfolio"
                  className="w-full bg-black/80 border border-gray-700 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                  placeholder="https://your-portfolio.com"
                />
              </div>
              <div>
                <label
                  htmlFor="github"
                  className="block text-base font-semibold text-gray-300 mb-2"
                  style={{ fontFamily: "NeueMontreal, new, sans-serif" }}
                >
                  GitHub (Optional)
                </label>
                <input
                  type="url"
                  id="github"
                  className="w-full bg-black/80 border border-gray-700 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10"
                  placeholder="https://github.com/johndoe"
                />
              </div>
              <div>
                <label
                  htmlFor="why"
                  className="block text-base font-semibold text-gray-300 mb-2"
                  style={{ fontFamily: "NeueMontreal, new, sans-serif" }}
                >
                  Why do you want to join?
                  <span className="text-primary">*</span>
                </label>
                <textarea
                  id="why"
                  rows="6"
                  aria-required="true"
                  className={`w-full bg-black/80 border border-gray-700 rounded-lg py-4 px-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-primary/10 resize-none`}
                  placeholder="Tell us why you're a great fit..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-primary/40 focus:outline-none active:scale-95 hover:shadow-primary/40`}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </main>
        <aside className="order-1 lg:order-2 lg:col-span-1 space-y-8 lg:sticky lg:top-32 lg:self-start animate-slide-left">
          <div className="bg-dark-200/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-8">
             <h2 className="text-xl sm:text-2xl md:text-3xl drop-shadow-xl tracking-tight leading-tight animate-slide-down">
              Why <span className={styles.primaryColor}>Work With Us?</span>
            </h2>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <p>Mission-driven work</p>
              </div>
              <div className={styles.benefit}>
                <p>Rapidly growing industry</p>
              </div>
              <div className={styles.benefit}>
                <p>Impactful tech (3D printing, CAD, automation)</p>
              </div>
              <div className={styles.benefit}>
                <p>Small team = more ownership</p>
              </div>
              <div className={styles.benefit}>
                <p>Flat hierarchy / direct mentorship</p>
              </div>
              <div className={styles.benefit}>
                <p>Hybrid or remote flexibility</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <CTA />
    </div>
  );
};

export default HiringPage;

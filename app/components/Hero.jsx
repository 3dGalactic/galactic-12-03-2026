"use client";
import AnimatedText from "./AnimatedText";
import AnimatedButton from "./AnimatedButton";
import AnimatedWord from "./AnimatedWord";

const headline1 = "Unleash";
const headline1Orange = " Innovation";
const headline2 = "with";
const headline2Orange = " 3D Printing";
const sub = "Transforming ideas into reality with cutting-edge";
const subb = "additive manufacturing for every industry.";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Text (Visible on md and up) */}
          <div className="hidden md:block">
            <AnimatedText
              text1={headline1}
              text2={headline1Orange}
              css="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-xl font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal tracking-tight"
            />
            <AnimatedText
              text1={headline2}
              text2={headline2Orange}
              css="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-xl font-['MonumentExtended'] bg-clip-text text-transparent bg-gradient-metal tracking-tight"
            />
          </div>

          {/* Static Text (Visible below md) */}
          <div className="block md:hidden">
            <h1 className="text-3xl font-extrabold  text-white leading-tight text-center font-['MonumentExtended'] tracking-tight">
              {headline1}
              <span className="text-primary">{headline1Orange}</span>
            </h1>
            <h1 className="text-3xl font-extrabold mb-4 text-white leading-tight text-center font-['MonumentExtended'] tracking-tight">
              {headline2}
              <span className="text-primary">{headline2Orange}</span>
            </h1>
          </div>

          <AnimatedWord
            word1={sub}
            word2={subb}
            css="text-xl md:text-3xl text-gray-200 mb-10 max-w-lg mx-auto font-medium font-['NeueMontreal'] animate-fade-in-up"
          />

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
            <AnimatedButton
              href="/services"
              css="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg transition duration-100 group relative overflow-hidden hover:cursor-pointer"
              content="Explore Services"
            />

            <AnimatedButton
              href="/contact"
              css="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg transition duration-100 group relative overflow-hidden"
              content="Contact Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
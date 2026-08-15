import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TitliLogo from './TitliLogo';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-wash"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-titli-lavender/40 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-titli-pink/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-titli-aqua/25 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-32 right-1/4 w-64 h-64 bg-titli-peach/25 rounded-full blur-[90px] animate-float" />

      {/* Butterfly flight path SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-50 600 C 200 500, 300 700, 500 550 S 800 400, 1000 500 S 1300 600, 1500 450"
          stroke="url(#flightGrad)"
          strokeWidth="2"
          strokeDasharray="6 8"
          fill="none"
          className="animate-draw-line"
        />
        <defs>
          <linearGradient id="flightGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9DDF7" />
            <stop offset="0.25" stopColor="#F2B6C8" />
            <stop offset="0.5" stopColor="#F7C9A5" />
            <stop offset="0.75" stopColor="#F6D58A" />
            <stop offset="1" stopColor="#A9DCD5" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <h1 className="font-serif font-bold text-titli-plum dark:text-titli-warm-white leading-[1.1] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-balance">
              Where Ideas
              <br />
              <span className="butterfly-text">Take Flight.</span>
            </h1>

            <p className="mt-6 font-sans text-xl text-titli-plum-deep dark:text-titli-warm-white/80 tracking-wide font-medium">
              Sustainable Events &amp; Giftings
            </p>

            <p className="mt-4 text-lg text-titli-charcoal dark:text-titli-warm-white/70 max-w-lg leading-relaxed text-balance">
              Thoughtfully crafted experiences, designed to be remembered —
              where every detail blooms with intention and every celebration
              carries a story.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-titli-plum to-titli-plum-deep text-titli-warm-white font-sans text-sm font-semibold tracking-wide rounded-sm hover:from-titli-pink hover:to-titli-peach hover:text-titli-plum-deep transition-all duration-500 shadow-xl shadow-titli-plum/30 hover:shadow-titli-pink/40"
              >
                Explore Our Work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-titli-plum/30 text-titli-plum dark:text-titli-warm-white dark:border-titli-warm-white/30 font-sans text-sm font-semibold tracking-wide rounded-sm hover:border-titli-plum dark:hover:border-titli-pink hover:bg-titli-lavender/30 dark:hover:bg-titli-pink/10 transition-all duration-400"
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>

          {/* Right: image with butterfly frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-[300px] lg:max-w-[360px]">
              {/* Unique Stylized Logo Container */}
              <div className="relative aspect-square w-full mx-auto flex items-center justify-center">
                
                {/* Animated Outer Rings */}
                <div className="absolute -inset-4 sm:-inset-6 border-[2px] border-dashed border-titli-coral/60 dark:border-titli-coral/30 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute -inset-1 sm:-inset-2 border-[1px] border-titli-plum/50 dark:border-titli-plum/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
                
                {/* Glowing Background Orbs */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-titli-coral to-titli-pink rounded-full blur-3xl opacity-60 animate-pulse-slow" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-titli-lavender to-titli-plum rounded-full blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }} />

                {/* Glassmorphism Main Card */}
                <div className="relative w-full h-full rounded-full p-2 sm:p-3 bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(107,33,85,0.3)] z-10 flex items-center justify-center group hover:shadow-[0_30px_60px_-15px_rgba(107,33,85,0.4)] transition-all duration-700 ease-out">
                  
                  {/* Inner Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center">
                    <img
                      src="./logo.jpeg"
                      alt="Titli Logo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      loading="eager"
                    />
                    
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-titli-plum/20 rounded-full mix-blend-multiply" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

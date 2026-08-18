import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Lottie } from 'lottie-react';
import TitliLogo from './TitliLogo';

const LottieButterfly = ({
  animationPath,
  delay = 0,
  className = "",
  duration = 10,
  scale = 1,
  moveX = [0, 25, -15, 20, 0],
  moveY = [0, -25, 20, -15, 0],
}: {
  animationPath: string;
  delay?: number;
  className?: string;
  duration?: number;
  scale?: number;
  moveX?: number[];
  moveY?: number[];
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [dodgeOffset, setDodgeOffset] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load: " + res.status);
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Error loading Lottie:', err));
  }, [animationPath]);

  const butterflyRef = useRef<HTMLDivElement>(null);
  const isDodging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!butterflyRef.current || isDodging.current) return;
      const rect = butterflyRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      if (dist < 80) { // Dodge when cursor is within 80px
        isDodging.current = true;
        // Calculate angle away from cursor
        const angle = Math.atan2(centerY - e.clientY, centerX - e.clientX);
        const distance = 100 + Math.random() * 50;
        setDodgeOffset({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setDodgeOffset({ x: 0, y: 0 });
          setTimeout(() => { isDodging.current = false; }, 800);
        }, 1500);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={butterflyRef}
      className={`absolute z-[100] pointer-events-none ${className}`}
      style={{ width: 150, height: 150 }}
      animate={{ x: dodgeOffset.x, y: dodgeOffset.y }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <motion.div
        className="w-full h-full pointer-events-none"
        style={{ scale }}
        animate={{
          x: moveX,
          y: moveY,
          rotate: [0, 20, -15, 15, 0],
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay,
        }}
      >
        {animationData ? (
          <Lottie src={animationData} loop={true} autoplay={true} style={{ width: '100%', height: '100%' }} />
        ) : null}
      </motion.div>
    </motion.div>
  );
};


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
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left"
          >
            <h1 className="font-serif font-bold text-titli-plum dark:text-titli-warm-white leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Where emotions
              <br />
              take a <span className="butterfly-text">colourful flight</span>
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
            className="order-1 lg:order-2 lg:col-span-5 w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-[300px] lg:max-w-[360px]">
              {/* Unique Stylized Logo Container */}
              <div className="relative aspect-square w-full mx-auto flex items-center justify-center">

                {/* Lottie Butterflies around the logo */}
                {/* Type A */}
                <LottieButterfly animationPath="/Butterfly Lottie Animation (1).json" className="-top-8 -left-6" delay={1.2} duration={24} scale={0.45} moveX={[0, -60, -30, -80, 0]} moveY={[0, -40, -70, -20, 0]} />
                <LottieButterfly animationPath="/Butterfly Lottie Animation (1).json" className="top-1/3 -right-12" delay={4.2} duration={28} scale={0.5} moveX={[0, 60, 100, 40, 0]} moveY={[0, 80, -60, 50, 0]} />
                <LottieButterfly animationPath="/Butterfly Lottie Animation (1).json" className="-bottom-4 -left-10" delay={1.8} duration={26} scale={0.4} moveX={[0, -70, -40, -90, 0]} moveY={[0, 50, 80, 30, 0]} />

                {/* Type B */}
                <LottieButterfly animationPath="/Butterfly Lottie Animation (2).json" className="-top-12 left-1/3" delay={3.1} duration={27} scale={0.55} moveX={[0, -80, 60, -40, 0]} moveY={[0, -60, -90, -30, 0]} />
                <LottieButterfly animationPath="/Butterfly Lottie Animation (2).json" className="-bottom-6 -right-6" delay={2.4} duration={25} scale={0.45} moveX={[0, 50, 90, 30, 0]} moveY={[0, 60, 100, 40, 0]} />
                <LottieButterfly animationPath="/Butterfly Lottie Animation (2).json" className="top-1/2 -left-12" delay={6.2} duration={29} scale={0.5} moveX={[0, -80, -40, -100, 0]} moveY={[0, -60, 70, -40, 0]} />

                {/* Type C */}
                <LottieButterfly animationPath="/Butterfly Lottie Animation.json" className="-top-4 -right-8" delay={0.5} duration={26} scale={0.4} moveX={[0, 60, 90, 40, 0]} moveY={[0, -50, -80, -30, 0]} />
                <LottieButterfly animationPath="/Butterfly Lottie Animation.json" className="-bottom-10 left-1/3" delay={5.5} duration={24} scale={0.55} moveX={[0, 70, -60, 40, 0]} moveY={[0, 60, 100, 40, 0]} />
                <LottieButterfly animationPath="/Butterfly Lottie Animation.json" className="top-2/3 right-2" delay={3.8} duration={28} scale={0.45} moveX={[0, 70, 40, 90, 0]} moveY={[0, 50, -30, 60, 0]} />

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
                    <video
                      src="/logo-video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
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

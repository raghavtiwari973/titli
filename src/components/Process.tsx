import { Search, Palette, Scissors, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const stages = [
  {
    number: '01',
    title: 'Discover',
    icon: Search,
    text: 'We listen to your story, your vision, and the feeling you want to leave behind.',
    color: '#D9DDF7',
    textColor: 'text-titli-plum',
  },
  {
    number: '02',
    title: 'Create',
    icon: Palette,
    text: 'Mood boards, palettes, and concepts take shape — your idea gains its wings.',
    color: '#F2B6C8',
    textColor: 'text-titli-plum',
  },
  {
    number: '03',
    title: 'Craft',
    icon: Scissors,
    text: 'Every detail is handmade, sourced, and assembled with meticulous care.',
    color: '#F7C9A5',
    textColor: 'text-titli-plum',
  },
  {
    number: '04',
    title: 'Celebrate',
    icon: Sparkles,
    text: 'We bring it to life on the day, so you can be fully present in the moment.',
    color: '#A9DCD5',
    textColor: 'text-titli-plum',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-28 lg:py-36 bg-titli-warm-white dark:bg-titli-charcoal overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="font-serif text-5xl lg:text-7xl text-titli-plum dark:text-titli-warm-white font-bold leading-[1.1] tracking-tight text-balance">
            The Flight Path
          </h2>
          <p className="mt-4 text-lg text-titli-charcoal dark:text-titli-warm-white/80 leading-relaxed">
            From the first conversation to the final celebration, every project
            follows a gentle, deliberate journey.
          </p>
        </motion.div>

        {/* Flight path */}
        <div className="relative">
          {/* Gradient connecting line (desktop) */}
          <svg
            className="hidden lg:block absolute top-[60px] left-0 w-full h-4"
            viewBox="0 0 1200 12"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M60 6 C 250 2, 350 10, 460 6 S 700 2, 830 6 S 1050 10, 1140 6"
              stroke="url(#processLine)"
              strokeWidth="2.5"
              strokeDasharray="5 6"
              fill="none"
            />
            <defs>
              <linearGradient id="processLine" x1="0" y1="0" x2="1200" y2="0">
                <stop stopColor="#D9DDF7" />
                <stop offset="0.33" stopColor="#F2B6C8" />
                <stop offset="0.66" stopColor="#F7C9A5" />
                <stop offset="1" stopColor="#A9DCD5" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative text-center lg:text-left"
                >
                  {/* Node */}
                  <div className="flex lg:justify-start justify-center mb-6">
                    <div
                      className="relative w-30 h-30 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        backgroundColor: stage.color,
                        width: '120px',
                        height: '120px',
                      }}
                    >
                      {/* Outer glow */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
                        style={{ backgroundColor: stage.color }}
                      />
                      {/* Inner circle */}
                      <div className="absolute inset-3 rounded-full bg-white/40 flex items-center justify-center backdrop-blur-md border border-white/50 shadow-inner">
                        <Icon size={28} className={stage.textColor} />
                      </div>
                      {/* Ring */}
                      <div className="absolute -inset-1 rounded-full border border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Number */}
                  <span
                    className="font-serif text-6xl font-bold block mb-2 opacity-20 dark:opacity-40"
                    style={{ color: stage.color === '#D9DDF7' ? '#743D61' : '#743D61' }}
                  >
                    {stage.number}
                  </span>

                  <h3 className="font-serif text-3xl text-titli-plum dark:text-titli-warm-white font-semibold mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-titli-charcoal dark:text-titli-warm-white/70 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                    {stage.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

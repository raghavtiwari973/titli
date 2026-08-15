import { Leaf, Recycle, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Leaf,
    title: 'Locally Sourced',
    text: 'Seasonal florals and materials from regional growers, reducing travel footprints and supporting local craft.',
    accent: 'text-titli-aqua',
    bg: 'bg-titli-aqua-soft',
    darkBg: 'dark:bg-titli-aqua/20',
  },
  {
    icon: Recycle,
    title: 'Zero-Waste Design',
    text: 'Reusable installations, compostable decor, and thoughtful repurposing — beauty that leaves no trace.',
    accent: 'text-titli-sky',
    bg: 'bg-titli-lavender-soft',
    darkBg: 'dark:bg-titli-sky/20',
  },
  {
    icon: HeartHandshake,
    title: 'Ethical Giftings',
    text: 'Handcrafted gifts from women-led artisan collectives, fair-trade suppliers, and sustainable makers.',
    accent: 'text-titli-coral',
    bg: 'bg-titli-pink-soft',
    darkBg: 'dark:bg-titli-coral/20',
  },
];

export default function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-[#E6F4F1] via-[#EEF0FB] to-[#FAF6F0] dark:from-[#2a3036] dark:via-[#2c2d3a] dark:to-[#222125] transition-colors duration-500"
    >
      {/* Decorative blob */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-titli-aqua/20 dark:bg-titli-aqua/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-titli-aqua/30 to-titli-lavender/30 rounded-lg blur-md" />
              <div className="relative rounded-lg overflow-hidden border-2 border-titli-aqua/30 dark:border-titli-aqua/10 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4467142/pexels-photo-4467142.jpeg?auto=compress&cs=tinysrgb&h=800&w=700"
                  alt="Sustainable floral arrangement"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-2xl border border-white/60 dark:border-white/10 max-w-[220px] backdrop-blur-md bg-white/30 dark:bg-black/30 animate-float-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-titli-aqua animate-pulse" />
                  <span className="text-[10px] tracking-widest uppercase text-titli-charcoal dark:text-titli-warm-white/60 font-semibold">
                    Our Pledge
                  </span>
                </div>
                <p className="font-serif text-xl text-titli-plum dark:text-titli-warm-white font-bold leading-snug">
                  90% of our decor is reused or composted.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >

            <h2 className="font-serif text-5xl lg:text-7xl text-titli-plum dark:text-titli-warm-white font-bold leading-[1.1] tracking-tight text-balance mb-6">
              Beautiful Can Be
              <br />
              <span className="text-titli-plum-deep dark:text-titli-aqua">Responsible.</span>
            </h2>
            <p className="text-lg text-titli-charcoal dark:text-titli-warm-white/80 leading-relaxed mb-10 max-w-lg">
              We believe celebration and care for the earth are not at odds.
              Every choice — from the flowers on the table to the ribbon on a
              gift — is made with intention, proving that sustainability and
              sophistication belong together.
            </p>

            <div className="space-y-5">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    key={value.title}
                    className="group flex items-start gap-5 p-5 rounded-lg bg-titli-warm-white/60 dark:bg-titli-charcoal/40 border border-titli-lavender/20 dark:border-titli-warm-white/10 hover:border-titli-aqua/40 dark:hover:border-titli-aqua/40 hover:bg-titli-warm-white dark:hover:bg-titli-charcoal transition-all duration-400"
                  >
                    <div
                      className={`relative flex-shrink-0 w-12 h-12 ${value.bg} ${value.darkBg} rounded-lg flex items-center justify-center ${value.accent} group-hover:scale-110 transition-all duration-500`}
                    >
                      <div className={`absolute inset-0 ${value.bg} ${value.darkBg} rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-500`} />
                      <Icon size={22} className="relative z-10" />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl text-titli-plum dark:text-titli-warm-white font-semibold mb-1">
                        {value.title}
                      </h3>
                      <p className="text-titli-charcoal dark:text-titli-warm-white/70 text-sm leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

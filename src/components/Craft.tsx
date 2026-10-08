import { motion } from 'framer-motion';

const craftImages = [
  {
    src: '/10.jpeg',
    alt: 'Hand-painted art and canvases',
    label: 'The Canvas',
  },
  {
    src: '/13.jpeg',
    alt: 'Intricate floral and basket arrangement',
    label: 'The Craft',
  },
  {
    src: '/8.jpeg',
    alt: 'Vibrant marigold detailing and patterns',
    label: 'The Detail',
  },
  {
    src: '/14.jpeg',
    alt: 'Celestial canopy and starry lights',
    label: 'The Ambience',
  },
];

export default function Craft() {
  return (
    <section
      id="craft"
      className="relative py-24 lg:py-32 bg-titli-warm-white dark:bg-titli-charcoal overflow-hidden transition-colors duration-500"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-titli-lavender/20 dark:bg-titli-lavender/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-serif text-5xl lg:text-7xl text-titli-plum dark:text-titli-warm-white font-bold leading-[1.1] tracking-tight mb-6">
            The Art of Intentional Design
          </h2>
          <p className="text-lg text-titli-charcoal dark:text-titli-warm-white/80 leading-relaxed">
            We source responsibly, repurpose creatively, and design with a
            conscience. Our craft is rooted in the belief that beauty should
            never cost the earth.
          </p>
        </motion.div>

        {/* Image Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {craftImages.map((img, index) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="h-full"
            >
              <div className="group flex flex-col bg-white dark:bg-[#1f1e21] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-white/10 h-full">
                <div className="relative aspect-[4/5] sm:aspect-square p-2 bg-white dark:bg-[#1f1e21] flex items-center justify-center overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-4 border-t border-gray-50 dark:border-white/5 flex flex-col flex-grow text-left bg-gray-50/50 dark:bg-black/10">
                  <h3 className="font-sans text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium line-clamp-2 group-hover:text-titli-plum transition-colors">
                    {img.label}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="w-12 h-px bg-butterfly-gradient mx-auto mb-6" />
            <p className="font-serif text-3xl lg:text-4xl text-titli-plum font-medium leading-relaxed text-balance italic">
              "The butterfly does not count its wings —
              <br />
              it simply flies."
            </p>
            <p className="mt-4 text-sm tracking-[0.2em] uppercase text-titli-gold">
              — The Titli Philosophy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

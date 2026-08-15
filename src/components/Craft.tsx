import { motion } from 'framer-motion';

const craftImages = [
  {
    src: 'https://images.pexels.com/photos/7340413/pexels-photo-7340413.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Elegant gift wrapping with lace flower',
    label: 'The Gifting',
  },
  {
    src: 'https://images.pexels.com/photos/4614251/pexels-photo-4614251.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Wooden spools with colorful threads',
    label: 'The Texture',
  },
  {
    src: 'https://images.pexels.com/photos/35316350/pexels-photo-35316350.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    alt: 'Hands crafting with fabric and ribbon',
    label: 'The Hand',
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

        {/* Triptych Image Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-center">
          {craftImages.map((img, index) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-sm overflow-hidden group cursor-pointer ${index === 1 ? 'md:mt-12' : ''}`}
            >
              {/* Offset frame */}
              <div
                className={`absolute -inset-2 rounded-lg ${index === 0
                    ? 'bg-titli-peach/30'
                    : index === 1
                      ? 'bg-titli-pink/30'
                      : 'bg-titli-gold/20'
                  } transition-transform duration-500 group-hover:-rotate-2`}
              />
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titli-plum/80 via-titli-plum/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <span className="font-serif text-3xl text-titli-warm-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    {img.label}
                  </span>
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

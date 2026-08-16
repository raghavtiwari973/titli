import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const gifts = [
  {
    id: 1,
    title: 'Eco-Friendly Tote Bags',
    description: 'Reusable and stylish bags made from organic cotton and jute.',
    image: 'https://images.pexels.com/photos/7048033/pexels-photo-7048033.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  },
  {
    id: 2,
    title: 'Handcrafted Diaries',
    description: 'Beautiful journals made from recycled paper and bound with love.',
    image: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  },
  {
    id: 3,
    title: 'Plantable Stationery',
    description: 'Seed pens and pencils that grow into plants after use.',
    image: 'https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  },
  {
    id: 4,
    title: 'Bamboo & Cork Essentials',
    description: 'Sustainable alternatives for everyday use, crafted by artisans.',
    image: 'https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
  },
];

export default function SustainableGifting() {
  return (
    <section className="py-24 bg-titli-warm-white dark:bg-[#222125] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="text-titli-coral" size={24} />
            <p className="text-xs tracking-[0.2em] uppercase text-titli-coral font-semibold">
              Conscious Choices
            </p>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-titli-plum dark:text-titli-warm-white font-bold mb-6">
            Sustainable Gifting
          </h2>
          <p className="text-titli-charcoal/80 dark:text-titli-warm-white/70 max-w-2xl mx-auto text-lg">
            Meaningful gifts that care for the planet. From upcycled bags to handmade diaries, explore our curated collection of eco-friendly tokens of love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-titli-plum/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-titli-plum dark:text-titli-warm-white font-semibold mb-2 group-hover:text-titli-coral transition-colors duration-300">
                  {gift.title}
                </h3>
                <p className="text-sm text-titli-charcoal/70 dark:text-titli-warm-white/60">
                  {gift.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

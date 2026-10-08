import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, ArrowRight } from 'lucide-react';

const gifts = [
  { id: 1, title: 'Rattan Storage Boxes with Cane Lid', description: '', image: 'https://i.pinimg.com/1200x/2d/c9/4d/2dc94d193d543d9506ec0b2328e9edf9.jpg' },
  { id: 2, title: 'Cane Rattan Handbag', description: '', image: 'https://i.pinimg.com/1200x/40/f4/82/40f482088b58673c247199eb1b5d2ba0.jpg' },
  { id: 3, title: 'Round Rattan Storage Box with Lid', description: '', image: 'https://i.pinimg.com/1200x/9a/49/d3/9a49d35d0bf107ec3d8f327f0556d0d3.jpg' },
  { id: 4, title: 'Oval Cane Basket with Handle', description: '', image: 'https://i.pinimg.com/1200x/5d/b4/36/5db4368fb3b8f0c1f312570b699f67c4.jpg' },
  { id: 5, title: 'Shallow Oval Rattan Basket', description: '', image: 'https://i.pinimg.com/1200x/4b/3a/19/4b3a19cc7d2ab66016fac430e8b2cc95.jpg' },
  { id: 6, title: 'Colored Rattan Basket Collection', description: '', image: 'https://i.pinimg.com/1200x/ed/7e/e7/ed7ee727ded02b48bdeecc038b10643e.jpg' },
  { id: 7, title: 'Large Cane Serving Basket with Handles', description: '', image: 'https://i.pinimg.com/1200x/01/69/78/0169789174e7f2ed95f37d63d6514646.jpg' },
  { id: 8, title: 'Handwoven Bamboo Planter Basket', description: '', image: 'https://i.pinimg.com/1200x/22/73/5a/22735a86ccf99a9ed1777c8f575e48db.jpg' },
  { id: 9, title: 'Round Bamboo Tray Set', description: '', image: 'https://i.pinimg.com/736x/7a/b3/2d/7ab32dc7b1c2b4758a00c9cdb639b87d.jpg' },
  { id: 10, title: 'Bamboo Basket with Dome Lid', description: '', image: 'https://i.pinimg.com/736x/31/d1/f3/31d1f3b9bb1ce10a7e256b700098bbd0.jpg' },
  { id: 11, title: 'Rectangular Cane Serving Tray', description: '', image: 'https://i.pinimg.com/1200x/6d/89/aa/6d89aab8802035b1e4540ae2553a4104.jpg' },
  { id: 12, title: 'Rectangular Bamboo Basket with Handle', description: '', image: 'https://i.pinimg.com/1200x/97/c9/2b/97c92b7eea967613df27f3a06348395d.jpg' },
  { id: 13, title: 'Rattan Storage Box with Drawer', description: '', image: 'https://i.pinimg.com/736x/7a/71/4b/7a714bc1ef967974244dc3263d6a3031.jpg' },
  { id: 14, title: 'Bamboo Storage Organizer Box', description: '', image: 'https://i.pinimg.com/1200x/e3/3a/b4/e33ab4daeac1c36d9e6b1811b48f4992.jpg' },
  { id: 15, title: 'Hanging Bamboo Wall Planter', description: '', image: 'https://i.pinimg.com/736x/4a/23/20/4a2320ba4fffa7913f425eab86d0b690.jpg' },
  { id: 16, title: 'Round Divided Rattan Serving Tray', description: '', image: 'https://i.pinimg.com/736x/33/5c/40/335c40379131cc17bcf1ba95ca2b81d8.jpg' },
  { id: 17, title: 'Stackable Round Bamboo Trays', description: '', image: 'https://i.pinimg.com/1200x/67/69/6e/67696e92594429ee1599f899c8ddf84f.jpg' },
  { id: 18, title: 'Bamboo Organizer Box with Compartments and Drawer', description: '', image: 'https://i.pinimg.com/1200x/55/59/fe/5559fe041d3b826f7ebd1ee39194abe5.jpg' },
  { id: 19, title: 'Round Woven Bamboo Serving Tray', description: '', image: 'https://i.pinimg.com/736x/a0/ef/80/a0ef8099e50a9b3cdd0fa7b2142fdfd5.jpg' },
  { id: 20, title: 'Handwoven Bamboo Basket with Handle', description: '', image: 'https://i.pinimg.com/736x/33/e3/ea/33e3ea09d802eba85b980aa405547684.jpg' },
  { id: 21, title: 'Essential Hamper', description: '', image: '/1.png' },
  { id: 22, title: 'Premium Hamper', description: '', image: '/2.png' },
  { id: 23, title: 'Luxury Hamper', description: '', image: '/3.png' },
  { id: 24, title: 'Plant Lover Hamper', description: '', image: '/4.png' },
  { id: 25, title: 'Wellness Hamper', description: '', image: '/5.png' },
  { id: 26, title: 'Desi Diwali Hamper', description: '', image: '/6.png' },
  { id: 27, title: 'Commute Kit', description: '', image: '/7.png' },
  { id: 28, title: 'Zero Waste Hamper', description: '', image: '/8.png' },
  { id: 29, title: 'Artisan Hamper', description: '', image: '/9.png' },
  { id: 30, title: 'Sweet Indulgence Hamper', description: '', image: '/10.png' },
];

const ProductCard = ({ gift }: { gift: typeof gifts[0] }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-500 bg-titli-lavender/10">
    {gift.image ? (
      <img
        src={gift.image}
        alt={gift.title}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    ) : (
      <div className="text-titli-plum/30 flex flex-col items-center py-24">
        <Gift size={48} className="mb-2 group-hover:scale-110 transition-transform duration-500" />
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
      <h3 className="font-serif text-xl text-white font-semibold mb-2 group-hover:text-titli-coral transition-colors duration-300 drop-shadow-md text-center">
        {gift.title}
      </h3>
      {gift.description && (
        <p className="text-sm text-white/90 text-center drop-shadow-md">
          {gift.description}
        </p>
      )}
    </div>
  </div>
);

const SmallProductCard = ({ gift }: { gift: typeof gifts[0] }) => (
  <div className="group flex flex-col bg-white dark:bg-[#1f1e21] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-white/10 h-full">
    <div className="relative aspect-[4/5] sm:aspect-square p-2 bg-white dark:bg-[#1f1e21] flex items-center justify-center overflow-hidden">
      {gift.image ? (
        <img
          src={gift.image}
          alt={gift.title}
          className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      ) : (
        <Gift size={48} className="text-gray-300" />
      )}
    </div>
    <div className="p-3 md:p-4 border-t border-gray-50 dark:border-white/5 flex flex-col flex-grow text-left bg-gray-50/50 dark:bg-black/10">
      <h3 className="font-sans text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium line-clamp-2 group-hover:text-titli-plum transition-colors">
        {gift.title}
      </h3>
      {gift.description ? (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{gift.description}</p>
      ) : (
        <p className="text-xs text-titli-plum dark:text-titli-plum-light mt-1 font-medium">View details</p>
      )}
    </div>
  </div>
);

export default function SustainableGifting() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen && e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <section className="py-24 bg-titli-warm-white dark:bg-[#222125] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-titli-plum dark:text-titli-warm-white font-bold mb-6">
            Sustainable Gifting
          </h2>
          <p className="text-titli-charcoal/80 dark:text-titli-warm-white/70 max-w-2xl mx-auto text-lg">
            Meaningful gifts that care for the planet. Explore our curated collection of eco-friendly tokens of love.
          </p>
        </motion.div>

        {/* Main Page Grid (Only 3 items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {gifts.slice(0, 3).map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SmallProductCard gift={gift} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-titli-plum text-titli-warm-white rounded-full hover:bg-titli-plum-deep transition-colors duration-300 font-serif text-lg group shadow-xl shadow-titli-plum/20"
          >
            View Entire Collection
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Collection Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-titli-warm-white dark:bg-[#222125] w-full max-w-7xl max-h-[90vh] rounded-3xl flex flex-col shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 md:px-10 md:py-8 border-b border-titli-charcoal/10 dark:border-white/10 flex justify-between items-center bg-titli-warm-white dark:bg-[#222125] z-10 shrink-0">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-titli-plum dark:text-titli-warm-white font-bold">
                    Sustainable Collection
                  </h2>
                  <p className="text-titli-charcoal/60 dark:text-white/50 text-sm mt-1">
                    Showing all {gifts.length} products
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 rounded-full hover:bg-titli-plum/10 dark:hover:bg-white/10 transition-colors text-titli-charcoal dark:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 md:p-10 overflow-y-auto">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
                  {gifts.map((gift) => (
                    <div key={gift.id} className="break-inside-avoid mb-8">
                      <ProductCard gift={gift} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

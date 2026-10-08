import { useState, useEffect } from 'react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  frameColor: string;
  bgColor: string;
  shadowColor: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Garden of Whispers',
    category: 'Wedding',
    description: 'A floral dreamscape woven into an intimate evening celebration.',
    image: '/1.jpeg',
    frameColor: 'border-titli-lavender/50',
    bgColor: 'bg-titli-lavender-soft',
    shadowColor: 'group-hover:shadow-titli-lavender/40',
  },
  {
    id: '02',
    title: 'The Amber Banquet',
    category: 'Corporate Gala',
    description: 'Warm tones and candlelight for an unforgettable year-end gathering.',
    image: '/2.jpeg',
    frameColor: 'border-titli-peach/50',
    bgColor: 'bg-titli-peach-soft',
    shadowColor: 'group-hover:shadow-titli-peach/40',
  },
  {
    id: '03',
    title: 'Petals & Promises',
    category: 'Engagement',
    description: 'Soft blush florals and hand-lettered details for a tender moment.',
    image: '/3.jpeg',
    frameColor: 'border-titli-pink/50',
    bgColor: 'bg-titli-pink-soft',
    shadowColor: 'group-hover:shadow-titli-pink/40',
  },
  {
    id: '04',
    title: 'Heritage Elegance',
    category: 'Traditional Wedding',
    description: 'Rich cultural aesthetics blending vibrant colors and timeless rituals.',
    image: '/4.jpeg',
    frameColor: 'border-titli-coral/50',
    bgColor: 'bg-titli-peach-soft',
    shadowColor: 'group-hover:shadow-titli-coral/40',
  },
  {
    id: '05',
    title: 'Aqua Serenade',
    category: 'Outdoor Reception',
    description: 'Nature-inspired decor under open skies with aqua and mint accents.',
    image: '/5.jpeg',
    frameColor: 'border-titli-aqua/50',
    bgColor: 'bg-titli-aqua-soft',
    shadowColor: 'group-hover:shadow-titli-aqua/40',
  },
  {
    id: '06',
    title: 'Vedic Symphony',
    category: 'Traditional Decor',
    description: 'Sacred spaces designed with marigolds, brass elements and devotion.',
    image: '/6.jpeg',
    frameColor: 'border-titli-gold/50',
    bgColor: 'bg-titli-yellow/20',
    shadowColor: 'group-hover:shadow-titli-gold/40',
  },
  {
    id: '07',
    title: 'Midnight Bloom',
    category: 'Reception',
    description: 'A magical evening setup with hanging floral installations and ambient lighting.',
    image: '/7.jpeg',
    frameColor: 'border-titli-lavender/50',
    bgColor: 'bg-titli-lavender-soft',
    shadowColor: 'group-hover:shadow-titli-lavender/40',
  },
  {
    id: '08',
    title: 'Sunny Soiree',
    category: 'Haldi',
    description: 'Bright and cheerful decor with sunflowers and yellow drapes for a joyful celebration.',
    image: '/8.jpeg',
    frameColor: 'border-titli-peach/50',
    bgColor: 'bg-titli-peach-soft',
    shadowColor: 'group-hover:shadow-titli-peach/40',
  },
  {
    id: '09',
    title: 'Enchanted Forest',
    category: 'Sangeet',
    description: 'Lush greenery and mystical lighting creating a woodland fantasy.',
    image: '/9.jpeg',
    frameColor: 'border-titli-pink/50',
    bgColor: 'bg-titli-pink-soft',
    shadowColor: 'group-hover:shadow-titli-pink/40',
  },
  {
    id: '10',
    title: 'Pastel Poetry',
    category: 'Mehendi',
    description: 'Soft pastels and intricate patterns setting a relaxed and beautiful vibe.',
    image: '/11.jpeg',
    frameColor: 'border-titli-aqua/50',
    bgColor: 'bg-titli-aqua-soft',
    shadowColor: 'group-hover:shadow-titli-aqua/40',
  },
  {
    id: '11',
    title: 'Golden Glow',
    category: 'Anniversary',
    description: 'Elegant golden accents with white lilies for a sophisticated celebration.',
    image: '/12.jpeg',
    frameColor: 'border-titli-gold/50',
    bgColor: 'bg-titli-yellow/20',
    shadowColor: 'group-hover:shadow-titli-gold/40',
  },
  {
    id: '12',
    title: 'Rustic Charm',
    category: 'Intimate Gathering',
    description: 'Earthy tones, pampas grass, and wooden textures for a cozy event.',
    image: '/13.jpeg',
    frameColor: 'border-titli-lavender/50',
    bgColor: 'bg-titli-lavender-soft',
    shadowColor: 'group-hover:shadow-titli-lavender/40',
  },
];

const SmallProjectCard = ({ project, onClick }: { project: Project, onClick: () => void }) => (
  <div onClick={onClick} className="group flex flex-col bg-white dark:bg-[#1f1e21] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-white/10 h-full cursor-pointer">
    <div className="relative aspect-[4/5] sm:aspect-square p-2 bg-white dark:bg-[#1f1e21] flex items-center justify-center overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-3 md:p-4 border-t border-gray-50 dark:border-white/5 flex flex-col flex-grow text-left bg-gray-50/50 dark:bg-black/10">
      <h3 className="font-sans text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium line-clamp-2 group-hover:text-titli-plum transition-colors">
        {project.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{project.category}</p>
    </div>
  </div>
);

export default function Portfolio() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % projects.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + projects.length) % projects.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') setSelectedImageIndex((selectedImageIndex + 1) % projects.length);
      if (e.key === 'ArrowLeft') setSelectedImageIndex((selectedImageIndex - 1 + projects.length) % projects.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section
      id="portfolio"
      className="relative py-28 lg:py-36 bg-titli-warm-white overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-titli-gold mb-4 font-semibold flex items-center gap-4">
              <span className="w-8 h-px bg-titli-gold/50"></span>
              {/* Selected Works */}
            </p>
            <h2 className="font-serif text-5xl lg:text-7xl text-titli-plum font-bold leading-[1.1] tracking-tight text-balance">
              A Gallery of
              <br />
              <span className="text-titli-plum-deep italic font-medium">Moments in Bloom.</span>
            </h2>
          </div>
          <div className="md:border-l-2 border-titli-gold/30 md:pl-8 py-2">
            <p className="text-titli-charcoal/80 max-w-sm text-lg leading-relaxed font-sans">
              Each project is a collaboration — a meeting of stories, textures,
              and colours that blossom into something beautifully unique.
            </p>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="h-full"
            >
              <SmallProjectCard project={project} onClick={() => openModal(index)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal Popup */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-12"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-black/50 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selectedImageIndex].image}
                alt={projects[selectedImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                  {projects[selectedImageIndex].title}
                </h3>
                <p className="text-white/70">
                  {projects[selectedImageIndex].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


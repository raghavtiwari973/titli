import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    image: 'https://images.pexels.com/photos/9644360/pexels-photo-9644360.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    frameColor: 'border-titli-lavender/50',
    bgColor: 'bg-titli-lavender-soft',
    shadowColor: 'group-hover:shadow-titli-lavender/40',
  },
  {
    id: '02',
    title: 'The Amber Banquet',
    category: 'Corporate Gala',
    description: 'Warm tones and candlelight for an unforgettable year-end gathering.',
    image: 'https://images.pexels.com/photos/17206105/pexels-photo-17206105.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    frameColor: 'border-titli-peach/50',
    bgColor: 'bg-titli-peach-soft',
    shadowColor: 'group-hover:shadow-titli-peach/40',
  },
  {
    id: '03',
    title: 'Petals & Promises',
    category: 'Engagement',
    description: 'Soft blush florals and hand-lettered details for a tender moment.',
    image: 'https://images.pexels.com/photos/17022991/pexels-photo-17022991.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    frameColor: 'border-titli-pink/50',
    bgColor: 'bg-titli-pink-soft',
    shadowColor: 'group-hover:shadow-titli-pink/40',
  },
  {
    id: '04',
    title: 'Aqua Serenade',
    category: 'Outdoor Reception',
    description: 'Nature-inspired decor under open skies with aqua and mint accents.',
    image: 'https://images.pexels.com/photos/12954016/pexels-photo-12954016.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    frameColor: 'border-titli-aqua/50',
    bgColor: 'bg-titli-aqua-soft',
    shadowColor: 'group-hover:shadow-titli-aqua/40',
  },
];

export default function Portfolio() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Frame background */}
              <div
                className={`relative ${project.bgColor} p-3 rounded-xl transition-all duration-700 group-hover:shadow-2xl ${project.shadowColor}`}
              >
                {/* Image container */}
                <div
                  className={`relative overflow-hidden rounded-lg border-[1px] ${project.frameColor} transition-all duration-500`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-titli-plum/70 via-titli-plum/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                      <h3 className="font-serif text-3xl md:text-4xl text-titli-warm-white font-medium mb-4">
                        {project.title}
                      </h3>
                      <p className="text-titli-warm-white/90 text-sm max-w-sm mb-6 leading-relaxed hidden sm:block">
                        {project.description}
                      </p>
                    </div>
                    <svg
                      className="mt-2 w-32 h-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-200"
                      viewBox="0 0 120 12"
                      fill="none"
                    >
                      <path
                        d="M0 6 C 20 2, 30 10, 50 6 S 80 2, 100 6 S 110 10, 120 6"
                        stroke="url(#miniFlight)"
                        strokeWidth="1.5"
                        strokeDasharray="3 4"
                        fill="none"
                      />
                      <defs>
                        <linearGradient id="miniFlight" x1="0" y1="0" x2="120" y2="0">
                          <stop stopColor="#D9DDF7" />
                          <stop offset="0.5" stopColor="#F2B6C8" />
                          <stop offset="1" stopColor="#A9DCD5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="flex items-center gap-2 mt-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-300">
                      <span className="text-titli-warm-white text-sm tracking-widest uppercase text-[10px] font-semibold">
                        Explore
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-titli-warm-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project number */}
              <div className="flex items-baseline gap-4 mt-6">
                <span className="font-serif text-4xl text-titli-lavender font-bold">
                  {project.id}
                </span>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-titli-coral mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl text-titli-plum font-medium">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Offset decorative dot */}
              <div
                className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${index % 2 === 0 ? 'bg-titli-pink' : 'bg-titli-aqua'} opacity-60`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

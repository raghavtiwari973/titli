import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import TitliLogo from './TitliLogo';

export default function Footer() {
  return (
    <footer className="relative bg-titli-plum-deep overflow-hidden">
      {/* Subtle lavender glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-titli-lavender/10 rounded-full blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16"
      >
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <TitliLogo
              size={44}
              textClassName="text-titli-warm-white"
            />
            <p className="mt-5 text-titli-warm-white/60 text-sm leading-relaxed max-w-xs">
              Sustainable events and giftings, thoughtfully crafted to be
              remembered. Where ideas take flight.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-lg text-titli-gold font-semibold mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Sustainability', href: '#sustainability' },
                { label: 'Craft', href: '#craft' },
                { label: 'Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-titli-warm-white/60 text-sm hover:text-titli-pink transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-lg text-titli-gold font-semibold mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@titli.studio"
                  className="group flex items-center gap-3 text-titli-warm-white/60 text-sm hover:text-titli-pink transition-all duration-300"
                >
                  <Mail size={16} className="text-titli-pink transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_4px_8px_rgba(242,182,200,0.4)]" />
                  [EMAIL_ADDRESS]
                </a>
              </li>
              <li>
                <a
                  href="tel:+919109307917"
                  className="group flex items-center gap-3 text-titli-warm-white/60 text-sm hover:text-titli-pink transition-all duration-300"
                >
                  <Phone size={16} className="text-titli-pink transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_4px_8px_rgba(242,182,200,0.4)]" />
                  +91 91093 07917
                </a>
              </li>
              <li className="flex items-center gap-3 text-titli-warm-white/60 text-sm">
                <MapPin size={16} className="text-titli-pink" />
                Bangalore, India
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-titli-warm-white/60 text-sm hover:text-titli-pink transition-all duration-300"
                >
                  <Instagram size={16} className="text-titli-pink transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_4px_8px_rgba(242,182,200,0.4)]" />
                  @titli.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Butterfly gradient divider */}
        <div className="h-px bg-butterfly-gradient bg-[length:200%_100%] animate-shimmer opacity-40 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-titli-warm-white/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Titli. Crafted with care.
          </p>
          <p className="text-titli-warm-white/40 text-xs tracking-wide">
            Where ideas take flight.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

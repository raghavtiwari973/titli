import { Instagram, Mail, Phone, MapPin, Facebook, Youtube, MessageCircle } from 'lucide-react';
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:pr-4">
            <TitliLogo
              size={44}
              textClassName="text-titli-warm-white"
            />
            <p className="mt-5 text-titli-warm-white/60 text-sm leading-relaxed max-w-xs">
              Sustainable events and giftings, thoughtfully crafted to be
              remembered. Where emotions take a colourful flight.
            </p>
          </div>

          {/* Quick Links and Connect Grouped for Mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-12 lg:col-span-2">
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
                    href="mailto:titlisustainableevents@gmail.com"
                    className="group flex items-center gap-3 text-titli-warm-white/60 text-sm hover:text-titli-pink transition-all duration-300"
                  >
                    <Mail size={16} className="text-titli-pink transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_4px_8px_rgba(242,182,200,0.4)] hidden sm:block" />
                    <span className="break-all">titlisustainableevents@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919109307917"
                    className="group flex items-center gap-3 text-titli-warm-white/60 text-sm hover:text-titli-pink transition-all duration-300"
                  >
                    <Phone size={16} className="text-titli-pink transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_4px_8px_rgba(242,182,200,0.4)] hidden sm:block" />
                    +91 91093 07917
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919109307917"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-titli-warm-white/60 text-sm hover:text-titli-pink transition-all duration-300"
                  >
                    <MessageCircle size={16} className="text-titli-pink transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_4px_8px_rgba(242,182,200,0.4)] hidden sm:block" />
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3 text-titli-warm-white/60 text-sm">
                  <MapPin size={16} className="text-titli-pink flex-shrink-0 mt-1 hidden sm:block" />
                  <span>Indore, India</span>
                </li>
                <li className="flex items-center gap-4 pt-4">
                  <a
                    href="https://www.instagram.com/titlisustainableevents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] p-[2px] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(220,39,67,0.5)]"
                    title="Instagram"
                  >
                    <div className="flex items-center justify-center w-full h-full bg-titli-plum-deep rounded-full group-hover:bg-transparent transition-colors duration-500">
                      <Instagram size={22} className="text-titli-pink group-hover:text-white transition-colors duration-500" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-start lg:items-center">
            <h4 className="font-sans text-lg text-titli-gold font-semibold mb-5 lg:text-center w-full">
              Scan to Connect
            </h4>
            <div className="inline-block bg-titli-warm-white/10 backdrop-blur-md p-3 rounded-2xl border border-titli-warm-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-titli-pink/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,182,200,0.3)] hover:-translate-y-1 group">
              <div className="bg-white rounded-xl overflow-hidden p-2">
                <img 
                  src="/titli_sustainable_events_qr_with_name.png" 
                  alt="Titli QR Code" 
                  className="w-28 h-28 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
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
            Where emotions take a colourful flight.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

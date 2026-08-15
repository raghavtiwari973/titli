import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import TitliLogo from './TitliLogo';

const navLinks = [
  { label: 'Gallery', href: '#portfolio' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Craft', href: '#craft' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
        setMenuOpen(false); // Close menu if scrolling down
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-titli-warm-white/90 backdrop-blur-md shadow-[0_2px_30px_rgba(116,61,97,0.08)]'
          : 'bg-transparent'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-center gap-8 lg:gap-12 h-20 w-full">
        
        {/* Desktop nav */}
        <div className="hidden md:flex flex-none justify-center">
          <ul className="flex items-center gap-8 lg:gap-14">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-2 py-2 text-[15px] font-sans font-medium tracking-wider text-titli-plum-deep transition-colors hover:text-titli-coral group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-butterfly-gradient bg-[length:200%_100%] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Container */}
        <div className="hidden md:flex flex-none items-center">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 bg-titli-plum text-titli-warm-white text-sm font-sans font-semibold tracking-wide rounded-sm hover:bg-titli-pink hover:text-titli-plum-deep transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            Begin Your Journey
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-titli-plum"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-titli-warm-white/95 backdrop-blur-md border-t border-titli-lavender/30">
          <ul className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-titli-plum-deep font-sans font-medium text-base hover:text-titli-coral transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block mt-2 px-5 py-2.5 bg-titli-plum text-titli-warm-white text-sm rounded-sm"
              >
                Begin Your Journey
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

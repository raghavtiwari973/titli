import { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Youtube, MapPin, Phone, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TitliMark } from './TitliLogo';
import { supabase } from '../lib/supabase';

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (supabase) {
      try {
        const { error } = await supabase
          .from('leads')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
            },
          ]);

        if (error) throw error;
        setIsSuccess(true);
      } catch (err) {
        console.error('Error submitting form:', err);
        alert('There was an error sending your inquiry. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 overflow-hidden bg-plum-gradient"
    >

      {/* Animated Mesh Gradient */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-titli-pink/20 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-titli-plum/40 rounded-full blur-[150px] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-titli-gold/10 rounded-full blur-[180px] animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center"
      >


        <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-titli-warm-white font-bold leading-[1.1] tracking-tight text-balance mb-8">
          Let's Create Something
          <br />
          Worth Remembering.
        </h2>

        <p className="text-lg text-titli-warm-white/80 leading-relaxed max-w-xl mx-auto mb-12">
          Whether it's an intimate gathering, a grand celebration, or a
          thoughtful gift — we'd love to help your emotions take a colourful flight.
        </p>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 text-left items-stretch">

          {/* Contact details (Left side) */}
          <div className="flex-none lg:w-80 flex flex-col justify-between gap-8 bg-titli-warm-white/5 backdrop-blur-md border border-titli-warm-white/10 rounded-2xl p-6 sm:p-10">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-titli-gold/10 text-titli-gold flex items-center justify-center flex-none border border-titli-gold/20 shadow-inner">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-titli-gold/80 mb-1.5 font-medium">
                  Studio
                </p>
                <p className="text-titli-warm-white text-base">
                  xyz, India
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-titli-warm-white/10 to-transparent"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-titli-gold/10 text-titli-gold flex items-center justify-center flex-none border border-titli-gold/20 shadow-inner">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-titli-gold/80 mb-1.5 font-medium">
                  Phone
                </p>
                <p className="text-titli-warm-white text-base">
                  +91 9109307917
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-titli-warm-white/10 to-transparent"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-titli-gold/10 text-titli-gold flex items-center justify-center flex-none border border-titli-gold/20 shadow-inner">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-titli-gold/80 mb-1.5 font-medium">
                  Email
                </p>
                <a href="mailto:titlisustainableevents@gmail.com" className="text-titli-warm-white text-sm sm:text-base hover:text-titli-gold transition-colors break-all">
                  titlisustainableevents@gmail.com
                </a>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-titli-warm-white/10 to-transparent"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-titli-gold/10 text-titli-gold flex items-center justify-center flex-none border border-titli-gold/20 shadow-inner">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-titli-gold/80 mb-1.5 font-medium">
                  Website
                </p>
                <a href="https://www.titli.studio" className="text-titli-warm-white text-base hover:text-titli-gold transition-colors">
                  titli.com
                </a>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-titli-warm-white/10 to-transparent"></div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-titli-gold/80 mb-4 font-medium text-center lg:text-left">
                Follow Us
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-titli-warm-white/80">
                <a href="#" className="w-10 h-10 rounded-full bg-titli-warm-white/5 flex items-center justify-center hover:bg-titli-gold hover:text-titli-plum transition-all duration-300" aria-label="Instagram">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-titli-warm-white/5 flex items-center justify-center hover:bg-titli-gold hover:text-titli-plum transition-all duration-300" aria-label="Facebook">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-titli-warm-white/5 flex items-center justify-center hover:bg-titli-gold hover:text-titli-plum transition-all duration-300" aria-label="YouTube">
                  <Youtube size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-titli-warm-white/5 flex items-center justify-center hover:bg-titli-gold hover:text-titli-plum transition-all duration-300" aria-label="X (formerly Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://wa.me/919109307917" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-titli-warm-white/5 flex items-center justify-center hover:bg-titli-gold hover:text-titli-plum transition-all duration-300" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form (Right side) */}
          <div className="flex-1 w-full bg-titli-warm-white/5 backdrop-blur-md border border-titli-warm-white/10 rounded-2xl p-6 sm:p-10">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-titli-warm-white/10 text-titli-warm-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl text-titli-warm-white font-bold mb-3">
                  Your inquiry has taken flight!
                </h4>
                <p className="text-titli-warm-white/80 leading-relaxed mb-4">
                  Thank you for reaching out. Our team will review your details and get back to you within 24-48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-titli-warm-white/90 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="w-full p-3 rounded-lg border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-titli-warm-white/90 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 xxxxx xxxxx"
                      className="w-full p-3 rounded-lg border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-titli-warm-white/90 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="xyz@example.com"
                    className="w-full p-3 rounded-lg border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-titli-warm-white/90 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Message..."
                    className="w-full p-3 rounded-lg border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-titli-warm-white text-titli-plum rounded-sm font-semibold text-sm transition-transform hover:-translate-y-0.5 shadow-md disabled:opacity-70 disabled:cursor-not-allowed hover:bg-titli-gold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  {!isSubmitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

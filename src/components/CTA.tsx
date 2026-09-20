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
        className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 text-center"
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

        <div className="w-full max-w-2xl mx-auto text-left">

          {/* Form */}
          <div className="w-full flex flex-col bg-titli-warm-white/5 backdrop-blur-md border border-titli-warm-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
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
                      className="w-full p-4 rounded-xl border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold focus:ring-1 focus:ring-titli-gold transition-all"
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
                      className="w-full p-4 rounded-xl border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold focus:ring-1 focus:ring-titli-gold transition-all"
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
                    className="w-full p-4 rounded-xl border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold focus:ring-1 focus:ring-titli-gold transition-all"
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
                    className="w-full flex-1 p-4 rounded-xl border border-titli-warm-white/20 bg-titli-warm-white/10 text-titli-warm-white placeholder:text-titli-warm-white/40 focus:outline-none focus:border-titli-gold focus:ring-1 focus:ring-titli-gold transition-all resize-none min-h-[160px]"
                  />
                </div>

                <div className="mt-auto pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-titli-warm-white text-titli-plum rounded-xl font-bold text-base transition-transform hover:-translate-y-1 shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed hover:bg-titli-gold"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    {!isSubmitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

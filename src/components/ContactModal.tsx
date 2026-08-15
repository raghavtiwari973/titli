import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If Supabase is configured, send the data. Otherwise, simulate it.
    if (supabase) {
      try {
        const { error } = await supabase
          .from('leads')
          .insert([
            {
              event_type: formData.eventType,
              event_date: formData.date,
              guest_count: formData.guests,
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
      // Simulate submission when Supabase is not connected
      setTimeout(() => {
        console.log('Form data:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-titli-plum-deep/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-titli-warm-white dark:bg-titli-charcoal rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-titli-plum/20 pointer-events-auto"
            >
              {/* Header */}
              <div className="relative p-6 border-b border-titli-lavender/30 dark:border-titli-plum/30">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-titli-charcoal/60 dark:text-titli-warm-white/60 hover:text-titli-plum dark:hover:text-titli-pink transition-colors"
                >
                  <X size={24} />
                </button>
                <h3 className="font-serif text-3xl text-titli-plum dark:text-titli-warm-white font-bold">
                  {isSuccess ? 'Thank You' : 'Let\'s Create'}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-titli-aqua/20 text-titli-aqua rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-serif text-2xl text-titli-plum dark:text-titli-warm-white font-bold mb-3">
                      Your inquiry has taken flight!
                    </h4>
                    <p className="text-titli-charcoal dark:text-titli-warm-white/80 leading-relaxed mb-8">
                      Thank you for reaching out. Our team will review your details and get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 bg-titli-plum dark:bg-titli-warm-white text-titli-warm-white dark:text-titli-plum rounded-sm font-semibold text-sm transition-transform hover:-translate-y-0.5"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col h-full max-h-[60vh]">
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-titli-charcoal dark:text-titli-warm-white/90 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Name"
                          className="w-full p-3 rounded-lg border border-titli-lavender/50 dark:border-titli-plum/50 bg-transparent dark:text-titli-warm-white placeholder:text-titli-charcoal/30 dark:placeholder:text-titli-warm-white/30 focus:outline-none focus:border-titli-plum dark:focus:border-titli-pink transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-titli-charcoal dark:text-titli-warm-white/90 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="xyz@example.com"
                          className="w-full p-3 rounded-lg border border-titli-lavender/50 dark:border-titli-plum/50 bg-transparent dark:text-titli-warm-white placeholder:text-titli-charcoal/30 dark:placeholder:text-titli-warm-white/30 focus:outline-none focus:border-titli-plum dark:focus:border-titli-pink transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-titli-charcoal dark:text-titli-warm-white/90 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 234 567 890"
                          className="w-full p-3 rounded-lg border border-titli-lavender/50 dark:border-titli-plum/50 bg-transparent dark:text-titli-warm-white placeholder:text-titli-charcoal/30 dark:placeholder:text-titli-warm-white/30 focus:outline-none focus:border-titli-plum dark:focus:border-titli-pink transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-titli-charcoal dark:text-titli-warm-white/90 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="How can we help you?"
                          className="w-full p-3 rounded-lg border border-titli-lavender/50 dark:border-titli-plum/50 bg-transparent dark:text-titli-warm-white placeholder:text-titli-charcoal/30 dark:placeholder:text-titli-warm-white/30 focus:outline-none focus:border-titli-plum dark:focus:border-titli-pink transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end mt-6 pt-6 border-t border-titli-lavender/30 dark:border-titli-plum/30">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-titli-plum to-titli-plum-deep dark:from-titli-pink dark:to-titli-peach text-titli-warm-white dark:text-titli-plum-deep rounded-sm font-semibold text-sm transition-transform hover:-translate-y-0.5 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

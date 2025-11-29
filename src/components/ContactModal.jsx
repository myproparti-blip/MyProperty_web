import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import emailjs from 'emailjs-com';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('GDoVlmdwCiHEmV0re');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_edhxzp8',
        'template_up6jarm',
        emailParams
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        onClose();
      }, 2000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-2xl pointer-events-auto"
            >
            <div className="glass rounded-2xl backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white relative">
                <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
                <p className="text-white/90">We'd love to hear from you. Send us a message!</p>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact Info */}
                <div className="p-8 bg-slate-50 dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-800">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white">
                          <FiPhone size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">Call Us</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">(555) 123-4567</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white">
                          <FiMail size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">Email</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">myproparti@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white">
                          <FiMapPin size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">Address</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">123 Property St, Real Estate City, RC 12345</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">Business Hours</h4>
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex items-center justify-center text-center"
                    >
                      <div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <span className="text-2xl text-white">✓</span>
                        </motion.div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-slate-600 dark:text-slate-400">Thank you! We'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      {error && (
                        <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
                          {error}
                        </div>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-70"
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </div>
            </motion.div>
            </div>
            </>
            )}
            </AnimatePresence>
            );
            }

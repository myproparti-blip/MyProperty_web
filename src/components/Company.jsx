import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe, FiTrendingUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const propertyImages = [
  {
    src: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    alt: 'Premium Residential Property',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&q=80',
    alt: 'Modern Living Space',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&q=80',
    alt: 'Luxury Villa',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=450&fit=crop&q=80',
    alt: 'Contemporary House',
  },
  {
    src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=450&fit=crop&q=80',
    alt: 'Waterfront Property',
  },
  {
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    alt: 'Residential Complex',
  },
];

const features = [
  {
    icon: FiAward,
    title: 'Industry Leading',
    description: 'Award-winning real estate firm with 20+ years of expertise',
  },
  {
    icon: FiUsers,
    title: 'Expert Team',
    description: 'Dedicated professionals committed to your success',
  },
  {
    icon: FiGlobe,
    title: 'Global Network',
    description: 'International connections and local market knowledge',
  },
  {
    icon: FiTrendingUp,
    title: 'Growth Focused',
    description: 'Helping you maximize your real estate investments',
  },
];

export default function Company() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % propertyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % propertyImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Images */}
              <div className="relative w-full h-96 sm:h-[450px] overflow-hidden">
                {propertyImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full object-cover"
                  />
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <FiChevronLeft size={24} className="text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <FiChevronRight size={24} className="text-white" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {propertyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-teal-500 w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Overlay Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -top-6 -left-6 glass rounded-xl p-6 backdrop-blur-xl bg-white/10"
              >
                <div>
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-sm font-semibold">Years of Excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Mahim Corporation<br />
              <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Parent Company</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              MyProparti is a division of Mahim Corporation, a globally recognized leader in architectural design and real estate development. With over 20 years of industry experience, we combine architectural excellence with real estate expertise to deliver outstanding properties and services.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-teal-600 to-green-600"
                      >
                        <Icon size={20} />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg font-semibold hover:shadow-xl transition-shadow cursor-pointer"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-full sm:max-w-md md:max-w-2xl relative h-auto max-h-[90vh] overflow-y-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-green-500 to-emerald-600 rounded-3xl opacity-75 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-700 shadow-2xl">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex flex-col justify-between">
                  <div>
                    <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full">
                      <p className="text-white font-semibold text-xs sm:text-sm">About Mahim Corporation</p>
                    </div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Learn More</h2>
                    <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">MyProparti is backed by Mahim Corporation, a globally recognized leader in architectural design and real estate development with 20+ years of expertise.</p>
                    <div className="space-y-3">
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                        <span className="text-slate-200">20+ Years Industry Experience</span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                        <span className="text-slate-200">Award-Winning Designs</span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                        <span className="text-slate-200">Global Network</span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                        <span className="text-slate-200">Expert Team Committed to Success</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <p className="text-slate-300 font-semibold text-center mb-4 text-xs sm:text-sm">Download App Now</p>
                    <motion.div whileHover={{ scale: 1.05 }} className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl blur-lg opacity-40"></div>
                      <div className="relative bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150&data=https://play.google.com/store/apps/details?id=com.myproparti.myproparti" alt="Download MyProparti App" className="w-40 sm:w-56 h-40 sm:h-56" />
                      </div>
                    </motion.div>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm text-center mt-4">Available on iOS & Android</p>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-col sm:flex-row gap-3">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">Download App</motion.button>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setShowModal(false)} className="flex-1 px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-colors">Close</motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </section>
      );
      }

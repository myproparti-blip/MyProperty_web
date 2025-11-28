import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe, FiTrendingUp } from 'react-icons/fi';

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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=450&fit=crop&q=80"
                alt="Luxury Property"
                className="w-full h-96 sm:h-[450px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
                }}
              />
              
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
              Mahime Architects<br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Parent Company</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              EstatePro is a division of Mahime Architects, a globally recognized leader in architectural design and real estate development. With over 20 years of industry experience, we combine architectural excellence with real estate expertise to deliver outstanding properties and services.
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
                        className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600"
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
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

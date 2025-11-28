import React from 'react';
import { motion } from 'framer-motion';
import { FiKey, FiDollarSign, FiBarChart2, FiFileText } from 'react-icons/fi';

const serviceCards = [
  {
    id: 1,
    icon: FiKey,
    title: 'Property Sales',
    description: 'Expert guidance to sell your property at the best market price',
    features: ['Market analysis', 'Listing strategy', 'Buyer matching'],
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 2,
    icon: FiDollarSign,
    title: 'Investment Advisory',
    description: 'Strategic investment recommendations for portfolio growth',
    features: ['ROI analysis', 'Risk assessment', 'Portfolio planning'],
    color: 'from-pink-600 to-red-600',
  },
  {
    id: 3,
    icon: FiBarChart2,
    title: 'Market Reports',
    description: 'Comprehensive market analysis and trend forecasting',
    features: ['Trend analysis', 'Price forecasting', 'Market insights'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 4,
    icon: FiFileText,
    title: 'Legal Support',
    description: 'Complete documentation and legal assistance for transactions',
    features: ['Contract review', 'Title verification', 'Document prep'],
    color: 'from-orange-600 to-yellow-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="card-hover group"
              >
                <div className="glass rounded-xl overflow-hidden backdrop-blur-xl h-full">
                  {/* Top Section - Icon & Title */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="mb-4"
                    >
                      <Icon size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></span>
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r ${service.color} hover:shadow-lg transition-shadow`}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

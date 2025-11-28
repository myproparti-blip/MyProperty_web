import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiHome, FiTrendingUp, FiShield } from 'react-icons/fi';

const services = [
  {
    icon: FiHome,
    title: 'Full Property Management',
    description: 'Complete management of residential and commercial properties',
  },
  {
    icon: FiTrendingUp,
    title: 'Market Analysis',
    description: 'In-depth market analysis to maximize your property value',
  },
  {
    icon: FiShield,
    title: 'Security & Maintenance',
    description: '24/7 monitoring and regular maintenance services',
  },
  {
    icon: FiCheckCircle,
    title: 'Tenant Services',
    description: 'Screening, placement, and tenant relationship management',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function PropertyManagement() {
  return (
    <section id="management" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Professional <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Property Management</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We handle all aspects of property management so you can focus on what matters most. From tenant relations to maintenance, our comprehensive services ensure your property is always in excellent condition.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      >
                        <Icon size={24} />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&q=80"
                alt="Professional Property Management"
                className="w-full h-96 sm:h-[450px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 100%)';
                }}
              />
              
              {/* Stats Overlay */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 glass rounded-xl p-6 backdrop-blur-xl"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    500+
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                    Properties Managed
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

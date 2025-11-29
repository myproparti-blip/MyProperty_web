import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Key, TrendingUp, ClipboardCheck } from 'lucide-react';
import DownloadModal from './DownloadModal';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: 'LEGAL DOCUMENTATION',
      description: 'Complete legal support for property transactions. Our experts ensure all documentation is accurate, compliant, and protects your interests.',
      icon: ClipboardCheck
    },
    {
      id: 2,
      title: 'PROPERTY VALUATION',
      description: 'Professional property valuations based on market trends and comparable sales. Get accurate assessments to maximize your investment potential.',
      icon: Key
    },
    {
      id: 3,
      title: 'MARKET LEADERS',
      description: 'Industry-leading expertise with a proven track record. We set the standard for excellence in real estate consulting and property services.',
      icon: Users
    },
    {
      id: 4,
      title: 'INVESTMENT ANALYSIS',
      description: 'Strategic investment guidance and market analysis to help you make informed decisions. Maximize returns with data-driven insights.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Container with Single Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-xl overflow-hidden border-2 border-black-400 shadow-7xl"
          style={{
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* Single Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center backdrop-blur-md"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=600&fit=crop)',
              filter: 'blur(8px)'
            }}
          />

          {/* Transparent Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Services Grid - Connected */}
          <div className="absolute inset-0 grid grid-cols-4 divide-x divide-slate-400">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;

              return (
                <motion.div
                   key={service.id}
                   onMouseEnter={() => setHoveredService(service.id)}
                   onMouseLeave={() => setHoveredService(null)}
                   onClick={() => {
                     setSelectedService(service);
                     setIsModalOpen(true);
                   }}
                   className="flex flex-col items-center justify-center p-10 cursor-pointer relative group transition-colors duration-300 hover:bg-black/20"
                 >
                  {/* Default State - Title and Icon */}
                  <AnimatePresence>
                    {!isHovered && (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-6 text-center"
                      >
                        <Icon className="w-16 h-16 text-white drop-shadow-lg" strokeWidth={1.5} />
                        <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg whitespace-pre-wrap">
                          {service.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover State - Full Info */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        key="hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-5 text-center"
                      >
                        <Icon className="w-14 h-14 text-white drop-shadow-lg" strokeWidth={1.5} />
                        <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                          {service.title}
                        </h3>
                        <p className="text-white text-base leading-relaxed drop-shadow-lg max-w-xs">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Download Modal */}
        <DownloadModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
        />
      </div>
    </section>
  );
}

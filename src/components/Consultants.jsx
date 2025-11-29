import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const consultants = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Senior Real Estate Consultant',
    bio: '15+ years in luxury property sales',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
    speciality: 'Luxury Homes',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Investment Property Specialist',
    bio: 'Expert in commercial real estate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
    speciality: 'Commercial',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Property Management Director',
    bio: '12+ years managing portfolios',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
    speciality: 'Management',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Residential Market Analyst',
    bio: 'Market trends and valuations expert',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
    speciality: 'Market Analysis',
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Consultants() {
  return (
    <section id="consultants" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Expert <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Consultants</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Our team of experienced professionals is ready to help you find your perfect property
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {consultants.map((consultant) => (
            <motion.div
              key={consultant.id}
              variants={itemVariants}
              className="card-hover"
            >
              <div className="glass rounded-xl overflow-hidden backdrop-blur-xl group">
                {/* Avatar */}
                <div className="h-48 relative overflow-hidden flex items-center justify-center bg-slate-300 dark:bg-slate-700">
                  <motion.img
                    src={consultant.image}
                    alt={consultant.name}
                    whileHover={{ scale: 1.1 }}
                    className="w-full h-full object-cover transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)';
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href="#"
                      className="p-2 bg-white rounded-full text-slate-900 hover:bg-teal-500 hover:text-white transition-colors"
                    >
                      <FiLinkedin size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href="#"
                      className="p-2 bg-white rounded-full text-slate-900 hover:bg-teal-500 hover:text-white transition-colors"
                    >
                      <FiTwitter size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href="#"
                      className="p-2 bg-white rounded-full text-slate-900 hover:bg-teal-500 hover:text-white transition-colors"
                    >
                      <FiMail size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {consultant.name}
                  </h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-semibold mb-2">
                    {consultant.role}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {consultant.bio}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full font-semibold">
                      {consultant.speciality}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-gradient-to-r from-teal-600 to-green-600 text-white hover:shadow-lg transition-shadow"
                    >
                      <FiMail size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

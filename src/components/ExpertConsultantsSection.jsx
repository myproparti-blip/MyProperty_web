import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCheckCircle, FiStar, FiTrendingUp } from 'react-icons/fi';

export default function ExpertConsultantsSection() {
  const [isHovered, setIsHovered] = useState(false);

  const consultant = {
    name: 'Expert Consultants Team',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80',
    experience: '20+',
    team: '50+',
    clients: '5000+',
    rating: '4.9',
    description: 'Our dedicated team of expert real estate consultants brings decades of combined experience, helping you navigate the complex property market with confidence and expertise.',
    specialties: [
      'Residential Properties',
      'Commercial Real Estate',
      'Investment Properties',
      'Market Analysis & Valuation'
    ],
    services: [
      'Personalized Property Consulting',
      '24/7 Client Support',
      'Market Trend Analysis',
      'Investment Strategy'
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Expert <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Consultants</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our team of highly qualified real estate professionals with proven track record of success.
          </p>
        </motion.div>

        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${consultant.image})` }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay - Hidden by default, shown on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60 flex flex-col justify-between p-8 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">{consultant.name}</h3>
              <p className="text-slate-300 text-lg max-w-lg leading-relaxed mb-6">
                {consultant.description}
              </p>

              {/* Two Column Layout */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <FiAward size={16} className="text-purple-400" />
                    SPECIALTIES
                  </h4>
                  <ul className="space-y-2">
                    {consultant.specialties.map((specialty, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-pink-400 mt-1">•</span>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                    <FiCheckCircle size={16} className="text-pink-400" />
                    SERVICES
                  </h4>
                  <ul className="space-y-2">
                    {consultant.services.map((service, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 flex-wrap pt-4 border-t border-slate-600">
              <div className="flex items-center gap-2">
                <FiTrendingUp size={20} className="text-green-400" />
                <div>
                  <p className="text-slate-400 text-xs">Experience</p>
                  <p className="text-white font-bold">{consultant.experience} Years</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers size={20} className="text-blue-400" />
                <div>
                  <p className="text-slate-400 text-xs">Team Members</p>
                  <p className="text-white font-bold">{consultant.team}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle size={20} className="text-orange-400" />
                <div>
                  <p className="text-slate-400 text-xs">Satisfied Clients</p>
                  <p className="text-white font-bold">{consultant.clients}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <FiStar size={20} className="text-yellow-400 fill-yellow-400" />
                <div>
                  <p className="text-slate-400 text-xs">Rating</p>
                  <p className="text-white font-bold">{consultant.rating}/5.0</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold w-fit"
            >
              Meet Our Team
            </motion.button>
          </motion.div>

          {/* Title - Visible by default, hidden on hover */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1" />
            <div>
              <h3 className="text-white text-4xl font-bold mb-4">{consultant.name}</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                  <p className="text-slate-300 text-xs font-semibold">EXPERIENCE</p>
                  <p className="text-white text-2xl font-bold">{consultant.experience}+</p>
                  <p className="text-slate-400 text-xs">Years</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                  <p className="text-slate-300 text-xs font-semibold">EXPERTS</p>
                  <p className="text-white text-2xl font-bold">{consultant.team}</p>
                  <p className="text-slate-400 text-xs">Team</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                  <p className="text-slate-300 text-xs font-semibold">CLIENTS</p>
                  <p className="text-white text-2xl font-bold">{consultant.clients}</p>
                  <p className="text-slate-400 text-xs">Happy</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                  <p className="text-slate-300 text-xs font-semibold">RATING</p>
                  <p className="text-white text-2xl font-bold">{consultant.rating}</p>
                  <p className="text-slate-400 text-xs">/5.0</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

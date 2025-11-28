import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiDroplet, FiMapPin, FiDollarSign } from 'react-icons/fi';
import { propertyService } from '../services/propertyService';

export default function FeaturedPropertiesSection() {
  const [isHovered, setIsHovered] = useState(false);

  const categorizedProperties = propertyService.getCategorizedProperties();

  const featuredProperty = {
    name: 'Featured Properties',
    description: 'Discover our handpicked selection of premium properties. Each property is carefully chosen for its quality, location, and investment potential.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop&q=95',
    totalProperties: '250+',
    citiesCovered: '15+',
    propertyTypes: '12',
    luxuryApts: [
      'Modern 3BHK in City Center',
      'Sea-Facing 4BHK Penthouse',
      'Gated Community 2BHK',
      'Premium Studio Apartments'
    ],
    commercial: [
      'Office Spaces in Business Districts',
      'Retail Shops in Malls',
      'Restaurant & Cafe Locations',
      'Warehouse & Storage Facilities'
    ],
    residential: [
      'Independent Villas',
      'Townhouses',
      'Farmhouses',
      'Plot Investments'
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
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Properties</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties. Each property is carefully chosen for its quality, location, and investment potential.
          </p>
        </motion.div>

        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
        >
          {/* Background Image */}
          <motion.img 
            src={featuredProperty.image}
            alt={featuredProperty.name}
            className="absolute inset-0 w-full h-full object-cover"
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
              <h3 className="text-white text-4xl font-bold mb-2">{featuredProperty.name}</h3>
              <p className="text-slate-300 text-lg max-w-lg leading-relaxed mb-6">
                {featuredProperty.description}
              </p>

              {/* Three Column Layout */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <h4 className="text-white font-bold text-xs mb-3 flex items-center gap-2 uppercase">
                    <FiHome size={14} className="text-purple-400" />
                    Luxury Apartments
                  </h4>
                  <ul className="space-y-2">
                    {featuredProperty.luxuryApts.map((apt, idx) => (
                      <li key={idx} className="text-slate-300 text-xs flex items-start gap-2">
                        <span className="text-pink-400 mt-1">→</span>
                        <span>{apt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold text-xs mb-3 flex items-center gap-2 uppercase">
                    <FiDollarSign size={14} className="text-pink-400" />
                    Commercial Spaces
                  </h4>
                  <ul className="space-y-2">
                    {featuredProperty.commercial.map((space, idx) => (
                      <li key={idx} className="text-slate-300 text-xs flex items-start gap-2">
                        <span className="text-purple-400 mt-1">→</span>
                        <span>{space}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold text-xs mb-3 flex items-center gap-2 uppercase">
                    <FiMapPin size={14} className="text-blue-400" />
                    Residential Homes
                  </h4>
                  <ul className="space-y-2">
                    {featuredProperty.residential.map((home, idx) => (
                      <li key={idx} className="text-slate-300 text-xs flex items-start gap-2">
                        <span className="text-green-400 mt-1">→</span>
                        <span>{home}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 flex-wrap pt-4 border-t border-slate-600">
              <div className="flex items-center gap-2">
                <FiHome size={20} className="text-blue-400" />
                <div>
                  <p className="text-slate-400 text-xs">Properties Listed</p>
                  <p className="text-white font-bold">{featuredProperty.totalProperties}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin size={20} className="text-green-400" />
                <div>
                  <p className="text-slate-400 text-xs">Cities Covered</p>
                  <p className="text-white font-bold">{featuredProperty.citiesCovered}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <FiDroplet size={20} className="text-yellow-400" />
                <div>
                  <p className="text-slate-400 text-xs">Property Types</p>
                  <p className="text-white font-bold">{featuredProperty.propertyTypes}</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold w-fit"
            >
              Explore All Properties
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
              <h3 className="text-white text-4xl font-bold mb-4">{featuredProperty.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                  <p className="text-slate-300 text-xs font-semibold">PROPERTIES</p>
                  <p className="text-white text-2xl font-bold">{featuredProperty.totalProperties}</p>
                  <p className="text-slate-400 text-xs">Listed</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                  <p className="text-slate-300 text-xs font-semibold">CITIES</p>
                  <p className="text-white text-2xl font-bold">{featuredProperty.citiesCovered}</p>
                  <p className="text-slate-400 text-xs">Covered</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                  <p className="text-slate-300 text-xs font-semibold">TYPES</p>
                  <p className="text-white text-2xl font-bold">{featuredProperty.propertyTypes}</p>
                  <p className="text-slate-400 text-xs">Property Types</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

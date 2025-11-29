import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiDroplet, FiMapPin, FiDollarSign } from 'react-icons/fi';
import { propertyService } from '../services/propertyService';

export default function FeaturedPropertiesSection() {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const isMobile = window.innerWidth < 768;

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
                        Featured <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Properties</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium properties. Each property is carefully chosen for its quality, location, and investment potential.
                    </p>
                </motion.div>

                <motion.div
                    onMouseEnter={() => !isMobile && setIsHovered(true)}
                    onMouseLeave={() => !isMobile && setIsHovered(false)}
                    onClick={() => isMobile && setIsHovered(!isHovered)}
                    className="relative h-[600px] sm:h-[700px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
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
                         className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60 flex flex-col justify-between p-3 sm:p-6 md:p-8 overflow-y-auto pointer-events-auto"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: isHovered ? 1 : 0 }}
                         transition={{ duration: 0.3 }}
                         pointerEvents={isHovered ? "auto" : "none"}
                         style={{ maxHeight: '100vh' }}
                     >
                        <div>
                            <h3 className="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-2">{featuredProperty.name}</h3>
                            <p className="text-slate-300 text-xs sm:text-base md:text-lg max-w-lg leading-relaxed mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
                                {featuredProperty.description}
                            </p>

                            {/* Three Column Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                                <div>
                                    <h4 className="text-white font-bold text-xs md:text-xs mb-1.5 md:mb-3 flex items-center gap-2 uppercase">
                                        <FiHome size={12} className="text-teal-400" />
                                        Luxury Apartments
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-2">
                                        {featuredProperty.luxuryApts.map((apt, idx) => (
                                            <li key={idx} className="text-slate-300 text-xs md:text-xs flex items-start gap-1">
                                                <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>
                                                <span>{apt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold text-xs md:text-xs mb-1.5 md:mb-3 flex items-center gap-2 uppercase">
                                        <FiDollarSign size={12} className="text-green-400" />
                                        Commercial Spaces
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-2">
                                        {featuredProperty.commercial.map((space, idx) => (
                                            <li key={idx} className="text-slate-300 text-xs md:text-xs flex items-start gap-1">
                                                <span className="text-teal-400 mt-0.5 flex-shrink-0">→</span>
                                                <span>{space}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold text-xs md:text-xs mb-1.5 md:mb-3 flex items-center gap-2 uppercase">
                                        <FiMapPin size={12} className="text-blue-400" />
                                        Residential Homes
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-2">
                                        {featuredProperty.residential.map((home, idx) => (
                                            <li key={idx} className="text-slate-300 text-xs md:text-xs flex items-start gap-1">
                                                <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>
                                                <span>{home}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-0.5 sm:gap-2 md:gap-4 flex-wrap pt-2 md:pt-4 border-t border-slate-600 mt-2">
                            <div className="flex items-center gap-1">
                                <FiHome size={16} className="text-blue-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-slate-400 text-xs leading-none">Props</p>
                                    <p className="text-white font-bold text-sm">{featuredProperty.totalProperties}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <FiMapPin size={16} className="text-green-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-slate-400 text-xs leading-none">Cities</p>
                                    <p className="text-white font-bold text-sm">{featuredProperty.citiesCovered}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 md:ml-auto">
                                <FiDroplet size={16} className="text-yellow-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-slate-400 text-xs leading-none">Types</p>
                                    <p className="text-white font-bold text-sm">{featuredProperty.propertyTypes}</p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             onClick={() => setShowModal(true)}
                             className="mt-4 md:mt-6 px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-semibold text-xs sm:text-base w-fit cursor-pointer relative z-20"
                         >
                             Explore All
                         </motion.button>
                    </motion.div>

                    {/* Title - Visible by default, hidden on hover */}
                    <motion.div
                        className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex-1" />
                        <div>
                            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">{featuredProperty.name}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">PROPERTIES</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{featuredProperty.totalProperties}</p>
                                    <p className="text-slate-400 text-xs">Listed</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">CITIES</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{featuredProperty.citiesCovered}</p>
                                    <p className="text-slate-400 text-xs">Covered</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg col-span-2 sm:col-span-1">
                                    <p className="text-slate-300 text-xs font-semibold">TYPES</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{featuredProperty.propertyTypes}</p>
                                    <p className="text-slate-400 text-xs">Property Types</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

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
                             className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
                         >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-green-500 to-emerald-600 rounded-3xl opacity-75 blur-xl"></div>

                            {/* Content Card */}
                             <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-4 sm:p-6 md:p-10 border border-slate-700 shadow-2xl">

                                {/* Close Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

                                    {/* Left Section - Info */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full">
                                                <p className="text-white font-semibold text-sm">All Properties Available in App</p>
                                            </div>

                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore All Properties</h2>
                                            <p className="text-slate-300 mb-6 leading-relaxed">
                                                Access our complete collection of properties directly from the app. Browse, compare, and find your perfect home with advanced filters and virtual tours.
                                            </p>

                                            <div className="space-y-3">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                                                        <span className="text-white text-sm font-bold">✓</span>
                                                    </div>
                                                    <span className="text-slate-200">250+ Properties Listed</span>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.35 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                                                        <span className="text-white text-sm font-bold">✓</span>
                                                    </div>
                                                    <span className="text-slate-200">15+ Cities Coverage</span>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                                                        <span className="text-white text-sm font-bold">✓</span>
                                                    </div>
                                                    <span className="text-slate-200">12 Property Types</span>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.45 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                                                        <span className="text-white text-sm font-bold">✓</span>
                                                    </div>
                                                    <span className="text-slate-200">Advanced Search & Filters</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right Section - QR Code */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3, type: "spring" }}
                                        className="flex flex-col items-center justify-center"
                                    >
                                        <div className="mb-4">
                                            <p className="text-slate-300 font-semibold text-center mb-4">Download App Now</p>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="relative"
                                            >
                                                {/* QR Code Glow */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl blur-lg opacity-40"></div>

                                                {/* QR Code Container */}
                                                 <div className="relative bg-white p-3 sm:p-6 rounded-2xl shadow-xl">
                                                     <img
                                                         src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://play.google.com/store/apps/details?id=com.myproparti.myproparti"
                                                         alt="Download MyProparti App"
                                                         className="w-40 h-40 sm:w-56 sm:h-56"
                                                     />
                                                </div>
                                            </motion.div>
                                        </div>

                                        <p className="text-slate-400 text-sm text-center mt-4">
                                            Available on iOS & Android
                                        </p>
                                    </motion.div>
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8 flex flex-col sm:flex-row gap-3"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        Download App
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                                    >
                                        Close
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

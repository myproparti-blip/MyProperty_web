import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHome, FiTrendingUp, FiCheckCircle, FiWifi } from 'react-icons/fi';

export default function PropertyManagement() {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const isMobile = window.innerWidth < 768;

    const management = {
        name: 'Professional Property Management',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80',
        propertiesManaged: '500+',
        yearsExperience: '15+',
        uptime: '99.8%',
        description: 'Comprehensive property management solutions that handle every aspect of your rental property, from tenant screening to maintenance, ensuring maximum returns on your investment.',
        features: [
            'Tenant Screening & Placement',
            'Rent Collection & Payment Processing',
            'Maintenance & Repairs',
            'Accounting & Financial Reports'
        ],
        benefits: [
            '24/7 Emergency Response',
            'Online Portal Access',
            'Professional Maintenance Crew',
            'Legal & Compliance Management'
        ],
        services: [
            'Full Property Management',
            'Partial Management',
            'Leasing Services',
            'Maintenance Coordination'
        ]
    };

    return (
        <section id="management" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Professional <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Property Management</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Complete management solutions to maximize your property's value and returns.
                    </p>
                </motion.div>

                <motion.div
                    onMouseEnter={() => !isMobile && setIsHovered(true)}
                    onMouseLeave={() => !isMobile && setIsHovered(false)}
                    onClick={() => isMobile && setIsHovered(!isHovered)}
                    className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                >
                    {/* Background Image */}
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${management.image})` }}
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Overlay - Hidden by default, shown on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60 flex flex-col justify-between p-4 sm:p-6 md:p-8 overflow-y-auto pointer-events-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        pointerEvents={isHovered ? "auto" : "none"}
                    >
                        <div>
                             <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">{management.name}</h3>
                             <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed mb-2 md:mb-3">
                                 {management.description}
                             </p>

                             {/* Three Column Layout */}
                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
                                <div>
                                    <h4 className="text-white font-bold text-[10px] sm:text-xs mb-1 sm:mb-2 flex items-center gap-1 uppercase">
                                        <FiCheckCircle size={12} className="text-teal-400 flex-shrink-0" />
                                        Features
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-1">
                                        {management.features.map((feature, idx) => (
                                            <li key={idx} className="text-slate-300 text-[9px] sm:text-xs flex items-start gap-1">
                                                <span className="text-green-400 mt-0.5 flex-shrink-0 text-[8px]">→</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold text-[10px] sm:text-xs mb-1 sm:mb-2 flex items-center gap-1 uppercase">
                                        <FiShield size={12} className="text-green-400 flex-shrink-0" />
                                        Benefits
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-1">
                                        {management.benefits.map((benefit, idx) => (
                                            <li key={idx} className="text-slate-300 text-[9px] sm:text-xs flex items-start gap-1">
                                                <span className="text-teal-400 mt-0.5 flex-shrink-0 text-[8px]">→</span>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold text-[10px] sm:text-xs mb-1 sm:mb-2 flex items-center gap-1 uppercase">
                                        <FiHome size={12} className="text-blue-400 flex-shrink-0" />
                                        Services
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-1">
                                        {management.services.map((service, idx) => (
                                            <li key={idx} className="text-slate-300 text-[9px] sm:text-xs flex items-start gap-1">
                                                <span className="text-green-400 mt-0.5 flex-shrink-0 text-[8px]">→</span>
                                                <span>{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                         <div className="flex gap-1 sm:gap-2 flex-wrap pt-2 md:pt-4 border-t border-slate-600">
                             <div className="flex items-center gap-1">
                                 <FiHome size={16} className="text-blue-400 flex-shrink-0" />
                                 <div>
                                     <p className="text-slate-400 text-xs leading-none">Props</p>
                                     <p className="text-white font-bold text-sm">{management.propertiesManaged}</p>
                                 </div>
                             </div>
                             <div className="flex items-center gap-1">
                                 <FiTrendingUp size={16} className="text-green-400 flex-shrink-0" />
                                 <div>
                                     <p className="text-slate-400 text-xs leading-none">Exp</p>
                                     <p className="text-white font-bold text-sm">{management.yearsExperience}+</p>
                                 </div>
                             </div>
                             <div className="flex items-center gap-1 md:ml-auto">
                                 <FiWifi size={16} className="text-yellow-400 flex-shrink-0" />
                                 <div>
                                     <p className="text-slate-400 text-xs leading-none">Uptime</p>
                                     <p className="text-white font-bold text-sm">{management.uptime}</p>
                                 </div>
                             </div>
                         </div>

                        <motion.button
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             onClick={() => setShowModal(true)}
                             className="mt-4 md:mt-6 px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-semibold text-xs sm:text-base w-fit cursor-pointer relative z-20 flex-shrink-0"
                         >
                             Get Started
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
                            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">{management.name}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">PROPERTIES</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{management.propertiesManaged}</p>
                                    <p className="text-slate-400 text-xs">Managed</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">EXPERIENCE</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{management.yearsExperience}</p>
                                    <p className="text-slate-400 text-xs">Years</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">UPTIME</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{management.uptime}</p>
                                    <p className="text-slate-400 text-xs">Guaranteed</p>
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
                            className="w-full max-w-2xl relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-green-500 to-emerald-600 rounded-3xl opacity-75 blur-xl"></div>
                            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-2xl">
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
                                <div className="grid md:grid-cols-2 gap-8">
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex flex-col justify-between">
                                        <div>
                                            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full">
                                                <p className="text-white font-semibold text-sm">Full Management in App</p>
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Started Today</h2>
                                            <p className="text-slate-300 mb-6 leading-relaxed">Manage your properties efficiently with our comprehensive management platform.</p>
                                            <div className="space-y-3">
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">500+ Properties Managed</span>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">15+ Years Experience</span>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">99.8% Platform Uptime</span>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">24/7 Emergency Response</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="flex flex-col items-center justify-center">
                                        <div className="mb-4">
                                            <p className="text-slate-300 font-semibold text-center mb-4">Download App Now</p>
                                            <motion.div whileHover={{ scale: 1.05 }} className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl blur-lg opacity-40"></div>
                                                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://play.google.com/store/apps/details?id=com.myproparti.myproparti" alt="Download MyProparti App" className="w-56 h-56" />
                                                </div>
                                            </motion.div>
                                        </div>
                                        <p className="text-slate-400 text-sm text-center mt-4">Available on iOS & Android</p>
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
            </div>
        </section>
    );
}

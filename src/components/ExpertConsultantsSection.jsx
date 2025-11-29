import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCheckCircle, FiStar, FiTrendingUp } from 'react-icons/fi';

export default function ExpertConsultantsSection() {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const isMobile = window.innerWidth < 768;

    const consultant = {
        name: 'Expert Consultants Team',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
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
                        Expert <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Consultants</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Our team of highly qualified real estate professionals with proven track record of success.
                    </p>
                </motion.div>

                <motion.div
                    onMouseEnter={() => !isMobile && setIsHovered(true)}
                    onMouseLeave={() => !isMobile && setIsHovered(false)}
                    onClick={() => isMobile && setIsHovered(!isHovered)}
                    className="relative h-[600px] sm:h-[700px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
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
                         className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60 flex flex-col justify-between p-3 sm:p-6 md:p-8 overflow-y-auto pointer-events-auto"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: isHovered ? 1 : 0 }}
                         transition={{ duration: 0.3 }}
                         pointerEvents={isHovered ? "auto" : "none"}
                         style={{ maxHeight: '100vh' }}
                     >
                        <div>
                            <h3 className="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-2">{consultant.name}</h3>
                            <p className="text-slate-300 text-xs sm:text-base md:text-lg max-w-lg leading-relaxed mb-3 md:mb-6 line-clamp-2 md:line-clamp-none">
                                {consultant.description}
                            </p>

                            {/* Two Column Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 mb-4 md:mb-6">
                                <div>
                                    <h4 className="text-white font-bold text-xs md:text-sm mb-1.5 md:mb-3 flex items-center gap-2">
                                        <FiAward size={14} className="text-teal-400" />
                                        SPECIALTIES
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-2">
                                        {consultant.specialties.map((specialty, idx) => (
                                            <li key={idx} className="text-slate-300 text-xs md:text-sm flex items-start gap-1.5">
                                                <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                                                <span>{specialty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold text-xs md:text-sm mb-1.5 md:mb-3 flex items-center gap-2">
                                        <FiCheckCircle size={14} className="text-green-400" />
                                        SERVICES
                                    </h4>
                                    <ul className="space-y-0.5 sm:space-y-2">
                                        {consultant.services.map((service, idx) => (
                                            <li key={idx} className="text-slate-300 text-xs md:text-sm flex items-start gap-1.5">
                                                <span className="text-teal-400 mt-0.5 flex-shrink-0">•</span>
                                                <span>{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-0.5 sm:gap-2 md:gap-4 flex-wrap pt-2 md:pt-4 border-t border-slate-600 mt-2">
                            <div className="flex items-center gap-1">
                                <FiTrendingUp size={16} className="text-green-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-slate-400 text-xs leading-none">Exp</p>
                                    <p className="text-white font-bold text-sm">{consultant.experience}+</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <FiUsers size={16} className="text-blue-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-slate-400 text-xs leading-none">Team</p>
                                    <p className="text-white font-bold text-sm">{consultant.team}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <FiCheckCircle size={16} className="text-orange-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-slate-400 text-xs leading-none">Clients</p>
                                    <p className="text-white font-bold text-sm">{consultant.clients}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 md:ml-auto">
                                <FiStar size={16} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-slate-400 text-xs leading-none">Rating</p>
                                    <p className="text-white font-bold text-sm">{consultant.rating}</p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowModal(true)}
                            className="mt-2 md:mt-4 px-4 sm:px-8 py-1.5 sm:py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-semibold text-xs sm:text-base w-fit cursor-pointer relative z-10"
                        >
                            Meet Our Team
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
                            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">{consultant.name}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">EXPERIENCE</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{consultant.experience}+</p>
                                    <p className="text-slate-400 text-xs">Years</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">EXPERTS</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{consultant.team}</p>
                                    <p className="text-slate-400 text-xs">Team</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">CLIENTS</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{consultant.clients}</p>
                                    <p className="text-slate-400 text-xs">Happy</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-2 sm:p-3 rounded-lg">
                                    <p className="text-slate-300 text-xs font-semibold">RATING</p>
                                    <p className="text-white text-lg sm:text-2xl font-bold">{consultant.rating}</p>
                                    <p className="text-slate-400 text-xs">/5.0</p>
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
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-green-500 to-emerald-600 rounded-3xl opacity-75 blur-xl"></div>
                            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-4 sm:p-6 md:p-10 border border-slate-700 shadow-2xl">
                                 <motion.button
                                     whileHover={{ scale: 1.1 }}
                                     whileTap={{ scale: 0.95 }}
                                     onClick={() => setShowModal(false)}
                                     className="absolute top-4 sm:top-6 right-4 sm:right-6 text-slate-400 hover:text-white transition-colors"
                                 >
                                     <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                     </svg>
                                 </motion.button>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex flex-col justify-between">
                                        <div>
                                            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full">
                                                <p className="text-white font-semibold text-sm">Expert Team Available in App</p>
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Experts</h2>
                                            <p className="text-slate-300 mb-6 leading-relaxed">Connect with our 50+ experienced real estate consultants directly through the app.</p>
                                            <div className="space-y-3">
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">20+ Years Experience</span>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">5000+ Satisfied Clients</span>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">24/7 Client Support</span>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }} className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white text-sm font-bold">✓</span></div>
                                                    <span className="text-slate-200">4.9/5.0 Rating</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="flex flex-col items-center justify-center">
                                        <div className="mb-4">
                                            <p className="text-slate-300 font-semibold text-center mb-4">Download App Now</p>
                                            <motion.div whileHover={{ scale: 1.05 }} className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl blur-lg opacity-40"></div>
                                                <div className="relative bg-white p-3 sm:p-6 rounded-2xl shadow-xl">
                                                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://play.google.com/store/apps/details?id=com.myproparti.myproparti" alt="Download MyProparti App" className="w-40 h-40 sm:w-56 sm:h-56" />
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

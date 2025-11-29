import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiDroplet, FiMapPin, FiHeart } from 'react-icons/fi';

const properties = [
    {
        id: 1,
        title: 'Modern Downtown Penthouse',
        price: '$2,500,000',
        location: 'New York, NY',
        beds: 4,
        baths: 3,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
        featured: true,
    },
    {
        id: 2,
        title: 'Coastal Villa with Ocean View',
        price: '$1,800,000',
        location: 'Malibu, CA',
        beds: 5,
        baths: 4,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
        featured: false,
    },
    {
        id: 3,
        title: 'Luxury Lakefront Estate',
        price: '$3,200,000',
        location: 'Lake Tahoe, NV',
        beds: 6,
        baths: 5,
        image: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=500&h=300&fit=crop',
        featured: true,
    },
    {
        id: 4,
        title: 'Urban Loft in Historical District',
        price: '$1,200,000',
        location: 'Chicago, IL',
        beds: 3,
        baths: 2,
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop',
        featured: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Properties() {
    return (
        <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Properties</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Explore our curated collection of premium real estate properties
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {properties.map((property) => (
                         <motion.div
                             key={property.id}
                             variants={itemVariants}
                             className="card-hover group h-full"
                         >
                             <div className="relative overflow-hidden rounded-xl glass backdrop-blur-xl h-full flex flex-col min-h-[380px] sm:min-h-[420px] md:min-h-[450px]">
                              {/* Property Image */}
                              <div className="h-40 sm:h-48 md:h-56 relative overflow-hidden flex-shrink-0">
                                    <motion.img
                                        src={property.image}
                                        alt={property.title}
                                        whileHover={{ scale: 1.1 }}
                                        className="w-full h-full object-cover transition-transform duration-300"
                                    />

                                    {/* Badge */}
                                    {property.featured && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            Featured
                                        </div>
                                    )}

                                    {/* Heart Icon */}
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute top-4 left-4 p-2 glass rounded-full text-white hover:text-red-500 transition-colors"
                                    >
                                        <FiHeart size={20} />
                                    </motion.button>
                                </div>

                                {/* Property Details */}
                                <div className="p-3 sm:p-6 flex flex-col flex-grow">
                                    <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                                        {property.title}
                                    </h3>

                                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 mb-2 text-sm">
                                        <FiMapPin size={12} />
                                        <span className="text-xs sm:text-sm line-clamp-1">{property.location}</span>
                                    </div>

                                    <div className="flex gap-2 mb-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <FiHome size={14} />
                                            <span>{property.beds} Beds</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FiDroplet size={14} />
                                            <span>{property.baths} Baths</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-1.5 mt-auto pt-2">
                                        <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent min-w-0 line-clamp-1">
                                            {property.price}
                                        </span>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="px-2.5 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white text-xs sm:text-sm rounded-lg font-semibold hover:shadow-lg flex-shrink-0"
                                        >
                                            View
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

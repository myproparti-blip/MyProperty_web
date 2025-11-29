import React from 'react';

const ServiceCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Featured Properties',
      image: 'url(/images/featured-properties.svg)',
      description: 'Explore our handpicked collection of premium properties with detailed information and virtual tours.',
    },
    {
      id: 2,
      title: 'Expert Consultants',
      image: 'url(/images/expert-consultants.svg)',
      description: 'Connect with our experienced property consultants ready to guide you through every step.',
    },
    {
      id: 3,
      title: 'Professional Property Management',
      image: 'url(/images/property-management.svg)',
      description: 'Full-service management solutions to maximize your property\'s value and returns.',
    },
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
           {cards.map((card) => (
             <div
               key={card.id}
               className="relative h-56 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
             >
               {/* Background Image */}
               <div
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                 style={{ backgroundImage: card.image }}
               />

               {/* Overlay - Hidden by default, shown on hover */}
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 sm:p-6">
                 <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center">{card.title}</h3>
                 <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                   {card.description}
                 </p>
               </div>

               {/* Title - Visible by default, hidden on hover */}
               <div className="absolute inset-0 flex items-end p-4 sm:p-6 group-hover:opacity-0 transition-opacity duration-300">
                 <h3 className="text-white text-lg sm:text-2xl font-bold">{card.title}</h3>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;

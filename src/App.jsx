import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedPropertiesSection from './components/FeaturedPropertiesSection';
import ExpertConsultantsSection from './components/ExpertConsultantsSection';
import PropertyManagement from './components/PropertyManagement';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Company from './components/Company';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="dark">
      <div className="min-h-screen bg-slate-950">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header
            isDark={true}
            setIsDark={() => {}}
            onContactClick={() => setShowContactModal(true)}
          />
          <Hero />
           <div id="properties">
             <FeaturedPropertiesSection />
           </div>
           <div id="consultants">
             <ExpertConsultantsSection />
           </div>
           <div id="management">
             <PropertyManagement />
           </div>
           <div id="services">
             <Services />
           </div>
           <Statistics />
           <Company />
        </motion.main>

        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
        
        <Footer />
      </div>
    </div>
  );
}

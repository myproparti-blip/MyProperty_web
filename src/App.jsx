import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Consultants from './components/Consultants';
import PropertyManagement from './components/PropertyManagement';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Company from './components/Company';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          onContactClick={() => setShowContactModal(true)}
        />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Properties />
          <Consultants />
          <PropertyManagement />
          <Services />
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

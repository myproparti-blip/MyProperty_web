import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHome } from 'react-icons/fi';

export default function Header({ isDark, setIsDark, onContactClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Properties', href: '#properties' },
    { label: 'Consultants', href: '#consultants' },
    { label: 'Management', href: '#management' },
    { label: 'Services', href: '#services' },
  ];

  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative w-9 h-9 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center text-white shadow-2xl">
                <FiHome size={20} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tight">MyProparti</span>
              <span className="text-xs text-teal-300 font-semibold -mt-1">Properties</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-slate-200 hover:text-teal-300 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContactClick}
              className="hidden sm:block px-6 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Contact
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-200"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Mobile Menu - Slide from Right */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed right-0 top-0 h-screen w-64 bg-slate-900 z-50 md:hidden shadow-2xl pt-20 px-4 overflow-y-auto"
        >
          <div className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-slate-200 hover:text-teal-300 text-lg font-semibold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-semibold"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

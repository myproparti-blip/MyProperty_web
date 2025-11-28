import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black backdrop-blur-xl text-white py-12 sm:py-16 lg:py-20 w-full border-t border-white/10 dark:border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-5 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MyProperty
            </h3>
            <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              Your trusted partner in finding the perfect property.
            </p>
            <div className="space-y-3 sm:space-y-4 text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-purple-300 transition">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@myproparti.com" className="hover:text-purple-300 transition">
                  info@myproparti.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm">
              <li>
                <a href="#consultants" className="hover:text-purple-300 transition font-medium">
                  Find Consultants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-300 transition font-medium">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-purple-300 transition font-medium">
                  Property Listings
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-300 transition font-medium">
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start"
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">Download App</h4>
            <p className="text-slate-400 text-sm mb-4 sm:mb-6 text-center sm:text-left">
              Scan to download MyProperty
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.myproparti.myproparti"
                alt="Download MyProperty App"
                className="w-40 h-40 sm:w-48 sm:h-48"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm">
            <p>© 2025 MyProperty. All rights reserved.</p>
            <div className="flex gap-6 sm:gap-8">
              <a href="#" className="hover:text-purple-300 transition font-medium">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-300 transition font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

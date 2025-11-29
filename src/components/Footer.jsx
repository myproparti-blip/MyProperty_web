import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 w-full border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black mb-3 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              MyProparti
            </h3>
            <p className="text-slate-400 mb-4 text-xs sm:text-sm">
              Your trusted partner in finding the perfect property.
            </p>
            <div className="space-y-2 text-slate-400 text-xs">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+919316225275" className="hover:text-teal-300 transition">
                  +91 9316225275
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@myproparti.com" className="hover:text-teal-300 transition">
                  myproparti@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>surat, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#consultants" className="hover:text-teal-300 transition font-medium">
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
          >
            <h4 className="text-base font-bold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/mahimarchitects" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/mahimarch" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/mahim99arch/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition">
                <Instagram size={18} />
              </a>
              <a href="https://in.linkedin.com/company/mahim-architects" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

        </div>

        <div className="border-t border-slate-800 pt-4 sm:pt-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-slate-500 text-xs">
            <p>© 2025 MyProparti. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-300 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-300 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

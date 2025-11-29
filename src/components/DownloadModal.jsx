import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function DownloadModal({ isOpen, onClose, service }) {
  const [showQR, setShowQR] = useState(false);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
              {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Download our app to access {service.title.toLowerCase()}
              </p>
            </div>

            {/* Description */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 mb-6">
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* QR Code Scanner */}
            <AnimatePresence mode="wait">
              {showQR ? (
                <motion.div
                  key="qr"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-xl p-6 mb-6 flex flex-col items-center justify-center"
                >
                  <p className="text-sm text-slate-600 mb-4 font-semibold">Scan to Download</p>
                  <QRCodeSVG
                    value="https://play.google.com/store/apps/details?id=com.myproperties"
                    size={200}
                    level="H"
                    includeMargin={true}
                  />
                  <button
                    onClick={() => setShowQR(false)}
                    className="mt-4 text-sm text-slate-600 hover:text-slate-900 font-medium"
                  >
                    Back
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-6"
                >
                  <button
                    onClick={() => setShowQR(true)}
                    className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-3 group"
                  >
                    <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download on Google Play
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Additional Info */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Scan QR code to download • Secure • Fast • Reliable
              </p>
            </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

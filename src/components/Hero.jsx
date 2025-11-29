import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [bubbles, setBubbles] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const bubbleIdRef = React.useRef(0);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Only add bubble every 30ms to avoid too many
    if (!bubbles.length || Date.now() - bubbleIdRef.current > 30) {
      const newBubble = {
        id: bubbleIdRef.current++,
        x,
        y,
      };
      
      setBubbles(prev => [...prev.slice(-10), newBubble]);
      bubbleIdRef.current = Date.now();
    }
  };

  const handleMouseLeave = () => {
    setBubbles([]);
  };

  return (
    <>
      <section 
        className="min-h-screen flex items-center justify-center pt-20 px-4 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated Property Background */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: 'linear-gradient(-45deg, #0f172a, #1e293b, #0f172a, #1e1b4b)',
            backgroundSize: '400% 400%',
            overflow: 'hidden',
          }}
        >
          {/* Property Video from Cloudinary */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.85,
            }}
          >
            <source 
              src="https://res.cloudinary.com/dhmeqfsvl/video/upload/v1764399207/property-bg_hws9mg.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>

        {/* Dark Overlay for Text Readability */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            pointerEvents: 'none',
          }}
        />



      {/* Mouse Follow Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed pointer-events-none w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-green-500 shadow-lg"
          style={{
            left: bubble.x - 20,
            top: bubble.y - 20,
            zIndex: 20,
          }}
          initial={{ 
            scale: 1, 
            opacity: 1 
          }}
          animate={{ 
            scale: 0, 
            opacity: 0 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Perfect Home</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Scan QR code to download MyProparti. Access luxury properties, expert consultants, and professional management services all in one place.
          </p>
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.myproparti.myproparti"
              alt="Download MyProparti App"
              className="w-48 h-48"
            />
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
          >
           Scan & Downlode
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="px-8 py-3 glass text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
          >
            Explore
          </motion.button>
        </motion.div>
      </div>

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
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-green-500 to-emerald-600 rounded-3xl opacity-75 blur-xl"></div>
            
            {/* Content Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-2xl">
              
              {/* Close Button */}
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
                
                {/* Left Section - Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full">
                      <p className="text-white font-semibold text-sm">Premium Real Estate Platform</p>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">MyProparti</h2>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Your complete real estate solution. Discover luxury properties, connect with expert consultants, and access professional management services.
                    </p>

                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-slate-200">Exclusive luxury property listings</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-slate-200">Expert property consultants</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-slate-200">Virtual property tours</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-slate-200">Real-time market updates</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Section - QR Code */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="mb-4">
                    <p className="text-slate-300 font-semibold text-center mb-4">Scan to Download</p>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      {/* QR Code Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl blur-lg opacity-40"></div>
                      
                      {/* QR Code Container */}
                      <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://play.google.com/store/apps/details?id=com.myproparti.myproparti"
                          alt="Download MyProparti App"
                          className="w-56 h-56"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <p className="text-slate-400 text-sm text-center mt-4">
                    Available on Android
                  </p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Download App Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </section>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [bubbles, setBubbles] = React.useState([]);
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
            animation: 'animatedGradient 15s ease infinite',
            overflow: 'hidden',
          }}
        >
          {/* Property Video - From CDN */}
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
                opacity: 0.8,
                display: 'block',
              }}
              onError={(e) => console.error('Video error:', e)}
            >
              <source 
                src="https://videos.pexels.com/video-files/3844441/3844441-hd_1920_1080_25fps.mp4" 
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
          className="fixed pointer-events-none w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
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
            Find Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Perfect Home</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Discover luxury properties, expert consultants, and professional management services all in one place.
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
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            QR Scanner
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
      </section>
    </>
  );
}

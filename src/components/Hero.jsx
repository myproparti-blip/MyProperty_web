import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSearch } from 'react-icons/fi';

const searchData = [
  { id: 1, name: 'Expert Consultants', type: 'Consulting', section: '#consultants' },
  { id: 2, name: 'Professional Property Management', type: 'Property', section: '#management' },
  { id: 3, name: 'Mahime Architects', type: 'Architecture', section: '#services' },
  { id: 4, name: 'Parent Company', type: 'Organization', section: '#company' },
  { id: 5, name: 'Property Listings', type: 'Properties', section: '#properties' },
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [bubbles, setBubbles] = React.useState([]);
  const bubbleIdRef = React.useRef(0);

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      const element = document.querySelector('#properties');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setSearchQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      const filtered = searchData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleNavigate = (section) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

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
      {/* Background - Fixed */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
          background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '400% 400%',
          animation: 'animatedGradient 15s ease infinite',
        }}
      />
      
      <section 
        className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Elements */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

        {/* Animated Property Icons Background */}
        <motion.div 
          className="absolute top-20 left-10 text-7xl opacity-10 dark:opacity-20"
          animate={{ y: [0, -50, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          🏠
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-10 text-7xl opacity-10 dark:opacity-20"
          animate={{ y: [0, 50, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🏡
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/4 text-7xl opacity-10 dark:opacity-20"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          🏢
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 text-7xl opacity-10 dark:opacity-20"
          animate={{ x: [0, -50, 0], y: [0, 30, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          🏘️
        </motion.div>

        {/* Floating Cards Animation */}
        <motion.div 
          className="absolute top-1/4 right-1/3 w-32 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-10 dark:opacity-20 shadow-2xl"
          animate={{ rotate: [0, 15, -15, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-40 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-10 dark:opacity-20 shadow-2xl"
          animate={{ rotate: [0, -15, 15, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Mouse Follow Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed pointer-events-none w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
          style={{
            left: bubble.x - 20,
            top: bubble.y - 20,
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

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Find Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Perfect Home</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover luxury properties, expert consultants, and professional management services all in one place.
          </p>
        </motion.div>

        {/* Search Bar with Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative max-w-2xl mx-auto"
        >
          <div className="flex-1 relative">
            <div className="flex items-center gap-2 glass px-6 py-4 rounded-lg w-full">
              <FiSearch className="text-slate-500 flex-shrink-0" size={20} />
              <input
                type="text"
                placeholder="Search properties, consultants..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => searchQuery && setShowSuggestions(true)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 bg-transparent text-slate-700 dark:text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-xl z-50 overflow-hidden"
              >
                <div className="max-h-80 overflow-y-auto">
                  {suggestions.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleNavigate(item.section)}
                      className="px-4 py-3 hover:bg-purple-50 dark:hover:bg-purple-900/30 cursor-pointer transition border-b border-slate-200 dark:border-slate-700 last:border-b-0 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">{item.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.type}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSearch()}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow whitespace-nowrap"
          >
            Search <FiArrowRight />
          </motion.button>
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
            Browse Properties
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass text-slate-700 dark:text-white rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
      </section>
    </>
  );
}

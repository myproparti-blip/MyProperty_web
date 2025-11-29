import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const searchData = [
  { id: 1, name: 'Expert Consultants', type: 'Consulting', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop', section: '#consultants' },
  { id: 2, name: 'Professional Property Management', type: 'Property', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150&h=150&fit=crop', section: '#management' },
  { id: 3, name: 'Mahim Corporation', type: 'Architecture', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150&h=150&fit=crop', section: '#services' },
  { id: 4, name: 'Parent Company', type: 'Organization', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop', section: '#company' },
  { id: 5, name: 'Property Listings', type: 'Properties', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=150&h=150&fit=crop', section: '#properties' },
];

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (value) => {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleNavigate(suggestions[0].section);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search properties, consultants..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            onClick={() => {
              if (suggestions.length > 0) {
                handleNavigate(suggestions[0].section);
              }
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Search
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-lg z-50 overflow-hidden"
          >
            <div className="max-h-80 overflow-y-auto">
              {suggestions.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavigate(item.section)}
                  className="px-4 py-3 hover:bg-teal-50 dark:hover:bg-teal-900/30 cursor-pointer transition flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 last:border-b-0"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/40?text=' + item.name.substring(0, 2);
                    }}
                    className="w-10 h-10 rounded object-cover flex-shrink-0" 
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

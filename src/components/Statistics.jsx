import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Properties Sold', value: 2500, suffix: '+' },
  { label: 'Happy Clients', value: 5000, suffix: '+' },
  { label: 'Expert Agents', value: 150, suffix: '+' },
  { label: 'Awards Won', value: 45, suffix: '' },
];

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrameId;
    let currentValue = 0;
    const increment = stat.value / 50;

    const animate = () => {
      currentValue += increment;
      if (currentValue >= stat.value) {
        setDisplayValue(stat.value);
      } else {
        setDisplayValue(Math.floor(currentValue));
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass rounded-xl p-8 backdrop-blur-xl text-center card-hover group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="h-16 w-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow"
      >
        <span className="text-2xl font-bold text-white">
          {Math.floor(stat.value / 100)}
        </span>
      </motion.div>
      
      <h3 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-2">
        {displayValue.toLocaleString()}{stat.suffix}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 font-semibold">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default function Statistics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            By The <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Proven track record of success in the real estate industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

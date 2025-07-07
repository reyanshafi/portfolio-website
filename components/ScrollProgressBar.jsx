'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const updateVisibility = () => {
      // Show progress bar after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 origin-left"
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Progress Indicator Circle */}
      <motion.div
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/80 border-2 border-gray-700 flex items-center justify-center backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-xs font-mono text-white"
          animate={{ 
            opacity: isVisible ? 1 : 0 
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {Math.round(scrollYProgress.get() * 100)}%
          </motion.span>
        </motion.div>
        
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 48 48"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="125.6"
            style={{
              strokeDashoffset: useSpring(
                scrollYProgress.get() ? 125.6 - (125.6 * scrollYProgress.get()) : 125.6,
                { stiffness: 100, damping: 30 }
              )
            }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
};

export default ScrollProgressBar;

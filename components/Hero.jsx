'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import OptimizedImage from './OptimizedImage';

const headings = [
  'Build. Scale. Deliver.',
  'Design. Code. Deploy.',
  'Crafting Clean User Experiences.',
  'Turning Ideas Into Interfaces.',
  'Full-Stack. Minimal. Impactful.',
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y }}
      role="banner"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center bg-[#0f0f0f] text-white relative pt-20 md:pt-0 overflow-hidden"
    >
      {/* Background Gradient Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circle - top right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-600/20 via-red-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Medium gradient circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-600/15 via-purple-500/10 to-transparent rounded-full blur-2xl"></div>
        
        {/* Small gradient circle - top left */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-400/20 via-pink-500/15 to-transparent rounded-full blur-xl"></div>
        
        {/* Medium gradient circle - center right */}
        <div className="absolute top-1/2 -right-20 w-48 h-48 bg-gradient-to-bl from-purple-600/10 via-indigo-500/8 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">

          {/* Left Text Section */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1
              id="hero-heading"
              key={headings[index]}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-red-600 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              {headings[index]}
            </motion.h1>

            <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed font-light" style={{ fontFamily: 'var(--font-inter)' }}>
              I'm a <strong className="text-white font-semibold">Full-Stack Developer</strong> crafting seamless UI, scalable APIs, and practical solutions across the web.
            </p>

            {/* Available to Work Indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2 py-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Available to Work</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-full hover:bg-red-700 transition-all duration-300 tracking-wide shadow-lg hover:shadow-xl"
                aria-label="Download Resume"
              >
                Download Resume
              </a>

              <a
                href="/about"
                className="inline-block border border-white text-white px-8 py-3 text-sm font-medium rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 tracking-wide"
                aria-label="Explore My Work"
              >
                Explore My Work
              </a>
            </div>
          </motion.div>

          {/* Right Profile Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl drop-shadow-2xl mx-auto animate-smooth">
              <OptimizedImage
                src="/assets/pic.png"
                alt="Portrait of Rayan Shafi"
                width={288}
                height={288}
                priority
                quality={90}
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-white tracking-widest uppercase font-medium" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>RAYAN SHAFI</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

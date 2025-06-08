'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const headings = [
  "Build. Scale. Deliver.",
  "Design. Code. Deploy.",
  "Crafting Clean User Experiences.",
  "Turning Ideas Into Interfaces.",
  "Full-Stack. Minimal. Impactful.",
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y }}
      className="min-h-screen flex items-center bg-[#f7f8fa] text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">

          {/* Left Text Section */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1
              key={headings[index]}
              className="text-4xl sm:text-5xl font-serif font-medium leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {headings[index]}
            </motion.h1>

            <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-base leading-relaxed">
              I’m a <strong className="text-black">Full-Stack Developer</strong> crafting seamless UI, scalable APIs, and practical solutions across the web.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a 
                href="/resume.pdf" 
                download 
                className="inline-block bg-black text-white px-6 py-3 text-sm rounded-full hover:bg-gray-900 transition-all duration-300"
              >
                Download Resume
              </a>

              <a 
                href="/about" 
                className="inline-block border border-black text-black px-6 py-3 text-sm rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300"
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
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-[6px] border-gray-200 shadow-xl mx-auto">
              <img 
                src="/assets/pic.png" 
                alt="Rayan Shafi" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 tracking-wider">FULL STACK DEVELOPER</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

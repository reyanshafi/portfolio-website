'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

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
      className="min-h-screen flex items-center bg-[#1f1f1f] text-white"
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
              id="hero-heading"
              key={headings[index]}
              className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {headings[index]}
            </motion.h1>

            <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-base leading-relaxed">
              I’m a <strong className="text-white">Full-Stack Developer</strong> crafting seamless UI, scalable APIs, and practical solutions across the web.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-red-600 text-white px-6 py-3 text-sm rounded-full hover:bg-red-700 transition-all duration-300"
                aria-label="Download Resume"
              >
                Download Resume
              </a>

              <a
                href="/about"
                className="inline-block border border-white text-white px-6 py-3 text-sm rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300"
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
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl mx-auto">
              <Image
                src="/assets/pic.png"
                alt="Portrait of Rayan Shafi"
                width={288}
                height={288}
                priority
                placeholder="blur"
                blurDataURL="/assets/pic-blur.png"
                className="object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-white tracking-wider uppercase">RAYAN SHAFI</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaUser } from 'react-icons/fa';

// Enhanced testimonials with ratings and images
const testimonials = [
  {
    id: 1,
    quote: "Rayan's development work is exceptional. His code is clean, efficient, and well-structured. The interface is intuitive and the performance exceeds our expectations.",
    author: "Fahid Rafiq",
    role: "Salt Lake Tour & Travels",
    rating: 5,
    image: "/assets/testimonial1.jpg", // If you have these images
    project: "Tour Booking Platform"
  },
  {
    id: 2,
    quote: "The application Rayan delivered exceeded our expectations. His attention to detail is remarkable, and he maintained clear communication throughout the project.",
    author: "Mohammad Ibrahim",
    role: "Suwida Tour & Travels",
    rating: 5,
    image: "/assets/testimonial2.jpg", // If you have these images
    project: "Travel Management System"
  },
  {
    id: 3,
    quote: "Working with Rayan was a pleasure. He consistently delivered high-quality solutions on time and was receptive to feedback. His technical knowledge is impressive.",
    author: "Dr. Arif Khan",
    role: "Assistant Professor, IUST",
    rating: 5,
    image: "/assets/testimonial3.jpg", // If you have these images
    project: "Educational Platform"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef(null);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) =>
      newDirection > 0
        ? prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        : prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => navigate(1), 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 20 : -20
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.3 },
        y: { type: 'spring', stiffness: 300, damping: 25 }
      }
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction < 0 ? 20 : -20
    })
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#171717] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-cyan-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Modern heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm font-mono text-gray-300">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Feedback</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            What clients say about working with me and the solutions I've delivered.
          </motion.p>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[280px] max-w-4xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 h-full flex flex-col md:flex-row gap-8 shadow-xl"
              >
                {/* Left side: Quote and content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="relative">
                      <FaQuoteLeft className="absolute -top-4 -left-2 text-red-600/20 text-4xl" />
                      <blockquote className="text-gray-100 text-lg font-serif leading-relaxed italic relative z-10 mb-6">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                    </div>
                    
                    {/* Project tag */}
                    <div className="mb-4">
                      <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                        {testimonials[currentIndex].project}
                      </span>
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-600"} 
                        size={16} 
                      />
                    ))}
                  </div>
                </div>
                
                {/* Right side: Author info */}
                <div className="md:w-64 flex flex-row md:flex-col items-center md:border-l md:border-gray-700 md:pl-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-red-600/30 flex items-center justify-center bg-gray-800 mr-4 md:mr-0 md:mb-4">
                    {testimonials[currentIndex].image ? (
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUser className="text-gray-400 text-2xl" />
                    )}
                  </div>
                  <div className="flex flex-col md:text-center">
                    <span className="font-semibold text-white text-lg">{testimonials[currentIndex].author}</span>
                    <span className="text-sm text-gray-400">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Enhanced styling */}
          <button
            onClick={() => navigate(-1)}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg hover:shadow-red-600/20"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg hover:shadow-red-600/20"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={18} />
          </button>

          {/* Enhanced indicator dots - Fixed positioning for mobile */}
          <div className="absolute -bottom-24 sm:-bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-8 sm:w-12 h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-gradient-to-r from-red-500 to-purple-600 w-10 sm:w-16' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

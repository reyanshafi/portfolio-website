'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "Rayan's development work is exceptional. His code is clean, efficient, and well-structured.",
    author: "Fahid Rafiq",
    role: "Salt Lake Tour & Travels"
  },
  {
    id: 2,
    quote: "The application Rayan delivered exceeded our expectations. His attention to detail is remarkable.",
    author: "Mohammad Ibrahim",
    role: "Suwida Tour & Travels"
  },
  {
    id: 3,
    quote: "Working with Rayan was a pleasure. He consistently delivered high-quality solutions on time.",
    author: "Dr. Arif Khan",
    role: "Assistant Professor, IUST"
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
    <section className="py-20 bg-[#171717] border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-2">
            Client <span className="text-red-600 font-medium">Feedback</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Insights from those I've collaborated with
          </p>
        </div>

        <div className="relative min-h-[260px] sm:min-h-[250px]">
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
              <div className="border border-gray-700 rounded-lg px-6 py-8 bg-[#1a1a1a] h-full flex flex-col justify-center shadow-md">
                <FaQuoteLeft className="text-red-600 text-xl mb-4" />
                <blockquote className="text-gray-100 text-lg font-serif italic mb-5">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-sm text-gray-400">
                  <span className="font-semibold text-white">{testimonials[currentIndex].author}</span>
                  {' '}· {testimonials[currentIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-10 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full z-10 transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-red-600' : 'bg-gray-500'
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

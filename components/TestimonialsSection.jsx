'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "Rayan's development work is exceptional. His code is clean, efficient, and well-structured.",
    author: "Fahid Rafiq",
    role: "Salt Lake Tour & Travels."
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
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  // Auto-scroll functionality
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        navigate(1);
      }, 8000);
    };

    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      y: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-950 border-t-1 border-amber-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-100 mb-3">
            Client <span className="text-yellow-400 font-medium">Feedback</span>
          </h2>
          <p className="text-gray-400">
            What industry professionals say about my work
          </p>
        </div>

        <div className="relative h-[300px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 h-full flex flex-col justify-center">
                <FaQuoteLeft className="text-yellow-400 text-xl mb-4 opacity-80" />
                <blockquote className="text-gray-300 text-lg italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <p className="text-gray-100 font-medium">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 p-2 rounded-full border border-gray-700 hover:border-yellow-400 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-yellow-400" />
          </button>

          <button 
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 p-2 rounded-full border border-gray-700 hover:border-yellow-400 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-yellow-400" />
          </button>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
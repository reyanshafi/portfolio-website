'use client'
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
    <section className="py-16 bg-[#f7f8fa] border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-2">
            Client <span className="text-black font-normal">Feedback</span>
          </h2>
          <p className="text-gray-600 text-base">
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
              <div className="border border-gray-200 rounded-md px-6 py-8 bg-white h-full flex flex-col justify-center shadow-md">
                <FaQuoteLeft className="text-gray-900 text-xl mb-4" />
                <blockquote className="text-gray-800 text-lg font-serif italic mb-5">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">{testimonials[currentIndex].author}</span> &middot; {testimonials[currentIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent text-gray-900 hover:text-gray-700 transition-colors p-2 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent text-gray-900 hover:text-gray-700 transition-colors p-2 z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="absolute bottom-[-25] left-1/2 transform -translate-x-1/2 flex pt-20 gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'
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

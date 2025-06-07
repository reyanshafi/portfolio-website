'use client'
import { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "Addam's work is exceptional. His designs are clean, intuitive, and user-friendly.",
    author: "Sarah Johnson",
    role: "CEO, TechSolutions Inc."
  },
  {
    id: 2,
    quote: "The website Addam delivered exceeded our expectations. Highly recommended!",
    author: "Michael Chen",
    role: "Marketing Director, DigitalWave"
  },
  {
    id: 3,
    quote: "Working with Addam was a pleasure. His attention to detail is remarkable.",
    author: "Emily Rodriguez",
    role: "Product Manager, InnovateCo"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        nextTestimonial();
      }, 5000);
    };

    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gradient-to-r from-[#161616] to-[#151414] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Testimonials
          </h2>
          <p className="text-xl text-white opacity-90">
            What clients say about my work
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-[#101011] p-8 rounded-xl border border-gray-800 shadow-lg min-h-[250px] flex flex-col justify-center">
            <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />
            <p className="text-white text-lg md:text-xl italic mb-6">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <p className="text-white font-semibold">{testimonials[currentIndex].author}</p>
              <p className="text-gray-300 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#181818] p-3 rounded-full shadow-lg border border-gray-800 hover:bg-[#222222] transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-yellow-400 text-xl" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#181818] p-3 rounded-full shadow-lg border border-gray-800 hover:bg-[#222222] transition-colors z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-yellow-400 text-xl" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
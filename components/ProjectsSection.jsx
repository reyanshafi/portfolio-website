'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiNextdotjs, SiNodedotjs, SiReact, SiMongodb, SiTailwindcss } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: "IUST Alumni Connect",
    description: "Alumni networking platform with admin dashboard",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    image: "/assets/alumni.avif",
    link: "/projects"
  },
  {
    id: 2,
    title: "Hospital System",
    description: "AI-powered patient monitoring system",
    technologies: ["React", "Node.js", "Tailwind"],
    image: "/assets/hospital.jpg",
    link: "/projects"
  },
  {
    id: 3,
    title: "Suwida Tour & Travels",
    description: "Tour booking with payment integration",
    technologies: ["Next.js", "Tailwind", "MongoDB"],
    image: "/assets/travel.png",
    link: "/projects"
  }
];

const techIcons = {
  "Next.js": <SiNextdotjs className="text-gray-300" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "React": <SiReact className="text-blue-400" />,
  "Tailwind": <SiTailwindcss className="text-cyan-400" />
};

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: right, -1: left

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection > 0) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      }
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-100 mb-3">
            Featured <span className="text-yellow-400 font-medium">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select projects showcasing my development expertise
          </p>
        </div>

        <div className="relative h-[500px]">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.a
              key={projects[currentIndex].id}
              href={projects[currentIndex].link}
              className="block h-full"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="h-full bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-yellow-400 transition-colors duration-200">
                <div className="h-2/3 bg-gray-800 overflow-hidden">
                  <img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-100 mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300"
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          </AnimatePresence>

          <button 
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900 p-2 rounded-full border border-gray-700 hover:bg-gray-800 hover:border-yellow-400 transition-colors z-10"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-yellow-400 text-lg" />
          </button>

          <button 
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900 p-2 rounded-full border border-gray-700 hover:bg-gray-800 hover:border-yellow-400 transition-colors z-10"
            aria-label="Next project"
          >
            <FaChevronRight className="text-yellow-400 text-lg" />
          </button>

          <div className="flex justify-center mt-6 gap-1.5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-600'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
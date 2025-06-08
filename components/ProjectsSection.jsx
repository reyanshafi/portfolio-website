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
    image: "/assets/travel.jpg",
    link: "/projects"
  }
];

const techIcons = {
  "Next.js": <SiNextdotjs className="text-black" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "React": <SiReact className="text-blue-500" />,
  "Tailwind": <SiTailwindcss className="text-cyan-500" />
};

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) =>
      newDirection > 0
        ? (prev + 1) % projects.length
        : (prev - 1 + projects.length) % projects.length
    );
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 font-serif mb-2">
            Featured <span className="font-medium text-black">Work</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            A curated selection of real-world projects that reflect my development skillset.
          </p>
        </div>

        <div className="relative h-[500px]">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.a
              key={projects[currentIndex].id}
              href={projects[currentIndex].link}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="block h-full"
            >
              <div className="h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-2/3 overflow-hidden rounded-t-xl">
                  <img 
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{projects[currentIndex].title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{projects[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 border border-gray-300 text-xs rounded-full text-gray-700"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 border border-gray-300 rounded-full shadow hover:bg-gray-100 transition-colors z-10"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 border border-gray-300 rounded-full shadow hover:bg-gray-100 transition-colors z-10"
          >
            <FaChevronRight className="text-gray-800" />
          </button>

          <div className="flex justify-center mt-6 gap-1.5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    title: "Travel Platform",
    description: "Tour booking with payment integration",
    technologies: ["Next.js", "Tailwind", "MongoDB"],
    image: "/projects/travel-platform.jpg",
    link: "/projects/travel-platform"
  }
];

const techIcons = {
  "Next.js": <SiNextdotjs className="text-white" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "React": <SiReact className="text-blue-400" />,
  "Tailwind": <SiTailwindcss className="text-cyan-400" />
};

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#101011] to-[#090909]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Click to view detailed case study
          </p>
        </div>

        <div className="relative h-[500px] text-white">
          <AnimatePresence mode="wait">
            <motion.a
              key={projects[currentIndex].id}
              href={projects[currentIndex].link}
              className="block h-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-[#181818] rounded-xl border border-gray-800 overflow-hidden shadow-lg">
                <div className="h-2/3 bg-gray-900 overflow-hidden">
                  <img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{projects[currentIndex].title}</h3>
                  <p className="text-gray-400 mb-5">{projects[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="flex items-center gap-1 bg-[#101011] px-3 py-1 rounded-full text-sm border border-gray-800"
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
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#181818] p-3 rounded-full shadow-lg border border-gray-800 hover:bg-[#222222] transition-colors z-10"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-yellow-400 text-xl" />
          </button>

          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#181818] p-3 rounded-full shadow-lg border border-gray-800 hover:bg-[#222222] transition-colors z-10"
            aria-label="Next project"
          >
            <FaChevronRight className="text-yellow-400 text-xl" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yellow-400' : 'bg-gray-600'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
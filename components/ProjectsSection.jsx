'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { memo, useState } from 'react';
import OptimizedImage from './OptimizedImage';
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaHeart, FaEye } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'IUST Alumni Connect',
    description: 'Alumni networking platform with role-based authentication and comprehensive admin dashboard.',
    image: '/assets/alumni.avif',
    tech: ['Next.js', 'MongoDB', 'Tailwind'],
    link: '/projects',
    gradient: 'from-green-500/20 to-emerald-600/20',
    accentColor: 'text-green-400',
    year: '2024',
    likes: 24,
  },
  {
    id: 2,
    title: 'Hospital System',
    description: 'AI-based hospital monitoring system with real-time patient care and predictive analytics.',
    image: '/assets/hospital.jpg',
    tech: ['React', 'Express', 'Node.js'],
    link: '/projects',
    gradient: 'from-blue-500/20 to-cyan-600/20',
    accentColor: 'text-blue-400',
    year: '2024',
    likes: 32,
  },
  {
    id: 3,
    title: 'Suwida Tours',
    description: 'Full-featured travel booking platform with secure payment gateway and admin dashboard.',
    image: '/assets/travel.jpg',
    tech: ['Next.js', 'Supabase', 'Razorpay'],
    link: '/projects',
    gradient: 'from-purple-500/20 to-pink-600/20',
    accentColor: 'text-purple-400',
    year: '2023',
    likes: 18,
  },
];

const ProjectCard = memo(function ProjectCard({ project, index }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(project.likes);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col lg:flex-row items-center gap-10 ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl border border-gray-700 group-hover:border-gray-600 transition-colors">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                <FaEye />
                <span className="text-sm">View</span>
              </button>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                <FaGithub />
                <span className="text-sm">Code</span>
              </button>
            </div>
          </div>
          
          {/* Year Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-black/30 text-white border border-white/20">
              {project.year}
            </span>
          </div>
          
          {/* Like Button */}
          <button
            onClick={handleLike}
            className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-black/30 text-white border border-white/20 hover:bg-black/50 transition-colors"
          >
            <FaHeart className={`transition-colors ${isLiked ? 'text-red-500' : 'text-white'}`} />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-3">
          <h3 className={`text-2xl font-semibold ${project.accentColor} font-display`}>
            {project.title}
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-sm px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-full text-gray-300 hover:border-gray-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Link
            href={project.link}
            className={`inline-flex items-center gap-2 ${project.accentColor} hover:text-white text-base font-medium transition-colors group`}
          >
            Learn More
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="flex items-center gap-3 text-gray-400">
            <button className="hover:text-white transition-colors">
              <FaGithub size={18} />
            </button>
            <button className="hover:text-white transition-colors">
              <FaExternalLinkAlt size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const ScrollProjects = memo(function ScrollProjects() {
  return (
    <section className="bg-[#171717] text-white py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-cyan-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm font-mono text-gray-300">Portfolio</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects showcasing my expertise in full-stack development, modern design, and user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-20"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            <span>View All Projects</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

export default ScrollProjects;

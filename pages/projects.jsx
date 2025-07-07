import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { useState, useMemo } from 'react';

import {
  FaReact,
  FaNodeJs,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaArrowRight,
  FaEye,
  FaFilter,
  FaSearch,
  FaClock,
  FaCalendarAlt,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiRazorpay,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const techIcons = {
  "Node.js": <FaNodeJs className="text-green-400" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "React.js": <FaReact className="text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "PostgreSQL": <SiPostgresql className="text-blue-400" />,
  "Supabase": <SiSupabase className="text-lime-400" />,
  "Razorpay": <SiRazorpay className="text-sky-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
};

const projects = [
  {
    id: 1,
    title: "IUST Alumni Connect Platform",
    description: "University alumni networking platform with role-based authentication and admin controls.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    features: [
      "Secure user registration system",
      "Admin/alumni differentiated access",
      "RESTful API endpoints",
      "Future LinkedIn API integration",
    ],
    status: "In Progress",
    github: "https://github.com/reyanshafi/alumni-backend",
    demo: null,
    image: "/assets/alumni.avif",
    category: "Backend Development",
    gradient: "from-green-500/20 to-emerald-600/20",
    accentColor: "text-green-400",
    featured: true,
    year: "2024",
    duration: "3 months",
    team: "Solo",
    likes: 24,
  },
  {
    id: 2,
    title: "AI Hospital Management System",
    description: "Comprehensive hospital system with AI-driven patient care monitoring and management.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    features: [
      "Real-time patient monitoring",
      "AI-based health predictions", 
      "Staff management system",
      "Appointment scheduling",
    ],
    status: "In Progress",
    github: "https://github.com/reyanshafi/",
    demo: null,
    image: "/assets/hospital.jpg",
    category: "Healthcare Tech",
    gradient: "from-blue-500/20 to-cyan-600/20",
    accentColor: "text-blue-400",
    featured: true,
    year: "2024",
    duration: "4 months",
    team: "Solo",
    likes: 32,
  },
  {
    id: 3,
    title: "Suwida Tour and Travels",
    description: "Responsive tour booking platform with a full-featured admin panel.",
    technologies: ["React.js", "Next.js", "PostgreSQL", "Supabase", "Razorpay"],
    features: [
      "Clean minimal UI with Tailwind CSS",
      "Real-time updates via Supabase",
      "Razorpay integration for payments",
      "Admin panel with dynamic controls",
    ],
    status: "Completed",
    demo: null,
    dashboard: "https://suwidatourandtravels.in",
    image: "/assets/travel.jpg",
    category: "Tour and Travels",
    gradient: "from-purple-500/20 to-pink-600/20",
    accentColor: "text-purple-400",
    featured: true,
    year: "2023",
    duration: "2 months",
    team: "Solo",
    likes: 18,
  },
  {
    id: 4,
    title: "Salt Lake Tour & Travels",
    description: "Complete tour platform with booking system and admin dashboard.",
    technologies: ["React.js", "Next.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Modern responsive design",
      "Real-time package management",
      "Secure payment integration",
      "Admin control panel",
    ],
    status: "Completed",
    demo: null,
    dashboard: "https://saltlaketourandtravels.in",
    image: "/assets/travel.png",
    category: "Tour and Travels",
    gradient: "from-orange-500/20 to-red-600/20",
    accentColor: "text-orange-400",
    featured: true,
    year: "2023",
    duration: "2 months",
    team: "Solo",
    likes: 15,
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description: "A modern, responsive developer portfolio showcasing skills and projects.",
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    features: [
      "Dark theme with modern design",
      "Smooth animations with Framer Motion",
      "SEO optimized with dynamic meta tags",
      "Fully responsive layout",
    ],
    status: "Completed",
    demo: "https://reyannshafi.vercel.app",
    dashboard: "https://reyannshafi.vercel.app",
    image: "/assets/pic.png",
    category: "Portfolio",
    gradient: "from-red-500/20 to-pink-600/20",
    accentColor: "text-red-400",
    featured: true,
    year: "2024",
    duration: "1 month",
    team: "Solo",
    likes: 28,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(project.likes);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };
  
  return (
    <motion.div
      variants={itemVariants}
      className="group relative mb-20 lg:mb-32"
    >
      {/* Featured Project Layout */}
      <div className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
            <OptimizedImage
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                project.status === "Completed" 
                  ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                  : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
              }`}>
                {project.status}
              </span>
            </div>
            {/* Year Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-black/20 text-white border border-white/20">
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
          {/* Project Stats */}
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-xs" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="text-xs" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="text-xs" />
              <span>{project.team}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-3">
            <div className={`text-sm font-mono ${project.accentColor} tracking-wider`}>
              {project.category}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
              {project.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:border-gray-600 hover:bg-[#202020]"
                >
                  {techIcons[tech]}
                  <span className="text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className={`${project.accentColor} mr-3 mt-1 text-sm`}>▶</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            {(project.demo || project.dashboard) && (
              <a
                href={project.demo || project.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient.replace('/20', '')} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-black/20 transition-all duration-300 group/btn`}
              >
                <FaEye />
                View Live
                <FaArrowRight className="transition-transform group-hover/btn:translate-x-1" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                <FaGithub />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const statuses = ['All', 'Completed', 'In Progress'];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatus]);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <>
      <SEO />
      <Navbar />
      <main className="bg-[#171717] text-white min-h-screen pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-500/5 to-yellow-600/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full">
                <FaCode className="text-red-500" />
                <span className="text-sm font-mono text-gray-300">My Work</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-display">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Projects</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body leading-relaxed">
                A showcase of my recent work in full-stack development, from healthcare solutions to e-commerce platforms. Each project demonstrates my commitment to clean code, modern design, and user experience.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <div className="flex items-center gap-2 text-green-400">
                  <FaRocket />
                  <span className="text-sm font-mono">{projects.filter(p => p.status === 'Completed').length} Completed</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400">
                  <FaLightbulb />
                  <span className="text-sm font-mono">{projects.filter(p => p.status === 'In Progress').length} In Progress</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <FaCode />
                  <span className="text-sm font-mono">{projects.length} Total Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-10 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 items-center justify-between"
            >
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <FaFilter className="text-gray-400" />
                  <span className="text-sm text-gray-400">Filter by status:</span>
                </div>
                
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-full text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-center text-sm text-gray-400"
            >
              Showing {filteredProjects.length} of {projects.length} projects
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <AnimatePresence mode="wait">
          {featuredProjects.length > 0 && (
            <motion.section
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* No Results */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <div className="max-w-md mx-auto px-6">
                <FaSearch className="mx-auto text-4xl text-gray-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedStatus('All');
                  }}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

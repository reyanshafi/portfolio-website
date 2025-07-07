import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';

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
import { motion } from "framer-motion";

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
  },
  {
    id: 3,
    title: "Suwida Travel Booking Platform",
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
    category: "E-commerce",
    gradient: "from-purple-500/20 to-pink-600/20",
    accentColor: "text-purple-400",
    featured: false,
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
    image: "/assets/saltlake.png",
    category: "Web Development",
    gradient: "from-orange-500/20 to-red-600/20",
    accentColor: "text-orange-400",
    featured: false,
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
    featured: false,
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
  
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative mb-20 ${project.featured ? 'lg:mb-32' : ''}`}
    >
      {/* Featured Project Layout */}
      {project.featured ? (
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-2xl">
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
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "Completed" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-3">
              <div className={`text-sm font-mono ${project.accentColor} tracking-wider`}>
                {project.category}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-display">
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
                    className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full text-sm transition-colors hover:border-gray-600"
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
            <div className="flex flex-wrap gap-4 pt-4">
              {(project.demo || project.dashboard) && (
                <a
                  href={project.demo || project.dashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient.replace('/20', '')} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group/btn`}
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
                  className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  <FaGithub />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Regular Project Card */
        <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 group/card">
          <div className="relative">
            <OptimizedImage
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover/card:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
            <div className="absolute top-4 right-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === "Completed" 
                  ? "bg-green-500/80 text-white" 
                  : "bg-yellow-500/80 text-white"
              }`}>
                {project.status}
              </span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className={`text-xs font-mono ${project.accentColor} tracking-wider uppercase`}>
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#171717] border border-gray-700 text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            <div className="flex justify-between items-center pt-4">
              <div className="flex gap-3">
                {(project.demo || project.dashboard) && (
                  <a
                    href={project.demo || project.dashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.accentColor} hover:text-white transition-colors`}
                    title="View Live"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title="View Code"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
              <div className="text-xs text-gray-500">
                {project.features.length} features
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

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

        {/* Featured Projects */}
        <section className="py-20">
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
        </section>

        {/* Other Projects */}
        {regularProjects.length > 0 && (
          <section className="py-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                  Other <span className="text-red-500">Projects</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Additional projects showcasing various technologies and solutions
                </p>
              </motion.div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {regularProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

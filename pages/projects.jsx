import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";

import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaExternalLinkAlt,
  FaGithub
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiRazorpay
} from "react-icons/si";
import { motion } from "framer-motion";

const techIcons = {
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-100" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "React.js": <FaReact className="text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "PostgreSQL": <SiPostgresql className="text-blue-300" />,
  "Supabase": <SiSupabase className="text-green-400" />,
  "Razorpay": <SiRazorpay className="text-blue-500" />
};

const projects = [
  {
    title: "IUST Alumni Connect Platform",
    description: "University alumni networking platform with role-based authentication and admin controls",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    features: [
      "Secure user registration system",
      "Admin/alumni differentiated access",
      "RESTful API endpoints",
      "Future LinkedIn API integration"
    ],
    status: "In Progress",
    github: "https://github.com/reyanshafi/alumni-backend",
    demo: null
  },
  {
    title: "AI Hospital System",
    description: "Critical Patient Alert System for hospital management with real-time notifications",
    technologies: ["React.js", "Node.js", "MongoDB"],
    features: [
      "Real-time alert architecture",
      "Patient data categorization",
      "Triage queuing system",
      "Automated alert dispatch"
    ],
    status: "In Progress",
    github: "https://github.com/reyanshafi/",
    demo: null
  },
  {
    title: "Suwida Tour & Travels",
    description: "Complete tour platform with booking system and admin dashboard",
    technologies: ["React.js", "Next.js", "PostgreSQL"],
    features: [
      "Modern responsive UI",
      "Supabase integration",
      "Razorpay payment system",
      "Real-time package management"
    ],
    status: "Completed",
    demo: "https://www.suwidatourandtravels.in",
    dashboard: "https://admin.suwidatourandtravels.in"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
            >
              My <span className="text-yellow-400">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Professional and freelance work showcasing my development expertise
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="h-full bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 relative z-10 flex flex-col">
                  <div className="p-5 sm:p-6 flex-grow">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <h2 className="text-lg sm:text-xl font-bold">{project.title}</h2>
                      <span className={`px-2 sm:px-3 py-1 w- rounded-full text-xs font-medium ${project.status === "Completed" ? "bg-green-900/30 text-green-400" : "bg-yellow-900/30 text-yellow-400"}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4 sm:mb-5 text-sm">{project.description}</p>
                    
                    <div className="mb-4 sm:mb-5">
                      <h3 className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2 sm:mb-3 flex items-center">
                        <span className="w-4 h-0.5 bg-yellow-400 mr-2"></span>
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.technologies.map((tech, i) => (
                          <div 
                            key={i} 
                            className="flex items-center gap-1 sm:gap-2 bg-gray-800 px-2 sm:px-3 py-1 rounded-lg border border-gray-700 text-xs sm:text-sm"
                          >
                            {techIcons[tech]}
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2 sm:mb-3 flex items-center">
                        <span className="w-4 h-0.5 bg-yellow-400 mr-2"></span>
                        Key Features
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-400 mr-1.5 sm:mr-2 mt-0.5 sm:mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="px-5 sm:px-6 py-3 sm:py-4 bg-gray-800 border-t border-gray-700 flex justify-between items-center">
                    {project.demo ? (
                      <>
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm font-medium flex items-center group"
                        >
                          Live Demo
                          <FaExternalLinkAlt className="ml-1.5 sm:ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        {project.dashboard && (
                          <a 
                            href={project.dashboard}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-400 text-xs sm:text-sm font-medium flex items-center group"
                          >
                            Dashboard
                            <FaExternalLinkAlt className="ml-1.5 sm:ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        )}
                      </>
                    ) : (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 text-xs sm:text-sm font-medium flex items-center group"
                      >
                        <FaGithub className="mr-1.5 sm:mr-2" />
                        View Code
                        <FaExternalLinkAlt className="ml-1.5 sm:ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
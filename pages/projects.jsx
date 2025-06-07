import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiRazorpay
} from "react-icons/si";
import { motion } from "framer-motion";
import "../app/globals.css";

// Icon mapping for technologies
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
    dashboard: null
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
    dashboard: null
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
    website: "https://www.suwidatourandtravels.in",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              My <span className="text-yellow-400">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Professional and freelance work showcasing my development expertise
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-yellow-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="h-full bg-gradient-to-br from-[#101011] to-[#1a1a1d] rounded-xl border border-gray-800 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Completed" ? "bg-green-900/30 text-green-400" : "bg-yellow-900/30 text-yellow-400"}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-5 text-sm">{project.description}</p>
                  
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center">
                      <span className="w-4 h-0.5 bg-yellow-400 mr-2"></span>
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 bg-[#090909] px-3 py-1.5 rounded-lg border border-gray-800 text-sm"
                        >
                          {techIcons[tech]}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center">
                      <span className="w-4 h-0.5 bg-yellow-400 mr-2"></span>
                      Key Features
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-400 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-[#090909] border-t border-gray-800 flex justify-between items-center">
                  {/* First two projects show GitHub repo */}
                  {index < 2 ? (
                    <>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center group"
                      >
                        <FaGithub className="mr-2" />
                        GitHub Repo
                        <FaExternalLinkAlt className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </>
                  ) : (
                    <>
                      {/* Last project shows website and dashboard links */}
                      <a 
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center group"
                      >
                        Visit Website
                        <FaExternalLinkAlt className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
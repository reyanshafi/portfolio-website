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
};

const projects = [
  {
    title: "IUST Alumni Connect Platform",
    description:
      "University alumni networking platform with role-based authentication and admin controls.",
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
  },
  {
    title: "AI Hospital System",
    description:
      "Critical Patient Alert System for hospital management with real-time notifications.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    features: [
      "Real-time alert architecture",
      "Patient data categorization",
      "Triage queuing system",
      "Automated alert dispatch",
    ],
    status: "In Progress",
    github: "https://github.com/reyanshafi/",
    demo: null,
  },
  // Add this inside your `projects` array (as the last item):

{
  title: "Personal Portfolio Website",
  description:
    "A clean, responsive developer portfolio showcasing skills, projects, and contact options.",
  technologies: ["React.js", "Next.js", "Tailwind CSS"],
  features: [
    "Minimalistic design with Tailwind CSS",
    "Smooth animations with Framer Motion",
    "SEO optimized with dynamic meta tags",
    "Fully responsive layout"
  ],
  status: "Completed",
  demo: null,
  dashboard: "https://reyannshafi.vercel.app"
},

  {
    title: "Suwida Tour & Travels",
    description:
      "Complete tour platform with booking system and admin dashboard.",
    technologies: ["React.js", "Next.js", "PostgreSQL"],
    features: [
      "Modern responsive UI",
      "Supabase integration",
      "Razorpay payment system",
      "Real-time package management",
    ],
    status: "Completed",
    demo: null,
    dashboard: "https://suwidatourandtravels.in",
  },
  {
    title: "Salt Lake Tour & Travels",
    description:
      "Responsive tour booking platform with a full-featured admin panel.",
    technologies: ["React.js", "Next.js", "PostgreSQL"],
    features: [
      "Clean minimal UI with Tailwind CSS",
      "Real-time updates via Supabase",
      "Razorpay integration for secure payments",
      "Admin panel with dynamic controls",
    ],
    status: "Completed",
    demo: null,
    dashboard: "https://saltlaketourandtravels.in",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  return (
    <>
      <SEO />
      <Navbar />
      <main className="bg-[#171717] text-white min-h-screen pt-20 md:pt-24">
        <section className="min-h-[40vh] flex items-center justify-center border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-serif font-medium mb-4"
            >
              My <span className="text-red-600">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-400 max-w-md mx-auto text-lg"
            >
              Professional and freelance work showcasing my development expertise.
            </motion.p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                <div className="h-full bg-[#1a1a1a] rounded-xl border border-gray-700 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="p-6 flex-grow space-y-4">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-serif font-medium text-white">
                        {project.title}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          project.status === "Completed"
                            ? "bg-green-900 text-green-400"
                            : "bg-yellow-900 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm">{project.description}</p>

                    <div>
                      <h3 className="text-xs font-medium text-gray-500 mb-2 flex items-center">
                        <span className="w-4 h-0.5 bg-gray-600 mr-2"></span>
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-[#171717] px-3 py-1 rounded-full border border-gray-600 text-xs text-white"
                          >
                            {techIcons[tech]}
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-medium text-gray-500 mb-2 flex items-center">
                        <span className="w-4 h-0.5 bg-gray-600 mr-2"></span>
                        Key Features
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-400">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-red-600 mr-2 mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-[#171717] border-t border-gray-700 flex justify-end items-center gap-4">
                    {project.dashboard && (
                      <a
                        href={project.dashboard}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 text-sm font-medium flex items-center group"
                      >
                        Live Dashboard
                        <FaExternalLinkAlt className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {!project.demo && !project.dashboard && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-500 text-sm font-medium flex items-center group"
                      >
                        <FaGithub className="mr-2" />
                        View Code
                        <FaExternalLinkAlt className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
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

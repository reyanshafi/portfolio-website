import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import "../app/globals.css";

import {
  FaReact, FaNodeJs, FaDatabase, FaCode, FaTools,
  FaPalette, FaBriefcase, FaUserTie, FaGraduationCap,
  FaRocket, FaLightbulb, FaArrowRight, FaDownload,
  FaCalendarAlt, FaMapMarkerAlt, FaHeart
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiJavascript, SiExpress,
  SiBootstrap, SiPostgresql, SiMongodb, SiGithub,
  SiPostman, SiFigma, SiCanva, SiFirebase,
} from "react-icons/si";
import { useMemo } from "react";

const useIconMap = () =>
  useMemo(() => ({
    JavaScript: <SiJavascript className="text-yellow-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    "Express.js": <SiExpress className="text-gray-300" />,
    "React.js": <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    Bootstrap: <SiBootstrap className="text-purple-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    "Git/GitHub": <SiGithub className="text-gray-300" />,
    Postman: <SiPostman className="text-orange-400" />,
    "JWT/OAuth": <FaTools className="text-blue-500" />,
    MongoDB: <SiMongodb className="text-green-400" />,
    PostgreSQL: <SiPostgresql className="text-blue-400" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    Figma: <SiFigma className="text-pink-400" />,
    Canva: <SiCanva className="text-sky-400" />,
  }), []);

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <FaCode className="text-red-600 text-xl" />,
    items: ["JavaScript", "Node.js", "Express.js", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
    gradient: "from-red-500/20 to-orange-600/20",
    accentColor: "text-red-400",
  },
  {
    category: "Tools & Technologies",
    icon: <FaTools className="text-blue-600 text-xl" />,
    items: ["Git/GitHub", "Postman", "JWT/OAuth"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    accentColor: "text-blue-400",
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-green-600 text-xl" />,
    items: ["MongoDB", "PostgreSQL", "Firebase"],
    gradient: "from-green-500/20 to-emerald-600/20",
    accentColor: "text-green-400",
  },
  {
    category: "Design Tools",
    icon: <FaPalette className="text-purple-600 text-xl" />,
    items: ["Figma", "Canva"],
    gradient: "from-purple-500/20 to-pink-600/20",
    accentColor: "text-purple-400",
  },
];

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Cognifyz Technologies",
    icon: <FaBriefcase className="text-green-600 text-xl" />,
    period: "2023 - 2024",
    duration: "1 year",
    type: "Internship",
    gradient: "from-green-500/20 to-emerald-600/20",
    accentColor: "text-green-400",
    points: [
      "Developed scalable front‑end and back‑end components",
      "Integrated RESTful APIs improving efficiency by 25%",
      "Ensured seamless user interactions and consistent functionality",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self‑Employed",
    icon: <FaBriefcase className="text-blue-600 text-xl" />,
    period: "2024 – Present",
    duration: "Ongoing",
    type: "Freelance",
    gradient: "from-blue-500/20 to-cyan-600/20",
    accentColor: "text-blue-400",
    points: [
      "Built responsive websites using React.js, Next.js, and Tailwind CSS",
      "Integrated Supabase and PostgreSQL for real‑time data management",
      "Implemented Razorpay payment gateway and automated email notifications",
    ],
  },
];

const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science & Engineering",
  university: "Islamic University of Science & Technology (IUST)",
  period: "2021 - 2025",
  location: "Kashmir, India",
  gradient: "from-purple-500/20 to-pink-600/20",
  accentColor: "text-purple-400",
};

export default function About() {
  const iconMap = useIconMap();

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

  return (
    <>
      <SEO />
      <ScrollProgressBar />
      <Navbar />
      <main id="about" className="bg-[#171717] text-white min-h-screen pt-20 md:pt-24">
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
                <FaUserTie className="text-red-500" />
                <span className="text-sm font-mono text-gray-300">About Me</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-display">
                Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Me Better</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body leading-relaxed">
                MERN Stack Developer from Kashmir, India. Passionate about creating scalable web applications with clean code and exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <div className="flex items-center gap-2 text-green-400">
                  <FaCalendarAlt />
                  <span className="text-sm font-mono">1.5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <FaMapMarkerAlt />
                  <span className="text-sm font-mono">Kashmir, India</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <FaGraduationCap />
                  <span className="text-sm font-mono">CS Engineering</span>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl group"
                >
                  <FaDownload />
                  <span>Download Resume</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Profile Summary Section */}
        <section className="py-20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                Profile <span className="text-red-500">Summary</span>
              </h2>
              <p className="text-gray-400 text-lg">
                My journey as a developer and what drives me
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto group"
            >
              <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 group-hover:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaHeart className="text-2xl text-red-500" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed font-body">
                      Energetic web developer with <span className="text-red-400 font-semibold">1.5+ years of experience</span> in the MERN stack and a background in freelancing. Skilled in building scalable, secure web applications with a focus on clean code and user-centric design.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      I'm passionate about creating digital experiences that make a difference. From backend APIs to beautiful frontends, I love the entire process of bringing ideas to life through code.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                Technical <span className="text-red-500">Skills</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Technologies and tools I work with daily
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {skills.map((group, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all duration-300 group hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-60`}></div>
                    <div className="relative p-6 text-center">
                      <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {group.icon}
                      </div>
                      <h3 className={`text-xl font-bold font-display ${group.accentColor} group-hover:text-white transition-colors duration-300`}>
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {group.items.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-[#171717] border border-gray-700 rounded-lg hover:border-gray-600 transition-all duration-300 hover:shadow-md hover:shadow-black/20 group/skill"
                      >
                        <div className="group-hover/skill:scale-110 transition-transform duration-300">
                          {iconMap[skill]}
                        </div>
                        <span className="text-white font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                Work <span className="text-red-500">Experience</span>
              </h2>
              <p className="text-gray-400 text-lg">
                My professional journey and achievements
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Experience Image/Icon Section */}
                    <div className="w-full lg:w-1/3 relative">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                        <div className="relative p-8 text-center bg-[#1a1a1a] border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                          <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            {exp.icon}
                          </div>
                          <div className="space-y-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-black/20 ${exp.accentColor} border border-white/20 group-hover:border-white/40 transition-colors duration-300`}>
                              {exp.type}
                            </span>
                            <div className="text-sm text-gray-400 mt-4">
                              <div className="flex items-center justify-center gap-1 mb-2">
                                <FaCalendarAlt className="text-xs" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center justify-center gap-1">
                                <FaRocket className="text-xs" />
                                <span>{exp.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Experience Content */}
                    <div className="w-full lg:w-2/3 space-y-6">
                      <div className="space-y-3">
                        <div className={`text-sm font-mono ${exp.accentColor} tracking-wider`}>
                          {exp.company}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white font-display">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <span className={`${exp.accentColor} mr-3 mt-1 text-sm`}>▶</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                <span className="text-red-500">Education</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Academic background and qualifications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12 group">
                {/* Education Image/Icon Section */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${education.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    <div className="relative p-8 text-center bg-[#1a1a1a] border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                      <div className="w-24 h-24 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FaGraduationCap className="text-3xl text-purple-500" />
                      </div>
                      <div className="space-y-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium bg-black/20 ${education.accentColor} border border-white/20 group-hover:border-white/40 transition-colors duration-300`}>
                          Current Student
                        </span>
                        <div className="text-sm text-gray-400 space-y-2">
                          <div className="flex items-center justify-center gap-1">
                            <FaCalendarAlt className="text-xs" />
                            <span>{education.period}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <FaMapMarkerAlt className="text-xs" />
                            <span>{education.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-3">
                    <div className={`text-sm font-mono ${education.accentColor} tracking-wider`}>
                      {education.university}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white font-display leading-tight">
                      {education.degree}
                    </h3>
                    <p className="text-gray-300 text-lg font-body">
                      {education.field}
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-6 group-hover:border-gray-700 transition-colors duration-300">
                    <p className="text-gray-400 leading-relaxed">
                      Currently pursuing my final year in Computer Science & Engineering at IUST, Kashmir. 
                      This program has provided me with a strong foundation in software development, 
                      algorithms, and system design.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";
import SEO from '@/components/SEO';

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaTools,
  FaPalette,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiExpress,
  SiBootstrap,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { useMemo } from "react";

// Memoized icon map
const useIconMap = () =>
  useMemo(() => ({
    JavaScript: <SiJavascript className="text-yellow-500" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    "Express.js": <SiExpress className="text-gray-800" />,
    "React.js": <FaReact className="text-blue-500" />,
    "Next.js": <SiNextdotjs className="text-gray-800" />,
    Bootstrap: <SiBootstrap className="text-purple-600" />,
    "Tailwind CSS": <SiTailwindcss className="text-blue-400" />,
    "Git/GitHub": <SiGithub className="text-gray-800" />,
    Postman: <SiPostman className="text-orange-500" />,
    "JWT/OAuth": <FaTools className="text-blue-600" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    PostgreSQL: <SiPostgresql className="text-blue-600" />,
    Figma: <SiFigma className="text-pink-500" />,
    Canva: <SiCanva className="text-blue-400" />,
  }), []);

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <FaCode className="text-blue-600 text-xl" />,
    items: ["JavaScript", "Node.js", "Express.js", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Tools & Technologies",
    icon: <FaTools className="text-blue-600 text-xl" />,
    items: ["Git/GitHub", "Postman", "JWT/OAuth"],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-blue-600 text-xl" />,
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Design Tools",
    icon: <FaPalette className="text-blue-600 text-xl" />,
    items: ["Figma", "Canva"],
  },
];

// Added Freelance entry here
const experiences = [
  {
    role: "Full Stack Intern",
    company: "Cognifyz Technologies",
    icon: <FaBriefcase className="text-blue-600 text-xl" />,
    period: "2023 - 2024",
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
    points: [
      "Built responsive websites using React.js, Next.js, and Tailwind CSS",
      "Integrated Supabase and PostgreSQL for real‑time data management",
      "Implemented Razorpay payment gateway and automated email notifications",
    ],
  },
];



export default function About() {
  const iconMap = useIconMap();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <>
      <SEO />
      <Navbar />
      <main className="bg-[#f7f8fa] text-gray-800 min-h-screen">
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[40vh] flex items-center justify-center border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center py-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium mb-4">
              About <span className="text-gray-900">Me</span>
            </h1>
            <p className="text-gray-600 max-w-md mx-auto text-lg">
              MERN Stack Developer from J&K, India
            </p>
          </div>
        </motion.header>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
          {/* Profile Summary */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6 border-b border-gray-200 pb-12"
          >
            <SectionHeading icon={<FaUserTie />} title="Profile Summary" />
            <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
              Energetic web developer with 1.5 years of experience in the MERN stack and a background in freelancing. Skilled in building scalable, secure web applications with a focus on clean code and user-centric design.
            </p>
          </motion.section>

          {/* Technical Skills */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-12 border-b border-gray-200 pb-16"
          >
            <SectionHeading icon={<FaCode />} title="Technical Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((group, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    {group.icon}
                    <h3 className="font-serif font-medium text-xl">{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {group.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm hover:shadow-sm transition-all"
                      >
                        {iconMap[skill]}
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Professional Experience */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-12"
          >
            <SectionHeading icon={<FaBriefcase />} title="Professional Experience" />
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6 border border-gray-200 rounded-lg p-6 bg-white"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {exp.icon}
                      <div>
                        <h3 className="font-serif font-medium text-xl">{exp.role}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <ul className="space-y-3 pl-6 text-gray-600 list-disc">
                    {exp.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const SectionHeading = ({ icon, title }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-8"
  >
    <div className="p-2 bg-blue-100 rounded-full">{icon}</div>
    <h2 className="text-2xl font-serif font-medium">{title}</h2>
  </motion.div>
);

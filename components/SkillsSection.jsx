'use client';

import { FaReact, FaNodeJs, FaDatabase, FaCode, FaFire, FaDocker, FaGitAlt, FaGithub, FaCreditCard, FaRobot, FaJava, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiFigma,
  SiPostman,
  SiBootstrap,
  SiVercel,
  SiCanva,
  SiC,
  SiCplusplus
} from "react-icons/si";

import { motion } from "framer-motion";

// Skill categories with icons
const skillCategories = [
  {
    category: "Programming Languages",
    icon: <FaCode className="text-blue-500" />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 85 },
      { name: "Python", icon: <FaPython className="text-blue-600" />, level: 50 },
      { name: "Java", icon: <FaJava className="text-red-600" />, level: 50 },
      { name: "C++", icon: <SiCplusplus className="text-blue-700" />, level: 85 },
      { name: "C", icon: <SiC className="text-gray-600" />, level: 85 },
    ]
  },
  {
    category: "Frontend",
    icon: <FaReact className="text-blue-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, level: 80 },
      { name: "Framer Motion", icon: <SiTypescript className="text-blue-500" />, level: 80 },
    ]
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 85 },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 85 },
      { name: "MongoDB", icon: <FaDatabase className="text-green-400" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, level: 75 },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" />, level: 75 },
      { name: "REST APIs", icon: <FaCode className="text-purple-400" />, level: 90 },
    ]
  },
  {
    category: "Tools & Design",
    icon: <SiFigma className="text-pink-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
      { name: "GitHub", icon: <FaGithub className="text-white" />, level: 85 },
      { name: "Postman", icon: <SiPostman className="text-orange-600" />, level: 85 },
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 40 },
      { name: "Figma", icon: <SiFigma className="text-pink-400" />, level: 75 },
      { name: "Canva", icon: <SiCanva className="text-blue-400" />, level: 70 },
    ]
  },
  {
    category: "Deployment & Integration",
    icon: <SiVercel className="text-white" />,
    skills: [
      { name: "Vercel", icon: <SiVercel className="text-white" />, level: 80 },
      { name: "Razorpay", icon: <FaCreditCard className="text-blue-600" />, level: 75 },
      { name: "JWT/OAuth", icon: <FaCode className="text-yellow-500" />, level: 80 },
    ]
  }
];

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-b from-[#171717] to-[#0f0f0f] border-t border-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-cyan-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm font-mono text-gray-300">Tech Stack</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Expertise</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Tools and technologies I use to build clean, responsive, and intelligent interfaces.
          </motion.p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#252525] rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-red-500 to-purple-600"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Marquee (additional floating skills - optional) */}
        <div className="mt-16 relative overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform py-6">
            {[...skillCategories.flatMap(cat => cat.skills), ...skillCategories.flatMap(cat => cat.skills)].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="inline-flex items-center mx-3 px-5 py-3 bg-[#1a1a1a] border border-gray-800 rounded-full shadow-lg hover:shadow-xl hover:border-red-600/50 transition-all duration-300"
              >
                <div className="mr-2 text-xl">{skill.icon}</div>
                <span className="text-sm font-medium text-gray-200">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        `}</style>
      </div>
    </motion.section>
  );
}

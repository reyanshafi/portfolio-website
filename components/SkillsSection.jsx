'use client';

import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiExpress
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "REST APIs", icon: <FaNodeJs className="text-purple-400" /> }
];

export default function SkillsMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-[#1f1f1f] border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mb-2">
            Technical <span className="font-medium text-red-600">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Tools and technologies I use to build clean, responsive, and intelligent interfaces.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center mx-3 px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-full shadow-sm hover:border-red-600 transition-all duration-300"
              >
                <div className="mr-2 text-lg">{skill.icon}</div>
                <span className="text-sm text-gray-200 font-medium hover:text-red-600 transition-colors duration-300">
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

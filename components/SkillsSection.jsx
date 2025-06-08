'use client'
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiGraphql,
  SiExpress 
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "REST APIs", icon: <FaNodeJs className="text-purple-400" /> }
];

export default function SkillsMarquee() {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-800 mb-2">
            Technical <span className="font-medium text-black">Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Tools and technologies I use to build clean, responsive, and intelligent interfaces.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div 
                key={index}
                className="inline-flex items-center mx-3 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:border-black/10 transition-all duration-300"
              >
                <div className="mr-2 text-lg">
                  {skill.icon}
                </div>
                <span className="text-sm text-gray-700 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Animation styles */}
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
    </section>
  );
}

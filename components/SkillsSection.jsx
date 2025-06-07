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
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
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
    <section className="py-16 bg-gray-950 overflow-hidden border-t-1 border-b-1 border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-100 mb-3">
            Technical <span className="text-yellow-400 font-medium">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to build exceptional digital experiences
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="inline-flex items-center mx-4 px-5 py-2.5 bg-gray-900 rounded-full border border-gray-800 hover:border-yellow-400 transition-colors duration-200"
              >
                <div className="mr-3 text-xl">
                  {skill.icon}
                </div>
                <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
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
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
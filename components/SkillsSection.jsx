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
  { name: "REST APIs", icon: <FaNodeJs className="text-purple-400" /> } // Using Node icon for APIs
];

export default function SkillsMarquee() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#101011] to-[#090909] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
            My <span className="text-yellow-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies I work with daily
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden text-white">
          {/* Double the items for seamless looping */}
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="inline-flex items-center mx-6 px-6 py-3 bg-[#181818] rounded-full border border-gray-800 shadow-md hover:border-yellow-400 transition-colors"
              >
                <div className="mr-3 text-2xl">
                  {skill.icon}
                </div>
                <span className="font-medium">{skill.name}</span>
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
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
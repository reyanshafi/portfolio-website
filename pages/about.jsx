import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaServer,
  FaTools,
  FaPalette,
  FaBriefcase,
  FaUserTie
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiBootstrap,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiCanva
} from "react-icons/si";

const iconMap = {
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "Node.js": <FaNodeJs className="text-yellow-400" />,
  "Express.js": <SiExpress className="text-yellow-400" />,
  "React.js": <FaReact className="text-yellow-400" />,
  "Next.js": <SiNextdotjs className="text-yellow-400" />,
  "Bootstrap": <SiBootstrap className="text-yellow-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-yellow-400" />,
  "Git/GitHub": <SiGithub className="text-yellow-400" />,
  "Postman": <SiPostman className="text-yellow-400" />,
  "JWT/OAuth": <FaTools className="text-yellow-400" />,
  "MongoDB": <SiMongodb className="text-yellow-400" />,
  "PostgreSQL": <SiPostgresql className="text-yellow-400" />,
  "Figma": <SiFigma className="text-yellow-400" />,
  "Canva": <SiCanva className="text-yellow-400" />
};

export default function About() {
  const skills = [
    { 
      category: "Languages & Frameworks", 
      icon: <FaCode className="text-xl text-yellow-400" />,
      items: ["JavaScript", "Node.js", "Express.js", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"] 
    },
    { 
      category: "Tools & Technologies", 
      icon: <FaTools className="text-xl text-yellow-400" />,
      items: ["Git/GitHub", "Postman", "JWT/OAuth"] 
    },
    { 
      category: "Databases", 
      icon: <FaDatabase className="text-xl text-yellow-400" />,
      items: ["MongoDB", "PostgreSQL"] 
    },
    { 
      category: "Design Tools", 
      icon: <FaPalette className="text-xl text-yellow-400" />,
      items: ["Figma", "Canva"] 
    }
  ];

  const experiences = [
    {
      role: "Full Stack Intern",
      company: "Cognifyz Technologies",
      icon: <FaBriefcase className="text-xl text-yellow-400" />,
      period: "2023 - 2024",
      points: [
        "Developed scalable front-end and back-end components",
        "Integrated RESTful APIs improving efficiency by 25%",
        "Ensured seamless user interactions and consistent functionality"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-yellow-400">Me</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              MERN Stack Developer from <span className="text-yellow-400">J&K, India</span>
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
          {/* Profile Summary */}
          <section className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-800">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="bg-gray-800 p-3 rounded-full border border-gray-700">
                <FaUserTie className="text-xl sm:text-2xl text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-yellow-400">Profile Summary</h2>
                <p className="text-gray-300 leading-relaxed">
                  Energetic web developer with <span className="text-yellow-400 font-medium">1.5 years of experience</span> in the MERN stack and a background in freelancing. Skilled in building scalable, secure web applications with a focus on clean code and user-centric design.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
              <span className="border-b-2 border-yellow-400 pb-1">Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-colors">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="bg-gray-800 p-2 sm:p-3 rounded-lg border border-gray-700">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-1 sm:gap-2 bg-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-gray-700">
                        {iconMap[skill]}
                        <span className="text-xs sm:text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
              <span className="border-b-2 border-yellow-400 pb-1">Professional Experience</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-gray-800 p-2 sm:p-3 rounded-lg border border-gray-700">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-400">{exp.role}</h3>
                        <p className="text-gray-400 text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </div>
                    <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 pl-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";

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
  SiCanva,
} from "react-icons/si";

const iconMap = {
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
};

export default function About() {
  const skills = [
    {
      category: "Languages & Frameworks",
      icon: <FaCode className="text-blue-600 text-xl" />,
      items: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "React.js",
        "Next.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
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

  const experiences = [
    {
      role: "Full Stack Intern",
      company: "Cognifyz Technologies",
      icon: <FaBriefcase className="text-blue-600 text-xl" />,
      period: "2023 - 2024",
      points: [
        "Developed scalable front-end and back-end components",
        "Integrated RESTful APIs improving efficiency by 25%",
        "Ensured seamless user interactions and consistent functionality",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#f7f8fa] text-gray-800 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[40vh] flex items-center justify-center border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center py-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium mb-4">
              About <span className="text-gray-900">Me</span>
            </h1>
            <p className="text-gray-600 max-w-md mx-auto text-lg">
              MERN Stack Developer from J&K, India
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
          {/* Profile Summary */}
          <section className="space-y-6 border-b border-gray-200 pb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-blue-100 rounded-full">
                <FaUserTie className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-serif font-medium">Profile Summary</h2>
            </div>
            <p className="text-gray-600 max-w-3xl leading-relaxed text-lg">
              Energetic web developer with 1.5 years of experience in the MERN stack and a background in freelancing. Skilled in building scalable, secure web applications with a focus on clean code and user-centric design.
            </p>
          </section>

          {/* Skills Section */}
          <section className="space-y-12 border-b border-gray-200 pb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 bg-blue-100 rounded-full">
                <FaCode className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-serif font-medium">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center gap-4">
                    {skillGroup.icon}
                    <h3 className="font-serif font-medium text-xl">{skillGroup.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm hover:shadow-sm transition-all"
                      >
                        {iconMap[skill]}
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 bg-blue-100 rounded-full">
                <FaBriefcase className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-serif font-medium">Professional Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-6 border border-gray-200 rounded-lg p-6 bg-white">
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
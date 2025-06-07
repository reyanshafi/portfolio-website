import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAward,
  FaGraduationCap,
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
import "../app/globals.css";

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
      icon: <FaCode className="text-2xl text-yellow-400" />,
      items: ["JavaScript", "Node.js", "Express.js", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"] 
    },
    { 
      category: "Tools & Technologies", 
      icon: <FaTools className="text-2xl text-yellow-400" />,
      items: ["Git/GitHub", "Postman", "JWT/OAuth"] 
    },
    { 
      category: "Databases", 
      icon: <FaDatabase className="text-2xl text-yellow-400" />,
      items: ["MongoDB", "PostgreSQL"] 
    },
    { 
      category: "Design Tools", 
      icon: <FaPalette className="text-2xl text-yellow-400" />,
      items: ["Figma", "Canva"] 
    }
  ];

  const experiences = [
    {
      role: "Full Stack Intern",
      company: "Cognifyz Technologies",
      icon: <FaBriefcase className="text-2xl text-yellow-400" />,
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
      <main className="bg-gradient-to-r from-[#101011] to-[#090909] text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              About <span className="text-yellow-400">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              MERN Stack Developer from <span className="text-yellow-400">J&K, India</span>
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Profile Summary */}
          <section className="bg-[#101011] p-8 rounded-xl border border-gray-800 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="bg-[#090909] p-3 rounded-full border border-gray-800">
                <FaUserTie className="text-2xl text-yellow-400" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold mb-4 text-yellow-400">Profile Summary</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Energetic web developer with <span className="text-yellow-400 font-medium">1.5 years of experience</span> in the MERN stack and a background in freelancing. Skilled in building scalable, secure web applications with a focus on clean code and user-centric design.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-extrabold mb-8 text-center md:text-left">
              <span className="border-b-2 border-yellow-400 pb-1">Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-[#101011] p-6 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#090909] p-3 rounded-lg border border-gray-800">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#090909] px-4 py-2 rounded-full border border-gray-800">
                        {iconMap[skill]}
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-3xl font-extrabold mb-8 text-center md:text-left">
              <span className="border-b-2 border-yellow-400 pb-1">Professional Experience</span>
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-[#101011] p-6 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#090909] p-3 rounded-lg border border-gray-800">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-yellow-400">{exp.role}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                    </div>
                    <span className="bg-yellow-400/10 text-yellow-400 px-4 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 pl-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
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
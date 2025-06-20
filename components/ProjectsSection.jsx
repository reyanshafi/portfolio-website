'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'IUST Alumni Connect',
    description: 'Alumni networking platform with admin dashboard.',
    image: '/assets/alumni.avif',
    tech: ['Next.js', 'MongoDB', 'Tailwind'],
    link: '/projects',
  },
  {
    id: 2,
    title: 'Hospital System',
    description: 'AI-based hospital monitoring system with real-time patient care.',
    image: '/assets/hospital.jpg',
    tech: ['React', 'Express', 'Node.js'],
    link: '/projects',
  },
  {
    id: 3,
    title: 'Suwida Tours',
    description: 'Online travel booking with payment and admin dashboard.',
    image: '/assets/travel.jpg',
    tech: ['Next.js', 'Supabase', 'Razorpay'],
    link: '/projects',
  },
];

export default function ScrollProjects() {
  return (
    <section className="bg-[#1f1f1f] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-white font-serif mb-2 text-center">
          Featured <span className="font-medium text-red-600">Work</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-16 text-center">
          A curated selection of real-world projects that reflect my development skillset.
        </p>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 h-64 relative rounded-xl overflow-hidden shadow-lg border border-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold text-red-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#2a2a2a] border border-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded-full transition-all duration-300"
                >
                  Know More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

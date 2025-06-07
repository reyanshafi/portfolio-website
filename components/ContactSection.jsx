'use client' // Added missing client directive
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-yellow-400 text-2xl" />,
      title: "Email Me",
      content: "reyannshafi@gmail.com",
      href: "mailto:reyannshafi@gmail.com"
    },
    {
      icon: <FaPhone className="text-yellow-400 text-2xl" />,
      title: "Call Me",
      content: "+91 9906512509",
      href: "tel:+919906512509"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-4 text-gray-100"
          >
            Get In <span className="text-yellow-400 font-medium">Touch</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Reach out for collaborations or just to say hello
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-200">
                  {item.title}
                </h3>
                <a 
                  href={item.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {item.content}
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-300 group"
            >
              <span>Contact Form</span>
              <FaPaperPlane className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
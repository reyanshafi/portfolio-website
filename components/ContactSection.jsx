'use client'
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-gray-900 text-3xl" />,
      title: "Email Me",
      content: "reyannshafi@gmail.com",
      href: "mailto:reyannshafi@gmail.com"
    },
    {
      icon: <FaPhone className="text-gray-900 text-3xl" />,
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f7f8fa] border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif font-medium mb-4 text-gray-900"
          >
            Get In <span className="font-normal">Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-12 max-w-2xl mx-auto text-base leading-relaxed"
          >
            Reach out for collaborations or just to say hello
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg border border-gray-300 hover:border-gray-700 transition-all duration-300 shadow-sm"
              >
                <div className="flex justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors break-words"
                >
                  {item.content}
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-colors duration-300 group"
            >
              <span>Contact Form</span>
              <FaPaperPlane className="ml-3 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';
import { FaEnvelope, FaPhone, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="contact" 
      className="py-24 bg-gradient-to-b from-[#171717] to-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-red-500/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-cyan-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Modern heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm font-mono text-gray-300">Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Connect</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Feel free to reach out for opportunities, collaborations, or just to say hello.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Contact Info with Cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl">
                  <FaEnvelope className="text-red-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                  <a
                    href="mailto:reyannshafi@gmail.com"
                    className="text-gray-300 hover:text-red-500 transition-colors break-all text-sm md:text-base"
                  >
                    reyannshafi@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl">
                  <FaPhone className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                  <a
                    href="tel:+919906512509"
                    className="text-gray-300 hover:text-blue-500 transition-colors text-sm md:text-base"
                  >
                    +91 9906512509
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl">
                  <FaCalendarAlt className="text-purple-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Availability</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Open to freelance & full-time opportunities
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 pt-4"
            >
              <a 
                href="https://github.com/reyanshafi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-800 rounded-full text-gray-400 hover:text-white transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/rayanshafi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-800 rounded-full text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/rayanshafi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-800 rounded-full text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right: Contact Form CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start a project?
            </h3>
            <p className="text-gray-400 mb-8">
              Tell me about your project, timeline, and budget. I'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-red-600/20 group"
              >
                Contact Form
                <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:reyannshafi@gmail.com"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-transparent border border-gray-700 hover:border-gray-600 text-white rounded-xl font-medium transition-all duration-300 group"
              >
                Send Email Directly
                <FaEnvelope className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

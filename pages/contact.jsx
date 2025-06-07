'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../app/globals.css";


export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
            >
              Get In <span className="text-yellow-400">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Have a project in mind or want to collaborate? Let's talk!
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-800">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-gray-800 p-2 sm:p-3 rounded-lg border border-gray-700 text-yellow-400">
                        <FaMapMarkerAlt className="text-lg sm:text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-1">Location</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Awantipora, Jammu & Kashmir, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-gray-800 p-2 sm:p-3 rounded-lg border border-gray-700 text-yellow-400">
                        <FaPhone className="text-lg sm:text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-1">Phone</h3>
                        <a 
                          href="tel:+919906512509" 
                          className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                        >
                          +91 9906512509
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-gray-800 p-2 sm:p-3 rounded-lg border border-gray-700 text-yellow-400">
                        <FaEnvelope className="text-lg sm:text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:reyannshafi@gmail.com" 
                          className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                        >
                          reyannshafi@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-800">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400">
                    Availability
                  </h2>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                    I'm currently available for freelance work and full-time positions. 
                    Feel free to contact me for any inquiries or questions.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-green-400 text-sm sm:text-base">Available for work</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-800"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400">
                  Send Me a Message
                </h2>
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-base sm:text-lg mb-1 sm:mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg mb-1 sm:mb-2">Your Email</label>
                    <input
                      type="email"
                      className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg mb-1 sm:mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg mb-1 sm:mb-2">Your Message</label>
                    <textarea
                      className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Hi Rayan, I'd like to talk about..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      <FaPaperPlane />
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
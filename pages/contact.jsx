import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../app/globals.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-[#101011] to-[#090909] text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Get In <span className="text-yellow-400">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Have a project in mind or want to collaborate? Let's talk!
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-[#181818] p-8 rounded-xl border border-gray-800">
                  <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#101011] p-3 rounded-lg border border-gray-800 text-yellow-400">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Location</h3>
                        <p className="text-gray-400">Awantipora, Jammu & Kashmir, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#101011] p-3 rounded-lg border border-gray-800 text-yellow-400">
                        <FaPhone className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Phone</h3>
                        <a href="tel:+919906512509" className="text-gray-400 hover:text-yellow-400 transition-colors">
                          +91 9906512509
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#101011] p-3 rounded-lg border border-gray-800 text-yellow-400">
                        <FaEnvelope className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Email</h3>
                        <a href="mailto:reyannshafi@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                          reyannshafi@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#181818] p-8 rounded-xl border border-gray-800">
                  <h2 className="text-3xl font-bold mb-6 text-yellow-400">Availability</h2>
                  <p className="text-gray-400 mb-4">
                    I'm currently available for freelance work and full-time positions. 
                    Feel free to contact me for any inquiries or questions.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-green-400">Available for work</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#181818] p-8 rounded-xl border border-gray-800"
              >
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Send Me a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-lg mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full p-4 rounded-lg bg-[#101011] text-white border border-gray-800 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg mb-2">Your Email</label>
                    <input
                      type="email"
                      className="w-full p-4 rounded-lg bg-[#101011] text-white border border-gray-800 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full p-4 rounded-lg bg-[#101011] text-white border border-gray-800 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg mb-2">Your Message</label>
                    <textarea
                      className="w-full p-4 rounded-lg bg-[#101011] text-white border border-gray-800 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Hi Addam, I'd like to talk about..."
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300"
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
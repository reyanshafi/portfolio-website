import { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaEdit, FaRocket, FaHeart, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SEO from '@/components/SEO';

import "../app/globals.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      label: "Location",
      value: "Kashmir, India",
      gradient: "from-red-500/20 to-orange-600/20",
    },
    {
      icon: <FaPhone className="text-blue-500" />,
      label: "Phone",
      value: "+91 9906512509",
      href: "tel:+919906512509",
      gradient: "from-blue-500/20 to-cyan-600/20",
    },
    {
      icon: <FaEnvelope className="text-green-500" />,
      label: "Email",
      value: "reyanshafi4@gmail.com",
      href: "mailto:reyanshafi4@gmail.com",
      gradient: "from-green-500/20 to-emerald-600/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <SEO />
      <ScrollProgressBar />
      <Navbar />
      <main id="contact" className="bg-[#171717] text-white min-h-screen pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-500/5 to-yellow-600/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-full">
                <FaHeart className="text-red-500" />
                <span className="text-sm font-mono text-gray-300">Let's Connect</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-display">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Touch</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-body leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <div className="flex items-center gap-2 text-green-400">
                  <FaRocket />
                  <span className="text-sm font-mono">Quick Response</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <FaUser />
                  <span className="text-sm font-mono">Personal Touch</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <FaEdit />
                  <span className="text-sm font-mono">Custom Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                Contact <span className="text-red-500">Information</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Multiple ways to reach out to me
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 group-hover:transform group-hover:scale-105">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                      <div className="relative p-8 text-center">
                        <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white font-display mb-2">
                          {info.label}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group/link"
                          >
                            {info.value}
                            <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4">
                Send Me A <span className="text-red-500">Message</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-2xl border border-gray-800 p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#171717] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#171717] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300 block">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#171717] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#171717] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-105 transform"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
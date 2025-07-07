import { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

  return (
    <>
    <SEO />
      <Navbar />
      <main className="bg-[#171717] text-white min-h-screen pt-20 md:pt-24">
  {/* Hero Section */}
  <section className="min-h-[40vh] flex items-center justify-center border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-serif font-medium mb-4"
      >
        Get In <span className="text-red-600">Touch</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 max-w-md mx-auto text-lg"
      >
        Have a project in mind or want to collaborate? Let's talk!
      </motion.p>
    </div>
  </section>

  {/* Contact Info Section */}
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Info Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-red-950 rounded-full">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
          </div>
          <h2 className="text-2xl font-serif font-medium">Contact Information</h2>
        </div>

        <div className="space-y-6 text-gray-400">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-red-950 rounded-full">
              <FaMapMarkerAlt className="text-red-500" />
            </div>
            <div>
              <h3 className="font-medium text-white">Location</h3>
              <p>Awantipora, Jammu & Kashmir, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-red-950 rounded-full">
              <FaPhone className="text-red-500" />
            </div>
            <div>
              <h3 className="font-medium text-white">Phone</h3>
              <a href="tel:+919906512509" className="hover:text-red-500 transition-colors">
                +91 9906512509
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-red-950 rounded-full">
              <FaEnvelope className="text-red-500" />
            </div>
            <div>
              <h3 className="font-medium text-white">Email</h3>
              <a href="mailto:reyannshafi@gmail.com" className="hover:text-red-500 transition-colors">
                reyannshafi@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-gray-400">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-red-950 rounded-full">
              <FaPaperPlane className="text-red-500 text-xl" />
            </div>
            <h2 className="text-2xl font-serif font-medium text-white">Availability</h2>
          </div>
          <p>
            I'm currently available for freelance work and full-time positions.
            Feel free to contact me for any inquiries or questions.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-500">Available for work</span>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-red-950 rounded-full">
            <FaPaperPlane className="text-red-500 text-xl" />
          </div>
          <h2 className="text-2xl font-serif font-medium">Send Me a Message</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "subject"].map((field, i) => (
            <div key={i}>
              <label className="block text-gray-400 mb-2 capitalize">{field}</label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-600 focus:border-red-500 focus:outline-none"
                placeholder={`Enter your ${field}`}
                required
              />
            </div>
          ))}
          <div>
            <label className="block text-gray-400 mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-600 focus:border-red-500 focus:outline-none"
              placeholder="Hi Rayan, I'd like to talk about..."
              rows="5"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  <FaPaperPlane />
                  Send Message
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
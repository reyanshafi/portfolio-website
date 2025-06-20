'use client';
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1f1f1f] text-white py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-serif font-light mb-6">
            Let's <span className="text-red-600 font-medium">Connect</span>
          </h2>
          <p className="text-gray-400 mb-8 text-base">
            Feel free to reach out via email or phone. I'm open to freelance work, collaborations, or even just a friendly chat.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-600 text-xl" />
              <a
                href="mailto:reyannshafi@gmail.com"
                className="text-gray-300 hover:text-red-600 transition-colors break-all"
              >
                reyannshafi@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhone className="text-red-600 text-xl" />
              <a
                href="tel:+919906512509"
                className="text-gray-300 hover:text-red-600 transition-colors"
              >
                +91 9906512509
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact CTA */}
        <div className="text-center md:text-left">
          <h3 className="text-xl text-gray-300 mb-4 font-medium">
            Want to work together?
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-colors duration-300 group"
          >
            Contact Form
            <FaPaperPlane className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

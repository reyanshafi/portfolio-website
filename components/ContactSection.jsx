import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#101011] to-[#090909]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Get In <span className="text-yellow-400">Touch</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just to say hello
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#181818] p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-yellow-400 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Email Me</h3>
            <a 
              href="mailto:reyannshafi@gmail.com" 
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              reyannshafi@gmail.com
            </a>
          </div>

          <div className="bg-[#181818] p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors">
            <div className="flex justify-center mb-4">
              <FaPhone className="text-yellow-400 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Call Me</h3>
            <a 
              href="tel:+919906512509" 
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              +91 9906512509
            </a>
          </div>
        </div>

        <a
          href="/contact" 
          className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
        >
          <span>Contact Form</span>
          <FaPaperPlane className="ml-2" />
        </a>
      </div>
    </section>
  );
}
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 py-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rayan Shafi. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/reyanshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/reyannshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:reyannshafi@gmail.com"
              className="hover:text-red-600 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Back to Top - Logo */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <a
            href="#top"
            className="text-red-600 font-semibold text-lg uppercase tracking-wide hover:text-red-700 transition-colors"
            aria-label="Back to top"
          >
            Rayan<span className="text-gray-400">Shafi</span>
          </a>
        </div>

        {/* Back to Top (Mobile) */}
        <div className="mt-6 md:hidden flex justify-center">
          <a
            href="#top"
            className="text-sm text-red-600 font-medium hover:text-red-700 transition-colors"
          >
            Rayan<span className="text-gray-400">Shafi</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

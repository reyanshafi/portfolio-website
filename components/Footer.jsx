import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Rayan Shafi. All rights reserved.
          </p>

          {/* Social Links with Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/reyanshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/reyannshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:reyannshafi@gmail.com"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
            {/* Optional: Add Twitter if you're active there */}
            {/* <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>

        {/* Optional: Back to top button with icon */}
        <div className="mt-6 md:hidden flex justify-center">
          <a 
            href="#top" 
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-yellow-400 transition-colors"
          >
            Back to top <span className="text-sm">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
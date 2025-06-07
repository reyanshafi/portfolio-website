export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#101011] to-[#090909] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Addam's Portfolio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/reyanshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/reyannshafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
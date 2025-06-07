export default function Hero() {
  return (
    <section className="relative bg-gray-950 text-white min-h-screen flex items-center pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content - Mobile-first approach */}
          <div className="text-center lg:text-left lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="mb-3 lg:mb-4">
              <span className="text-yellow-400 font-mono text-xs sm:text-sm tracking-widest">
                FULL-STACK DEVELOPER
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Hi, I'm <span className="text-yellow-400 font-medium">Rayan Shafi</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 text-gray-400 max-w-md mx-auto lg:mx-0">
              I craft modern web applications with focus on performance, accessibility, and clean design.
            </p>
            
            {/* Buttons - Stacked on mobile */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="/projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-yellow-400 text-gray-900 font-medium rounded hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                View Work
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-700 text-gray-300 font-medium rounded hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base text-center"
              >
                Contact
              </a>
            </div>
            
            {/* Tech stack - Centered on mobile */}
            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-2">
              {['React', 'Node', 'TypeScript', 'Next.js'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-xs text-gray-400 font-mono border border-gray-800 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image - Smaller on mobile, centered */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2 w-full">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border border-yellow-400"></div>
              <img
                src="/assets/pic.png"
                alt="Rayan Shafi"
                className="relative w-full h-full border-4 rounded-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
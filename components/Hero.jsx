export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-950 text-white min-h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay opacity-20 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-400 rounded-full mix-blend-overlay opacity-10 blur-lg"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2 relative z-10">
            <div className="mb-6">
              <span className="text-yellow-400 font-medium tracking-wider">FULL STACK DEVELOPER</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-yellow-400">Rayan Shafi</span>
            </h1>
            <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-lg mx-auto lg:mx-0">
              I build exceptional digital experiences using the <span className="text-yellow-400 font-medium">MERN stack</span> with over 1.5 years of hands-on development expertise.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/projects"
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-gray-900 rounded-lg group bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
              >
                <span className="relative">View My Work</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-yellow-400 border-2 border-yellow-400 rounded-lg group hover:text-gray-900 transition-all duration-300 ease-out"
              >
                <span className="absolute inset-0 w-full h-full bg-yellow-400 transition-all duration-300 ease-out opacity-0 group-hover:opacity-10"></span>
                <span className="relative">Contact Me</span>
              </a>
            </div>
            
            {/* Tech stack indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
              {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TypeScript'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-yellow-400 opacity-20 blur-lg"></div>
              <div className="absolute -inset-2 rounded-full bg-yellow-400 opacity-30 blur-sm"></div>
              <img
                src="/assets/pic.png"
                alt="Rayan Shafi's Profile"
                className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-full border-4 border-yellow-400/30 shadow-2xl transform transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
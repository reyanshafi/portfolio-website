export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#101011] to-[#090909] text-white h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-yellow-400">Rayan Shafi Dar</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-gray-300">
            Full Stack Developer specializing in <span className="text-yellow-400">MERN stack</span> with 1.5+ years experience
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-400/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/assets/pic.png"
              alt="Rayan Shafi's Profile"
              className="w-64 md:w-80 lg:w-96 shadow-lg"
              style={{ clipPath: "circle(50% at 50% 50%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
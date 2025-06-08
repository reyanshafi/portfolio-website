'use client'
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#f7f8fa] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
          
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-5xl sm:text-6xl font-serif font-medium leading-tight">
              Get Your <br />
              <span className="text-gray-900">Product Identity</span><br />
              From <span className="italic">Me.</span>
            </h1>

            <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-base leading-relaxed">
              From idea to detailed design, I create timeless visuals backed by strategic thinking.
            </p>

            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                download 
                className="inline-block bg-black text-white px-6 py-3 text-sm rounded-full hover:bg-gray-900 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className="lg:w-1/2">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-[6px] border-gray-200 shadow-xl mx-auto">
              <img 
                src="/assets/pic.png" 
                alt="Rayan Shafi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <h2 className="text-lg font-medium">Rayan Shafi</h2>
              <p className="text-sm text-gray-500">Full-Stack Developer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

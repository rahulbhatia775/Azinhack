import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cyan overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="text-4xl md:text-5xl font-black text-black border-4 border-black px-4 py-2 bg-cyan">
          A
        </div>
        <div className="flex gap-4 md:gap-6 items-center">
          <a href="#about" className="hidden md:block text-lg font-black text-black hover:text-magenta transition-colors">
            ABOUT
          </a>
          <a href="#faq" className="hidden md:block text-lg font-black text-black hover:text-magenta transition-colors">
            FAQ
          </a>
          <a href="#sponsors" className="hidden md:block text-lg font-black text-black hover:text-magenta transition-colors">
            SPONSOR
          </a>
          <Button 
            className="bg-magenta text-black font-black text-lg border-4 border-black shadow-bold hover:bg-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            APPLY NOW
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none">
              AZINHACK
              <span className="block text-white [-webkit-text-stroke:3px_black]">2025</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black max-w-md">
              Innovate. Code. Create. 24 Hours of Innovation.
            </p>
            <div className="bg-black text-white inline-block px-6 py-3 text-2xl md:text-3xl font-black border-4 border-black">
              OCT. 15 - OCT. 16, 2025
            </div>
          </div>

          {/* Right side - Decorative shapes */}
          <div className="relative h-96 md:h-[500px]">
            {/* Smiley faces inspired by reference */}
            <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-lime border-4 border-black rounded-full flex items-center justify-center animate-float">
              <div className="space-y-4">
                <div className="flex gap-8 justify-center">
                  <div className="w-8 h-12 bg-black rounded-full"></div>
                  <div className="w-8 h-12 bg-black rounded-full"></div>
                </div>
                <div className="w-24 h-12 bg-black rounded-full"></div>
              </div>
            </div>
            
            <div className="absolute top-20 right-0 w-40 h-40 md:w-56 md:h-56 bg-magenta border-4 border-black rounded-full flex items-center justify-center" style={{ animationDelay: '1s' }}>
              <div className="space-y-3">
                <div className="flex gap-6 justify-center">
                  <div className="w-6 h-10 bg-black rounded-full"></div>
                  <div className="w-6 h-10 bg-black rounded-full"></div>
                </div>
                <div className="w-20 h-10 bg-black rounded-full"></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/4 w-36 h-36 md:w-48 md:h-48 bg-yellow border-4 border-black rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="space-y-2">
                <div className="flex gap-4 justify-center">
                  <div className="w-5 h-8 bg-black rounded-full"></div>
                  <div className="w-5 h-8 bg-black rounded-full"></div>
                </div>
                <div className="w-16 h-8 bg-black rounded-full"></div>
              </div>
            </div>

            {/* Geometric shapes */}
            <div className="absolute top-40 right-20 w-20 h-20 bg-white border-4 border-black rotate-45"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan border-4 border-black"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-magenta border-t-4 border-black transform -skew-y-2"></div>
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-yellow border-4 border-black transform rotate-12"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-purple border-4 border-black rounded-full"></div>
    </section>
  );
};

export default Hero;

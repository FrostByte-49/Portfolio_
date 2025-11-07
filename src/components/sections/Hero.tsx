import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-200/20 to-transparent dark:via-purple-900/20 animate-pulse" />

      <div className="relative z-10 text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-glow">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Pranav Khalate
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-pulse" />
        </div>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up font-light">
          Building digital worlds with creativity and code
        </p>

        <div className="flex gap-4 justify-center animate-slide-up animation-delay-200">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:from-pink-600 hover:to-purple-600"
          >
            Explore My Journey
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-full font-medium hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-500 dark:text-purple-300" />
      </div>
    </section>
  );
}

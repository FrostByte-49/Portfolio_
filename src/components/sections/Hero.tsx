import { ChevronDown, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas Setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.3;
    };
    setCanvasSize();

    // Sakura Petals Configuration 
    const petals = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 4,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: Math.random() * 1 + 0.7,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      swing: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 1.5 + 0.5,
      frequency: Math.random() * 0.01 + 0.005,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    const drawPetal = (p: any) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
      gradient.addColorStop(0, 'rgba(255, 240, 245, 1)');
      gradient.addColorStop(0.6, 'rgba(255, 182, 193, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 182, 193, 0.3)');
      ctx.fillStyle = gradient;

      // Sakura Shape (Heart-Like Petal)
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, p.size / 3, 0, p.size);
      ctx.bezierCurveTo(-p.size, p.size / 3, -p.size / 2, -p.size / 2, 0, 0);
      ctx.fill();

      ctx.restore();
    };

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((p) => {
        p.x += p.speedX + Math.sin(p.swing) * p.amplitude;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.swing += p.frequency;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }

        drawPetal(p);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', setCanvasSize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24 pb-36 transition-colors duration-500
             bg-gradient-to-br from-pink-100 via-white to-purple-100 
             dark:from-[#0a0f1f] dark:via-[#1a1440] dark:to-[#2b1e5a]"
      >
        
      {/* Sakura Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" /> 

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Japanese Welcome */}
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
            <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
              ようこそ • Welcome
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-4 animate-glow">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Pranav Khalate
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light mt-2">
            フルスタック開発者 • Full Stack Developer
          </p>
        </div>

        {/* Line Animation */}
        <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
        </div>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed animate-slide-up">
          Building immersive, modern, and meaningful digital experiences 
          with clean code and creative design — blending technology with art.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up animation-delay-200">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-pink-200/50 dark:border-purple-700/50 text-gray-800 dark:text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-pink-300 dark:hover:border-purple-500"
          >
            <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Contact Me
              <Mail className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-10 animate-fade-in animation-delay-400">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-pink-200/30 dark:border-purple-700/30 rounded-full shadow-md hover:shadow-xl transform hover:scale-110 hover:bg-pink-50 dark:hover:bg-purple-900/30 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-pink-500 dark:group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 transform -translate-x-1/2 pb-6 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-pink-200/50 dark:border-purple-700/50 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 text-pink-500 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-pink-400 transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
}

import { Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import profileImage from '../../assets/images/Me_.webp';

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
    };
    setCanvasSize();

    const petals = Array.from({ length: 80 }).map(() => ({
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
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-16 transition-colors duration-500
                 bg-gradient-to-br from-pink-100 via-white to-purple-100 
                 dark:from-[#0a0f1f] dark:via-[#1a1440] dark:to-[#2b1e5a]"
    >
      {/* Sakura Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Heading */}
      <div className="relative z-10 text-center mt-16 mb-10 md:mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
          <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
          <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
            私について • Get to Know Me
          </span>
        </div>

        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
              About Me
        </h2>

        {/* Line Animation */}
        <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 bg-white/40 dark:bg-black/40 
                      rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 
                      overflow-hidden flex flex-col md:flex-row items-center max-w-5xl w-[90%] 
                      p-6 md:p-10 gap-10 transition-transform duration-500 hover:scale-[1.02]">

        {/* Image Section */}
        <div className="w-full md:w-1/3 h-[420px] rounded-2xl overflow-hidden shadow-lg border border-white/30">
          <img
            src={profileImage} 
            alt="Pranav Khalate"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Description Section */}
        <div className="flex-1 text-gray-800 dark:text-gray-200 space-y-4">
          <p className="leading-relaxed">
            Hello! I'm <span className="font-semibold text-pink-600 dark:text-pink-400">Pranav Khalate</span>, 
            a passionate developer who loves crafting immersive digital experiences.  
            I combine creativity and technology to bring innovative ideas to life.
          </p>

          <p className="leading-relaxed">
            My journey revolves around curiosity and constant learning — from designing visually appealing interfaces 
            to engineering seamless backend systems. Each project is an opportunity to blend art and logic.
          </p>

          <p className="leading-relaxed">
            Outside the tech world, I dive into anime for inspiration, explore emerging tools, 
            and contribute to open-source communities that empower innovation.
          </p>

          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">My Goals</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✦</span>
                <span>Develop meaningful, user-focused solutions that create impact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✦</span>
                <span>Keep mastering new technologies and pushing creative boundaries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✦</span>
                <span>Collaborate with great minds to build exceptional experiences</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

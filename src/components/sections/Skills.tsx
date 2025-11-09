import { 
  Code2, Palette, GitBranch, Box, Sparkles, Cpu, Brush,
  FileText, Cloud, Terminal
} from 'lucide-react';
import { useEffect, useRef } from 'react';

const skillsData = {
  Languages: [
    { name: 'HTML', icon: Code2, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: Palette, color: 'from-blue-500 to-indigo-500' },
    { name: 'JavaScript', icon: Code2, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Markdown', icon: FileText, color: 'from-gray-600 to-gray-800' },
    { name: 'C', icon: Terminal, color: 'from-blue-600 to-purple-600' },
    { name: 'C++', icon: Terminal, color: 'from-blue-700 to-indigo-700' },
  ],
  Frameworks: [
    { name: 'Three.js', icon: Code2, color: 'from-gray-700 to-black' },
    { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-400 to-blue-500' },
  ],
  Cloud: [
    { name: 'Firebase', icon: Cloud, color: 'from-yellow-500 to-orange-500' },
    { name: 'GCP', icon: Cloud, color: 'from-blue-500 to-green-500' },
    { name: 'Postman', icon: Box, color: 'from-orange-600 to-red-600' },
  ],
  Tools: [
    { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-red-600' },
    { name: 'GitHub', icon: GitBranch, color: 'from-gray-700 to-black' },
    { name: 'VS Code', icon: Code2, color: 'from-blue-600 to-purple-600' },
    { name: 'Replit', icon: Box, color: 'from-orange-400 to-red-400' },
    { name: 'Netlify', icon: Cloud, color: 'from-teal-400 to-blue-500' },
  ],
};

export default function Skills() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas Setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.7;
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
      id="skills"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 transition-colors duration-500
                 bg-gradient-to-br from-pink-100 via-white to-purple-100 
                 dark:from-[#0a0f1f] dark:via-[#1a1440] dark:to-[#2b1e5a]"
    >
      {/* Background Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-purple-200/30 dark:bg-pink-500/20 rounded-full blur-xl animate-float animation-delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-200/20 dark:bg-blue-500/15 rounded-full blur-xl animate-float animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
            <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
              スキル • Technical Arsenal
            </span>
          </div>
          
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
              Skills
          </h2>

          {/* Line Animation */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <div
              key={category}
              className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/30 dark:border-white/10 hover:scale-105 hover:shadow-3xl transition-all duration-500 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Category Header */}
              <div className="relative z-10 text-center mb-6">
                <div className="inline-flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                  {category === 'Languages' && <Cpu className="w-5 h-5 text-pink-500" />}
                  {category === 'Frameworks' && <Code2 className="w-5 h-5 text-purple-500" />}
                  {category === 'Cloud' && <Cloud className="w-5 h-5 text-blue-500" />}
                  {category === 'Tools' && <Brush className="w-5 h-5 text-green-500" />}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group/skill flex flex-col items-center gap-2 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-white/10 hover:bg-white/80 dark:hover:bg-gray-600/50 hover:scale-110 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Skill Icon */}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover/skill:scale-110 group-hover/skill:rotate-12 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Skill Name */}
                      <span className="font-semibold text-gray-800 dark:text-white text-sm text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-full border border-pink-200/50 dark:border-purple-700/50">
            <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Continuously learning and building amazing projects
            </p>
            <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
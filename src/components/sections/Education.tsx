import { GraduationCap, Calendar, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Your University',
    period: '2020 - 2024',
    description: 'Specialized in Software Engineering and Web Technologies',
    achievements: ['CGPA: 8.5/10', 'Dean\'s List', 'Best Project Award'],
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Your College',
    period: '2018 - 2020',
    description: 'Science Stream with Computer Science',
    achievements: ['95%', 'School Topper in Computer Science'],
  },
];

export default function Education() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas Setup 
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2.2;
    };
    setCanvasSize();

    // Sakura Petals Configuration
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
      id="education"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-40 transition-colors duration-500
                 bg-gradient-to-br from-pink-100 via-white to-purple-100 
             dark:from-[#0a0f1f] dark:via-[#1a1440] dark:to-[#2b1e5a]"
    >
      {/* Background Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-16 h-16 bg-pink-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-40 left-10 w-20 h-20 bg-purple-200/30 dark:bg-pink-500/20 rounded-full blur-xl animate-float animation-delay-1000" />
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-blue-200/20 dark:bg-blue-500/15 rounded-full blur-xl animate-float animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
            <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
              教育 • Education Journey
            </span>
          </div>
          
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
              Education
          </h2>

          {/* Line Animation */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-40">
          {/* Main Vertical Timeline */}
          <div className="absolute left-10 top-[-80px] bottom-[-80px] w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-500/30" />
          
          {/* Timeline Nodes & Cards */}
          <div className="space-y-16 ml-4">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-2 top-32 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 z-20">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                {/* Horizontal Connector Line */}
                <div className="absolute left-16 top-36 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />

                {/* Education Card */}
                <div className="ml-32">
                  <div className="group relative bg-white/60 dark:bg-gray-800/60 rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-white/10 hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    
                    <div className="relative z-10">
                      {/* Degree & Institution */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-pink-600 dark:text-pink-400 font-semibold mb-4">
                          {edu.institution}
                        </p>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-4 p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl">
                        <Calendar className="w-5 h-5 text-pink-500" />
                        <span className="font-medium">{edu.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-3">
                        {edu.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 border border-pink-300/30 dark:border-purple-600/30 hover:scale-105 hover:shadow-lg transition-all duration-300 group/achievement"
                          >
                            <span className="group-hover/achievement:text-transparent group-hover/achievement:bg-clip-text group-hover/achievement:bg-gradient-to-r group-hover/achievement:from-pink-500 group-hover/achievement:to-purple-500">
                              {achievement}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Start/End Decorations */}
          <div className="absolute left-7 top-[-5rem] w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg -translate-y-2" />
          <div className="absolute left-7 bottom-[-5rem] w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg translate-y-2" />
        </div>
      </div>
    </section>
  );
}
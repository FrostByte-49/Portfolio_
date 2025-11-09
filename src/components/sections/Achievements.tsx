import { Award, Trophy, Star, Sparkles, FileText, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const achievementsData = [
  {
    title: 'National Level Qualifier',
    event: 'Srinivasa Ramanujan Mathematical Competition',
    description: 'Qualified for the National Level (Level 3) after excelling in State and Chapter rounds. Recognized for strong analytical reasoning, numerical aptitude, and advanced problem-solving proficiency in mathematics.',
    icon: Award,
    color: 'from-indigo-400 to-blue-500',
    certificate: 'https://drive.google.com/file/d/1Lt1Qv0Vhs-HCx-ukUn_I-RS-W70fNOoF/view?usp=sharing',
  },

  {
    title: 'Winner – Physics Exhibition',
    event: 'Eureka 2025 (FESA Annual Tech Fest)',
    description: 'Secured First Place for the “Zener Diode Virtual Lab”, recognized for innovation, technical depth, and educational impact in electronics simulation. The project stood out for its interactivity, real-time computation, and user-friendly design.',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
    certificate: 'https://drive.google.com/file/d/1YXt0zDiTqhkfacbUQYz8ONyKAFZHPVTy/view?usp=sharing',
  },

  {
    title: 'Winner – Code Conquer',
    event: 'Eureka 2025 (FESA Annual Tech Fest)',
    description: 'Champion of the competitive coding contest, showcasing exceptional problem-solving, speed, and algorithmic precision under timed conditions. Ranked first among top-performing participants across multiple rounds.',
    icon: Trophy,
    color: 'from-pink-400 to-rose-500',
    certificate: 'https://drive.google.com/file/d/1_svalAtephrth3PWHQZ5o8vozisUD0Is/view?usp=sharing',
  },
  
  {
    title: 'Aspire Leaders Program',
    event: 'Aspire Institute',
    description: 'Selected for the global Aspire Leaders Program, focused on leadership development, critical thinking, and driving meaningful social impact through innovative initiatives.',
    icon: Award,
    color: 'from-green-400 to-emerald-500',
    certificate: 'https://drive.google.com/file/d/1Gw8A7t8IIGAdeHNONvqwYSv644FQPf2w/view?usp=sharing',
  },

  {
    title: 'Ethics of AI',
    event: 'University of Helsinki',
    description: 'Earned certification in “Ethics of AI” from the University of Helsinki, exploring responsible AI development, fairness, and the moral implications of emerging technologies.',
    icon: Star,
    color: 'from-purple-400 to-pink-500',
    certificate: 'https://drive.google.com/file/d/1TM0egQXU8mTX5jgiR5ihExAqk8o2IRm3/view?usp=sharing',
  },

  {
    title: 'Open Source Contributor',
    event: 'GirlScript Summer of Code',
    description: 'Contributed to open-source projects during GirlScript Summer of Code, enhancing real-world collaboration, code quality, and community-driven development practices.',
    icon: Star,
    color: 'from-purple-400 to-pink-500',
    certificate: 'https://drive.google.com/file/d/1PoiJzlztRMA38VPjl3zARwu47qGvFBKq/view?usp=sharing',
  },

];

export default function Achievements() { 
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null); 

  const openCertificate = (certificateUrl: string) => {
    setSelectedCertificate(certificateUrl);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas Setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
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
    <>
      <section
        id="achievements"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 transition-colors duration-500
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
                実績 • My Achievements
              </span>
            </div>
            
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
              Achievements
            </h2>

            {/* Line Animation */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/60 dark:bg-gray-800/60 rounded-3xl p-6 shadow-2xl border border-white/30 dark:border-white/10 hover:scale-105 hover:shadow-3xl transition-all duration-500 animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
              
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
              
                    {/* Event */}
                    <p className="text-pink-600 dark:text-pink-400 font-semibold mb-3 text-sm">
                      {achievement.event}
                    </p>
              
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
              
                    {/* Certificate Button */}
                    <button
                      onClick={() => openCertificate(achievement.certificate)}
                      className="group/certificate flex items-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <FileText className="w-4 h-4 group-hover/certificate:scale-110 transition-transform duration-300" />
                      <span className="flex-1 text-center">View Certificate</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/certificate:opacity-100 group-hover/certificate:translate-x-1 transition-all duration-300" />
                    </button>
                  </div>
              
                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
          
          {/* Footer Text */}
          <div className="text-center mt-16 animate-fade-in animation-delay-600">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-full border border-pink-200/50 dark:border-purple-700/50">
              <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 capitalize">
                Celebrating milestones & fueling continuous growth  
              </p>
              <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-lg animate-fade-in">
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[105vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Certificate
              </h3>
              <button
                onClick={closeCertificate}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Certificate Content */}
            <div className="p-6">
              <div className="w-full h-[70vh] bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                <iframe
                  src={selectedCertificate.replace('/view', '/preview')}
                  className="w-full h-full rounded-xl border-0"
                  title="Certificate"
                  allowFullScreen
                />
              </div>
              
              {/* Download Button */}
              <div className="flex justify-center mt-6">
                <a
                  href={selectedCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  <span>Download Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
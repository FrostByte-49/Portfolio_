import { Briefcase, Calendar, MapPin, Sparkles, FileText, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const experienceData = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tech Company A',
    location: 'Remote',
    period: 'Jun 2023 - Aug 2023',
    description: 'Developed and maintained web applications using React and Node.js',
    achievements: [
      'Built 5+ responsive web applications',
      'Reduced page load time by 40%',
      'Collaborated with a team of 8 developers',
    ],
    certificate: 'https://drive.google.com/file/d/1BAFwjevn24EeCUL62dD442BNj_DRysS8/view?usp=sharing', 
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Startup B',
    location: 'Mumbai, India',
    period: 'Jan 2023 - May 2023',
    description: 'Created engaging user interfaces and improved user experience',
    achievements: [
      'Redesigned company website',
      'Improved user engagement by 35%',
      'Implemented modern UI/UX patterns',
    ],
    certificate: 'https://drive.google.com/file/d/1RjmAxq-nmO3pv5S3aBETnLXar_z8OzfD/view?usp=sharing', 
  },
  {
    role: 'Backend Developer',
    company: 'Tech Solutions Inc',
    location: 'Bangalore, India',
    period: 'Sep 2022 - Dec 2022',
    description: 'Built scalable backend systems and RESTful APIs',
    achievements: [
      'Developed 10+ microservices',
      'Improved API response time by 60%',
      'Implemented secure authentication system',
    ],
    certificate: 'https://drive.google.com/file/d/your-certificate-id-3/view', 
  },
  {
    role: 'UI/UX Design Intern',
    company: 'Design Studio X',
    location: 'Delhi, India',
    period: 'Mar 2022 - Jun 2022',
    description: 'Designed user interfaces and conducted user research',
    achievements: [
      'Created 20+ design prototypes',
      'Conducted user testing with 50+ participants',
      'Improved conversion rates by 25%',
    ],
    certificate: 'https://drive.google.com/file/d/your-certificate-id-4/view', 
  },
];

export default function Experience() { 
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas Setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 5;
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

  const openCertificate = (certificateUrl: string) => {
    setSelectedCertificate(certificateUrl);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-40 transition-colors duration-500
                   bg-gradient-to-br from-pink-50 via-white to-purple-50 
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
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
              <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
              <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
                経験 • Professional Journey
              </span>
            </div>
            
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
                Experience
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
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-2 top-32 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 z-20 animate-pulse">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Horizontal Connector Line */}
                  <div className="absolute left-16 top-36 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />

                  {/* Experience Card */}
                  <div className="ml-32">
                    <div className="group relative bg-white/60 dark:bg-gray-800/60 rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-white/10 hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden">
                      
                      <div className="relative z-10">
                        {/* Role & Company */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-xl text-pink-600 dark:text-pink-400 font-semibold mb-4">
                            {exp.company}
                          </p>
                        </div>

                        {/* Period & Location */}
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl">
                            <Calendar className="w-5 h-5 text-pink-500" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl">
                            <MapPin className="w-5 h-5 text-pink-500" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3 mb-6">
                          {exp.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group/achievement"
                            >
                              <span className="text-purple-500 mt-1 text-lg group-hover/achievement:scale-110 transition-transform duration-300">✦</span>
                              <span className="group-hover/achievement:text-transparent group-hover/achievement:bg-clip-text group-hover/achievement:bg-gradient-to-r group-hover/achievement:from-pink-500 group-hover/achievement:to-purple-500 transition-all duration-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Certificate Button */}
                        <button
                          onClick={() => openCertificate(exp.certificate)}
                          className="group/certificate flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                          <FileText className="w-5 h-5 group-hover/certificate:scale-110 transition-transform duration-300" />
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/certificate:opacity-100 group-hover/certificate:translate-x-1 transition-all duration-300" />
                        </button>
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

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6">
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
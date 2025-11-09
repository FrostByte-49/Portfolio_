import { useState } from 'react';
import { Sparkles, ExternalLink, Github, X } from 'lucide-react';

const projectsData = [
  {
    title: 'Zener Diode Virtual Lab',
    description: 'An interactive platform to simulate and visualize Zener Diode behavior in real time.',
    longDescription: `ZenerSim is a web-based virtual lab that brings Zener Diode concepts to life through drag-and-drop circuit design, real-time calculations, and dynamic graph visualizations. Used by 600+ learners, it helps students understand voltage-current relationships interactively. The platform also includes a Dialogflow chatbot for guidance and earned First Prize at FESA 2K25 for its innovation and educational value.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'Dialogflow', 'Firebase'],
    image: 'https://images.pexels.com/photos/1448561/pexels-photo-1448561.jpeg',
    github: 'https://github.com/FrostByte-49/Zener_Diode_Simulation',
    demo: 'https://zenersim.netlify.app/',
  },


  {
    title: 'SymptoWise – AI Health Companion',
    description: 'An AI-powered health companion offering personalized routines, nutrition, and symptom analysis.',
    longDescription: `SymptoWise is an AI-powered health platform designed to act as a personal wellness assistant. It intelligently analyzes user symptoms using OpenAI’s API and provides tailored wellness routines, skincare guidance, and nutrition plans. With Firebase authentication and a sleek dark-mode UI, it combines physical and mental wellness support in one place. Developed as part of the Bolt Hackathon, the project demonstrated technical innovation and real-world usability.`,
    tech: ['React (TypeScript)', 'TailwindCSS', 'Firebase', 'OpenAI API'],
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
    github: 'https://github.com/FrostByte-49/SymptoWise',
    demo: 'https://symptowise.netlify.app/',
  },

  {
    title: 'MindEaze – Mood Journal & Wellness Buddy',
    description: 'An offline-first PWA for mood tracking, journaling, and mindfulness exercises.',
    longDescription: `MindEaze is a privacy-focused, offline-first Progressive Web App designed to support mental wellness through daily mood tracking, guided journaling, breathing exercises, and calming music. It offers a smooth, distraction-free experience without requiring logins or internet connectivity. Recognized at LaunchHacks IV (15th place among 110 projects), it promotes mental well-being through intuitive and accessible digital self-care.`,
    tech: ['React (TypeScript)', 'TailwindCSS', 'Vite', 'Chart.js', 'Web Audio API'],
    image: 'https://images.pexels.com/photos/1325450/pexels-photo-1325450.jpeg',
    github: 'https://github.com/FrostByte-49/MindEaze',
    demo: 'https://mindeaze.netlify.app/',
  },

  {
    title: 'Portfolio Website – Pranav Khalate',
    description: 'A dynamic personal portfolio showcasing projects, experience, and achievements.',
    longDescription: `A modern, fully responsive developer portfolio crafted to highlight projects, internships, open-source contributions, and personal achievements. Designed with a minimalist aesthetic and smooth animations, it offers an engaging browsing experience with sections like About, Projects, Experience, and Contact. Built with React, TypeScript, and TailwindCSS, the website reflects both technical proficiency and attention to design detail.`,
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Lucide React'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com/FrostByte-49/Portfolio_',
    demo: '#',
  },

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null); 

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20 transition-colors duration-500
             bg-gradient-to-br from-pink-100 via-white to-purple-100 
             dark:from-[#0a0f1f] dark:via-[#1a1440] dark:to-[#2b1e5a]"
    >

      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
            <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
              プロジェクト • My Creations
            </span>
          </div>
    
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
            Projects
          </h2>
    
          {/* Line Animation */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-white/40 dark:bg-black/40 rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-purple-300/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-3xl max-w-3xl w-full max-h-[110vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-white/10 animate-scale-in scrollbar-thin scrollbar-thumb-rounded-full">
              <div className="relative">
                <img
                  src={projectsData[selectedProject].image}
                  alt={projectsData[selectedProject].title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="fixed top-4 right-4 z-50 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-full shadow-2xl border border-white/30 dark:border-white/10 hover:scale-110 hover:bg-white hover:dark:bg-gray-700 transition-all duration-300 group"
                >
                  <X className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors duration-300" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {projectsData[selectedProject].title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {projectsData[selectedProject].longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projectsData[selectedProject].tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-purple-300/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={projectsData[selectedProject].github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>

                  <a
                    href={projectsData[selectedProject].demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Text */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-full border border-pink-200/50 dark:border-purple-700/50">
            <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 capitalize">
              Learning endlessly. Building fearlessly.
            </p>
            <Sparkles className="w-5 h-5 text-pink-500 dark:text-purple-400 animate-pulse" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

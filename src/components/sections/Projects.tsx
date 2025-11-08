import { useState } from 'react';
import { Sparkles, ExternalLink, Github, X } from 'lucide-react';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and secure payment processing using Stripe. Implemented real-time inventory tracking and order management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'Developed a collaborative task management application with real-time synchronization, drag-and-drop interface, team collaboration features, and progress tracking. Includes notifications and deadline reminders.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts and animations',
    longDescription: 'Created an elegant weather dashboard that displays current conditions, 7-day forecasts, and interactive weather maps. Features beautiful animations that change based on weather conditions.',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics',
    longDescription: 'Built a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Provides insights, trends, and actionable metrics with beautiful data visualizations.',
    tech: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '#',
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

        <h2 className="text-6xl font-bold mb-6 animate-glow">
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
          <span className="text-lg text-pink-500 dark:text-purple-300 font-light">🚀</span>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
        </div>
      </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up"
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
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-3xl max-w-3xl w-full max-h-[100vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-white/10 animate-scale-in">
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
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={projectsData[selectedProject].demo}
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
      </div>
    </section>
  );
}

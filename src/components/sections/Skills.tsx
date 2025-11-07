import {
  Code2,
  Database,
  Zap,
  GitBranch,
  Box,
  Palette,
  Terminal,
  Radio,
  FileJson,
  Package,
} from 'lucide-react';

const skillsData = {
  Frontend: [
    { name: 'React', icon: Code2, color: 'from-blue-400 to-cyan-400' },
    { name: 'TypeScript', icon: Code2, color: 'from-blue-500 to-blue-600' },
    { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', icon: Zap, color: 'from-gray-600 to-gray-900' },
    { name: 'Vue.js', icon: Code2, color: 'from-green-400 to-emerald-500' },
  ],
  Backend: [
    { name: 'Node.js', icon: Radio, color: 'from-green-500 to-emerald-600' },
    { name: 'Express', icon: Terminal, color: 'from-yellow-600 to-orange-600' },
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-500 to-indigo-600' },
    { name: 'MongoDB', icon: Database, color: 'from-green-500 to-teal-600' },
    { name: 'REST APIs', icon: FileJson, color: 'from-orange-400 to-red-500' },
  ],
  Tools: [
    { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-red-600' },
    { name: 'Docker', icon: Box, color: 'from-blue-500 to-cyan-600' },
    { name: 'Figma', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'VS Code', icon: Code2, color: 'from-blue-600 to-purple-600' },
    { name: 'Postman', icon: Package, color: 'from-orange-500 to-red-500' },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <div
              key={category}
              className="bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/10 hover:scale-110 hover:shadow-xl transition-all duration-300"
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-125 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Calendar } from 'lucide-react';

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
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative pl-20 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-5 top-6 w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg animate-pulse">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                <div className="bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>
                    </div>

                    <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-purple-300/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

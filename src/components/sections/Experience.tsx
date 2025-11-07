import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-purple-500 mt-1 text-lg">✦</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

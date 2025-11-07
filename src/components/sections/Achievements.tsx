import { Award, Trophy, Star } from 'lucide-react';

const achievementsData = [
  {
    title: 'Hackathon Winner',
    event: 'National Tech Hackathon 2023',
    description: 'First place among 500+ participants for building an innovative AI solution',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Google Cloud Certified',
    event: 'Professional Cloud Architect',
    description: 'Achieved certification in designing and managing cloud solutions',
    icon: Award,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Open Source Contributor',
    event: 'GitHub Achievements',
    description: 'Contributed to 20+ open source projects with 500+ stars',
    icon: Star,
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Best Project Award',
    event: 'University Tech Fest 2023',
    description: 'Recognized for outstanding final year project presentation',
    icon: Award,
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Coding Competition Winner',
    event: 'CodeChef Contest',
    description: 'Secured top position in monthly coding challenge',
    icon: Trophy,
    color: 'from-red-400 to-pink-500',
  },
  {
    title: 'AWS Certified Developer',
    event: 'Amazon Web Services',
    description: 'Professional certification in AWS cloud development',
    icon: Award,
    color: 'from-orange-400 to-amber-500',
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 group relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {achievement.title}
                  </h3>

                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3 text-sm">
                    {achievement.event}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

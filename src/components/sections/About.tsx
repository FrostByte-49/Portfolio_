import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        <div className="bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10 relative overflow-hidden group hover:scale-105 transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-purple-500 animate-spin-slow" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Developer & Creative Technologist
              </h3>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Pranav Khalate</span>,
                a passionate developer who loves crafting beautiful digital experiences. I believe in the power of
                technology to transform ideas into reality.
              </p>

              <p>
                My journey in tech has been driven by curiosity and a desire to create meaningful solutions.
                From building elegant user interfaces to architecting robust backend systems, I enjoy every aspect
                of the development process.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or diving into the latest anime series for inspiration. I believe that creativity and technical
                excellence go hand in hand.
              </p>

              <div className="pt-6 border-t border-gray-300 dark:border-gray-600">
                <h4 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">My Goals</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Create innovative solutions that make a real-world impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Continuously learn and master emerging technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Collaborate with talented teams to build exceptional products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Home, User, GraduationCap, Briefcase, FolderGit2, Code2, Award, Image, MessageSquare, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ activeSection }: SidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/30 dark:bg-black/30 backdrop-blur-xl border-r border-white/20 dark:border-white/10 z-40 hidden lg:block">
      <div className="flex flex-col h-full p-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
            PK Portfolio
          </h2>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                activeSection === id
                  ? 'bg-gradient-to-r from-pink-400/30 to-purple-400/30 text-purple-600 dark:text-purple-300 shadow-lg scale-105'
                  : 'hover:bg-white/20 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-all duration-300 ${
                  activeSection === id ? 'animate-bounce' : 'group-hover:scale-110'
                }`}
              />
              <span className="font-medium">{label}</span>
              {activeSection === id && (
                <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

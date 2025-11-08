import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Code2,
  Award,
  Image,
  MessageSquare,
  Mail,
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar({ activeSection }: SidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      className="fixed left-0 top-0 h-full w-72 bg-white/30 dark:bg-[#0d0b1e]/40 
                 backdrop-blur-2xl border-r border-white/20 dark:border-white/10 
                 shadow-[0_0_25px_rgba(255,182,193,0.2)] z-40 hidden lg:flex flex-col"
                 
    >
      {/* Header / Branding */}
      <div className="py-8 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 blur-3xl rounded-full animate-pulse" />
        <h2 className="relative text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
          PK Portfolio
        </h2>
        <div className="mt-2 h-[2px] w-16 mx-auto bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl 
                        transition-all duration-400 group relative overflow-hidden
                        ${
                          activeSection === id
                            ? "bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 text-pink-600 dark:text-pink-300 shadow-lg shadow-pink-500/10 scale-[1.03]"
                            : "hover:bg-white/20 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300"
                        }`}
          >
            {/* Gradient glow highlight */}
            {activeSection === id && (
              <span className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-blue-400/10 blur-md opacity-80 animate-pulse" />
            )}

            <Icon
              className={`relative z-10 w-5 h-5 transition-all duration-300 ${
                activeSection === id
                  ? "text-pink-500 drop-shadow-[0_0_6px_rgba(255,182,193,0.5)]"
                  : "group-hover:scale-110 group-hover:text-pink-400"
              }`}
            />
            <span className="relative z-10 font-medium text-[1.05rem] tracking-wide">
              {label}
            </span>

            {/* Glowing indicator dot */}
            {activeSection === id && (
              <div className="ml-auto w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 animate-ping" />
            )}
          </button>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="py-6 text-center text-xs text-gray-600 dark:text-gray-400 border-t border-white/10">
        <p>© 2025 Pranav Khalate</p>
        <p className="text-[0.75rem] text-pink-400 mt-1 tracking-wide">
          Crafted with 💖 & React
        </p>
      </div>
    </aside>
  );
}

import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <button
        onClick={() => setIsDark(!isDark)}
        className="group relative p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6">
          <Sun
            className={`absolute inset-0 text-yellow-500 transition-all duration-500 ${
              isDark ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <Moon
            className={`absolute inset-0 text-blue-300 transition-all duration-500 ${
              isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
            }`}
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
      </button>
    </header>
  );
}

import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Gallery from './components/sections/Gallery';
// import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import ParticleBackground from './components/ParticleBackground';

const GA_MEASUREMENT_ID = 'G-42E1CB0HXF'; 
ReactGA.initialize(GA_MEASUREMENT_ID);

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false; 
  });
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  // Initialize Theme & Mark As Mounted
  useEffect(() => {
    setMounted(true);
    // Track First Pageview
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  // Apply Theme To Document
  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'achievements', 'gallery', 'testimonials', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            // Track pageview on section change
            ReactGA.send({ hitType: 'pageview', page: `#${section}` });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent Flash Of Wrong Theme
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 transition-colors duration-700">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-950 transition-colors duration-700">
      <ParticleBackground isDark={isDark} />

      <Header isDark={isDark} setIsDark={setIsDark} />
      <Sidebar activeSection={activeSection} />

      <main className="ml-0 lg:ml-64 transition-all duration-300">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Gallery />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;

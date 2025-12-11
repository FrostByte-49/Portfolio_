import { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Analytics } from '@vercel/analytics/react';
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

  // Smooth Scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Click Event Listeners For Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll as EventListener);
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'achievements', 'gallery', 'testimonials', 'contact'];
          const scrollPosition = window.scrollY + 150; 

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetHeight = element.offsetHeight;
              
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                ReactGA.send({ hitType: 'pageview', page: `#${section}` });
                break;
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial Check
    handleScroll();
    
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
      <Analytics />

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
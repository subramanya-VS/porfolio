import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './components/ThemeToggle';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import {Projects} from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <CustomCursor />
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </AnimatePresence>
    </div>
  );
}

export default App;
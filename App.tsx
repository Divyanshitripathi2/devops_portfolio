
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cloud, 
  Cpu, 
  Shield, 
  Activity, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Code,
  Layout,
  Workflow
} from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Navbar activeSection={activeSection} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero">
          <Hero />
        </section>

        <section id="experience" className="py-24">
          <Experience />
        </section>

        <section id="skills" className="py-24">
          <Skills />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 py-12 border-t border-slate-800/50 bg-slate-950/30 backdrop-blur-sm text-center">
        <p className="text-slate-400 text-sm">
          Designed & Built for Scale by Divyanshi Tripathi &copy; {new Date().getFullYear()}
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/Divyanshitripathi2/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:divyanshitripathi.place@gmail.com" className="text-slate-500 hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;

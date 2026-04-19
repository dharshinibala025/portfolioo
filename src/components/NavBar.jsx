import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Certificates', path: '#certificates' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' },
];

const NavBar = ({ isVisible = true }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.path.substring(1));

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is somewhat in view (e.g., top is within viewport or close to it)
          return rect.top >= -100 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const element = document.getElementById(path.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-4 w-[95%] max-w-6xl rounded-3xl border border-white/10 bg-base-900/80 px-6 py-4 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="font-display text-base uppercase tracking-[0.35em] text-accent-300">Dharshini</span>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="flex w-full max-w-3xl items-center justify-end gap-4 text-sm font-medium overflow-x-auto no-scrollbar">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleClick(e, link.path)}
                    className={`relative rounded-full px-4 py-2 transition whitespace-nowrap ${isActive
                      ? 'bg-accent-500/20 text-white shadow-glow'
                      : 'text-muted hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full border border-accent-400/60"
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;








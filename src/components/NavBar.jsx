import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { House, User, GraduationCap, Folder, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '#home', icon: House },
  { label: 'About', path: '#about', icon: User },
  { label: 'Skills', path: '#skills', icon: GraduationCap },
  { label: 'Projects', path: '#projects', icon: Folder },
  { label: 'Contact', path: '#contact', icon: Mail },
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
          // Check if section is currently in viewport focus
          return rect.top >= -150 && rect.top <= window.innerHeight / 2;
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border border-[#ECE7DE] bg-[rgba(255,255,255,0.85)] px-6 py-4 shadow-[0_8px_30px_rgba(23,23,23,0.04)] backdrop-blur-xl md:px-8"
      >
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="font-serif text-2xl font-bold tracking-tight text-[#9A7B4F] transition-opacity hover:opacity-80"
        >
          Dharshini
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 md:gap-3 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.substring(1);
            const Icon = link.icon;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleClick(e, link.path)}
                className={`relative flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7B4F] ${
                  isActive
                    ? 'text-[#9A7B4F]'
                    : 'text-[#171717] hover:bg-[#F6F2EA] hover:text-[#9A7B4F]'
                }`}
              >
                {/* Icon */}
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="transition-colors duration-300"
                  style={{
                    color: isActive ? '#9A7B4F' : '#171717',
                  }}
                />
                
                {/* Label text */}
                <span className="hidden md:inline">{link.label}</span>

                {/* Animated active dot below item */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#9A7B4F]"
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;

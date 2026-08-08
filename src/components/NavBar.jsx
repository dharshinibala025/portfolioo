import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { socials } from '../data/content';

const navLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Skills', path: '#skills' },
  { label: 'Projects', path: '#projects' },
  { label: 'Contact', path: '#contact' },
];

const NavBar = ({ isVisible = true }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.path.substring(1));

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const githubUrl = socials.find((s) => s.label === 'GitHub')?.url || 'https://github.com/dharshinibala025';
  const linkedinUrl = socials.find((s) => s.label === 'LinkedIn')?.url || 'https://www.linkedin.com/in/dharshini-bala-62193632a?';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 h-[72px] bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#ECE7DE]/70 transition-all duration-300"
    >
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-6 sm:px-12 lg:px-20">
        
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#1E1E1E] transition-opacity hover:opacity-80 flex items-center gap-0.5"
        >
          <span>Dharshini</span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.substring(1);
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleClick(e, link.path)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#1E1E1E] font-semibold'
                    : 'text-[#6B7280] hover:text-[#B8893D]'
                }`}
              >
                {link.label}

                {/* Golden Underline Indicator below active item */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-line"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#B8893D]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 text-[#1E1E1E]">
          {/* GitHub Icon */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#B8893D] transition-colors p-1"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#B8893D] transition-colors p-1"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

      </div>
    </motion.header>
  );
};

export default NavBar;

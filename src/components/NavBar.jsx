import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Menu, X } from 'lucide-react';
import { socials } from '../data/content';
import DBMonogramLogo from './DBMonogramLogo';

const navLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Skills', path: '#skills' },
  { label: 'Projects', path: '#projects' },
  { label: 'Contact', path: '#contact' },
];

const NavBar = ({ isVisible = true }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
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
      className="fixed inset-x-0 top-0 z-50 h-[76px] bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#E8E4DB]/80 transition-all duration-300"
    >
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-16">
        
        {/* Left: Interconnected DB Monogram Logo + Full Name */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="group flex items-center gap-3 sm:gap-3.5 focus:outline-none transition-transform duration-200"
          aria-label="Dharshini Balasubramaniam Home"
        >
          <DBMonogramLogo size={42} />
          <span className="font-sans text-xs xs:text-sm sm:text-base lg:text-lg font-bold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#1E40AF] whitespace-nowrap">
            Dharshini{' '}
            <span className="text-[#1E3A8A] transition-colors duration-300 group-hover:text-[#2563EB]">
              Balasubramaniam
            </span>
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-sans">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.substring(1);
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleClick(e, link.path)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#171717] font-semibold'
                    : 'text-[#6B6B6B] hover:text-[#C49545]'
                }`}
              >
                {link.label}

                {/* Golden Underline Indicator below active item */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-line"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#C49545]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 text-[#171717]">
          {/* GitHub Icon */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B6B] hover:text-[#C49545] transition-colors p-1"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B6B] hover:text-[#C49545] transition-colors p-1"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-[#171717] hover:text-[#C49545] transition-colors focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#F8F6F1] border-b border-[#E8E4DB] px-6 py-6 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleClick(e, link.path)}
                  className="text-sm font-semibold text-[#171717] hover:text-[#C49545] py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;

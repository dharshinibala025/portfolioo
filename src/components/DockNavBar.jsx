import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { House, User, Sparkles, Briefcase, Mail } from 'lucide-react';

const dockLinks = [
  { label: 'Home', path: '#home', icon: House },
  { label: 'About', path: '#about', icon: User },
  { label: 'Skills', path: '#skills', icon: Sparkles },
  { label: 'Projects', path: '#projects', icon: Briefcase },
  { label: 'Contact', path: '#contact', icon: Mail },
];

const DockNavBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      const sections = dockLinks.map(link => link.path.substring(1));

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the viewport
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
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-end justify-center gap-4 rounded-3xl border border-[#ECE7DE] bg-[rgba(255,255,255,0.85)] px-6 py-3.5 shadow-[0_12px_40px_rgba(23,23,23,0.08)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_16px_48px_rgba(23,23,23,0.12)]"
      >
        {dockLinks.map((link) => {
          const isActive = activeSection === link.path.substring(1);
          return (
            <DockItem
              key={link.path}
              link={link}
              isActive={isActive}
              mouseX={mouseX}
              onClick={(e) => handleClick(e, link.path)}
            />
          );
        })}
      </motion.nav>
    </div>
  );
};

const DockItem = ({ link, isActive, mouseX, onClick }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate distance from mouse to the center of this item
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 };
    return val - bounds.left - bounds.width / 2;
  });

  // Smooth spring size based on distance
  const sizeSync = useTransform(distance, [-150, 0, 150], [56, 76, 56]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 220, damping: 15 });

  // Icon size scales proportionally
  const iconSizeSync = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
  const iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 220, damping: 15 });

  const Icon = link.icon;

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center rounded-2xl transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7B4F] focus-visible:ring-offset-2"
      aria-label={link.label}
    >
      {/* Active state background transition */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="active-dock-bg"
            className="absolute inset-0 rounded-2xl bg-[#F6F2EA] -z-10"
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          />
        )}
      </AnimatePresence>

      {/* Non-active Hover state styling (handled via CSS class to prevent layoutId conflicts) */}
      {!isActive && isHovered && (
        <div className="absolute inset-0 rounded-2xl bg-[#F6F2EA]/60 -z-10" />
      )}

      {/* Icon */}
      <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
        <Icon
          className="transition-colors duration-300"
          style={{
            color: isActive ? '#9A7B4F' : '#171717',
            width: '100%',
            height: '100%',
          }}
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="absolute -top-12 left-1/2 z-30 rounded-lg border border-[#ECE7DE] bg-white px-3 py-1.5 text-xs font-semibold text-[#171717] shadow-[0_4px_12px_rgba(23,23,23,0.04)] whitespace-nowrap pointer-events-none"
          >
            {link.label}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Indicator Dot */}
      {isActive && (
        <motion.div
          layoutId="active-dock-dot"
          className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#9A7B4F]"
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        />
      )}
    </motion.button>
  );
};

export default DockNavBar;

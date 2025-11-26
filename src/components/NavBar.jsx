import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Skills', path: '/skills' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const NavBar = ({ isVisible = true }) => (
  <header className="fixed inset-x-0 top-0 z-20">
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
          <div className="flex w-full max-w-3xl items-center justify-end gap-4 overflow-x-auto text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 transition ${isActive
                    ? 'bg-accent-500/20 text-white shadow-glow'
                    : 'text-muted hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full border border-accent-400/60"
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  </header>
);

export default NavBar;








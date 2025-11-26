import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavVisible, setIsNavVisible] = useState(true);

  const pages = ['/', '/projects', '/certificates', '/skills', '/about', '/contact'];

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavVisible(true);
  }, [location.pathname]);

  useEffect(() => {
    let isThrottled = false;

    const handleScroll = () => {
      if (isThrottled) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 20) {
        const currentIndex = pages.indexOf(location.pathname);
        if (currentIndex !== -1 && currentIndex < pages.length - 1) {
          isThrottled = true;
          setIsNavVisible(false);
          navigate(pages[currentIndex + 1]);

          // Reset throttle after a delay to prevent double-firing during transition
          setTimeout(() => {
            isThrottled = false;
          }, 1000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-base-900 text-white">
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar isVisible={isNavVisible} />
        <main className="flex-1 px-4 pb-16 pt-28 md:px-10 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-6xl"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;








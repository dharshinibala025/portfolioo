import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CinematicIntro from '../components/CinematicIntro';

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  const pages = ['/', '/projects', '/certificates', '/skills', '/contact'];

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavVisible(true);
  }, [location.pathname]);


  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showIntro]);


  return (
    <div className="relative min-h-screen overflow-hidden bg-base-900 text-white">
      <AnimatePresence mode="wait">
        {showIntro && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar isVisible={isNavVisible} />
        <main className="flex-1 px-4 pb-16 pt-20 md:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-6xl">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

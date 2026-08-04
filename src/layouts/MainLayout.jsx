import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CinematicIntro from '../components/CinematicIntro';
import FloatingDownloadCv from '../components/FloatingDownloadCv';

const MainLayout = () => {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

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
    <div className="relative min-h-screen overflow-hidden bg-[#FCFBF8] text-[#171717]">
      <AnimatePresence mode="wait">
        {showIntro && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Dynamic Animated Canvas Background */}
      <AnimatedBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Minimal Top Header Nav */}
        <NavBar isVisible={isNavVisible} />

        {/* Main Content Area */}
        <main className="flex-1 px-4 pb-16 pt-20 md:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-6xl">
            <Outlet />
          </div>
        </main>

        {/* Floating Download CV Pill */}
        <FloatingDownloadCv />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

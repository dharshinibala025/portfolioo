import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavVisible(true);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F8F6F1] text-[#171717]">
      {/* Dynamic Animated Canvas Background */}
      <AnimatedBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Minimal Top Header Nav */}
        <NavBar isVisible={isNavVisible} />

        {/* Main Content Area */}
        <main className="flex-1 pb-16 pt-20">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

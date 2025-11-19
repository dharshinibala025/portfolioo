import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-base-900 text-white">
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1 px-4 pb-16 pt-28 md:px-10 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
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








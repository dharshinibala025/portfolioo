import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.png';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const handleClickExplore = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative w-full bg-[#FAF8F3] overflow-hidden min-h-[75vh] flex items-start sm:items-center">
      
      {/* ---------------------------------------------------- */}
      {/* Smooth Organic Fluid Wave Background (Matching Reference Design) */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 600 700"
          className="h-full w-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="refGoldWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C99846" />
              <stop offset="50%" stopColor="#B8893D" />
              <stop offset="100%" stopColor="#A67B34" />
            </linearGradient>
          </defs>
          <path
            d="M 120,0 
               C 240,120 20,280 160,450 
               C 260,580 100,700 350,700 
               L 600,700 
               L 600,0 
               Z"
            fill="url(#refGoldWave)"
          />
        </svg>
      </div>

      {/* ---------------------------------------------------- */}
      {/* Hero Content aligned inside Max-W-1400px Container */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 pt-2 sm:pt-4 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* ==================================================== */}
          {/* LEFT SIDE (55% Width on Desktop) */}
          {/* ==================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Gold Accent Line + Small Label */}
            <motion.div variants={itemVariants} className="flex flex-col items-start mb-4">
              <div className="h-[2px] w-8 bg-[#B8893D] mb-2.5 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B8893D] font-sans">
                SOFTWARE DEVELOPER
              </span>
            </motion.div>

            {/* Main Heading (64px Playfair Display) */}
            <motion.h1
              variants={itemVariants}
              className="font-serif-display text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#1E1E1E] leading-[1.08] mb-3 tracking-tight"
            >
              Hello,<br />
              I'm{' '}
              <span className="text-[#B8893D]">
                <TypewriterText
                  text="Dharshini."
                  speed={120}
                  loop={false}
                  cursorColor="#B8893D"
                />
              </span>
            </motion.h1>

            {/* Subheading (28px) */}
            <motion.h2
              variants={itemVariants}
              className="font-serif-display text-xl sm:text-2xl lg:text-[28px] font-medium text-[#1E1E1E]/80 leading-snug mb-5"
            >
              Software Developer & Computer Science Student
            </motion.h2>

            {/* Concise Description (18px Inter) */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg lg:text-[18px] text-[#6B7280] leading-relaxed mb-8 max-w-xl font-normal"
            >
              I build modern, scalable web applications and software solutions. Passionate about solving real-world problems through clean code and continuous learning.
            </motion.p>

            {/* CTA Buttons - Aligned Horizontally */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 flex-wrap"
            >
              {/* Primary Button */}
              <motion.a
                href="#projects"
                onClick={handleClickExplore}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8893D] hover:bg-[#966E2E] px-7 py-3 text-sm font-medium text-white shadow-sm transition-colors duration-200 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </motion.div>


          {/* ==================================================== */}
          {/* RIGHT SIDE (45% Width on Desktop) */}
          {/* Professional Static Profile Display */}
          {/* ==================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center lg:justify-end">
              {/* Subtle Ambient Glow Aura */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-[#B8893D]/20 blur-2xl -z-20" />

              {/* Profile Card Container - Static & Professional */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white shadow-[0_25px_60px_rgba(30,30,30,0.16)] overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Dharshini"
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: 'circle(43.5% at 50% 50%)',
                    transform: 'scale(1.15)',
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection;

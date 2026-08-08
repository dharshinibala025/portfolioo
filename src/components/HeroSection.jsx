import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const HeroSection = () => {
  const handleClickExplore = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Entrance animation variants (one-time smooth fade-up, no continuous motion loops)
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
      {/* Subtle Sharp Zig-Zag / Angular Geometric Background behind Right Image */}
      {/* Layered geometric shapes with sharp diagonal edges and soft drop shadow */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-0 right-0 w-full lg:w-[52%] h-full pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 600 700"
          className="h-full w-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Primary Golden Gradient */}
            <linearGradient id="geoGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8893D" />
              <stop offset="60%" stopColor="#A67B34" />
              <stop offset="100%" stopColor="#8C6424" />
            </linearGradient>

            {/* Subtle Accent Light Gold Gradient */}
            <linearGradient id="geoGoldLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4C3A3" />
              <stop offset="100%" stopColor="#C2AB8A" />
            </linearGradient>

            {/* Elegant Drop Shadow for Depth */}
            <filter id="geoShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="-8" dy="12" stdDeviation="14" floodColor="#1E1E1E" floodOpacity="0.10" />
            </filter>
          </defs>

          {/* Layer 1: Darker Accent Base Layer (First Sharp Zig-Zag Angle) */}
          <polygon
            points="120,0 600,0 600,700 180,700 70,460 210,220"
            fill="#8C6424"
            opacity="0.25"
          />

          {/* Layer 2: Primary Gold Geometric Layer (Sharp Zig-Zag Angle with Shadow) */}
          <polygon
            points="150,0 600,0 600,700 220,700 90,470 240,230"
            fill="url(#geoGoldGradient)"
            filter="url(#geoShadow)"
            opacity="0.95"
          />

          {/* Layer 3: Top Highlight Light Gold Accent Layer */}
          <polygon
            points="200,0 600,0 600,700 300,700 160,500 290,240"
            fill="url(#geoGoldLight)"
            opacity="0.35"
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
                GENERATIVE AI EXPLORER
              </span>
            </motion.div>

            {/* Main Heading (64px Playfair Display) */}
            <motion.h1
              variants={itemVariants}
              className="font-serif-display text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#1E1E1E] leading-[1.08] mb-3 tracking-tight"
            >
              Hello,<br />
              I'm Dharshini.
            </motion.h1>

            {/* Subheading (28px) */}
            <motion.h2
              variants={itemVariants}
              className="font-serif-display text-xl sm:text-2xl lg:text-[28px] font-medium text-[#1E1E1E]/80 leading-snug mb-5"
            >
              Full Stack Developer & Computer Science Student
            </motion.h2>

            {/* Concise Description (18px Inter) */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg lg:text-[18px] text-[#6B7280] leading-relaxed mb-8 max-w-xl font-normal"
            >
              I build intelligent web applications using modern technologies and Generative AI. Passionate about solving real-world problems through scalable software and continuous learning.
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
          {/* Profile Image floating seamlessly over Fluid Wave */}
          {/* ==================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center lg:justify-end">

              {/* Profile Image with 32px Rounded Corners & Soft Shadow over Fluid Wave */}
              <div className="relative z-10 w-full max-w-[270px] sm:max-w-[300px] lg:max-w-[320px] overflow-hidden rounded-[32px] shadow-[0_20px_40px_rgba(30,30,30,0.15)] border-2 border-white/70">
                <img
                  src={profileImg}
                  alt="Dharshini"
                  className="h-auto w-full max-h-[380px] object-cover"
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

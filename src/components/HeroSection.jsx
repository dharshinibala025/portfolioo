import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const HeroSection = () => {
  const handleClickExplore = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // One-time smooth entrance animation (no continuous motion loops)
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
    <div className="relative w-full bg-[#FAF8F3] overflow-hidden min-h-[85vh] flex items-center">
      
      {/* ---------------------------------------------------- */}
      {/* Static Curved Fluid Wave Background behind the Right Image */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-0 right-0 w-full lg:w-[52%] h-full pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 600 700"
          className="h-full w-auto min-w-[125%] object-cover text-[#B8893D] opacity-95"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="staticGoldWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8893D" />
              <stop offset="60%" stopColor="#A67B34" />
              <stop offset="100%" stopColor="#C2AB8A" />
            </linearGradient>
          </defs>
          <path
            d="M 160,0 
               C 300,90 100,260 270,420 
               C 370,520 200,600 330,700 
               L 600,700 
               L 600,0 
               Z"
            fill="url(#staticGoldWave)"
          />
        </svg>
      </div>

      {/* ---------------------------------------------------- */}
      {/* Hero Content aligned inside Max-W-1400px Container */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 pt-10 pb-10">
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

              {/* Secondary Button */}
              <motion.a
                href="/resume/Dharshini Resume.pdf"
                download="Dharshini_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1E1E1E] hover:border-[#B8893D] text-[#1E1E1E] hover:text-[#B8893D] bg-transparent px-7 py-3 text-sm font-medium shadow-sm transition-colors duration-200 cursor-pointer"
              >
                <span>Download Resume</span>
                <Download size={16} />
              </motion.a>
            </motion.div>
          </motion.div>


          {/* ==================================================== */}
          {/* RIGHT SIDE (45% Width on Desktop) */}
          {/* Profile Image floating over Fluid Wave Background */}
          {/* ==================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center lg:justify-end">

              {/* Profile Image with 32px Rounded Corners & Soft Shadow over the Fluid Wave */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] overflow-hidden rounded-[32px] shadow-[0_20px_45px_rgba(30,30,30,0.15)] border-2 border-white/60">
                <img
                  src={profileImg}
                  alt="Dharshini"
                  className="h-auto w-full max-h-[480px] object-cover"
                />
              </div>

              {/* Minimal Status Badge */}
              <div className="absolute -bottom-3 left-4 sm:left-6 z-20 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/95 px-3.5 py-1.5 text-xs font-medium text-emerald-800 backdrop-blur-md shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Internship</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection;

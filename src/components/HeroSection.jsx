import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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

  const services = [
    {
      num: '01',
      title: 'UI/UX Design',
      desc: 'Crafting responsive, intuitive web interfaces and user-centered digital experiences.',
    },
    {
      num: '02',
      title: 'Backend & AI',
      desc: 'Building RESTful APIs with Node.js, Express, MongoDB, and Generative AI integrations.',
    },
    {
      num: '03',
      title: 'Software Development',
      desc: 'Solving complex problems through clean code, robust algorithms, and modern tools.',
    },
  ];

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
    <div className="relative w-full bg-[#FAF8F3] overflow-hidden min-h-[85vh] flex flex-col justify-between pt-4 pb-12">
      
      {/* ---------------------------------------------------- */}
      {/* Smooth Organic Fluid Wave Background */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 600 700"
          className="h-full w-full object-cover opacity-90"
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
      {/* Hero Main Content Grid */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* ==================================================== */}
          {/* LEFT SIDE (55% Width on Desktop) - Bold Clean Heading */}
          {/* ==================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left py-4 sm:py-8"
          >
            {/* Bold, Big & Professional Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[86px] font-extrabold text-[#1E1E1E] leading-[1.08] tracking-tight"
            >
              Hello,<br />
              I'm{' '}
              <span className="text-[#B8893D]">
                <TypewriterText
                  text="Dharshini."
                  speed={110}
                  deleteSpeed={50}
                  delay={2500}
                  loop={true}
                  cursorColor="#B8893D"
                />
              </span>
            </motion.h1>
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

              {/* Profile Card Container */}
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

      {/* ---------------------------------------------------- */}
      {/* Kept 3 Service Columns + Black Button Section at Bottom */}
      {/* ---------------------------------------------------- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[#ECE7DE]/80 pt-8 mt-4"
      >
        {/* Left-to-Center: 3 Columns */}
        <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => (
            <div key={item.num} className="flex flex-col items-start text-left">
              <span className="text-xs font-bold text-[#B8893D] mb-1 tracking-wider">
                {item.num}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1E1E1E] mb-1.5 font-serif-display">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Black Rectangular CTA Button */}
        <div className="md:col-span-4 lg:col-span-3 flex justify-start md:justify-end">
          <a
            href="#projects"
            onClick={handleClickExplore}
            className="w-full sm:w-auto bg-[#111111] hover:bg-black text-white font-bold text-xs sm:text-sm tracking-[0.2em] px-8 py-5 uppercase transition-all duration-300 shadow-lg flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>VIEW ALL WORKS</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroSection;

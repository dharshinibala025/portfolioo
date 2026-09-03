import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Monitor, Code, Laptop } from 'lucide-react';
import profileImg from '../assets/profile.png';

const HeroSection = () => {
  const handleClickExplore = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cards = [
    {
      num: '01',
      title: 'UI/UX Design',
      desc: 'Crafting responsive, intuitive web interfaces and user-centered digital experiences.',
      icon: Monitor,
    },
    {
      num: '02',
      title: 'Backend & AI',
      desc: 'Building RESTful APIs with Node.js, Express, MongoDB, and Generative AI integrations.',
      icon: Code,
    },
    {
      num: '03',
      title: 'Software Development',
      desc: 'Solving complex problems through clean code, robust algorithms, and modern tools.',
      icon: Laptop,
    },
  ];

  return (
    <div className="relative w-full bg-[#FCFBF8] text-[#1E1E1E] overflow-hidden min-h-[85vh] flex flex-col justify-between pt-4 pb-10">
      
      {/* ---------------------------------------------------- */}
      {/* Organic Gold Wave Background (Restricted to upper hero) */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-0 right-0 w-full lg:w-[52%] h-[78%] pointer-events-none z-0 overflow-hidden">
        
        {/* SVG Fluid Gold Wave with Double Contour */}
        <svg
          viewBox="0 0 600 600"
          className="h-full w-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="refGoldWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DEAA55" />
              <stop offset="55%" stopColor="#C6923A" />
              <stop offset="100%" stopColor="#AF7A26" />
            </linearGradient>
            <linearGradient id="refCreamWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F6EBD8" />
              <stop offset="100%" stopColor="#EADCC4" />
            </linearGradient>
          </defs>

          {/* Soft Cream Outer Contour Edge */}
          <path
            d="M 150,0 
               C 50,110 10,260 60,390 
               C 100,470 230,550 600,535 
               L 600,0 
               Z"
            fill="url(#refCreamWave)"
          />

          {/* Main Gold Luminous Wave */}
          <path
            d="M 195,0 
               C 95,110 45,260 95,380 
               C 135,455 260,510 600,485 
               L 600,0 
               Z"
            fill="url(#refGoldWave)"
          />
        </svg>

        {/* Top-Right Decorative Dot Matrix */}
        <div className="absolute top-8 right-10 grid grid-cols-4 gap-2.5 opacity-50 z-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#6E532D]" />
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* Hero Main Content Grid */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ==================================================== */}
          {/* LEFT SIDE (55% Width on Desktop) */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left py-2 sm:py-4">
            
            {/* Tagline label with horizontal gold line */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8C8C8C] font-sans">
                WELCOME TO MY PORTFOLIO
              </span>
              <div className="h-[2px] w-10 bg-[#B8893D] rounded-full" />
            </div>

            {/* Main Heading */}
            <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-extrabold text-[#1E1E1E] leading-[1.06] tracking-tight mb-5">
              Hello,<br />
              I'm <span className="text-[#B8893D]">Dharshini.</span>
            </h1>

            {/* Sub-description paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#666666] leading-relaxed max-w-lg mb-8 font-normal">
              I build digital experiences that are intuitive, efficient and designed to make an impact.
            </p>

            {/* CTA Buttons - Aligned Horizontally */}
            <div className="flex items-center gap-6 flex-wrap">
              {/* Primary Gold Button */}
              <a
                href="#projects"
                onClick={handleClickExplore}
                className="inline-flex items-center justify-center gap-2 bg-[#B8893D] hover:bg-[#966E2E] px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white shadow-sm transition-all duration-200 cursor-pointer rounded-[3px]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={15} />
              </a>

              {/* Secondary Underlined Text Link */}
              <a
                href="#about"
                onClick={handleClickAbout}
                className="text-xs font-bold tracking-widest uppercase text-[#1E1E1E] hover:text-[#B8893D] transition-colors relative py-1 border-b-2 border-[#B8893D]"
              >
                ABOUT ME
              </a>
            </div>
          </div>


          {/* ==================================================== */}
          {/* RIGHT SIDE (45% Width on Desktop) */}
          {/* Circular Profile Avatar Display */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center lg:justify-end">
              
              {/* Profile Card Container */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white shadow-[0_20px_50px_rgba(30,30,30,0.18)] overflow-hidden bg-white flex items-center justify-center">
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
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* Bottom Cards & Action Button Section (Clean #FCFBF8 Canvas) */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6">
        
        {/* Left 3 Cards */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#FAF7F2] border border-[#EFEBE1] rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:border-[#E5DEC9]"
              >
                {/* Left Circular Icon Badge */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#EDE7DA] flex items-center justify-center text-[#8C6D37]">
                  <Icon size={20} />
                </div>

                {/* Right Content */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs font-bold text-[#B8893D] mb-0.5 tracking-wider">
                    {item.num}
                  </span>
                  <h3 className="text-sm font-bold text-[#1E1E1E] mb-1 font-serif-display">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#7A7A7A] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Far Right Black Rectangular Button + Dot Accent */}
        <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-6 relative">
          <a
            href="#projects"
            onClick={handleClickExplore}
            className="w-full sm:w-auto bg-[#111111] hover:bg-black text-white font-bold text-xs tracking-[0.2em] px-8 py-5 uppercase rounded-[3px] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer group z-10"
          >
            <span>VIEW ALL WORKS</span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Bottom-Right Decorative Dot Matrix */}
          <div className="hidden xl:grid grid-cols-4 gap-2 opacity-30 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#B8893D]" />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;

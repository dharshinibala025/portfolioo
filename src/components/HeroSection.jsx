import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Monitor, Code, Laptop } from 'lucide-react';
import profileImg from '../assets/profile.png';

const HeroSection = () => {
  // Parallax motion tracking on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const layer1X = useTransform(dx, [-0.5, 0.5], [-12, 12]);
  const layer1Y = useTransform(dy, [-0.5, 0.5], [-12, 12]);
  const layer2X = useTransform(dx, [-0.5, 0.5], [15, -15]);
  const layer2Y = useTransform(dy, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

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
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#F8F6F1] text-[#171717] min-h-[85vh] flex flex-col justify-between overflow-hidden pt-4 pb-10 px-6 sm:px-12 lg:px-20 select-none"
    >
      {/* ---------------------------------------------------- */}
      {/* Background Soft Glow & Ambient Layers */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C49545]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/6 w-[350px] h-[350px] bg-[#171C24]/5 rounded-full blur-3xl" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* Top Main Hero Grid */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 pb-6">
        
        {/* ==================================================== */}
        {/* LEFT SIDE (55% Width on Desktop) */}
        {/* ==================================================== */}
        <div className="lg:col-span-7 flex flex-col items-start text-left py-2 sm:py-4">
          
          {/* Tagline label with horizontal gold line */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8C8C8C] font-sans">
              WELCOME TO MY PORTFOLIO
            </span>
            <div className="h-[2px] w-10 bg-[#C49545] rounded-full" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-bold text-[#171717] leading-[1.06] tracking-tight mb-4">
            Hello,<br />
            I'm <span className="text-[#C49545]">Dharshini.</span>
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
              className="inline-flex items-center justify-center gap-2 bg-[#C49545] hover:bg-[#A87B2C] px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white shadow-sm transition-all duration-200 cursor-pointer rounded-[3px]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight size={15} />
            </a>

            {/* Secondary Underlined Text Link */}
            <a
              href="#about"
              onClick={handleClickAbout}
              className="text-xs font-bold tracking-widest uppercase text-[#171717] hover:text-[#C49545] transition-colors relative py-1 border-b-2 border-[#C49545]"
            >
              ABOUT ME
            </a>
          </div>
        </div>


        {/* ==================================================== */}
        {/* RIGHT SIDE (45% Width on Desktop) */}
        {/* Layered Composition with Portrait */}
        {/* ==================================================== */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative mt-6 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-xl flex items-center justify-center lg:justify-end py-4">
            
            {/* 1. Deep Navy / Charcoal Organic Curve Layer */}
            <motion.div
              style={{ x: layer2X, y: layer2Y }}
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-[42%_58%_70%_30%/45%_45%_55%_55%] bg-[#171C24] opacity-90 shadow-2xl -z-20 transform translate-x-4 translate-y-4"
            />

            {/* 2. Muted Luxury Gold Curved Wave Shape Layer */}
            <motion.div
              style={{ x: layer1X, y: layer1Y }}
              animate={{ rotate: [0, -3, 0, 3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] lg:w-[430px] lg:h-[430px] rounded-[55%_45%_35%_65%/60%_40%_60%_40%] bg-gradient-to-br from-[#D8AB57] via-[#C49545] to-[#A87B2C] opacity-95 shadow-xl -z-10"
            />

            {/* 3. Thin Golden Ring Outline */}
            <motion.div
              animate={{ scale: [0.98, 1.02, 0.98], rotate: [0, 180, 360] }}
              transition={{ scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
              className="absolute w-[340px] h-[340px] sm:w-[410px] sm:h-[410px] lg:w-[470px] lg:h-[470px] rounded-full border border-[#C49545]/40 pointer-events-none -z-5"
            />

            {/* 4. Minimal Dotted Grid Matrix Decoration */}
            <div className="absolute -top-4 -right-2 grid grid-cols-4 gap-2.5 opacity-45 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C49545]" />
              ))}
            </div>
            <div className="absolute -bottom-4 -left-2 grid grid-cols-4 gap-2.5 opacity-35 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#171C24]" />
              ))}
            </div>

            {/* 5. Dominant Circular Portrait Frame with Slow Floating Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full border-4 border-white shadow-[0_25px_60px_rgba(23,28,36,0.16)] overflow-hidden bg-white flex items-center justify-center group transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(196,149,69,0.3)]"
            >
              <img
                src={profileImg}
                alt="Dharshini"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  clipPath: 'circle(43.5% at 50% 50%)',
                  transform: 'scale(1.15)',
                }}
              />
            </motion.div>

          </div>
        </div>

      </div>

      {/* ---------------------------------------------------- */}
      {/* Bottom Row: 3 Service Cards + Action Button Section */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4">
        
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
                  <span className="text-xs font-bold text-[#C49545] mb-0.5 tracking-wider">
                    {item.num}
                  </span>
                  <h3 className="text-sm font-bold text-[#171717] mb-1 font-serif-display">
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

        {/* Far Right Black Rectangular Button */}
        <div className="lg:col-span-3 flex justify-start lg:justify-end">
          <a
            href="#projects"
            onClick={handleClickExplore}
            className="w-full sm:w-auto bg-[#111111] hover:bg-black text-white font-bold text-xs tracking-[0.2em] px-8 py-5 uppercase rounded-[3px] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>VIEW ALL WORKS</span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>

    </div>
  );
};

export default HeroSection;

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#F8F6F1] text-[#171717] min-h-[78vh] sm:min-h-[82vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 px-6 sm:px-12 lg:px-20 select-none"
    >
      {/* ---------------------------------------------------- */}
      {/* Background Soft Glow Aura */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C49545]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/6 w-[350px] h-[350px] bg-[#171C24]/5 rounded-full blur-3xl" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* Main Two-Column Editorial Grid */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ==================================================== */}
        {/* LEFT SIDE: Minimal Editorial Typography ONLY */}
        {/* ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col justify-center items-start text-left pr-0 lg:pr-6"
        >
          <h1 className="font-serif-display text-6xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[98px] font-bold text-[#171717] leading-[1.04] tracking-tight">
            Hello,<br />
            I'm <span className="text-[#C49545]">Dharshini.</span>
          </h1>
        </motion.div>


        {/* ==================================================== */}
        {/* RIGHT SIDE: Layered Editorial Portrait Composition */}
        {/* ==================================================== */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative mt-6 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-xl flex items-center justify-center lg:justify-end py-6">
            
            {/* 1. Deep Navy / Charcoal Organic Curve Layer */}
            <motion.div
              style={{ x: layer2X, y: layer2Y }}
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-[42%_58%_70%_30%/45%_45%_55%_55%] bg-[#171C24] opacity-90 shadow-2xl -z-20 transform translate-x-4 translate-y-4"
            />

            {/* 2. Muted Luxury Gold Curved Wave Shape Layer */}
            <motion.div
              style={{ x: layer1X, y: layer1Y }}
              animate={{ rotate: [0, -3, 0, 3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[330px] h-[330px] sm:w-[390px] sm:h-[390px] lg:w-[450px] lg:h-[450px] rounded-[55%_45%_35%_65%/60%_40%_60%_40%] bg-gradient-to-br from-[#D8AB57] via-[#C49545] to-[#A87B2C] opacity-95 shadow-xl -z-10"
            />

            {/* 3. Thin Golden Ring Outline */}
            <motion.div
              animate={{ scale: [0.98, 1.02, 0.98], rotate: [0, 180, 360] }}
              transition={{ scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
              className="absolute w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] lg:w-[490px] lg:h-[490px] rounded-full border border-[#C49545]/40 pointer-events-none -z-5"
            />

            {/* 4. Secondary Golden Accent Ring */}
            <div className="absolute w-[380px] h-[380px] sm:w-[450px] sm:h-[450px] lg:w-[510px] lg:h-[510px] rounded-full border border-dashed border-[#C49545]/20 pointer-events-none -z-5" />

            {/* 5. Minimal Dotted Grid Matrix Decoration */}
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

            {/* 6. Dominant Circular Portrait Frame with Slow Floating Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative z-10 w-72 h-72 sm:w-84 sm:h-84 lg:w-[390px] lg:h-[390px] rounded-full border-4 border-white shadow-[0_25px_60px_rgba(23,28,36,0.16)] overflow-hidden bg-white flex items-center justify-center group transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(196,149,69,0.3)]"
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
    </div>
  );
};

export default HeroSection;

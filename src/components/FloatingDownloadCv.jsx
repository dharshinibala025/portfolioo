import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';

const FloatingDownloadCv = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href="/resume/Dharshini Resume.pdf"
        download="Dharshini_Resume.pdf"
        className="group relative flex items-center gap-3 rounded-full border border-[#9A7B4F]/30 bg-[#171717]/90 px-5 py-3 text-sm font-medium text-[#FCFBF8] shadow-[0_10px_30px_rgba(23,23,23,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-[#9A7B4F] hover:bg-[#171717] hover:shadow-[0_15px_35px_rgba(154,123,79,0.3)] hover:-translate-y-1"
      >
        {/* Glow effect behind pill */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#9A7B4F] to-[#C2AB8A] opacity-30 blur-md transition duration-300 group-hover:opacity-75" />

        <div className="relative flex items-center gap-2.5 z-10">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#9A7B4F] text-[#FCFBF8] transition-transform duration-300 group-hover:scale-110">
            <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
          </span>
          <span className="font-semibold tracking-wide text-xs md:text-sm">Download CV</span>
          <Sparkles size={14} className="text-[#C2AB8A] animate-pulse" />
        </div>
      </a>
    </motion.div>
  );
};

export default FloatingDownloadCv;

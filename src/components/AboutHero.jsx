import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, MapPin, Award, Rocket, CheckCircle2 } from 'lucide-react';
import { personalInfo, heroStats } from '../data/content';

const AboutHero = ({ activeTab, setActiveTab }) => {
  return (
    <div className="relative w-full text-[#171717]">
      {/* Top Tag & Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4 mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/25">
          <Sparkles className="w-3.5 h-3.5 text-[#B8893D]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B8893D]">
            Developer Profile & Ecosystem
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open for Summer 2026 Internships & AI Projects</span>
        </div>
      </motion.div>

      {/* Hero Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-display font-extrabold text-[#171717] tracking-tight leading-tight">
          Architecting <span className="italic font-normal text-[#B8893D]">Backend Systems</span> & <span className="underline decoration-[#B8893D]/40 decoration-wavy underline-offset-8">Generative AI</span> Solutions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#6B6B6B] max-w-3xl leading-relaxed font-sans">
          I'm <strong className="text-[#171717] font-semibold">{personalInfo.name}</strong>, a Computer Science student with practical experience building scalable Node.js/Express APIs, MongoDB architectures, and prompt-engineered LLM applications. Driven by curiosity, precise logic, and clean code.
        </p>
      </motion.div>

      {/* Quick Stats Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
      >
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:border-[#B8893D]/40 hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8A8A8A]">Academic</span>
            <Award className="w-4 h-4 text-[#B8893D] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#171717]">8.15</div>
          <div className="text-xs text-[#6B6B6B] mt-0.5">CGPA (till 4th Sem)</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:border-[#B8893D]/40 hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8A8A8A]">Experience</span>
            <Rocket className="w-4 h-4 text-[#B8893D] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#171717]">Touchmark</div>
          <div className="text-xs text-[#6B6B6B] mt-0.5">Backend Developer Intern</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:border-[#B8893D]/40 hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8A8A8A]">Projects</span>
            <Cpu className="w-4 h-4 text-[#B8893D] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#171717]">04+</div>
          <div className="text-xs text-[#6B6B6B] mt-0.5">Full-Stack & AI Systems</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:border-[#B8893D]/40 hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8A8A8A]">Specialization</span>
            <CheckCircle2 className="w-4 h-4 text-[#B8893D] group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#171717]">Gen AI</div>
          <div className="text-xs text-[#6B6B6B] mt-0.5">AICTE & Infosys Certified</div>
        </div>
      </motion.div>

      {/* Interactive Mode Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center sm:justify-start gap-2 p-1.5 rounded-2xl bg-white border border-[#ECE7DE] shadow-xs max-w-max"
      >
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
            activeTab === 'overview'
              ? 'bg-[#171717] text-white shadow-sm'
              : 'text-[#6B6B6B] hover:text-[#171717] hover:bg-[#FCFBF8]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B8893D]" />
          <span>Full Visual Experience</span>
        </button>

        <button
          onClick={() => setActiveTab('terminal')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
            activeTab === 'terminal'
              ? 'bg-[#171717] text-white shadow-sm'
              : 'text-[#6B6B6B] hover:text-[#171717] hover:bg-[#FCFBF8]'
          }`}
        >
          <Terminal className="w-3.5 h-3.5 text-[#B8893D]" />
          <span>Developer CLI Sandbox</span>
        </button>
      </motion.div>
    </div>
  );
};

export default AboutHero;

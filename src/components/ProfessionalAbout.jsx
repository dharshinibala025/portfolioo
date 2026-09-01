import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { personalInfo, internship } from '../data/content';

const ProfessionalAbout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative w-full text-[#171717]">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8893D]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8893D]">
            Professional Overview
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#171717] tracking-tight mb-4">
          Driven by Curiosity, Defined by Code
        </h2>

        <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
          Computer Science student passionate about backend software engineering, Generative AI, machine learning, and building scalable real-world solutions.
        </p>
      </motion.div>

      {/* Main Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Column: Bio, Internship & Pillars (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Bio Box */}
          <motion.div 
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8893D]/5 rounded-bl-full pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#171717] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#B8893D]" />
              <span>About Me</span>
            </h3>

            <p className="text-[#6B6B6B] leading-relaxed mb-6 font-sans text-base">
              {personalInfo.objective}
            </p>

            {/* Quote / Highlight */}
            <div className="p-4 rounded-xl bg-[#FCFBF8] border-l-4 border-[#B8893D] text-sm sm:text-base text-[#171717] italic font-medium">
              "Applying technical skills and creativity to build intelligent, real-world solutions while continuously learning."
            </div>
          </motion.div>

          {/* New Dedicated Internship Feature Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-[#FCFBF8] to-[#F6F2EA] border border-[#ECE7DE] shadow-sm relative"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#B8893D]" />
                <h3 className="text-xl font-serif-display font-semibold text-[#171717]">
                  Industry Experience
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#B8893D]/10 text-[#B8893D] border border-[#B8893D]/20">
                {internship.role}
              </span>
            </div>

            <div className="mb-3">
              <h4 className="text-lg font-bold text-[#171717]">{internship.company}</h4>
              <p className="text-xs text-[#8A8A8A]">{internship.duration}</p>
            </div>

            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
              {internship.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#ECE7DE]">
              {internship.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8893D] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Academic Snapshot (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Academic Snapshot Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm relative"
          >
            <h3 className="text-xl font-serif-display font-semibold text-[#171717] mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#B8893D]" />
              <span>Academic Snapshot</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFBF8]">
                <GraduationCap className="w-4 h-4 text-[#B8893D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider block">Degree & College</span>
                  <span className="font-medium text-[#171717]">B.E. Computer Science & Eng.</span>
                  <span className="text-xs text-[#6B6B6B] block">K.S.R. College of Engineering (2024 - 2028)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFBF8]">
                <Award className="w-4 h-4 text-[#B8893D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider block">Academic Performance</span>
                  <span className="font-semibold text-[#B8893D] text-base">CGPA 8.15</span>
                  <span className="text-xs text-[#6B6B6B] block">till 4th Semester</span>
                  <div className="mt-2 pt-2 border-t border-[#ECE7DE] text-xs text-[#6B6B6B] space-y-0.5">
                    <div>• HSC (12th): <strong>8.35 / 83.5%</strong> (SVM Hr.Sec)</div>
                    <div>• SSLC (10th): <strong>8.34 / 83.4%</strong> (VBMMS)</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFBF8]">
                <Briefcase className="w-4 h-4 text-[#B8893D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider block">Status</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700 text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Internships & Projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalAbout;


import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  BrainCircuit, 
  Rocket, 
  MapPin, 
  Mail, 
  Briefcase, 
  Award, 
  Sparkles,
  BookOpen,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/content';

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

  const pillars = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building clean, responsive web applications using React, JavaScript, HTML/CSS, Tailwind, and backend integrations with Java & Node.js.',
    },
    {
      icon: BrainCircuit,
      title: 'AI & Generative AI Focus',
      description: 'Exploring LLM integrations, Python Streamlit applications (such as Krishi Sakhi), and machine learning concepts to build smart solutions.',
    },
    {
      icon: Cpu,
      title: 'Core Software Engineering',
      description: 'Solid foundation in Data Structures, Algorithms, and Object-Oriented Programming using C, C++, Java, and Python.',
    },
    {
      icon: Rocket,
      title: 'Research & Innovation',
      description: 'Actively participating in technical paper presentations (PSG Tech Yuktha), workshops, and pursuing software engineering research internships.',
    },
  ];

  const highlights = [
    { label: 'Infosys Springboard', sub: 'Software Engineering & Web Development' },
    { label: 'VIT Vellore Workshop', sub: 'Large Language Models in GenAI' },
    { label: 'HP Foundation Certified', sub: 'AI for Beginners' },
    { label: 'Paper Presentation', sub: 'Yuktha Symposium at PSG Tech' },
  ];

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
          Computer Science student passionate about software engineering, artificial intelligence, and crafting human-centered digital experiences.
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
        {/* Left Column: Bio & Pillars (7 Cols) */}
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
              I am currently pursuing my B.E. in Computer Science & Engineering at K.S.R. College of Engineering, Thiruchengode. My academic journey is powered by a strong enthusiasm for building scalable software, diving into AI-driven tools, and solving complex problems with elegant code.
            </p>

            {/* Quote / Highlight */}
            <div className="p-4 rounded-xl bg-[#FCFBF8] border-l-4 border-[#B8893D] text-sm sm:text-base text-[#171717] italic font-medium">
              "Building human-centered AI software with clean code, intuitive design, and continuous learning."
            </div>
          </motion.div>

          {/* Competency Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:border-[#B8893D]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#B8893D]/10 text-[#B8893D] flex items-center justify-center mb-3 group-hover:bg-[#B8893D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-[#171717] text-lg mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Quick Profile Info & Highlights (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Stats & Info Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm relative"
          >
            <h3 className="text-xl font-serif-display font-semibold text-[#171717] mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#B8893D]" />
              <span>Academic & Info Snapshot</span>
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
                  <span className="text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider block">Academic Score</span>
                  <span className="font-semibold text-[#B8893D] text-base">CGPA 8.16</span>
                  <span className="text-xs text-[#6B6B6B] block">till 2nd Semester</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFBF8]">
                <MapPin className="w-4 h-4 text-[#B8893D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider block">Location</span>
                  <span className="font-medium text-[#171717]">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FCFBF8]">
                <Mail className="w-4 h-4 text-[#B8893D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider block">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium text-[#171717] hover:text-[#B8893D] transition-colors break-all">
                    {personalInfo.email}
                  </a>
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

          {/* Key Achievements Card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm"
          >
            <h3 className="text-lg font-serif-display font-semibold text-[#171717] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#B8893D]" />
              <span>Key Certifications & Recognition</span>
            </h3>

            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8893D] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#171717] leading-tight">
                      {item.label}
                    </p>
                    <p className="text-xs text-[#6B6B6B]">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalAbout;

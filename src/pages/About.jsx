import { motion } from 'framer-motion';
import { hobbies, funFacts } from '../data/content';
import ProfessionalAbout from '../components/ProfessionalAbout';
import { Sparkles, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full space-y-16 py-6">
      {/* 1. Primary Professional Overview */}
      <ProfessionalAbout />

      {/* 2. Beyond the Code / Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pt-10 border-t border-[#ECE7DE]"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/20 mb-3">
            <Heart className="w-3.5 h-3.5 text-[#B8893D]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B8893D]">
              Beyond the Code
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-[#171717]">
            Interests & Passions
          </h3>
          <p className="text-sm sm:text-base text-[#6B6B6B] mt-2 max-w-lg mx-auto leading-relaxed">
            What keeps me inspired, creative, and balanced outside of software development.
          </p>
        </div>

        {/* Clean Hobbies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:border-[#B8893D]/40 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-13 h-13 rounded-xl bg-[#B8893D]/10 text-[#B8893D] flex items-center justify-center mb-3.5 group-hover:bg-[#B8893D] group-hover:text-white transition-colors duration-300">
                  <Icon className="text-2xl" />
                </div>
                <h4 className="font-semibold text-[#171717] text-base mb-1">
                  {hobby.name}
                </h4>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 3. Personal Insights & Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-10 rounded-3xl bg-white border border-[#ECE7DE] shadow-sm"
      >
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-5 h-5 text-[#B8893D]" />
          <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-[#171717]">
            Personal Insights & Fun Facts
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#FCFBF8] border border-[#ECE7DE] hover:border-[#B8893D]/30 transition-colors"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B8893D]/10 text-[#B8893D] font-bold text-xs mt-0.5">
                0{index + 1}
              </span>
              <p className="text-sm sm:text-base text-[#171717] leading-relaxed">
                {fact}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;

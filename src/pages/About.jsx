import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutHero from '../components/AboutHero';
import InteractiveTerminal from '../components/InteractiveTerminal';
import InteractiveTimeline from '../components/InteractiveTimeline';
import EngineeringPillars from '../components/EngineeringPillars';
import BeyondTheCode from '../components/BeyondTheCode';
import { ArrowRight, Mail, FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'terminal'

  return (
    <div className="w-full space-y-12 py-6">
      {/* 1. Hero & Mode Filter Bar */}
      <AboutHero activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Main Content View Switcher */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            {/* Core Engineering Pillars */}
            <EngineeringPillars />

            {/* Interactive Timeline */}
            <div className="pt-8 border-t border-[#ECE7DE]">
              <InteractiveTimeline />
            </div>

            {/* Beyond the Code */}
            <div className="pt-8 border-t border-[#ECE7DE]">
              <BeyondTheCode />
            </div>

            {/* Interactive Call to Action Footer Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#171717] via-[#22242A] to-[#171717] text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8893D]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="text-left space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8893D]/20 text-[#E2B76D] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Let's Build Something Intelligent</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-white">
                  Ready to collaborate on Backend & Gen AI projects?
                </h3>
                <p className="text-xs sm:text-sm text-[#A6ABB9] leading-relaxed">
                  Whether you have an internship role, an AI project, or technical questions, I'm excited to connect.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-2xl bg-[#B8893D] hover:bg-[#C89849] text-black font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-2xl bg-[#292B33] hover:bg-[#343742] text-white font-semibold text-sm border border-[#3E4250] transition duration-300 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#B8893D]" />
                  <span>Explore Projects</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-[#FCFBF8] border border-[#ECE7DE] text-left">
              <h4 className="font-serif-display font-bold text-lg text-[#171717]">
                Developer Command-Line Interface (CLI) Mode
              </h4>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                Interact with Dharshini's profile programmatically! Click quick commands below or type in the CLI prompt to inspect JSON structures.
              </p>
            </div>

            <InteractiveTerminal />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;

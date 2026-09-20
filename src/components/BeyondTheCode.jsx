import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, BookOpen, Compass, Lightbulb, Quote, ChevronRight } from 'lucide-react';
import { hobbies, funFacts } from '../data/content';

const BeyondTheCode = () => {
  const [activeHobby, setActiveHobby] = useState(hobbies[0].name);

  const activeHobbyData = hobbies.find((h) => h.name === activeHobby) || hobbies[0];

  return (
    <div className="w-full text-left my-12 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/20 mb-3">
          <Heart className="w-3.5 h-3.5 text-[#B8893D]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B8893D]">
            Life Outside Software
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#171717]">
          Interests, Passions & Insights
        </h3>
        <p className="text-sm sm:text-base text-[#6B6B6B] mt-2 leading-relaxed">
          What keeps me inspired, creative, balanced, and sharp outside of compiler logs.
        </p>
      </div>

      {/* Grid: Left Hobbies Showcase (6 cols) & Right Insights Flip Cards (6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Hobbies Card Deck */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#ECE7DE] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-5 h-5 text-[#B8893D]" />
              <h4 className="text-xl font-serif-display font-bold text-[#171717]">
                Personal Hobbies & Creative Pursuits
              </h4>
            </div>

            {/* Hobbies Selector Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {hobbies.map((hobby) => {
                const Icon = hobby.icon;
                const isSelected = hobby.name === activeHobby;

                return (
                  <button
                    key={hobby.name}
                    onClick={() => setActiveHobby(hobby.name)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#171717] text-white shadow-sm ring-2 ring-[#B8893D]/30'
                        : 'bg-[#FCFBF8] border border-[#ECE7DE] text-[#6B6B6B] hover:text-[#171717] hover:border-[#B8893D]/30'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#B8893D]' : ''}`} />
                    <span>{hobby.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Hobby Detail View */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHobbyData.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#ECE7DE] relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B8893D]/10 text-[#B8893D] flex items-center justify-center">
                    {(() => {
                      const Icon = activeHobbyData.icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#171717] text-base">{activeHobbyData.name}</h5>
                    <p className="text-xs text-[#8A8A8A]">Inspiration & Creative Outlet</p>
                  </div>
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {activeHobbyData.description}. Engaging in {activeHobbyData.name.toLowerCase()} enhances my analytical problem-solving skills, keeps my perspective fresh, and feeds creative thinking into my software projects.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 pt-4 border-t border-[#ECE7DE] flex items-center justify-between text-xs text-[#8A8A8A]">
            <span>Click any hobby to view inspiration</span>
            <span className="font-semibold text-[#B8893D]">5 Passions</span>
          </div>
        </div>

        {/* Fun Facts & Personal Insights */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#ECE7DE] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B8893D]" />
                <h4 className="text-xl font-serif-display font-bold text-[#171717]">
                  Personal Insights & Facts
                </h4>
              </div>
              <Quote className="w-5 h-5 text-[#B8893D]/30" />
            </div>

            {/* List of Insights */}
            <div className="space-y-3">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#FCFBF8] border border-[#ECE7DE] hover:border-[#B8893D]/40 transition-colors group"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B8893D]/10 text-[#B8893D] font-bold text-xs mt-0.5 group-hover:bg-[#B8893D] group-hover:text-white transition-colors">
                    0{index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#171717] font-medium leading-relaxed">
                    {fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#ECE7DE] flex items-center justify-between text-xs text-[#8A8A8A]">
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <Lightbulb className="w-3.5 h-3.5 text-emerald-500" />
              Always Curious & Learning
            </span>
            <span className="text-[#8A8A8A]">Salem, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeyondTheCode;

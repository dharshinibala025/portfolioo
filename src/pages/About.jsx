import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { personalInfo, skills, journeyMoments, hobbies, funFacts } from '../data/content';


const highlightCards = [
  { label: 'Current Focus', value: 'Generative AI explorations' },
  { label: 'Strength', value: 'Positive minded' },
  { label: 'Mindset', value: 'Curiosity' },
];

const About = () => {
  const [clickedBox, setClickedBox] = useState(null);
  const [visibleCount, setVisibleCount] = useState(1);

  return (
    <section>
      <PageHeader
        eyebrow="Who am i"
        title="I build digital experiences with clarity, purpose, and simplicity."
      />
      <div className="grid gap-10 lg:grid-cols-1">
        <motion.div
          onClick={() => setClickedBox(clickedBox === 'bio' ? null : 'bio')}
          className="space-y-6 rounded-3xl border border-white/10 bg-black/30 p-8 cursor-pointer transition-all duration-300"
          style={{
            borderColor: clickedBox === 'bio' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: clickedBox === 'bio'
              ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)'
              : 'none',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: clickedBox === 'bio' ? [0, 1, 0.6] : 0,
              scale: clickedBox === 'bio' ? [0.8, 1.1, 1] : 0.8,
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative z-10">

            <h3 className="font-display text-2xl text-white">Bio</h3>
            <p className="text-muted text-lg leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlightCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 300 }}
                  className="rounded-2xl border border-white/5 bg-white/5 p-6 cursor-default"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">{card.label}</p>
                  <p className="mt-2 text-white">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <div className="mt-16">
        <motion.div
          onClick={() => setClickedBox(clickedBox === 'timeline-box' ? null : 'timeline-box')}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-6 cursor-pointer transition-all duration-300"
          style={{
            borderColor: clickedBox === 'timeline-box' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: clickedBox === 'timeline-box'
              ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)'
              : 'none',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: clickedBox === 'timeline-box' ? [0, 1, 0.6] : 0,
              scale: clickedBox === 'timeline-box' ? [0.8, 1.1, 1] : 0.8,
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Career timeline</p>
            <h3 className="mb-4 font-display text-2xl text-white">Education</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-accent-400 via-accent-500 to-transparent" />
              <div className="space-y-6 pl-12">
                {journeyMoments.map((moment, idx) => (
                  <div key={moment.year} className="relative">
                    <motion.div
                      className="absolute -left-10 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-purple-900 shadow-glow"
                      animate={{ y: [0, idx % 2 === 0 ? -6 : 6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
                    >
                      <span className="text-lg">🧸</span>
                    </motion.div>
                    <motion.div
                      onClick={(e) => {
                        e.stopPropagation();
                        setClickedBox(clickedBox === `moment-${moment.year}` ? null : `moment-${moment.year}`);
                      }}
                      className="rounded-2xl border border-white/5 bg-black/40 p-4 cursor-pointer transition-all duration-300"
                      style={{
                        borderColor: clickedBox === `moment-${moment.year}` ? 'rgba(196, 31, 216, 0.6)' : 'rgba(255, 255, 255, 0.05)',
                        boxShadow: clickedBox === `moment-${moment.year}`
                          ? '0 0 20px rgba(196, 31, 216, 0.4)'
                          : 'none',
                      }}
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-accent-200">{moment.year}</p>
                      <p className="font-semibold text-white">{moment.title}</p>
                      <p className="text-sm text-muted">{moment.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interests Section */}
      <div className="mt-20">
        <h3 className="mb-10 font-display text-3xl text-white text-center">Interests & Hobbies</h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {hobbies.map((hobby, index) => (
            <div key={hobby.name} className="group h-48 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center [backface-visibility:hidden]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                    <hobby.icon className="text-xl" />
                  </div>
                  <h4 className="mb-1 font-semibold text-white">{hobby.name}</h4>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-accent-500/30 bg-accent-900/90 p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm text-white">{hobby.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="mt-20 mb-10">
        <h3 className="mb-10 font-display text-3xl text-white text-center">Fun Facts</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm hover:border-accent-400/30"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white font-bold text-sm">
                {index + 1}
              </span>
              <p className="text-white/90">{fact}</p>
            </motion.div>
          ))}
        </div>
      </div>


    </section >
  );
};

export default About;


import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { personalInfo, skills, journeyMoments, hobbies, funFacts } from '../data/content';

const highlightCards = [
  { label: 'Current Focus', value: 'Generative AI explorations' },
  { label: 'Strength', value: 'Full-stack experimentation' },
  { label: 'Mindset', value: 'Curiosity + momentum' },
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
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
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
              I’m {personalInfo.fullName}, a Computer Science student at {personalInfo.college}. I am fascinated by how
              interfaces can feel alive through micro-animations, storytelling, and thoughtful engineering. I’m equally at
              home prototyping front-end interactions, playing with GenAI APIs, or building the APIs that fuel them.
            </p>
            <p className="text-muted">
              Beyond code, I document learnings, run design jams with friends, volunteer for community demos, and actively
              seek mentorship that challenges my perspective.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlightCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">{card.label}</p>
                  <p className="mt-2 text-white">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="space-y-6">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setClickedBox(clickedBox === 'values' ? null : 'values')}
            className="relative rounded-3xl border border-white/10 bg-black/30 p-6 cursor-pointer transition-all duration-300"
            style={{
              borderColor: clickedBox === 'values' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
              boxShadow: clickedBox === 'values'
                ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)'
                : 'none',
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: clickedBox === 'values' ? [0, 1, 0.6] : 0,
                scale: clickedBox === 'values' ? [0.8, 1.1, 1] : 0.8,
              }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-10">
              <h3 className="font-display text-xl text-white">Values I live by</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">
                <li>Lead with empathy and clarity in every collaboration.</li>
                <li>Prototype brave ideas, even if they feel slightly impossible.</li>
                <li>Keep the user story at the center of each technical decision.</li>
              </ul>
            </div>
          </motion.div>
        </div>
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
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10 hover:border-accent-400/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/20 text-accent-300 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <hobby.icon className="text-xl" />
              </div>
              <h4 className="mb-1 font-semibold text-white">{hobby.name}</h4>
              <p className="text-xs text-muted group-hover:text-white/80">{hobby.description}</p>
            </motion.div>
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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


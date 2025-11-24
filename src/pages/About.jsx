import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { personalInfo, skills } from '../data/content';

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
        eyebrow="About"
        title="The person behind the purple glow"
        description={personalInfo.about}
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setClickedBox(clickedBox === 'snapshot' ? null : 'snapshot')}
            className="relative rounded-3xl border border-white/10 bg-black/30 p-6 cursor-pointer transition-all duration-300"
            style={{
              borderColor: clickedBox === 'snapshot' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
              boxShadow: clickedBox === 'snapshot'
                ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)'
                : 'none',
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: clickedBox === 'snapshot' ? [0, 1, 0.6] : 0,
                scale: clickedBox === 'snapshot' ? [0.8, 1.1, 1] : 0.8,
              }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative z-10">
              <h3 className="font-display text-xl text-white">Snapshot</h3>
              <dl className="mt-4 space-y-3 text-sm text-muted">
                <div className="flex justify-between">
                  <dt>Date of Birth</dt>
                  <dd className="text-white">{personalInfo.dob}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Location</dt>
                  <dd className="text-white">{personalInfo.location}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>College</dt>
                  <dd className="text-white">{personalInfo.college}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Technologies</dt>
                  <dd className="text-white">{personalInfo.technologies.join(', ')}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
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
        <h3 className="mb-8 font-display text-2xl text-white">Technical Arsenal <span className="text-sm text-muted font-sans font-normal ml-4">(Click the last skill to reveal the next)</span></h3>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {skills.slice(0, visibleCount).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                default: { duration: 0.4 }
              }}
              whileHover={{ scale: 1.1, rotate: 5, filter: "brightness(1.2)" }}
              onClick={() => {
                if (index === visibleCount - 1 && visibleCount < skills.length) {
                  setVisibleCount(prev => prev + 1);
                }
              }}
              className={`group relative flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-accent-400/50 hover:bg-white/10 ${index === visibleCount - 1 && visibleCount < skills.length ? 'animate-pulse ring-1 ring-accent-400/50' : ''
                }`}
            >
              <skill.icon className="text-4xl text-accent-300 transition-colors group-hover:text-accent-100" />
              <span className="absolute -bottom-8 opacity-0 transition-opacity group-hover:opacity-100 text-xs text-accent-200 font-medium tracking-wider">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default About;


import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { personalInfo } from '../data/content';

const highlightCards = [
  { label: 'Current Focus', value: 'Generative AI explorations' },
  { label: 'Strength', value: 'Full-stack experimentation' },
  { label: 'Mindset', value: 'Curiosity + momentum' },
];

const About = () => {
  const [clickedBox, setClickedBox] = useState(null);

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
  </section>
  );
};

export default About;


import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.png';

// Areas of Interest Data (Section 5)
const areasOfInterest = [
  {
    id: '01',
    title: 'Artificial Intelligence',
    description: 'Understanding intelligent systems and exploring practical AI applications.',
    tag: 'Intelligence Systems',
  },
  {
    id: '02',
    title: 'Machine Learning',
    description: 'Learning algorithms, concepts, and how machines identify patterns from data.',
    tag: 'Data & Patterns',
  },
  {
    id: '03',
    title: 'Generative AI & Prompt Engineering',
    description:
      'Experimenting with generative AI tools and learning how effective prompting can create useful solutions.',
    tag: 'Modern Workflows',
  },
  {
    id: '04',
    title: 'Full-Stack Development',
    description:
      'Building complete web applications while exploring frontend, backend, and database technologies.',
    tag: 'End-to-End Craft',
  },
];

// Currently Learning Stages (Section 6)
const learningStages = [
  {
    index: '01',
    title: 'Strengthening programming fundamentals',
    detail:
      'Mastering clean architectural principles, core language semantics, and building a resilient technical foundation.',
  },
  {
    index: '02',
    title: 'Practising Data Structures and Algorithms',
    detail:
      'Sharpening computational problem-solving, optimizing space-time complexity, and writing elegant, robust logic.',
  },
  {
    index: '03',
    title: 'Exploring Machine Learning and Generative AI',
    detail:
      'Demystifying neural architectures, foundational models, API integrations, and systematic prompt design.',
  },
  {
    index: '04',
    title: 'Improving full-stack development skills',
    detail:
      'Architecting resilient RESTful APIs, modern reactive user interfaces, and seamless database interactions.',
  },
  {
    index: '05',
    title: 'Experimenting with new technologies and building practical projects',
    detail:
      'Transforming conceptual ideas into deployed, tangible applications that solve real-world problems.',
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  // ---------------------------------------------------------------------------
  // Parallax for Profile Photo (Section 3)
  // ---------------------------------------------------------------------------
  const photoContainerRef = useRef(null);
  const { scrollYProgress: photoProgress } = useScroll({
    target: photoContainerRef,
    offset: ['start end', 'end start'],
  });
  const photoParallax = useTransform(
    photoProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-18, 18]
  );

  // ---------------------------------------------------------------------------
  // Pinned Storytelling Scroll Progress (Section 6)
  // ---------------------------------------------------------------------------
  const pinnedSectionRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress: pinnedProgress } = useScroll({
    target: pinnedSectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(pinnedProgress, 'change', (latest) => {
    // 5 stages mapped across 0 to 1
    const stageIndex = Math.min(
      learningStages.length - 1,
      Math.max(0, Math.floor(latest * learningStages.length))
    );
    setActiveStage(stageIndex);
  });

  // Smooth scroll handler for transition to skills (Section 9)
  const handleScrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#skills';
    }
  };

  // Reusable slow reveal animation preset
  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <article className="w-full text-[#171717] bg-[#FCFBF8] selection:bg-[#9A7B4F]/15 selection:text-[#171717]">
      {/* ===================================================================== */}
      {/* 2. OPENING – A LITTLE ABOUT ME                                        */}
      {/* ===================================================================== */}
      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#ECE7DE]">
        <motion.div {...fadeInUp} className="max-w-4xl space-y-6 text-left">
          {/* Section label with minimal champagne-gold line */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F] font-sans">
              01 — ABOUT ME
            </span>
            <div className="h-[1px] w-12 bg-[#9A7B4F]/60" />
          </div>

          {/* Large Editorial Heading */}
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#171717] leading-[1.08] tracking-tight">
            More Than Just a Developer.
          </h1>

          {/* Subtext Paragraph */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#6B6B6B] leading-relaxed font-normal max-w-3xl pt-2">
            I'm <span className="text-[#171717] font-medium">Dharshini Balasubramaniam</span>, a
            Computer Science and Engineering student who enjoys exploring technology, experimenting
            with ideas, and creating meaningful digital experiences.
          </p>
        </motion.div>
      </section>

      {/* ===================================================================== */}
      {/* 3. PERSONAL INTRODUCTION – WHO I AM (SPLIT-SCREEN)                    */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#ECE7DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Professional Photograph with Parallax */}
          <div ref={photoContainerRef} className="lg:col-span-5 relative flex justify-center">
            {/* Ambient champagne glow behind the frame */}
            <div className="absolute inset-0 bg-[#9A7B4F]/10 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            <motion.div
              style={{ y: photoParallax }}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] rounded-3xl p-3 bg-white border border-[#ECE7DE] shadow-[0_12px_40px_rgba(23,23,23,0.06)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#ECE7DE]/50">
                <img
                  src={profileImg}
                  alt="Dharshini Balasubramaniam"
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter grayscale-[15%] contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Minimal caption plate */}
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-[#6B6B6B]">
                <span className="font-serif-display font-medium text-[#171717]">Dharshini B.</span>
                <span className="tracking-widest uppercase text-[10px] text-[#9A7B4F] font-semibold">
                  CSE Student
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Natural Paragraph Reveals */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
                PERSPECTIVE
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] leading-tight">
                Curious Mind. Purposeful Code.
              </h2>
            </motion.div>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-[#3A3A3A] leading-relaxed font-normal"
            >
              I'm currently pursuing Computer Science and Engineering at{' '}
              <span className="text-[#171717] font-semibold border-b border-[#9A7B4F]/40 pb-0.5">
                K.S.R. College of Engineering
              </span>
              .
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[#3A3A3A] leading-relaxed font-normal"
            >
              I have a strong interest in emerging technologies, particularly{' '}
              <span className="text-[#171717] font-semibold">Artificial Intelligence</span>,{' '}
              <span className="text-[#171717] font-semibold">Machine Learning</span>,{' '}
              <span className="text-[#171717] font-semibold">Generative AI</span>, and{' '}
              <span className="text-[#171717] font-semibold">Prompt Engineering</span>.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-[#6B6B6B] leading-relaxed font-normal"
            >
              I enjoy learning how things work, experimenting with new technologies, and turning
              ideas into practical solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. EDUCATION – MY ACADEMIC JOURNEY                                    */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#ECE7DE]">
        <div className="max-w-4xl mx-auto text-left space-y-12">
          {/* Header */}
          <motion.div {...fadeInUp} className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
              02 — ACADEMIC FOUNDATION
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717]">
              Where My Journey Begins
            </h2>
          </motion.div>

          {/* Vertical Editorial Timeline */}
          <div className="relative pl-6 sm:pl-10">
            {/* Vertical timeline line with subtle gold gradient */}
            <div className="absolute left-0 top-3 bottom-3 w-[1.5px] bg-gradient-to-b from-[#9A7B4F] via-[#C2AB8A] to-[#ECE7DE]" />

            {/* Timeline Item */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="relative space-y-6"
            >
              {/* Animated Progress Node */}
              <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9A7B4F] opacity-40" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FCFBF8] border-2 border-[#9A7B4F]" />
                </span>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A7B4F]/10 border border-[#9A7B4F]/25 text-[#9A7B4F] text-xs font-semibold tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9A7B4F]" />
                Undergraduate Student
              </div>

              {/* Institution & Department Details */}
              <div className="space-y-2">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#171717]">
                  K.S.R. College of Engineering
                </h3>
                <p className="text-base sm:text-lg text-[#9A7B4F] font-medium font-sans">
                  Department of Computer Science and Engineering
                </p>
              </div>

              {/* Minimal Context Note */}
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-2xl font-normal">
                Focusing on core computing fundamentals, algorithmic problem solving, modern software
                architectures, and exploring intelligent systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. MY AREAS OF INTEREST                                              */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#ECE7DE]">
        <div className="space-y-12 text-left">
          {/* Header */}
          <motion.div {...fadeInUp} className="space-y-3 max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
              03 — AREAS OF PASSION
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717]">
              Technology That Inspires Me.
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B] pt-1">
              The technical domains driving my daily curiosity, ongoing study, and experimental work.
            </p>
          </motion.div>

          {/* Interactive Editorial Row-Based Layout (No Conventional Grid Cards) */}
          <div className="divide-y divide-[#ECE7DE] border-y border-[#ECE7DE]">
            {areasOfInterest.map((interest, index) => (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group py-8 sm:py-10 transition-colors duration-300 hover:bg-white/60 px-2 sm:px-4 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  {/* Row Index & Tag */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#9A7B4F]">
                      {interest.id}
                    </span>
                    <span className="h-[1px] w-6 bg-[#ECE7DE] group-hover:bg-[#9A7B4F] transition-colors duration-300" />
                    <span className="text-[11px] font-medium tracking-wider uppercase text-[#6B6B6B] group-hover:text-[#9A7B4F] transition-colors duration-300">
                      {interest.tag}
                    </span>
                  </div>

                  {/* Title with Champagne Gold Hover Accent */}
                  <div className="md:col-span-5">
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#171717] group-hover:text-[#9A7B4F] transition-colors duration-300 flex items-center justify-between gap-2">
                      <span>{interest.title}</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed group-hover:text-[#3A3A3A] transition-colors duration-300">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. WHAT I'M CURRENTLY LEARNING (PINNED STORYTELLING SECTION)           */}
      {/* ===================================================================== */}
      <section
        ref={pinnedSectionRef}
        className="relative min-h-[170vh] sm:min-h-[200vh] border-b border-[#ECE7DE]"
      >
        {/* Sticky Viewport Container */}
        <div className="sticky top-20 sm:top-24 h-[calc(100vh-5rem)] flex items-center py-6 sm:py-8 overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column: Pinned Heading & Progress Indicator */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
                  04 — ACTIVE FOCUS
                </span>
                <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#171717] leading-[1.15]">
                  Currently Growing, Always Exploring.
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-sm hidden sm:block">
                Continuous learning is the cornerstone of my development journey. Scroll through each
                stage of my current technical focus.
              </p>

              {/* Interactive Step Navigator */}
              <div className="flex items-center gap-2 pt-2">
                {learningStages.map((stage, idx) => (
                  <button
                    key={stage.index}
                    onClick={() => setActiveStage(idx)}
                    className="group relative py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7B4F] rounded"
                    aria-label={`Jump to stage ${stage.index}`}
                  >
                    <span
                      className={`block h-1.5 transition-all duration-300 rounded-full ${
                        activeStage === idx
                          ? 'w-10 bg-[#9A7B4F]'
                          : 'w-4 bg-[#ECE7DE] hover:bg-[#9A7B4F]/50'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-mono text-[#9A7B4F] font-semibold pl-2">
                  0{activeStage + 1} / 0{learningStages.length}
                </span>
              </div>
            </div>

            {/* Right Column: Dynamic Stage Content Revealed on Scroll */}
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[300px] flex items-center justify-start text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full space-y-5 p-6 sm:p-10 rounded-3xl bg-white border border-[#ECE7DE] shadow-[0_10px_30px_rgba(23,23,23,0.03)]"
                >
                  {/* Stage Index Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#9A7B4F] uppercase px-3 py-1 rounded-full bg-[#9A7B4F]/10">
                      STAGE {learningStages[activeStage].index}
                    </span>
                    <span className="text-xs text-[#6B6B6B] flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#9A7B4F]" />
                      Continuous Progress
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] leading-snug">
                    {learningStages[activeStage].title}.
                  </h3>

                  {/* Detail */}
                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed font-normal pt-1">
                    {learningStages[activeStage].detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. BEYOND THE CODE – MY APPROACH                                      */}
      {/* ===================================================================== */}
      <section className="py-24 sm:py-32 border-b border-[#ECE7DE] relative overflow-hidden">
        {/* Subtle decorative background movement */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9A7B4F]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          {...fadeInUp}
          className="relative max-w-4xl mx-auto text-center space-y-8 px-4"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
            MY PHILOSOPHY
          </span>

          {/* Meaningful Statement */}
          <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-medium text-[#171717] leading-[1.25] tracking-tight">
            “I believe progress comes from{' '}
            <span className="text-[#9A7B4F] italic">curiosity</span>,{' '}
            <span className="text-[#9A7B4F] italic">consistency</span>, and the willingness to try
            something new.”
          </blockquote>

          {/* Short paragraph */}
          <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto font-normal">
            Every project teaches me something different. I see challenges as opportunities to
            improve, explore unfamiliar concepts, and become a better problem solver.
          </p>
        </motion.div>
      </section>

      {/* ===================================================================== */}
      {/* 8. FUTURE VISION                                                     */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#ECE7DE]">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-left space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
            05 — FUTURE VISION
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717]">
            Where I Want to Go.
          </h2>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ECE7DE] space-y-5 shadow-[0_8px_30px_rgba(23,23,23,0.02)]">
            <p className="font-serif-display text-xl sm:text-2xl text-[#171717] leading-relaxed font-medium">
              I'm working towards becoming a skilled technology professional, with a deeper
              understanding of Artificial Intelligence and the ability to build impactful software
              solutions.
            </p>

            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed font-normal border-t border-[#ECE7DE] pt-5">
              My goal is to keep learning, gain practical experience, and contribute to meaningful
              projects.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===================================================================== */}
      {/* 9. TRANSITION TO SKILLS PAGE                                          */}
      {/* ===================================================================== */}
      <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 text-center">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto space-y-6">
          <p className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-medium text-[#171717] tracking-tight">
            Every journey is built one skill at a time.
          </p>

          <div className="pt-2">
            <a
              href="#skills"
              onClick={handleScrollToSkills}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#171717] hover:bg-[#9A7B4F] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7B4F]"
            >
              <span>Explore My Skills</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>
    </article>
  );
};

export default About;

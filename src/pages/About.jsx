import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Cpu, Brain, Layers } from 'lucide-react';
import profileImg from '../assets/profile.png';

// Areas of Interest Data (Section 4)
const areasOfInterest = [
  {
    id: '01',
    title: 'Artificial Intelligence',
    description: 'Understanding intelligent systems and exploring practical AI applications.',
    icon: Brain,
    tag: 'Intelligence Systems',
  },
  {
    id: '02',
    title: 'Machine Learning',
    description: 'Learning algorithms, concepts, and how machines identify patterns from data.',
    icon: Cpu,
    tag: 'Data & Patterns',
  },
  {
    id: '03',
    title: 'Generative AI & Prompt Engineering',
    description:
      'Experimenting with generative AI tools and learning how effective prompting can create useful solutions.',
    icon: Sparkles,
    tag: 'Modern Workflows',
  },
  {
    id: '04',
    title: 'Full-Stack Development',
    description:
      'Building complete web applications while exploring frontend, backend, and database technologies.',
    icon: Code2,
    tag: 'End-to-End Craft',
  },
];

// Currently Learning Stages (Section 5)
const learningStages = [
  {
    index: '01',
    title: 'Strengthening programming fundamentals',
    detail:
      'Mastering clean architectural principles, core language semantics, and writing maintainable code.',
  },
  {
    index: '02',
    title: 'Practising Data Structures and Algorithms',
    detail:
      'Sharpening computational problem-solving, optimizing space-time complexity, and writing robust logic.',
  },
  {
    index: '03',
    title: 'Exploring Machine Learning and Generative AI',
    detail:
      'Demystifying neural models, foundational architectures, API integrations, and prompt design.',
  },
  {
    index: '04',
    title: 'Improving full-stack development skills',
    detail:
      'Architecting resilient RESTful APIs, modern reactive user interfaces, and seamless databases.',
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

  // Gentle parallax for the portrait in the Personal Introduction section
  const photoContainerRef = useRef(null);
  const { scrollYProgress: photoProgress } = useScroll({
    target: photoContainerRef,
    offset: ['start end', 'end start'],
  });
  const photoParallax = useTransform(
    photoProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-12, 12]
  );

  // Pinned storytelling scroll progress for Currently Growing section
  const pinnedSectionRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress: pinnedProgress } = useScroll({
    target: pinnedSectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(pinnedProgress, 'change', (latest) => {
    const stageIndex = Math.min(
      learningStages.length - 1,
      Math.max(0, Math.floor(latest * learningStages.length))
    );
    setActiveStage(stageIndex);
  });

  // Smooth scroll handler for transition to skills
  const handleScrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#skills';
    }
  };

  // Standard subtle reveal animation preset
  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <article className="w-full text-[#171717] bg-[#FCFBF8] selection:bg-[#9A7B4F]/15 selection:text-[#171717]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* =================================================================== */}
        {/* 1. BALANCED TWO-COLUMN OPENING SECTION                              */}
        {/* =================================================================== */}
        <section className="pt-4 sm:pt-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column (55% on desktop): Label, Heading, Controlled Intro */}
            <motion.div {...fadeInUp} className="lg:col-span-7 space-y-5 text-left">
              {/* Section label with minimal champagne-gold line */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F] font-sans">
                  01 — ABOUT ME
                </span>
                <div className="h-[1px] w-10 bg-[#9A7B4F]/60" />
              </div>

              {/* Large Serif Heading */}
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-[#171717] leading-[1.1] tracking-tight">
                More Than Just a Developer.
              </h1>

              {/* Short Introduction Paragraph (Controlled Width) */}
              <p className="text-base sm:text-lg lg:text-xl text-[#6B6B6B] leading-relaxed font-normal max-w-xl pt-1">
                I'm <span className="text-[#171717] font-medium">Dharshini Balasubramaniam</span>, a
                Computer Science and Engineering student who enjoys exploring technology, experimenting
                with ideas, and creating meaningful digital experiences.
              </p>
            </motion.div>

            {/* Right Column (45% on desktop): Vertically Aligned Editorial Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Ambient warmth */}
              <div className="absolute inset-0 bg-[#9A7B4F]/8 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#ECE7DE] shadow-[0_8px_30px_rgba(23,23,23,0.03)] space-y-5 text-left">
                <div className="flex items-center justify-between border-b border-[#ECE7DE] pb-4">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9A7B4F]">
                    STUDIO PERSPECTIVE
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9A7B4F] opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9A7B4F]" />
                  </span>
                </div>

                <blockquote className="font-serif-display text-lg sm:text-xl font-medium text-[#171717] leading-relaxed italic">
                  “Passionate about building at the intersection of emerging AI, computational systems, and human-centered design.”
                </blockquote>

                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FCFBF8] border border-[#ECE7DE] text-[11px] font-medium text-[#6B6B6B]">
                    AI & Intelligent Systems
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFBF8] border border-[#ECE7DE] text-[11px] font-medium text-[#6B6B6B]">
                    Prompt Engineering
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FCFBF8] border border-[#ECE7DE] text-[11px] font-medium text-[#6B6B6B]">
                    Full-Stack Web
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE] to-transparent" />

        {/* =================================================================== */}
        {/* 2. PERSONAL INTRODUCTION SECTION (A LITTLE ABOUT MYSELF)           */}
        {/* =================================================================== */}
        <section className="py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side: Professional Portrait with Refined Treatment */}
            <div ref={photoContainerRef} className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-[#9A7B4F]/10 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              <motion.div
                style={{ y: photoParallax }}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-[340px] rounded-3xl p-3 bg-white border border-[#ECE7DE] shadow-[0_10px_35px_rgba(23,23,23,0.05)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#ECE7DE]/50">
                  <img
                    src={profileImg}
                    alt="Dharshini Balasubramaniam"
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter grayscale-[10%] contrast-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-[#6B6B6B]">
                  <span className="font-serif-display font-medium text-[#171717]">Dharshini B.</span>
                  <span className="tracking-widest uppercase text-[10px] text-[#9A7B4F] font-semibold">
                    CSE Undergrad
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Personal Introduction with Readable Paragraphs */}
            <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6 text-left">
              {/* Decorative Label & Gold Line */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F] font-sans">
                  A LITTLE ABOUT MYSELF
                </span>
                <div className="h-[1px] w-12 bg-[#9A7B4F]/60" />
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#171717] leading-tight">
                Curious Mind, Purposeful Code.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#3A3A3A] leading-relaxed font-normal max-w-xl">
                <p>
                  I'm currently pursuing Computer Science and Engineering at{' '}
                  <span className="text-[#171717] font-semibold border-b border-[#9A7B4F]/40 pb-0.5">
                    K.S.R. College of Engineering
                  </span>
                  .
                </p>

                <p>
                  I have a strong interest in emerging technologies, particularly{' '}
                  <span className="text-[#171717] font-semibold">Artificial Intelligence</span>,{' '}
                  <span className="text-[#171717] font-semibold">Machine Learning</span>,{' '}
                  <span className="text-[#171717] font-semibold">Generative AI</span>, and{' '}
                  <span className="text-[#171717] font-semibold">Prompt Engineering</span>.
                </p>

                <p className="text-[#6B6B6B]">
                  I enjoy learning how things work, experimenting with new technologies, and turning
                  ideas into practical solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE] to-transparent" />

        {/* =================================================================== */}
        {/* 3. EDUCATION – MY ACADEMIC JOURNEY                                  */}
        {/* =================================================================== */}
        <section className="py-8 sm:py-12">
          <div className="max-w-3xl text-left space-y-8">
            <motion.div {...fadeInUp} className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
                02 — EDUCATION
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#171717]">
                Where My Journey Begins
              </h2>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute left-0 top-3 bottom-3 w-[1.5px] bg-gradient-to-b from-[#9A7B4F] via-[#C2AB8A] to-[#ECE7DE]" />

              <motion.div {...fadeInUp} className="relative space-y-4">
                <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 flex items-center justify-center">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9A7B4F] opacity-40" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FCFBF8] border-2 border-[#9A7B4F]" />
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A7B4F]/10 border border-[#9A7B4F]/25 text-[#9A7B4F] text-xs font-semibold tracking-wider uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9A7B4F]" />
                  Undergraduate Student
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#171717]">
                    K.S.R. College of Engineering
                  </h3>
                  <p className="text-base sm:text-lg text-[#9A7B4F] font-medium font-sans">
                    Department of Computer Science and Engineering
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-xl font-normal">
                  Building a solid theoretical foundation in computer systems, algorithmic problem solving,
                  and software engineering principles.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE] to-transparent" />

        {/* =================================================================== */}
        {/* 4. MY AREAS OF INTEREST                                            */}
        {/* =================================================================== */}
        <section className="py-8 sm:py-12">
          <div className="space-y-10 text-left">
            <motion.div {...fadeInUp} className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
                03 — AREAS OF PASSION
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#171717]">
                Technology That Inspires Me.
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B]">
                The technical domains driving my daily curiosity, ongoing study, and practical projects.
              </p>
            </motion.div>

            {/* Editorial Row-Based Layout */}
            <div className="divide-y divide-[#ECE7DE] border-y border-[#ECE7DE]">
              {areasOfInterest.map((interest, index) => (
                <motion.div
                  key={interest.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group py-6 sm:py-8 transition-colors duration-300 hover:bg-white/70 px-2 sm:px-4 rounded-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
                    <div className="md:col-span-3 flex items-center gap-3">
                      <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#9A7B4F]">
                        {interest.id}
                      </span>
                      <span className="h-[1px] w-5 bg-[#ECE7DE] group-hover:bg-[#9A7B4F] transition-colors duration-300" />
                      <span className="text-[11px] font-medium tracking-wider uppercase text-[#6B6B6B] group-hover:text-[#9A7B4F] transition-colors duration-300">
                        {interest.tag}
                      </span>
                    </div>

                    <div className="md:col-span-5">
                      <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#171717] group-hover:text-[#9A7B4F] transition-colors duration-300">
                        {interest.title}
                      </h3>
                    </div>

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

        {/* Subtle Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE] to-transparent" />

        {/* =================================================================== */}
        {/* 5. WHAT I'M CURRENTLY LEARNING (SCROLL-DRIVEN PINNED STORYTELLING)   */}
        {/* =================================================================== */}
        <section
          ref={pinnedSectionRef}
          className="relative min-h-[220vh] sm:min-h-[250vh]"
        >
          {/* Sticky Viewport Container */}
          <div className="sticky top-20 sm:top-24 h-[calc(100vh-5rem)] max-h-[720px] flex items-center overflow-hidden py-6">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Pinned Heading & Progress Indicator */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F] font-sans">
                      04 — ACTIVE FOCUS
                    </span>
                    <div className="h-[1px] w-10 bg-[#9A7B4F]/60" />
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#171717] leading-[1.18]">
                    Currently Growing, Always Exploring.
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-sm">
                  Continuous learning is the cornerstone of my development journey. Scroll through each stage to explore my active areas of growth.
                </p>

                {/* Interactive Stage Tracker / Progress Nav */}
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
                            : 'w-3.5 bg-[#ECE7DE] hover:bg-[#9A7B4F]/50'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-[#9A7B4F] font-semibold pl-2">
                    0{activeStage + 1} / 0{learningStages.length}
                  </span>
                </div>
              </div>

              {/* Right Column: Progressive Stage Card Transition */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[320px] flex items-center justify-start text-left w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 20,
                      scale: shouldReduceMotion ? 1 : 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : -20,
                      scale: shouldReduceMotion ? 1 : 0.98,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full p-6 sm:p-9 rounded-3xl bg-white border border-[#ECE7DE] shadow-[0_10px_35px_rgba(23,23,23,0.035)] space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-[#ECE7DE]/80 pb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#9A7B4F] uppercase px-3 py-1 rounded-full bg-[#9A7B4F]/10">
                          STAGE {learningStages[activeStage].index}
                        </span>
                        <span className="text-[11px] text-[#9A7B4F] font-semibold tracking-wider uppercase font-sans hidden sm:inline-block">
                          ACTIVE FOCUS
                        </span>
                      </div>
                      <span className="text-xs text-[#6B6B6B] flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-[#9A7B4F]" />
                        Continuous Growth
                      </span>
                    </div>

                    <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#171717] leading-snug">
                      {learningStages[activeStage].title}.
                    </h3>

                    <p className="text-sm sm:text-base lg:text-lg text-[#6B6B6B] leading-relaxed font-normal pt-1">
                      {learningStages[activeStage].detail}
                    </p>

                    {/* Progress Indicator Bar */}
                    <div className="pt-3 flex items-center justify-between text-xs text-[#9A7B4F] font-mono">
                      <span>0{activeStage + 1} OF 0{learningStages.length}</span>
                      <div className="w-28 sm:w-36 h-1 bg-[#ECE7DE] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#9A7B4F]"
                          initial={false}
                          animate={{ width: `${((activeStage + 1) / learningStages.length) * 100}%` }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE] to-transparent" />

        {/* =================================================================== */}
        {/* 6. BEYOND THE CODE – MY APPROACH                                    */}
        {/* =================================================================== */}
        <section className="py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#9A7B4F]/5 rounded-full blur-3xl pointer-events-none" />

          <motion.div {...fadeInUp} className="relative max-w-3xl mx-auto text-center space-y-6 px-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
              MY PHILOSOPHY
            </span>

            <blockquote className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#171717] leading-[1.3] tracking-tight">
              “I believe progress comes from{' '}
              <span className="text-[#9A7B4F] italic">curiosity</span>,{' '}
              <span className="text-[#9A7B4F] italic">consistency</span>, and the willingness to try
              something new.”
            </blockquote>

            <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-xl mx-auto font-normal">
              Every project teaches me something different. I see challenges as opportunities to
              improve, explore unfamiliar concepts, and become a better problem solver.
            </p>
          </motion.div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE] to-transparent" />

        {/* =================================================================== */}
        {/* 7. FUTURE VISION                                                   */}
        {/* =================================================================== */}
        <section className="py-8 sm:py-12">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-left space-y-5">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A7B4F]">
              05 — FUTURE VISION
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#171717]">
              Where I Want to Go.
            </h2>

            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#ECE7DE] space-y-4 shadow-[0_6px_25px_rgba(23,23,23,0.02)]">
              <p className="font-serif-display text-xl sm:text-2xl text-[#171717] leading-relaxed font-medium">
                I'm working towards becoming a skilled technology professional, with a deeper
                understanding of Artificial Intelligence and the ability to build impactful software
                solutions.
              </p>

              <p className="text-base text-[#6B6B6B] leading-relaxed font-normal border-t border-[#ECE7DE] pt-4">
                My goal is to keep learning, gain practical experience, and contribute to meaningful
                projects.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Subtle Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE] to-transparent" />

        {/* =================================================================== */}
        {/* 8. TRANSITION TO SKILLS PAGE                                        */}
        {/* =================================================================== */}
        <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 text-center">
          <motion.div {...fadeInUp} className="max-w-xl mx-auto space-y-5">
            <p className="font-serif-display text-2xl sm:text-3xl font-medium text-[#171717] tracking-tight">
              Every journey is built one skill at a time.
            </p>

            <div className="pt-1">
              <a
                href="#skills"
                onClick={handleScrollToSkills}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#171717] hover:bg-[#9A7B4F] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A7B4F]"
              >
                <span>Explore My Skills</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </article>
  );
};

export default About;

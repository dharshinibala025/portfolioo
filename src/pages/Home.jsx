import { motion } from 'framer-motion';
import { heroStats, personalInfo } from '../data/content';
import GsapReveal from '../components/GsapReveal';

import SilkType from '../components/SilkType';
import ProfileCard from '../components/ProfileCard';

// Page Components
import About from './About';
import Projects from './Projects';
import Certificates from './Certificates';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {

  return (
    <div className="space-y-12">
      <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center space-y-12 pt-8">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <motion.div
            className="relative flex flex-col justify-center pb-16 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-accent-500/10 backdrop-blur-2xl overflow-hidden"
            style={{ perspective: '1000px' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Floating particles background */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}

            <GsapReveal>
              <motion.span
                className="inline-flex items-center rounded-full border border-white/10 bg-accent-500/15 px-4 py-1 text-xs uppercase tracking-[0.45em] text-accent-200 relative overflow-hidden cursor-default select-none"
                whileHover={{ scale: 1.05 }}
              >
                {/* Pulsing effect */}
                <motion.div
                  className="absolute inset-0 bg-accent-500/20"
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">Hello</span>
              </motion.span>

              <motion.h1
                className="font-display text-3xl leading-tight md:text-4xl mt-4 bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent cursor-default select-none"
                style={{
                  backgroundSize: '200% auto',
                }}
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                I am {personalInfo.fullName}
              </motion.h1>
            </GsapReveal>

            <GsapReveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/resume/Dharshini Resume.pdf"
                  download="Dharshini_Resume.pdf"
                  className="group relative inline-flex items-center gap-3 rounded-full border border-transparent bg-accent-500 px-6 py-3 font-medium text-white shadow-glow overflow-hidden"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">Download CV</span>
                  <motion.span
                    className="text-xl leading-none relative z-10"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↗
                  </motion.span>
                </motion.a>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-accent-300 hover:text-white hover:shadow-lg hover:shadow-accent-500/20"
                  >
                    Browse projects
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </GsapReveal>

            <div className="w-full mt-8 relative z-10">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: '1000px' }}>
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative rounded-2xl border border-white/10 bg-black/20 p-4 text-center overflow-hidden group cursor-default select-none"
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      rotateY: 10,
                      rotateX: -10,
                      scale: 1.05,
                      z: 50,
                      boxShadow: '0 20px 40px -10px rgba(196,31,216,0.5)',
                      borderColor: 'rgba(196, 31, 216, 0.5)',
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Floating particles on hover */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${40 + i * 10}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}

                    <motion.p
                      className="font-display text-3xl text-white relative z-10"
                      style={{ transform: 'translateZ(20px)' }}
                      animate={{
                        textShadow: [
                          '0 0 10px rgba(196, 31, 216, 0.3)',
                          '0 0 20px rgba(196, 31, 216, 0.5)',
                          '0 0 10px rgba(196, 31, 216, 0.3)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.value}
                    </motion.p>
                    <motion.p
                      className="text-xs uppercase tracking-[0.05em] text-muted relative z-10"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {stat.label}
                    </motion.p>

                    {/* 3D depth indicator */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/20 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      style={{ transform: 'translateZ(-10px)' }}
                    />

                    {/* Shimmer on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{
                        x: '100%',
                        transition: { duration: 0.8 }
                      }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center p-6 h-full min-h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileCard
              avatarUrl={personalInfo.profileImage}
              miniAvatarUrl={personalInfo.profileImage}
              name={personalInfo.fullName}
              title={personalInfo.title}
              handle="dharshinibala025"
              showUserInfo={false}
              status="Open to Work"
              contactText="Get in Touch"
              behindGlowColor="rgba(196, 31, 216, 0.6)"
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </motion.div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="skills">
        <Skills />
      </section>



      <section id="contact">
        <Contact />
      </section>
    </div >
  );
};

export default Home;

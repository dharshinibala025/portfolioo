import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroStats, personalInfo, hobbies, funFacts } from '../data/content';
import jor from '../assets/jor.jpg';
import abb from '../assets/abb.jpg';
import chatbot from '../assets/chatbot.jpg';
import cert from '../assets/cert.jpg';
import Reveal from '../components/Reveal';
import CinematicAbout from '../components/CinematicAbout';
import SilkType from '../components/SilkType';

const showcaseTiles = [
  {
    label: 'Projects',
    path: '/projects',
    image: chatbot,
    accent: 'from-accent-500/30 via-transparent to-transparent',
  },
  {
    label: 'Certificates',
    path: '/certificates',
    image: cert,
    accent: 'from-[#7C4DFF]/30 via-transparent to-transparent',
  },
  {
    label: 'Skills',
    path: '/skills',
    image: jor,
    accent: 'from-[#FF5EDF]/30 via-transparent to-transparent',
  },
  {
    label: 'Contact',
    path: '/contact',
    image: abb,
    accent: 'from-[#6A00F4]/40 via-transparent to-transparent',
  },
];

const Home = () => {
  const [clickedBox, setClickedBox] = useState(null);

  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch mt-8">
        <motion.div
          className="flex flex-col justify-center space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-accent-500/10 backdrop-blur-2xl"
        >
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-accent-500/15 px-4 py-1 text-xs uppercase tracking-[0.45em] text-accent-200">
              Hello
            </span>
            <h1 className="font-display text-3xl leading-tight text-white md:text-4xl mt-4">
              I am {personalInfo.fullName}
            </h1>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume/Dharshini s Resume.pdf"
                download="Dharshini_Resume.pdf"
                className="group inline-flex items-center gap-3 rounded-full border border-transparent bg-accent-500 px-6 py-3 font-medium text-white shadow-glow transition hover:-translate-y-1 hover:bg-accent-400"
              >
                Download CV
                <span className="text-xl leading-none transition group-hover:translate-x-1">↗</span>
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-accent-300 hover:text-white"
              >
                Browse projects
              </Link>
            </div>
          </Reveal>

          <div className="w-full mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center transition-all duration-300 hover:bg-white/10 hover:border-accent-500/50 hover:shadow-[0_10px_30px_-10px_rgba(196,31,216,0.3)] hover:-translate-y-1 hover:scale-105"
                >
                  <p className="font-display text-3xl text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.05em] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-800/80 p-6 h-full min-h-[400px]"
        >
          <motion.div
            className="absolute inset-6 rounded-[2.5rem] border border-white/10"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-6">
            <motion.div
              className="group relative flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-black/30 shadow-glow"
              animate={{ rotate: [0, 1.5, -1.5, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
              }}
            >
              <motion.img
                src={personalInfo.profileImage}
                alt={`${personalInfo.fullName} silhouette`}
                className="h-full w-full rounded-full object-cover transition-transform duration-300"
                whileHover={{
                  scale: 1.05,
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300"
                whileHover={{
                  borderColor: 'rgba(196, 31, 216, 0.6)',
                  boxShadow: '0 0 30px rgba(196, 31, 216, 0.4), inset 0 0 30px rgba(196, 31, 216, 0.1)',
                }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full bg-accent-500/0 blur-xl transition-all duration-300"
                whileHover={{
                  backgroundColor: 'rgba(196, 31, 216, 0.2)',
                }}
              />
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 shadow-dash">
                <p className="text-muted">DOB</p>
                <p>{personalInfo.dob}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 shadow-dash">
                <p className="text-muted">College</p>
                <p className="max-w-[140px]">{personalInfo.college}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic About Section */}
      <CinematicAbout />

      {/* Interests & Hobbies Section */}
      <Reveal width="100%">
        <div className="relative z-10">
          <h3 className="mb-10 font-display text-3xl text-white text-center">Interests & Hobbies</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {hobbies.map((hobby) => (
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
      </Reveal>

      {/* Fun Facts Section */}
      <Reveal width="100%">
        <div className="relative z-10">
          <h3 className="mb-10 font-display text-3xl text-white text-center">Fun Facts</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
      </Reveal>

      {/* Navigation Tiles */}
      <Reveal width="100%">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted">Experience the pages</p>
              <h2 className="font-display text-2xl text-white">Explore More</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {showcaseTiles.map((tile) => (
              <Link
                key={tile.label}
                to={tile.path}
                onClick={() => setClickedBox(clickedBox === tile.label ? null : tile.label)}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 cursor-pointer transition-all duration-300"
                style={{
                  borderColor: clickedBox === tile.label ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: clickedBox === tile.label
                    ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)'
                    : 'none',
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-accent-400 pointer-events-none z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: clickedBox === tile.label ? [0, 1, 0.6] : 0,
                    scale: clickedBox === tile.label ? [0.8, 1.1, 1] : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tile.accent} opacity-70 transition duration-500 group-hover:opacity-100`}
                />
                <img src={tile.image} alt={tile.label} className="h-48 w-full object-cover opacity-60 mix-blend-screen" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.45em] text-white/70">{tile.label}</p>
                  <p className="font-display text-2xl text-white">Go to {tile.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* New Section: Let's Connect */}
      <Reveal width="100%">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-accent-900/50 to-base-900 p-10 text-center">
          <h2 className="mb-4 font-display text-3xl text-white">Let's Create Something Amazing</h2>
          <SilkType
            delay={0.2}
            className="mx-auto mb-8 max-w-2xl text-muted"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </SilkType>

        </div>
      </Reveal>
    </section >
  );
};

export default Home;

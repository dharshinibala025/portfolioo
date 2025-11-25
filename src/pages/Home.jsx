import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroStats, personalInfo } from '../data/content';
import jor from '../assets/jor.jpg';
import abb from '../assets/abb.jpg';

const showcaseTiles = [
  {
    label: 'Projects',
    path: '/projects',

    accent: 'from-accent-500/30 via-transparent to-transparent',
  },
  {
    label: 'Certificates',
    path: '/certificates',

    accent: 'from-[#7C4DFF]/30 via-transparent to-transparent',
  },
  {
    label: 'Journey',
    path: '/journey',
    image: jor,
    accent: 'from-[#FF5EDF]/30 via-transparent to-transparent',
  },
  {
    label: 'About + Contact',
    path: '/about',
    image: abb,
    accent: 'from-[#6A00F4]/40 via-transparent to-transparent',
  },
];

const Home = () => {
  const [clickedBox, setClickedBox] = useState(null);

  return (
    <section className="space-y-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-accent-500/10 backdrop-blur-2xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-accent-500/15 px-4 py-1 text-xs uppercase tracking-[0.45em] text-accent-200">
            Wave hello 👋
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl leading-tight text-white md:text-5xl"
          >
            I am {personalInfo.fullName}
          </motion.h1>

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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                <p className="font-display text-3xl text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.05em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-800/80 p-8">
          <motion.div
            className="absolute inset-6 rounded-[2.5rem] border border-white/10"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-6">
            <motion.div
              className="group relative flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-black/30 shadow-glow"
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
              <div className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3">
                <p className="text-muted">DOB</p>
                <p>{personalInfo.dob}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3">
                <p className="text-muted">Location</p>
                <p>{personalInfo.location}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3">
                <p className="text-muted">College</p>
                <p className="max-w-[140px]">{personalInfo.college}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">Experience the pages</p>
            <h2 className="font-display text-2xl text-white">Home showcases every journey</h2>
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
              <img src={tile.image} alt={tile.label} className="h-64 w-full object-cover opacity-60 mix-blend-screen" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.45em] text-white/70">{tile.label}</p>
                <p className="font-display text-2xl text-white">Enter the {tile.label} world</p>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Home;


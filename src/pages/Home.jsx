import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroStats, personalInfo, hobbies, funFacts } from '../data/content';
import jor from '../assets/jor.jpg';
import abb from '../assets/abb.jpg';
import chatbot from '../assets/chatbot.jpg';
import cert from '../assets/cert.jpg';
import GsapReveal from '../components/GsapReveal';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch mt-8">
        <motion.div
          className="relative flex flex-col justify-center space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-accent-500/10 backdrop-blur-2xl overflow-hidden"
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
              className="inline-flex items-center rounded-full border border-white/10 bg-accent-500/15 px-4 py-1 text-xs uppercase tracking-[0.45em] text-accent-200 relative overflow-hidden"
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
              className="font-display text-3xl leading-tight md:text-4xl mt-4 bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent"
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
                href="/resume/Dharshini s Resume.pdf"
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
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-accent-300 hover:text-white hover:shadow-lg hover:shadow-accent-500/20"
                >
                  Browse projects
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </GsapReveal>

          <div className="w-full mt-8 relative z-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: '1000px' }}>
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative rounded-2xl border border-white/10 bg-black/20 p-4 text-center overflow-hidden group"
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
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-800/80 p-6 h-full min-h-[400px]"
          style={{ perspective: '1500px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          <motion.div
            className="absolute inset-6 rounded-[2.5rem] border border-white/10"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="relative flex h-full flex-col items-center justify-center gap-6"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateY: mousePosition.x * 10,
              rotateX: -mousePosition.y * 10,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <motion.div
              className="group relative flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-black/30 shadow-glow"
              animate={{
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{ duration: 12, repeat: Infinity }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                z: 100,
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(50px)',
              }}
            >
              <motion.img
                src={personalInfo.profileImage}
                alt={`${personalInfo.fullName} silhouette`}
                className="h-full w-full rounded-full object-cover transition-transform duration-300"
                whileHover={{
                  scale: 1.05,
                }}
                style={{ transform: 'translateZ(20px)' }}
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

              {/* 3D orbital rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-accent-500/20"
                  style={{
                    transform: `translateZ(${-20 - i * 15}px) scale(${1 + i * 0.1})`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80" style={{ transform: 'translateZ(30px)' }}>
              <motion.div
                className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 shadow-dash"
                whileHover={{
                  rotateY: 5,
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(196, 31, 216, 0.3)',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <p className="text-muted">DOB</p>
                <p>{personalInfo.dob}</p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 shadow-dash"
                whileHover={{
                  rotateY: -5,
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(196, 31, 216, 0.3)',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <p className="text-muted">College</p>
                <p className="max-w-[140px]">{personalInfo.college}</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic About Section */}
      <CinematicAbout />

      {/* Interests & Hobbies Section */}
      <GsapReveal width="100%">
        <div className="relative z-10">
          <motion.h3
            className="mb-10 font-display text-3xl text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Interests & Hobbies
          </motion.h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                className="h-48 relative group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Rotating gradient border */}
                <motion.div
                  className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, #c41fd8, #7c4dff, #ff5edf, #c41fd8)',
                    backgroundSize: '300% 300%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: '100%',
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    }}
                  />
                </motion.div>

                {/* Floating particles on hover */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${30 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, (i % 2 === 0 ? 10 : -10), 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}

                <div className="relative h-full w-full">
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 text-center shadow-lg overflow-hidden"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}
                    whileHover={{
                      borderColor: 'rgba(196, 31, 216, 0.4)',
                      boxShadow: '0 10px 40px rgba(196, 31, 216, 0.3)',
                    }}
                  >
                    {/* Pulsing background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                      animate={{
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Animated icon with bounce */}
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-500/30 to-purple-500/30 text-accent-300 shadow-glow relative z-10"
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(196, 31, 216, 0.3)',
                          '0 0 20px rgba(196, 31, 216, 0.5)',
                          '0 0 10px rgba(196, 31, 216, 0.3)',
                        ],
                        y: [0, -5, 0],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        y: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <hobby.icon className="text-xl" />

                      {/* Icon glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: index * 0.15
                        }}
                      />
                    </motion.div>

                    {/* Name with slide effect */}
                    <motion.h4
                      className="mb-1 font-semibold text-white relative z-10"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      whileHover={{
                        color: 'rgb(196, 31, 216)',
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {hobby.name}
                    </motion.h4>

                    {/* Description with fade */}
                    <motion.p
                      className="text-xs text-muted mt-2 relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.7 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {hobby.description}
                    </motion.p>

                    {/* Bottom accent line with wave effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Corner glow with pulse */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-accent-500/20 rounded-bl-full blur-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      animate={{
                        opacity: [0, 0.5, 0],
                      }}
                      style={{
                        animationDelay: `${index * 0.2}s`
                      }}
                    />

                    {/* Sparkle effect on corners */}
                    <motion.div
                      className="absolute top-2 left-2 w-1 h-1 bg-accent-300 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-2 right-2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.8,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GsapReveal>

      {/* Fun Facts Section */}
      <GsapReveal width="100%">
        <div className="relative z-10">
          <motion.h3
            className="mb-10 font-display text-3xl text-white text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Fun Facts
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm hover:border-accent-400/50 overflow-hidden group"
              >
                {/* Animated gradient border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(196, 31, 216, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{
                    x: '100%',
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  }}
                />

                {/* Animated number badge */}
                <motion.span
                  className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-purple-600 text-white font-bold text-sm shadow-lg z-10"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(196, 31, 216, 0.3)',
                      '0 0 30px rgba(196, 31, 216, 0.6)',
                      '0 0 20px rgba(196, 31, 216, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                >
                  {index + 1}

                  {/* Pulsing ring around badge */}
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-accent-300"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: index * 0.2
                    }}
                  />
                </motion.span>

                {/* Fact text with typing effect on hover */}
                <motion.p
                  className="text-white/90 group-hover:text-white transition-colors duration-300 relative z-10 flex-1"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {fact}
                </motion.p>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 0.4 }
                  }}
                />

                {/* Bottom glow effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{
                    scaleX: 1,
                    transition: { duration: 0.5 }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </GsapReveal>

      {/* Navigation Tiles */}
      <GsapReveal width="100%">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <motion.div
            className="mb-6 flex items-center justify-between gap-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.p
                className="text-xs uppercase tracking-[0.4em] text-muted"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Experience the pages
              </motion.p>
              <motion.h2
                className="font-display text-2xl text-white bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Explore More
              </motion.h2>
            </div>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {showcaseTiles.map((tile, index) => (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Link
                  to={tile.path}
                  onClick={() => setClickedBox(clickedBox === tile.label ? null : tile.label)}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 cursor-pointer transition-all duration-500 block h-48"
                  style={{
                    borderColor: clickedBox === tile.label ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: clickedBox === tile.label
                      ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)'
                      : 'none',
                  }}
                >
                  {/* Ripple effect on click */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-accent-400 pointer-events-none z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: clickedBox === tile.label ? [0, 1, 0] : 0,
                      scale: clickedBox === tile.label ? [0.8, 1.3, 1.5] : 0.8,
                    }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    style={{
                      background: `linear-gradient(45deg, ${tile.accent.replace('from-', '').replace('/30', '')}, transparent, ${tile.accent.replace('from-', '').replace('/30', '')})`,
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tile.accent} opacity-70 transition duration-500 group-hover:opacity-100`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Parallax image with zoom effect */}
                  <motion.img
                    src={tile.image}
                    alt={tile.label}
                    className="h-48 w-full object-cover opacity-60 mix-blend-screen"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  />

                  {/* Floating particles effect */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent-300 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}

                  {/* Content overlay with slide-up animation */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 z-10">
                    <motion.p
                      className="text-xs uppercase tracking-[0.45em] text-white/70 group-hover:text-accent-300 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {tile.label}
                    </motion.p>
                    <motion.p
                      className="font-display text-2xl text-white group-hover:text-accent-100 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      Go to {tile.label}
                    </motion.p>

                    {/* Animated arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="text-2xl"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Shine effect sweeping across */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-15"
                    initial={{ x: '-100%', skewX: -20 }}
                    whileHover={{
                      x: '200%',
                      transition: { duration: 1, ease: "easeInOut" }
                    }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      width: '50%',
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </GsapReveal>

      {/* New Section: Let's Connect */}
      <GsapReveal width="100%">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-accent-900/50 to-base-900 p-10 text-center">
          <h2 className="mb-4 font-display text-3xl text-white">Let's Create Something Amazing</h2>
          <SilkType
            delay={0.2}
            className="mx-auto mb-8 max-w-2xl text-muted"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </SilkType>

        </div>
      </GsapReveal>
    </section >
  );
};

export default Home;

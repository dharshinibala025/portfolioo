import { motion } from 'framer-motion';

const blobs = [
  { position: '-top-24 -left-16 w-72 h-72', delay: 0 },
  { position: 'top-32 -right-24 w-80 h-80', delay: 1.2 },
  { position: 'bottom-16 left-12 w-56 h-56', delay: 0.6 },
];

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: `particle-${index}`,
  delay: index * 0.35,
  duration: 6 + (index % 4),
  top: `${(index * 17) % 100}%`,
  left: `${(index * 29) % 100}%`,
}));

const AnimatedBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-base-900 via-base-800 to-base-900 opacity-90" />
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,31,216,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(87,13,114,0.35),_transparent_50%)]" />
    </div>
    {blobs.map((blob) => (
      <motion.span
        key={blob.position}
        className={`absolute ${blob.position} rounded-full bg-accent-500/30 blur-[100px]`}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.95] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: blob.delay,
        }}
      />
    ))}
    <div className="absolute inset-0 opacity-30">
      <div className="animate-[pulseGlow_4s_ease-in-out_infinite] absolute inset-x-0 top-16 h-[1px] bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
      <div className="animate-[pulseGlow_5s_ease-in-out_infinite] absolute inset-y-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-accent-400 to-transparent" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-2 w-2 rounded-full bg-accent-400/70 shadow-glow"
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 mix-blend-screen" />
  </div>
);

export default AnimatedBackground;


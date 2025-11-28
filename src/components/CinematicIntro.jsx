import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '../data/content';

const CinematicIntro = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence timing
        const timers = [
            setTimeout(() => setStep(1), 500),   // "Presenting"
            setTimeout(() => setStep(2), 2500),  // Name reveal
            setTimeout(() => setStep(3), 3500),  // Title reveal
            setTimeout(() => setStep(4), 6000),  // Start exit
            setTimeout(() => onComplete(), 7000) // Complete
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    // Particle generation
    const particles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 10,
    }));

    return (
        <motion.div
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
        >
            {/* Ambient Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-accent-500/20 blur-sm"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Glowing Background Spot */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-accent-900/20 via-black to-black pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.span
                            key="personal showcase"
                            className="text-sm uppercase tracking-[0.5em] text-accent-300/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
                            transition={{ duration: 0.8 }}
                        >
                            Personal Showcase
                        </motion.span>
                    )}
                </AnimatePresence>

                {step >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="mb-4"
                    >
                        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            {personalInfo.fullName}
                        </h1>
                    </motion.div>
                )}

                {step >= 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto mb-4" />
                        <p className="text-lg md:text-xl text-accent-200/80 font-light tracking-wide">
                            {personalInfo.title}
                        </p>
                    </motion.div>
                )}
            </div>



            {/* Scroll Cue (Visual only, as we transition automatically) */}
            {
                step >= 3 && (
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <motion.div
                            className="w-[1px] h-12 bg-gradient-to-b from-accent-500 to-transparent"
                            animate={{ height: [0, 48, 0], y: [0, 0, 48] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                )
            }

        </motion.div >
    );
};

export default CinematicIntro;

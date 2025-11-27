import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { personalInfo, journeyMoments, heroStats } from '../data/content';
import GlowParticles from './GlowParticles';
import SilkTypeAnim from './SilkType';

const CinematicAbout = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden text-white selection:bg-accent-500/30">


            {/* Glow Particles Container - Positioned relative to the main container */}
            <div className="absolute top-20 right-0 w-1/2 h-full pointer-events-none z-0 hidden md:block overflow-visible">
                <GlowParticles />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

                {/* Story Timeline */}
                <div className="max-w-4xl mx-auto mt-8 relative">

                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl font-display font-bold text-center mb-8 relative z-10"
                    >
                        The Journey So Far
                    </motion.h3>

                    <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-8 z-10">
                        {journeyMoments.map((moment, index) => (
                            <TimelineItem key={index} moment={moment} index={index} />
                        ))}
                    </div>
                </div>

                {/* Bio Text */}
                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-6xl text-accent-500/20 font-serif">"</span>
                        <SilkTypeAnim
                            className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 font-display"
                            delay={0.2}
                            stagger={0.02}
                        >
                            {personalInfo.description}
                        </SilkTypeAnim>
                        <span className="text-6xl text-accent-500/20 font-serif block mt-6">"</span>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

const TimelineItem = ({ moment, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-8 md:pl-12 group"
        >
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-500 ring-4 ring-black group-hover:ring-accent-500/20 transition-all duration-500" />

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-accent-400 font-mono text-sm tracking-wider min-w-[80px]">
                    {moment.year}
                </span>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                        {moment.title}
                    </h4>
                    <p className="text-muted leading-relaxed max-w-xl">
                        {moment.description}
                    </p>
                    {moment.highlight && (
                        <p className="mt-2 text-sm text-accent-200/80 italic">
                            — {moment.highlight}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default CinematicAbout;

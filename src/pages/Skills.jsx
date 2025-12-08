import PageHeader from '../components/PageHeader';
import GsapReveal from '../components/GsapReveal';
import SkillWebGraph from '../components/SkillWebGraph';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { skills, frameworks } from '../data/content';
import { FaCode, FaBrain, FaLaptopCode, FaRocket, FaPalette } from 'react-icons/fa6';

const Skills = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="pb-20">
            <GsapReveal>
                <PageHeader
                    eyebrow="Skills"
                    title="My Skillset"
                    description="A collection of tools and technologies I use to bring ideas to life."
                />
            </GsapReveal>

            <SkillWebGraph />

            <div className="container mx-auto px-4 mt-4 max-w-5xl">
                <GsapReveal>
                    <motion.h2
                        className="text-3xl font-bold text-center mb-8 text-white"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(196, 31, 216, 0.3)',
                                '0 0 40px rgba(196, 31, 216, 0.6)',
                                '0 0 20px rgba(196, 31, 216, 0.3)',
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Future <span className="text-accent-400">Focus</span>
                    </motion.h2>
                </GsapReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 h-auto md:h-[240px] mb-12">
                    {/* Card 1: Main Focus - Large Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        onHoverStart={() => setHoveredCard('ai-architect')}
                        onHoverEnd={() => setHoveredCard(null)}
                        whileHover={{
                            scale: 1.05,
                            y: -8,
                            transition: { duration: 0.3 }
                        }}
                        className="md:col-span-1 md:row-span-2 p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 via-black/40 to-black/30 border border-white/10 backdrop-blur-sm flex flex-col justify-between group relative overflow-hidden cursor-pointer"
                        style={{
                            boxShadow: hoveredCard === 'ai-architect'
                                ? '0 20px 60px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
                                : '0 4px 20px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {/* Shimmer effect */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ x: '-100%' }}
                            animate={hoveredCard === 'ai-architect' ? {
                                x: '100%',
                                opacity: [0, 0.5, 0],
                            } : {}}
                            transition={{ duration: 1.5 }}
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                            }}
                        />

                        {/* Floating particles */}
                        {hoveredCard === 'ai-architect' && (
                            <>
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                        initial={{ x: '50%', y: '50%', opacity: 0 }}
                                        animate={{
                                            x: `${50 + (Math.random() - 0.5) * 100}%`,
                                            y: `${50 + (Math.random() - 0.5) * 100}%`,
                                            opacity: [0, 1, 0],
                                            scale: [0, 1.5, 0],
                                        }}
                                        transition={{
                                            duration: 1.5 + Math.random(),
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                    />
                                ))}
                            </>
                        )}

                        {/* Pulsing border */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            animate={hoveredCard === 'ai-architect' ? {
                                boxShadow: [
                                    '0 0 0px rgba(59, 130, 246, 0)',
                                    '0 0 20px rgba(59, 130, 246, 0.6)',
                                    '0 0 0px rgba(59, 130, 246, 0)',
                                ],
                            } : {}}
                            transition={{ duration: 1.5, repeat: hoveredCard === 'ai-architect' ? Infinity : 0 }}
                        />

                        <motion.div
                            className="p-4 rounded-full bg-blue-500/20 w-fit text-blue-400 text-3xl relative"
                            animate={hoveredCard === 'ai-architect' ? {
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                            } : {}}
                            transition={{ duration: 2, repeat: hoveredCard === 'ai-architect' ? Infinity : 0 }}
                        >
                            <FaCode />
                            {/* Icon glow */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-blue-400/30 blur-xl"
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <div>
                            <motion.h3
                                className="text-xl font-bold text-white mb-2"
                                animate={hoveredCard === 'ai-architect' ? { x: [0, 3, 0] } : {}}
                                transition={{ duration: 0.3 }}
                            >
                                AI Architect
                            </motion.h3>
                            <motion.p
                                className="text-white/60 text-sm"
                                animate={hoveredCard === 'ai-architect' ? { x: [0, 3, 0] } : {}}
                                transition={{ duration: 0.3, delay: 0.05 }}
                            >
                                Designing autonomous systems & agents.
                            </motion.p>
                        </div>

                        {/* Corner accent */}
                        <motion.div
                            className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/10 rounded-tl-full"
                            initial={{ scale: 0 }}
                            animate={hoveredCard === 'ai-architect' ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Card 2: Current Obsession - Wide Rectangle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        onHoverStart={() => setHoveredCard('deep-learning')}
                        onHoverEnd={() => setHoveredCard(null)}
                        whileHover={{
                            scale: 1.05,
                            y: -8,
                            transition: { duration: 0.3 }
                        }}
                        className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 border border-white/10 backdrop-blur-sm flex items-center justify-between group relative overflow-hidden cursor-pointer"
                        style={{
                            boxShadow: hoveredCard === 'deep-learning'
                                ? '0 20px 60px rgba(196, 31, 216, 0.4), 0 0 40px rgba(196, 31, 216, 0.2)'
                                : '0 4px 20px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {/* Animated gradient overlay */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                background: [
                                    'radial-gradient(circle at 20% 50%, rgba(196, 31, 216, 0.2) 0%, transparent 50%)',
                                    'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                                    'radial-gradient(circle at 20% 50%, rgba(196, 31, 216, 0.2) 0%, transparent 50%)',
                                ],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        {/* Shimmer effect */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ x: '-100%' }}
                            animate={hoveredCard === 'deep-learning' ? {
                                x: '100%',
                                opacity: [0, 0.6, 0],
                            } : {}}
                            transition={{ duration: 1.2 }}
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                            }}
                        />

                        <div className="relative z-10">
                            <motion.h3
                                className="text-xl font-bold text-white mb-2"
                                animate={hoveredCard === 'deep-learning' ? { x: [0, 3, 0] } : {}}
                                transition={{ duration: 0.3 }}
                            >
                                Deep Learning
                            </motion.h3>
                            <motion.p
                                className="text-accent-300 text-sm"
                                animate={hoveredCard === 'deep-learning' ? { x: [0, 3, 0] } : {}}
                                transition={{ duration: 0.3, delay: 0.05 }}
                            >
                                Mastering Neural Networks & Transformers
                            </motion.p>
                        </div>

                        <motion.div
                            className="text-6xl text-white/10 group-hover:text-white/20 transition-colors relative z-10"
                            animate={hoveredCard === 'deep-learning' ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0],
                            } : {}}
                            transition={{ duration: 2, repeat: hoveredCard === 'deep-learning' ? Infinity : 0 }}
                        >
                            <FaBrain />
                        </motion.div>

                        {/* Pulsing border */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-accent-400/0 pointer-events-none"
                            animate={hoveredCard === 'deep-learning' ? {
                                borderColor: 'rgba(196, 31, 216, 0.4)',
                            } : {}}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Card 3: UI/UX Design - Small Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        onHoverStart={() => setHoveredCard('ui-ux')}
                        onHoverEnd={() => setHoveredCard(null)}
                        whileHover={{
                            scale: 1.08,
                            rotate: 2,
                            transition: { duration: 0.3 }
                        }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 via-black/40 to-black/30 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center gap-3 relative overflow-hidden cursor-pointer"
                        style={{
                            boxShadow: hoveredCard === 'ui-ux'
                                ? '0 20px 60px rgba(236, 72, 153, 0.4), 0 0 40px rgba(236, 72, 153, 0.2)'
                                : '0 4px 20px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {/* Rotating gradient background */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                background: [
                                    'conic-gradient(from 0deg, rgba(236, 72, 153, 0.1), transparent, rgba(236, 72, 153, 0.1))',
                                    'conic-gradient(from 360deg, rgba(236, 72, 153, 0.1), transparent, rgba(236, 72, 153, 0.1))',
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />

                        <motion.div
                            animate={hoveredCard === 'ui-ux' ? {
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                            } : {}}
                            transition={{ duration: 2, repeat: hoveredCard === 'ui-ux' ? Infinity : 0 }}
                            className="relative z-10"
                        >
                            <FaPalette className="text-3xl text-pink-400" />
                        </motion.div>

                        <motion.span
                            className="text-white font-medium text-base relative z-10"
                            animate={hoveredCard === 'ui-ux' ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            UI/UX Design
                        </motion.span>

                        {/* Floating particles */}
                        {hoveredCard === 'ui-ux' && (
                            <>
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-pink-400 rounded-full"
                                        initial={{ x: '50%', y: '50%', opacity: 0 }}
                                        animate={{
                                            x: `${50 + (Math.random() - 0.5) * 80}%`,
                                            y: `${50 + (Math.random() - 0.5) * 80}%`,
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 1 + Math.random(),
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </>
                        )}
                    </motion.div>

                    {/* Card 4: Generative AI - Small Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateZ: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onHoverStart={() => setHoveredCard('gen-ai')}
                        onHoverEnd={() => setHoveredCard(null)}
                        whileHover={{
                            scale: 1.08,
                            rotate: -2,
                            transition: { duration: 0.3 }
                        }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-red-900/30 via-black/40 to-orange-900/30 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center gap-3 relative overflow-hidden cursor-pointer"
                        style={{
                            boxShadow: hoveredCard === 'gen-ai'
                                ? '0 20px 60px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2)'
                                : '0 4px 20px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {/* Pulsing glow */}
                        <motion.div
                            className="absolute inset-0 bg-red-500/10 rounded-2xl"
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        {/* Shimmer effect */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ x: '-100%' }}
                            animate={hoveredCard === 'gen-ai' ? {
                                x: '100%',
                                opacity: [0, 0.5, 0],
                            } : {}}
                            transition={{ duration: 1.3 }}
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.3), transparent)',
                            }}
                        />

                        <motion.div
                            animate={hoveredCard === 'gen-ai' ? {
                                y: [0, -10, 0],
                                rotate: [0, 15, -15, 0],
                            } : {}}
                            transition={{ duration: 1.5, repeat: hoveredCard === 'gen-ai' ? Infinity : 0 }}
                            className="relative z-10"
                        >
                            <FaRocket className="text-3xl text-red-400" />
                        </motion.div>

                        <motion.span
                            className="text-white font-medium text-base relative z-10"
                            animate={hoveredCard === 'gen-ai' ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            Researching Generative AI
                        </motion.span>

                        {/* Orbiting particles */}
                        {hoveredCard === 'gen-ai' && (
                            <>
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-red-400 rounded-full"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                        }}
                                        animate={{
                                            x: [0, Math.cos(i * Math.PI / 2) * 40, 0],
                                            y: [0, Math.sin(i * Math.PI / 2) * 40, 0],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                        }}
                                    />
                                ))}
                            </>
                        )}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;


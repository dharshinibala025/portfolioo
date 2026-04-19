import { motion } from 'framer-motion';
import { hobbies, funFacts } from '../data/content';
import GsapReveal from '../components/GsapReveal';
import CinematicAbout from '../components/CinematicAbout';

const About = () => {
    return (
        <section className="space-y-16 pt-24 pb-12">
            {/* Cinematic About Section */}
            <CinematicAbout />

            {/* Interests & Hobbies Section */}
            <GsapReveal width="100%">
                <div className="relative z-10 px-6">
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
                                    className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
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
                <div className="relative z-10 px-6">
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
        </section>
    );
};

export default About;

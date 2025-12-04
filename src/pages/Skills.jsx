import PageHeader from '../components/PageHeader';
import GsapReveal from '../components/GsapReveal';
import SkillWebGraph from '../components/SkillWebGraph';

import { motion } from 'framer-motion';
import { skills, frameworks } from '../data/content';
import { FaCode, FaBrain, FaLaptopCode, FaRocket, FaPalette } from 'react-icons/fa6';

const Skills = () => {

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
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">
                        Future <span className="text-accent-400">Focus</span>
                    </h2>
                </GsapReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 h-auto md:h-[240px] mb-12">
                    {/* Card 1: Main Focus - Large Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 0.5,
                            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                        className="md:col-span-1 md:row-span-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between group hover:bg-white/10 transition-colors"
                    >
                        <div className="p-3 rounded-full bg-blue-500/20 w-fit text-blue-400 text-2xl">
                            <FaCode />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">AI Architect</h3>
                            <p className="text-white/60 text-xs">Designing autonomous systems & agents.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Current Obsession - Wide Rectangle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 0.5, delay: 0.1,
                            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                        className="md:col-span-2 p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 backdrop-blur-sm flex items-center justify-between group hover:border-accent-500/50 transition-colors"
                    >
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Deep Learning</h3>
                            <p className="text-accent-300 text-xs">Mastering Neural Networks & Transformers</p>
                        </div>
                        <div className="text-4xl text-white/10 group-hover:text-white/20 transition-colors">
                            <FaBrain />
                        </div>
                    </motion.div>

                    {/* Card 3: Editor - Small Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 0.5, delay: 0.2,
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center gap-2 hover:bg-white/10 transition-colors"
                    >
                        <FaPalette className="text-2xl text-pink-400" />
                        <span className="text-white font-medium text-sm">UI/UX Design</span>
                    </motion.div>

                    {/* Card 4: Goal - Small Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            duration: 0.5, delay: 0.3,
                            y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center gap-2 hover:bg-white/10 transition-colors"
                    >
                        <FaRocket className="text-2xl text-red-400" />
                        <span className="text-white font-medium text-sm">Researching Generative AI</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;

import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { skills, frameworks, tools } from '../data/content';

const Skills = () => {
    return (
        <section>
            <PageHeader
                eyebrow="Skills"
                title="My Technical Arsenal"
                description="A collection of tools and technologies I use to bring ideas to life."
            />

            <div className="space-y-16">
                {/* Languages Section */}
                <div>
                    <h3 className="mb-8 font-display text-2xl text-white">Languages</h3>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    filter: "brightness(1.2)",
                                    borderColor: "rgba(196, 31, 216, 0.5)"
                                }}
                                className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-glow"
                            >
                                <skill.icon className="mb-4 text-5xl text-accent-300 transition-colors group-hover:text-accent-100" />
                                <span className="text-sm font-medium tracking-wider text-white/80 group-hover:text-white">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Frameworks Section */}
                <div>
                    <h3 className="mb-8 font-display text-2xl text-white">Frameworks</h3>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {frameworks.map((fw, index) => (
                            <motion.div
                                key={fw.name}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -5,
                                    borderColor: "rgba(196, 31, 216, 0.5)",
                                    boxShadow: "0 10px 30px -10px rgba(196, 31, 216, 0.3)"
                                }}
                                className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                            >
                                <fw.icon className="mb-4 text-5xl text-accent-300 transition-colors group-hover:text-accent-100" />
                                <span className="text-sm font-medium tracking-wider text-white/80 group-hover:text-white">
                                    {fw.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tools Section */}
                <div>
                    <h3 className="mb-8 font-display text-2xl text-white">Tools Used</h3>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    borderColor: "rgba(196, 31, 216, 0.5)"
                                }}
                                className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-glow"
                            >
                                <tool.icon className="mb-4 text-5xl text-accent-300 transition-colors group-hover:text-accent-100" />
                                <span className="text-sm font-medium tracking-wider text-white/80 group-hover:text-white">
                                    {tool.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

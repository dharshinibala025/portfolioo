import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Map mouse coordinates to tilt angles (in degrees)
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 220, damping: 22 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 220, damping: 22 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        x.set(mouseX / width);
        y.set(mouseY / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div 
            style={{ perspective: 1000 }} 
            className="w-full h-[320px]"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: 'preserve-3d' 
                }}
                className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-base-900 shadow-lg transition-all hover:shadow-accent-500/15 cursor-pointer"
            >
                {/* Background Image Layer - Translate Z back */}
                <div 
                    className="absolute inset-0 h-full w-full"
                    style={{ transform: 'translateZ(-15px) scale(1.05)' }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content Overlay Layer - Translate Z forward */}
                <div 
                    className="absolute inset-0 flex flex-col justify-end p-8"
                    style={{ transform: 'translateZ(20px)' }}
                >
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="inline-flex items-center rounded-full border border-white/10 bg-accent-500/20 px-3 py-1 text-xs font-medium text-accent backdrop-blur-md">
                                {project.tags[0]}
                            </span>
                            <span className="text-xs font-bold tracking-widest text-white/40 uppercase">
                                0{index + 1}
                            </span>
                        </div>

                        <h3 className="mb-3 font-display text-2xl font-bold text-primary">
                            {project.title}
                        </h3>

                        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-muted group-hover:line-clamp-none group-hover:text-primary transition-colors duration-300">
                            {project.description}
                        </p>

                        <div className="flex items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/btn relative inline-flex items-center gap-2 rounded-full bg-primary border border-border px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-accent hover:border-accent hover:scale-105"
                                >
                                    <FaGithub className="text-lg" />
                                    <span>GitHub</span>
                                </a>
                            )}

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/btn relative inline-flex items-center gap-2 rounded-full bg-white border border-border px-5 py-2.5 text-sm font-bold text-primary transition-transform hover:scale-105"
                                >
                                    <span>Live Demo</span>
                                    <FaExternalLinkAlt className="text-xs" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;

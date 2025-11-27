import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-base-900/50 transition-colors hover:border-accent-500/50"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/20 to-transparent opacity-80" />

                {/* Floating Tag */}
                <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                        {project.tags[0]}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold tracking-widest text-accent-400 uppercase">
                            Project 0{index + 1}
                        </span>
                    </div>

                    <h3 className="mb-2 font-display text-2xl font-bold text-white group-hover:text-accent-300 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex -space-x-2">
                        {project.tags.slice(1, 4).map((tag) => (
                            <div key={tag} className="flex h-8 w-8 items-center justify-center rounded-full border border-base-900 bg-base-800 text-[10px] text-white ring-2 ring-base-900" title={tag}>
                                {tag.charAt(0)}
                            </div>
                        ))}
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-500"
                    >
                        <span>View Project</span>
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

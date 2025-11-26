import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/content';

const Projects = () => {
  const [clickedProject, setClickedProject] = useState(null);

  return (
    <section>
      <PageHeader
        eyebrow="Recent Work"
        title="Innovation Hub"
        description="A space where creative ideas,smart automation,and AI driven solution come to life"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setClickedProject(clickedProject === project.id ? null : project.id)}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/30 p-4 transition-all duration-500 hover:-translate-y-2 hover:border-accent-400/40 cursor-pointer"
            style={{
              borderColor: clickedProject === project.id ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
              boxShadow: clickedProject === project.id
                ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)'
                : 'none',
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: clickedProject === project.id ? [0, 1, 0.6] : 0,
                scale: clickedProject === project.id ? [0.8, 1.1, 1] : 0.8,
              }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative h-40 overflow-hidden rounded-2xl border border-white/5">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-accent-500/50 to-transparent mix-blend-screen"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-accent-200">Project 0{index + 1}</p>
              <h3 className="font-display text-2xl text-white">{project.title}</h3>
              <p className="text-base text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent-400/60 px-4 py-2 text-sm font-semibold text-accent-200 transition hover:bg-accent-500/20"
              >
                View on GitHub
                <span className="text-lg">↗</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;


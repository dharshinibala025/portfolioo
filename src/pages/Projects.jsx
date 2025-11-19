import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/content';

const Projects = () => (
  <section>
    <PageHeader
      eyebrow="Projects"
      title="Animated zig-zag gallery of things I’ve built"
      description="Each build blends AI curiosity, responsive UX, and purposeful polish. Dive into the cards for visuals, story, and GitHub links."
      trailing={<span className="rounded-full border border-white/15 px-4 py-2 text-xs text-muted">Phone responsive</span>}
    />
    <div className="space-y-8">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={`grid items-center gap-8 rounded-3xl border border-white/10 bg-black/30 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent-400/40 lg:grid-cols-2 ${
            index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
          }`}
        >
          <div className="relative h-64 overflow-hidden rounded-2xl border border-white/5">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <motion.span
              className="absolute inset-0 bg-gradient-to-br from-accent-500/50 to-transparent mix-blend-screen"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-accent-200">Project 0{index + 1}</p>
            <h3 className="font-display text-3xl text-white">{project.title}</h3>
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

export default Projects;


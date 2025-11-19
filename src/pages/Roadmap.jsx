import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { roadmapMoments } from '../data/content';

const Roadmap = () => (
  <section>
    <PageHeader
      eyebrow="Roadmap"
      title="A playful timeline of my career momentum"
      description="Follow the magenta trail as a toy explorer walks through each milestone—from spark to momentum to future leaps."
    />
    <div className="relative rounded-3xl border border-white/10 bg-black/30 p-8">
      <div className="absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-gradient-to-b from-accent-400 via-accent-500 to-transparent md:block" />
      <div className="space-y-10">
        {roadmapMoments.map((moment, index) => (
          <motion.div
            key={moment.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`flex flex-col gap-6 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse text-right md:text-left' : ''}`}
          >
            <div className="md:w-1/2">
              <p className="text-sm uppercase tracking-[0.35em] text-accent-200">{moment.year}</p>
              <h3 className="font-display text-3xl text-white">{moment.title}</h3>
              <p className="mt-3 text-muted">{moment.description}</p>
              <p className="mt-2 text-sm text-white/60">{moment.highlight}</p>
            </div>
            <div className="relative md:w-1/2">
              <motion.div
                className="relative rounded-3xl border border-white/10 bg-base-800/70 p-6 shadow-glow"
                animate={{ scale: [1, 1.02, 1], rotate: [0, index % 2 ? 1 : -1, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <p className="text-sm text-white/80">Milestone spotlight</p>
                <p className="text-lg text-white">{moment.title}</p>
                <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-accent-500/30 via-transparent to-transparent">
                  <motion.div
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-700 text-2xl shadow-glow"
                    animate={{
                      x: index % 2 === 0 ? [-60, 60, -60] : [60, -60, 60],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    🧸
                  </motion.div>
                  <div className="absolute inset-x-6 bottom-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Roadmap;


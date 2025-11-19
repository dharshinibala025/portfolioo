import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { certificates } from '../data/content';

const Certificates = () => (
  <section>
    <PageHeader
      eyebrow="Certifications"
      title="Proof of curiosity and continuous learning"
      description="Each certificate represents a milestone in AI, cloud, or design craft. Hover to animate the cards and reveal more context."
    />
    <div className="grid gap-6 md:grid-cols-2">
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30"
        >
          <div className="relative h-56">
            <img src={cert.image} alt={cert.title} className="h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
            <motion.span
              className="absolute inset-0 rounded-3xl border border-white/10"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: index * 0.3 }}
            />
          </div>
          <div className="space-y-2 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-accent-200">{cert.year}</p>
            <h3 className="font-display text-2xl text-white">{cert.title}</h3>
            <p className="text-sm text-muted">Issued by {cert.issuedBy}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certificates;


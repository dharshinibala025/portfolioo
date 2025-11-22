import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { certificates } from '../data/content';

const Certificates = () => {
  const [clickedCard, setClickedCard] = useState(null);

  return (
    <section>
      <PageHeader
        eyebrow="Certifications"
        title="Workshop on large language model in Generative AI"
        description="Each certificate represents a milestone in AI, cloud, or design craft. Click to see the glow animation."
      />
      <div className="rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setClickedCard(clickedCard === cert.id ? null : cert.id)}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 cursor-pointer transition-all duration-300"
              style={{
                borderColor: clickedCard === cert.id ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
                boxShadow: clickedCard === cert.id 
                  ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)' 
                  : 'none',
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: clickedCard === cert.id ? [0, 1, 0.6] : 0,
                  scale: clickedCard === cert.id ? [0.8, 1.1, 1] : 0.8,
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <img src={cert.image} alt={cert.title} className="h-full w-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
                <motion.span
                  className="absolute inset-0 border border-white/10"
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
      </div>
    </section>
  );
};

export default Certificates;


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { certificates } from '../data/content';

const Certificates = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section>
      <PageHeader
        eyebrow="Recognitions"
        title="Skill Credentials"
        description="Completed recognized technical certifications that validate my skills in programming and AI workflows."
      />
      <div className="rounded-3xl border border-white/10 bg-black/20 p-4 md:p-6">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(cert.image)}
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
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img src={cert.image} alt={cert.title} className="h-full w-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
                <motion.span
                  className="absolute inset-0 border border-white/10"
                  animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>
              <div className="space-y-2 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-accent-200">{cert.year}</p>
                <h3 className="font-display text-xl text-white">{cert.title}</h3>
                <p className="text-sm text-muted">Issued by {cert.issuedBy}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section >
  );
};

export default Certificates;


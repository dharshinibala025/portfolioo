import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { certificates } from '../data/content';
import GsapReveal from '../components/GsapReveal';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <section className="relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(196, 31, 216, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(196, 31, 216, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(196, 31, 216, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <GsapReveal>
        <PageHeader
          eyebrow="Recognitions"
          title="Skill Credentials"
          description="Completed recognized technical certifications that validate my skills in programming and AI workflows."
        />
      </GsapReveal>

      <GsapReveal delay={0.2}>
        <div className="relative rounded-3xl border border-white/10 bg-black/20 p-4 md:p-8 backdrop-blur-sm">
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                }
              }
            }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth entrance
                    }
                  }
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onHoverStart={() => setHoveredCard(cert.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelectedImage(cert.image)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-black/30 to-black/40 cursor-pointer"
                style={{
                  boxShadow: hoveredCard === cert.id
                    ? '0 20px 60px rgba(196, 31, 216, 0.4), 0 0 40px rgba(196, 31, 216, 0.2)'
                    : '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={hoveredCard === cert.id ? {
                    x: '100%',
                    opacity: [0, 1, 0],
                  } : {}}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                />

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  animate={hoveredCard === cert.id ? {
                    boxShadow: [
                      '0 0 0px rgba(196, 31, 216, 0)',
                      '0 0 20px rgba(196, 31, 216, 0.6)',
                      '0 0 0px rgba(196, 31, 216, 0)',
                    ],
                  } : {}}
                  transition={{ duration: 1.5, repeat: hoveredCard === cert.id ? Infinity : 0 }}
                />

                {/* Certificate Image */}
                <div className="relative h-52 overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />

                  {/* Floating badge animation */}
                  <motion.div
                    className="absolute top-4 right-4 bg-accent-500/20 backdrop-blur-md rounded-full px-3 py-1 border border-accent-400/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <span className="text-xs font-semibold text-accent-200">{cert.year}</span>
                  </motion.div>

                  {/* Particle effect on hover */}
                  {hoveredCard === cert.id && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-accent-400 rounded-full"
                          initial={{
                            x: '50%',
                            y: '50%',
                            opacity: 0,
                          }}
                          animate={{
                            x: `${50 + (Math.random() - 0.5) * 100}%`,
                            y: `${50 + (Math.random() - 0.5) * 100}%`,
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: 1 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* Content */}
                <motion.div
                  className="relative space-y-3 p-5"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.h3
                    className="font-display text-xl text-white leading-tight"
                    animate={hoveredCard === cert.id ? {
                      x: [0, 2, 0],
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-muted flex items-center gap-2"
                    animate={hoveredCard === cert.id ? {
                      x: [0, 2, 0],
                    } : {}}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Issued by {cert.issuedBy}
                  </motion.p>

                  {/* View certificate hint */}
                  <motion.div
                    className="flex items-center gap-2 text-xs text-accent-300/70 pt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === cert.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Click to view</span>
                  </motion.div>
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 bg-accent-500/10 rounded-tl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={hoveredCard === cert.id ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </GsapReveal>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border-2 border-accent-400/40 bg-black/95 shadow-2xl"
              style={{
                boxShadow: '0 0 80px rgba(196, 31, 216, 0.5), 0 0 40px rgba(196, 31, 216, 0.3)',
              }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(196, 31, 216, 0.3)',
                    '0 0 40px rgba(196, 31, 216, 0.6)',
                    '0 0 20px rgba(196, 31, 216, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/80 p-3 text-white/80 backdrop-blur-md transition-all hover:bg-accent-500/30 hover:text-white border border-white/20 hover:border-accent-400/50"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              <motion.img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-h-[85vh] w-auto object-contain"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;

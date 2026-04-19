import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { certificates } from '../data/content';
import GsapReveal from '../components/GsapReveal';
import CertificateCard from '../components/CertificateCard';

const Certificates = () => {
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
      <GsapReveal>
        <PageHeader
          eyebrow="Recognitions"
          title="Skill Credentials"
          description="Completed recognized technical certifications that validate my skills in programming and AI workflows."
        />
      </GsapReveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={index}
            onViewClick={setSelectedImage}
          />
        ))}
      </div>


      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg"
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

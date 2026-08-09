import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';

const AccordionGallery = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full my-8">
      {/* ---------------------------------------------------- */}
      {/* Desktop Horizontal Accordion (LG screens) */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:flex flex-row items-stretch gap-4 h-[500px] w-full">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={project.id || index}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              layout
              transition={{
                layout: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
              }}
              className={`relative overflow-hidden rounded-3xl cursor-pointer border transition-colors duration-500 flex flex-col justify-between ${
                isActive
                  ? 'flex-[3.5] border-[#B8893D]/60 shadow-[0_20px_40px_rgba(184,137,61,0.18)]'
                  : 'flex-1 border-stone-200 hover:border-[#B8893D]/40 bg-stone-900/5'
              }`}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 h-full w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-105 filter brightness-[0.85]' : 'scale-100 filter brightness-[0.4] grayscale-[30%]'
                  }`}
                />
                {/* Gradient Dark Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent transition-opacity duration-500 ${
                    isActive ? 'opacity-90' : 'opacity-80'
                  }`}
                />
              </div>

              {/* Top Bar (Index number + Active Badge) */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-900/80 border border-white/10 text-white font-mono text-sm font-bold shadow-md">
                  0{index + 1}
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex gap-2 flex-wrap"
                    >
                      {project.tags?.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-[#B8893D] text-white shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Card Body / Content */}
              <div className="relative z-10 p-6 sm:p-8">
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex flex-col items-start"
                  >
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                      {project.description}
                    </p>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 flex-wrap pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                        >
                          <FaGithub className="text-base" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B8893D] hover:bg-[#966E2E] text-white text-sm font-medium shadow-md transition-all duration-200 hover:scale-105"
                        >
                          <span>Live Demo</span>
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  /* Inactive Card Vertical Title Preview */
                  <div className="h-full flex items-end">
                    <h3 className="font-serif-display text-xl font-bold text-white/80 uppercase tracking-wider writing-vertical rotate-180 transition-colors group-hover:text-white">
                      {project.title}
                    </h3>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ---------------------------------------------------- */}
      {/* Mobile Vertical Accordion (Under LG screens) */}
      {/* ---------------------------------------------------- */}
      <div className="flex lg:hidden flex-col gap-4 w-full">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={project.id || index}
              onClick={() => setActiveIndex(index)}
              layout
              className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'border-[#B8893D] shadow-lg bg-stone-950 text-white'
                  : 'border-stone-200 bg-stone-900 text-white/90'
              }`}
            >
              {/* Header Bar */}
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#B8893D] text-white text-xs font-bold font-mono">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif-display text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <FaChevronRight
                  className={`text-stone-400 text-sm transition-transform duration-300 ${
                    isActive ? 'rotate-90 text-[#B8893D]' : 'rotate-0'
                  }`}
                />
              </div>

              {/* Expanded Card Body */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-stone-800"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                    </div>

                    <div className="p-5 flex flex-col items-start">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags?.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#B8893D]/20 text-[#B8893D] border border-[#B8893D]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-stone-300 text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 w-full flex-wrap pt-1">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-stone-800 border border-stone-700 text-white text-xs font-medium"
                          >
                            <FaGithub className="text-sm" />
                            <span>GitHub</span>
                          </a>
                        )}

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#B8893D] text-white text-xs font-medium shadow-sm"
                          >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionGallery;

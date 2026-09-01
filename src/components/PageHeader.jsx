import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const PageHeader = ({ eyebrow, title, description, trailing, centered = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-8 mt-2 flex flex-col gap-3 ${centered ? 'text-center items-center' : 'lg:flex-row lg:items-end lg:justify-between'}`}
  >
    <div className={centered ? 'max-w-2xl mx-auto' : ''}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8893D]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8893D]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#171717] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
          {description}
        </p>
      )}
    </div>
    {trailing}
  </motion.div>
);

export default PageHeader;








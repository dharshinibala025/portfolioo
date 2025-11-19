import { motion } from 'framer-motion';

const PageHeader = ({ eyebrow, title, description, trailing }) => (
  <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
    <div>
      {eyebrow && (
        <span className="mb-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-muted">
          {eyebrow}
        </span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl text-white md:text-5xl"
      >
        {title}
      </motion.h1>
      {description && <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>}
    </div>
    {trailing}
  </div>
);

export default PageHeader;








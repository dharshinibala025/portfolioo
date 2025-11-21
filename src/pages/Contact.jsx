import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { personalInfo, socials } from '../data/content';

const Contact = () => {
  const [clickedBox, setClickedBox] = useState(null);

  return (
  <section>
    <PageHeader
      eyebrow="Contact"
      title="Let’s build bold experiences together"
      description="Whether it’s collaborating on AI storytelling, crafting immersive UI, or mentoring, my inbox is always open. Drop a note and I’ll respond thoughtfully."
    />
    <div className="grid gap-8 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => setClickedBox(clickedBox === 'contact' ? null : 'contact')}
        className="relative space-y-6 rounded-3xl border border-white/10 bg-black/30 p-8 cursor-pointer transition-all duration-300"
        style={{
          borderColor: clickedBox === 'contact' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
          boxShadow: clickedBox === 'contact' 
            ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)' 
            : 'none',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: clickedBox === 'contact' ? [0, 1, 0.6] : 0,
            scale: clickedBox === 'contact' ? [0.8, 1.1, 1] : 0.8,
          }}
          transition={{ duration: 0.5 }}
        />
        <div className="relative z-10">
        <h3 className="font-display text-2xl text-white">Get In Touch</h3>
        <p className="text-muted">
          Prefer email? Reach me at{' '}
          <a href={`mailto:${personalInfo.email}`} className="text-accent-300 underline">
            {personalInfo.email}
          </a>
        </p>
        <div className="space-y-2 text-sm text-muted">
          <p>Location: {personalInfo.location}</p>
          <p>Available for internships, remote collabs, hackathons.</p>
        </div>
        <div className="pt-4">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Socials</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-accent-300 hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        </div>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => setClickedBox(clickedBox === 'form' ? null : 'form')}
        className="relative space-y-4 rounded-3xl border border-white/10 bg-black/30 p-8 cursor-pointer transition-all duration-300"
        style={{
          borderColor: clickedBox === 'form' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
          boxShadow: clickedBox === 'form' 
            ? '0 0 30px rgba(196, 31, 216, 0.6), inset 0 0 30px rgba(196, 31, 216, 0.1)' 
            : 'none',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-accent-400 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: clickedBox === 'form' ? [0, 1, 0.6] : 0,
            scale: clickedBox === 'form' ? [0.8, 1.1, 1] : 0.8,
          }}
          transition={{ duration: 0.5 }}
        />
        <div className="relative z-10">
        <div>
          <label className="text-sm text-muted" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60"
          />
        </div>
        <div>
          <label className="text-sm text-muted" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60"
          />
        </div>
        <div>
          <label className="text-sm text-muted" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your idea…"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-2xl bg-accent-500 py-3 font-semibold text-white shadow-glow transition hover:bg-accent-400"
        >
          Send Message
        </button>
        <p className="text-center text-xs text-muted">
          This form is a visual prototype. Connect via email while I integrate backend automation.
        </p>
        </div>
      </motion.form>
    </div>
  </section>
  );
};

export default Contact;


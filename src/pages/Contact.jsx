import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader';
import { personalInfo, socials } from '../data/content';

const Contact = () => {
  const formRef = useRef();
  const [clickedBox, setClickedBox] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_vxmn8w7';
    const TEMPLATE_ID = 'template_vhf5fu4';
    const PUBLIC_KEY = 'J2NqGKE7aoCuap0Ru';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setIsSending(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again or email directly.");
        setIsSending(false);
      });
  };

  return (
    <section>
      <PageHeader
        eyebrow="ReachOut"
        description={
          <>
            Open to new projects, conversations, and collaborations.
            <br />
            Drop me a line below.
          </>
        }
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
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
              <div className="mt-3 flex flex-wrap gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10, color: '#d946ef' }}
                    className="text-2xl text-white/70 transition-colors hover:text-accent-300"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
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
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-2xl text-white">Message Sent!</h3>
                <p className="text-muted">
                  Thanks for reaching out, {formData.name}.<br />
                  We'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm text-accent-300 hover:text-accent-200 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-muted" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your idea…"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full rounded-2xl bg-accent-500 py-3 font-semibold text-white shadow-glow transition hover:bg-accent-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


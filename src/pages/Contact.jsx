import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader';
import { personalInfo, socials } from '../data/content';
import GsapReveal from '../components/GsapReveal';

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-400/40 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            boxShadow: '0 0 8px rgba(196, 31, 216, 0.4)',
          }}
        />
      ))}
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [clickedBox, setClickedBox] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
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
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again or email directly.");
        setIsSending(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, y: "100%", transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative"
    >
      {/* Floating Particles Background */}
      <FloatingParticles />

      <motion.div variants={itemVariants}>
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
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info Card */}
        <motion.div
          onClick={() => setClickedBox(clickedBox === 'contact' ? null : 'contact')}
          whileHover={{ y: -5, scale: 1.02 }}
          animate={{
            borderColor: clickedBox === 'contact' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: clickedBox === 'contact'
              ? ['0 0 20px rgba(196, 31, 216, 0.4), inset 0 0 10px rgba(196, 31, 216, 0.1)', '0 0 40px rgba(196, 31, 216, 0.8), inset 0 0 30px rgba(196, 31, 216, 0.2)', '0 0 20px rgba(196, 31, 216, 0.4), inset 0 0 10px rgba(196, 31, 216, 0.1)']
              : '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
          transition={{
            duration: 0.3,
            boxShadow: {
              duration: 2,
              repeat: clickedBox === 'contact' ? Infinity : 0,
              ease: "easeInOut"
            }
          }}
          className="relative space-y-6 rounded-3xl border bg-black/30 p-8 cursor-pointer backdrop-blur-sm overflow-hidden"
        >
          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: '-100%' }}
            animate={clickedBox === 'contact' ? {
              x: '100%',
              opacity: [0, 0.5, 0],
            } : {}}
            transition={{ duration: 1.5 }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(196, 31, 216, 0.3), transparent)',
            }}
          />

          {/* Removed inner pulsing border to fix radius misalignment */}

          <div className="relative z-10">
            <motion.h3
              className="font-display text-2xl text-white mb-4"
              animate={clickedBox === 'contact' ? { x: [0, 3, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              Get In Touch
            </motion.h3>

            <motion.p
              className="text-muted"
              animate={clickedBox === 'contact' ? { x: [0, 3, 0] } : {}}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              Prefer email? Reach me at{' '}
              <a href={`mailto:${personalInfo.email}`} className="text-accent-300 underline hover:text-accent-200 transition-colors">
                {personalInfo.email}
              </a>
            </motion.p>

            <div className="space-y-2 text-sm text-muted mt-4">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                📍 Location: {personalInfo.location}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                💼 Available for internships, remote collabs, hackathons.
              </motion.p>
            </div>

            <div className="pt-6">
              <p className="text-xs uppercase tracking-[0.35em] text-muted mb-3">Socials</p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial="hidden"
                animate="visible"
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
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative text-3xl text-white/70 transition-colors hover:text-accent-300"
                  >
                    <social.icon />
                    {/* Icon glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent-400/30 blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Corner decoration */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 bg-accent-500/10 rounded-tl-full"
            initial={{ scale: 0 }}
            animate={clickedBox === 'contact' ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          onClick={() => setClickedBox(clickedBox === 'form' ? null : 'form')}
          whileHover={{ y: -5, scale: 1.02 }}
          animate={{
            borderColor: clickedBox === 'form' ? 'rgba(196, 31, 216, 0.8)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: clickedBox === 'form'
              ? ['0 0 20px rgba(196, 31, 216, 0.4), inset 0 0 10px rgba(196, 31, 216, 0.1)', '0 0 40px rgba(196, 31, 216, 0.8), inset 0 0 30px rgba(196, 31, 216, 0.2)', '0 0 20px rgba(196, 31, 216, 0.4), inset 0 0 10px rgba(196, 31, 216, 0.1)']
              : '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
          transition={{
            duration: 0.3,
            boxShadow: {
              duration: 2,
              repeat: clickedBox === 'form' ? Infinity : 0,
              ease: "easeInOut"
            }
          }}
          className="relative space-y-4 rounded-3xl border bg-black/30 p-8 backdrop-blur-sm overflow-hidden"
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: '-100%' }}
            animate={clickedBox === 'form' ? {
              x: '100%',
              opacity: [0, 0.5, 0],
            } : {}}
            transition={{ duration: 1.5 }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(196, 31, 216, 0.3), transparent)',
            }}
          />

          {/* Removed inner pulsing border to fix radius misalignment */}

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  {/* Success Icon with animation */}
                  <motion.div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-500/20 text-accent-400 relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-10 w-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>

                    {/* Pulsing rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-accent-400"
                      animate={{
                        scale: [1, 1.5, 1.8],
                        opacity: [0.8, 0.3, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-accent-400"
                      animate={{
                        scale: [1, 1.5, 1.8],
                        opacity: [0.8, 0.3, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                  </motion.div>

                  <motion.h3
                    className="mb-3 font-display text-3xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Message Sent!
                  </motion.h3>

                  <motion.p
                    className="text-muted"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Thanks for reaching out!<br />
                    We'll get back to you soon.
                  </motion.p>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSubmitted(false);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-2 rounded-full bg-accent-500/20 text-accent-300 hover:bg-accent-500/30 transition-colors border border-accent-400/30"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="text-sm text-muted flex items-center gap-2" htmlFor="name">
                      <span>Name</span>
                      {focusedField === 'name' && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-accent-400 text-xs"
                        >
                          ✨
                        </motion.span>
                      )}
                    </label>
                    <motion.input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Your name"
                      autoComplete="name"
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60"
                      style={{
                        boxShadow: focusedField === 'name' ? '0 0 20px rgba(196, 31, 216, 0.3)' : 'none',
                      }}
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="text-sm text-muted flex items-center gap-2" htmlFor="email">
                      <span>Email</span>
                      {focusedField === 'email' && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-accent-400 text-xs"
                        >
                          ✨
                        </motion.span>
                      )}
                    </label>
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="you@email.com"
                      autoComplete="email"
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60"
                      style={{
                        boxShadow: focusedField === 'email' ? '0 0 20px rgba(196, 31, 216, 0.3)' : 'none',
                      }}
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="text-sm text-muted flex items-center gap-2" htmlFor="message">
                      <span>Message</span>
                      {focusedField === 'message' && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-accent-400 text-xs"
                        >
                          ✨
                        </motion.span>
                      )}
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Tell me about your idea…"
                      whileFocus={{ scale: 1.02 }}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60 resize-none"
                      style={{
                        boxShadow: focusedField === 'message' ? '0 0 20px rgba(196, 31, 216, 0.3)' : 'none',
                      }}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 30px rgba(196, 31, 216, 0.5)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="relative w-full rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 py-3.5 font-semibold text-white shadow-glow transition disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {/* Button shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            ⏳
                          </motion.span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

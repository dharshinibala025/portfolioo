import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Check, ArrowUpRight, Copy, Globe, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader';
import { personalInfo, socials } from '../data/content';
import GsapReveal from '../components/GsapReveal';

const Contact = () => {
  const formRef = useRef();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = 'service_vxmn8w7';
    const TEMPLATE_ID = 'template_vhf5fu4';
    const PUBLIC_KEY = 'J2NqGKE7aoCuap0Ru';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSubmitted(true);
        setIsSending(false);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again or email directly.");
        setIsSending(false);
      });
  };

  return (
    <section className="relative py-12">
      <GsapReveal>
        <PageHeader
          eyebrow="Contact"
          title="Get in Touch"
          description="Feel free to reach out directly via email, connect on professional networks, or leave a quick message."
        />
      </GsapReveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
        
        {/* Left: Executive Direct Contact Cards (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">

          {/* Primary Email Executive Card */}
          <div className="rounded-3xl border border-[#ECE7DE] bg-gradient-to-br from-white via-[#FCFBF8] to-[#F6F2EA] p-6 sm:p-8 shadow-[0_10px_30px_rgba(23,23,23,0.02)] space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B8893D] flex items-center gap-2">
                <Mail size={15} /> Primary Contact
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Roles
              </span>
            </div>

            <div>
              <span className="text-xs text-[#6B7280] block mb-1">Direct Email Address</span>
              <h3 className="font-serif-display font-bold text-lg sm:text-xl text-[#1E1E1E] break-all">
                {personalInfo.email}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1E1E1E] hover:bg-[#B8893D] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 shadow-sm cursor-pointer"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#ECE7DE] bg-white px-4 py-2.5 text-xs font-semibold text-[#1E1E1E] hover:border-[#B8893D] hover:text-[#B8893D] transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Location & Professional Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#ECE7DE] bg-white/80 p-5 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-[#B8893D] text-xs font-semibold uppercase tracking-wider">
                <MapPin size={14} /> Location
              </div>
              <p className="font-semibold text-sm text-[#1E1E1E]">
                {personalInfo.location}
              </p>
            </div>

            <div className="rounded-2xl border border-[#ECE7DE] bg-white/80 p-5 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-[#B8893D] text-xs font-semibold uppercase tracking-wider">
                <Briefcase size={14} /> Focus Area
              </div>
              <p className="font-semibold text-sm text-[#1E1E1E]">
                Software Development
              </p>
            </div>
          </div>

          {/* Professional Networks */}
          <div className="rounded-3xl border border-[#ECE7DE] bg-white p-6 shadow-sm space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B8893D] block">
              Professional Networks
            </span>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl border border-[#ECE7DE] bg-[#FCFBF8] px-4 py-2.5 text-xs font-semibold text-[#1E1E1E] hover:border-[#B8893D] hover:bg-white hover:text-[#B8893D] transition-all shadow-sm"
                  >
                    <Icon size={16} />
                    <span>{social.label}</span>
                    <ArrowUpRight size={12} className="opacity-40" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right: Optional Lightweight Message Box (6 Cols) */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-[#ECE7DE] bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(23,23,23,0.02)]">
            
            <div className="mb-6">
              <h3 className="font-serif-display text-xl font-bold text-[#1E1E1E]">
                Leave a Note <span className="text-xs font-normal text-[#6B7280] font-sans ml-1">(Optional)</span>
              </h3>
              <p className="text-xs text-[#6B7280] mt-1">
                If you prefer to send a message directly from the website, fill in any details below.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-10 text-center space-y-3"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={24} />
                  </div>
                  <h4 className="font-serif-display text-xl font-bold text-[#1E1E1E]">
                    Message Sent
                  </h4>
                  <p className="text-xs text-[#6B7280] max-w-xs mx-auto leading-relaxed">
                    Thank you. Your message has been received and Dharshini will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-[#B8893D] hover:underline cursor-pointer"
                  >
                    Send another note →
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#1E1E1E] mb-1.5">
                      Name <span className="text-[#9CA3AF] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#ECE7DE] bg-[#FAF8F3]/50 px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#9CA3AF] transition-all focus:border-[#B8893D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#B8893D]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#1E1E1E] mb-1.5">
                      Email Address <span className="text-[#9CA3AF] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl border border-[#ECE7DE] bg-[#FAF8F3]/50 px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#9CA3AF] transition-all focus:border-[#B8893D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#B8893D]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#1E1E1E] mb-1.5">
                      Message <span className="text-[#9CA3AF] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message or note..."
                      className="w-full rounded-xl border border-[#ECE7DE] bg-[#FAF8F3]/50 px-4 py-3 text-sm text-[#1E1E1E] placeholder-[#9CA3AF] transition-all focus:border-[#B8893D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#B8893D] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8893D] hover:bg-[#966E2E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 cursor-pointer disabled:opacity-50 shadow-sm"
                  >
                    <span>{isSending ? 'Sending Note...' : 'Send Message'}</span>
                    {!isSending && <Send size={14} />}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

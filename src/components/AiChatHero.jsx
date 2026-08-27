import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Bot, User, ExternalLink, Code, Award, Target, MessageSquare, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { personalInfo, projects, heroStats, skills, frameworks, tools, journeyMoments } from '../data/content';
import CircularTextBadge from './CircularTextBadge';

const PROMPT_SUGGESTIONS = [
  { id: 'projects', label: '⚡ Show me her projects', query: 'Show me her projects' },
  { id: 'stack', label: '🛠️ What\'s her tech stack?', query: 'What is her tech stack?' },
  { id: 'background', label: '🎯 What\'s her background & vision?', query: 'What is her background and vision?' },
];

const AiChatHero = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activePrompt, setActivePrompt] = useState(null);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom of response card on new messages
  useEffect(() => {
    if (messages.length > 0) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, isTyping]);

  const handleQuerySubmit = (queryText) => {
    const text = queryText || inputQuery;
    if (!text.trim() || isTyping) return;

    const userMessage = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsTyping(true);

    // Analyze intent from prompt text
    const lower = text.toLowerCase();

    setTimeout(() => {
      let botResponse = {};

      if (lower.includes('project') || lower.includes('build') || lower.includes('work') || lower.includes('show')) {
        botResponse = {
          type: 'projects',
          text: "Here are Dharshini's featured projects shipped with React, Python, Streamlit, and Full-Stack tools:",
          data: projects,
        };
      } else if (lower.includes('tech') || lower.includes('stack') || lower.includes('skill') || lower.includes('language')) {
        botResponse = {
          type: 'stack',
          text: "Dharshini specializes in full-stack engineering and Generative AI tools. Here is her core technical matrix:",
          data: { skills, frameworks, tools },
        };
      } else if (lower.includes('background') || lower.includes('vision') || lower.includes('who') || lower.includes('about') || lower.includes('education')) {
        botResponse = {
          type: 'background',
          text: "Dharshini is a Computer Science Engineering student (CGPA 8.16) passionate about human-centered AI and intelligent web apps.",
          data: { personalInfo, journeyMoments, heroStats },
        };
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('hire')) {
        botResponse = {
          type: 'contact',
          text: `You can reach Dharshini directly via email at ${personalInfo.email} or connect on social platforms:`,
          data: personalInfo,
        };
      } else {
        // Fallback natural language answer
        botResponse = {
          type: 'general',
          text: `Dharshini is a ${personalInfo.title} based in ${personalInfo.location}. She has shipped ${heroStats[1].value} projects and maintains a ${journeyMoments[2].description.split('cgpa-')[1] || '8.16 CGPA'}.`,
          data: personalInfo,
        };
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', ...botResponse },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleChipClick = (suggestion) => {
    setActivePrompt(suggestion.id);
    handleQuerySubmit(suggestion.query);
  };

  const handleReset = () => {
    setMessages([]);
    setActivePrompt(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto pt-6 pb-12">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9A7B4F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Header Container */}
      <div className="relative text-center space-y-4 mb-8">
        {/* Prominent Circular Badge in Left Corner */}
        <div className="flex justify-start md:absolute md:-top-4 md:left-0 lg:-left-12 z-30 mb-4 md:mb-0">
          <CircularTextBadge
            text="DREAM BIG • WORK HARD • SUCCEED •"
            dotColor="#9A7B4F"
            bgColor="#F6F2EA"
            textColor="#171717"
            size={125}
            isRotating={false}
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#9A7B4F]/30 bg-[#9A7B4F]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#9A7B4F]"
        >
          <Sparkles size={14} className="animate-spin-slow text-[#9A7B4F]" />
          <span>Software Developer & Computer Science Student</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717]"
        >
          Ask Dharshini <span className="italic text-[#9A7B4F]">Anything.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#6B6B6B] max-w-xl mx-auto font-normal leading-relaxed"
        >
          An interactive conversational interface into Dharshini's code, projects, skills, and AI vision.
        </motion.p>
      </div>

      {/* Interactive AI Prompt Bar Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-20 rounded-3xl border border-[#ECE7DE] bg-white/90 p-4 sm:p-6 shadow-[0_20px_50px_rgba(23,23,23,0.06)] backdrop-blur-2xl transition-all duration-300 focus-within:border-[#9A7B4F] focus-within:shadow-[0_20px_60px_rgba(154,123,79,0.15)]"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleQuerySubmit();
          }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#9A7B4F]/10 text-[#9A7B4F]">
            <Bot size={22} />
          </div>

          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask me who Dharshini is, or pick a prompt below..."
            className="w-full bg-transparent text-sm sm:text-base text-[#171717] placeholder-[#8A8A8A] focus:outline-none font-medium"
          />

          <button
            type="submit"
            disabled={!inputQuery.trim() || isTyping}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#171717] px-5 text-xs sm:text-sm font-semibold text-[#FCFBF8] transition-all hover:bg-[#9A7B4F] disabled:opacity-40 disabled:hover:bg-[#171717]"
          >
            <span>Ask</span>
            <Send size={15} />
          </button>
        </form>

        {/* Suggestion Chips */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 border-t border-[#ECE7DE]">
          <span className="text-xs text-[#8A8A8A] font-medium mr-1 flex items-center gap-1">
            <Sparkles size={12} className="text-[#9A7B4F]" /> Suggested:
          </span>

          {PROMPT_SUGGESTIONS.map((suggestion) => {
            const isSelected = activePrompt === suggestion.id;
            return (
              <button
                key={suggestion.id}
                onClick={() => handleChipClick(suggestion)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#9A7B4F] bg-[#9A7B4F] text-[#FCFBF8] shadow-md'
                    : 'border-[#ECE7DE] bg-[#FCFBF8] text-[#171717] hover:border-[#9A7B4F]/50 hover:bg-[#ECE7DE]/50'
                }`}
              >
                {suggestion.label}
              </button>
            );
          })}

          {messages.length > 0 && (
            <button
              onClick={handleReset}
              className="ml-auto text-xs text-[#8A8A8A] hover:text-[#171717] flex items-center gap-1 transition-colors"
              title="Clear conversation"
            >
              <RotateCcw size={12} /> Clear
            </button>
          )}
        </div>
      </motion.div>

      {/* AI Conversation Output Container */}
      <AnimatePresence>
        {(messages.length > 0 || isTyping) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 space-y-4"
          >
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#9A7B4F] text-[#FCFBF8] shadow-md mt-1">
                    <Bot size={18} />
                  </div>
                )}

                <div
                  className={`max-w-2xl rounded-3xl p-5 shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#171717] text-[#FCFBF8] font-medium text-sm rounded-tr-none'
                      : 'bg-white border border-[#ECE7DE] text-[#171717] rounded-tl-none w-full'
                  }`}
                >
                  {msg.sender === 'user' ? (
                    <p>{msg.text}</p>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-[#171717] leading-relaxed">
                        {msg.text}
                      </p>

                      {/* Render Rich Interactive Inline Answer Cards based on response type */}

                      {/* 1. Projects Cards */}
                      {msg.type === 'projects' && (
                        <div className="grid gap-3 sm:grid-cols-2 pt-2">
                          {msg.data.map((proj) => (
                            <div
                              key={proj.id}
                              className="group relative rounded-2xl border border-[#ECE7DE] bg-[#FCFBF8] p-4 transition-all duration-300 hover:border-[#9A7B4F] hover:shadow-md"
                            >
                              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 mb-3">
                                <img
                                  src={proj.image}
                                  alt={proj.title}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                              <h4 className="font-serif-display font-bold text-base text-[#171717]">
                                {proj.title}
                              </h4>
                              <p className="text-xs text-[#6B6B6B] mt-1 line-clamp-2">
                                {proj.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                {proj.tags.map((t) => (
                                  <span key={t} className="rounded-md bg-[#ECE7DE] px-2 py-0.5 text-[10px] font-medium text-[#171717]">
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#ECE7DE] text-xs font-semibold">
                                <a
                                  href={proj.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[#9A7B4F] hover:underline"
                                >
                                  Live Demo <ExternalLink size={12} />
                                </a>
                                <a
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[#6B6B6B] hover:text-[#171717]"
                                >
                                  Code <FaGithub size={12} />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 2. Tech Stack Pill Matrix */}
                      {msg.type === 'stack' && (
                        <div className="space-y-4 pt-2">
                          <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#9A7B4F]">Languages</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {msg.data.skills.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <span key={item.name} className="inline-flex items-center gap-1.5 rounded-xl border border-[#ECE7DE] bg-[#FCFBF8] px-3 py-1.5 text-xs font-medium text-[#171717] hover:border-[#9A7B4F]">
                                    <Icon size={14} className="text-[#9A7B4F]" /> {item.name}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#9A7B4F]">Frameworks & Web</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {msg.data.frameworks.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <span key={item.name} className="inline-flex items-center gap-1.5 rounded-xl border border-[#ECE7DE] bg-[#FCFBF8] px-3 py-1.5 text-xs font-medium text-[#171717] hover:border-[#9A7B4F]">
                                    <Icon size={14} className="text-[#9A7B4F]" /> {item.name}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#9A7B4F]">Tools & Environments</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {msg.data.tools.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <span key={item.name} className="inline-flex items-center gap-1.5 rounded-xl border border-[#ECE7DE] bg-[#FCFBF8] px-3 py-1.5 text-xs font-medium text-[#171717] hover:border-[#9A7B4F]">
                                    <Icon size={14} className="text-[#9A7B4F]" /> {item.name}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}



                      {/* 4. Background & Vision */}
                      {msg.type === 'background' && (
                        <div className="space-y-3 pt-2">
                          <div className="rounded-2xl border border-[#ECE7DE] bg-[#FCFBF8] p-4 space-y-2">
                            <h5 className="font-serif-display font-bold text-sm text-[#171717]">Academic Journey</h5>
                            <p className="text-xs text-[#6B6B6B]">
                              B.E Computer Science & Engineering at <strong>K.S.R. College of Engineering</strong> (2024 - 2028).
                            </p>
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#9A7B4F]/10 px-3 py-1 text-xs font-semibold text-[#9A7B4F]">
                              <CheckCircle2 size={12} /> CGPA: 8.16 (up to 2nd Sem)
                            </div>
                          </div>

                          <div className="rounded-2xl border border-[#ECE7DE] bg-[#FCFBF8] p-4 space-y-2">
                            <h5 className="font-serif-display font-bold text-sm text-[#171717]">AI Research & Development Goal</h5>
                            <p className="text-xs text-[#6B6B6B] leading-relaxed">
                              Dharshini focuses on building human-centered AI systems, combining GenAI APIs (LLMs, Streamlit, Python) with responsive web architectures.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 5. Contact Response */}
                      {msg.type === 'contact' && (
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <a
                            href={`mailto:${msg.data.email}`}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#9A7B4F] px-4 py-2 text-xs font-semibold text-[#FCFBF8] shadow-md hover:bg-[#6E532D]"
                          >
                            Send Email ({msg.data.email})
                          </a>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 rounded-xl border border-[#ECE7DE] px-4 py-2 text-xs font-semibold text-[#171717] hover:border-[#9A7B4F]"
                          >
                            Open Contact Form <ArrowRight size={12} />
                          </a>
                        </div>
                      )}

                      {/* Direct CTA shortcut to full section */}
                      <div className="pt-2 border-t border-[#ECE7DE]/50 flex items-center justify-between text-[11px] text-[#8A8A8A]">
                        <span>Want full details?</span>
                        <a
                          href={`#${msg.type === 'stack' ? 'skills' : msg.type || 'about'}`}
                          className="font-semibold text-[#9A7B4F] hover:underline inline-flex items-center gap-1"
                        >
                          Jump to section <ArrowRight size={10} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#171717] text-[#FCFBF8] shadow-md mt-1">
                    <User size={18} />
                  </div>
                )}
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#9A7B4F] text-[#FCFBF8]">
                  <Bot size={18} />
                </div>
                <div className="rounded-2xl border border-[#ECE7DE] bg-white px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-[#8A8A8A] font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#9A7B4F] animate-ping" />
                    <span>Dharshini is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AiChatHero;

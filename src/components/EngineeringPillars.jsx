import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Brain, Database, Code, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

const PILLARS = [
  {
    id: 'backend',
    title: 'Backend Engineering & REST APIs',
    subtitle: 'Scalable Services & Auth Systems',
    icon: Server,
    color: '#9A7B4F',
    bg: '#FAF6F0',
    description: 'Specialized in crafting robust, asynchronous Node.js & Express backends. Experience building JWT-authenticated, role-based Hostel Management Systems and real-time API endpoints.',
    stack: ['Node.js', 'Express.js', 'REST APIs', 'JWT Security', 'Mongoose ORM'],
    metrics: [
      { label: 'Architecture', value: 'RESTful Modular' },
      { label: 'Auth Model', value: 'JWT & RBAC' },
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI & Prompt Engineering',
    subtitle: 'LLMs, AI APIs & NLP Pipelines',
    icon: Brain,
    color: '#8E44AD',
    bg: '#FAF4FC',
    description: 'Certified by AICTE EduSkills and Infosys in Generative AI. Skilled in prompt optimization, LLM API integration, NLP chatbot logic, and AI-driven web utility generation.',
    stack: ['Prompt Engineering', 'LLM APIs', 'NLP Chatbots', 'AICTE Certified'],
    metrics: [
      { label: 'Specialization', value: 'LLM Prompt Design' },
      { label: 'Certification', value: 'AICTE EduSkills' },
    ],
  },
  {
    id: 'database',
    title: 'Database Architecture & Modeling',
    subtitle: 'NoSQL Schemas & Relational Data',
    icon: Database,
    color: '#27AE60',
    bg: '#F0F9F3',
    description: 'Proficient in designing scalable MongoDB schemas with indexing and data validation rules, paired with hands-on relational experience in MySQL and lightweight SQLite.',
    stack: ['MongoDB', 'Mongoose', 'MySQL', 'SQLite'],
    metrics: [
      { label: 'NoSQL Engine', value: 'MongoDB Core' },
      { label: 'Relational DB', value: 'MySQL & SQLite' },
    ],
  },
  {
    id: 'core',
    title: 'Core Stack & Object-Oriented Design',
    subtitle: 'Algorithms, Data Structures & Logic',
    icon: Code,
    color: '#2980B9',
    bg: '#F2F8FC',
    description: 'Strong foundation in Java OOP design patterns (Habit Tracker app) and Python logic. Focused on write-once, maintainable clean code and fast algorithm execution.',
    stack: ['Python', 'Java OOP', 'C Algorithms', 'Git & Versioning'],
    metrics: [
      { label: 'Primary Language', value: 'Python & Java' },
      { label: 'Tooling', value: 'Git & Postman' },
    ],
  },
];

const EngineeringPillars = () => {
  const [activePillar, setActivePillar] = useState(PILLARS[0].id);

  return (
    <div className="w-full text-left my-10">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/20 mb-3">
          <Cpu className="w-3.5 h-3.5 text-[#B8893D]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#B8893D]">
            Engineering Focus Areas
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#171717]">
          Core Technical Pillars
        </h3>
        <p className="text-sm sm:text-base text-[#6B6B6B] mt-2 leading-relaxed">
          Hover or tap each engineering domain to explore architectural capabilities, tech stacks, and metrics.
        </p>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PILLARS.map((pillar, index) => {
          const Icon = pillar.icon;
          const isActive = activePillar === pillar.id;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onClick={() => setActivePillar(pillar.id)}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative cursor-pointer group ${
                isActive
                  ? 'bg-white border-[#B8893D] shadow-lg ring-1 ring-[#B8893D]/30'
                  : 'bg-[#FCFBF8] border-[#ECE7DE] hover:border-[#B8893D]/40 hover:bg-white'
              }`}
            >
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: pillar.bg, color: pillar.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#8A8A8A] uppercase tracking-wider">
                    Pillar 0{index + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#B8893D] transition-colors" />
                </div>
              </div>

              {/* Card Titles */}
              <h4 className="text-xl font-serif-display font-bold text-[#171717] mb-1">
                {pillar.title}
              </h4>
              <p className="text-xs font-semibold text-[#B8893D] uppercase tracking-wider mb-3">
                {pillar.subtitle}
              </p>

              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Metrics Pills */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-3 rounded-2xl bg-[#FCFBF8] border border-[#ECE7DE]">
                {pillar.metrics.map((m, i) => (
                  <div key={i}>
                    <span className="text-[10px] uppercase font-semibold text-[#8A8A8A] block">
                      {m.label}
                    </span>
                    <span className="text-xs font-bold text-[#171717]">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#ECE7DE]">
                {pillar.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-[#ECE7DE] text-[#171717] shadow-2xs group-hover:border-[#B8893D]/30 transition"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#B8893D]" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EngineeringPillars;

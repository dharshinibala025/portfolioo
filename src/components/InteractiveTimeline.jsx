import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Sparkles, CheckCircle2, ChevronRight, Calendar, Building2 } from 'lucide-react';
import { personalInfo, internship } from '../data/content';

const MILESTONES = [
  {
    id: 'm-2026-genai',
    year: 'Jan - Mar 2026',
    category: 'certification',
    title: 'Gen AI Virtual Internship',
    organization: 'AICTE EduSkills',
    type: 'Virtual Internship & Certification',
    description: 'Hands-on practical training in Large Language Models (LLMs), prompt engineering, fine-tuning concepts, and building intelligent conversational workflows.',
    tags: ['Generative AI', 'Prompt Engineering', 'LLMs', 'Python', 'AI APIs'],
    highlights: [
      'Mastered zero-shot, few-shot, and chain-of-thought prompt design strategies.',
      'Developed prototype workflows linking LLM endpoints with backend logic.',
      'Evaluated AI output accuracy and safety parameters.',
    ],
    icon: Sparkles,
    badge: 'Latest Certification',
    color: '#8E44AD',
  },
  {
    id: 'm-2025-nptel',
    year: 'Jan - Apr 2025',
    category: 'certification',
    title: 'Internet of Things (IoT) Certification',
    organization: 'NPTEL (IIT)',
    type: 'National Certification',
    description: 'Secured Elite + Silver category with 79% score in comprehensive IoT architecture, sensors, microcontrollers, and network protocols.',
    tags: ['IoT', 'Embedded Systems', 'Sensors', 'Network Protocols'],
    highlights: [
      'Top tier performance (79% Elite+Silver distinction).',
      'Understood hardware-software interfacing and cloud telemetry.',
    ],
    icon: Award,
    badge: 'Elite+Silver (79%)',
    color: '#B8893D',
  },
  {
    id: 'm-2024-internship',
    year: 'Recent Industry Exp',
    category: 'internship',
    title: internship.role,
    organization: internship.company,
    type: 'Industry Internship',
    description: internship.description,
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    highlights: internship.highlights,
    icon: Briefcase,
    badge: 'Industry Experience',
    color: '#27AE60',
  },
  {
    id: 'm-2024-be',
    year: '2024 - 2028',
    category: 'academic',
    title: personalInfo.degree,
    organization: personalInfo.college,
    type: 'Degree Program',
    description: 'Pursuing Bachelor of Engineering in Computer Science & Engineering with focus on core data structures, algorithms, object-oriented design, backend web engineering, and machine learning.',
    tags: ['Computer Science', 'Data Structures', 'Algorithms', 'Java', 'Python', 'DBMS'],
    highlights: [
      `Maintained stellar academic performance: CGPA ${personalInfo.cgpa}.`,
      'Active developer in college tech activities and coding projects.',
    ],
    icon: GraduationCap,
    badge: 'Current Degree',
    color: '#2980B9',
  },
  {
    id: 'm-2022-hsc',
    year: '2022 - 2024',
    category: 'academic',
    title: 'HSC (12th Standard)',
    organization: 'Sri Vidya Mandir Matric HR.Sec, Gurusamipalayam',
    type: 'Higher Secondary',
    description: 'Completed Higher Secondary Education with focus on Mathematics, Physics, Chemistry, and Computer Science.',
    tags: ['Mathematics', 'Computer Science', 'Physics'],
    highlights: [
      `Secured aggregate percentage of ${personalInfo.hsc}.`,
    ],
    icon: GraduationCap,
    badge: '83.5%',
    color: '#D35400',
  },
  {
    id: 'm-2020-sslc',
    year: '2020',
    category: 'academic',
    title: 'SSLC (10th Standard)',
    organization: 'Vivekananda Balamandir Matric School, Attayampatti',
    type: 'Secondary Education',
    description: 'Foundational academic preparation with high honors in Mathematics and Science.',
    tags: ['Foundational Science', 'Mathematics'],
    highlights: [
      `Secured aggregate score of ${personalInfo.sslc}.`,
    ],
    icon: GraduationCap,
    badge: '83.4%',
    color: '#7F8C8D',
  },
];

const InteractiveTimeline = () => {
  const [filter, setFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(MILESTONES[0].id);

  const filteredItems = MILESTONES.filter((m) => {
    if (filter === 'all') return true;
    if (filter === 'internship') return m.category === 'internship' || m.category === 'certification';
    if (filter === 'academic') return m.category === 'academic';
    return true;
  });

  const activeMilestone = MILESTONES.find((m) => m.id === selectedId) || MILESTONES[0];

  return (
    <div className="w-full text-left my-8">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/20 mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#B8893D]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#B8893D]">
              Career & Learning Pathway
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#171717]">
            Interactive Milestones & Impact
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-[#ECE7DE] shadow-xs text-xs font-semibold">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filter === 'all' ? 'bg-[#171717] text-white' : 'text-[#6B6B6B] hover:text-[#171717]'
            }`}
          >
            All Journey
          </button>
          <button
            onClick={() => setFilter('internship')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filter === 'internship' ? 'bg-[#171717] text-white' : 'text-[#6B6B6B] hover:text-[#171717]'
            }`}
          >
            Experience & Certs
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filter === 'academic' ? 'bg-[#171717] text-white' : 'text-[#6B6B6B] hover:text-[#171717]'
            }`}
          >
            Academics
          </button>
        </div>
      </div>

      {/* Main Grid: Left Timeline List (5 cols) + Right Card Details (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Milestone Nodes */}
        <div className="lg:col-span-5 space-y-3 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#ECE7DE]">
          {filteredItems.map((item) => {
            const IconComponent = item.icon;
            const isSelected = item.id === selectedId;

            return (
              <motion.button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={`w-full text-left relative pl-14 pr-5 py-4 rounded-2xl border transition-all duration-300 flex items-start justify-between group ${
                  isSelected
                    ? 'bg-white border-[#B8893D] shadow-md ring-2 ring-[#B8893D]/20'
                    : 'bg-[#FCFBF8] border-[#ECE7DE] hover:border-[#B8893D]/40 hover:bg-white'
                }`}
              >
                {/* Node Marker Dot */}
                <div
                  className={`absolute left-3.5 top-5 w-5 h-5 rounded-full flex items-center justify-center transition-transform ${
                    isSelected ? 'scale-110 shadow-sm text-white' : 'bg-white border border-[#ECE7DE] text-[#6B6B6B]'
                  }`}
                  style={{ backgroundColor: isSelected ? item.color : undefined }}
                >
                  <IconComponent className="w-3 h-3" />
                </div>

                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8A8A8A] block mb-0.5">
                    {item.year}
                  </span>
                  <h4 className="font-bold text-[#171717] text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] truncate max-w-[200px] sm:max-w-[240px]">
                    {item.organization}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0 ml-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.badge}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#B8893D] translate-x-1' : 'text-[#C2C2C2] group-hover:text-[#171717]'
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Selected Milestone Detail Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#ECE7DE] shadow-sm relative overflow-hidden"
            >
              {/* Background Accent glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none opacity-10"
                style={{ backgroundColor: activeMilestone.color }}
              />

              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FCFBF8] border border-[#ECE7DE] text-[#171717]">
                  <Building2 className="w-3.5 h-3.5 text-[#B8893D]" />
                  <span>{activeMilestone.organization}</span>
                </div>
                <span className="text-xs font-medium text-[#8A8A8A]">{activeMilestone.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#171717] mb-2">
                {activeMilestone.title}
              </h3>

              <div className="text-xs font-semibold uppercase tracking-wider text-[#B8893D] mb-4">
                {activeMilestone.type}
              </div>

              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed mb-6">
                {activeMilestone.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-[#ECE7DE]">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Key Highlights & Takeaways:</h5>
                {activeMilestone.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8893D] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech / Competency Badges */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#8A8A8A] mb-2.5">Skills & Competencies:</h5>
                <div className="flex flex-wrap gap-2">
                  {activeMilestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-[#FCFBF8] border border-[#ECE7DE] text-[#171717] hover:border-[#B8893D]/40 transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;

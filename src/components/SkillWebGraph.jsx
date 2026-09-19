import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    skills as languageSkills, 
    frameworks as frameworkSkills, 
    databases as databaseSkills, 
    tools as toolSkills, 
    aiSkills 
} from '../data/content';
import { 
    LayoutGrid, 
    Radar, 
    Sparkles, 
    Code2, 
    Layers, 
    Database, 
    Wrench, 
    Brain,
    CheckCircle2,
    Zap,
    Terminal
} from 'lucide-react';

const SkillWebGraph = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'radar'
    const [hoveredSkill, setHoveredSkill] = useState(null);

    // Combine all skills with categories
    const allSkills = useMemo(() => {
        return [
            ...languageSkills.map(s => ({ ...s, catId: 'languages', catName: 'Languages' })),
            ...frameworkSkills.map(s => ({ ...s, catId: 'frameworks', catName: 'Frameworks & Web' })),
            ...databaseSkills.map(s => ({ ...s, catId: 'databases', catName: 'Databases' })),
            ...toolSkills.map(s => ({ ...s, catId: 'tools', catName: 'Tools & Workflow' })),
            ...aiSkills.map(s => ({ ...s, catId: 'ai', catName: 'AI & LLMs', icon: Brain }))
        ];
    }, []);

    const categories = [
        { id: 'all', label: 'All Stack', icon: LayoutGrid, count: allSkills.length },
        { id: 'languages', label: 'Languages', icon: Code2, count: languageSkills.length },
        { id: 'frameworks', label: 'Frameworks', icon: Layers, count: frameworkSkills.length },
        { id: 'databases', label: 'Databases', icon: Database, count: databaseSkills.length },
        { id: 'tools', label: 'Tools', icon: Wrench, count: toolSkills.length },
        { id: 'ai', label: 'AI & Specialization', icon: Brain, count: aiSkills.length }
    ];

    const filteredSkills = useMemo(() => {
        if (activeTab === 'all') return allSkills;
        return allSkills.filter(s => s.catId === activeTab);
    }, [activeTab, allSkills]);

    // Tech Radar Orbit Data Calculation
    const radarData = useMemo(() => {
        const rings = [
            { ring: 'Core Engine', radius: 100, color: '#9A7B4F', items: allSkills.filter(s => s.proficiency === 'Core Stack' || s.catId === 'languages') },
            { ring: 'Full-Stack & Data', radius: 170, color: '#2563EB', items: allSkills.filter(s => s.catId === 'frameworks' || s.catId === 'databases') },
            { ring: 'Tools & AI Matrix', radius: 240, color: '#8E44AD', items: allSkills.filter(s => s.catId === 'tools' || s.catId === 'ai') }
        ];
        return rings;
    }, [allSkills]);

    return (
        <div className="w-full space-y-8 my-6">

            {/* 1. Header Navigation & Mode Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white/80 border border-[#ECE7DE] shadow-sm backdrop-blur-md">
                
                {/* Category Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                                    isActive
                                        ? 'text-[#171717] font-bold shadow-sm'
                                        : 'text-[#6B6B6B] hover:text-[#171717] hover:bg-[#FAF8F5]'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeSkillTab"
                                        className="absolute inset-0 bg-[#FAF6F0] border border-[#9A7B4F]/30 rounded-xl"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-[#9A7B4F]' : 'text-[#8A8A8A]'}`} />
                                <span className="relative z-10">{cat.label}</span>
                                <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                                    isActive ? 'bg-[#9A7B4F] text-white' : 'bg-[#ECE7DE] text-[#6B6B6B]'
                                }`}>
                                    {cat.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* View Mode Toggle Button */}
                <div className="flex items-center gap-1 bg-[#F5F2EB] p-1 rounded-xl border border-[#ECE7DE] self-end sm:self-auto">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            viewMode === 'grid'
                                ? 'bg-white text-[#171717] shadow-sm font-bold border border-[#ECE7DE]'
                                : 'text-[#6B6B6B] hover:text-[#171717]'
                        }`}
                        title="Grid Card View"
                    >
                        <LayoutGrid className="w-3.5 h-3.5 text-[#9A7B4F]" />
                        <span>Matrix</span>
                    </button>
                    <button
                        onClick={() => setViewMode('radar')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            viewMode === 'radar'
                                ? 'bg-white text-[#171717] shadow-sm font-bold border border-[#ECE7DE]'
                                : 'text-[#6B6B6B] hover:text-[#171717]'
                        }`}
                        title="Interactive Orbit Radar View"
                    >
                        <Radar className="w-3.5 h-3.5 text-[#9A7B4F]" />
                        <span>Tech Orbit</span>
                    </button>
                </div>
            </div>

            {/* 2. Main Content Display */}
            {viewMode === 'grid' ? (
                /* --- EXECUTIVE GRID VIEW --- */
                <motion.div 
                    layout 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => {
                            const Icon = skill.icon || Brain;
                            return (
                                <motion.div
                                    key={skill.name}
                                    layout
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.04 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="group relative p-5 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:shadow-lg hover:border-[#9A7B4F]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                                >
                                    {/* Ambient Hover Accent Tint */}
                                    <div 
                                        className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl pointer-events-none"
                                        style={{ backgroundColor: skill.color || '#9A7B4F' }}
                                    />

                                    <div>
                                        {/* Top Icon & Badge Row */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div 
                                                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-sm"
                                                style={{ 
                                                    backgroundColor: skill.bg || '#FAF6F0',
                                                    borderColor: (skill.color || '#9A7B4F') + '30',
                                                    color: skill.color || '#9A7B4F'
                                                }}
                                            >
                                                <Icon className="w-6 h-6" />
                                            </div>

                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FAF6F0] text-[#9A7B4F] border border-[#9A7B4F]/20">
                                                    {skill.proficiency || 'Proficient'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title & Category */}
                                        <h4 className="font-serif-display font-bold text-lg text-[#171717] group-hover:text-[#9A7B4F] transition-colors flex items-center gap-1.5">
                                            {skill.name}
                                        </h4>
                                        
                                        <p className="text-xs text-[#6B6B6B] mt-1.5 flex items-center gap-1">
                                            <Terminal className="w-3 h-3 text-[#9A7B4F]/70" />
                                            <span>{skill.usedIn || skill.catName}</span>
                                        </p>
                                    </div>

                                    {/* Skill Level Progress Indicator */}
                                    <div className="mt-5 pt-3 border-t border-[#ECE7DE]/60 space-y-1.5">
                                        <div className="flex items-center justify-between text-[11px] font-semibold">
                                            <span className="text-[#8A8A8A]">Proficiency Index</span>
                                            <span className="text-[#171717] font-bold">{skill.level || 85}%</span>
                                        </div>
                                        <div className="w-full h-1.5 rounded-full bg-[#F5F2EB] overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level || 85}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: skill.color || '#9A7B4F' }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            ) : (
                /* --- INTERACTIVE TECH ORBIT RADAR VIEW --- */
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full h-[580px] rounded-3xl bg-[#FCFBF8] border border-[#ECE7DE] shadow-inner overflow-hidden flex items-center justify-center p-4"
                >
                    {/* SVG Orbit Lines Background */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <g transform="translate(0, 0)">
                            {[100, 170, 240].map((radius, rIdx) => (
                                <circle
                                    key={rIdx}
                                    cx="50%"
                                    cy="50%"
                                    r={radius}
                                    fill="none"
                                    stroke="#ECE7DE"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                />
                            ))}
                        </g>
                    </svg>

                    {/* Orbit Center Hub */}
                    <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute z-20 w-28 h-28 rounded-full bg-[#171717] text-white flex flex-col items-center justify-center p-2 shadow-xl border-4 border-[#9A7B4F]/40 cursor-pointer"
                    >
                        <Zap className="w-5 h-5 text-[#9A7B4F] mb-0.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-center">Tech Radar</span>
                        <span className="text-[9px] text-[#C2AB8A] mt-0.5">Dharshini B</span>
                    </motion.div>

                    {/* Orbit Ring Skill Nodes */}
                    {radarData.map((ring, ringIdx) => {
                        const items = ring.items;
                        const angleStep = (2 * Math.PI) / items.length;

                        return items.map((skill, itemIdx) => {
                            const angle = itemIdx * angleStep - Math.PI / 2;
                            const x = Math.cos(angle) * ring.radius;
                            const y = Math.sin(angle) * ring.radius;
                            const Icon = skill.icon || Brain;
                            const isHovered = hoveredSkill?.name === skill.name;

                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: ringIdx * 0.15 + itemIdx * 0.04 }}
                                    style={{ 
                                        transform: `translate(${x}px, ${y}px)`,
                                    }}
                                    onMouseEnter={() => setHoveredSkill(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    className="absolute z-30 cursor-pointer group"
                                >
                                    <div className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border shadow-md transition-all duration-300 ${
                                        isHovered 
                                            ? 'scale-125 z-50 border-[#9A7B4F] shadow-lg shadow-[#9A7B4F]/20' 
                                            : 'border-[#ECE7DE] hover:border-[#9A7B4F]'
                                    }`}>
                                        <div 
                                            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                                            style={{ color: skill.color || '#9A7B4F', backgroundColor: skill.bg || '#FAF6F0' }}
                                        >
                                            <Icon className="w-3 h-3" />
                                        </div>
                                        <span className="text-xs font-bold text-[#171717] whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        });
                    })}

                    {/* Active Hover Details Tooltip Overlay */}
                    <AnimatePresence>
                        {hoveredSkill && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-6 left-6 z-40 max-w-xs p-4 rounded-2xl bg-white/95 border border-[#9A7B4F]/40 shadow-xl backdrop-blur-md"
                            >
                                <div className="flex items-center gap-2.5 mb-1.5">
                                    <div 
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                                        style={{ backgroundColor: hoveredSkill.bg || '#FAF6F0', color: hoveredSkill.color || '#9A7B4F' }}
                                    >
                                        {hoveredSkill.name[0]}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm text-[#171717]">{hoveredSkill.name}</h5>
                                        <span className="text-[10px] text-[#9A7B4F] font-semibold uppercase">{hoveredSkill.proficiency}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-[#6B6B6B]">{hoveredSkill.usedIn}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Legend */}
                    <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-4 text-[11px] bg-white/80 px-3.5 py-1.5 rounded-full border border-[#ECE7DE]">
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#9A7B4F]" /> Core Languages</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2563EB]" /> Web & Databases</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#8E44AD]" /> Tools & AI</span>
                    </div>
                </motion.div>
            )}

            {/* 3. Generative AI & LLM Specialization Featured Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#171717] via-[#24211D] to-[#171717] text-white p-6 sm:p-8 shadow-xl border border-[#9A7B4F]/30"
            >
                {/* Background Glow */}
                <div className="absolute -right-10 -top-10 w-60 h-60 bg-[#9A7B4F]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A7B4F]/20 border border-[#9A7B4F]/40 text-[#C2AB8A] text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5 text-[#9A7B4F]" />
                            <span>Featured AI Specialization</span>
                        </div>
                        <h3 className="font-serif-display font-bold text-2xl sm:text-3xl text-white">
                            Generative AI & Prompt Engineering
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            Certified by <span className="text-[#C2AB8A] font-semibold">AICTE EduSkills</span> & <span className="text-[#C2AB8A] font-semibold">Infosys Springboard</span>. Skilled in constructing LLM-driven query pipelines, prompt engineering, and intelligent chatbots.
                        </p>
                    </div>

                    <div className="flex flex-wrap md:flex-col gap-2.5 w-full md:w-auto">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white backdrop-blur-md">
                            <CheckCircle2 className="w-4 h-4 text-[#9A7B4F]" />
                            <span>AICTE Gen AI Internship</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white backdrop-blur-md">
                            <CheckCircle2 className="w-4 h-4 text-[#9A7B4F]" />
                            <span>Infosys Gen AI for All</span>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default SkillWebGraph;

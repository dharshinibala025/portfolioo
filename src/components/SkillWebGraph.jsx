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
    Sparkles, 
    Code2, 
    Layers, 
    Database, 
    Wrench, 
    Brain,
    CheckCircle2,
    RotateCw,
    Search,
    ExternalLink,
    Terminal,
    ChevronRight,
    Award
} from 'lucide-react';

const SkillCard3D = ({ skill, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const Icon = skill.icon || Brain;

    return (
        <div 
            className="perspective-1000 h-[260px] w-full cursor-pointer group"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}
            >
                {/* --- FRONT SIDE OF CARD --- */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:shadow-xl hover:border-[#9A7B4F]/40 p-5 flex flex-col justify-between backface-hidden transition-all duration-300 overflow-hidden">
                    {/* Ambient Glow Tint */}
                    <div 
                        className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500 blur-2xl pointer-events-none"
                        style={{ backgroundColor: skill.color || '#9A7B4F' }}
                    />

                    <div>
                        {/* Top Row: Icon + Floating Badge */}
                        <div className="flex items-center justify-between mb-4">
                            <div 
                                className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-sm"
                                style={{ 
                                    backgroundColor: skill.bg || '#FAF6F0',
                                    borderColor: (skill.color || '#9A7B4F') + '35',
                                    color: skill.color || '#9A7B4F'
                                }}
                            >
                                <Icon className="w-6 h-6" />
                            </div>

                            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FAF6F0] text-[#9A7B4F] border border-[#9A7B4F]/20 shadow-2xs">
                                {skill.proficiency || 'Proficient'}
                            </span>
                        </div>

                        {/* Skill Name */}
                        <h4 className="font-serif-display font-bold text-lg text-[#171717] group-hover:text-[#9A7B4F] transition-colors">
                            {skill.name}
                        </h4>

                        {/* Used In / Project Domain */}
                        <p className="text-xs text-[#6B6B6B] mt-1.5 flex items-center gap-1.5 line-clamp-1">
                            <Terminal className="w-3.5 h-3.5 text-[#9A7B4F]" />
                            <span>{skill.usedIn}</span>
                        </p>
                    </div>

                    {/* Bottom Row: Proficiency Progress Meter & Flip Hint */}
                    <div className="space-y-2 pt-3 border-t border-[#ECE7DE]/70">
                        <div className="flex items-center justify-between text-[11px] font-semibold">
                            <span className="text-[#8A8A8A]">Proficiency Index</span>
                            <span className="text-[#171717] font-bold">{skill.level || 85}%</span>
                        </div>

                        <div className="w-full h-1.5 rounded-full bg-[#F5F2EB] overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level || 85}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: skill.color || '#9A7B4F' }}
                            />
                        </div>

                        <div className="flex items-center justify-end text-[10px] font-medium text-[#9A7B4F] gap-1 opacity-70 group-hover:opacity-100 transition-opacity pt-0.5">
                            <span>Flip for details</span>
                            <RotateCw className="w-3 h-3 animate-spin-slow" />
                        </div>
                    </div>
                </div>

                {/* --- BACK SIDE OF CARD --- */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#171717] text-white p-5 flex flex-col justify-between backface-hidden rotate-y-180 border border-[#9A7B4F]/40 shadow-2xl overflow-hidden">
                    {/* Dark Card Ambient Radial Glow */}
                    <div 
                        className="absolute -top-12 -left-12 w-36 h-36 rounded-full opacity-20 blur-2xl pointer-events-none"
                        style={{ backgroundColor: skill.color || '#9A7B4F' }}
                    />

                    <div>
                        {/* Header: Skill Name & Flip Indicator */}
                        <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                            <div className="flex items-center gap-2">
                                <div 
                                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                                    style={{ backgroundColor: (skill.color || '#9A7B4F') + '30', color: '#FAF6F0' }}
                                >
                                    <Icon className="w-4 h-4 text-[#C2AB8A]" />
                                </div>
                                <h5 className="font-serif-display font-bold text-sm text-white">
                                    {skill.name}
                                </h5>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#9A7B4F]/20 text-[#C2AB8A] border border-[#9A7B4F]/40">
                                {skill.catName}
                            </span>
                        </div>

                        {/* Project Context */}
                        <div className="mb-3">
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C2AB8A] block mb-1">
                                Applied Experience
                            </span>
                            <p className="text-xs text-gray-300 leading-relaxed font-medium">
                                {skill.usedIn}
                            </p>
                        </div>

                        {/* Key Capabilities Bullet Highlights */}
                        {skill.highlights && skill.highlights.length > 0 && (
                            <div className="space-y-1.5">
                                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 block">
                                    Key Capabilities
                                </span>
                                {skill.highlights.map((h, hIdx) => (
                                    <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B4F] shrink-0 mt-0.5" />
                                        <span className="leading-tight">{h}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Back Bottom Footer */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                        <span className="text-xs font-bold text-[#C2AB8A]">
                            Level: {skill.level}%
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                            <span className="text-[10px]">Flip Back</span>
                            <RotateCw className="w-3 h-3 text-[#9A7B4F]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SkillWebGraph = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

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
        { id: 'ai', label: 'AI Specialization', icon: Brain, count: aiSkills.length }
    ];

    const filteredSkills = useMemo(() => {
        return allSkills.filter(s => {
            const matchesCategory = activeTab === 'all' || s.catId === activeTab;
            const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  s.usedIn.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeTab, searchQuery, allSkills]);

    return (
        <div className="w-full space-y-8 my-6">

            {/* 1. Header Navigation & Category Filter Pills */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white/90 border border-[#ECE7DE] shadow-sm backdrop-blur-md">
                
                {/* Category Filter Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
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
                                        layoutId="active3DSkillTab"
                                        className="absolute inset-0 bg-[#FAF6F0] border border-[#9A7B4F]/30 rounded-xl"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-[#9A7B4F]' : 'text-[#8A8A8A]'}`} />
                                <span className="relative z-10">{cat.label}</span>
                                <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                                    isActive ? 'bg-[#9A7B4F] text-white font-bold' : 'bg-[#ECE7DE] text-[#6B6B6B]'
                                }`}>
                                    {cat.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Quick Search Input */}
                <div className="relative w-full md:w-64 shrink-0">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                    <input
                        type="text"
                        placeholder="Search skill or tool..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#ECE7DE] text-xs text-[#171717] placeholder-[#8A8A8A] focus:outline-none focus:border-[#9A7B4F] focus:bg-white transition-all shadow-inner"
                    />
                </div>
            </div>

            {/* 2. 3D Flip Cards Grid View */}
            <motion.div 
                layout 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                <AnimatePresence mode="popLayout">
                    {filteredSkills.length > 0 ? (
                        filteredSkills.map((skill, index) => (
                            <SkillCard3D key={skill.name} skill={skill} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-[#ECE7DE]">
                            <p className="text-sm text-[#6B6B6B]">No matching skills found for "{searchQuery}".</p>
                            <button 
                                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                                className="mt-3 px-4 py-1.5 text-xs font-semibold text-[#9A7B4F] bg-[#FAF6F0] rounded-lg border border-[#9A7B4F]/30 hover:bg-[#9A7B4F] hover:text-white transition-all"
                            >
                                Reset Search Filters
                            </button>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* 3. Generative AI & LLM Specialization Featured Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#171717] via-[#24211D] to-[#171717] text-white p-6 sm:p-8 shadow-xl border border-[#9A7B4F]/30"
            >
                {/* Ambient Glow */}
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
                            <span>AICTE Gen AI Virtual Internship</span>
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


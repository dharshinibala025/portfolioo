import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills, frameworks, databases, tools } from '../data/content';

const SkillWebGraph = () => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    // Configuration
    const categoryRadius = 180; // Distance of categories from center
    const skillRadius = 105;    // Distance of skills from their category

    // Data Structure with high-contrast, professional colors
    const categories = [
        { 
            id: 'languages', 
            label: 'Languages', 
            items: skills, 
            angle: 0, 
            color: 'text-[#D97706]', // Warm Amber/Gold
            nodeBg: 'bg-[#FFFBEB]', 
            borderColor: 'border-[#D97706]',
            lineStroke: '#D97706'
        },
        { 
            id: 'frameworks', 
            label: 'Frameworks', 
            items: frameworks, 
            angle: 90, 
            color: 'text-[#2563EB]', // Bright Professional Blue
            nodeBg: 'bg-[#EFF6FF]', 
            borderColor: 'border-[#2563EB]',
            lineStroke: '#2563EB'
        },
        { 
            id: 'databases', 
            label: 'Databases', 
            items: databases, 
            angle: 180, 
            color: 'text-[#059669]', // Deep Emerald Green
            nodeBg: 'bg-[#ECFDF5]', 
            borderColor: 'border-[#059669]',
            lineStroke: '#059669'
        },
        { 
            id: 'tools', 
            label: 'Tools', 
            items: tools, 
            angle: 270, 
            color: 'text-[#EA580C]', // Rich Terracotta/Orange
            nodeBg: 'bg-[#FFF7ED]', 
            borderColor: 'border-[#EA580C]',
            lineStroke: '#EA580C'
        }
    ];

    // Helper to calculate position
    const getPosition = (cx, cy, radius, angleDeg) => {
        const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top
        return {
            x: cx + radius * Math.cos(angleRad),
            y: cy + radius * Math.sin(angleRad)
        };
    };

    if (dimensions.width === 0) return <div ref={containerRef} className="h-[580px] w-full" />;

    return (
        <div ref={containerRef} className="relative h-[580px] w-full overflow-hidden bg-transparent select-none">

            {/* SVG Connections Layer */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none z-0">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {categories.map((cat) => {
                    const catPos = getPosition(centerX, centerY, categoryRadius, cat.angle);
                    return (
                        <g key={cat.id}>
                            {/* Line from Center to Category */}
                            <motion.line
                                x1={centerX}
                                y1={centerY}
                                x2={catPos.x}
                                y2={catPos.y}
                                stroke={cat.lineStroke}
                                strokeWidth="2.5"
                                strokeDasharray="6 4"
                                opacity="0.75"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.75 }}
                                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                            />

                            {/* Lines from Category to Skills */}
                            {cat.items.map((item, index) => {
                                const angleStep = 360 / cat.items.length;
                                const skillAngle = cat.angle + (index * angleStep) + (angleStep / 2);
                                const skillPos = getPosition(catPos.x, catPos.y, skillRadius, skillAngle);

                                return (
                                    <motion.line
                                        key={`${cat.id}-${item.name}-line`}
                                        x1={catPos.x}
                                        y1={catPos.y}
                                        x2={skillPos.x}
                                        y2={skillPos.y}
                                        stroke={cat.lineStroke}
                                        strokeWidth="1.5"
                                        opacity="0.35"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.35 }}
                                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.08) }}
                                    />
                                );
                            })}
                        </g>
                    );
                })}
            </svg>

            {/* Central Skill Hub Node */}
            <motion.div
                className="absolute z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-[#B8893D] bg-[#171717] text-white shadow-xl shadow-[#B8893D]/20 cursor-grab active:cursor-grabbing"
                style={{ left: centerX - 64, top: centerY - 64 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.08 }}
                drag
                dragConstraints={containerRef}
            >
                <span className="text-3xl mb-0.5">🚀</span>
                <span className="font-extrabold text-white text-base tracking-wide uppercase">Skills</span>
            </motion.div>

            {/* Category and Skill Nodes */}
            {categories.map((cat, catIndex) => {
                const catPos = getPosition(centerX, centerY, categoryRadius, cat.angle);

                return (
                    <React.Fragment key={cat.id}>
                        {/* Category Parent Node */}
                        <motion.div
                            className={`absolute z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 ${cat.borderColor} bg-[#171717] shadow-lg shadow-black/10 cursor-grab active:cursor-grabbing`}
                            style={{ left: catPos.x - 48, top: catPos.y - 48 }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 + (catIndex * 0.15), type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.12 }}
                            drag
                            dragConstraints={containerRef}
                        >
                            <span className={`font-bold ${cat.color} text-xs tracking-wider uppercase text-center px-1`}>
                                {cat.label}
                            </span>
                        </motion.div>

                        {/* Skill Leaf Nodes */}
                        {cat.items.map((item, index) => {
                            const angleStep = 360 / cat.items.length;
                            const skillAngle = cat.angle + (index * angleStep) + (angleStep / 2);
                            const skillPos = getPosition(catPos.x, catPos.y, skillRadius, skillAngle);

                            return (
                                <motion.div
                                    key={`${cat.id}-${item.name}`}
                                    className="absolute z-10 flex flex-col items-center justify-center gap-1.5 cursor-grab active:cursor-grabbing"
                                    style={{ left: skillPos.x - 24, top: skillPos.y - 24 }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.2 + (index * 0.08), type: "spring" }}
                                    whileHover={{ scale: 1.25, zIndex: 30 }}
                                    drag
                                    dragConstraints={containerRef}
                                >
                                    {/* Icon Badge */}
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#ECE7DE] bg-white shadow-md hover:shadow-lg transition-shadow duration-200`}>
                                        {item.icon && <item.icon className={`text-xl ${cat.color}`} />}
                                    </div>
                                    {/* Crisp, Readable High-Contrast Label */}
                                    <span className="text-[11px] font-bold text-[#171717] bg-white/90 border border-[#ECE7DE] px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap backdrop-blur-sm">
                                        {item.name}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </React.Fragment>
                );
            })}

        </div>
    );
};

export default SkillWebGraph;


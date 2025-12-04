import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills, frameworks, tools } from '../data/content';

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
    const categoryRadius = 220; // Distance of categories from center
    const skillRadius = 120;    // Distance of skills from their category

    // Data Structure
    const categories = [
        { id: 'languages', label: 'Languages', items: skills, angle: 0, color: 'text-blue-400', borderColor: 'border-blue-500/50' },
        { id: 'frameworks', label: 'Frameworks', items: frameworks, angle: 120, color: 'text-purple-400', borderColor: 'border-purple-500/50' },
        { id: 'tools', label: 'Tools', items: tools, angle: 240, color: 'text-green-400', borderColor: 'border-green-500/50' }
    ];

    // Helper to calculate position
    const getPosition = (cx, cy, radius, angleDeg) => {
        const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top
        return {
            x: cx + radius * Math.cos(angleRad),
            y: cy + radius * Math.sin(angleRad)
        };
    };

    if (dimensions.width === 0) return <div ref={containerRef} className="h-[800px] w-full" />;

    return (
        <div ref={containerRef} className="relative h-[800px] w-full overflow-hidden bg-transparent">

            {/* SVG Connections Layer */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none z-0">
                <defs>
                    <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                    </linearGradient>
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
                                stroke="rgba(168, 85, 247, 0.5)"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                            />

                            {/* Lines from Category to Skills */}
                            {cat.items.map((item, index) => {
                                const angleStep = 360 / cat.items.length;
                                // Offset skill angle to fan out around the category, but pointing outwards
                                const skillAngle = cat.angle + (index * angleStep) + (angleStep / 2);
                                const skillPos = getPosition(catPos.x, catPos.y, skillRadius, skillAngle);

                                return (
                                    <motion.line
                                        key={`${cat.id}-${item.name}-line`}
                                        x1={catPos.x}
                                        y1={catPos.y}
                                        x2={skillPos.x}
                                        y2={skillPos.y}
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.5 + (index * 0.1) }}
                                    />
                                );
                            })}
                        </g>
                    );
                })}
            </svg>

            {/* Nodes Layer */}

            {/* Central Node */}
            <motion.div
                className="absolute z-20 flex h-32 w-32 items-center justify-center rounded-full border-4 border-accent-500 bg-black/80 shadow-[0_0_50px_rgba(168,85,247,0.6)] backdrop-blur-xl"
                style={{ left: centerX - 64, top: centerY - 64 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                drag
            >
                <div className="text-center">
                    <span className="block text-3xl">🚀</span>
                    <span className="font-bold text-white">Skills</span>
                </div>
            </motion.div>

            {/* Category and Skill Nodes */}
            {categories.map((cat, catIndex) => {
                const catPos = getPosition(centerX, centerY, categoryRadius, cat.angle);

                return (
                    <React.Fragment key={cat.id}>
                        {/* Category Node */}
                        <motion.div
                            className={`absolute z-20 flex h-24 w-24 items-center justify-center rounded-full border-2 ${cat.borderColor} bg-black/60 backdrop-blur-md shadow-lg`}
                            style={{ left: catPos.x - 48, top: catPos.y - 48 }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1 + (catIndex * 0.2), type: "spring", stiffness: 200 }}
                            drag
                            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                        >
                            <span className={`font-bold ${cat.color} text-sm`}>{cat.label}</span>
                        </motion.div>

                        {/* Skill Nodes */}
                        {cat.items.map((item, index) => {
                            const angleStep = 360 / cat.items.length;
                            const skillAngle = cat.angle + (index * angleStep) + (angleStep / 2);
                            const skillPos = getPosition(catPos.x, catPos.y, skillRadius, skillAngle);

                            return (
                                <motion.div
                                    key={`${cat.id}-${item.name}`}
                                    className="absolute z-10 flex flex-col items-center justify-center gap-1"
                                    style={{ left: skillPos.x - 20, top: skillPos.y - 20 }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.8 + (index * 0.15), type: "spring" }}
                                    drag
                                    whileHover={{ scale: 1.2, zIndex: 30 }}
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-accent-400">
                                        {item.icon && <item.icon className={`text-xl ${cat.color}`} />}
                                    </div>
                                    <span className="text-[10px] text-white/70">{item.name}</span>
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

import React, { useEffect, useState } from 'react';

const GlowParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles
        const particleCount = 25; // Increased count
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position (0-100%)
            top: Math.random() * 100, // Random vertical position (0-100%)
            delay: Math.random() * 5, // Random animation delay
            duration: 8 + Math.random() * 10, // Slower, more gentle float
            size: 6 + Math.random() * 8, // Slightly larger (6-14px)
            color: Math.random() > 0.5 ? '#b043ff' : '#d580ff', // Random purple shade
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full animate-float-up animate-twinkle"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`, // Distribute vertically
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: p.color,
                        boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                        animationDelay: `-${p.delay}s`, // Negative delay for instant start
                        animationDuration: `${p.duration}s`,
                        opacity: 0, // Start invisible, handled by keyframes
                    }}
                />
            ))}
        </div>
    );
};

export default GlowParticles;

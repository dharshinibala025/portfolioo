import React from 'react';

const DBMonogramLogo = ({ size = 42, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center group cursor-pointer ${className}`}>
      {/* Soft Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#0B192C] via-[#1E3A8A] to-[#2563EB] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25" />

      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
      >
        <defs>
          {/* Deep Navy to Royal Blue Gradient matching light blue/white theme */}
          <linearGradient id="db-navy-royal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B192C" />   {/* Deepest Navy */}
            <stop offset="40%" stopColor="#1E3A8A" />  {/* Deep Royal Blue */}
            <stop offset="85%" stopColor="#2563EB" />  {/* Royal Blue */}
            <stop offset="100%" stopColor="#3B82F6" /> {/* Vibrant Blue accent */}
          </linearGradient>

          {/* Hover Gradient Shift */}
          <linearGradient id="db-navy-royal-hover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          {/* Interlocking Gap Accent Gradient */}
          <linearGradient id="db-cutout-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>

        {/* Outer Minimal Rounded Border Box */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="24"
          fill="#FFFFFF"
          stroke="url(#db-navy-royal-grad)"
          strokeWidth="1.75"
          strokeOpacity="0.25"
          className="transition-all duration-300 group-hover:stroke-opacity-60 group-hover:fill-[#F4F8FF]"
        />

        {/* 
          INTERCONNECTED MONOGRAM "D" AND "B"
          Geometric Interlocking Design:
          - Letter 'D' forms the bold outer vertical pillar and sweeping curved arc.
          - Letter 'B' emerges from inside the pillar with two perfectly proportioned loops.
          - High-precision 2.5px negative-space cutouts form the 3D interlocking weave.
        */}
        <g className="transition-all duration-300">
          {/* Outer Letter 'D' Path */}
          <path
            d="M 25 19 H 52 C 71.33 19 87 32.879 87 50 C 87 67.121 71.33 81 52 81 H 25 C 21.686 81 19 78.314 19 75 V 25 C 19 21.686 21.686 19 25 19 Z"
            fill="url(#db-navy-royal-grad)"
          />

          {/* D Inner Counter cutout (Background Fill) */}
          <path
            d="M 32 28 H 50 C 62.703 28 73 37.849 73 50 C 73 62.151 62.703 72 50 72 H 32 V 28 Z"
            fill="#FFFFFF"
            className="transition-colors duration-300 group-hover:fill-[#F4F8FF]"
          />

          {/* Letter 'B' Upper Interlocking Loop */}
          <path
            d="M 32 28 H 48 C 55.732 28 62 32.925 62 39 C 62 45.075 55.732 50 48 50 H 32 V 28 Z"
            fill="url(#db-navy-royal-grad)"
          />
          <path
            d="M 38 34 H 47 C 50.866 34 54 36.239 54 39 C 54 41.761 50.866 44 47 44 H 38 V 34 Z"
            fill="#FFFFFF"
            className="transition-colors duration-300 group-hover:fill-[#F4F8FF]"
          />

          {/* Letter 'B' Lower Interlocking Loop */}
          <path
            d="M 32 47 H 52 C 60.837 47 68 52.596 68 59.5 C 68 66.404 60.837 72 52 72 H 32 V 47 Z"
            fill="url(#db-navy-royal-grad)"
          />
          <path
            d="M 38 53 H 51 C 55.418 53 59 55.91 59 59.5 C 59 63.09 55.418 66 51 66 H 38 V 53 Z"
            fill="#FFFFFF"
            className="transition-colors duration-300 group-hover:fill-[#F4F8FF]"
          />

          {/* Crisp Interlocking Cutout Axis (Seam between D and B) */}
          <line
            x1="32"
            y1="48.5"
            x2="69"
            y2="48.5"
            stroke="#FFFFFF"
            strokeWidth="3"
            className="transition-colors duration-300 group-hover:stroke-[#F4F8FF]"
          />
          <line
            x1="38"
            y1="48.5"
            x2="63"
            y2="48.5"
            stroke="url(#db-cutout-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default DBMonogramLogo;

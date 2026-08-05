import { useId } from 'react';
import { motion } from 'framer-motion';

/**
 * CircularTextBadge
 * Renders a circular fixed text badge with a center solid dot.
 * Displays the text phrase ONLY ONCE, evenly distributed around 360° with SVG spacing.
 */
const CircularTextBadge = ({
  text = "DREAM BIG • WORK HARD • SUCCEED •",
  dotColor = "#9A7B4F", // Portfolio gold accent
  bgColor = "#F6F2EA",  // Portfolio background
  textColor = "#171717", // Portfolio primary text
  size = 140,
  isRotating = false,   // Fixed by default
  speed = 18,
  className = "",
  onClick,
}) => {
  const pathId = useId().replace(/:/g, '');

  // Ensure text ends cleanly with a separator bullet
  const rawText = text.trim();
  const singleText = rawText.endsWith('•') || rawText.endsWith('.')
    ? rawText
    : `${rawText} •`;

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center select-none cursor-pointer group ${className}`}
      style={{ width: size, height: size }}
      title="Dream Big, Work Hard, Succeed"
    >
      {/* Background Circle with Soft Shadow */}
      <div
        className="absolute inset-0 rounded-full shadow-[0_6px_20px_rgba(23,23,23,0.05)] border border-[#ECE7DE] transition-all duration-300 group-hover:shadow-[0_10px_28px_rgba(154,123,79,0.18)]"
        style={{ backgroundColor: bgColor }}
      />

      {/* Center Theme Solid Dot */}
      <div
        className="absolute rounded-full transition-transform duration-300 group-hover:scale-125 z-10 shadow-sm"
        style={{
          width: size * 0.22,
          height: size * 0.22,
          backgroundColor: dotColor,
        }}
      />

      {/* 360-Degree Single Text Spaced Path */}
      <div
        className={`absolute inset-0 w-full h-full ${
          isRotating ? 'animate-[spin_18s_linear_infinite] group-hover:[animation-duration:8s]' : ''
        }`}
        style={isRotating ? { animationDuration: `${speed}s` } : undefined}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id={pathId}
              d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            />
          </defs>
          <text
            className="text-[11px] font-bold uppercase font-sans transition-colors duration-300"
            style={{ fill: textColor }}
          >
            <textPath
              href={`#${pathId}`}
              startOffset="0%"
              textLength="380"
              lengthAdjust="spacing"
            >
              {singleText}
            </textPath>
          </text>
        </svg>
      </div>
    </motion.div>
  );
};

export default CircularTextBadge;

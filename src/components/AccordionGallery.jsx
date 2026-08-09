import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './AccordionGallery.css';

const DEFAULT_ITEMS = [
  {
    id: 1,
    title: 'Habit Tracker',
    description: 'Turning small daily actions into meaningful long-term achievements.',
    image: 'https://picsum.photos/id/1015/900/1200',
    github: 'https://github.com/dharshinibala025/habit-tracker',
    link: 'https://habit-tracker-ten-navy.vercel.app',
    tags: ['React', 'Java', 'Spring Boot', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Krishi Sakhi',
    description: 'Streamlit app for Kerala Farmers Queries.',
    image: 'https://picsum.photos/id/1018/900/1200',
    github: 'https://github.com/dharshinibala025',
    link: 'https://krishi-sakhi-innovix-yp7whczthex5zaachik6gu.streamlit.app/',
    tags: ['Python', 'Streamlit'],
  },
  {
    id: 3,
    title: 'Health Fitness Tracker',
    description: 'Smart health tracking app for monitoring workouts and progress.',
    image: 'https://picsum.photos/id/1039/900/1200',
    github: 'https://github.com/dharshinibala025/fitness_tracker.git',
    link: 'https://fitness-tracker-nine-kohl.vercel.app',
    tags: ['HTML', 'CSS', 'Javascript'],
  },
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#B8893D',
  overlayColor = '#12100E',
  textColor = '#FAF8F3',
  height = 500,
  gap = 14,
  radius = 24,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = ''
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const descRefs = useRef([]);
  const actionRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(360);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];
        const desc = descRefs.current[i];
        const actions = actionRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0.15 : 0.45,
              duration: dur,
              ease
            },
            0
          );
        }

        if (showLabels && bar && text) {
          const targets = [bar, text, desc, actions].filter(Boolean);
          if (isActive) {
            tl.to(targets, { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            tl.to(targets, { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
      }}
      role="list"
      aria-label="Project accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const titleText = item.title || item.label || '';
        const descText = item.description || '';

        return (
          <div
            key={i}
            ref={el => (panelRefs.current[i] = el)}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={titleText}
          >
            <span className="ag-panel__frame">
              <span className="ag-panel__media" ref={el => (mediaRefs.current[i] = el)}>
                <img src={item.image} alt={titleText} draggable="false" />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* Top Project Tag Pills */}
            <div className="absolute top-5 left-6 right-6 z-10 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-stone-950/80 border border-white/10 text-white font-mono text-xs font-bold shadow-md">
                0{i + 1}
              </span>
              {isActive && item.tags && item.tags.length > 0 && (
                <div className="flex gap-1.5 flex-wrap">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#B8893D] text-white shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {showLabels && (
              <span className="ag-panel__label" aria-hidden="true">
                <span className="ag-panel__bar-container">
                  <span className="ag-panel__bar" ref={el => (barRefs.current[i] = el)} />
                  <span className="ag-panel__text" ref={el => (textRefs.current[i] = el)}>
                    {titleText}
                  </span>
                </span>

                {descText && (
                  <span className="ag-panel__desc" ref={el => (descRefs.current[i] = el)}>
                    {descText}
                  </span>
                )}

                {/* Project Links (GitHub & Live Demo) */}
                {(item.github || item.link) && (
                  <span className="ag-panel__actions" ref={el => (actionRefs.current[i] = el)}>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium transition-all duration-200 hover:scale-105"
                      >
                        <FaGithub className="text-sm" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#B8893D] hover:bg-[#966E2E] text-white text-xs font-semibold shadow-md transition-all duration-200 hover:scale-105"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </span>
                )}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;

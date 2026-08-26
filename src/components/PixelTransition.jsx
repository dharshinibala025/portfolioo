import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './PixelTransition.css';

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 8,
  pixelColor = 'rgba(255, 255, 255, 0.35)',
  animationStepDuration = 0.4,
  once = false,
  aspectRatio = '100%',
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const defaultRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        if (pixelColor && pixelColor !== 'currentColor') {
          pixel.style.backgroundColor = pixelColor;
        }

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = activate => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    const defaultEl = defaultRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (defaultEl) gsap.killTweensOf(defaultEl);
    if (activeEl) gsap.killTweensOf(activeEl);

    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none', scale: 0.5, opacity: 0 });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    // Smooth Gaussian Blur on image source during transition
    const sourceEl = activate ? defaultEl : activeEl;
    const targetEl = activate ? activeEl : defaultEl;

    if (sourceEl) {
      gsap.to(sourceEl, {
        filter: 'blur(16px)',
        scale: 1.05,
        duration: animationStepDuration,
        ease: 'power2.inOut',
      });
    }

    // Staggered reveal of glass blur pixels
    gsap.to(pixels, {
      display: 'block',
      scale: 1,
      opacity: 1,
      duration: animationStepDuration * 0.6,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      if (activeEl) {
        activeEl.style.display = activate ? 'block' : 'none';
        activeEl.style.pointerEvents = activate ? 'none' : '';
      }

      if (targetEl) {
        gsap.fromTo(
          targetEl,
          { filter: 'blur(16px)', scale: 1.05 },
          { filter: 'blur(0px)', scale: 1, duration: animationStepDuration, ease: 'power2.out' }
        );
      }
    });

    // Staggered fade out of glass blur pixels
    gsap.to(pixels, {
      display: 'none',
      scale: 0.5,
      opacity: 0,
      duration: animationStepDuration * 0.6,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleEnter = () => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = () => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = () => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  return (
    <div
      ref={containerRef}
      className={`pixelated-image-card ${className}`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />
      <div className="pixelated-image-card__default" ref={defaultRef} aria-hidden={isActive}>
        {firstContent}
      </div>
      <div className="pixelated-image-card__active" ref={activeRef} aria-hidden={!isActive}>
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
}

export default PixelTransition;

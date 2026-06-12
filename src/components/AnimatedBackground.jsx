import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking with target and current for smooth interpolation (lerping)
    let mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    
    const handleMouseMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    window.addEventListener('pointermove', handleMouseMove);

    // Wave systems representing champagne-gold flowing waves
    const waves = [
      {
        yBase: 0.3, 
        amplitude: 45,
        freq1: 0.0015,
        freq2: 0.0007,
        speed1: 0.0003,
        speed2: 0.0002,
        linesCount: 6,
        lineGap: 14,
        opacity: 0.05,
      },
      {
        yBase: 0.55, 
        amplitude: 65,
        freq1: 0.0008,
        freq2: 0.0012,
        speed1: 0.0002,
        speed2: 0.0004,
        linesCount: 8,
        lineGap: 16,
        opacity: 0.04,
      },
      {
        yBase: 0.8, 
        amplitude: 50,
        freq1: 0.0013,
        freq2: 0.0009,
        speed1: 0.0004,
        speed2: 0.0001,
        linesCount: 7,
        lineGap: 12,
        opacity: 0.06,
      },
    ];

    let time = 0;

    // Glowing atmospheric spots
    const glowSpots = [
      { xPct: 0.25, yPct: 0.25, radius: 450, baseColor: 'rgba(154, 123, 79, 0.05)', speed: 0.0005 },
      { xPct: 0.75, yPct: 0.7, radius: 500, baseColor: 'rgba(194, 171, 138, 0.04)', speed: 0.0004 },
    ];

    const animate = () => {
      time += 1;

      // Lerp mouse for high-end fluid response
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // Base background: Soft luxury ivory
      ctx.fillStyle = '#FCFBF8';
      ctx.fillRect(0, 0, width, height);

      // 1. Render glowing atmospheric spots (depth)
      glowSpots.forEach((spot) => {
        const spotX = width * spot.xPct + Math.sin(time * spot.speed) * 80;
        const spotY = height * spot.yPct + Math.cos(time * spot.speed) * 80;
        const radius = spot.radius + Math.sin(time * spot.speed * 2) * 60;

        const grad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, radius);
        grad.addColorStop(0, spot.baseColor);
        grad.addColorStop(0.5, spot.baseColor.replace('0.05', '0.015').replace('0.04', '0.01'));
        grad.addColorStop(1, 'rgba(252, 251, 248, 0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      // 2. Render magnetic-field grid (delicate contours)
      ctx.fillStyle = 'rgba(154, 123, 79, 0.025)';
      const dotSpacing = 70;
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.hypot(dx, dy);
          
          // Deformation force (subtle pull of the magnetic field)
          const maxDist = 250;
          const force = Math.max(0, (maxDist - dist) / maxDist) * 12;
          const angle = Math.atan2(dy, dx);
          
          const dotX = x - Math.cos(angle) * force;
          const dotY = y - Math.sin(angle) * force;

          ctx.beginPath();
          ctx.arc(dotX, dotY, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. Render champagne-gold contour waves
      waves.forEach((w) => {
        const centerY = height * w.yBase;

        for (let l = 0; l < w.linesCount; l++) {
          ctx.beginPath();
          ctx.lineWidth = 0.5;

          const lOffset = l * w.lineGap;
          
          // Champagne gradient for fade effect at screen margins
          const waveGrad = ctx.createLinearGradient(0, 0, width, 0);
          waveGrad.addColorStop(0, 'rgba(154, 123, 79, 0)');
          waveGrad.addColorStop(0.25, `rgba(154, 123, 79, ${w.opacity * (1 - l / w.linesCount)})`);
          waveGrad.addColorStop(0.75, `rgba(154, 123, 79, ${w.opacity * (1 - l / w.linesCount)})`);
          waveGrad.addColorStop(1, 'rgba(154, 123, 79, 0)');
          ctx.strokeStyle = waveGrad;

          for (let x = 0; x <= width; x += 15) {
            const sinVal = Math.sin(x * w.freq1 + time * w.speed1 + lOffset * 0.03);
            const cosVal = Math.cos(x * w.freq2 + time * w.speed2 - lOffset * 0.015);
            
            // Mouse gravity wave influence
            const dx = mouse.x - x;
            const dist = Math.abs(dx);
            const influenceMax = 350;
            const influence = Math.max(0, (influenceMax - dist) / influenceMax);
            const mouseDeflection = Math.sin(time * 0.015 + x * 0.005) * influence * 30;

            const y = centerY + lOffset + (sinVal + cosVal) * w.amplitude + mouseDeflection;

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 block" />
      {/* Editorial paper fiber texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;

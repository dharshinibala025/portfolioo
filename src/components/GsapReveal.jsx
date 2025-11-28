import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapReveal = ({ children, width = 'fit-content', delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [delay]);

    return (
        <div ref={ref} style={{ width }}>
            {children}
        </div>
    );
};

export default GsapReveal;

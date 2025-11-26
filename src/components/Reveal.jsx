import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Reveal = ({ children, width = 'fit-content' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Reveal;

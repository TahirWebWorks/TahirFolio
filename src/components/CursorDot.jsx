import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CursorDot() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const mouseEnter = () => setIsVisible(true);
        const mouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseenter', mouseEnter);
        document.addEventListener('mouseleave', mouseLeave);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseenter', mouseEnter);
            document.removeEventListener('mouseleave', mouseLeave);
        };
    }, []);

    return (
        <>
            {/* Small cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-[9999] hidden lg:block rounded-full bg-[#c9f31d]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 50,
                    mass: 0.1
                }}
            />

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] hidden lg:block rounded-full border-2 border-[#c9f31d]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    opacity: isVisible ? 0.5 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />
        </>
    );
}

export default CursorDot;

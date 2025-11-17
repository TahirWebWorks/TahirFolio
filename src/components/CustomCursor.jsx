import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');
    const [isVisible, setIsVisible] = useState(true);
    const [isClicking, setIsClicking] = useState(false);
    const [hoverText, setHoverText] = useState('');

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const mouseEnter = () => setIsVisible(true);
        const mouseLeave = () => setIsVisible(false);
        
        const mouseDown = () => setIsClicking(true);
        const mouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseenter', mouseEnter);
        document.addEventListener('mouseleave', mouseLeave);
        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);

        // Add hover effects for interactive elements
        const addHoverListeners = () => {
            // Links and buttons
            const hoverElements = document.querySelectorAll('a, button, [role="button"]');
            hoverElements.forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    setCursorVariant('hover');
                    const text = el.getAttribute('data-cursor-text') || '';
                    setHoverText(text);
                });
                el.addEventListener('mouseleave', () => {
                    setCursorVariant('default');
                    setHoverText('');
                });
            });

            // Input fields
            const inputElements = document.querySelectorAll('input, textarea');
            inputElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setCursorVariant('text'));
                el.addEventListener('mouseleave', () => setCursorVariant('default'));
            });

            // Images
            const imageElements = document.querySelectorAll('img');
            imageElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setCursorVariant('image'));
                el.addEventListener('mouseleave', () => setCursorVariant('default'));
            });
        };

        // Initial setup
        addHoverListeners();

        // Re-run on DOM changes
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseenter', mouseEnter);
            document.removeEventListener('mouseleave', mouseLeave);
            window.removeEventListener('mousedown', mouseDown);
            window.removeEventListener('mouseup', mouseUp);
            observer.disconnect();
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: isClicking ? 0.8 : 1,
            backgroundColor: 'transparent',
            border: '2px solid #c9f31d'
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: isClicking ? 1.2 : 1.5,
            backgroundColor: 'rgba(201, 243, 29, 0.1)',
            border: '2px solid #c9f31d'
        },
        text: {
            x: mousePosition.x - 2,
            y: mousePosition.y - 16,
            scale: 1,
            backgroundColor: 'transparent',
            border: '2px solid #c9f31d',
            width: 4,
            height: 32,
            borderRadius: 2
        },
        image: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            scale: isClicking ? 0.8 : 1,
            backgroundColor: 'rgba(201, 243, 29, 0.2)',
            border: '2px solid #c9f31d'
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: isClicking ? 1.5 : 1
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0
        },
        text: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0
        },
        image: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 2
        }
    };

    return (
        <>
            {/* Main cursor ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block rounded-full"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                    width: { duration: 0.2 },
                    height: { duration: 0.2 },
                    borderRadius: { duration: 0.2 }
                }}
                style={{
                    opacity: isVisible ? 1 : 0,
                    mixBlendMode: 'difference',
                    width: cursorVariant === 'text' ? 4 : cursorVariant === 'hover' ? 64 : cursorVariant === 'image' ? 80 : 32,
                    height: cursorVariant === 'text' ? 32 : cursorVariant === 'hover' ? 64 : cursorVariant === 'image' ? 80 : 32,
                }}
            >
                {/* Hover text */}
                <AnimatePresence>
                    {hoverText && cursorVariant === 'hover' && (
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#c9f31d] text-xs font-bold whitespace-nowrap"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {hoverText}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Center dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] hidden lg:block"
                variants={dotVariants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 50
                }}
                style={{
                    opacity: isVisible ? 1 : 0
                }}
            >
                <div className="w-full h-full bg-[#c9f31d] rounded-full" />
            </motion.div>

            {/* Trailing effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
                animate={{
                    x: mousePosition.x - (cursorVariant === 'hover' ? 40 : 24),
                    y: mousePosition.y - (cursorVariant === 'hover' ? 40 : 24),
                    width: cursorVariant === 'hover' ? 80 : 48,
                    height: cursorVariant === 'hover' ? 80 : 48
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    mass: 0.8
                }}
                style={{
                    opacity: isVisible ? 0.2 : 0
                }}
            >
                <div className="w-full h-full border border-[#c9f31d] rounded-full opacity-50 blur-sm" />
            </motion.div>

            {/* Click ripple effect */}
            <AnimatePresence>
                {isClicking && (
                    <motion.div
                        className="fixed top-0 left-0 pointer-events-none z-[9997] hidden lg:block"
                        initial={{ 
                            x: mousePosition.x - 20,
                            y: mousePosition.y - 20,
                            width: 40,
                            height: 40,
                            opacity: 0.8
                        }}
                        animate={{ 
                            x: mousePosition.x - 30,
                            y: mousePosition.y - 30,
                            width: 60,
                            height: 60,
                            opacity: 0
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-full h-full border-2 border-[#c9f31d] rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default CustomCursor;

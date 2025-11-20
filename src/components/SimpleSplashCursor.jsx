import React, { useState, useEffect, useRef } from 'react';

function SimpleSplashCursor() {
    const [trails, setTrails] = useState([]);
    const trailIdRef = useRef(0);

    useEffect(() => {
        let animationFrameId;
        let lastTime = Date.now();
        const minInterval = 50; // Only create trail every 50ms for performance

        const handleMouseMove = (e) => {
            const now = Date.now();

            // Throttle trail creation for better performance
            if (now - lastTime < minInterval) return;
            lastTime = now;

            const newTrail = {
                id: trailIdRef.current++,
                x: e.clientX,
                y: e.clientY,
                timestamp: now
            };

            setTrails(prev => [...prev.slice(-8), newTrail]); // Keep only last 8 trails
        };

        // Clean up old trails
        const cleanupTrails = () => {
            const now = Date.now();
            setTrails(prev => prev.filter(trail => now - trail.timestamp < 1000));
            animationFrameId = requestAnimationFrame(cleanupTrails);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(cleanupTrails);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {trails.map((trail, index) => {
                const age = Date.now() - trail.timestamp;
                const opacity = Math.max(0, 1 - age / 1000);
                const scale = 1 + (age / 1000) * 2;

                return (
                    <div
                        key={trail.id}
                        className="absolute rounded-full"
                        style={{
                            left: trail.x,
                            top: trail.y,
                            width: '100px',
                            height: '100px',
                            background: `radial-gradient(circle, rgba(201, 243, 29, ${opacity * 0.3}) 0%, transparent 70%)`,
                            transform: `translate(-50%, -50%) scale(${scale})`,
                            transition: 'all 0.8s ease-out',
                            pointerEvents: 'none'
                        }}
                    />
                );
            })}
        </div>
    );
}

export default SimpleSplashCursor;

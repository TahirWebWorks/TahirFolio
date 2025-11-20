import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

function StatCard({ number, title }) {
    const { ref, isInView } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, y: -5 }}
        >
            <div className="h-32 sm:h-40 lg:h-full flex flex-col items-center justify-center text-center bg-[#191818] rounded-2xl p-4 sm:p-6">
                <motion.div
                    className="text-2xl sm:text-3xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                >
                    {number}
                </motion.div>
                <div className="text-gray-400 mt-2 text-sm sm:text-base">{title}</div>
            </div>
        </motion.div>
    )
}

export default StatCard;
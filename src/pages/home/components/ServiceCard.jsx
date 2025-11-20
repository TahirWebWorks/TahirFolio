import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

function ServicesCard({ id, title, short_description }) {
    const { ref, isInView } = useScrollAnimation();
    const isEven = id % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, x: 5 }}
        >
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 p-4 sm:p-5 border border-[#c8f31d6a] hover:bg-gradient-to-r from-[#c9f31d] to-[#3d4b05] rounded-xl transition-all duration-300 hover:text-black'>
                <motion.h3
                    className='text-lg sm:text-xl font-bold text-[#c9f31d] hover:text-black min-w-[40px] sm:w-[5%]'
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                >
                    0{id}
                </motion.h3>
                <h2 className='text-xl sm:text-2xl font-semibold text-start w-full sm:w-[25%]'>{title}</h2>
                <p className='text-sm sm:text-base text-start w-full sm:w-[40%] text-gray-300'>{short_description}</p>
                <motion.div
                    className='flex justify-center sm:justify-end w-full sm:w-auto'
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArrowRight className='hover:scale-110 transition-transform' size={20} />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ServicesCard;
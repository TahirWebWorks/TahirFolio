import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

function CaseStudyCard({ study, index }) {
    return (
        <motion.div
            className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#ffffff1a] hover:border-[#c9f31d] transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />
                {/* Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span 
                        className="px-4 py-2 rounded-full text-xs font-semibold text-black"
                        style={{ backgroundColor: study.color }}
                    >
                        {study.category}
                    </span>
                </div>
                {/* View Project Button */}
                <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bg-[#c9f31d] p-3 rounded-full cursor-pointer">
                        <ArrowUpRight size={20} className="text-black" />
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{study.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{study.duration}</span>
                    </div>
                </div>

                {/* Title */}
                <motion.h3
                    className="text-2xl font-bold text-white mb-2 group-hover:text-[#c9f31d] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                >
                    {study.title}
                </motion.h3>

                {/* Client */}
                <p className="text-sm text-gray-500 mb-3">Client: {study.client}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                        <motion.span
                            key={idx}
                            className="px-3 py-1 bg-[#2a2a2a] text-gray-300 text-xs rounded-full border border-[#ffffff0d] hover:border-[#c9f31d] hover:text-[#c9f31d] transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Bottom Accent Line */}
            <motion.div
                className="h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: study.color }}
            />
        </motion.div>
    );
}

export default CaseStudyCard;

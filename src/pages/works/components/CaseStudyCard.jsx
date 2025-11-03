import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, ExternalLink } from 'lucide-react';

function CaseStudyCard({ study, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative h-[520px] rounded-3xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Background Image with Parallax Effect */}
            <motion.div 
                className="absolute inset-0"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${study.image})`,
                        filter: 'brightness(0.7)'
                    }}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                <motion.div 
                    className="absolute inset-0"
                    style={{ 
                        background: `linear-gradient(135deg, ${study.color}15 0%, transparent 100%)`
                    }}
                    animate={{ opacity: isHovered ? 0.8 : 0.3 }}
                    transition={{ duration: 0.5 }}
                />
            </motion.div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-6 z-10">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                    {/* Category Badge */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className="relative"
                    >
                        <div 
                            className="px-4 py-2 rounded-full text-xs font-bold text-black backdrop-blur-sm"
                            style={{ backgroundColor: study.color }}
                        >
                            {study.category}
                        </div>
                    </motion.div>

                    {/* External Link Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: index * 0.15 + 0.4,
                            type: "spring",
                            stiffness: 200
                        }}
                        whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                        <div 
                            className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
                        >
                            <ExternalLink size={20} className="text-white" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div>
                    {/* Meta Information */}
                    <motion.div 
                        className="flex items-center gap-4 text-xs text-gray-300 mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.5 }}
                    >
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <Calendar size={14} />
                            <span>{study.year}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <Clock size={14} />
                            <span>{study.duration}</span>
                        </div>
                    </motion.div>

                    {/* Project Number */}
                    <motion.div
                        className="text-6xl font-black mb-2 opacity-20"
                        style={{ color: study.color }}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                    >
                        {String(study.id).padStart(2, '0')}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        className="text-2xl font-bold text-white mb-2 leading-tight"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.6 }}
                    >
                        {study.title}
                    </motion.h3>

                    {/* Client */}
                    <motion.p 
                        className="text-sm text-gray-400 mb-3"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.65 }}
                    >
                        for <span className="text-white font-semibold">{study.client}</span>
                    </motion.p>

                    {/* Description */}
                    <motion.p 
                        className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.7 }}
                    >
                        {study.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.75 }}
                    >
                        {study.tags.slice(0, 3).map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                            >
                                {tag}
                            </span>
                        ))}
                        {study.tags.length > 3 && (
                            <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                +{study.tags.length - 3}
                            </span>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Hover Border Effect */}
            <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ 
                    border: `2px solid ${study.color}`,
                    opacity: 0
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Accent Corner */}
            <motion.div
                className="absolute top-0 right-0 w-32 h-32 opacity-30 blur-3xl rounded-full"
                style={{ backgroundColor: study.color }}
                animate={{ 
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.4 : 0.3
                }}
                transition={{ duration: 0.6 }}
            />
        </motion.div>
    );
}

export default CaseStudyCard;

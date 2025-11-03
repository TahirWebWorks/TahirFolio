import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudiesData, categories } from '../../../data/caseStudiesData';
import CaseStudyCard from '../../works/components/CaseStudyCard';
import { Briefcase, Grid3x3, LayoutGrid, Sparkles } from 'lucide-react';

function CaseStudiesPreview() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredStudies, setFilteredStudies] = useState(caseStudiesData);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredStudies(caseStudiesData);
        } else {
            setFilteredStudies(
                caseStudiesData.filter(study => study.category === category)
            );
        }
    };

    return (
        <div className="py-20 sm:py-28 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-[#c9f31d] opacity-5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9f31d] opacity-5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.08, 0.05, 0.08]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9f31d]/20 to-[#c9f31d]/5 border border-[#c9f31d]/30 px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.05, borderColor: "rgba(201, 243, 29, 0.6)" }}
                    >
                        <Sparkles size={18} className="text-[#c9f31d]" />
                        <span className="font-semibold text-sm text-[#c9f31d]">Featured Work</span>
                    </motion.div>
                    
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                            Selected{' '}
                            <span
                                className="relative inline-block"
                            >
                                <span
                                    style={{
                                        background: 'linear-gradient(135deg, #c9f31d 0%, #ffffff 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    Projects
                                </span>
                                {/* Underline Effect */}
                                <motion.div
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#c9f31d] to-transparent rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                />
                            </span>
                        </h2>
                    </motion.div>
                    
                    {/* Description */}
                    <motion.p
                        className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Dive into a collection of my recent work where innovation meets execution. Each project tells a unique story of collaboration and creative problem-solving.
                    </motion.p>
                </motion.div>

                {/* Filter Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {/* Filter Header */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <LayoutGrid size={20} className="text-[#c9f31d]" />
                        <span className="text-sm font-medium text-gray-400">Filter by category</span>
                    </div>
                    
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
                                    activeCategory === category
                                        ? 'text-black'
                                        : 'text-gray-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#c9f31d]/50 hover:text-white'
                                }`}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#c9f31d] to-[#a8d916]"
                                        layoutId="activeCategory"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Results Counter */}
                <motion.div
                    className="flex items-center justify-center gap-3 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                        <Grid3x3 size={16} className="text-[#c9f31d]" />
                        <span className="text-sm text-gray-400">
                            <span className="text-[#c9f31d] font-bold">{filteredStudies.length}</span> {filteredStudies.length === 1 ? 'Project' : 'Projects'}
                        </span>
                    </div>
                </motion.div>

                {/* Case Studies Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {filteredStudies.map((study, index) => (
                            <CaseStudyCard
                                key={study.id}
                                study={study}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredStudies.length === 0 && (
                    <motion.div
                        className="text-center py-32"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
                            <Briefcase size={32} className="text-gray-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default CaseStudiesPreview;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudiesData, categories } from '../../../data/caseStudiesData';
import CaseStudyCard from '../../works/components/CaseStudyCard';
import { Briefcase, Filter } from 'lucide-react';

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
        <div className="py-12 sm:py-16">
            <div className="max-w-[1300px] mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-black px-4 py-2 rounded-full mb-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Briefcase size={16} />
                        <span className="font-semibold text-sm">Portfolio</span>
                    </motion.div>
                    
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Featured{' '}
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #c9f31d, #ffffff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Case Studies
                        </span>
                    </motion.h2>
                    
                    <motion.p
                        className="text-gray-400 mt-3 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Explore my recent projects where I've helped clients achieve their goals through innovative digital solutions.
                    </motion.p>

                </motion.div>

                {/* Filter Section */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 text-gray-400">
                        <Filter size={20} />
                        <span className="text-sm font-medium">Filter:</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-[#c9f31d] text-black'
                                        : 'bg-[#1a1a1a] text-gray-300 border border-[#ffffff1a] hover:border-[#c9f31d]'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    className="mb-8 text-gray-400 text-sm text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                >
                    Showing <span className="text-[#c9f31d] font-semibold">{filteredStudies.length}</span> {filteredStudies.length === 1 ? 'project' : 'projects'}
                </motion.div>

                {/* Case Studies Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
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
                        className="text-center py-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default CaseStudiesPreview;

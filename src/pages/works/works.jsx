import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudiesData, categories } from '../../data/caseStudiesData';
import CaseStudyCard from './components/CaseStudyCard';
import { Briefcase, Filter } from 'lucide-react';

function Works() {
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
        <div className=" min-h-screen py-16 sm:py-20">
            <div className="max-w-[1300px] mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-black px-5 py-2 rounded-full mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Briefcase size={18} />
                        <span className="font-semibold text-sm">Portfolio</span>
                    </motion.div>
                    
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Featured{' '}
                        <span
                            className="bg-gradient-to-r from-[#c9f31d] to-[#ffffff]"
                            style={{
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Case Studies
                        </span>
                    </motion.h1>
                    
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Explore my recent work and discover how I help clients achieve their digital goals through innovative solutions.
                    </motion.p>
                </motion.div>

                {/* Filter Section */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 text-gray-400">
                        <Filter size={20} />
                        <span className="text-sm font-medium">Filter by category:</span>
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
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
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
                    className="mb-8 text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
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

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16 sm:mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                        Have a project in mind?
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Let's work together to bring your ideas to life
                    </p>
                    <motion.button
                        className="bg-[#c9f31d] text-black px-8 py-3 rounded-full font-semibold hover:bg-transparent hover:text-[#c9f31d] border-2 border-[#c9f31d] transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201, 243, 29, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export default Works;
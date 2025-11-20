import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { skillsData } from '../../../data/skillsData';
import SkillCard from "./SkillCard";

function SkillsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div className="bg-[#1f1f1fb5]">
      <div className="max-w-[1300px] mx-auto px-4 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <motion.div
          ref={ref}
          className="w-full lg:w-[40%] text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-lg sm:text-xl">My Skills</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4 lg:my-5">
            Let&apos;s Explore Popular Skills & Experience
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
            doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
            inventore veritatis
          </p>
          <motion.button
            className="bg-[#CDFF01] px-10  py-2.5  text-black text-lg border border-[#c9f31d] rounded-xl mt-4 sm:mt-6 hover:bg-transparent hover:text-[#c9f31d] transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </motion.div>
        <div className="w-full lg:w-[60%]">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {skillsData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

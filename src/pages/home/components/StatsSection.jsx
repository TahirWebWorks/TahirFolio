import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { statsData } from '../../../data/statsData'
import StatCard from './StatCard';

function StatsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref}>
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <motion.div
          className="w-full lg:w-[50%] p-6 md:p-10 border border-[#323232] rounded-2xl bg-gradient-to-br from-10% via-[#272f06] to-[#c9f31d]"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex flex-col sm:flex-row  items-center gap-4 sm:gap-10">
              <motion.h2
                className="text-6xl sm:text-8xl lg:text-[150px] font-bold text-gray-900"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              >
                5+
              </motion.h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
                Years Of Experience
              </h3>
            </div>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mt-4">
              Crafting digital experiences through clean code and intuitive design.
              I specialize in creating responsive, user-friendly websites
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default StatsSection;

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

function SkillCard({ icon, title, percent }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center items-center p-3 sm:p-4 bg-[#1f1f1f] rounded-2xl text-center border-2 border-[#ffffff1a] hover:border-[#c9f31d] transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <motion.img
        className="mt-2 sm:mt-3 w-8 sm:w-10 lg:w-12"
        src={icon}
        alt={title}
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
      />
      <h3 className="text-sm sm:text-lg lg:text-xl my-2 sm:my-3 text-white">{title}</h3>
      <h4 className="w-full py-1 sm:py-2 bg-[#131313] rounded-xl text-xs sm:text-sm text-gray-300">{percent}</h4>
    </motion.div>
  );
}

export default SkillCard;

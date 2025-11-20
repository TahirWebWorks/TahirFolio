import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import mainProfile from '../../../assets/Tahir_shah.png'

function HeroSection() {
  return (
    <div className="flex justify-between items-center pt-8 sm:pt-16 lg:pt-26">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am Tahir,
          </motion.h2>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl/20 font-semibold my-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #c9f31d, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Web Developer + Web Designer
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl/8 font-light max-w-[470px] mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I break down complex user experience problems to create integrity focussed solutions that connect billions of people.
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="px-6 sm:px-8 py-2 sm:py-3 text-[#c9f31d] border border-[#c9f31d] rounded-full cursor-pointer hover:bg-[#c9f31d] hover:text-black transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV <Download className="inline ml-2" size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-center lg:justify-end w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.img
            className="w-[250px] sm:w-[300px] lg:w-[400px] bg-black border border-[#c8f31d88] rounded-3xl z-10"
            src={mainProfile}
            alt="Profile"
            initial={{ rotate: 5 }}
            animate={{ rotate: 5 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.div
            className="w-32 h-32 sm:w-48 sm:h-48 lg:w-200 lg:h-200 bg-radial from-[#c8f31d73] to-0% via-[#c8f31d00] absolute top-4 sm:top-8 lg:top-25 opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;

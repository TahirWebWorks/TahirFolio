import React from "react";
import { skillsData } from '../../../data/skillsData';
import SkillCard from "./SkillCard";

function SkillsSection() {
  return (
    <div className="bg-[#1f1f1fb5]">
      <div className="max-w-[1300px] mx-auto px-4 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h3 className="text-lg sm:text-xl">My Skills</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4 lg:my-5">
            Let&apos;s Explore Popular Skills & Experience
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
            doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
            inventore veritatis
          </p>
          <button className="bg-[#c9f31d] px-6 sm:px-8 py-2 sm:py-3 text-white border border-[#c9f31d] rounded mt-4 sm:mt-6 hover:bg-transparent hover:text-[#c9f31d] transition-colors">
            Hire Me
          </button>
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

import React from "react";
import { skillsData } from '../../../data/skillsData';
import SkillCard from "./SkillCard";

function SkillsSection() {
  return (
    <div className=" flex gap-25 bg-[#c9f31d1a]">
      <div className="w-[1300px] mx-auto px-4 py-20 flex gap-16">
        <div className="w-[40%]">
          <h3 className="text-xl">My Skills</h3>
          <h2 className="text-5xl my-5">
            Let’s Explore Popular Skills & Experience
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
            doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
            inventore veritatis
          </p>
          <button className="bg-[#c9f31d] px-8 py-2 text-white border border-[#c9f31d] rounded mt-6">
            Hire Me
          </button>
        </div>
        <div className="w-[60%]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

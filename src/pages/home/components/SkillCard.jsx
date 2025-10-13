import React from "react";

function SkillCard({icon, title, percent}) {
  return (
    <div className="flex flex-col justify-center items-center p-3 sm:p-4 bg-[#1f1f1f] rounded-2xl text-center border-2 border-[#ffffff1a] hover:border-[#c9f31d] transition-colors duration-300">
      <img className="mt-2 sm:mt-3 w-8 sm:w-10 lg:w-12" src={icon} alt={title} />
      <h3 className="text-sm sm:text-lg lg:text-xl my-2 sm:my-3 text-white">{title}</h3>
      <h4 className="w-full py-1 sm:py-2 bg-[#131313] rounded-xl text-xs sm:text-sm text-gray-300">{percent}</h4>
    </div>
  );
}

export default SkillCard;



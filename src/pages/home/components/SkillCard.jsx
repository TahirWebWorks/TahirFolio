import React from "react";

function SkillCard({icon, title, percent}) {
  return (
    <div className="flex flex-col justify-center items-center p-3 bg-[#1f1f1f] rounded-2xl text-center border-2 border-[#ffffff1a] hover:border-[#c9f31d]">
      <img className="mt-3 w-12" src={icon} alt="WordPress" />
      <h3 className="text-xl my-3">{title}</h3>
      <h4 className="w-full py-2 bg-[#131313] rounded-xl">{percent}</h4>
    </div>
  );
}

export default SkillCard;



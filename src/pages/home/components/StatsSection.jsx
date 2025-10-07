import React from "react";

function StatsSection() {
  return (

    <div className="grid grid-cols-4 grid-rows-2 my-24 gap-8 ">
      <div className="p-10 rounded-2xl col-span-2 row-span-2 bg-gradient-to-br from-10% via-[#272f06] to-[#c9f31d]">
        <div>
        <div className="flex items-center gap-10">
        <h2 className="text-[150px] font-bold text-gray-900">5+</h2>
        <h3 className="text-4xl font-semibold">
          Years Of Experience
        </h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Crafting digital experiences through clean code and intuitive design.
          I specialize in creating responsive, user-friendly websites
        </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center bg-[#191818] rounded-2xl">
        <div className="text-3xl font-bold">150+</div>
        <div className="text-gray-600 mt-2">Projects Completed</div>
      </div>
      <div className="flex flex-col items-center justify-center text-center bg-[#191818] rounded-2xl">
        <div className="text-3xl font-bold">50+</div>
        <div className="text-gray-600 mt-2">UI/UX Designs</div>
      </div>
      <div className="flex flex-col items-center justify-center text-center bg-[#191818] rounded-2xl">
        <div className="text-3xl font-bold">98%</div>
        <div className="text-gray-600 mt-2">Client Satisfaction</div>
      </div>

      <div className="flex flex-col items-center justify-center text-center bg-[#191818] rounded-2xl">
        <div className="text-3xl font-bold ">40+</div>
        <div className="text-gray-600 mt-2">Happy Clients</div>
      </div>
    </div>
  );
}

export default StatsSection;

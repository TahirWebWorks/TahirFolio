import React from "react";
import { statsData } from '../../../data/statsData'
import StatCard from './StatCard';

function StatsSection() {
  return (

    <div>
      <div className="w-[1300px] mx-auto px-4 flex gap-8">
        <div className="w-[50%] p-10 rounded-2xl col-span-2 row-span-2 bg-gradient-to-br from-10% via-[#272f06] to-[#c9f31d]">
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
        <div className="w-[50%] grid grid-cols-2 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;

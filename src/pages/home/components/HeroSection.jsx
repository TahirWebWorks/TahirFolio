import React from "react";
import { Download } from "lucide-react";
import mainProfile from '../../../assets/tahir_shah.png'

function HeroSection() {
  return (
    <div className="flex justify-between items-center py-20">
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold ">I am Tahir,</h2>
        <h2 
          className="text-7xl/20 font-semibold my-3"
          style={{
            background: 'linear-gradient(90deg, #8C52FF, #FFFFFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Web Developer + Web Designer
        </h2>
        <p className="text-xl/8 font-light w-[470px]">I break down complex user experience problems to create integrity focussed solutions that connect billions of people.</p>
        <div className="mt-10">
          <button className="px-8 py-3 text-[#8C52FF] border border-[#8C52FF] rounded-full">Download CV <Download className="inline ml-2" size={16} /></button>
        </div>
      </div>
      <div className="flex justify-end w-1/2">
       <img className="w-[400px] bg-black border border-[#3d2965] rounded-3xl rotate-5" src={mainProfile} alt="Profile"/>
      </div>
    </div>
  );
}

export default HeroSection;

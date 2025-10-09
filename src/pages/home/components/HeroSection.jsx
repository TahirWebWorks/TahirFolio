import React from "react";
import { Download } from "lucide-react";
import mainProfile from '../../../assets/tahir_shah.png'

function HeroSection() {
  return (
    <div className="flex justify-between items-center pt-20">
      <div className="w-[1300px] mx-auto px-4 py-20 flex gap-16">
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold ">I am Tahir,</h2>
          <h2
            className="text-7xl/20 font-semibold my-3"
            style={{
              background: 'linear-gradient(90deg, #c9f31d, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Web Developer + Web Designer
          </h2>
          <p className="text-xl/8 font-light w-[470px]">I break down complex user experience problems to create integrity focussed solutions that connect billions of people.</p>
          <div className="mt-10">
            <button className="px-8 py-3 text-[#c9f31d] border border-[#c9f31d] rounded-full">Download CV <Download className="inline ml-2" size={16} /></button>
          </div>
        </div>
        <div className="flex justify-end w-1/2">
          <img className="w-[400px] bg-black border border-[#c8f31d88] rounded-3xl rotate-5 hover:rotate-0 transition-transform duration-500 ease-in-out z-1" src={mainProfile} alt="Profile" />
          <div className="w-200 h-200 bg-radial from-[#c8f31d73] to-0% via-[#c8f31d00] absolute top-25">
          </div>
          {/* <h3 className="text-9xl absolute top-70 left-[30%]">HI</h3> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

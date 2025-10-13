import React from "react";
import { Download } from "lucide-react";
import mainProfile from '../../../assets/tahir_shah.png'

function HeroSection() {
  return (
    <div className="flex justify-between items-center pt-8 sm:pt-16 lg:pt-26">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold">I am Tahir,</h2>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl/20 font-semibold my-3"
            style={{
              background: 'linear-gradient(90deg, #c9f31d, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Web Developer + Web Designer
          </h2>
          <p className="text-lg sm:text-xl/8 font-light max-w-[470px] mx-auto lg:mx-0">I break down complex user experience problems to create integrity focussed solutions that connect billions of people.</p>
          <div className="mt-6 sm:mt-10">
            <button className="px-6 sm:px-8 py-2 sm:py-3 text-[#c9f31d] border border-[#c9f31d] rounded-full cursor-pointer hover:bg-[#c9f31d] hover:text-black transition-colors">
              Download CV <Download className="inline ml-2" size={16} />
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2 relative">
          <img className="w-[250px] sm:w-[300px] lg:w-[400px] bg-black border border-[#c8f31d88] rounded-3xl rotate-5 hover:rotate-0 transition-transform duration-500 ease-in-out z-10" src={mainProfile} alt="Profile" />
          <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-200 lg:h-200 bg-radial from-[#c8f31d73] to-0% via-[#c8f31d00] absolute top-4 sm:top-8 lg:top-25 opacity-50">
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

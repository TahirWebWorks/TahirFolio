import React from 'react';
import Skills from '../../../assets/wordpress.webp';

function SkillsSection(){
    return(
        <div className='flex py-20 gap-25'>
          <div className='w-[45%]'>
            <h3 className='text-xl'>My Skills</h3>
            <h2 className='text-5xl my-5'>Let’s Explore Popular Skills & Experience</h2>
            <p>Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo inventore veritatis</p>
            <button className='bg-[#c9f31d] px-8 py-2 text-white border border-[#c9f31d] rounded mt-6'>Hire Me</button>
          </div>
          <div>
            <div>
                <img src={Skills} alt="WordPress"/>
            </div>
          </div>
        </div>
    )
}

export default SkillsSection;
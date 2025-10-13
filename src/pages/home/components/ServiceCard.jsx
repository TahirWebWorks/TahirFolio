import React from 'react';
import {ArrowRight} from 'lucide-react';

function ServicesCard({id, title, short_description}) {
    return (
        <div>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 p-4 sm:p-5 border border-[#c8f31d6a] hover:bg-gradient-to-r from-[#c9f31d] to-[#3d4b05] rounded-xl transition-all duration-300 hover:text-black'>
                <h3 className='text-lg sm:text-xl font-bold text-[#c9f31d] hover:text-black min-w-[40px] sm:w-[5%]'>0{id}</h3>
                <h2 className='text-xl sm:text-2xl font-semibold text-start w-full sm:w-[25%]'>{title}</h2>
                <p className='text-sm sm:text-base text-start w-full sm:w-[40%] text-gray-300'>{short_description}</p>
                <div className='flex justify-center sm:justify-end w-full sm:w-auto'>
                    <ArrowRight className='hover:scale-110 transition-transform' size={20} />
                </div>
            </div>    
        </div>
    )
}

export default ServicesCard;
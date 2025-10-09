import React from 'react';
import {ArrowRight} from 'lucide-react';

function ServicesCard({id, title, short_description}) {
    return (
        <div>
            <div className='flex items-center justify-between gap-5 p-5 pr-8 border-1 border-[#c8f31d6a] hover:bg-gradient-to-r  from-[#c9f31d] to-[#3d4b05] rounded-xl'>
                <h3 className='w-[5%]'>{id}</h3>
                <h2 className='w-[25%] text-2xl font-semibold text-start'>{title}</h2>
                <p className='w-[40%] text-start'>{short_description}</p>
                <ArrowRight />
            </div>    
        </div>
    )
}

export default ServicesCard;
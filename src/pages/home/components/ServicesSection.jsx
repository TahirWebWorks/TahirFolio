import React from 'react';
import { servicesData } from '../../../data/servicesData';
import ServiceCard from './ServiceCard';

function ServicesSection() {
    return (
        <div>
            <div className='max-w-[1300px] mx-auto px-4 text-center pb-20'>
                <div className=' mb-15 mx-auto flex flex-col justify-center gap-3'>
                    <h3 className='text-center bg-gradient-to-b from-[#c9f31d] to-black-400 inline-block w-18 h-8 rounded'>Services</h3>
                    <h2 className='text-5xl font-semibold text-start'>My Quality Services</h2>
                    <p className='w-xl text-medium text-gray-400 mt-2 text-start'>We put your ideas and thus your wisheds in the form of a unique web project that inspires you and your customers.</p>
                </div>
                <div className='flex flex-col gap-5 pr-8 '>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
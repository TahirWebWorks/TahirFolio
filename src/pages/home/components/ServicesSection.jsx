import React from 'react';
import { servicesData } from '../../../data/servicesData';
import ServiceCard from './ServiceCard';

function ServicesSection() {
    return (
        <div>
            <div className='max-w-[1300px] mx-auto px-4 py-12 sm:py-16 lg:py-20'>
                <div className='mb-8 sm:mb-12 lg:mb-15 mx-auto flex flex-col justify-center gap-3'>
                    <h3 className='text-center bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-black px-4 py-2 rounded-full text-sm sm:text-base font-medium inline-block mx-auto w-fit'>Services</h3>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-start'>My Quality Services</h2>
                    <p className='max-w-2xl text-sm sm:text-base lg:text-medium text-gray-400 mt-2 text-center lg:text-start mx-auto lg:mx-0'>We put your ideas and thus your wisheds in the form of a unique web project that inspires you and your customers.</p>
                </div>
                <div className='flex flex-col gap-4 sm:gap-5'>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
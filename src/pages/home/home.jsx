import React from 'react';
import HeroSection  from './components/HeroSection';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';

function Home(){
    return(
        <div className='flex flex-col gap-32'>
           <HeroSection/>
           <StatsSection/>
           <SkillsSection/>
           <ServicesSection/>
        </div>
    )
}

export default Home;
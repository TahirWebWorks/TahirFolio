import React from 'react';
import HeroSection  from './components/heroSection';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import CtaSection from './components/CtaSection'

function Home(){
    return(
        <div className='flex flex-col gap-32'>
           <HeroSection/>
           <StatsSection/>
           <SkillsSection/>
           <ServicesSection/>
           <CtaSection/>
        </div>
    )
}

export default Home;
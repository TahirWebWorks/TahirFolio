import React from 'react';
import HeroSection  from './components/heroSection';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';

function Home(){
    return(
        <div>
           <HeroSection/>
           <StatsSection/>
           <SkillsSection/>
        </div>
    )
}

export default Home;
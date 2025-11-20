import React from 'react';
import HeroSection  from './components/HeroSection.jsx';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesPreview from './components/CaseStudiesPreview';
import CtaSection from './components/CtaSection'

function Home(){
    return(
        <div className='flex flex-col gap-32'>
           <section id="home">
               <HeroSection/>
           </section>
           <section id="stats">
               <StatsSection/>
           </section>
           <section id="skills">
               <SkillsSection/>
           </section>
           <section id="services">
               <ServicesSection/>
           </section>
           <section id="portfolio">
               <CaseStudiesPreview/>
           </section>
           <section id="contact">
               <CtaSection/>
           </section>
        </div>
    )
}

export default Home;
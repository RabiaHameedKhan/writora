import React from 'react'
import HeroSection from '../components/Herosection'
import AboutSection from '../components/Aboutsection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'

const Home=()=>{
    return(
        <>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <TestimonialsSection></TestimonialsSection>
            <Footer></Footer>
        </>
    )
}

export default Home;
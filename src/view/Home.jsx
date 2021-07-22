import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import OurWork from '../components/OurWorkHome'
import Services from '../components/ServicesHome'

const Home = () => {
    return (
        <div className='bgGrey'>
            <MainContent />           
            <OurWork />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home

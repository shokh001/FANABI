import React from 'react'
import AboutSectionUslugi from '../components/AboutSectionUslugi'
import AdvertisingVideo from '../components/AdvertisingVideo'
import AnimationVideo from '../components/AnimationVideo'
import Footer from '../components/Footer'
import GraphicVideo from '../components/GraphicVideo'
import ImageVideo from '../components/ImageVideo'
import Reportaj from '../components/Reportaj'
import ServiceCard from '../components/ServiceCard'
import nextBg from '../assets/icons/nextBg.svg'
import './ServicesSection.scss'


const ServicesSection = () => {
    
    return (
        <div className='bgGrey'>
            <ServiceCard />
            <GraphicVideo />
            <AnimationVideo />
            <ImageVideo />
            <AdvertisingVideo />
            <Reportaj />
            <AboutSectionUslugi />
            <div className="container">
                <div className='more'>
                    <div className="rectangle"></div>
                    <p>Заказать медиапродукт</p>
                    <img src={nextBg} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServicesSection

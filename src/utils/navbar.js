import Home from '../view/Home'
import OurWorkSection from '../view/OurWorkSection'
import ServicesSection from '../view/ServicesSection'
import AboutTheStudio from '../view/AboutTheStudio'
import ContactSection from '../view/ContactSection'

export const navbarData = [
    {id:1, path:"/home", component: Home},
    {id:2, title: "Наши работы", path:"/Наши", component: OurWorkSection},
    {id:3, title: "Услуги и цены", path:"/Услуги", component: ServicesSection},
    {id:4, title: "О студии", path:"/студии", component: AboutTheStudio},
    {id:5, title: "Контакты", path:"/Контакты", component: ContactSection}
] 
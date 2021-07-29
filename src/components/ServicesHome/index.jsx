import React, { useContext } from 'react'
import checked from '../../assets/icons/circle-checked.svg'
import right from '../../assets/icons/arrowRight.svg'
import dots from '../../assets/images/dots.png'
import nextBg from '../../assets/icons/nextBg.svg'
import { ServiceData } from '../../mock/data'
import './style.scss'
import { ServiceCardIDContext } from '../../context/context'
import { Link } from 'react-router-dom'

const Services = () => {

    const [idContext, setIdContext] = useContext(ServiceCardIDContext);

    const getID = (id) => {
        setIdContext(id)
    }

    return (
        <div className='services'>
            <div className="container">
                <h2>Услуги и цены <img src={dots} alt="" /></h2>
                <div className='cards'>
                    {
                        ServiceData.map(({ id, summa, title, descr1, descr2 }) => {
                            return (
                                <Link 
                                to='/prmedia' 
                                onClick={()=>getID(id)}
                                className="card" 
                                key={id}>
                                    <h4>{title}</h4>
                                    <p>
                                        <img src={checked} alt="" />
                                        {descr1}
                                    </p>
                                    <p>
                                        <img src={checked} alt="" />
                                        {descr2}
                                    </p>

                                    <div className="footer">
                                        <div className="line"></div>
                                        <div className='foot'>
                                            <h3>от {summa}</h3>
                                            <img src={right} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

                <a href='#' className='moreAbout'>
                    <div className="rectangle"></div>
                    <p>Заказать медиапродукт</p>
                    <img src={nextBg} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Services

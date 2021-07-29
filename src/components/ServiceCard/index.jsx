import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import dots from '../../assets/images/dots.png'
import { ServiceCardData } from '../../mock/data'
import { ServiceCardIDContext } from '../../context/context'
import './styleCard.scss'

const ServiceCard = () => {
    const [idContext, setIdContext] = useContext(ServiceCardIDContext);

    const getID = (id) => {
        setIdContext(id)
    }

    return (
        <div className='serviceCard'>
            <div className="container">
                <h2>Услуги и цены
                    <img src={dots} alt="" />
                </h2>

                <div className="cardWrapper">
                    {
                        ServiceCardData.map(({ id, text, descr, icon }) => {
                            return (
                                <Link
                                    to='/prmedia'
                                    onClick={() => getID(id)}
                                    className="card"
                                    key={id}
                                >
                                    <div className="icon-number">
                                        <div className="shadow">
                                            <div className="backgorund">
                                                <img src={icon} alt="" />
                                            </div>
                                        </div>

                                        <p>{text}</p>
                                    </div>

                                    <p>{descr}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceCard

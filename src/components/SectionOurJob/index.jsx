import React, { useState } from 'react'
import dots from '../../assets/images/dots.png'
import { GaleryData } from '../../mock/data'
import { Link } from 'react-router-dom'
import nextBg from '../../assets/icons/nextBg.svg'
import './styleOurJob.scss'

const SectionOurJob = () => {

    const [active, setActive] = useState(3);

    const handleClick = (number) => {
        setActive(number)
    }
    return (
        <div className='sectionOurJob'>
            <div className="container">
                <div className="parts">
                    <h2>Наши работы
                        <img src={dots} alt="" />
                    </h2>
                    <div className="right-part">
                        <a href="#" onClick={()=>handleClick(1)} style={{color: active===1 && '#FB6E01'}}># Видеоролики</a>
                        <a href="#" onClick={()=>handleClick(2)} style={{color: active===2 && '#FB6E01'}}># Разработка PR-стратегии</a>
                        <a href="#" onClick={()=>handleClick(3)} style={{color: active===3 && '#FB6E01'}}># Графический дизайн</a>
                        <a href="#" onClick={()=>handleClick(4)} style={{color: active===4 && '#FB6E01'}}># Онлайн сервисы</a>
                    </div>
                </div>

                <div className="galery">
                    {
                        GaleryData.map(({ id, img }) => {
                            return (
                                <Link 
                                to='/capital' 
                                className="card" 
                                key={id}
                                style={{display: (active===2 || active === 4) && 'none'}}
                                >
                                    <img src={img} alt="" />

                                    <div className="hover">
                                        <h3>RPI CAPITAL</h3>
                                        <div className="line"></div>
                                        <p>логотип</p>
                                    </div>
                                </Link>
                            )
                        }
                        )
                    }
                </div>

                <div className='more'>
                    <div className="rectangle"></div>
                    <p>Заказать медиапродукт</p>
                    <img src={nextBg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionOurJob

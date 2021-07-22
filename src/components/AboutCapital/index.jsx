import React from 'react'
import dots from '../../assets/images/dots.png'
import img1 from '../../assets/images/capital-img.png'
import img2 from '../../assets/images/capital-img2.png'
import img3 from '../../assets/images/capital-img3.png'
import nextBg from '../../assets/icons/nextBg.svg'
import circle from '../../assets/icons/circle.svg'
import './styleRpiAbout.scss'
const AboutCapital = () => {
    return (
        <div className='aboutCapital'>
            <div className="container">
                <div className="section">
                    <h1>RPI CAPITAL
                        <img src={dots} alt="" />
                    </h1>
                    <span># графический дизайн</span>
                </div>

                <img src={img1} alt="" className='imgs'/>

                <div className="card">
                    <h4>О проекте:</h4>
                    <p>Компания  «Rpi capital»  управляет инвестициями, вкладывая их в собственные проекты. Создает системы корпоративного управления и контроля
                        над бизнесом</p>
                    <div className="part">
                        <h4>Задача:</h4>
                        <p>Разработать яркий и заметный логотип для финансовой компании «Rpi capital» </p>
                    </div>
                    <div className="part">
                        <h4>Решение:</h4>
                        <p>
                            <img src={circle} alt="" />
                            мы придумали ритмичный, строгий, легко запоминающийся логотип
                        </p>
                        <p>
                            <img src={circle} alt="" />
                            в круглых деталях логотипа читается визуальная рифма: круги букв r и i, а также полуовал буквы p складываются в символический график роста,
                            неудержимо устремленный вверх
                        </p>
                        <p>
                            <img src={circle} alt="" />
                            яркий и заметный логотип хорошо смотрится на самых разных носителях
                        </p>
                    </div>
                </div>

                <img src={img2} alt="" className='imgs'/>
                <img src={img3} alt=""  className='img-3 imgs'/>

                <div className='more'>
                    <div className="rectangle"></div>
                    <p>Заказать медиапродукт</p>
                    <img src={nextBg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutCapital

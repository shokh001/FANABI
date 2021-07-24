import React, { useState } from 'react'
import img from '../../assets/images/design.png'
import dots from '../../assets/images/dots.png'
import left from '../../assets/icons/next-left.svg'
import right from '../../assets/icons/next-right.svg'
import task from '../../assets/icons/task.svg'
import plan from '../../assets/icons/plan.svg'
import circle from '../../assets/icons/circle.svg'
import nextBg from '../../assets/icons/nextBg.svg'
import './nashStyle.scss'
import { Link } from 'react-router-dom'

const NashRabot = () => {

    const [slide, setSlide] = useState(0)

    const rightBtn = () => {
        (slide >= 2) ? setSlide(0) : setSlide(slide + 1)
    }
    const leftBtn = () => {
        (slide <= 0) ? setSlide(slide) : setSlide(slide - 1)
    }


    return (
        <div className="nashRabot">
            <div className="container titleBox">
                <img src={dots} alt="" className='dots' />
                <h2>Наши работы</h2>
                <div className="buttons">
                    <div>
                        <img onClick={leftBtn} src={left} alt="" />
                        <img onClick={rightBtn} src={right} alt="" />
                    </div>
                    <Link to='/Наши' className='button' type='button'>Смотреть все</Link>
                </div>
            </div>

            <div className="container">
                <Link to='/capital' className='slider'>
                    <div className='slide' style={{ transform: `translateX(${(0 - slide) * 100}%)` }}>
                        <div className="slide-left">
                            <img src={img} alt="" />
                            <div className='design'>
                                <span>01 / 03</span>
                                <div className="grafikDesign">
                                    # графический дизайн
                                </div>
                            </div>
                        </div>

                        <div className="slide-right">
                            <div className="task">
                                <img src={task} alt="" className='icon-task' />
                                <h3>Задача:</h3>
                                <p>разработать яркий и заметныйлоготип для финансовой компании «Rpi capital»</p>
                            </div>
                            <div className="plan task">
                                <img src={plan} alt="" className='icon-plan' />
                                <h3>Решение:</h3>
                                <p>
                                    <img src={circle} alt="" />
                                    мы придумали ритмичный, строгий, легко запоминающийся логотип
                                </p>
                                <p>
                                    <img src={circle} alt="" />
                                    в круглых деталях логотипа читается визуальная рифма: круги букв r и i, а также
                                    полуовал буквы p складываются в символический график роста, неудержимо
                                    устремленный вверх
                                </p>
                                <p>
                                    <img src={circle} alt="" />
                                    яркий и заметный логотип хорошо смотрится на самых разных носителях
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='slide' style={{ transform: `translateX(${(1 - slide) * 100}%)` }}>
                        <div className="slide-left">
                            <img src={img} alt="" />
                            <div className='design'>
                                <span>01 / 03</span>
                                <div className="grafikDesign">
                                    # графический дизайн
                                </div>
                            </div>
                        </div>

                        <div className="slide-right">
                            <div className="task">
                                <img src={task} alt="" className='icon-task' />
                                <h3>Задача:</h3>
                                <p>разработать яркий и заметныйлоготип для финансовой компании «Rpi capital»</p>
                            </div>
                            <div className="plan task">
                                <img src={plan} alt="" className='icon-plan' />
                                <h3>Решение:</h3>
                                <p>
                                    <img src={circle} alt="" />
                                    мы придумали ритмичный, строгий, легко запоминающийся логотип
                                </p>
                                <p>
                                    <img src={circle} alt="" />
                                    в круглых деталях логотипа читается визуальная рифма: круги букв r и i, а также
                                    полуовал буквы p складываются в символический график роста, неудержимо
                                    устремленный вверх
                                </p>
                                <p>
                                    <img src={circle} alt="" />
                                    яркий и заметный логотип хорошо смотрится на самых разных носителях
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='slide' style={{ transform: `translateX(${(2 - slide) * 100}%)` }}>
                        <div className="slide-left">
                            <img src={img} alt="" />
                            <div className='design'>
                                <span>01 / 03</span>
                                <div className="grafikDesign">
                                    # графический дизайн
                                </div>
                            </div>
                        </div>

                        <div className="slide-right">
                            <div className="task">
                                <img src={task} alt="" className='icon-task' />
                                <h3>Задача:</h3>
                                <p>разработать яркий и заметныйлоготип для финансовой компании «Rpi capital»</p>
                            </div>
                            <div className="plan task">
                                <img src={plan} alt="" className='icon-plan' />
                                <h3>Решение:</h3>
                                <p>
                                    <img src={circle} alt="" />
                                    мы придумали ритмичный, строгий, легко запоминающийся логотип
                                </p>
                                <p>
                                    <img src={circle} alt="" />
                                    в круглых деталях логотипа читается визуальная рифма: круги букв r и i, а также
                                    полуовал буквы p складываются в символический график роста, неудержимо
                                    устремленный вверх
                                </p>
                                <p>
                                    <img src={circle} alt="" />
                                    яркий и заметный логотип хорошо смотрится на самых разных носителях
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <a href='#' className='moreAbout'>
                    <div className="rectangle"></div>
                    <p>Заказать медиапродукт</p>
                    <img src={nextBg} alt="" />
                </a>
            </div>
        </div>
    )
}

export default NashRabot

import React from 'react'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import nextBg from '../../assets/icons/nextBg.svg'
import dots from '../../assets/images/dots.png'
import './style.scss'

const Contact = ({ title }) => {
    return (
        <div className='contact' style={{paddingTop: title && '80px', paddingBottom: title && '0'}}>
            <div className="container">
                <h2>
                    {title? 'Контакты' :'Наши контакты'}
                    <img src={dots} alt="" />
                </h2>
                <div className='wrapper' style={{marginBottom: title && '120px'}}>
                    <div className="left-content">
                        <div className='info'>
                            <h3>Адрес:</h3>
                            <p>г. Ташкент, ул. Абдулла Каххара, 2Б </p>
                        </div>
                        <div className='info'>
                            <h3>Телефон:</h3>
                            <a href="#">+998900000000</a>
                        </div>
                        <div className='info'>
                            <h3>Эл. почта:</h3>
                            <a href="#">1nfo@fanabi.uz</a>
                        </div>
                        <div className='info'>
                            <h3>Режим работы:</h3>
                            <p>понедельник-пятница, с 9:30 до 18:30</p>
                        </div>

                        <div className="messangers">
                            <a href="#"><img src={facebook} alt="" /></a>
                            <a href="#"><img src={instagram} alt="" className='twitter' /></a>
                            <a href="#"><img src={twitter} alt="" /></a>
                        </div>
                    </div>

                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1245267388367!2d69.2563535156683!3d41.28439421033598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aeb51de45ef%3A0xa1eb47230fdba595!2zMiDRg9C70LjRhtCwINCQ0LHQtNGD0LvQu9GLINCa0LDRhdGF0LDRgNCwLCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1617614755903!5m2!1sru!2s" style={{border:'0'}}  loading="lazy"></iframe>
                    </div>
                </div>

                {
                    title && <a href='#' className='more'>
                    <div className="rectangle"></div>
                    <p>Заказать медиапродукт</p>
                    <img src={nextBg} alt="" />
                </a>
                }
            </div>
        </div>
    )
}

export default Contact

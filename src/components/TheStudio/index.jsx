import React, {useState} from 'react'
import img1 from '../../assets/images/study-img.jpg'
import img2 from '../../assets/images/study-img2.jpg'
import img3 from '../../assets/images/study-img3.jpg'
import dots from '../../assets/images/dots.png'
import player from '../../assets/icons/play.svg'
import circle from '../../assets/icons/circle.svg'
import nextBg from '../../assets/icons/nextBg.svg'
import ModalVideo from 'react-modal-video'
import './styleStudio.scss'

const TheStudio = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='theStudio'>
            <div className="container">
                <h2>
                    О студии
                    <img src={dots} alt="" />
                </h2>

                <div className="card">
                    <div className="card-left left">
                        <img src={img1} alt="" className='img1' />
                        <img src={img2} alt="" className='img2' />
                        <img src={img3} alt="" className='img3' />                        
                    </div>

                    <div className="card-right card-left">
                        <p><strong>Медиастудия FANABI</strong> - это команда профессионалов и энтузиастов с многолетним опытом работы в
                            сфере режиссуры, управления медиа-проектами, операторского искусства, видео-монтажа и
                            графического дизайна.</p>
                        <p>Студия обладает всеми ресурсами и возможностями для воплощения самых смелых и креативных
                            идей заказчиков.</p>
                        <p>Мы не используем шаблонные решения и применяем индивидуальный подход к каждому клиенту.</p>
                        <p>
                            <img src={circle} alt="" />
                            Как креативно рассказать о вашей продукции или компании?
                        </p>
                        <p>
                            <img src={circle} alt="" />
                            Как привлечь внимание общественности к социально-значимой проблеме?
                        </p>
                        <p>
                            <img src={circle} alt="" />
                            Как выстроить эффективную стратегию коммуникаций?
                        </p>
                        <p>Мы подскажем Вам ответы на эти и другие вопросы и поможем улучшить имидж и узнаваемость
                            Вашего бренда, изготовим медиа-продукцию любой сложности, и поддержим Вашу организацию в
                            достижении ее целей.</p>
                        <p>Узнайте более подробно о наших услугах <span>здесь</span></p>

                        <div className="wrap" onClick={() => setOpen(true)}>
                            <div className="background" >
                                <img src={player} alt="" />
                            </div>
                            <h3>наша команда</h3>
                        </div>
                        <ModalVideo className='modal' channel='youtube' autoplay isOpen={isOpen} videoId="j942wKiXFu8" onClose={() => setOpen(false)} />
                    </div>
                </div>

                <a href='#' className='more'>
                    <div className="rectangle"></div>
                    <p>Заказать медиапродукт</p>
                    <img src={nextBg} alt="" />
                </a>
            </div>
        </div>
    )
}

export default TheStudio

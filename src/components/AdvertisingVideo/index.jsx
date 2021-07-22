import React, {useState} from 'react'
import img1 from '../../assets/images/uslugi-img4.jpg'
import player from '../../assets/icons/play-button.svg'
import '../AnimationVideo/styleAnimation.scss'
import ModalVideo from 'react-modal-video'

const AdvertisingVideo = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='AnimationVideo'>
            <div className="container">
                <div className="right-section">
                    <h4>Рекламный ролик </h4>
                    <p className='text'>Это короткое видео, которое презентует  определенный продукт или услугу для увеличения  продаж</p>

                    <h5>Этапы создания рекламного ролика:</h5>

                    <div className="list-group">
                        <div className="list" style={{width: "47%"}}>
                            <p>
                                <span>1)</span>
                                Разработка идей видеоролика
                            </p>
                            <p>
                                <span>2)</span>
                                Написание сценария для ролика
                            </p>
                            <p>
                                <span>3)</span>
                                По выбранной идее пишется сценарий
                                (с вариантами событий — например,
                                с различными концовками)
                            </p>
                        </div>
                        <div className="list" style={{width: "47%"}}>
                            <p>
                                <span>4)</span>
                                Препродакшн (подготовка к съемкам)
                            </p>
                            <p>
                                <span>5)</span>
                                Продакшн (съемка ролика) 
                            </p>
                            <p>
                                <span>6)</span>
                                Постпродакшн
                            </p>
                        </div>                
                    </div>

                    <div onClick={() => setOpen(true)} className="player-img">
                        <div className='img'>
                            <img src={img1} alt="" />
                            <img src={player} alt="" className='playerIcon' />
                        </div>
                    </div>
                    <ModalVideo className='modal' channel='youtube' autoplay isOpen={isOpen} videoId="j942wKiXFu8" onClose={() => setOpen(false)} />
                </div>
            </div>
        </div>
    )
}

export default AdvertisingVideo

import React, {useState} from 'react'
import img1 from '../../assets/images/uslugi-img2.jpg'
import player from '../../assets/icons/play-button.svg'
import './styleAnimation.scss'
import ModalVideo from 'react-modal-video'

const AnimationVideo = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='AnimationVideo'>
            <div className="container">
                <div className="right-section">
                    <h4>Анимационный ролик</h4>
                    <p className='text'>Короткий видеосюжет, в котором фон, персонажи и другие детали выдуманы и нарисованы. Он
                        может быть использован на телевидении, во время презентаций бизнес-проектов, в сфере
                        образования и культуры, для рекламы товаров и услуг.</p>

                    <h5>Этапы создания рекламной анимации:</h5>

                    <div className="list-group">
                        <div className="list">
                            <p>
                                <span>1)</span>
                                Концепция
                            </p>
                            <p>
                                <span>2)</span>
                                Сценарий
                            </p>
                            <p>
                                <span>3)</span>
                                Разработка иллюстраций
                            </p>
                            <p>
                                <span>4)</span>
                                Раскадровка и аниматик
                            </p>
                        </div>
                        <div className="list">
                            <p>
                                <span>5)</span>
                                Визуальная стилистика
                            </p>
                            <p>
                                <span>6)</span>
                                Озвучка
                            </p>
                            <p>
                                <span>7)</span>
                                Анимация
                            </p>
                            <p>
                                <span>8)</span>
                                Монтаж
                            </p>
                        </div>
                        <div className="list">
                            <p>
                                <span>9)</span>
                                Постпродакшн
                            </p>
                            <p>
                                <span>10)</span>
                                Звуковое оформление
                            </p>
                            <p>
                                <span>11)</span>
                                Сведение. Видеоря синхронизируется со звуковой дорожкой
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

export default AnimationVideo

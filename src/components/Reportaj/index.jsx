import React, { useState } from 'react'
import player from '../../assets/icons/play-button.svg'
import img3 from '../../assets/images/uslugi-img5.jpg'
import ModalVideo from 'react-modal-video'
import '../GraphicVideo/styleGraphic.scss'

const Reportaj = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='graphicVideo'>
            <div className="container">
                <div className="left-section">
                    <h4>Репортаж</h4>
                    <p className='text'>
                        Это телевизионный жанр, сообщения с места событий
                    </p>

                    <h5>Этапы создания репортажа:</h5>

                    <div className="list-group" style={{ width: '80%', marginBottom: '30px' }}>
                        <div className="list" style={{ width: '47%' }}>
                            <p>
                                <span>1)</span>
                                Написание концепции
                            </p>
                            <p>
                                <span>2)</span>
                                Написание сценария
                            </p>
                            <p>
                                <span>3)</span>
                                Съемки
                            </p>
                            <p>
                                <span>4)</span>
                                Интервью
                            </p>
                        </div>
                        <div className="list" style={{ width: '47%' }}>
                            <p>
                                <span>5)</span>
                                Озвучивание текста
                            </p>
                            <p>
                                <span>6)</span>
                                Монтаж/инфографика
                            </p>
                            <p>
                                <span>7)</span>
                                Цветокоррекция
                            </p>
                            <p>
                                <span>8)</span>
                                Звуковое оформление
                            </p>
                        </div>
                    </div>

                    <div onClick={() => setOpen(true)} className="player-img">
                        <div className='img'>
                            <img src={img3} alt="" />
                            <img src={player} alt="" className='playerIcon' />
                        </div>
                    </div>
                    <ModalVideo className='modal' channel='youtube' autoplay isOpen={isOpen} videoId="j942wKiXFu8" onClose={() => setOpen(false)} />
                </div>
            </div>
        </div>
    )
}

export default Reportaj

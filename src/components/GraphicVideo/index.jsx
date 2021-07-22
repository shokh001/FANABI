import React, { useState } from 'react'
import player from '../../assets/icons/play-button.svg'
import img1 from '../../assets/images/uslugi-img.jpg'
import ModalVideo from 'react-modal-video'
import './styleGraphic.scss'

const GraphicVideo = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='graphicVideo'>
            <div className="container">
                <div className="left-section">
                    <h4>Графический ролик </h4>
                    <p className='text'>Это видеоролик, созданный в специальных программах с помощью графических средств и
                        применением анимационных элементов, фотографий, клипартов, фонов и титров. </p>

                    <p className='text'>Преимущества этого вида ролика заключается в том, что он является лучшим инструментом
                        видеорекламы для рекламных кампаний, с ограниченными сроками и бюджетом. Ведь процесс
                        создания такого ролика не требует подбора актеров, поиска места съемки, работы костюмеров и
                        гримеров и т.д, а значит, ролик будет изготовлен в кратчайшие сроки. Такой ролик моментально
                        донесет всю необходимую информацию до целевой аудитории с помощью применения
                        визуальных образов, закадрового текста и звуковой дорожки. Отлично подходит в использовании
                        презентаций, отчетности и т.д</p>

                    <p className='text'>В производстве графического ролика задействовано меньше специалистов, отсутствует
                        съемочный процесс, это определяет его небольшую стоимость. </p>

                    <p>Стоимость данного ролика начинается <span className='blackColor'> от  5 000 000 млн сумов</span> и выше. Зависит от сложности заказа и объема работы</p>

                    <h5>Этапы создания графического ролика:</h5>

                    <div className="list-group">
                        <div className="list">
                            <p>
                                <span>1)</span>
                                Написание концепции ролика
                            </p>
                            <p>
                                <span>2)</span>
                                Написание сценария
                            </p>
                            <p>
                                <span>3)</span>
                                Работа дизайнера
                            </p>
                        </div>
                        <div className="list">
                            <p>
                                <span>4)</span>
                                Озвучивание диктора
                            </p>
                            <p>
                                <span>5)</span>
                                Звуковое оформление
                            </p>
                            <p>
                                <span>6)</span>
                                Цветокоррекция
                            </p>
                        </div>

                        <p>
                            <span>7)</span>
                            Написание титров, редактирование
                            итогового ролика
                        </p>
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

export default GraphicVideo

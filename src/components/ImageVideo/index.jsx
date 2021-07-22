import React, {useState}  from 'react'
import player from '../../assets/icons/play-button.svg'
import img3 from '../../assets/images/uslugi-img3.jpg'
import ModalVideo from 'react-modal-video'
import '../GraphicVideo/styleGraphic.scss'

const ImageVideo = () => {
    const [isOpen, setOpen] = useState(false)
    return (        
         <div className='graphicVideo'>
         <div className="container">
             <div className="left-section">
                 <h4>Имиджевый ролик</h4>
                 <p className='text'>
                     Основной целью является формирование положительного имиджа и образа компании. Имиджевые
                     ролики не являются основой коммерческой ориентации, но играют не менее важную роль в процессе
                     создания медиа-образа организации. И если каналы распространения и направленность этого
                     контента почти полностью соответствуют презентационным роликам, то задачи решаются иные.
                     Имиджевые видео помогают создать положительное впечатление о компании, укрепить ее статус и
                     репутацию
                 </p>

                 <h5>Какие задачи могут решить презентационные и имиджевые ролики:</h5>

                 <div className="list-group" style={{ width: '80%', marginBottom:'30px' }}>
                     <div className="list" style={{ width: '47%' }}>
                         <p>
                             <span>1)</span>
                             Рассказать о компании и ее истории
                         </p>
                         <p>
                             <span>2)</span>
                             Презентовать новый продукт
                         </p>
                         <p>
                             <span>3)</span>
                             Повысить лояльность клиентов
                         </p>
                         <p>
                             <span>4)</span>
                             Создать или поддержать положительный имидж компании
                         </p>
                     </div>
                     <div className="list" style={{ width: '47%' }}>
                         <p>
                             <span>5)</span>
                             Привлечь новые кадры
                         </p>
                         <p>
                             <span>6)</span>
                             Заинтересовать потенциальных инвесторов и партнеров
                         </p>
                         <p>
                             <span>7)</span>
                             Выгодно выделиться среди конкурентов
                         </p>
                     </div>
                 </div>

                 <p>Презентационные и имиджевые видео безусловно  имеют смежные функции и совмещение их в одном корпоративном
                     фильме, решающим сразу все задачи,приемлемо.</p>

                 <div  onClick={() => setOpen(true)} className="player-img">
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

export default ImageVideo

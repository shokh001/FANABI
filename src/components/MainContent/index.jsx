import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import './mainContent.scss'
import 'animate.css'

import slidervideo from '../../assets/images/slidervideo.jpg'
import checked from '../../assets/icons/circle-checked.svg'
import play from '../../assets/icons/play.svg'


const MainContent = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="mainContent">
            <div className="container">
                <div className="content">
                    <h2>Студия по созданию <span>медиапродуктов</span></h2>
                    <p><img src={checked} alt="error" /> cоздание имиджевых социальных и рекламных роликов </p>
                    <p><img src={checked} alt="error" /> разработка PR-стратегии </p>
                    <p><img src={checked} alt="error" /> графический дизайн </p>
                    <p><img src={checked} alt="error" /> комплексное продвижение, поисковая оптимизация, онлайн сервисы </p>
                </div>

                <a href='#' className="slideVideo" onClick={() => setOpen(true)}>
                    <div className="slidervideo">
                        <img src={slidervideo} alt="slidervideo" />
                    </div>                    
                    <div className="background animate__animated animate__pulse">
                        <img src={play} alt="" />
                    </div>
                    <h2>наша команда</h2>
                </a>
                <ModalVideo className='modal' channel='youtube' autoplay isOpen={isOpen} videoId="j942wKiXFu8" onClose={() => setOpen(false)} />
            </div>
        </div>
    )
}

export default MainContent

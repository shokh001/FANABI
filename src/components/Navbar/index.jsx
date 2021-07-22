import React, { useState } from 'react'
import { navbarData } from '../../utils/navbar'
import { useHistory, Link } from 'react-router-dom'
import './navbar.scss'

import Img from '../../assets/images/logo.png'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import call from '../../assets/icons/call.svg'
import arrowBottom from '../../assets/icons/bottom-arrow.svg'

const Navbar = () => {

    const history = useHistory()
    const onClickLogo = () => {
        setActiveLink(0)
        history.push('/home')
    }

    const [activeLink, setActiveLink] = useState(0)

    const [display, setDisplay] = useState(false)
    const [russian, setRussian] = useState('Ru')
    const [english, setEnglish] = useState('Eng')
    const [uzbek, setUzbek] = useState('O`z')

    const English = () => {
        setEnglish(russian)
        setRussian(english);
        setDisplay(false)
    }

    const Uzbek = () => {
        setUzbek(russian)
        setRussian(uzbek);
        setDisplay(false)
    }

    const handleClick = (id) => {
        setActiveLink(id)
    }


    return (
        <div className="navbar">
            <div className="container">
                <div className="logo" onClick={onClickLogo}>
                    <img src={Img} />
                </div>
                <div className="navbarLinks">
                    {navbarData.map(({ id, path, title }) => (
                        <Link
                            onClick={() => handleClick(id)}
                            className={
                                'link' +
                                (id === activeLink ? " active" : "")
                            }
                            key={id} to={path}
                        >
                            <span className="original">{title}</span>
                            <span className="hover">{title}</span>
                        </Link>
                    ))}
                </div>
                <div className="right">
                    <div className="messangers">
                        <a href="#">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="" />
                        </a>
                    </div>

                    <div className="call">
                        <img src={call} alt="" />
                        <a href="#">+998901131310</a>
                    </div>

                    <div className="language" onClick={() => setDisplay(!display)}>
                        <span>{russian}</span>
                        <img src={arrowBottom} alt="" />
                    </div>
                    <div style={{ display: display && 'block' }} className="language english" onClick={English}>
                        <span>{english}</span>
                    </div>
                    <div style={{ display: display && 'block' }} className="language uzbek" onClick={Uzbek}>
                        <span>{uzbek}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

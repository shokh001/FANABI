import React from 'react'
import './styleMedia.scss'
import { ServiceCardAbout } from '../../mock/data'

const PrMediaCard = ({idNum}) => {

    return (
        <div className='prMediaCrad'>
            <div className="container">
                {
                    ServiceCardAbout.map(({ id, descr, text, img }) => {
                        return (
                            id === idNum  && <div className="card-media" key={id}>
                                <h1>{descr}</h1>

                                <div className="wrapper">
                                    <img src={img} alt="" />
                                    <span>{text}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PrMediaCard

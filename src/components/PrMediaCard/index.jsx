import React, {useContext} from 'react'
import './styleMedia.scss'
import { ServiceCardAbout } from '../../mock/data'
import {ServiceCardIDContext} from '../../context/context'


const PrMediaCard = () => {

    const [idContext, setIdContext] = useContext(ServiceCardIDContext); 

    return (
        <div className='prMediaCrad'>
            <div className="container">
                {
                    ServiceCardAbout.map(({ id, descr, text, img }) => {
                        return (
                            id === idContext  && <div className="card-media" key={id}>
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

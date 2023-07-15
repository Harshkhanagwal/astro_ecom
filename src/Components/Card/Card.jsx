import React from 'react'
import './Card.css'
import { CardBtn } from './CardBtn/CardBtn'

export const Card = () => {
    return (
        <div className='Card'>
            <div className="card-img">
                <img src="/images/products/mata-rani.jpg" alt="" />
            </div>
            <div className="card-details">
                <div className="card-like">
                    <p>E-pooja Collection</p>
                </div>
                <div className="card-title">
                    <p>Shri Saraswati Pooja</p>
                </div>
                <div className="card-price">
                    <p>$ 999 /-</p>
                </div>
            </div>
            <CardBtn />
        </div>
    )
}

export default Card
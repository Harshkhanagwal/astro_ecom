import React from 'react'
import './Card.css'

export const Card = () => {
    return (
        <div className='Card'>
            <div className="card-img">
                <img src="/images/products/mata-rani.jpg" alt="" />
            </div>
            <div className="card-details">
                <h1>Product</h1>
            </div>
        </div>
    )
}

export default Card
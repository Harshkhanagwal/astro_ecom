import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Headerbt = () => {
  return (
    <>
    <button className='headerbt'>
        <AiOutlineShoppingCart/>

        <div className="button-notification">
            <span>3</span>
        </div>

    </button>

    <button className='headerbt'>
        <BsFillPersonFill/>

    </button>
    </>
  )
}

export default Headerbt
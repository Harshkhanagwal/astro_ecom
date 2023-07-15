import React from 'react'
import './header.css'
import Saerchbar from './HeaderSearchBar/Saerchbar'
import Headerbt from './headerBts/Headerbt'
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = () => {
  return (
    <>
      <header className='main mainBackground'>
        <div className="container innerHeader">
          <div className="logo-area">
            <img src="/images/logo.png" alt="logo" height={50} />
          </div>
          <div className="searchBar">
            <Saerchbar />
          </div>
          <div className="headerIcons">
            <Headerbt />
          </div>
        </div>
      </header>
      <div className="mobilesearchbar">
        <div className="serachbar-mobile">
          <form className='container'>
            <input type="text" placeholder='Search Your Product' />
            <button type='submit' className='mobile-searchbt'>
              <AiOutlineSearch color='white' />
            </button>
          </form>
        </div>
      </div>
    </>

  )
}

export default Header
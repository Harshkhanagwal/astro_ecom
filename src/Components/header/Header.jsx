import React from 'react'
import './header.css'
import Saerchbar from './HeaderSearchBar/Saerchbar'
import Headerbt from './headerBts/Headerbt'

export const Header = () => {
  return (
    <header className='main mainBackground'>
        <div className="container innerHeader">
            <div className="logo-area">
              <img src="/images/logo.png" alt="logo" height={50} />
            </div>
            <div className="searchBar">
              <Saerchbar/>
            </div>
            <div className="headerIcons">
              <Headerbt/>
            </div>
        </div>
    </header>
  )
}

export default Header
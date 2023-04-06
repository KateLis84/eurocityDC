import React from 'react';
import './Header.scss'
import logo from '../../Assets/Images/logoWhite.png'

function Header() {

  return (
    <>
      <header className="header">
          <img 
            src={logo} 
            alt="logo"
            className='logo'/>
          <ul className="header__list">
            <li className="header__link">Проекти</li>
            <li className="header__link">Контакти</li>
            <li className="header__link">Про нас</li>
          </ul>
      </header>
      <main>
        Some text
      </main>
    </>
  )
};

export default Header;
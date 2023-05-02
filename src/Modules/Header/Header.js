import {React, useEffect} from 'react';
import './Header.scss'
import logo from '../../Assets/Images/logoWhite.png'
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  
  useEffect(()=>{
    if(document.getElementsByClassName('mainPage')[0]==undefined) {
      document.getElementsByTagName('header')[0].classList.remove('header__mainPage')
      document.getElementsByTagName('header')[0].style.position = 'fixed';
      document.getElementsByClassName("header__list")[0].style.color = "white"
      document.getElementsByClassName("header__logo")[0].style.display = "none"
    } else {
      document.getElementsByTagName('header')[0].classList.add('header__mainPage')
      document.getElementsByClassName("header__list")[0].style.color = "white"
      document.getElementsByClassName("header__logo")[0].style.display = "block"
    }
  }, [])

  return (
      <header className="header header__mainPage">
        <img 
          src={logo} 
          alt="logo"
          className='logo header__logo'/>
        <ul className="header__list">
          {/* <img src={logo} className="header__link logo"/> */}
          <Link to="#JKgallery" class="routeLink"><li className="header__link">Проєкти</li></Link>
          <li className="header__link">Контакти</li>
          <li className="header__link">Про нас</li>
        </ul>
      </header>
  )
};

export default Header;
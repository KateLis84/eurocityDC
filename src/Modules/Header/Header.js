import {React, useEffect, useState} from 'react';
import './Header.scss'
import logo from '../../Assets/Images/logoWhite.png'
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from '../../Components/MobileHeader/MobileHeader.js';

function Header() {

  const [isMobile, setMobile] = useState(false);
  
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

    if(window.innerWidth<580 && isMobile==false) setMobile(true)
    else if(window.innerWidth<580 && isMobile==true) setMobile(false)
  }, [])

  if(isMobile){
    return(
      <header className="header header__mainPage">
        <img 
          src={logo} 
          alt="logo"
          className='logo header__logo'/>
        <MobileHeader/>
      </header>
    )
  } else{
    return(
      <header className="header header__mainPage">
        <img 
          src={logo} 
          alt="logo"
          className='logo header__logo'/>
        <ul className="header__list">
          <Link to="../#JKgallery" class="routeLink"><li className="header__link">Проєкти</li></Link>
          <Link to="/" class="routeLink"><li className="header__link">Контакти</li></Link>
          <Link to="/aboutus" class="routeLink"><li className="header__link">Про нас</li></Link>
        </ul>
      </header>
    )
  }
};

export default Header;
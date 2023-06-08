import {React, useEffect, useState} from 'react';
import './Header.scss'
import logo from '../../Assets/Images/logoWhite.png'
import logoSmall from '../../Assets/Images/logoWhiteSmall.png'
import logoSmallBlck from '../../Assets/Images/logoBlackSmall.png'
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from '../../Components/MobileHeader/MobileHeader.js';
import { useLocation } from 'react-router-dom'
import $ from 'jquery'

function Header() {

  let location = useLocation()
  
  window.addEventListener('load',function(){
    // document
    //   .getElementsByTagName("header")[0]
    //   .addEventListener("click", function () {
    //     toggle_menu();
    //   });
  });

  window.addEventListener("scroll", function () {
      header_scroll();
      var Num = $(window).scrollTop() / 500;
      var Num2 = $(window).scrollTop() * 0.0006; // higher number for more zoom
      var Num2mod = Num2 + 1;
      var Num3 = $(window).scrollTop() * 0.2; // Title speed
      var Num3mod = Num3 + 1;
      return (
        $(".shade").css("opacity", Num),
        $(".bg").css({ transform: "scale(" + Num2mod + ")" }),
        $(".text").css({ "margin-top": "-" + Num3mod + "px" })
      );
  });

  function header_scroll(){
    if(document.getElementById('headerIdentifier') != null){
      var my_header = document.getElementsByTagName('header')[0];
      var scroll_height = window.pageYOffset;
      if(scroll_height > 400){
        my_header.className = 'header header-scroll';
      }
      else {
        my_header.className = 'header';
      }
    }
  }
  
  function toggle_menu(){
    var menu_bar = document.querySelector('.header ul');
    var btn = document.getElementsByClassName('toggle-btn')[0];
    //btn.innerHTML = '&times;';
    if(document.documentElement.clientWidth <= 768){
    //if(menu_bar.style.display == 'none'){
      if(menu_bar.className == 'display-none-mobile'){
        menu_bar.className = 'display-block';
        menu_bar.style.animation = 'flip 1 0.4s 0s';
        btn.innerHTML = '&times;';
        btn.style.fontSize = '40px';
        btn.style.animation = 'fade 1 0.2s 0s';
      }
      else if(menu_bar.className == 'display-block'){
       menu_bar.className = 'display-none-mobile';
        btn.innerHTML = '&#9776';
        btn.style.fontSize = '30px';
        btn.style.animation = 'top-in-basic 1 0.2s 0s';
      }
   }
  }

  return (
      <>
        <header class="header" id="customHeader">
          <div class="logo-container">
            <Link to="/" className="header__logo">
              <h1>EuroCity</h1>
            </Link>
            <span className="toggle-btn" onClick={toggle_menu}>&#9776;</span>
          </div>
          <ul class="display-none-mobile">
            <li>
              <Link to="/contacts" className="header__link">
                Контакти
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="header__link">
                Про нас
              </Link>
            </li>
            <li>
              <Link to="/topics" className="header__link">
                Новини
              </Link>
            </li>
          </ul>
        </header>

        <div className="heroEffects" id="heroEffectHeader">
          <div className="bg">
            <div className="arrow bouncy">
              <svg height="25" width="50">
                <polygon
                  points="0,0 25,10 50,0 25,25"
                  fill="rgba(255,255,255,.5)"
                  stroke-width="0"
                  stroke="rgba(255,255,255,.3)"
                />
              </svg>
            </div>
            <div className="title centerV">
              <div className="text">
                <img src={logo} />
              </div>
            </div>
          </div>
          <div className="shade"></div>
        </div>
      </>
  );
};

export default Header;
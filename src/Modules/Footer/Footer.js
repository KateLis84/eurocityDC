import React from 'react';
import './Footer.scss'

function Footer() {

  return(
    <div className="footer">
      <div className="footer__element footer__element_contacts">
        <div className="footer__title">Контакти</div>
        <div className="footer__text">+390 876 654  844</div>
        <div className="footer__text">eurocitydevelopment@gmail.com</div>
      </div>
      <div className="footer__element footer__element_cities"> 
        <div className="footer__title">Міста</div>
        <div className='footer__cities'>
          <div className="footer__text">Київ</div>
          <div className="footer__text">Львів</div>
          <div className="footer__text">Житомир</div>
          <div className="footer__text">Чернівці</div>
        </div>
      </div>
      <div className="footer__element footer__element_phone">
        <div className="footer__title">Зв'язок</div>
        <div className="footer__text">Зателефонуйте нам</div>
        <div className="footer__text">Задайте нам питання</div>
      </div>
    </div>
  )
}

export default Footer;
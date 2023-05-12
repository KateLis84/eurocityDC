import {React, useEffect, useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './MainPage.scss'
import Slides from '../../Components/Slides/Slides'
import MobileSlides from '../../Components/MobileSlides/MobileSlides';
import Card from '../../Components/Card/Card'
import ApartmentIcon from '@mui/icons-material/Apartment';

function MainPage() {

  // useEffect(()=>{
  //   document.getElementsByTagName('header')[0].classList.add('header__mainPage')
  //     document.getElementsByClassName("header__list")[0].style.color = "white"
  //     document.getElementsByClassName("header__logo")[0].style.display = "block"
  // }, [])

  return (
    <div className="mainPage">
      <div className='mainPage__title' id="JKgallery">Проєкти</div>

      <MobileSlides/>

      <div className='mainPage__cardBlock'>
        <div className='mainPage__title'>Новини</div>
        <div className='mainPage__cards'>
          <Card/> 
          <Card/>
          <Card/>
        </div>
      </div>

      <div className='mainPage__cardBlock'>
        <div className='mainPage__title'>Статті</div>
        <div className='mainPage__cards'>
          <Card/>
          <Card/>
          <Card/> 
        </div>
      </div>

      <Link to="/filters" class="btn-whatsapp-pulse">
        <ApartmentIcon sx={{ fontSize: 30 }}/>
        Квартири
      </Link>
    </div>
  );
}

export default MainPage;
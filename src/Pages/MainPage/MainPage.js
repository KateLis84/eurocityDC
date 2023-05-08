import {React, useEffect, useState} from 'react';
import './MainPage.scss'
import Slides from '../../Components/Slides/Slides'
import MobileSlides from '../../Components/MobileSlides/MobileSlides';
import Card from '../../Components/Card/Card'


function MainPage() {

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
    </div>
  );
}

export default MainPage;
import {React, useEffect} from 'react';
import './MainPage.scss'
import Slides from '../../Components/Slides/Slides'
import Card from '../../Components/Card/Card'


function MainPage() {

  return (
    <div className="mainPage">
      
      <Slides/>
      
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
import {React, useEffect, useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './MainPage.scss'
import Slides from '../../Components/Slides/Slides'
import MobileSlides from '../../Components/MobileSlides/MobileSlides';
import Card from '../../Components/Card/Card'
import ApartmentIcon from '@mui/icons-material/Apartment';


let data = require("../../fakeData.json").topics;

function MainPage() {
  window.scrollTo(0, 0)

  useEffect(()=>{
    document.getElementById("heroEffectHeader").style.display = "block";
    document.getElementById("customHeader").className = 'header';
  })

  return (
    <>
      {/* <div className="mainPage__mainPhoto"></div> */}
        <div className="mainPage">

        <div className="mainPage__title" id="JKgallery">
          Проєкти
        </div>

        <MobileSlides />

        <div className="mainPage__cardBlock" id="headerIdentifier">
          <div className="mainPage__title">Новини</div>
          <div className="mainPage__cards">
            {data.news.slice(1, 4).map((el) => {
              return (
                <Link style={{ all: "unset" }} to={"/info/news/" + el.id}>
                  <Card
                    image={el.photo}
                    title={el.title}
                    description={el.text.slice(0, 50) + "..."}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mainPage__cardBlock">
          <div className="mainPage__title">Статті</div>
          <div className="mainPage__cards">
            {data.articles.slice(0, 3).map((el) => {
              return (
                <Link style={{ all: "unset" }} to={"/info/articles/" + el.id}>
                  <Card
                    image={el.photo}
                    title={el.title}
                    description={el.text.slice(0, 50) + "..."}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <Link to="/filters" class="btn-whatsapp-pulse">
          <ApartmentIcon sx={{ fontSize: 30 }} />
          Квартири
        </Link>
      </div>
    </>
  );
}

export default MainPage;
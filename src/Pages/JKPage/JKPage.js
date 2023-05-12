import {React, useEffect, useState} from "react";
import './JKPage.scss';
import '../../Constants/GeneralStyles/animations.scss'
import {useParams} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import LevelMap from "../../Modules/Area/Area";
import Pagination from '../../Components/LevelPagination/LevelPagination.js';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

let data = require("../../fakeData.json").complexes;

export default function JKpage() {

  
  useEffect(()=>{
    window.scrollTo(0, 0)
    document.getElementsByTagName('header')[0].classList.remove('header__mainPage')
    document.getElementsByTagName('header')[0].style.position = 'fixed';
    document.getElementsByClassName("header__list")[0].style.color = "white"
    document.getElementsByClassName("header__logo")[0].style.display = "none"
  }, [])

  const params = useParams();
  const JK = data[params.jkId-1];

  const [toDisplay, setNewDisplay] = useState(JK);
  const [typeOfData, settypeOfData] = useState("JK");

  function ChangeMap(currentMap, index) {
    if(currentMap == "JK") {
      document.getElementById("levelPagination").style.display = "flex"
      document.getElementById("levelBack").style.display = "flex"

      setNewDisplay(JK.levels[index])
      settypeOfData("flats")
    } 
    else if (currentMap == "levelToLevel") {
      setNewDisplay(JK.levels[index]);
      settypeOfData("flats");
      console.log(toDisplay)
    } 
    else if(currentMap == "level") {
      document.getElementById("levelPagination").style.display = "none"
      document.getElementById("levelBack").style.display = "none"

      setNewDisplay(JK)
      settypeOfData("JK")
    }
  }

  return (
    <div className="jkPage">

      <div className="jkPage__block jkPage__block_info">
        <div className="jkPage__txt_title">{JK.name}</div>
        <Link 
          to="/filters" 
          state={{ selectedComplex: JK }} 
          className="jkPage__btn buttonAnim"
        >
            Переглянути усі квартири <ArrowForwardIcon/>
        </Link>
      </div>

      <div 
        id="levelBack" 
        className="jkPage__btn jkPage__btn_return"
        onClick={() => {ChangeMap("level", 0)}}
      > 
        <ArrowBackIcon/> 
        Повернутись до ЖК
      </div>

      <div className="jkPage__block jkPage__block_area">
        <LevelMap level={toDisplay} typeOfData={typeOfData} changeMap={ChangeMap}/>
      </div>

      <div id="levelPagination" className="kPage__block jkPage__block_pagination">
        <Pagination data={JK} setMap={ChangeMap}/>
      </div>

      <div className="jkPage__block jkPage__block_txtInfo">
        <div className="jkPage__txt_description">{JK.description}</div>
      </div>

      <div className="jkPage__block">
        <iframe
          className="jkPage__block_map"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.491758264307!2d24.021774976466723!3d49.85200657148402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0a2aabbcb9%3A0xed7e50b5ae62c05!2sParking!5e0!3m2!1suk!2sua!4v1683634374243!5m2!1suk!2sua"
          style={{border: 0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="jkPage__block jkPage__block_gallery">
        {JK.gallery.map((img) => {
          return (
            <div className="jkPage__block jkPage__block_gallery_wrapper">
            <img
              src={"../" + img}
              alt="building"
              className="jkPage__block_gallery_image"
            /></div>
          );
        })}
      </div>

    </div>
  );
}
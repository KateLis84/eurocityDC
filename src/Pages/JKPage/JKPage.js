import {React, useEffect, useState} from "react";
import './JKPage.scss';
import '../../Constants/GeneralStyles/animations.scss'
import {useParams} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import LevelMap from "../../Modules/Area/Area";
import Pagination from '../../Components/LevelPagination/LevelPagination.js';

// ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ForestIcon from '@mui/icons-material/Forest';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

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

  function addView() {
    switch(JK.details.view){
      case 'nature':
        return(
          <div className="jkPage__iconInfo">
            <ForestIcon sx={{fontSize: "50px"}}/>
            <div>Вигляд на природу</div>
          </div>
        )
      case 'city':
        return(
          <div className="jkPage__iconInfo">
            <LocationCityIcon sx={{fontSize: "50px"}}/>
            <div>Вигляд на місто</div>
          </div>
        )
      default:
        break;
      }
  }

  function addFacilities() {
    switch(JK.details.facilities){
      case 'parking':
        return(
          <div className="jkPage__iconInfo">
            <DirectionsCarIcon sx={{fontSize: "50px"}}/>
            <div>Підземний паркінг</div>
          </div>
        )
      case 'park':
        return(
          <div className="jkPage__iconInfo">
            <FamilyRestroomIcon sx={{fontSize: "50px"}}/>
            <div>Дозвілля для сім'ї</div>
          </div>
        )
      default:
        break;
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


      <h3>Про комплекс</h3>
      <div className="jkPage__block jkPage__block_txtInfo">
        <div className="jkPage__txt_description">
          {JK.description}
        </div>
        <div className="jkPage__BlockiconInfo">
          <div className="jkPage__iconInfo">
            <DirectionsWalkIcon sx={{fontSize: "50px"}}/>
            {JK.details.fromCityCenter} хв від центру міста
          </div>
            {addView()}
            {addFacilities()}
        </div>
      </div>

      <div className="jkPage__block">
        <iframe
          className="jkPage__block_map"
          title="map"
          src={JK.details.googleMap}
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
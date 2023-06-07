import {React, useEffect, useState} from "react";
import './JKPage.scss';
import '../../Constants/GeneralStyles/animations.scss'
import '../InfoPage/InfoPage.scss'
import '../../Constants/GeneralStyles/scrollAnimations.scss';
import {useParams} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';

// Components
import LevelMap from "../../Modules/Area/Area";
import Pagination from '../../Components/LevelPagination/LevelPagination.js';
import ToggleBtn from './ToggleBtn.js';
import Card from '../../Components/Card/Card.js';


// ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ForestIcon from '@mui/icons-material/Forest';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

let data = require("../../fakeData.json").complexes;
let news = require("../../fakeData.json").topics.news;

export default function JKpage() {

  window.scrollTo(0, 0);

  useEffect(() => {
    document.getElementById("heroEffectHeader").style.display = "none";
    document.getElementById("customHeader").className = 'header header-scroll';
  }, []);

  const params = useParams();
  const JK = data[params.jkId-1];

  const [toDisplay, setNewDisplay] = useState(JK);
  const [typeOfData, settypeOfData] = useState("JK");
  const [MobilePhoto, setMobilePhoto] = useState(JK.photo);

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

  function toggleBtnMobile(value) {
    if (value === 'building') setMobilePhoto(JK.photo)
    else setMobilePhoto(JK.levels[0].photo)
  }

  function getNews() {
    let result = [];
    news.map((el)=>{
      if(el.tag.includes(JK.name)) result.push(el)
    })

    
    return result.slice(0, 3);
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
          Переглянути усі квартири <ArrowForwardIcon />
        </Link>
      </div>

      <div
        id="levelBack"
        className="jkPage__btn jkPage__btn_return"
        onClick={() => {
          ChangeMap("level", 0);
        }}
      >
        <ArrowBackIcon />
        Повернутись до ЖК
      </div>

      <div className="jkPage__block jkPage__block_area">
        <LevelMap
          level={toDisplay}
          typeOfData={typeOfData}
          changeMap={ChangeMap}
        />
      </div>

      <div className="jkPage__MobileArea">
        <img src={MobilePhoto} />
        <div className="jkPage__MobileArea_toggleBtn">
          <ToggleBtn handleChange={toggleBtnMobile} />
        </div>
      </div>

      <div
        id="levelPagination"
        className="kPage__block jkPage__block_pagination"
      >
        <Pagination data={JK} setMap={ChangeMap} />
      </div>

      <ScrollAnimation animateIn="TopBottom" animateOnce={true}>
        <h3>Про комплекс</h3>
      </ScrollAnimation>
      <div className="jkPage__block jkPage__block_txtInfo">
        <div className="jkPage__txt_description">
          <ScrollAnimation animateIn="LeftRight" animateOnce={true}>
            {JK.description}
          </ScrollAnimation>
        </div>
        <div className="jkPage__BlockiconInfo">
          <ScrollAnimation animateIn="RightLeft" animateOnce={true}>
            <div className="jkPage__iconInfo">
              <DirectionsWalkIcon sx={{ fontSize: "50px" }} />
              {JK.details.fromCityCenter} хв від центру міста
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="RightLeft" delay={100}>{addView()}</ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="RightLeft" delay={200}>{addFacilities()}</ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
        <div className="jkPage__block">
          <iframe
            className="jkPage__block_map"
            title="map"
            src={JK.details.googleMap}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </ScrollAnimation>

      <div className="jkPage__block jkPage__block_gallery">
        {JK.gallery.map((img, index) => {
          return (
            <ScrollAnimation animateIn="fadeIn" delay={index+"00"} animateOnce={true}>
              <div className="jkPage__block jkPage__block_gallery_wrapper">
                <img
                  src={"../" + img}
                  alt="building"
                  className="jkPage__block_gallery_image"
                />
              </div>
            </ScrollAnimation>
          );
        })}
      </div>

      <div className="jkPage__block jkPage__block_news">
        <div className="info__more">
          <h3 className="jkPage__newsTitle">Новини Житлового Комплексу</h3>

          <div className="info__moreCards">
            {getNews().map((el, index) => {
              return (
                <ScrollAnimation animateIn="fadeIn" delay={index+"00"} key={index} animateOnce={true}>
                  <Link style={{ all: "unset" }} to={"/info/news/" + el.id}>
                    <Card
                      image={"../" + el.photo}
                      title={el.title}
                      description={el.text.slice(0, 50) + "..."}
                    />
                  </Link>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
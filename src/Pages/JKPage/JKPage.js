import {React, useEffect} from "react";
import './JKPage.scss';
import '../../Constants/GeneralStyles/animations.scss'
import {useParams} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import LevelMap from "../../Modules/Area/Area";

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

  return (
    <div className="jkPage">

      <div className="jkPage__block jkPage__block_info">
        <div className="jkPage__txt_title">{JK.name}</div>
        <Link to="/filters" state={{ selectedComplex: JK }} className="jkPage__btn buttonAnim">Переглянути квартири → </Link>
      </div>

      <div className="jkPage__block jkPage__block_area">
        <LevelMap level={JK} typeOfData="JK"/>
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
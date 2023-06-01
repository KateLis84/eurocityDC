import {React, useEffect} from "react";
import './FlatPage.scss'
import FlatForm from '../../Modules/Forms/FlatForm.js';
import {useParams} from 'react-router-dom';
import $ from 'jquery';

import ApartmentIcon from '@mui/icons-material/Apartment';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WeekendIcon from '@mui/icons-material/Weekend';

let data = require("../../fakeData.json").complexes;

export default function FlatPage() {

  const jkArrayId = useParams().jkId-1;
  const flatId = useParams().flatId;

  const jk = data[jkArrayId];
  let level = 0;
  const flat = getFlat();

  function getFlat() {
    let res = 0;
    jk.levels.map((curLevel)=>{
      curLevel.flats.map((curFlat)=>{
        if(curFlat.id==flatId) {
          res = curFlat; 
          level = curLevel.level;
        }
      })
    })
    return res;
  }

  function getStatus(){
    if(flat.status) return "flat__status flat__status_open"
    else return "flat__status flat__status_closed"
  }

  return (
    <div style={{padding: '0px 50px', paddingTop:'140px'}}>
      <div className="flat">
        <div className="flat__info">
          <div className="flat__text">
            <div style={{ fontSize: "70px" }}>Квартира № {flat.flat}</div>
            <div className={getStatus()}>Вільно</div>
          </div>
          {/* flat__image */}
          <div className="grid-wrapper">
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <img src={"../" + flat.img} alt="flat" id="zoom-image" className="zoom-image"/>
            {/* <div className="flat__icons">
              <div><ApartmentIcon sx={{fontSize: '40px'}}/> {level} поверх</div>
              <div><AccessibilityNewIcon sx={{fontSize: '40px'}}/> {flat.area} площа</div>
              <div><WeekendIcon sx={{fontSize: '40px'}}/> {flat.rooms} кімнат</div>
            </div> */}
          </div>
        </div>
        <FlatForm />
      </div>
      <div className="jkPage__btn buttonAnim">Переглянути ЖК</div>
    </div>
  );
}
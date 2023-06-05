import {React, useEffect} from "react";
import './FlatPage.scss'
import FlatForm from '../../Modules/Forms/FlatForm.js';
import {useParams} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom'

import ApartmentIcon from '@mui/icons-material/Apartment';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WeekendIcon from '@mui/icons-material/Weekend';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

let data = require("../../fakeData.json").complexes;

export default function FlatPage() {

  const jkArrayId = useParams().jkId-1;
  const flatId = useParams().flatId;

  const jk = data[jkArrayId];
  let level = 0;
  const flat = getFlat();

  const from = useLocation().state.from

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
    <div className="flatContainer">
      { from == "JKPage" ? 
        <Link to={"/jkpage/"+flat.jkID}><span className="flat__direction">← Повернутись до ЖК</span></Link> : 
        <Link to="/filters"><span className="flat__direction">← Повернутись до пошуку</span></Link>
      }
      
      <div className="flat">
        <div className="flat__info">
          <div className="flat__text">
            <div className="flat__text_title">Квартира № {flat.flat}</div>
            <div className={getStatus()}>
              {flat.status ? "Вільно" : "Зайнято"}
            </div>
          </div>
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
          </div>
          <img src={"../" + flat.img} alt="flat" className="flat__mobileImage"/>
        </div>
        <FlatForm />
      </div>
      <div>
        
        <div className="flat__icons" style={{margin: '50px'}}>
          <div className="flat__icon"><AccessibilityNewIcon sx={{fontSize: '40px'}}/> {flat.area} площа</div>
          <div className="flat__icon"><ApartmentIcon sx={{fontSize: '40px'}}/> {level} поверх</div>
          <div className="flat__icon"><WeekendIcon sx={{fontSize: '40px'}}/> {flat.rooms} кімнат</div>
          <div className="flat__icon"><AttachMoneyIcon sx={{fontSize: '40px'}}/> Ціна за запитом</div>
        </div>
      </div>
    </div>
  );
}
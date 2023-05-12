import {React, useEffect} from 'react';
import './Area.scss'

function HoverInfo ({isDisplayed, info, typeOfData}) {

  let myDiv=document.getElementsByClassName('popup')[0];

  useEffect(()=>{
    myDiv=document.getElementsByClassName('popup')[0];
    myDiv.style.display = isDisplayed ? 'block' : 'none';
  })

  function isTouchDevice() {
    try{
      document.createEvent("TouchEvent");
      return true;
    }
    catch (e) {
      return false;
    }
  }

  const move = (e) => {
    try{
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}

    myDiv.style.left = x +10+ "px";
    myDiv.style.top = y -150+ "px";
  };

  document.addEventListener("mousemove", (e)=> {
    if(document.getElementById("AreaId") == null) return
    myDiv=document.getElementsByClassName('popup')[0];
    move(e);
  })

  if(typeOfData == "flats") {
    return(
      <div className="popup">
        <div className="popup__flat">Квартира {info.flat}</div>
        <div className="popup__field">Площа: {info.area}</div>
        <div className="popup__field">Кімнат: {info.rooms}</div>
      </div>
    )
  } else return(
    <div className="popup popup__jk">
      <div className="popup__flat">Поверх: {info.level}</div>
      <div className="popup__field">Вільних квартир: {info.freeFlats}</div>
    </div>
  )
}

export default HoverInfo;
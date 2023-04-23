import {React, useEffect} from 'react';
import './Area.scss'

function HoverInfo (props) {

  let myDiv=document.getElementsByClassName('popup')[0];

  useEffect(()=>{
    myDiv=document.getElementsByClassName('popup')[0];
    myDiv.style.display = props.isDisplayed ? 'grid' : 'none';
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
    myDiv.style.top = y -20+ "px";
  };

  document.addEventListener("mousemove", (e)=> {
    myDiv=document.getElementsByClassName('popup')[0];
    move(e);
  })

  return(
    <div className="popup">
      <div className="popup__field">{props.info.flat}</div>
      <div className="popup__field">{props.info.area}</div>
      <div className="popup__field">{props.info.rooms}</div>
      <div className="popup__field">{props.info.flat}</div>
    </div>
  )
}

export default HoverInfo;
import {React, useEffect, useState} from 'react'
import './Area.scss'
import $ from 'jquery'
import { maphilight } from 'maphilight'
import HoverInfo from './HoverInfo'


function Area({level}) {
  let scale = setScale();
  let tempAreaShape = "";
  let image = level.photo;
  let minWidth='950px';
  
  const [infoProperties, setInfo] = useState({
    isDisplayed: false,
    info: '',
  });
  let coords = level.flats.map((e)=>{
    return e.mapCoords;
  })

  function visibleInfo(e) {
    let flat = level.flats[e.currentTarget.id]
    setInfo({...infoProperties, isDisplayed: true, info: flat});
  }

  function invisibleInfo() {
    setInfo({...infoProperties, isDisplayed: false});
  }

  function setScale() {
    let screenWidth = window.screen.width;
    let imageWidth = screenWidth * 0.62;
    return (imageWidth/950).toFixed(1);
  }

  function scaleImage() {
    let image = document.getElementById("mapImg");
    image.style.width = minWidth;
    let scaledImage = image.offsetWidth * scale;
    image.style.width = `${scaledImage}px`;
  }

  useEffect(()=>{
    $('.mapF').maphilight({
      stroke: false,
      fillColor: '90C55B',
      fillOpacity: 0.7
    });
    scaleImage();
  }, [level]);

  return(
    <div>
      <img 
        src={image}
        usemap="#shape" 
        className="mapF" 
        id="mapImg"
        alt="map"
      />

      <map name="shape">
        {
          coords.map((el, index)=>{
            for(let i = 0; i<el.x.length; i++){
              tempAreaShape += `${el.x[i]*scale}, ${el.y[i]*scale},`
            }
            return(
              <a href="#"><area 
                id={index}
                alt="flat"
                shape="poly" 
                coords={tempAreaShape} 
                href="#"
                onMouseOver={visibleInfo}
                onMouseLeave={()=>{invisibleInfo()}}
              /></a>
            )
          })
          
        }
      </map>
      <HoverInfo
        isDisplayed={infoProperties.isDisplayed}
        info={infoProperties.info}
      />
    </div>
  )
}

export default Area;
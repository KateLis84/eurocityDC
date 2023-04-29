import {React, useEffect, useState} from 'react'
import './Area.scss'
import $ from 'jquery'
import { maphilight } from 'maphilight'
import HoverInfo from './HoverInfo'


function Area({level}) {
  let scale = 1;
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

  function scaleImage() {
    let image = document.getElementById("mapImg");
    image.style.width = minWidth;
    let scaledImage = image.offsetWidth * scale;
    image.style.width = `${scaledImage}px`;
  }

  useEffect(()=>{
    $('.mapF').maphilight({
      stroke: true,
      fillColor: 'FF0000',
      fillOpacity: 0.2
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
            tempAreaShape = ""
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
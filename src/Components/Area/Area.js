import {React, useEffect, useState} from 'react'
import model from '../../Assets/Images/model.jpg'
import './Area.scss'
import $ from 'jquery'
import { maphilight } from 'maphilight'
import HoverInfo from './HoverInfo'


function Area(props) {
  let scale = 1;
  let tempAreaShape = "";
  let image;
  const [infoProperties, setInfo] = useState({
    isDisplayed: false,
    info: '',
  });
  let coords = props.flats.map((e)=>{
    return e.mapCoords;
  })

  function visibleInfo(e) {
    let flat = props.flats[e.currentTarget.id]
    setInfo({...infoProperties, isDisplayed: true, info: flat});
  }

  function invisibleInfo() {
    setInfo({...infoProperties, isDisplayed: false});
  }

  function scaleImage() {
    let image = document.getElementById("mapImg");
    let scaledImage = image.naturalWidth * scale;
    console.log(image.naturalWidth)
    image.style.width = `${scaledImage}px`;
  }

  useEffect(()=>{
    $('.mapF').maphilight({
      stroke: true,
      fillColor: 'FF0000',
      fillOpacity: 0.2
    });
    scaleImage();
  },[]);

  return(
    <>
      <img 
        src={model} 
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
              <area 
                id={index}
                alt="flat"
                shape="poly" 
                coords={tempAreaShape} 
                href="#"
                onMouseOver={visibleInfo}
                onMouseLeave={()=>{invisibleInfo()}}
              />
            )
          })
          
        }
      </map>
      <HoverInfo
        isDisplayed={infoProperties.isDisplayed}
        info={infoProperties.info}
      />
    </>
  )
}

export default Area;
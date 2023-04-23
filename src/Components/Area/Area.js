import {React, useEffect, useState} from 'react'
import model from '../../Assets/Images/model.jpg'
import './Area.scss'
import $ from 'jquery'
import { maphilight } from 'maphilight'
import HoverInfo from './HoverInfo'

let coords = [
  {
    x: [8, 8, 278, 278],
    y: [8, 214, 214, 8]
  },
  {
    x: [8, 162, 162, 8], 
    y: [225, 225, 470, 470]
  },
  {
    x: [285, 285, 441, 441], 
    y: [9, 214, 214, 9] 
  },
  {
    x: [450, 450, 609, 609], 
    y: [8, 213, 213, 8] 
  }
];

function Area(props) {
  let scale = 1;
  let tempAreaShape = "";
  let image;
  const [infoProperties, setInfo] = useState({
    isDisplayed: false,
    info: '',
  });

  function visibleInfo() {
    setInfo({...infoProperties, isDisplayed: true});
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
                key={index}
                alt="flat"
                shape="poly" 
                coords={tempAreaShape} 
                href="#"
                onMouseOver={()=>{visibleInfo()}}
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
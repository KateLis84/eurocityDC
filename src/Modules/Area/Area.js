import {React, useEffect, useState} from 'react';
import './Area.scss';
import $ from 'jquery'
import { maphilight } from 'maphilight';
import HoverInfo from './HoverInfo';
import { HashLink as Link } from 'react-router-hash-link';

function Area({level, typeOfData, changeMap}) {
  // const [scale, setInitScale] = useState(1.2)
  let scale = 1.2;
  let tempAreaShape = "";
  const [image, setImage] = useState("")
  // let image = level.photo;
  let minWidth='950px';
  
  const [infoProperties, setInfo] = useState({
    isDisplayed: false,
    info: '',
  });
  
  // useEffect(()=>{
  //   setImage(level.photo)
  // }, [typeOfData])

  useEffect(()=>{
    $('.mapF').maphilight({
      stroke: false,
      fillColor: '90C55B',
      fillOpacity: 0.7
    });
  }, [image])

  let coords;

  if(typeOfData == 'flats'){
    coords = level.flats.map((e)=>{
      return e.mapCoords;
    })
  } else if(typeOfData == "JK") {
    coords = level.levels.map((e)=>{
      return e.mapCoords;
    })
  }

  function visibleInfo(e) {
    if(typeOfData == "flats") {
      let flat = level.flats[e.currentTarget.id]
      setInfo({...infoProperties, isDisplayed: true, info: flat});
    } else {
      let flat = level.levels[e.currentTarget.id]
      setInfo({...infoProperties, isDisplayed: true, info: flat});
    }
  }

  function invisibleInfo() {
    setInfo({...infoProperties, isDisplayed: false});
  }

  function setScale() {
    let screenWidth = window.screen.width;
    let imageWidth = screenWidth * 0.78;
    return (imageWidth/950).toFixed(1);
  }

  function scaleImage() {
    let image = document.getElementById("mapImg");
    let scaledImage = minWidth.slice(0, -2) * scale;
    image.style.width = `${scaledImage}px`;
  }

  function setChangeMap(e) {
    e.preventDefault();
    changeMap(typeOfData, e.currentTarget.id)
  }

  useEffect(()=>{
    setImage(level.photo)
  }, [level]);

  const renderImageName = () => {
    return <img 
      src={image}
      usemap="#shape"
      className='mapFF'
      />;
  }
 
  return(
    <div id="AreaId">
      <img 
        src={image}
        usemap="#shape"
        className="mapF"
        id="mapImg"
        alt="map"
        style={{width: `${minWidth.slice(0, -2) * scale}px`}}
      />

      <map name="shape">
        {
          coords.map((el, index)=>{
            tempAreaShape = '';
            for(let i = 0; i<el.x.length; i++){
              tempAreaShape += `${el.x[i]*scale}, ${el.y[i]*scale},`
            }
            if(typeOfData == 'flats'){
              return(
                <Link 
                  to={"/flat/" + infoProperties.info.jkID +"/"+ infoProperties.info.id}
                  state={{from: 'JKPage'}}
                >
                  <area 
                    id={index}
                    alt="flat"
                    shape="poly" 
                    coords={tempAreaShape} 
                    onMouseOver={visibleInfo}
                    onMouseLeave={()=>{invisibleInfo()}}
                  />
                </Link>
              )
            } else if(typeOfData == 'JK'){
              return(
                <a href="#"><area 
                  id={index}
                  alt="flat"
                  shape="poly" 
                  coords={tempAreaShape} 
                  href="#"
                  onClick={setChangeMap}
                  onMouseOver={visibleInfo}
                  onMouseLeave={()=>{invisibleInfo()}}
                /></a>
              )
            }
          })
          
        }
      </map>
      <HoverInfo
        isDisplayed={infoProperties.isDisplayed}
        info={infoProperties.info}
        typeOfData={typeOfData}
      />
    </div>
  )
}

export default Area;
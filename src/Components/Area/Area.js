import {React, useEffect} from 'react';
import model from '../../Assets/Images/model.jpg';
import './Area.scss';
import $ from 'jquery';
import { maphilight } from 'maphilight';


function Area() {

    useEffect(()=>{
      $('.mapF').maphilight({
        stroke: true,
        fillColor: 'FF0000',
        fillOpacity: 0.2
      });
    }, [])

  return(
    <>
      <img src={model} usemap="#shape" className="mapF"/>
      <map name="shape">
        <area shape="poly" coords="1,1, 150,1, 150,150, 1,150" href="#"/>
        <area shape="poly" coords="250,250, 400,250, 400,400, 250,400" href="#"/>
      </map>
    </>
  )
}

export default Area;
import {React, useEffect} from "react";
import './MobileSlides.scss'

function MobileSlides() {

  return (
    <section id="slider">
      <input className="card-slider" type="radio" name="slider" id="s2"/>
      <input className="card-slider" type="radio" name="slider" id="s3" checked/>
      <input className="card-slider" type="radio" name="slider" id="s4"/>
      <label for="s2" id="slide2" className="card-slider">Hello2</label>
      <label for="s3" id="slide3" className="card-slider">Hello3</label>
      <label for="s4" id="slide4" className="card-slider">Hello4</label>
    </section>
  )
}

export default MobileSlides;

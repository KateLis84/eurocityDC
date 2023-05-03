import React from "react";
import './Slides.scss'

let data = require("../../fakeData.json").complexes;


function Slides() {
  return (
    
      <div className="slides mainPage__slides">
        {data.map((e)=>{
          return(
            <div className="slides__part">
              <img src={e.photo} alt="building" className="slides__photo" />
              <div className="slides__overlay"> 
                <div className="slides__text">
                  <h1 className="slides__title">{e.name}</h1>
                  <div className="slides__description">
                    {e.description}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
  );
}

export default Slides;
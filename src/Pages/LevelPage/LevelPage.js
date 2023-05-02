import { React, useEffect, useState } from "react";
import LevelMap from "../../Modules/Area/Area";
import "./LevelPage.scss";

let json = require("../../fakeData.json").complexes[0];

function LevelPage() {
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState(json.levels[0]);

  useEffect(() => {
    console.log(window.screen.width)
    setLoading(false);
  });

  function changeLevel(level) {
    // VARIABLES
    let box = document.getElementsByClassName('levels__choseBox')[0];
    let size = document.getElementsByClassName('levels__level')[0].offsetWidth;
    let levelElement = document.getElementsByClassName('levels__level');

    // STYLES
    box.style.transform = `translate(${(size+(size-20))*(level-1)}px)`;
    [...levelElement].map((e, index)=>{
      console.log(index, level-1)
      if(index==level-1) e.style.color = 'white';
      else e.style.color = 'black';
    })
    
    // LOGIC
    setMap(json.levels[level-1])
  }

  if (loading) {
    return <>Loading</>;
  } else {
    return (
      <div className="levelPage">
        <div className="levels levelPage__levels">
          {
            json.levels.map((el, level) => {
              return(
                <div
                  onClick={() => {changeLevel(level+1);}}
                  className="levels__level"
                >{level+1}</div>
              )
            })
          }
          <div className="levels__choseBox"></div>
        </div>

        <LevelMap level={map} />
      </div>
    );
  }
}

export default LevelPage;

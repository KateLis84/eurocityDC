import React from "react";

export default function LevelPagination({data, setMap}) {

  function changeLevel(level) {
    // VARIABLES
    let box = document.getElementsByClassName('levels__choseBox')[0];
    let size = document.getElementsByClassName('levels__level')[0].offsetWidth;
    let levelElement = document.getElementsByClassName('levels__level');

    // STYLES
    box.style.transform = `translate(${(size+(size-20))*(level)}px)`;
    [...levelElement].map((e, index)=>{
      if(index==level) e.style.color = 'white';
      else e.style.color = 'black';
    })
    
    // LOGIC
    setMap("levelToLevel", level)
  }

  return(
    <div className="levels levelPage__levels">
      {
        data.levels.map((el, level) => {
          return(
            <div
              onClick={() => {changeLevel(level);}}
              className="levels__level"
            >{level+1}
            </div>
          )
        })
      }
      <div className="levels__choseBox"></div>
    </div>
  )
}
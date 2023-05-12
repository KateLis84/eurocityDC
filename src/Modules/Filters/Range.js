import React from 'react';
import RangeItem from '../../Components/Filters/Range/Range.js';

export default function Range({data, changeFloor}) {

  function getMaxFloor() {
    let maxFloor = 1;
    data.map((complex)=>{
      maxFloor = (complex.levels.length > maxFloor) ? complex.levels.length : maxFloor;
    })
    return maxFloor;
  }

  function setNewLevels(levels) {
    changeFloor(levels)
  }

  return(
    <div className="rangeFilter">
      <div className="customized-label">Поверх</div>
      <RangeItem maxValue={getMaxFloor()} setNewLevels={setNewLevels}/>
    </div>
  )
}
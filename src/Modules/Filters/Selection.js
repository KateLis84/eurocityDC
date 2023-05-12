import React from "react";
import SelectionItem from '../../Components/Filters/Selection/Selection.js';

export default function Selection({data, changeValue, typeOfData}) {

  function getCities(){
    let result;
    if(typeOfData=="Місто"){
      result = data.map((e)=>{
        return e.city;
      })
      result = [...new Set(result)]
      result.unshift('Усі')
    } else {
      result = data.map((e)=>{
        return e.name;
      })
      result = [...new Set(result)]
      result.unshift('Усі')
    }
    return result;
  }

  function changeCities(cities) {
    changeValue(cities);
  }

  return(
    <div>
      <div className="customized-label">{typeOfData}</div>
      <SelectionItem values={getCities()} changeCities={changeCities}/>
    </div>
    
  )
}
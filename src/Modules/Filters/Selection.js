import React from "react";
import SelectionItem from '../../Components/Filters/Selection/Selection.js';

export default function Selection({data, changeComplex}) {

  function getCities(){
    let cities = data.map((e)=>{
      return e.city;
    })
    cities = [...new Set(cities)]
    cities.unshift('Усі')
    return cities;
  }

  function changeCities(cities) {
    changeComplex(cities);
  }

  return(
    <SelectionItem values={getCities()} changeCities={changeCities}/>
  )
}
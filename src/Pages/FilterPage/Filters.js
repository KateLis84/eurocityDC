import { React, useEffect, useState, useMemo } from "react";
import "./FilterPage.scss";
import ButtonsGroup from '../../Modules/Filters/ButtonsGroup.js';
import Range from '../../Modules/Filters/Range.js';
import Selection from '../../Modules/Filters/Selection.js';

export default function FilterPage({setNewValues, preValues}) {
  let json = require("../../fakeData.json").complexes;
  const [city, setCity] = useState(json);
  let PreValueName = null;
  
  const [complexes, setComplexes] = useState(()=>{
    if(preValues != null) {
      PreValueName = preValues.name;
      return [preValues]
    } else return json;
  });
  const [floors, setFloors] = useState([1, 4])

  const setDefaultData = useMemo(() => {
    let cities = [];
    let complexesNames = [];
    complexes.map((comp)=>{
      complexesNames.push(comp.name);
    })
    city.map((complex)=>{
      if(complexesNames.includes(complex.name) || complexesNames.includes('Усі')){
        complex.levels.map((level)=>{
          if(level.level >= floors[0] && level.level <= floors[1]){
            level.flats.map((flat)=>{
              cities.push(flat)
            })
          }
        })
      }
    })
    return cities;
  }, [json]);

  function setNewFlats() {
    let cities = [];
    let complexesNames = [];
    complexes.map((comp)=>{
      complexesNames.push(comp.name);
    })
    city.map((complex)=>{
      if(complexesNames.includes(complex.name) || complexesNames.includes('Усі')){
        complex.levels.map((level)=>{
          if(level.level >= floors[0] && level.level <= floors[1]){
            level.flats.map((flat)=>{
              cities.push(flat)
            })
          }
        })
      }
    })
    return cities;
  }

  const [flats, setFlats] = useState(setDefaultData);
  const [filtered, setFilters] = useState(setDefaultData);
  const [rooms, setRooms] = useState([1, 2, 3, 4])

  useEffect(()=>{
    setFlats(setNewFlats())
  }, [city, complexes])

  useEffect(()=>{
    setFlats(setNewFlats())
  }, [floors])

  useEffect(()=>{
    filterRooms(rooms)
  }, [flats])

  useEffect(()=>{
    setNewValues(filtered)
  }, [filtered])

  function changeCity(cities) {
    if (cities.includes('Усі')) {
      setCity(json);
      return;
    }
    let temp = [];
    json.map((complex)=>{
      if(cities.includes(complex.city)) temp.push(complex)
    })
    setCity(temp);
  }
  
  function changeComplex(changesComplex) {
    if (changesComplex.includes('Усі')) {
      setComplexes(city);
      return;
    }
    let temp = [];
    json.map((complex)=>{
      if(changesComplex.includes(complex.name)) temp.push(complex)
    })
    setComplexes(temp);
  }
  
  function filterRooms(data) {
    setRooms(data)
    let temp = [];
    flats.map((e) => {
      if (data.includes(e.rooms)) temp.push(e);
    });
    setFilters(temp)
  }

  function changeFloor(floors) {
    setFloors(floors)
  }

  return (
    <div className="filterContainer">
      <div className="filterContainer__block filterContainer__place">
        <Selection data={json} changeValue={changeCity} preValue={null} typeOfData="Місто"/>
        <Selection data={city} changeValue={changeComplex} preValue={PreValueName} typeOfData="Комплекс"/>
      </div>

      <div className="filterContainer__block filterContainer__flat">
        <ButtonsGroup flats={flats} changeData={filterRooms}/>
        <Range data={json} changeFloor={changeFloor}/>
      </div>
    </div>
  );
}

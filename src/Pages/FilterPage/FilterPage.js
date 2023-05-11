import { React, useEffect, useState, useMemo } from "react";
import "./FilterPage.scss";
import Button from '../../Components/Filters/Buttons/Buttons.js';
import ButtonsGroup from '../../Modules/Filters/ButtonsGroup.js';
import Range from '../../Modules/Filters/Range.js';
import Selection from '../../Modules/Filters/Selection.js';

export default function FilterPage(props) {
  let json = require("../../fakeData.json").complexes;
  const [complexes, setComplexes] = useState(json);
  const [floors, setFloors] = useState([1, 4])

  const setDefaultData = useMemo(() => {
    let temp = [];
    complexes.map((complex)=>{
      complex.levels.map((level)=>{
        if(level.level >= floors[0] && level.level <= floors[1]){
          level.flats.map((flat)=>{
            temp.push(flat)
          })
        }
      })
    })
    return temp;
  }, [json]);

  function setNewFlats() {
    let temp = [];
    complexes.map((complex)=>{
      complex.levels.map((level)=>{
        if(level.level >= floors[0] && level.level <= floors[1]){
          level.flats.map((flat)=>{
            temp.push(flat)
          })
        }
      })
    })
    return temp;
  }

  const [flats, setFlats] = useState(setDefaultData);
  const [filtered, setFilters] = useState(setDefaultData);
  const [rooms, setRooms] = useState([1, 2, 3, 4])
  
  useEffect(()=>{
    setFlats(setNewFlats())
  }, [complexes])

  useEffect(()=>{
    setFlats(setNewFlats())
  }, [floors])


  useEffect(()=>{
    filterRooms(rooms)
  }, [flats])


  function changeCity(cities, whichToChange) {
    if (cities.includes('Усі')) {
      setComplexes(json);
      return;
    }
    let temp = [];
    json.map((complex)=>{
      if(cities.includes(complex.city)) temp.push(complex)
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
  
  function changeData(data, typeOfData) {
    switch(typeOfData) {
      case 'rooms': 
        filterRooms(data);
        break;
      default:
        break;
    }
  }

  function changeFloor(floors) {
    setFloors(floors)
  }

  return (
    <div style={{minHeight: '90vh', padding: '100px'}}>
      <Selection data={json} changeComplex={changeCity}/>
      <div style={{width: '400px'}}>
        <Range data={json} changeFloor={changeFloor}/>
      </div>
      <ButtonsGroup flats={flats} changeData={filterRooms}/>

      <ul>
        {
          filtered.map((el)=>{
            return(
              <li>
                Flat: {el.flat},
                Rooms: {el.rooms}
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}

import {React, useState, useEffect} from "react";
import Button from '../../Components/Filters/Buttons/Buttons.js';

export default function ButtonsGroup({flats, changeData}) {

  const [chosenRooms, setRooms] = useState(getMaxRooms());

  function getMaxRooms() {
    let maxRooms = 1;
    let roomArray = [];
    flats.map((flat)=>{
      maxRooms = (maxRooms < flat.rooms) ? flat.rooms : maxRooms;
    })
    for(let i = 0; i < maxRooms; i++) {
      roomArray.push(i+1)
    }
    return roomArray;
  }

  function setNewRooms(num, action){
    let temp = chosenRooms;
    if(action) {
      temp.push(num)  
    } else {
      temp = temp.filter(e => e !== num);
    }
    setRooms(temp)
    changeData(temp)
  }

  return(
    <>
      <div className="customized-label">Кількість кімнат</div>
      <div style={{display: 'flex', gap: '10px'}}>{
        getMaxRooms().map((num)=>{
          return(
            <Button number={num} setRoom={setNewRooms}/>
          )
        })
      }
      </div>
      {
        chosenRooms.map((e)=>{
          return(
            <>{e}</>
          )
        })
      }
    </>
  )
}
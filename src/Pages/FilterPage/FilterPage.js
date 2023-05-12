import {React, useState, useEffect} from "react";
import Filters from './Filters.js';
import Card from '../../Components/Card/Card.js';

export default function FilterPage() {

  const [filtered, setFiltered] = useState([])
  window.scrollTo(0, 0)
  document.getElementsByTagName('header')[0].classList.remove('header__mainPage')
  document.getElementsByTagName('header')[0].style.position = 'fixed';
  document.getElementsByClassName("header__list")[0].style.color = "white"
  document.getElementsByClassName("header__logo")[0].style.display = "none"

  useEffect(()=>{
    console.log(filtered)
    console.log("1")
  }, [filtered])

  function setNewValues(flats) {
    console.log("2")
    setFiltered(flats)
  }

  return(
    <div className="filterPage">
      <Filters setNewValues={setNewValues}/>

      <div className="filterPage__list">
        {
          filtered.map((el)=>{
            return(
              <Card 
                image={el.img} 
                title={"Квартира:" + el.flat}
                description={
                  `Кількість кімнат: ${el.rooms}
                    Адреса: ${el.address}
                    Житловий комплекс: ${el.complex}`
                }
              />
            )
          })
        }
      </div>
    </div>
  )
}
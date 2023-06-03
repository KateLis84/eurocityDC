import {React, useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Filters from './Filters.js';
import Card from '../../Components/Card/Card.js';
import { HashLink as Link } from 'react-router-hash-link';

export default function FilterPage() {
  const [filtered, setFiltered] = useState([])
  window.scrollTo(0, 0)

  useEffect(()=>{
    if(window.innerWidth>580) {
      document.getElementsByTagName('header')[0].classList.remove('header__mainPage')
      document.getElementsByTagName('header')[0].style.position = 'fixed';
      document.getElementsByClassName("header__list")[0].style.color = "white"
      document.getElementsByClassName("header__logo")[0].style.display = "none"
    }
    
  }, [])

  let selectedComplex = null;
  const location = useLocation()
  if(useLocation().state == null){
    console.log("nullss")
  } else {
    selectedComplex = location.state.selectedComplex
    console.log(selectedComplex)
  }

  function setNewValues(flats) {
    setFiltered(flats)
  }

  return(
    <div className="filterPage">
      <Filters setNewValues={setNewValues} preValues={selectedComplex}/>
      <div className="filterPage__list">
        {
          filtered.map((el)=>{
            return(
              <Link 
                to={"/flat/" + el.jkID+"/"+el.id} style={{all: 'unset'}}
                state={{from: 'FilterPage'}}
              >
                <Card 
                  image={el.img} 
                  title={"Квартира:" + el.flat}
                  description={
                    `Кількість кімнат: ${el.rooms}
                      Адреса: ${el.address}
                      Житловий комплекс: ${el.complex}`
                  }
                  locked = {el.status ? false : true}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
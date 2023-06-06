import {React, useState, useEffect} from 'react';
import Checkbox from '../../Components/Filters/Checkbox/Checkbox.js';

export default function CheckboxGroup({handleOccupiedFlats}) {

  const [values, setValues] = useState({
    free: true,
    occupied: true
  })

  useEffect(()=>{
    handleOccupiedFlats(values)
  }, [values])

  function handleCheckChange(from, value) {
    if(from == 'free') {
      setValues({
        free: value,
        occupied: values.occupied
      })
    }
    else {
      setValues({
        free: values.free,
        occupied: value
      })
    }
  }

  return(
    <div className="CheckboxGroup">
      <Checkbox label="Вільні" ID="free" onChangeHandle={handleCheckChange}/>
      <Checkbox label="Придбані" ID="occupied" onChangeHandle={handleCheckChange}/>
    </div>
    
  )
}
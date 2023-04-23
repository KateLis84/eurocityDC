import {React, useEffect, useState} from 'react';
import LevelMap from '../../Components/Area/Area';

let json = require('../../fakeData.json').complexes.HalBud;

function LevelPage() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false);
  })

  if(loading) {
    return(<>Loading</>)
  } else {
    return(
      <LevelMap flats={json.levels}/>
    )
  }
}

export default LevelPage;
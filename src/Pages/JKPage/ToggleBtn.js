import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({handleChange}) {
  const [alignment, setAlignment] = React.useState('web');

  const handleLocalChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    handleChange(newAlignment);
  };

  function changeStyle(event) {
    const neededElement = event.currentTarget;
    neededElement.style.backgroundColor = '#2B614C'
    neededElement.style.color = 'white'
    
    let opposite = document.getElementById(neededElement.id == "building" ? "level" : "building")
    opposite.style.backgroundColor = 'white';
    opposite.style.color = '#2B614C';
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleLocalChange}
      aria-label="Platform"
    >
      <ToggleButton id="building" onClick={changeStyle} value="building" style={{color: 'white', backgroundColor: '#2B614C'}}>Будівля</ToggleButton>
      <ToggleButton id="level" onClick={changeStyle} value="level" style={{color: '#2B614C', backgroundColor: 'white'}}>Поверх</ToggleButton>
    </ToggleButtonGroup>
  );
}
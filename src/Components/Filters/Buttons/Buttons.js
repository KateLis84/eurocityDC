import {React, useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CustomizedButtons({number, setRoom}) {

  const [btnColor, setBtnColor] = useState('#2B614C');
  const [btnTextColor, setBtnTextColor] = useState('white');
  const [btnState, setBtnState] = useState(true);

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '0px',
    border: '1px solid #2B614C',
    'min-width': '50px',
    'min-height': '50px',
    'border-radius': '0px',
    lineHeight: 0,
    backgroundColor: btnColor,
    color: btnTextColor,
    borderColor: '#2B614C',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: btnColor,
      borderColor: 'none',
      color: btnTextColor,
      boxShadow: 'none',
    }
  });

  function toggleBtn() {
    let action = true;
    if (btnState) {
      setBtnColor('white');
      setBtnTextColor('#2B614C');
      action = false;
    } else {
      setBtnTextColor('white');
      setBtnColor('#2B614C');
    }
    setBtnState(action);
    setRoom(number, action)
  }

  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained" disableRipple onClick={()=>{toggleBtn()}}>
        {number}
      </BootstrapButton>
    </Stack>
  );
}
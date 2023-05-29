import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import { styled } from '@mui/material/styles';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

export default function IconsRadio() {

  return (
    <RadioGroup
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: 'row',
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          color: '#3D7658',
          borderRadius: '0%',
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: '3px solid',
            borderColor: '#3D7658',
            color: 'red'
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: 'contents',
          '& > svg': {
            zIndex: 2,
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            borderRadius: '0%',
            backgroundColor: 'white'
          },
        },
      }}
    >
      <Sheet
          key="telegram"
          variant="outlined"
          sx={{
            // borderRadius: 'md',
            bgcolor: 'background.body',
            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minWidth: "100px",
          }}
        >
          <Radio id="telegram" value="telegram" checkedIcon={<CheckCircleRoundedIcon />} />
          <TelegramIcon variant="soft" size="sm" sx={{
            margin: '0 auto'
          }}/>
      </Sheet>
      <Sheet
          key="telephone"
          variant="outlined"
          sx={{
            // borderRadius: 'md',
            bgcolor: 'background.body',
            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minWidth: "100px",
          }}
        >
          <Radio id="telephone" value="telephone" checkedIcon={<CheckCircleRoundedIcon />} />
          <LocalPhoneIcon variant="soft" size="sm" sx={{
            margin: '0 auto'
          }}/>
      </Sheet>
      <Sheet
          key="email"
          variant="outlined"
          sx={{
            // borderRadius: 'md',
            bgcolor: 'background.body',
            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minWidth: "100px",
            minHeight: "60px"
          }}
        >
          <Radio id="email" value="email" checkedIcon={<CheckCircleRoundedIcon />} />
          <EmailIcon variant="soft" size="sm" sx={{
            margin: '0 auto'
          }}/>
      </Sheet>
    </RadioGroup>
  );
}
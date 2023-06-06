import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({
  borderBottom: '3px solid #2b614c',
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    'Open Sans',
    'sans-serif',
  ].join(','),
  fontWeight: '700',
  '&:hover': {
    color: 'green',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'white',
    backgroundColor: '#2b614c',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

export default function CustomizedTabs({info, handleChange}) {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    handleChange(info[newValue]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChangeTab} aria-label="ant example">
          {info.map((el)=>{
            return <AntTab label={el} />
          })}
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
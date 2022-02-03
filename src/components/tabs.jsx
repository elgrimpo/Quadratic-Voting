import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {DataContext} from '../contexts/data-context'


function TabNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Overview" />
        <Tab label="Comments" />
        <Tab label="Bounties" />
      </Tabs>
    </Box>
  );
}

export default TabNav

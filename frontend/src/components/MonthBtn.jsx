import React, {useState} from 'react'
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material/';

function MonthBtn({changeMonth, monthSelect}) {

  return (
   <FormControl size='medium'>
   <InputLabel id="demo-simple-select-label">Month</InputLabel>
   <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={monthSelect}
     label="month"
     onChange={changeMonth}
     disableScrollLock={true}
   >
     <MenuItem value='01'>January</MenuItem>
     <MenuItem value='02'>February</MenuItem>
     <MenuItem value='03'>March</MenuItem>
     <MenuItem value='04'>April</MenuItem>
     <MenuItem value='05'>May</MenuItem>
     <MenuItem value='06'>June</MenuItem>
     <MenuItem value='07'>July</MenuItem>
     <MenuItem value='08'>August</MenuItem>
     <MenuItem value='09'>September</MenuItem>
     <MenuItem value='10'>October</MenuItem>
     <MenuItem value='11'>November</MenuItem>
     <MenuItem value='12'>December</MenuItem>
   </Select>
 </FormControl>
  )
}

export default MonthBtn
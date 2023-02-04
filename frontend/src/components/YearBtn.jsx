import React, {useState} from 'react'
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material/';

function YearBtn() {
 const [year, setYear] = useState('');

 const handleChange = (event) => {
   setYear(event.target.value);
 };

  return (
   <FormControl size='medium'>
   <InputLabel id="demo-simple-select-label">Year</InputLabel>
   <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={year}
     label="Age"
     onChange={handleChange}
   >
     <MenuItem value={1996}>{1996}</MenuItem>
     <MenuItem value={1997}>{1997}</MenuItem>
     <MenuItem value={1998}>{1998}</MenuItem>
   </Select>
 </FormControl>
  )
}

export default YearBtn
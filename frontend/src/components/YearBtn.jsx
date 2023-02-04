import React, {useState} from 'react'
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material/';

function YearBtn({changeYear, yearSelect}) {

  return (
   <FormControl size='medium'>
   <InputLabel id="demo-simple-select-label">Year</InputLabel>
   <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={yearSelect}
     label="year"
     onChange={changeYear}
   >
     <MenuItem value={1996}>{1996}</MenuItem>
     <MenuItem value={1997}>{1997}</MenuItem>
     <MenuItem value={1998}>{1998}</MenuItem>
     <MenuItem value={2022}>{2022}</MenuItem>
   </Select>
 </FormControl>
  )
}

export default YearBtn
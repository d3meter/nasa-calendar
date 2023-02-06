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
     <MenuItem value={1996}>1996</MenuItem>
     <MenuItem value={1997}>1997</MenuItem>
     <MenuItem value={1998}>1998</MenuItem>
     <MenuItem value={1999}>1999</MenuItem>
     <MenuItem value={2000}>2000</MenuItem>
     <MenuItem value={2001}>2001</MenuItem>
     <MenuItem value={2002}>2002</MenuItem>
     <MenuItem value={2003}>2003</MenuItem>
     <MenuItem value={2004}>2004</MenuItem>
     <MenuItem value={2005}>2005</MenuItem>
   </Select>
 </FormControl>
  )
}

export default YearBtn
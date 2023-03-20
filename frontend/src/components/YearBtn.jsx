import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material/";

function YearBtn({ changeYear, yearSelect }) {
  return (
    <FormControl size="medium">
      <InputLabel id="demo-simple-select-label">Year</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={yearSelect}
        label="year"
        onChange={changeYear}
        disableScrollLock={true}
      >
{/*         <MenuItem value={1995}>1995</MenuItem>
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
        <MenuItem value={2006}>2006</MenuItem>
        <MenuItem value={2007}>2007</MenuItem>
        <MenuItem value={2008}>2008</MenuItem>
        <MenuItem value={2009}>2009</MenuItem> */}
        <MenuItem value={2010}>2010</MenuItem>
        <MenuItem value={2011}>2011</MenuItem>
        <MenuItem value={2012}>2012</MenuItem>
        <MenuItem value={2013}>2013</MenuItem>
        <MenuItem value={2014}>2014</MenuItem>
        <MenuItem value={2015}>2015</MenuItem>
        <MenuItem value={2016}>2016</MenuItem>
        <MenuItem value={2017}>2017</MenuItem>
        <MenuItem value={2018}>2018</MenuItem>
        <MenuItem value={2019}>2019</MenuItem>
        <MenuItem value={2020}>2020</MenuItem>
        <MenuItem value={2021}>2021</MenuItem>
        <MenuItem value={2022}>2022</MenuItem>
        <MenuItem value={2023}>2023</MenuItem>
      </Select>
    </FormControl>
  );
}

export default YearBtn;

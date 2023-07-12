import React from "react";
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
      >
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

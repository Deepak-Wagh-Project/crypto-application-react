import React ,{useState}from 'react';
import "./style.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectDays({days,handleDaysChange}) {
 



  return (
    <div className='select-days'>
   
        
        <Select
sx={{height:"2.5rem",
    color:"var(--white)",
    "&.MuiOutLinedInput-notchedOutLine":{
        borderColor:"var(--white)"
    },
       "&.MuiSvgIcon-root":{
        color:"var(--white)"
       },
    "&:hover":{
        "&& fieldset":{
            borderColor:"#3a80e9"
        }
    }}}

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
             <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 year</MenuItem>
        </Select>
  
    </div>
  );
}

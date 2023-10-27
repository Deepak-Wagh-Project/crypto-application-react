import  React,{useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css"

export default function PriceType({priceType,handlePriceTypeChange}) {


  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
     
     

    >
      <ToggleButton value="prices"  sx={{"&.Mui-selected":{
        color:"3a80e9 !important",
       
     },
    borderColor:"#3a80e9",
    border:"1px solid !important",
    "&.MuiToggleButttonGroup-grouped":{
        border:"1px solid  #3a80e9 !important",
        borderColor:"unset",
        color:"#3a80e9"
    },
    "&.MuiToggleButton-standard":{
        color:"#3a80e9"
    }
    }}
>
       Price
      </ToggleButton>
      <ToggleButton value="market_caps"
       sx={{"&.Mui-selected":{
        color:"3a80e9 !important",
     },
    borderColor:"#3a80e9",
    border:"1px solid !important",
    "&.MuiToggleButttonGroup-grouped":{
        border:"1px solid  #3a80e9 !important",
        borderColor:"unset",
        color:"#3a80e9"
    },
    "&.MuiToggleButton-standard":{
        color:"#3a80e9"
    }
    }}
 >
       Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" 
       sx={{"&.Mui-selected":{
        color:"3a80e9 !important",
     },
    borderColor:"#3a80e9",
    border:"1px solid !important",
    "&.MuiToggleButttonGroup-grouped":{
        border:"1px solid  #3a80e9 !important",
        borderColor:"unset",
        color:"#3a80e9"
    },
    "&.MuiToggleButton-standard":{
        color:"#3a80e9"
    }
    }}
>
        Total Volume
      </ToggleButton>
     
    </ToggleButtonGroup>
    </div>
  );
}

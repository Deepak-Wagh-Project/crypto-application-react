import React, { useEffect, useState } from "react";
import "./style.css"
import { get100Coins } from "../../../functions/get100Coins";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const SelectCoins=({crypto1,crypto2,handleCoinChange})=>{

  
    const [allCoins,setAllCoins]=useState([])
    const styles={height:"2.5rem",
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
    }}

    

     useEffect(()=>{

        getData()
     },[])

     async function getData(){
        const myCoins= await get100Coins();
        setAllCoins(myCoins);
       
     }

    return( <div className='select-coin'>
        <p>Crypto 1</p>
    
        <Select
sx={styles}

        
          value={crypto1}
          label="Crypto 1"
          onChange={(e)=>handleCoinChange(e,false)}
        >

            {allCoins
            .filter(item=>item.id!=crypto2).
            map((coin,i)=> <MenuItem value={coin.id}
            key={i}>{coin.name}</MenuItem>)}
            
         
        </Select>
        <p>Crypto 2</p>
    
        <Select
sx={styles}

        
          value={crypto2}
          label="Crypto 2"
          onChange={(e)=>handleCoinChange(e,true)}
        >

            {allCoins
            .filter(item=>item.id!=crypto1)
            .map((coin,i)=> <MenuItem value={coin.id}
            key={i}
            >{coin.name}</MenuItem>)}
            
         
        </Select>
  
  
    </div>
  )
}
export default SelectCoins;
import React ,{useState}from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Button from '../Button';


export default function TemporaryDrawer() {
   const[open,setOpen]=useState(false);
  
  return (
    <div>
    
      
          <IconButton  onClick={()=>setOpen(true)}>
            <MenuRoundedIcon className='icon'/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          > <div className='drawer-link'>
            <NavLink to="/" className="link"><p>Home</p></NavLink>
       <NavLink to="/compare" className="link"><p>Compare</p></NavLink>
       <Button text={"Dashboard"}
        onClick={true}
        outline={true}
        />

          </div>
          </Drawer>
       
    
    </div>
  );
}

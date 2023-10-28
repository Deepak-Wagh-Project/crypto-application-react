import React from "react";
import "./style.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { NavLink,useNavigate,Navigate } from "react-router-dom";

const Header=()=>{
  
    return (<div className="navbar">
     <h1 className="logo">Cryptotracker <span style={{color:"blue"}}> . </span></h1>
     <div className="links">
       <NavLink to="/" className="link"><p>Home</p></NavLink>
       <NavLink to="/compare" className="link"><p>Compare</p></NavLink>
      <Button text={"Dashboard"}
      
        outline={false}
        handleOnClick={"/dashboard"}
        />

     </div>
     <div className="mobile-drawer">
        <TemporaryDrawer/>
     </div>

    </div>)
}
export default Header;
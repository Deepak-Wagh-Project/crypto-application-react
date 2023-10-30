import React,{useState} from "react";
import { Switch } from "@mui/material";
import "./style.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { NavLink,useNavigate,Navigate } from "react-router-dom";

const Header=()=>{

   const setDark = () => {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    };
  
    const setLight = () => {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    };
  
    const storedTheme = localStorage.getItem("theme");
  
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    const defaultDark =
      storedTheme === "dark" || (storedTheme === null && prefersDark);
  
    if (defaultDark) {
      setDark();
    }
  
    const [mode, setMode] = useState(defaultDark ? true : false);
  
    const toggleTheme = (e) => {
      if (!mode) {
        setDark();
      } else {
        setLight();
      }
      setMode(!mode);
    };

  
    return (<div className="navbar">
      <NavLink to="/">
      <h1 className="logo">Cryptotracker <span style={{color:"blue"}}> . </span></h1>
      </NavLink>
     
     <div className="links">
     <Switch
          checked={!mode}
          onClick={(e) => {
            toggleTheme();
          }}
        />
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
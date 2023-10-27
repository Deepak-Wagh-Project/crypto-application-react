import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";

const Button=({text,handleOnClick,outline})=>{
const navigate=useNavigate()

    if(handleOnClick){
        navigate("/dashboard")
    }


    return(<button className= {outline?"outline-btn":"btn"} onClick={()=>navigate("/dashboard")}>{text}</button>)
}

export default Button;
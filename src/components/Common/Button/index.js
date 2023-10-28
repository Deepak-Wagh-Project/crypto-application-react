import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";

const Button=({text,outline,handleOnClick})=>{
const navigate=useNavigate()
 function changePage(){
    if(handleOnClick){
        navigate(handleOnClick)
    }
 }

    return(<button className= {outline?"outline-btn":"btn"} onClick={()=>changePage()}>{text}</button>)
}

export default Button;
import React, { useState } from "react";
import "./style.css"

const CoinInfo=({name,desc})=>{
       const [flag,setFlag]=useState(false)
       
       const shortDesc=desc.slice(0,200)+"<span  style='color:var(--grey)'>Read More...</span>";
       const longDesc=desc +"<span  style='color:var(--grey)'>Read Less...</span>";;
       
      

    return(<div className="grey-wrapper" >
        <h2 className="coin-info-heading">{name}</h2>
        {
        
        
        desc.length>200?

        <p className="coin-info-desc"
        onClick={()=>setFlag(!flag)}
         dangerouslySetInnerHTML={{__html:!flag?shortDesc:longDesc}}/>:
         <p className="coin-info-desc"
      
         dangerouslySetInnerHTML={{__html:desc}}/>
        }
    </div>)
}


export default CoinInfo;
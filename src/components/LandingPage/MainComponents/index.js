import React from "react";
import "./style.css"
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

const MainComponent=()=>{
 const navigate=useNavigate(); 
    return(<div className="flex-info">
        <div className="left-component">
             <motion.h1 className="track-crypto-heading"
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5}}
             >Track Crypto</motion.h1>
             <motion.h1 className="real-time-heading"
               initial={{opacity:0,y:20}}
               animate={{opacity:1,y:0}}
               transition={{duration:0.5}}
             >Real Time.</motion.h1>
             <motion.p className="info-text"
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5}}
             >
             Track crypto through a public api in real time. 
             Visit the dashboard to do so!
             </motion.p>
             <div className="btn-flex">
                <Button text={"Dashboard"}  outline={false} handleOnClick={"/dashboard"} />
                <Button text={"Share"} outline={true} />
             </div>
        </div>
        <div className="phone-container">
            <motion.img 
            initial={{y:-20}}
            animate={{y:20}}
            transition={{duration:2,
              repeatType:"mirror",
            type:"smooth",
        repeat:Infinity}}
            src={iphone} className="iphone"/>
            <img src={gradient} className="gradient"/>
        </div>
    </div>)
}
export default MainComponent;
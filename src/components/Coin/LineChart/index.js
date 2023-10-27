import React from "react";
import "./style.css"
import { Line } from "react-chartjs-2";
import {Chart as Chartjs} from "chart.js/auto"

function LineChart({chartData,priceType,multiAxis}){

    const options={
        plugins:{
            legend:{
                display:multiAxis?true:false
            },
        },
        responsive:true,
        interacton:{
            mode:"index",
            intersect:false,

        },
        
        scales:{
            
            crypto1:{
                 type:"linear",
                 display:true,
                 position:"left"
            },
            crypto2:{
                type:"linear",
                display:multiAxis?true:false,
                position:"right"
            }
        }
    }
    return( 
    <Line data={chartData} options={options}/>)

}

export default LineChart;

import { convertDate } from "./convertDate"
import { convertNumbers } from "./convertNumber"

export const settingChartData=(setChartData,prices1,prices2,coinvalue)=>{

  if(prices2){
    setChartData( {
      labels:prices1.map(price=>convertDate((price[0]))),
      datasets: [{
        label:"Crypto1",
        data: prices1.map(price=>price[1]),
         fill:false,
        borderColor: '#3a80e9',
        borderWidth:1,
        pointRadius:0,
        tension:0.25,
        yAxisID:"crypto1",
      },
      {   label:"Crypto2",
        data: prices2.map(price=>+price[1]),
        fill:false,
        borderColor: '#61c96f',
        borderWidth:1,
        pointRadius:0,
        tension:0.25,
        yAxisID:"crypto2",
      }]
    })
  }
  else{
    setChartData( {
        labels:prices1.map(price=>{
          
          return convertDate(price[0])
         }),
        datasets: [{
      
          data: prices1.map(price=>price[1]),
          backgroundColor:
          "rgba(58,128,233,0.1)",
          fill:true,
          borderColor: coinvalue>0?'green':'red',
          borderWidth:1,
          pointRadius:0,
          tension:0.25,
          yAxisID:"crypto1",
        }]
      })}
}
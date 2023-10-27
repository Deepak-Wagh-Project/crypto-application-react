import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { convertObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../components/Coin/PriceType";


const CoinPage=()=>{
  const [priceType, setPriceType] = useState("prices");
    const {id}=useParams()
    const[isLoading,setLoading]=useState(true)
    const[coinData,setCoinData]=useState();
    const[days,setDays]=useState(7);
    const [chartData,setChartData]=useState();
   
    useEffect(()=>{
      if(id){
        getData()
      }
        
         },[id])  


         const handleDaysChange = async (event) => {
          setLoading(true)
          setDays(event.target.value);
          const prices=await getCoinPrices(id,event.target.value ,priceType);
          if(prices.length>0){
            settingChartData(setChartData,prices);
              setLoading(false);
              console.log(prices)}
          
         
        };

    const handlePriceTypeChange = async (event, newType) => {
      setLoading(true);
      setPriceType(newType);

      const prices=await getCoinPrices(id,days,newType);
      if(prices.length>0){
        settingChartData(setChartData,prices);
          setLoading(false);
          console.log(prices)
      }
      console.log(newType)
    };

    

   
         
         async function getData(){
            const data=await getCoinData(id);

            if(data){
                convertObject(setCoinData,data)
                const prices=await getCoinPrices(id,days,priceType);
                if(prices.length>0){
                  settingChartData(setChartData,prices)
                  setLoading(false)
                }
                

            }
         }

    return(<div><Header/>
    {isLoading?<Loader/>:
  <>
    <div className="grey-wrapper"
    ><List coin={coinData}/>
   
    
    </div>
    <div className="grey-wrapper">
      <div className="select-days">
    <p>Price Change in the last</p>
    <SelectDays days={days} handleDaysChange={handleDaysChange}/>
    </div>
    <PriceType priceType={priceType}
       handlePriceTypeChange={handlePriceTypeChange}/>
    <LineChart chartData={chartData}/>
    </div>
    

    <CoinInfo heading={coinData.name} 
    desc={coinData.desc}/>
    </>
   
    }</div>)
}

export default CoinPage;
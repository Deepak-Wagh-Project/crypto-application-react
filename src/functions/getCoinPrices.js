import axios from "axios"

export const getCoinPrices= async (id,days,priceType)=>{
    const response= await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
    const prices=response.data[priceType];
      

      return prices;
}
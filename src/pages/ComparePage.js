import React, { useEffect, useState } from "react";
import LineChart from "../components/Coin/LineChart";
import CoinInfo from "../components/Coin/CoinInfo";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import PriceType from "../components/Coin/PriceType";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import { get100Coins } from "../functions/get100Coins";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData} from "../functions/settingChartData";
import { convertObject } from "../functions/convertObject";

function ComparePage() {
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [days, setDays] = useState(90);
  const [priceType, setPriceType] = useState("prices");
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coinData1, setCoinData1] = useState({});
  const [coinData2, setCoinData2] = useState({});

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{}],
  });

  useEffect(() => {
    getCoinsData();
  }, []);

  const getCoinsData = async () => {
    const response = await get100Coins();
    setAllCoins(response);

    const data1 = await getCoinData(coin1);
    const data2 = await getCoinData(coin2);

    if (data1) {
      convertObject(setCoinData1, data1);
    }
    if (data2) {
        convertObject(setCoinData2, data2);
    }
    getPrices(coin1, coin2, days, priceType);
    setLoading(false);
  };

  const getPrices = async (coin1, coin2, days, priceType) => {
    const prices1 = await getCoinPrices(coin1, days, priceType);
    const prices2 = await getCoinPrices(coin2, days, priceType);
    settingChartData(setChartData, prices1, prices2);
  };

  const handleCoinChange = async (e, isCoin2) => {
    if (!isCoin2) {
      setCoin1(e.target.value);
      const data1 = await getCoinData(e.target.value);
      if (data1) {
        convertObject(setCoinData1, data1);
        getPrices(e.target.value, coin2, days, priceType);
      }
    } else {
      setCoin2(e.target.value);
      const data2 = await getCoinData(e.target.value);
      if (data2) {
        convertObject(setCoinData2, data2);
        getPrices(coin1, e.target.value, days, priceType);
      }
    }
  };

  const handlePriceChange = (event) => {
    setPriceType(event.target.value);
    getPrices(coin1, coin2, days, event.target.value);
  };

  return (
    <>
      <Header />
      {/* <div className="grey-container">
            <List coin={coinData1} />
          </div>
          <div className="grey-container">
            <List coin={coinData2} />
          </div> */}
      <div className="div-flex">
      
        {/* <SelectCoins
          coin={coin1}
          handleChange={(e) => handleCoinChange(e)}
          allCoins={allCoins.filter((coin) => coin.id != coin2)}
        />
     
        <SelectCoins
          coin={coin2}
          handleChange={(e) => handleCoinChange(e, true)}
          allCoins={allCoins.filter((coin) => coin.id != coin1)}
        /> */}
        {/* <SelectDays
          noText={true}
          days={days}
          handleChange={(e) => {
            setDays(e.target.value);
            getPrices(coin1, coin2, e.target.value, priceType);
          }}
        /> */}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
         
          <div className="grey-container">
            <PriceType
              priceType={priceType}
              handleChange={handlePriceChange}
            />
            <LineChart
              chartData={chartData}
              mutliAxis={true}
              priceType={priceType}
            />
          </div>
          <div className="grey-container">
            <CoinInfo name={coinData1.name} desc={coinData1.desc} />
          </div>
          <div className="grey-container" style={{ marginBottom: "2rem" }}>
            <CoinInfo name={coinData2.name} desc={coinData2.desc} />
          </div>
        </>
      )}
    
    </>
  );
}

export default ComparePage;

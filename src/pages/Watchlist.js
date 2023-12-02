import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Grid from "../components/Dashboard/Grid";
import getItemsFromWatchlist from "../functions/getItemFromWatchlist";
import { get100Coins } from "../functions/get100Coins";
import TabsComponent from "../components/Dashboard/TabsComponent";
import Button from "../components/Common/Button";

const Watchlist=()=>{
  // const [coins, setCoins] = useState([]);
  // const [response,setResponse]=useState([]);
    const [items,setItems]=useState(getItemsFromWatchlist);
   
    return(<div>
        <Header/>
        {items&&items.map((coin,i)=><Grid coin={coin} key={i}/>)}
    </div>)

  //   useEffect(() => {
  //     getData();
  //   }, []);
  //   const watchlist = localStorage.getItem("watchlist")
  //   ? JSON.parse(localStorage.getItem("watchlist"))
  //   : [];
  //    console.log(watchlist);


  // useEffect( () => {
  //   console.log("watchlist was changed");
  //   console.log(watchlist);
  //   var myCoins =  response.filter((coins) => watchlist.includes(coins.id));
  //   setCoins(myCoins);
  // }, [watchlist]);

  

  // const getData = async () => {
  //   const data = await get100Coins();
  //   console.log(data);
  //   setResponse(data);

    
  // };

  // return (
  //   <div>
  //     <Header />
  //     <div>
  //       {coins.length > 0 ? (
  //         <TabsComponent data={coins} />
  //       ) : (
  //         <div>
  //           <h1 style={{ textAlign: "center" }}>
  //             Your watchlist is Currently Empty
  //           </h1>
  //           <p style={{ textAlign: "center", color: "var(--grey)" }}>
  //             Please Add Coins in your watchlist
  //           </p>
  //           <div
  //             style={{
  //               marginTop: "2rem",
  //               display: "flex",
  //               justifyContent: "center",
  //               alignItems: "center",
  //             }}
  //           >
  //             <a href="/dashboard">
  //               <Button text="Dashboard" />
  //             </a>
  //           </div>
  //         </div>
  //       )}
  //     </div>
      
  //   </div>
  //);
}
export default Watchlist;
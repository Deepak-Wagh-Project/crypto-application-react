import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/TabsComponent";
import axios from "axios";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";

const DashBoard=()=>{
    const [coins,setCoins]=useState([]);
    const [paginatedCoins,setPaginatedCoins]=useState([]);
    const [search,setSearch]=useState("");
    const [page, setPage] = useState(1);
    const[isLoading,setLoading]=useState(true);
    const handleChange = (event, value) => {
      setPage(value);
      var previousIndex=(value-1)*10;
      setPaginatedCoins(coins.slice(previousIndex,previousIndex+10))
    };

    function onChangeSearch(e){
        setSearch(e.target.value);
        console.log(search)
    }
    var filteredCoins=coins.filter(item=>item.name.toLowerCase()
        .includes(search.toLowerCase()) 
        || item.symbol.toLowerCase()
        .includes(search.toLowerCase()))
    useEffect(()=>{
       getData();
        
    },[])

    const getData= async ()=>{
        const myCoins= await get100Coins();
        console.log(myCoins)
        setCoins(myCoins);
        setPaginatedCoins(myCoins.slice(0,10));
        setLoading(false)
       }
    return (<div>
         <Header/>
         <BackToTop/>
         {  isLoading? (<Loader/>):(<div>
        <Search search={search} onChangeSearch={onChangeSearch}/>
        {search&&filteredCoins.length===0?<div><h1 style={{ textAlign: "center" }}>No Results Found</h1>
              <p style={{ textAlign: "center", color: "var(--grey)" }}>
                Could not find what you were looking for...
              </p></div>:
        
        <TabsComponent coins={search?filteredCoins:paginatedCoins}/>
        }
        {!search&&
        <PaginationComponent page={page} handleChange={(e,value)=>handleChange(e,value)}/>
       
        } 
        
         </div>)} </div>)
}

export default DashBoard;
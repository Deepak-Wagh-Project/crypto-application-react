import React, { useEffect } from "react";
import Header from "../components/Common/Header";
import MainComponent from "../components/LandingPage/MainComponents";
import { getCoinData } from "../functions/getCoinData";
const Home=()=>{

    useEffect(()=>{
        getCoinData();

    },[])
    return<div>
        <Header/>
        <MainComponent/>
    </div>
}
export default Home;
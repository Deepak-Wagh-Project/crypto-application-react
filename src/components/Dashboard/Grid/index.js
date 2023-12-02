import React, { useState } from "react";
import "./style.css"
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Link, useParams,useNavigate } from "react-router-dom";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import addItemInWatchlist from "../../../functions/addItemInWatchlist";
import { addToWatchlist, removeFromWatchlist } from "../../../functions/watchlist";
import { IconButton } from "@mui/material";
const Grid=({coin,i})=>{
  const {id}=useParams();
  const navigate=useNavigate();
 const[isSelectedWatchlist,setSelectedWatchlist]=useState(false);
  // const isWatchlist = localStorage.getItem("watchlist")
  // ? localStorage.getItem("watchlist").includes(coin.id)
  // : false;
const [isAdded, setIsAdded] = useState(false);
  function handleClick(){
    navigate(`/coin/${coin.id}`);
  }
  // const parentRef = useRef(null);
  // const childRef = useRef(null);

  // // Event handler for the parent element
  // const handleParentClick = () => {
  //   console.log('Parent element clicked!');
  // };

  // // Event handler for the child element
  // const handleChildClick = () => {
  //   console.log('Child element clicked!');
  // };

  // // Function to trigger the event for the child element
  // const triggerChildEvent = () => {
  //   // Check if the childRef is defined before triggering the event
  //   if (childRef.current) {
  //     childRef.current.click();
  //   }
  // };
    return(
      // <div to={`/coin/${coin.id}`}>
    <div onClick={handleClick}>
    <div className={`grid-container ${coin.price_change_percentage_24h<0&&"grid-container-red"}`}>
        <div className="info-flex">
            <img src={coin.image} className="coin-logo"/>
            <div className="name-col">
                <p className="coin-symbol">
                    {coin.symbol}
                </p>
                <p className="coin-name">
                    {coin.name}
                </p>
            </div>
            {/* {isWatchlist || isAdded ? (
          <div
            className="bookmark-icon-div"
            onClick={(e) => {
              setIsAdded(false);
              removeFromWatchlist(coin.id);
              e.stopPropagation()
            }}
          >
            <IconButton>
              <BookmarkBorderRoundedIcon className="bookmark-icon" />
            </IconButton>
          </div>
        ) : (
          <div
            className="bookmark-icon-div"
            onClick={(e) => {
              setIsAdded(true);
              addToWatchlist(coin.id);
              e.stopPropagation()
            }}
          >
            <IconButton>
              <BookmarkBorderRoundedIcon className="bookmark-icon" />{" "}
            </IconButton>
          </div>
        )} */}
        </div>
        
            {coin.price_change_percentage_24h>0?
            <div className="chip-flex">
            <div className="price-chip chip-green">
                    +{
                    coin.price_change_percentage_24h.toFixed(2)
                  }%
                  </div>
                  <div className="icon-chip chip-green" ><TrendingUpRoundedIcon/></div>
                  <div className="bookmark-icon" onClick={(e)=>{
                    addItemInWatchlist(coin,setSelectedWatchlist)
                    e.stopPropagation()
                    }}>
                    <BookmarkBorderRoundedIcon/>
                  </div>
                  </div>:
                   <div className="chip-flex">
                  <div className="price-chip chip-red">
                    {
                    coin.price_change_percentage_24h.toFixed(2)
                  }%
                  </div>
                  <div className="icon-chip chip-red"><TrendingDownRoundedIcon/></div>
                  <div className="bookmark-icon" onClick={(e)=>{
                    addItemInWatchlist(coin,setSelectedWatchlist)
                    e.stopPropagation()
                    }}>
                    <BookmarkBorderRoundedIcon/>
                  </div>
                  
                 
                   </div>
                 }
                 <div className="info-container">
                 <h3 className="coin-price" 
                 style={{
                    color:
                    coin.price_change_percentage_24h>0?
                    "var(--green)":"var(--red)"}}>
                    $:{coin.current_price.toLocaleString()}
                  </h3>
                  <p className="total-volume">
                    Total Volume : 
                    ${coin.total_volume.toLocaleString()}
                  </p>
                  <p className="market-cap">
                    Market cap :
                    ${coin.market_cap.toLocaleString()}
                  </p>
                 </div>
                
                
            </div>
            </div>
         )
}

export default Grid;
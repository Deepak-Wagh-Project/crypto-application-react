import React from "react";
import "./style.css"
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import addItemInWatchlist from "../../../functions/addItemInWatchlist";

const List=({coin,i})=>{
  console.log(coin)

    return(
    <Link  to={`/coin/${coin.id}`}>
    <tr className="list-row">
      <Tooltip title="Logo" placement="bottom-start">
        <td >
            <img src={coin.image} className="td-image"/>
           </td>
           </Tooltip>

           <td> <div className="name-col">
            <Tooltip title="Symbol"  placement="bottom-start">
                <p className="coin-symbol">
                    {coin.symbol}
                </p>
                </Tooltip>
                <Tooltip title="Name"  placement="bottom-start">
                <p className="coin-name">
                    {coin.name}
                </p>
                </Tooltip>
            </div>
            
        </td>
         <Tooltip title="Price Change"  placement="bottom">
            {coin.price_change_percentage_24h>0?

            <td className="chip-flex">
            <div className="price-chip chip-green">
                    +{
                    coin.price_change_percentage_24h.toFixed(2)
                  }%
                  </div>
                  <div className="icon-chip chip-green" ><TrendingUpRoundedIcon/></div>
                  <div className="bookmark-icon" onClick={(e)=>{
                    addItemInWatchlist(coin)
                    e.stopPropagation()
                    }}>
                    <BookmarkBorderRoundedIcon/>
                  </div>
                  </td>:
                   <td className="chip-flex">
                  <div className="price-chip chip-red">
                    {
                    coin.price_change_percentage_24h.toFixed(2)
                  }%
                  </div>
                  <div className="icon-chip chip-red"><TrendingDownRoundedIcon/></div>
                  <div className="bookmark-icon" onClick={(e)=>{
                    addItemInWatchlist(coin)
                    e.stopPropagation()
                    }}>
                    <BookmarkBorderRoundedIcon/>
                  </div>
                 
                   </td>
                 }
                 </Tooltip>
               <Tooltip title="Current Price">
                 <td className="coin-price" 
                 style={{
                    color:
                    coin.price_change_percentage_24h>0?
                    "var(--green)":"var(--red)"}}>
                    $:{coin.current_price.toLocaleString()}
                  </td>
                  </Tooltip>
                  <Tooltip title="Total volume">
                  <td className="total-volume">
                    
                    ${coin.total_volume.toLocaleString()}
                  </td>
                  </Tooltip>
                  <Tooltip title="Market Cap">
                  <td className="market-cap">
                    
                    ${coin.market_cap.toLocaleString()}
                  </td>
                  </Tooltip>
              
                
                
            
    </tr>
    </Link>)
}

export default List;
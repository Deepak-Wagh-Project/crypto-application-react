import { json } from "react-router-dom";

export const addToWatchlist = (id) => {
    const previousList = localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem('watchlist')):[];
    console.log("Adding to watchlist...", id);
    if (!previousList || !previousList.includes(id)) {
         previousList.push(id);
      localStorage.setItem("watchlist", JSON.stringify(previousList));
    } else {
      alert("Already Added!");
      
    }
  };
  
  export const removeFromWatchlist = (id) => {
    if (
      window.confirm(
        "Are you sure you want to remove this coin from the watchlist"
      )
    ) {
      const previousList = JSON.parse(localStorage.getItem("watchlist"));
      const newList = previousList.filter((item) => item != id);
      console.log("newlist is>>", newList.toString());
      localStorage.setItem("watchlist",JSON.stringify(newList));
      window.location.reload();
    }
  };
  
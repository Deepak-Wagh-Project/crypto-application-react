const getItemsFromWatchlist=()=>{
    const arr=JSON.parse(window.localStorage.getItem("products"));
 return arr;
}

export default getItemsFromWatchlist;
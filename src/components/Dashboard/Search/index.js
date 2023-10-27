import React from "react";
import "./style.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search=({search,onChangeSearch})=>{
    return(<div>
        <div className="search-flex">
            <SearchRoundedIcon className="search-icon"/>
            <input type="text" placeholder="Search" 
            onChange={(e)=>onChangeSearch(e)}
            className="search-input"></input>
            
        </div>
    </div>)
}

export default Search;

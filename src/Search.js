import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import DatePicker from './DatePicker';
import { useHistory } from "react-router-dom"
import { DateRangePicker } from 'react-date-range';
import "./Search.css"


function Search() {
    const [showSearch,setShowSearch] = useState(false);
    const history = useHistory();

    return (
        <div className="Search">
          
            <div className="Search-component">
            <input type="text" placeholder="What are you looking for?"  onClick={() => setShowSearch(!showSearch)} />
            
                <SearchIcon onClick={()=> history.push("/search")}/>
                </div>
            {showSearch && <DatePicker />}
        </div>
    )
}

export default Search

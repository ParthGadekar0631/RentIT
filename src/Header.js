import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import Login from "./Login";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.imgur.com/Fy2RvHd.png"
          alt=""
        />
      </Link>

      

      <div className="header__right">
      <button className="header__login"><Login/></button>
        {/* {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button> */}

        <Button variant="outlined" onClick={() => history.push("/addlisting")}>
          Add a Listing
        </Button>

        
      </div>
    </div>
  );
}

export default Header;

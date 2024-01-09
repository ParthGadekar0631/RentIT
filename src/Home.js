import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
import Search from "./Search";

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Search/>
      <Banner />
     
    </div>
  );
}

export default Home;

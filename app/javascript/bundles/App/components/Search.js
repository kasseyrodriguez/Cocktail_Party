import React, { Component } from "react";
import App from '../App';



const Search = (props) => {
  return(
    <div>
    <h1 class="first-header">Choose A Bartender</h1>
    <h3>Let Cocktail Party help you find a Bartender for your event!</h3>
    <form class="search-container">
    <input onChange={props.handleSearch} type="search" className="searchbar" placeholder="Search for a Bartender" />  <a href="#"><img src={'http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png'} className="search-icon"/></a>
    </form>
    </div>
  )
}

export default Search;

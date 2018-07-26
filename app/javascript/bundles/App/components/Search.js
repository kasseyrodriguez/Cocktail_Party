import React, { Component } from "react";
import App from '../App';


const Search = (props) => {
  return(
    <div>
    <h1>Choose A Bartender</h1>
    <h4>Let Cocktail Party help you find a Bartender in your area!</h4>
    <input onChange={props.handleSearch} type="search" className="searchbar" placeholder="Search for a Bartender" />
    </div>
  )
}

export default Search;

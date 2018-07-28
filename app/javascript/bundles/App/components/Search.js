import React, { Component } from "react";
import App from '../App';



const Search = (props) => {
  return(
    <div class="jumbotron jumbotron-fluid ">
         <img src="https://i.imgur.com/0rf0hmD.jpg" alt="logo" width="100%" className="jumbo-img"/>
           <h1 className="first-header">Choose A Bartender</h1>
           <h3>Let Cocktail Party help you find a Bartender for your event!</h3>
           <input onChange={props.handleSearch} type="search" className="searchbar justify-content-center" placeholder="Search for a Bartender" /> <a href="#"><img src={'http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png'} className="search-icon"/></a>
     </div>
  )
}

export default Search;

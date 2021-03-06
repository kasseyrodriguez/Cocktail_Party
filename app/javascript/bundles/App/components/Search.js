import React, { Component } from "react";
import App from '../App';


const Search = (props) => {
	return (
		<div className="jumbotron jumbotron-fluid ">
			<img src="https://i.imgur.com/0rf0hmD.jpg" alt="logo" width="100%" height="30%" className="jumbo-img" />
			<h1 className="first-header">Choose A Bartender</h1>
			<h3 className="moto-header">Let Cocktail Party help you find a Bartender for your event!</h3>
			<input onChange={props.handleSearch} type="search" className="searchbar" placeholder="Search for a Bartender" />
		</div>
	)
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function (data) {
			console.log(data);
		}
	});
}

export default Search;

import React, { Component } from "react";
import axios from "axios";

import NavigationBar from "./components/NavigationBar";


// import { Button } from "semantic-ui";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      possibleResults: [],
      results: [],
      bartenderList: [],
      value: "",
      filters: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/search.json")
      .then(response => {
        // this.setState({ possibleResults: response.data });
        // const { possibleResults } = this.state;
        let bartenders = response.data.filter(user => {
          return user.bartender === true;
        });
        this.setState({ bartenderList: bartenders, results: bartenders });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearch = event => {
    const searchText = event.target.value;
    const regexp = new RegExp(searchText, "i");
    let results = [];
    if (searchText.trim() !== "") {
      results = this.state.bartenderList.filter(result => {
        return regexp.test(result.name);
      });
      this.setState({ results });
    } else {
      this.setState({ results: [] });
    }
  };


  handleChange(event) {
    let results = []
    // let regexp = new RegExp(this.refs.searchTxt.value, "i");
    // console.log(this.refs.searchTxt.value)
    let filter = {
      type: this.refs.dropdown.value,
      gender: this.refs.maleBtn.checked ? 'male' : 'female',
      rating: this.refs.ratingNumber.value
    }
    console.log(filter)
    results = this.state.bartenderList.filter(user => {
      return user[filter.type] === true && user.gender === filter.gender && user.rating == filter.rating ;
    });
    // console.log(results)
    this.setState({ results: results });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <NavigationBar />
        <h1>Choose A Bartender</h1>
        <h4>Let Cocktail Party help you find a Bartender in your area!</h4>
        <input type="search" onChange={this.handleSearch} className="searchbar"placeholder="Search for a Bartender"/>
        <label>Bartender Type:</label>
        <select name="type" onChange={this.handleChange} ref="dropdown">
          <option value="standard">Standard</option>
          <option value="flair">Flair</option>
          <option value="mixologist">Mixologist</option>
        </select>
        <div onChange={this.handleChange}>
          <input type="radio" value="Male" name="gender" ref="maleBtn"/> Male
          <input type="radio" value="Female" name="gender"/> Female
        </div>
        <label>Ratings:</label>
       <select name="rating" onChange={this.handleChange} ref="ratingNumber">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <ul>
          {results.map((result, i) => {
            return (
              <table>
                <tbody>
                <li key={i}>
                <tr>
                <a href={result.location}>
                  <td>Name: {result.name}</td>
                  <td>Gender: {result.gender}</td>
                  <td>Mixologist: {result.mixologist}</td>
                  <td>Flair: {result.flair}</td>
                  <td>Standard: {result.standard}</td>
                  <td>Rating: {result.rating}</td>
                  <td>Bio: {result.bio}</td>
                </a>
                </tr>
                </li>
              </tbody>
            </table>
            );
          })}
        </ul>
        {results.length === 0 && <p>No Results</p>}
      </div>
    );
  }
}

export default App;

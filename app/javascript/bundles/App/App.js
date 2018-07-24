import React, { Component } from "react";
import axios from "axios";


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      possibleResults: [],
      results: [],
      bartenderList: [],
      value: "Standard",
      filters: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.setGender = this.setGender.bind(this)
  }

  componentDidMount() {
    axios
      .get("/search.json")
      .then(response => {
        this.setState({ possibleResults: response.data });
        const { possibleResults } = this.state;
        let bartenders = possibleResults.filter(user => {
          return user.bartender === true;
        });
        this.setState({ bartenderList: bartenders });
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


  setGender = event => {
    if (event.target.value === "Male") {
      let maleBartenders = this.state.bartenderList.filter(user => {
        return user.gender === "male";
      });
      this.setState({ results: maleBartenders });
    } else {
      let femaleBartenders = this.state.bartenderList.filter(user => {
        return user.gender === "female";
      });
      this.setState({ results: femaleBartenders });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === "flair" && this.setGender === "Male") {
      let maleflairBartenders = this.state.bartenderList.filter(user => {
        return user.flair === true;
      });
      this.setState({ results: maleflairBartenders });
    } else if (event.target.value === "mixologist" && this.setGender === "Female") {
      let femaleMixologist = this.state.bartenderList.filter(user => {
        return user.mixologist === true;
      });
      this.setState({ results: femaleMixologist });
    } else {
      let standard = this.state.bartenderList.filter(user => {
        return user.standard === true;
      });
      this.setState({ results: standard });
    }
  }


  render() {
    const { results } = this.state;

    return (
      <div>
        <h1>Choose A Bartender</h1>
        <h4>Let Cocktail Party help you find a Bartender in your area!</h4>
        <input type="search" onChange={this.handleSearch} placeholder="Search for a Bartender" />
        <label>Bartender Type:</label>
        <select name="type" value={this.state.value} onChange={this.handleChange}>
          <option value="standard">Standard</option>
          <option value="flair">Flair</option>
          <option value="mixologist">Mixologist</option>
        </select>
        <div onChange={this.setGender}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
        </div>
        <label>Ratings:</label>
<<<<<<< HEAD
        <select id="rating" value={this.state.value} onChange={this.handleChange}>
=======
        <select id="rating" name="rating" value={this.state.value} onChange={this.handleChange}>
>>>>>>> 3d8f76f9bb9f28cf0d8ef64bff07e365e4ac9102
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <ul>
          {results.map((result, i) => {
            return (
              <li key={i}>
                <a href={result.location}>
                  Name: {result.name} Gender: {result.gender} Mixologist: {result.mixologist.toString()} Flair: {result.flair.toString()} Standard: {result.standard.toString()}
                </a>
              </li>
            );
          })}
        </ul>
        {results.length === 0 && <p>No Results</p>}
      </div>
    );
  }
}

export default App;

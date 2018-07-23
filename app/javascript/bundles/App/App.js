import React, { Component } from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    possibleResults: [],
    results: [],
    bartenderList: [],
    value: "Standard"
  };

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

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === "flair") {
      let flairBartenders = this.state.bartenderList.filter(user => {
        return user.flair === true;
      });
      this.setState({ results: flairBartenders });
    } else if (event.target.value === "mixologist") {
      let mixologist = this.state.bartenderList.filter(user => {
        return user.mixologist === true;
      });
      this.setState({ results: mixologist });
    } else {
      let standard = this.state.bartenderList.filter(user => {
        return user.standard === true;
      });
      this.setState({ results: standard });
    }
  }

  setGender(event) {
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

  render() {
    const { results } = this.state;
    this.handleChange = this.handleChange.bind(this);

    return (
      <div>
        <h1>Choose A Bartender</h1>
        <h4>Let Cocktail Party help you find a Bartender in your area!</h4>
        <input type="search" onChange={this.handleSearch} />
        <label>Bartender Type:</label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="standard">Standard</option>
          <option value="flair">Flair</option>
          <option value="mixologist">Mixologist</option>
        </select>
        <div onChange={this.setGender.bind(this)}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
        </div>
        <label>Ratings:</label>
        <select id="rating" value={this.state.value} onChange={this.handleChange}>
          <option value="5"></option>
          <option value="4"></option>
          <option value="3"></option>
          <option value="2"></option>
          <option value="1"></option>
        </select>
        <ul>
          {results.map((result, i) => {
            return (
              <li key={i}>
                <a href={result.location}>
                  Name: {result.name} Gender: {result.gender}
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

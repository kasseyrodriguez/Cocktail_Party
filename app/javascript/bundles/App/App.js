import React, { Component } from "react";
import axios from "axios";
import NavigationBar from './components/NavigationBar';
import moment from 'moment';
import Search from './components/Search';
import Modal from './components/Modal';


class App extends React.Component {
  state = {
    results: [],
    show: false,
    bartenderList: [],
    filters:  {
                bartenderType: "all",
                gender: "all",
                rating: "all",
                searchText: "",
                date: ""
              },
    event: {
      name: "",
      location: "",
      date: "",
      bartender: {}
    }
  };
  componentDidMount() {
    axios.get("/search.json")
      .then((response) => {
        let bartenders = response.data;
        this.setState({ bartenderList: bartenders, results: bartenders })
      })
      .catch((error) => { console.log(error) } )
  }

  handleSearch = (e) => {
    let { event, filters } = this.state;
    filters.searchText = e.target.value
    this.filterResults(event, filters);
  }
  handleNameChange = (e) => {
    let { event } = this.state;
    event.name = e.target.value;
    this.setState({ event });
  }
  handleLocationChange = (e) => {
    let { event } = this.state;
    event.location = e.target.value;
    this.setState({ event });
  }
  handleDateChange = (e) => {
    let { event, filters } = this.state;
    event.date = e.target.value;
    filters.date = e.target.value;
    this.filterResults(event, filters);
  }
  handleBartenderTypeChange = (e) => {
    let { event, filters } = this.state;
    filters.bartenderType = e.target.value;
    this.filterResults(event, filters);
  }
  handleGenderChange = (e) => {
    let { event, filters } = this.state;
    filters.gender = e.target.value;
    this.filterResults(event, filters);
  }
  handleRatingChange = (e) => {
    let { event, filters } = this.state;
    filters.rating = e.target.value;
    this.filterResults(event, filters);
  }
  handleBartenderSelect = (result) => {
    let { event } = this.state;
    event.bartender = result;
    this.setState({ event });
  }
  filterResults = (event, filters) => {
    let bartenders = this.state.bartenderList;
    if(filters.searchText.trim() !== ""){
      const regexp = new RegExp(filters.searchText, 'i');
      bartenders = bartenders.filter((bartender) => {
        return regexp.test(bartender.name);
      })
    }
    if(filters.date !== ""){
      const day = moment(filters.date).format("dddd").toLowerCase();
      bartenders = bartenders.filter((bartender) => {
        return day === "invalid date" || bartender[day];
      })
    }
    if(filters.gender !== "all"){
      bartenders = bartenders.filter((bartender) => {
        return bartender.gender === filters.gender;
      })
    }
    if(filters.rating !== "all"){
      bartenders = bartenders.filter((bartender) => {
        return bartender.rating >= parseInt(filters.rating);
      })
    }
    if(filters.bartenderType !== "all"){
      bartenders = bartenders.filter((bartender) => {
        return bartender[filters.bartenderType];
      })
    }
    this.setState({event, results: bartenders});
  }
  createEvent = () => {
    let { event } = this.state;
    axios.post("/events.json", {
        event: {
          name: event.name,
          date: event.date,
          location: event.location,
          bartender_id: event.bartender.id
        }
      })
      .then((response) => { return event.data; })
      .catch((error) => { console.log(error) });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.createEvent(event);
    Turbolinks.visit(`/users/${this.state.event.bartender.id}`)
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { results } = this.state;
    return (
      <div>
        <NavigationBar />
        <Search handleSearch={this.handleSearch}/>
        <form onSubmit={this.handleSubmit}>
          <div class="filter">
            <label>Event Name:</label>
            <input
              type="text"
              className="search-input"
              value={this.state.event.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div class="filter">
            <label>Location:</label>
            <input
              type="text"
              className="search-input"
              value={this.state.event.location}
              onChange={this.handleLocationChange}
            />
          </div>
          <div class="filter">
            <label>Date:</label>
            <input
              type="date"
              className="search-input"
              value={this.state.event.date}
              onChange={this.handleDateChange}
            />
          </div>
          <div class="filter">
            <label>Bartender:</label>
            <input
              disabled
              type="text"
              value={this.state.event.bartender.name}
              className="search-input"
            />
          </div>
          <div class="filter">
            <label>Bartender Type:</label>
            <select name="type" value={this.state.filters.bartenderType} onChange={this.handleBartenderTypeChange}>
              <option value="standard">Standard</option>
              <option value="flair">Flair</option>
              <option value="mixologist">Mixologist</option>
              <option value="all">All</option>
            </select>
          </div>
          <div class="filter">
            <label>Gender:</label>
            <select name="type" value={this.state.filters.gender} onChange={this.handleGenderChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="all">All</option>
            </select>
          </div>
          <div class="filter">
            <label>Ratings:</label>
            <select name="rating" value={this.state.filters.rating} onChange={this.handleRatingChange}>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="all">All</option>
            </select>
          </div>
          <input type="submit" value="Submit" className="btn btn-elegant" onClick={this.handleSubmit} />
        </form>
        <ul>
          {results.map((result, i) => {
            return (
              <li key={i} onClick={ () => this.handleBartenderSelect(result) } >
                <div className="user-bio">
                  <table>
                    <tbody>
                      <td>
                        <tr>Name: {result.name}</tr>
                        <tr>Rating: {result.rating}</tr>
                        <tr>Gender: {result.gender}</tr>
                        <tr>Bio: {result.bio}</tr>
                      </td>
                      <tr>
                      <button type="button" className="btn btn-lg book-btn">Book Now</button>
                        <Modal show={this.state.show} handleClose={this.hideModal} >
                          <img src="https://i.imgur.com/jl6o412.jpg" alt="logo" width="300"/>
                          Name:<p>{this.state.event.bartender.name}</p>
                          Gender:<p>{this.state.event.bartender.gender}</p>
                          Rating:<p>{this.state.event.bartender.rating}</p>
                          Bio:<p>{this.state.event.bartender.bio}</p>
                       </Modal>
                      <button type="button" className="btn btn-lg view-profile" onClick={this.showModal}>
                        View Profile
                      </button>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

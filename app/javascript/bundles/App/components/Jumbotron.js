import React, { Component } from "react";
import App from '../App';

class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid ">
         <div class="jumbo-container">
           <img src="https://i.imgur.com/0rf0hmD.jpg" alt="logo" width="100%" className="jumbo-img"/>
          <h1 class="display-4"></h1>
           <p class="lead"></p>
          </div>
         </div>
   )
  }
}


export default Jumbotron;

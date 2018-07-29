import React, { Component } from "react";

class NavigationBar extends Component {
  render() {
    return (
      <header>

      <nav className="navbar navbar-expand-lg navbar-dark black" width="100">
          <img src="https://i.imgur.com/K9kB96S.png" alt="logo" width="300"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          </div>
      </nav>
  </header>
    );
  }
}
export default NavigationBar;

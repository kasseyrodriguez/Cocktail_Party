import React, { Component } from "react";

class NavigationBar extends Component {
  render() {
    return (
      <header>

      <nav class="navbar navbar-expand-lg navbar-dark black">
          <img src="https://i.imgur.com/K9kB96S.png" alt="logo" width="300"/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="navbar-nav nav-flex-icons">
                  <li class="nav-item">
                      <a class="nav-link"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><i class="fa fa-instagram"></i></a>
                  </li>
              </ul>
          </div>
      </nav>

  </header>
    );
  }
}
export default NavigationBar;

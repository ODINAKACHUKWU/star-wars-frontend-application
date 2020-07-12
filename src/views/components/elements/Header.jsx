import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import StarwarsLogo from "./StarwarsLogo";
import { SlideInDown, Shake } from "./Animations";

class Header extends Component {
  componentDidMount() {
    const urlPath = this.getUrlpath();
    if (urlPath) {
      const header = document.querySelector(".navbar");
      header.style.backgroundColor = "#000000";
    }
  }

  getUrlpath = () => {
    const urlDetails = window.location.pathname.split("/");
    return urlDetails[urlDetails.length - 1];
  };

  render() {
    const urlPath = this.getUrlpath();
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top">
          <div className="container">
            <SlideInDown duration="1">
              <Link to="/">
                <StarwarsLogo className="navbar-brand" width="100" />
              </Link>
            </SlideInDown>
            <SlideInDown duration="1">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </SlideInDown>

            <div className="collapse navbar-collapse" id="navbarNav">
              <SlideInDown className="ml-auto" duration="1">
                <ul className="navbar-nav">
                  <Shake delay="2">
                    <li className="nav-item mr-2" id="search-input">
                      {urlPath ? <SearchInput /> : null}
                    </li>
                  </Shake>
                  <li className="nav-item">
                    <Link to="/characters" className="nav-link text-white">
                      Characters
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/planets" className="nav-link text-white">
                      Planets
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/starships" className="nav-link text-white">
                      Starships
                    </Link>
                  </li>
                </ul>
              </SlideInDown>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

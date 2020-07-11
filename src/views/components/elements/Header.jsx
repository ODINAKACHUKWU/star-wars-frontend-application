import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import StarwarsLogo from "./StarwarsLogo";

class Header extends Component {
  getUrlpath = () => {
    const urlDetails = window.location.pathname.split("/");
    return urlDetails[urlDetails.length - 1];
  };

  render() {
    const urlPath = this.getUrlpath();
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link to="/">
              <StarwarsLogo className="navbar-brand" width="100" />
            </Link>

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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-2">
                  {urlPath ? <SearchInput /> : null}
                </li>
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
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
import SearchInput from "./SearchInput";
import StarwarsLogo from "./StarwarsLogo";
import {
  BounceInLeft,
  BounceInRight,
  BounceInUp,
} from "../../../helpers/animations";

import "../../../assets/stylesheets/components/elements/background.scss";

class Intro extends Component {
  render() {
    return (
      <div className="intro-overlay">
        <div className="container-fluid d-flex align-items-center justify-content-center h-100">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-8 text-white">
              <BounceInLeft>
                <StarwarsLogo id="intro-logo" width="250" />
              </BounceInLeft>
              <BounceInRight>
                <h1 className="font-weight-bold mt-3">Directory</h1>
              </BounceInRight>
              <BounceInUp>
                <div className="dropdown-divider my-3"></div>
                <h5 className="mb-5">
                  Find your favourite Star wars Characters, Films, Species,
                  Planets and Starships
                </h5>
                <SearchInput />
              </BounceInUp>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

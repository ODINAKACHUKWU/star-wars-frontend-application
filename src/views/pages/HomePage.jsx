import React, { Component } from "react";
import Header from "../components/elements/Header";
import Intro from "../components/elements/Intro";
import { BounceInDown } from "../../helpers/animations";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="background-img">
        <BounceInDown>
          <Header />
        </BounceInDown>
        <Intro />
      </div>
    );
  }
}

export default HomePage;

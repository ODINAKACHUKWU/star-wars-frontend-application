import React, { Component } from "react";
import Header from "../components/elements/Header";
import Planets from "../components/containers/Planets";
import Footer from "../components/elements/Footer";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class PlanetsPage extends Component {
  render() {
    return (
      <div className="background-img">
        <Header />
        <Planets />
        <Footer />
      </div>
    );
  }
}

export default PlanetsPage;

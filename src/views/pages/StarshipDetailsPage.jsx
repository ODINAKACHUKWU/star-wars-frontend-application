import React, { Component } from "react";
import Header from "../components/elements/Header";
import StarshipDetails from "../components/containers/StarshipDetails";
import Footer from "../components/elements/Footer";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class StarshipDetailsPage extends Component {
  render() {
    return (
      <div className="background-img">
        <Header />
        <StarshipDetails />
        <Footer />
      </div>
    );
  }
}

export default StarshipDetailsPage;

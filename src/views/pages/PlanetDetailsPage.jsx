import React, { Component } from "react";
import Header from "../components/elements/Header";
import PlanetDetails from "../components/containers/PlanetDetails";
import Footer from "../components/elements/Footer";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class PlanetDetailsPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="background-img">
        <Header />
        <PlanetDetails />
        <Footer />
      </div>
    );
  }
}

export default PlanetDetailsPage;

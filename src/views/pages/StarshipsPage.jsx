import React, { Component } from "react";
import Header from "../components/elements/Header";
import Starships from "../components/containers/Starships";
import Footer from "../components/elements/Footer";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class StarshipsPage extends Component {
  render() {
    return (
      <div className="background-img">
        <Header />
        <Starships />
        <Footer />
      </div>
    );
  }
}

export default StarshipsPage;

import React, { Component } from "react";
import Header from "../components/elements/Header";
import Characters from "../components/containers/Characters";
import Footer from "../components/elements/Footer";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class CharactersPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="background-img">
        <Header />
        <Characters />
        <Footer />
      </div>
    );
  }
}

export default CharactersPage;

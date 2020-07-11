import React, { Component } from "react";
import Header from "../components/elements/Header";
import CharacterDetails from "../components/containers/CharacterDetails";
import Footer from "../components/elements/Footer";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class CharactersPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="background-img">
        <Header />
        <CharacterDetails />
        <Footer />
      </div>
    );
  }
}

export default CharactersPage;

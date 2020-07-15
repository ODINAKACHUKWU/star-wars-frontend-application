import React, { Component } from "react";
import Header from "../components/elements/Header";
import SearchResultLoader from "../components/containers/SearchResultLoader";
import Footer from "../components/elements/Footer";

// Styles
import "../../assets/stylesheets/components/elements/background.scss";

class SearchResultPage extends Component {
  render() {
    return (
      <div className="background-img">
        <Header />
        <SearchResultLoader />
        <Footer />
      </div>
    );
  }
}

export default SearchResultPage;

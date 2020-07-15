import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  FadeIn,
  SlideInUp,
  RubberBand,
  Tada,
  Shake,
  ZoomIn,
} from "../elements/Animations";
import { fetchCharactersRequest } from "../../../actions/creators/characterActions";
import Spinner from "../elements/Spinner";

import "../../../assets/stylesheets/components/elements/background.scss";

import charactersBanner from "../../../assets/images/characters-banner.jpg";
import character1 from "../../../assets/images/character-1.jpg";
import character2 from "../../../assets/images/character-2.jpg";
import character3 from "../../../assets/images/character-3.jpg";
import character4 from "../../../assets/images/character-4.jpg";
import character5 from "../../../assets/images/character-5.png";
import character6 from "../../../assets/images/character-6.jpg";
import character7 from "../../../assets/images/character-7.jpg";
import character8 from "../../../assets/images/character-8.png";

class Characters extends Component {
  state = {
    totalCount: 0,
    offset: 0,
    data: [],
    perPage: 9,
    currentPage: 0,
    itemCount: 0,
    pageCount: 0,
    nextPage: false,
    previousPage: false,
  };

  getRandomImage = () => {
    const images = [
      character1,
      character2,
      character3,
      character4,
      character5,
      character6,
      character7,
      character8,
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  componentDidMount = () => {
    const { fetchCharacters } = this.props;
    fetchCharacters("people").then(() => {
      const pages = [];
      const { characters } = this.props;
      let { offset, perPage, currentPage } = this.state;
      const pageCharacters = characters.slice(offset, offset + perPage);
      pages.push(pageCharacters);
      const totalCount = characters.length;
      currentPage += 1;
      const nextPage = offset < totalCount ? true : false;
      const previousPage = currentPage > 1 ? true : false;
      this.setState({
        totalCount: totalCount,
        pageCount: Math.ceil(characters.length / perPage),
        data: pages,
        itemCount: pageCharacters.length,
        currentPage: currentPage,
        offset: pageCharacters.length,
        nextPage: nextPage,
        previousPage: previousPage,
      });
    });
  };

  handleNextPageClick = () => {
    const { characters } = this.props;
    let { offset, perPage, currentPage, totalCount, data } = this.state;
    const pageCharacters = characters.slice(offset, offset + perPage);
    data.push(pageCharacters);
    currentPage += 1;
    offset += pageCharacters.length;
    const nextPage = offset < totalCount ? true : false;
    const previousPage = currentPage > 1 ? true : false;
    this.setState({
      data: data,
      currentPage: currentPage,
      offset: offset,
      itemCount: pageCharacters.length,
      nextPage: nextPage,
      previousPage: previousPage,
    });
  };

  handlePreviousPageClick = () => {
    let { offset, currentPage, totalCount, data } = this.state;
    const itemCount = data.pop().length;
    currentPage -= 1;
    offset -= itemCount;
    const nextPage = offset < totalCount ? true : false;
    const previousPage = currentPage > 1 ? true : false;
    this.setState({
      data: data,
      itemCount: itemCount,
      currentPage: currentPage,
      offset: offset,
      nextPage: nextPage,
      previousPage: previousPage,
    });
  };

  render() {
    const { data, currentPage, nextPage, previousPage } = this.state;
    const characters = data[currentPage - 1];
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div
                  className="card bg-dark text-white border-0"
                  id="characters-img"
                >
                  <FadeIn duration="5">
                    <img
                      src={charactersBanner}
                      className="card-img"
                      width="100%"
                      alt="Characters"
                    />
                  </FadeIn>
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Tada delay="2" infinite={true}>
                      <h1 className="card-title">Starwars Characters</h1>
                    </Tada>
                  </div>
                </div>
              </ZoomIn>
              <section id="characters" className="characters">
                <div className="row d-flex justify-content-center mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <RubberBand>
                      <Shake delay="2">
                        <h2 className="text-white bottom-border">
                          Popular Characters
                        </h2>
                      </Shake>
                    </RubberBand>
                  </div>
                </div>
                <SlideInUp>
                  {characters && characters.length > 0 ? (
                    <div>
                      <div className="row row-cols-1 row-cols-md-3">
                        {characters.map((character) => {
                          const { id, name, birth_year, gender } = character;
                          return (
                            <div key={id} className="col mb-4">
                              <FadeIn duration="5">
                                <div className="card h-100 border-0">
                                  <img
                                    src={this.getRandomImage()}
                                    className="card-img-top"
                                    alt="Character"
                                  />
                                  <div className="card-body text-white card-dark">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">
                                      <span className="font-weight-bold">
                                        Birth year:
                                      </span>{" "}
                                      {birth_year}
                                    </p>
                                    <p className="card-text">
                                      <span className="font-weight-bold">
                                        Gender:
                                      </span>{" "}
                                      {gender === "n/a" ? "robot" : gender}
                                    </p>
                                    <Link
                                      to={`/characters/${id}`}
                                      className="d-flex justify-content-end align-items-center link-text"
                                    >
                                      Read more
                                      <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="ml-2"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </FadeIn>
                            </div>
                          );
                        })}
                      </div>
                      <div className="d-flex justify-content-center pt-3">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-view-more"
                            disabled={!previousPage}
                            onClick={() => this.handlePreviousPageClick()}
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            disabled={!nextPage}
                            className="btn btn-view-more"
                            onClick={() => this.handleNextPageClick()}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Spinner />
                  )}
                </SlideInUp>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Characters.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};

const mapStateToProps = ({ character: { characters } }) => ({
  characters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: (resources) => dispatch(fetchCharactersRequest(resources)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Characters)
);

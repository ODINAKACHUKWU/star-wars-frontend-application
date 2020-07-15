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
import { fetchPlanetsRequest } from "../../../actions/creators/planetActions";
import Spinner from "../elements/Spinner";

import "../../../assets/stylesheets/components/elements/background.scss";

import planetsBanner from "../../../assets/images/planets-banner.jpg";
import planet1 from "../../../assets/images/planet-1.jpg";
import planet2 from "../../../assets/images/planet-2.jpg";
import planet3 from "../../../assets/images/planet-3.jpg";

class Planets extends Component {
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
    const images = [planet1, planet2, planet3];
    return images[Math.floor(Math.random() * images.length)];
  };

  componentDidMount = () => {
    const { fetchPlanets } = this.props;
    fetchPlanets("planets").then(() => {
      const pages = [];
      const { planets } = this.props;
      let { offset, perPage, currentPage } = this.state;
      const pagePlanets = planets.slice(offset, offset + perPage);
      pages.push(pagePlanets);
      const totalCount = planets.length;
      currentPage += 1;
      const nextPage = offset < totalCount ? true : false;
      const previousPage = currentPage > 1 ? true : false;
      this.setState({
        totalCount: totalCount,
        pageCount: Math.ceil(planets.length / perPage),
        data: pages,
        itemCount: pagePlanets.length,
        currentPage: currentPage,
        offset: pagePlanets.length,
        nextPage: nextPage,
        previousPage: previousPage,
      });
    });
  };

  handleNextPageClick = () => {
    const { planets } = this.props;
    let { offset, perPage, currentPage, totalCount, data } = this.state;
    const pagePlanets = planets.slice(offset, offset + perPage);
    data.push(pagePlanets);
    currentPage += 1;
    offset += pagePlanets.length;
    const nextPage = offset < totalCount ? true : false;
    const previousPage = currentPage > 1 ? true : false;
    this.setState({
      data: data,
      currentPage: currentPage,
      offset: offset,
      itemCount: pagePlanets.length,
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
    const planets = data[currentPage - 1];
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div
                  className="card bg-dark text-white border-0"
                  id="planets-img"
                >
                  <FadeIn duration="5">
                    <img
                      src={planetsBanner}
                      className="card-img"
                      width="100%"
                      alt="Planets"
                    />
                  </FadeIn>
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Tada delay="2" infinite={true}>
                      <h1 className="card-title">Starwars Planets</h1>
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
                          Popular Planets
                        </h2>
                      </Shake>
                    </RubberBand>
                  </div>
                </div>
                <SlideInUp>
                  {planets && planets.length > 0 ? (
                    <div>
                      <div className="row row-cols-1 row-cols-md-3">
                        {planets.map((planet) => {
                          const { id, name, climate, population } = planet;
                          return (
                            <div key={id} className="col mb-4">
                              <FadeIn duration="5">
                                <div className="card h-100 border-0">
                                  <img
                                    src={planet1}
                                    className="card-img-top"
                                    alt="Planet"
                                  />
                                  <div className="card-body text-white card-dark">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">
                                      <span className="font-weight-bold">
                                        Temperature:
                                      </span>{" "}
                                      {climate}
                                    </p>
                                    <p className="card-text">
                                      <span className="font-weight-bold">
                                        Population:
                                      </span>{" "}
                                      {population}
                                    </p>
                                    <Link
                                      to={`/planets/${id}`}
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

Planets.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  planets: PropTypes.array.isRequired,
};

const mapStateToProps = ({ planet: { planets } }) => ({
  planets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: (resources) => dispatch(fetchPlanetsRequest(resources)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Planets)
);

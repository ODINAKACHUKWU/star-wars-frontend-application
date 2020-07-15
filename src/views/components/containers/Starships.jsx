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
import { fetchStarshipsRequest } from "../../../actions/creators/starshipActions";
import Spinner from "../elements/Spinner";

import "../../../assets/stylesheets/components/elements/background.scss";

import starshipsBanner from "../../../assets/images/starships-banner.jpg";
import starship1 from "../../../assets/images/starship-1.jpg";
import starship2 from "../../../assets/images/starship-2.jpg";
import starship3 from "../../../assets/images/starship-3.jpg";
import starship4 from "../../../assets/images/starship-4.jpg";

class Starships extends Component {
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
    const images = [starship1, starship2, starship3, starship4];
    return images[Math.floor(Math.random() * images.length)];
  };

  componentDidMount = () => {
    const { fetchStarships } = this.props;
    fetchStarships("starships").then(() => {
      const pages = [];
      const { starships } = this.props;
      let { offset, perPage, currentPage } = this.state;
      const pageStarships = starships.slice(offset, offset + perPage);
      pages.push(pageStarships);
      const totalCount = starships.length;
      currentPage += 1;
      const nextPage = offset < totalCount ? true : false;
      const previousPage = currentPage > 1 ? true : false;
      this.setState({
        totalCount: totalCount,
        pageCount: Math.ceil(starships.length / perPage),
        data: pages,
        itemCount: pageStarships.length,
        currentPage: currentPage,
        offset: pageStarships.length,
        nextPage: nextPage,
        previousPage: previousPage,
      });
    });
  };

  handleNextPageClick = () => {
    const { starships } = this.props;
    let { offset, perPage, currentPage, totalCount, data } = this.state;
    const pageStarships = starships.slice(offset, offset + perPage);
    data.push(pageStarships);
    currentPage += 1;
    offset += pageStarships.length;
    const nextPage = offset < totalCount ? true : false;
    const previousPage = currentPage > 1 ? true : false;
    this.setState({
      data: data,
      currentPage: currentPage,
      offset: offset,
      itemCount: pageStarships.length,
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
    const starships = data[currentPage - 1];
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div
                  className="card bg-dark text-white border-0"
                  id="starships-img"
                >
                  <FadeIn duration="5">
                    <img
                      src={starshipsBanner}
                      className="card-img"
                      width="100%"
                      alt="Starships"
                    />
                  </FadeIn>
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Tada delay="2" infinite={true}>
                      <h1 className="card-title">Starwars Starships</h1>
                    </Tada>
                  </div>
                </div>
              </ZoomIn>
              <section id="starships" className="starships">
                <div className="row d-flex justify-content-center mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <RubberBand>
                      <Shake delay="2">
                        <h2 className="text-white bottom-border">
                          Popular Starships
                        </h2>
                      </Shake>
                    </RubberBand>
                  </div>
                </div>
                <SlideInUp>
                  {starships && starships.length > 0 ? (
                    <div>
                      <div className="row row-cols-1 row-cols-md-3">
                        {starships.map((starship) => {
                          const { id, name, model, cargo_capacity } = starship;
                          return (
                            <div key={id} className="col mb-4">
                              <FadeIn duration="5">
                                <div className="card h-100 border-0">
                                  <img
                                    src={this.getRandomImage()}
                                    className="card-img-top"
                                    alt="Starship"
                                  />
                                  <div className="card-body text-white card-dark">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">
                                      <span className="font-weight-bold">
                                        Model:
                                      </span>{" "}
                                      {model}
                                    </p>
                                    <p className="card-text">
                                      <span className="font-weight-bold">
                                        Cargo capacity:
                                      </span>{" "}
                                      {cargo_capacity}
                                    </p>
                                    <Link
                                      to={`/starships/${id}`}
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

Starships.propTypes = {
  fetchStarships: PropTypes.func.isRequired,
  starships: PropTypes.array.isRequired,
};

const mapStateToProps = ({ starship: { starships } }) => ({
  starships,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStarships: (resources) => dispatch(fetchStarshipsRequest(resources)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Starships)
);

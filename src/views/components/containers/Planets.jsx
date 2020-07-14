import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FadeIn,
  SlideInUp,
  RubberBand,
  Tada,
  Shake,
  ZoomIn,
} from "../elements/Animations";
import fetchPlanetsRequest from "../../../actions/creators/planetActions";

import "../../../assets/stylesheets/components/elements/background.scss";

import planetsBanner from "../../../assets/images/planets-banner.jpg";
import planet1 from "../../../assets/images/planet-1.jpg";
import planet2 from "../../../assets/images/planet-2.jpg";
import planet3 from "../../../assets/images/planet-3.jpg";

class Planets extends Component {
  componentDidMount = () => {
    const { fetchPlanets } = this.props;
    fetchPlanets("planets");
  };

  render() {
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
                  <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                      <FadeIn duration="8">
                        <div className="card h-100 border-0">
                          <img
                            src={planet1}
                            className="card-img-top"
                            alt="Planet"
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Tatooine</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Temperature:
                              </span>{" "}
                              Arid
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Population:
                              </span>{" "}
                              2000000
                            </p>
                            <Link
                              to="/planets/1"
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
                  </div>
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

const mapStateToProps = ({ planet: planets }) => ({
  planets,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: (resources) => dispatch(fetchPlanetsRequest(resources)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Planets)
);

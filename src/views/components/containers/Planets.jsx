import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  FadeIn,
  SlideInUp,
  RuberBand,
  Tada,
} from "../../../helpers/animations";

import "../../../assets/stylesheets/components/elements/background.scss";

import planetsBanner from "../../../assets/images/planets-banner.jpg";
import planet1 from "../../../assets/images/planet-1.jpg";
import planet2 from "../../../assets/images/planet-2.jpg";
import planet3 from "../../../assets/images/planet-3.jpg";

class Characters extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <FadeIn>
                <div
                  className="card bg-dark text-white border-0"
                  id="planets-img"
                >
                  <img
                    src={planetsBanner}
                    className="card-img"
                    width="100%"
                    alt="Planets"
                  />
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Tada>
                      <h1 className="card-title">Starwars Planets</h1>
                    </Tada>
                  </div>
                </div>
              </FadeIn>
              <section id="characters" className="characters">
                <div className="row d-flex justify-content-center mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <RuberBand>
                      <h2 className="text-white bottom-border">
                        Popular Planets
                      </h2>
                    </RuberBand>
                  </div>
                </div>
                <SlideInUp>
                  <FadeIn>
                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col mb-4">
                        <div className="card h-100 border-0">
                          <img
                            src={planet1}
                            className="card-img-top"
                            alt="..."
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
                              to="#"
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
                      </div>
                      <div className="col mb-4">
                        <div className="card h-100 border-0">
                          <img
                            src={planet2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Alderaan</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Temperature:
                              </span>{" "}
                              Temperate
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Population:
                              </span>{" "}
                              5000000000
                            </p>
                            <Link
                              to="#"
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
                      </div>
                      <div className="col mb-4">
                        <div className="card h-100 border-0">
                          <img
                            src={planet3}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Yavin IV</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Temperature:
                              </span>{" "}
                              Temperate, Tropical
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Population:
                              </span>{" "}
                              1000
                            </p>
                            <Link
                              to="#"
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
                      </div>
                    </div>
                  </FadeIn>
                </SlideInUp>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;

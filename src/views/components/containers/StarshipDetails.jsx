import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  FadeIn,
  ZoomIn,
  SlideInUp,
  RuberBand,
  SlideInLeft,
  SlideInRight,
} from "../../../helpers/animations";

import "../../../assets/stylesheets/components/elements/background.scss";

import starship1 from "../../../assets/images/starship-1.jpg";
import starship2 from "../../../assets/images/starship-2.jpg";
import starship3 from "../../../assets/images/starship-3.jpg";
import starship4 from "../../../assets/images/starship-4.jpg";

class PlanetDetails extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div className="card border-0" id="planet-img">
                  <img
                    src={starship1}
                    className="card-img-top img-fluid"
                    width="100%"
                    alt="PlanetDetails"
                  />
                  <div className="card-body text-white p-5 card-dark">
                    <SlideInRight>
                      <FadeIn>
                        <h5 className="card-title mb-4 text-center">
                          CR90 corvette
                        </h5>
                        <div className="row d-flex">
                          <div className="col-md-4">
                            <p className="card-text">
                              <span className="font-weight-bold">Model:</span>{" "}
                              182
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Manufacturer:
                              </span>{" "}
                              182
                            </p>
                          </div>
                          <div className="col-md-4">
                            <p className="card-text">
                              <span className="font-weight-bold">Length:</span>{" "}
                              182
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Maximun atmosphering speed:
                              </span>{" "}
                              182
                            </p>
                          </div>
                          <div className="col-md-4">
                            <p className="card-text">
                              <span className="font-weight-bold">Crew:</span>{" "}
                              182
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Pilots:</span>{" "}
                              182
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Passengers:
                              </span>{" "}
                              182
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Cargo capacity:
                              </span>{" "}
                              182
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Hyperdrive rating:
                              </span>{" "}
                              182
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </SlideInRight>
                  </div>
                </div>
              </ZoomIn>
              <section id="characters" className="characters">
                <div className="row d-flex justify-content-center mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <RuberBand>
                      <h2 className="text-white bottom-border">
                        Popular Starships
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
                            src={starship1}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">CR90 corvette</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">Model:</span>{" "}
                              CR90 corvette
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Cargo capacity:
                              </span>{" "}
                              3000000
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
                            src={starship2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">CR90 corvette</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">Model:</span>{" "}
                              CR90 corvette
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Cargo capacity:
                              </span>{" "}
                              3000000
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
                            src={starship3}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">
                              Sentinel-className landing craft
                            </h5>
                            <p className="card-text">
                              <span className="font-weight-bold">Model:</span>{" "}
                              Sentinel-className landing craft
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Cargo capacity:
                              </span>{" "}
                              180000
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
                            src={starship4}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Star destroyer</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">Model:</span>{" "}
                              Imperial I-className Star Destroyer
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Cargo capacity:
                              </span>{" "}
                              150000000
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

export default PlanetDetails;

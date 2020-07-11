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
  render() {
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <FadeIn>
                <div
                  className="card bg-dark text-white border-0"
                  id="characters-img"
                >
                  <img
                    src={charactersBanner}
                    className="card-img"
                    width="100%"
                    alt="Characters"
                  />
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <Tada>
                      <h1 className="card-title">Starwars Characters</h1>
                    </Tada>
                  </div>
                </div>
              </FadeIn>
              <section id="characters" className="characters">
                <div className="row d-flex justify-content-center mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <RuberBand>
                      <h2 className="text-white bottom-border">
                        Popular Characters
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
                            src={character1}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Luke Kymberly</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Male
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
                            src={character2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Bernard Charles</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              20AAZ
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Female
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
                            src={character3}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Bryan Demetris</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Male
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
                            src={character4}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Bryan Demetris</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Male
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
                            src={character5}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Bryan Demetris</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Male
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
                            src={character6}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Bryan Demetris</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Male
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
                            src={character7}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Bryan Demetris</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Male
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
                            src={character8}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body text-white card-dark">
                            <h5 className="card-title">Bryan Demetris</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              Male
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

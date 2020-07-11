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

import character1 from "../../../assets/images/character-1.jpg";
import character2 from "../../../assets/images/character-2.jpg";
import character3 from "../../../assets/images/character-3.jpg";
import character4 from "../../../assets/images/character-4.jpg";
import character5 from "../../../assets/images/character-5.png";
import character6 from "../../../assets/images/character-6.jpg";
import character7 from "../../../assets/images/character-7.jpg";
import character8 from "../../../assets/images/character-8.png";

class CharacterDetails extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div class="card border-0" id="character-img">
                  <div class="row d-flex align-items-center no-gutters card-dark">
                    <div class="col-md-4">
                      <FadeIn>
                        <SlideInLeft>
                          <img
                            src={character1}
                            className="card-img img-fluid"
                            width="100%"
                            alt="CharacterDetails"
                          />
                        </SlideInLeft>
                      </FadeIn>
                    </div>
                    <div class="col-md-8">
                      <SlideInRight>
                        <div class="card-body text-white pl-5">
                          <h5 class="card-title mb-4">Bernard Charles</h5>
                          <p class="card-text">
                            <span className="font-weight-bold">Height:</span>{" "}
                            182
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Mass:</span> 96
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">
                              Hair color:
                            </span>{" "}
                            Auburn, white
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Skin:</span> Fair
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Eye color:</span>{" "}
                            Blue-gray
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">
                              Birth year:
                            </span>{" "}
                            20AAZ
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Gender:</span>{" "}
                            Female
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Films:</span> 20
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Vehicles:</span>{" "}
                            8
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Starships:</span>{" "}
                            5
                          </p>
                        </div>
                      </SlideInRight>
                    </div>
                  </div>
                </div>
              </ZoomIn>
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
                    <div class="row row-cols-1 row-cols-md-3">
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character1}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Luke Kymberly</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p class="card-text">
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
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character2}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Bernard Charles</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              20AAZ
                            </p>
                            <p class="card-text">
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
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character3}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Bryan Demetris</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p class="card-text">
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
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character4}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Bryan Demetris</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p class="card-text">
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
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character5}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Bryan Demetris</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p class="card-text">
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
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character6}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Bryan Demetris</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p class="card-text">
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
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character7}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Bryan Demetris</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p class="card-text">
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
                      <div class="col mb-4">
                        <div class="card h-100 border-0">
                          <img
                            src={character8}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Bryan Demetris</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              19BBY
                            </p>
                            <p class="card-text">
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

export default CharacterDetails;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  FadeIn,
  ZoomIn,
  SlideInUp,
  RubberBand,
  SlideInLeft,
  SlideInRight,
  Shake,
} from "../elements/Animations";

import "../../../assets/stylesheets/components/elements/background.scss";

import planet1 from "../../../assets/images/planet-1.jpg";
import planet2 from "../../../assets/images/planet-2.jpg";
import planet3 from "../../../assets/images/planet-3.jpg";

class PlanetDetails extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div class="card border-0" id="planet-img">
                  <div class="row d-flex align-items-center no-gutters card-dark">
                    <div class="col-md-4">
                      <FadeIn>
                        <SlideInLeft>
                          <img
                            src={planet1}
                            className="card-img img-fluid"
                            width="100%"
                            alt="PlanetDetails"
                          />
                        </SlideInLeft>
                      </FadeIn>
                    </div>
                    <div class="col-md-8">
                      <SlideInRight>
                        <div class="card-body text-white pl-5">
                          <h5 class="card-title mb-4">Tatooine</h5>
                          <p class="card-text">
                            <span className="font-weight-bold">
                              Rotation period:
                            </span>{" "}
                            182
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">
                              Orbital period:
                            </span>{" "}
                            96
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Diameter:</span>{" "}
                            Auburn, white
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Climate:</span>{" "}
                            Fair
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Gravity:</span>{" "}
                            Blue-gray
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">Terrain:</span>{" "}
                            20AAZ
                          </p>
                          <p class="card-text">
                            <span className="font-weight-bold">
                              Population:
                            </span>{" "}
                            Female
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
                  <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                      <FadeIn duration="8">
                        <div class="card h-100 border-0">
                          <img src={planet1} class="card-img-top" alt="..." />
                          <div class="card-body text-white card-dark">
                            <h5 class="card-title">Tatooine</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">Climate:</span>{" "}
                              Arid
                            </p>
                            <p class="card-text">
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

export default PlanetDetails;

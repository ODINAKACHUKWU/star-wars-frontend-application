import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  FadeIn,
  SlideInUp,
  RubberBand,
  Tada,
  Shake,
  ZoomIn,
} from "../elements/Animations";

import "../../../assets/stylesheets/components/elements/background.scss";

import starshipsBanner from "../../../assets/images/starships-banner.jpg";
import starship1 from "../../../assets/images/starship-1.jpg";
import starship2 from "../../../assets/images/starship-2.jpg";
import starship3 from "../../../assets/images/starship-3.jpg";
import starship4 from "../../../assets/images/starship-4.jpg";

class Characters extends Component {
  render() {
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
              <section id="characters" className="characters">
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
                  <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                      <FadeIn duration="8">
                        <div className="card h-100 border-0">
                          <img
                            src={starship1}
                            className="card-img-top"
                            alt="Starship"
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
                              to="/starships/1"
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

export default Characters;

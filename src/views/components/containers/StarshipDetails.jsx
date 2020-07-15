import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FadeIn, ZoomIn, SlideInRight } from "../elements/Animations";
import { fetchStarshipRequest } from "../../../actions/creators/starshipActions";

import "../../../assets/stylesheets/components/elements/background.scss";

import starship1 from "../../../assets/images/starship-1.jpg";
import starship2 from "../../../assets/images/starship-2.jpg";
import starship3 from "../../../assets/images/starship-3.jpg";
import starship4 from "../../../assets/images/starship-4.jpg";

class StarshipDetails extends Component {
  componentDidMount() {
    const { fetchStarship } = this.props;
    const starshipId = this.getStarshipId();
    fetchStarship("starships", starshipId);
  }

  getRandomImage = () => {
    const images = [starship1, starship2, starship3, starship4];
    return images[Math.floor(Math.random() * images.length)];
  };

  getStarshipId = () => {
    const urlDetails = window.location.pathname.split("/");
    return urlDetails[urlDetails.length - 1];
  };

  render() {
    const {
      starship: {
        name,
        model,
        manufacturer,
        hyperdrive_rating,
        length,
        max_atmosphering_speed,
        cargo_capacity,
        crew,
        pilots,
        passengers,
      },
    } = this.props;
    return (
      <div className="overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div className="details-card">
                  <div className="card border-0 mb-4" id="planet-img">
                    <img
                      src={this.getRandomImage()}
                      className="card-img-top img-fluid"
                      width="100%"
                      alt="StarshipDetails"
                    />
                    <div className="card-body text-white p-5 card-dark">
                      <SlideInRight>
                        <FadeIn>
                          <h5 className="card-title mb-4 text-center">
                            {name}
                          </h5>
                          <div className="row d-flex">
                            <div className="col-md-4">
                              <p className="card-text">
                                <span className="font-weight-bold">Model:</span>{" "}
                                {model}
                              </p>
                              <p className="card-text">
                                <span className="font-weight-bold">
                                  Manufacturer:
                                </span>{" "}
                                {manufacturer}
                              </p>
                              <p className="card-text">
                                <span className="font-weight-bold">
                                  Hyperdrive rating:
                                </span>{" "}
                                {hyperdrive_rating}
                              </p>
                            </div>
                            <div className="col-md-4">
                              <p className="card-text">
                                <span className="font-weight-bold">
                                  Length:
                                </span>{" "}
                                {length}
                              </p>
                              <p className="card-text">
                                <span className="font-weight-bold">
                                  Maximun atmosphering speed:
                                </span>{" "}
                                {max_atmosphering_speed}
                              </p>
                              <p className="card-text">
                                <span className="font-weight-bold">
                                  Cargo capacity:
                                </span>{" "}
                                {cargo_capacity}
                              </p>
                            </div>
                            <div className="col-md-4">
                              <p className="card-text">
                                <span className="font-weight-bold">Crew:</span>{" "}
                                {crew}
                              </p>
                              <p className="card-text">
                                <span className="font-weight-bold">
                                  Pilots:
                                </span>{" "}
                                {pilots}
                              </p>
                              <p className="card-text">
                                <span className="font-weight-bold">
                                  Passengers:
                                </span>{" "}
                                {passengers}
                              </p>
                            </div>
                          </div>
                        </FadeIn>
                      </SlideInRight>
                    </div>
                  </div>
                </div>
              </ZoomIn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ starship: { starship } }) => ({
  starship,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStarship: (resources, resourceId) =>
    dispatch(fetchStarshipRequest(resources, resourceId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StarshipDetails)
);

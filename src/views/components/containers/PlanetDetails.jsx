import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  FadeIn,
  ZoomIn,
  SlideInLeft,
  SlideInRight,
} from "../elements/Animations";
import { fetchPlanetRequest } from "../../../actions/creators/planetActions";

import "../../../assets/stylesheets/components/elements/background.scss";

import planet1 from "../../../assets/images/planet-1.jpg";
import planet2 from "../../../assets/images/planet-2.jpg";
import planet3 from "../../../assets/images/planet-3.jpg";

class PlanetDetails extends Component {
  componentDidMount() {
    const { fetchPlanet } = this.props;
    const planetId = this.getPlanetId();
    fetchPlanet("planets", planetId);
  }

  getRandomImage = () => {
    const images = [planet1, planet2, planet3];
    return images[Math.floor(Math.random() * images.length)];
  };

  getPlanetId = () => {
    const urlDetails = window.location.pathname.split("/");
    return urlDetails[urlDetails.length - 1];
  };

  render() {
    const {
      planet: {
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        population,
      },
    } = this.props;
    return (
      <div className="intro-overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div className="details-card">
                  <div className="card border-0" id="planet-img">
                    <div className="row d-flex align-items-center no-gutters card-dark">
                      <div className="col-md-4">
                        <FadeIn>
                          <SlideInLeft>
                            <img
                              src={this.getRandomImage()}
                              className="card-img img-fluid"
                              width="100%"
                              alt="PlanetDetails"
                            />
                          </SlideInLeft>
                        </FadeIn>
                      </div>
                      <div className="col-md-8">
                        <SlideInRight>
                          <div className="card-body text-white pl-5">
                            <h5 className="card-title mb-4">{name}</h5>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Rotation period:
                              </span>{" "}
                              {rotation_period}
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Orbital period:
                              </span>{" "}
                              {orbital_period}
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Diameter:
                              </span>{" "}
                              {diameter}
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Temperature:
                              </span>{" "}
                              {climate}
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Gravity:</span>{" "}
                              {gravity}
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">Terrain:</span>{" "}
                              {terrain}
                            </p>
                            <p className="card-text">
                              <span className="font-weight-bold">
                                Population:
                              </span>{" "}
                              {population}
                            </p>
                          </div>
                        </SlideInRight>
                      </div>
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

const mapStateToProps = ({ planet: { planet } }) => ({
  planet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanet: (resources, resourceId) =>
    dispatch(fetchPlanetRequest(resources, resourceId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlanetDetails)
);

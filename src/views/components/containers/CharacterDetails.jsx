import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  FadeIn,
  ZoomIn,
  SlideInLeft,
  SlideInRight,
} from "../elements/Animations";
import { fetchCharacterRequest } from "../../../actions/creators/characterActions";

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
  componentDidMount() {
    const { fetchCharacter } = this.props;
    const characterId = this.getCharacterId();
    fetchCharacter("people", characterId);
  }

  getRandomImage = () => {
    const images = [
      character1,
      character2,
      character3,
      character4,
      character5,
      character6,
      character7,
      character8,
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  getCharacterId = () => {
    const urlDetails = window.location.pathname.split("/");
    return urlDetails[urlDetails.length - 1];
  };

  render() {
    const {
      character: {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        films,
        vehicles,
        starships,
      },
    } = this.props;
    return (
      <div className="intro-overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              <ZoomIn>
                <div className="details-card">
                  <div class="card border-0 mb-3">
                    <div class="row d-flex align-items-center no-gutters card-dark">
                      <div class="col-md-4">
                        <FadeIn>
                          <SlideInLeft>
                            <img
                              src={this.getRandomImage()}
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
                            <h5 class="card-title mb-4">{name}</h5>
                            <p class="card-text">
                              <span className="font-weight-bold">Height:</span>{" "}
                              {height}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">Mass:</span>{" "}
                              {mass}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Hair color:
                              </span>{" "}
                              {hair_color}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Skin color:
                              </span>{" "}
                              {skin_color}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Eye color:
                              </span>{" "}
                              {eye_color}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Birth year:
                              </span>{" "}
                              {birth_year}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">Gender:</span>{" "}
                              {gender === "n/a" ? "robot" : gender}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">Films:</span>{" "}
                              {films}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Vehicles:
                              </span>{" "}
                              {vehicles}
                            </p>
                            <p class="card-text">
                              <span className="font-weight-bold">
                                Starships:
                              </span>{" "}
                              {starships}
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

const mapStateToProps = ({ character: { character } }) => ({
  character,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacter: (resources, resourceId) =>
    dispatch(fetchCharacterRequest(resources, resourceId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CharacterDetails)
);
